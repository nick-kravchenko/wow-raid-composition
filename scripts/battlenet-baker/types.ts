// ── Raw Blizzard API response shapes ─────────────────────────────────────────

export interface BnetRawMediaAsset {
  key: string;
  value: string;
}

export interface BnetRawCharacterMedia {
  assets: BnetRawMediaAsset[];
}

export interface BnetRawTypedValue {
  type: string;
  name: string;
}

export interface BnetRawIdName {
  id: number;
  name: string;
}

export interface BnetRawRealm {
  id: number;
  name: string;
  slug: string;
}

export interface BnetRawCharacter {
  id: number;
  name: string;
  gender: BnetRawTypedValue;
  faction: BnetRawTypedValue;
  race: BnetRawIdName;
  character_class: BnetRawIdName;
  active_spec: BnetRawIdName;
  realm: BnetRawRealm;
  level: number;
  achievement_points?: number;
  average_item_level?: number;
  equipped_item_level?: number;
}

// ── Baked output shapes ───────────────────────────────────────────────────────

export type BnetFaction = 'ALLIANCE' | 'HORDE';
export type BnetGender = 'MALE' | 'FEMALE';

export interface BnetBakedCharacter {
  characterName: string;
  realmSlug: string;
  region: string;
  bnetId: number | null;
  raceId: number | null;
  raceName: string | null;
  classId: number | null;
  className: string | null;
  gender: BnetGender | null;
  level: number | null;
  activeSpecId: number | null;
  activeSpecName: string | null;
  faction: BnetFaction | null;
  averageItemLevel: number | null;
  equippedItemLevel: number | null;
  avatarUrl: string | null;
  mainRawUrl: string | null;
  fetchedAt: string;
  error: string | null;
}

export interface BnetBakedData {
  generatedAt: string;
  defaultRealmSlug: string;
  defaultRegion: string;
  gameVersion: string;
  /**
   * Keyed by lowercased character name.
   * Look up via `character.name.toLowerCase()` from players.data.ts.
   */
  characters: Record<string, BnetBakedCharacter>;
}