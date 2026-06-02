import { CharacterRole } from '../../src/app/_entities/character-role.enum';

import { WclApiClient } from './api';
import { GET_CHARACTER_ENCOUNTER_RANKINGS } from './queries';
import type {
  WclOverallRank,
  WclOverallRankMetric,
  WclRawEncounterRankings,
  WclRawEncounterRankingsResponse,
} from './types';

const WCL_RANKINGS_BASE_URL = 'https://fresh.warcraftlogs.com/zone/rankings';

type WclRankingDpstype = 'dps' | 'wdps';
type WclGraphqlRankingMetric = 'dps' | 'wdps' | 'hps';

export interface OverallRankConfig {
  zoneID: number;
  sscBossID: number;
  tkBossID: number;
}

export interface OverallRankRequest {
  raid: WclOverallRank['raid'];
  raidName: string;
  zoneID: number;
  bossID: number;
  metric: WclOverallRankMetric;
  label: string;
  dpstype: WclRankingDpstype;
  wclMetric: 'hps' | null;
  sourceUrl: string;
}

interface RankFields {
  rank: number | null;
  rankPercent: number | null;
  total: number | null;
  bestAmount: number | null;
  medianPerformance: number | null;
  averagePerformance: number | null;
  totalKills: number;
  fastestKill: number | null;
}

function sourceUrl(config: {
  zoneID: number;
  bossID: number;
  dpstype: WclRankingDpstype;
  wclMetric: 'hps' | null;
}): string {
  const metricParam = config.wclMetric ? `&metric=${config.wclMetric}` : '';
  return `${WCL_RANKINGS_BASE_URL}/${config.zoneID}?boss=${config.bossID}&dpstype=${config.dpstype}${metricParam}`;
}

function raidRequests(
  raid: WclOverallRank['raid'],
  raidName: string,
  zoneID: number,
  bossID: number,
  role: CharacterRole,
): OverallRankRequest[] {
  if (role === CharacterRole.healer) {
    return [{
      raid,
      raidName,
      zoneID,
      bossID,
      metric: 'hps',
      label: `${raidName} healing`,
      dpstype: 'dps',
      wclMetric: 'hps',
      sourceUrl: sourceUrl({ zoneID, bossID, dpstype: 'dps', wclMetric: 'hps' }),
    }];
  }

  return [
    {
      raid,
      raidName,
      zoneID,
      bossID,
      metric: 'dps-bosses',
      label: `${raidName} bosses`,
      dpstype: 'dps',
      wclMetric: null,
      sourceUrl: sourceUrl({ zoneID, bossID, dpstype: 'dps', wclMetric: null }),
    },
    {
      raid,
      raidName,
      zoneID,
      bossID,
      metric: 'dps-bosses-trash',
      label: `${raidName} bosses + trash`,
      dpstype: 'wdps',
      wclMetric: null,
      sourceUrl: sourceUrl({ zoneID, bossID, dpstype: 'wdps', wclMetric: null }),
    },
  ];
}

export function buildOverallRankRequests(
  role: CharacterRole,
  config: OverallRankConfig,
): OverallRankRequest[] {
  return [
    ...raidRequests('ssc', 'SSC', config.zoneID, config.sscBossID, role),
    ...raidRequests('tk', 'TK', config.zoneID, config.tkBossID, role),
  ];
}

function toNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function rankFieldsFromRecord(record: Record<string, unknown>): RankFields {
  return {
    rank: toNumber(record['rank'] ?? record['historicalRank']),
    rankPercent: toNumber(record['rankPercent'] ?? record['percentile'] ?? record['rankPercentage']),
    total: toNumber(record['total'] ?? record['totalParses'] ?? record['outOf'] ?? record['rankTotalParses']),
    bestAmount: toNumber(record['bestAmount'] ?? record['amount']),
    medianPerformance: toNumber(record['medianPerformance']),
    averagePerformance: toNumber(record['averagePerformance']),
    totalKills: toNumber(record['totalKills']) ?? 0,
    fastestKill: toNumber(record['fastestKill']),
  };
}

function findRankFields(raw: WclRawEncounterRankings): RankFields {
  if (!raw || typeof raw !== 'object') {
    return emptyRankFields();
  }

  if (Array.isArray(raw)) {
    for (const entry of raw) {
      const fields = findRankFields(entry);
      if (hasRankFields(fields)) {
        return fields;
      }
    }
    return emptyRankFields();
  }

  const record = raw as Record<string, unknown>;
  const direct = rankFieldsFromRecord(record);

  for (const key of ['rank', 'bestRank', 'allStars', 'ranking', 'rankings', 'ranks']) {
    const fields = findRankFields(record[key]);
    if (hasRankFields(fields)) {
      return mergeRankFields(direct, fields);
    }
  }

  return direct;
}

function emptyRankFields(): RankFields {
  return {
    rank: null,
    rankPercent: null,
    total: null,
    bestAmount: null,
    medianPerformance: null,
    averagePerformance: null,
    totalKills: 0,
    fastestKill: null,
  };
}

function hasRankFields(fields: RankFields): boolean {
  return fields.rank !== null ||
    fields.rankPercent !== null ||
    fields.total !== null ||
    fields.bestAmount !== null ||
    fields.medianPerformance !== null ||
    fields.averagePerformance !== null ||
    fields.totalKills > 0 ||
    fields.fastestKill !== null;
}

function mergeRankFields(primary: RankFields, fallback: RankFields): RankFields {
  return {
    rank: primary.rank ?? fallback.rank,
    rankPercent: primary.rankPercent ?? fallback.rankPercent,
    total: primary.total ?? fallback.total,
    bestAmount: primary.bestAmount ?? fallback.bestAmount,
    medianPerformance: primary.medianPerformance ?? fallback.medianPerformance,
    averagePerformance: primary.averagePerformance ?? fallback.averagePerformance,
    totalKills: primary.totalKills || fallback.totalKills,
    fastestKill: primary.fastestKill ?? fallback.fastestKill,
  };
}

export function normalizeOverallRank(
  request: OverallRankRequest,
  raw: WclRawEncounterRankings | null,
): WclOverallRank {
  const fields = findRankFields(raw);
  const bestAmount = fields.bestAmount === 0 &&
    fields.rankPercent === null &&
    fields.medianPerformance === null &&
    fields.averagePerformance === null &&
    fields.totalKills === 0
    ? null
    : fields.bestAmount;

  return {
    raid: request.raid,
    raidName: request.raidName,
    bossID: request.bossID,
    metric: request.metric,
    label: request.label,
    rank: fields.rank,
    rankPercent: fields.rankPercent,
    total: fields.total,
    bestAmount,
    medianPerformance: fields.medianPerformance,
    averagePerformance: fields.averagePerformance,
    totalKills: fields.totalKills,
    fastestKill: fields.fastestKill,
    sourceUrl: request.sourceUrl,
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchCharacterOverallRanks(params: {
  client: WclApiClient;
  name: string;
  serverSlug: string;
  serverRegion: string;
  role: CharacterRole;
  config: OverallRankConfig;
  delayMs: number;
  warn: (msg: string) => void;
}): Promise<WclOverallRank[]> {
  const requests = buildOverallRankRequests(params.role, params.config);
  const ranks: WclOverallRank[] = [];

  for (const request of requests) {
    await sleep(params.delayMs);

    try {
      const metric: WclGraphqlRankingMetric = request.wclMetric ?? request.dpstype;
      const response = await params.client.query<WclRawEncounterRankingsResponse>(
        GET_CHARACTER_ENCOUNTER_RANKINGS,
        {
          name: params.name,
          serverSlug: params.serverSlug,
          serverRegion: params.serverRegion,
          encounterID: request.bossID,
          metric,
        },
      );

      const raw = response.characterData.character?.encounterRankings ?? null;
      const rank = normalizeOverallRank(request, raw);
      if (
        rank.rank === null &&
        rank.rankPercent === null &&
        rank.total === null &&
        rank.bestAmount === null &&
        rank.medianPerformance === null &&
        rank.averagePerformance === null &&
        rank.totalKills === 0
      ) {
        params.warn(`Overall rank not found for "${params.name}" (${request.label})`);
      }
      ranks.push(rank);
    } catch (e) {
      params.warn(`Overall rank query failed for "${params.name}" (${request.label}): ${(e as Error).message}`);
      ranks.push(normalizeOverallRank(request, null));
    }
  }

  return ranks;
}
