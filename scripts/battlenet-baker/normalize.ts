import type {
  BnetRawCharacter,
  BnetRawCharacterMedia,
  BnetBakedCharacter,
  BnetFaction,
  BnetGender,
} from './types';

function extractMediaUrl(media: BnetRawCharacterMedia | null, key: string): string | null {
  return media?.assets?.find((a) => a.key === key)?.value ?? null;
}

export function normalizeCharacter(
  raw: BnetRawCharacter,
  media: BnetRawCharacterMedia | null,
  realmSlug: string,
  region: string,
  fetchedAt: string,
): BnetBakedCharacter {
  const genderType = raw.gender?.type?.toUpperCase();
  const factionType = raw.faction?.type?.toUpperCase();

  return {
    characterName: raw.name,
    realmSlug: raw.realm?.slug ?? realmSlug,
    region,
    bnetId: raw.id,
    raceId: raw.race?.id ?? null,
    raceName: raw.race?.name ?? null,
    classId: raw.character_class?.id ?? null,
    className: raw.character_class?.name ?? null,
    gender: (genderType === 'MALE' || genderType === 'FEMALE') ? genderType as BnetGender : null,
    level: raw.level ?? null,
    activeSpecId: raw.active_spec?.id ?? null,
    activeSpecName: raw.active_spec?.name ?? null,
    faction: (factionType === 'ALLIANCE' || factionType === 'HORDE') ? factionType as BnetFaction : null,
    averageItemLevel: raw.average_item_level ?? null,
    equippedItemLevel: raw.equipped_item_level ?? null,
    avatarUrl: extractMediaUrl(media, 'avatar'),
    mainRawUrl: extractMediaUrl(media, 'main-raw'),
    fetchedAt,
    error: null,
  };
}

export function buildErrorCharacter(params: {
  characterName: string;
  realmSlug: string;
  region: string;
  error: string;
  fetchedAt: string;
}): BnetBakedCharacter {
  return {
    characterName: params.characterName,
    realmSlug: params.realmSlug,
    region: params.region,
    bnetId: null,
    raceId: null,
    raceName: null,
    classId: null,
    className: null,
    gender: null,
    level: null,
    activeSpecId: null,
    activeSpecName: null,
    faction: null,
    averageItemLevel: null,
    equippedItemLevel: null,
    avatarUrl: null,
    mainRawUrl: null,
    fetchedAt: params.fetchedAt,
    error: params.error,
  };
}