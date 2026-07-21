import type { RawRankingEntry, WclStatsGuildConfig, WclStatsRow } from './types';

const WCL_BASE_URL = 'https://fresh.warcraftlogs.com';

export function normalizeKey(value: unknown): string {
  return String(value ?? '')
    .trim()
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLocaleLowerCase('en-US')
    .replace(/[\s_-]+/g, '');
}

export function parseRank(value: unknown): number | null {
  if (value === null || typeof value === 'undefined') return null;
  const rank = Number(String(value).replace(/^~/, ''));
  return Number.isInteger(rank) && rank > 0 ? rank : null;
}

export function parseDurationMs(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) return null;
  return Math.round(value > 10_000 ? value : value * 1_000);
}

export function guildUrl(region: string, realm: string, guildName: string): string {
  return `${WCL_BASE_URL}/guild/${encodeURIComponent(region.toLowerCase())}/${encodeURIComponent(realm.toLowerCase())}/${encodeURIComponent(guildName.toLowerCase())}`;
}

export function reportUrl(entry: RawRankingEntry): string | null {
  const code = stringValue(entry.report?.code) ?? stringValue(entry.reportCode);
  if (!code) return null;
  const fight = parseRank(entry.fight ?? entry.fightId);
  return fight
    ? `${WCL_BASE_URL}/reports/${encodeURIComponent(code)}#fight=${fight}`
    : `${WCL_BASE_URL}/reports/${encodeURIComponent(code)}`;
}

export function rankingEntryToRow(
  entry: RawRankingEntry,
  fallbackRank?: number,
  configuredGuild?: WclStatsGuildConfig,
): WclStatsRow | null {
  const guildName = configuredGuild?.name ?? entryGuildName(entry);
  if (!guildName) return null;
  const region = configuredGuild?.region ?? 'eu';
  const realm = configuredGuild?.realm ?? entryRealm(entry);
  if (!realm) return null;

  return {
    rank: parseRank(entry.rank ?? entry.ranking ?? entry.position ?? fallbackRank),
    guildName,
    displayName: configuredGuild?.displayName ?? guildName,
    faction: configuredGuild?.faction ?? null,
    region,
    realm,
    durationMs: parseDurationMs(entry.duration ?? entry.totalTime),
    guildUrl: guildUrl(region, realm, guildName),
    reportUrl: reportUrl(entry),
    guildGroup: configuredGuild?.group ?? 'milestone',
  };
}

export function unresolvedGuildRow(guild: WclStatsGuildConfig): WclStatsRow {
  return {
    rank: null,
    guildName: guild.name,
    displayName: guild.displayName,
    faction: guild.faction,
    region: guild.region,
    realm: guild.realm,
    durationMs: null,
    guildUrl: guildUrl(guild.region, guild.realm, guild.name),
    reportUrl: null,
    guildGroup: guild.group,
  };
}

export function mergeRankingRows(
  targetRows: readonly WclStatsRow[],
  guildRows: readonly WclStatsRow[],
  guildOrder: readonly WclStatsGuildConfig[],
): WclStatsRow[] {
  const guildOrderByKey = new Map(guildOrder.map((guild, index) => [normalizeKey(guild.name), index]));
  const rowsByGuild = new Map<string, WclStatsRow>();

  for (const row of [...targetRows, ...guildRows]) {
    const key = normalizeKey(row.guildName);
    const existing = rowsByGuild.get(key);
    if (!existing || row.guildGroup !== 'milestone' || (existing.rank === null && row.rank !== null)) {
      rowsByGuild.set(key, row);
    }
  }

  return [...rowsByGuild.values()].sort((a, b) => {
    if (a.rank !== null && b.rank !== null) return a.rank - b.rank;
    if (a.rank !== null) return -1;
    if (b.rank !== null) return 1;
    return (guildOrderByKey.get(normalizeKey(a.guildName)) ?? Number.MAX_SAFE_INTEGER)
      - (guildOrderByKey.get(normalizeKey(b.guildName)) ?? Number.MAX_SAFE_INTEGER);
  });
}

export function isGuildEntry(entry: RawRankingEntry, guild: WclStatsGuildConfig): boolean {
  return normalizeKey(entryGuildName(entry)) === normalizeKey(guild.name)
    && normalizeKey(entryRealm(entry)) === normalizeKey(guild.realm);
}

function entryGuildName(entry: RawRankingEntry): string | null {
  return stringValue(entry.guild?.name) ?? stringValue(entry.guildName) ?? stringValue(entry.name);
}

function entryRealm(entry: RawRankingEntry): string | null {
  return stringValue(entry.guild?.server?.slug)
    ?? stringValue(entry.guild?.server?.name)
    ?? stringValue(entry.server?.slug)
    ?? stringValue(entry.server?.name)
    ?? stringValue(entry.realm);
}

function stringValue(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}
