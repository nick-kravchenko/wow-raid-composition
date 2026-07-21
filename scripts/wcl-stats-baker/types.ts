export type WclStatsRaidId = 'ssc' | 'tk';

export interface WclStatsGuildConfig {
  name: string;
  displayName: string;
  faction: 'Alliance' | 'Horde';
  region: string;
  realm: string;
  wclServerId?: number;
  group: 'ua' | 'ru';
}

export interface WclStatsRaidConfig {
  id: WclStatsRaidId;
  name: string;
  encounterId: number;
  zoneId: number;
}

export interface WclStatsRow {
  rank: number | null;
  guildName: string;
  displayName: string;
  faction?: 'Alliance' | 'Horde' | null;
  region: string;
  realm: string;
  durationMs: number | null;
  guildUrl: string;
  reportUrl: string | null;
  guildGroup: 'milestone' | 'ua' | 'ru';
}

export interface WclStatsRaid {
  id: WclStatsRaidId;
  name: string;
  encounterId: number;
  rows: WclStatsRow[];
}

export interface WclStatsData {
  generatedAt: string;
  raids: WclStatsRaid[];
}

export interface RawRankingEntry {
  rank?: unknown;
  ranking?: unknown;
  position?: unknown;
  duration?: unknown;
  totalTime?: unknown;
  speed?: unknown;
  guild?: {
    name?: unknown;
    server?: { slug?: unknown; name?: unknown };
  };
  guildName?: unknown;
  name?: unknown;
  server?: { slug?: unknown; name?: unknown };
  realm?: unknown;
  report?: { code?: unknown };
  reportCode?: unknown;
  fight?: unknown;
  fightId?: unknown;
}
