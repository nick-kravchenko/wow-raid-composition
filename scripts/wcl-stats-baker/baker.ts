import {
  GUILD_REPORTS_PAGE_SIZE,
  MAX_GUILD_SEARCH_PAGES,
  RAID_SIZE,
  RANKINGS_PER_PAGE,
  RANK_TARGETS,
  TRACKED_GUILDS,
} from './config';
import type { WclStatsApi } from './api';
import { GET_GUILD_BY_NAME, GET_SPEED_RANKINGS, buildGuildReportRankingsQuery, reportRankingsAlias } from './queries';
import { isGuildEntry, mergeRankingRows, normalizeKey, parseRank, rankingEntryToRow, unresolvedGuildRow } from './normalize';
import type { RawRankingEntry, WclStatsGuildConfig, WclStatsRaid, WclStatsRaidConfig, WclStatsRow } from './types';

interface RankingPageResponse {
  worldData?: { encounter?: { fightRankings?: unknown } };
}

const guildIdCache = new WeakMap<WclStatsApi, Map<string, Promise<number | null>>>();

export async function bakeRaids(api: WclStatsApi, raids: readonly WclStatsRaidConfig[]): Promise<WclStatsRaid[]> {
  const targetRowsByRaid = new Map<string, WclStatsRow[]>();
  const foundGuildRowsByRaid = new Map<string, Map<string, WclStatsRow>>();

  for (const raid of raids) {
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
    targetRowsByRaid.set(raid.id, targetRows);

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
    foundGuildRowsByRaid.set(raid.id, foundGuildRows);
  }

  await resolveMissingGuildRows(api, raids, foundGuildRowsByRaid);

  return raids.map(raid => ({
    id: raid.id,
    name: raid.name,
    encounterId: raid.encounterId,
    rows: mergeRankingRows(targetRowsByRaid.get(raid.id) ?? [], [...(foundGuildRowsByRaid.get(raid.id)?.values() ?? [])], TRACKED_GUILDS),
  }));
}

async function resolveMissingGuildRows(
  api: WclStatsApi,
  raids: readonly WclStatsRaidConfig[],
  foundGuildRowsByRaid: Map<string, Map<string, WclStatsRow>>,
): Promise<void> {
  for (const zoneRaids of groupRaidsByZone(raids)) {
    for (const guild of TRACKED_GUILDS) {
      const key = normalizeKey(guild.name);
      const needingRaids = zoneRaids.filter(raid => !foundGuildRowsByRaid.get(raid.id)?.has(key));
      if (needingRaids.length === 0) continue;

      const guildId = await resolveGuildId(api, guild);
      const bestByRaidId = guildId ? await fetchGuildBestRanksByZone(api, zoneRaids[0].zoneId, needingRaids, guild, guildId) : new Map();
      for (const raid of needingRaids) {
        const row = bestByRaidId.get(raid.id) ?? null;
        foundGuildRowsByRaid.get(raid.id)?.set(key, row ?? unresolvedGuildRow(guild));
      }
    }
  }
}

function groupRaidsByZone(raids: readonly WclStatsRaidConfig[]): WclStatsRaidConfig[][] {
  const byZone = new Map<number, WclStatsRaidConfig[]>();
  for (const raid of raids) {
    const group = byZone.get(raid.zoneId) ?? [];
    group.push(raid);
    byZone.set(raid.zoneId, group);
  }
  return [...byZone.values()];
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

async function resolveGuildId(api: WclStatsApi, guild: WclStatsGuildConfig): Promise<number | null> {
  let cache = guildIdCache.get(api);
  if (!cache) {
    cache = new Map();
    guildIdCache.set(api, cache);
  }
  const key = `${normalizeKey(guild.name)}|${normalizeKey(guild.realm)}`;
  let request = cache.get(key);
  if (!request) {
    request = loadGuildId(api, guild);
    cache.set(key, request);
    void request.catch(() => cache?.delete(key));
  }
  return request;
}

async function loadGuildId(api: WclStatsApi, guild: WclStatsGuildConfig): Promise<number | null> {
  const data = await api.query<{ guildData?: { guild?: { id?: number } | null } }>(GET_GUILD_BY_NAME, {
    name: guild.name,
    serverSlug: guild.realm,
    serverRegion: guild.region,
  });
  return data.guildData?.guild?.id ?? null;
}

async function fetchGuildBestRanksByZone(
  api: WclStatsApi,
  zoneId: number,
  raids: readonly WclStatsRaidConfig[],
  guild: WclStatsGuildConfig,
  guildId: number,
): Promise<Map<string, WclStatsRow | null>> {
  const best = new Map<string, WclStatsRow | null>(raids.map(raid => [raid.id, null]));
  const query = buildGuildReportRankingsQuery(raids.map(raid => raid.id));
  const variables: Record<string, unknown> = { guildId, zoneId, limit: GUILD_REPORTS_PAGE_SIZE };
  for (const raid of raids) variables[`encounterId_${raid.id}`] = raid.encounterId;

  let page = 1;
  let lastPage = 1;
  do {
    const data = await api.query<{ reportData?: { reports?: { last_page?: number; data?: Array<Record<string, unknown>> } } }>(
      query,
      { ...variables, page },
    );
    const reports = data.reportData?.reports;
    for (const report of reports?.data ?? []) {
      const reportCode = typeof report['code'] === 'string' ? report['code'] : undefined;
      for (const raid of raids) {
        const current = best.get(raid.id) ?? null;
        for (const ranking of extractEntries(report[reportRankingsAlias(raid.id)])) {
          const speed = objectValue(ranking['speed']);
          const rank = parseRank(speed?.['rank'] ?? speed?.['best'] ?? ranking.rank);
          if (!rank) continue;
          const enriched: RawRankingEntry = { ...ranking, rank, reportCode: ranking.reportCode ?? reportCode };
          const row = rankingEntryToRow(enriched, rank, guild);
          if (row && (current === null || rank < current.rank!)) best.set(raid.id, row);
        }
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
