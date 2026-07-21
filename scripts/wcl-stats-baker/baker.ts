import {
  GUILD_DIRECTORY_PAGE_SIZE,
  GUILD_REPORTS_PAGE_SIZE,
  MAX_GUILD_SEARCH_PAGES,
  RAID_SIZE,
  RANKINGS_PER_PAGE,
  RANK_TARGETS,
  TRACKED_GUILDS,
} from './config';
import type { WclStatsApi } from './api';
import { GET_GUILD_DIRECTORY, GET_GUILD_REPORT_RANKINGS, GET_SPEED_RANKINGS } from './queries';
import { isGuildEntry, mergeRankingRows, normalizeKey, parseRank, rankingEntryToRow, unresolvedGuildRow } from './normalize';
import type { RawRankingEntry, WclStatsGuildConfig, WclStatsRaid, WclStatsRaidConfig, WclStatsRow } from './types';

interface RankingPageResponse {
  worldData?: { encounter?: { fightRankings?: unknown } };
}

const guildDirectoryCache = new WeakMap<WclStatsApi, Promise<Map<string, number>>>();

export async function bakeRaid(api: WclStatsApi, raid: WclStatsRaidConfig): Promise<WclStatsRaid> {
  const pageCache = new Map<number, RawRankingEntry[]>();
  const targetRows: WclStatsRow[] = [];

  for (const targetRank of RANK_TARGETS) {
    const page = Math.ceil(targetRank / RANKINGS_PER_PAGE);
    const entries = await getRankingPage(api, raid, page, pageCache);
    const entry = entries[targetRank - ((page - 1) * RANKINGS_PER_PAGE) - 1];
    const row = entry && rankingEntryToRow(entry, targetRank);
    if (!row || row.rank !== targetRank) throw new Error(`${raid.name}: required rank ${targetRank} was not returned`);
    targetRows.push(row);
  }

  const foundGuildRows = new Map<string, WclStatsRow>();
  for (let page = 1; page <= MAX_GUILD_SEARCH_PAGES && foundGuildRows.size < TRACKED_GUILDS.length; page += 1) {
    const entries = await getRankingPage(api, raid, page, pageCache);
    for (const guild of TRACKED_GUILDS) {
      const key = normalizeKey(guild.name);
      if (foundGuildRows.has(key)) continue;
      const index = entries.findIndex(entry => isGuildEntry(entry, guild));
      if (index >= 0) {
        const row = rankingEntryToRow(entries[index], ((page - 1) * RANKINGS_PER_PAGE) + index + 1, guild);
        if (row) foundGuildRows.set(key, row);
      }
    }
    if (entries.length < RANKINGS_PER_PAGE) break;
  }

  if (foundGuildRows.size < TRACKED_GUILDS.length) {
    const directory = await fetchGuildDirectory(api);
    for (const guild of TRACKED_GUILDS) {
      const key = normalizeKey(guild.name);
      if (foundGuildRows.has(key)) continue;
      const guildId = directory.get(key);
      const row = guildId ? await fetchGuildBestRank(api, raid, guild, guildId) : null;
      foundGuildRows.set(key, row ?? unresolvedGuildRow(guild));
    }
  }

  return {
    id: raid.id,
    name: raid.name,
    encounterId: raid.encounterId,
    rows: mergeRankingRows(targetRows, [...foundGuildRows.values()], TRACKED_GUILDS),
  };
}

async function getRankingPage(
  api: WclStatsApi,
  raid: WclStatsRaidConfig,
  page: number,
  cache: Map<number, RawRankingEntry[]>,
): Promise<RawRankingEntry[]> {
  if (cache.has(page)) return cache.get(page) ?? [];
  const data = await api.query<RankingPageResponse>(GET_SPEED_RANKINGS, { encounterId: raid.encounterId, page, raidSize: RAID_SIZE });
  const entries = extractEntries(data.worldData?.encounter?.fightRankings).map((entry, index) => ({
    ...entry,
    rank: entry.rank ?? entry.ranking ?? entry.position ?? ((page - 1) * RANKINGS_PER_PAGE) + index + 1,
  }));
  cache.set(page, entries);
  return entries;
}

async function fetchGuildDirectory(api: WclStatsApi): Promise<Map<string, number>> {
  let request = guildDirectoryCache.get(api);
  if (!request) {
    request = loadGuildDirectory(api);
    guildDirectoryCache.set(api, request);
    void request.catch(() => guildDirectoryCache.delete(api));
  }
  return request;
}

async function loadGuildDirectory(api: WclStatsApi): Promise<Map<string, number>> {
  const serverId = TRACKED_GUILDS[0]?.wclServerId;
  const directory = new Map<string, number>();
  let page = 1;
  let lastPage = 1;
  do {
    const data = await api.query<{ guildData?: { guilds?: { last_page?: number; data?: Array<{ id: number; name: string }> } } }>(
      GET_GUILD_DIRECTORY,
      { limit: GUILD_DIRECTORY_PAGE_SIZE, page, serverId: serverId ?? null },
    );
    const guilds = data.guildData?.guilds;
    for (const guild of guilds?.data ?? []) directory.set(normalizeKey(guild.name), guild.id);
    lastPage = guilds?.last_page ?? page;
    page += 1;
  } while (page <= lastPage);
  return directory;
}

async function fetchGuildBestRank(
  api: WclStatsApi,
  raid: WclStatsRaidConfig,
  guild: WclStatsGuildConfig,
  guildId: number,
): Promise<WclStatsRow | null> {
  let best: WclStatsRow | null = null;
  let page = 1;
  let lastPage = 1;
  do {
    const data = await api.query<{ reportData?: { reports?: { last_page?: number; data?: Array<{ code?: string; rankings?: unknown }> } } }>(
      GET_GUILD_REPORT_RANKINGS,
      { guildId, zoneId: raid.zoneId, limit: GUILD_REPORTS_PAGE_SIZE, page, encounterId: raid.encounterId },
    );
    const reports = data.reportData?.reports;
    for (const report of reports?.data ?? []) {
      for (const ranking of extractEntries(report.rankings)) {
        const speed = objectValue(ranking['speed']);
        const rank = parseRank(speed?.['rank'] ?? speed?.['best'] ?? ranking.rank);
        if (!rank) continue;
        const enriched: RawRankingEntry = {
          ...ranking,
          rank,
          reportCode: ranking.reportCode ?? report.code,
        };
        const row = rankingEntryToRow(enriched, rank, guild);
        if (row && (best?.rank === null || typeof best?.rank === 'undefined' || rank < best.rank)) best = row;
      }
    }
    lastPage = reports?.last_page ?? page;
    page += 1;
  } while (page <= lastPage);
  return best;
}

export function extractEntries(value: unknown): RawRankingEntry[] {
  if (Array.isArray(value)) return value.filter(isObject) as RawRankingEntry[];
  if (!isObject(value)) return [];
  for (const key of ['rankings', 'entries', 'data', 'results']) {
    const candidate = value[key];
    if (Array.isArray(candidate)) return candidate.filter(isObject) as RawRankingEntry[];
  }
  return [];
}

function objectValue(value: unknown): Record<string, unknown> | null {
  return isObject(value) ? value : null;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
