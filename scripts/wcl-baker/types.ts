// ── Raw WCL API response shapes ────────────────────────────────────────────
// These mirror what the WCL v2 GraphQL API actually returns.
// Keep these separate from the baked output so the normalization layer
// is the only place that knows about both.

export interface WclRawGearItem {
  id: number;
  quality: number;
  icon: string;
  itemLevel?: number;
  permanentEnchant?: number;
  temporaryEnchant?: number;
}

export interface WclRawAllStars {
  points: number;
  rank: number | string;
  rankPercent: number | string;
  total: number;
}

export interface WclRawEncounterRanking {
  encounter: { id: number; name: string };
  rankPercent: number | null;
  medianPercent: number | null;
  totalKills: number;
  fastestKill: number;
  bestAmount: number;
  spec: string;
  allStars: WclRawAllStars | null;
}

export interface WclRawZoneRankings {
  bestPerformanceAverage: number | null;
  medianPerformanceAverage: number | null;
  totalKills: number;
  rankings: WclRawEncounterRanking[];
}

export interface WclRawCharacterData {
  id: number;
  name: string;
  classID: number;
  server: {
    name: string;
    slug: string;
    region: { name: string; slug: string };
  };
  zoneRankings: WclRawZoneRankings | null;
}

export interface WclRawCharacterRankingsResponse {
  characterData: {
    character: WclRawCharacterData | null;
  };
}

export interface WclRawFight {
  id: number;
  name: string;
  encounterID: number;
}

export interface WclRawActor {
  id: number;
  name: string;
  type: string;
  subType?: string;
}

export interface WclRawRecentReport {
  code: string;
  startTime: number;
  fights: WclRawFight[] | null;
}

export interface WclRawRecentReportsResponse {
  characterData: {
    character: {
      recentReports: {
        data: WclRawRecentReport[];
      };
    } | null;
  };
}

export interface WclRawReportMasterDataResponse {
  reportData: {
    report: {
      masterData: { actors: WclRawActor[] } | null;
    } | null;
  };
}

export interface WclRawCombatantInfoEvent {
  type: string;
  sourceID: number;
  gear: WclRawGearItem[];
  specIDs?: number[];
}

export interface WclRawCombatantInfoResponse {
  reportData: {
    report: {
      events: {
        data: WclRawCombatantInfoEvent[];
      };
    } | null;
  };
}

// ── Baked output shapes ─────────────────────────────────────────────────────
// These are the types written into src/app/_data/wcl-baked.data.ts
// and imported by Angular components/services.

export interface WclGearItem {
  id: number;
  slot: number;
  quality: number;
  icon: string;
  itemLevel: number | null;
  permanentEnchantID: number | null;
  temporaryEnchantID: number | null;
}

export interface WclEncounterRanking {
  encounterID: number;
  encounterName: string;
  rankPercent: number | null;
  medianPerformance: number | null;
  totalKills: number;
  fastestKill: number;
  bestAmount: number;
  spec: string;
  allStars: {
    points: number;
    rank: number | null;
    rankPercent: number | null;
    total: number;
  } | null;
}

export interface WclBakedCharacter {
  /** Exact character name as returned by WCL (may differ in casing from players.data.ts). */
  characterName: string;
  serverSlug: string;
  serverRegion: string;
  wclId: number | null;
  gear: WclGearItem[];
  rankings: WclEncounterRanking[];
  bestPerformanceAverage: number | null;
  medianPerformanceAverage: number | null;
  totalKills: number;
  fetchedAt: string;
  /** Non-null if the character fetch errored (character not found, API failure, etc.) */
  error: string | null;
  /** True if rankings were fetched but gear was not (or vice versa). */
  partial: boolean;
}

export interface WclBakedData {
  generatedAt: string;
  defaultServerSlug: string;
  defaultServerRegion: string;
  /**
   * Keyed by lowercased character name (e.g. "kravá", "lazykit").
   * Use `character.name.toLowerCase()` from players.data.ts to look up.
   */
  characters: Record<string, WclBakedCharacter>;
}
