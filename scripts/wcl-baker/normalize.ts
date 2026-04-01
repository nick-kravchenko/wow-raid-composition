import type {
  WclRawCharacterData,
  WclRawGearItem,
  WclRawZoneRankings,
  WclBakedCharacter,
  WclEncounterRanking,
  WclGearItem,
} from './types';

export function normalizeGearItem(raw: WclRawGearItem, slot: number): WclGearItem {
  return {
    id: raw.id,
    slot,
    quality: raw.quality,
    icon: raw.icon,
    itemLevel: raw.itemLevel ?? null,
    permanentEnchantID: raw.permanentEnchant ?? null,
    temporaryEnchantID: raw.temporaryEnchant ?? null
  };
}

export function normalizeZoneRankings(
  raw: WclRawZoneRankings | null,
): Pick<
  WclBakedCharacter,
  | 'rankings'
  | 'bestPerformanceAverage'
  | 'medianPerformanceAverage'
  | 'totalKills'
> {
  if (!raw) {
    return {
      rankings: [],
      bestPerformanceAverage: null,
      medianPerformanceAverage: null,
      totalKills: 0,
    };
  }

  const rankings: WclEncounterRanking[] = (raw.rankings ?? [])
    .map((r) => ({
      encounterID: r.encounter.id,
      encounterName: r.encounter.name,
      rankPercent: r.rankPercent ?? null,
      medianPerformance: r.medianPercent ?? null,
      totalKills: r.totalKills ?? 0,
      fastestKill: r.fastestKill ?? 0,
      bestAmount: r.bestAmount ?? 0,
      spec: r.spec ?? '',
      allStars: r.allStars
        ? {
            points: r.allStars.points,
            rank: typeof r.allStars.rank === 'number' ? r.allStars.rank : null,
            rankPercent: typeof r.allStars.rankPercent === 'number' ? r.allStars.rankPercent : null,
            total: r.allStars.total,
          }
        : null,
    }))
    // Sort deterministically so diffs are stable
    .sort((a, b) => a.encounterID - b.encounterID);

  return {
    rankings,
    bestPerformanceAverage: raw.bestPerformanceAverage ?? null,
    medianPerformanceAverage: raw.medianPerformanceAverage ?? null,
    totalKills: raw.totalKills ?? 0,
  };
}

export function buildBakedCharacter(params: {
  rawCharacter: WclRawCharacterData;
  gear: WclGearItem[];
  gearError: string | null;
  fetchedAt: string;
}): WclBakedCharacter {
  const { rawCharacter, gear, gearError, fetchedAt } = params;
  const rankingData = normalizeZoneRankings(rawCharacter.zoneRankings);

  return {
    characterName: rawCharacter.name,
    serverSlug: rawCharacter.server.slug,
    serverRegion: rawCharacter.server.region.slug,
    wclId: rawCharacter.id,
    gear,
    ...rankingData,
    fetchedAt,
    error: null,
    partial: gearError !== null,
  };
}

export function buildErrorCharacter(params: {
  characterName: string;
  serverSlug: string;
  serverRegion: string;
  error: string;
  fetchedAt: string;
}): WclBakedCharacter {
  return {
    characterName: params.characterName,
    serverSlug: params.serverSlug,
    serverRegion: params.serverRegion,
    wclId: null,
    gear: [],
    rankings: [],
    bestPerformanceAverage: null,
    medianPerformanceAverage: null,
    totalKills: 0,
    fetchedAt: params.fetchedAt,
    error: params.error,
    partial: false,
  };
}
