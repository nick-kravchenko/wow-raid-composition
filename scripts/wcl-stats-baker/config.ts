import type { WclStatsGuildConfig, WclStatsRaidConfig } from './types';

export const RANK_TARGETS = [1, 50, 100] as const;
export const RANKINGS_PER_PAGE = 50;
export const RAID_SIZE = 25;
// Warcraft Logs currently exposes at most 1,000 public ranking rows (20 x 50).
export const MAX_GUILD_SEARCH_PAGES = 20;
export const GUILD_DIRECTORY_PAGE_SIZE = 100;
export const GUILD_REPORTS_PAGE_SIZE = 25;

export const RAIDS: readonly WclStatsRaidConfig[] = [
  { id: 'tk', name: 'Tempest Keep', encounterId: 100703, zoneId: 1056 },
  { id: 'ssc', name: 'Serpentshrine Cavern', encounterId: 100702, zoneId: 1056 },
];

const REGION = 'eu';
const REALM = 'spineshatter';
const WCL_SERVER_ID = 5216;

export const UKRAINIAN_GUILDS: readonly WclStatsGuildConfig[] = [
  { name: 'Ïzhachok', displayName: 'Ïzhachok', faction: 'Horde', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'LiberalPug', displayName: 'LiberalPug', faction: 'Horde', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'MokNatal UA', displayName: 'MokNatal UA', faction: 'Horde', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'SWP in Three Days', displayName: 'SWP in Three Days', faction: 'Horde', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'Ukrainian Ironbelly', displayName: 'Ukrainian Ironbelly', faction: 'Horde', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'Trident Reborn', displayName: 'Trident Reborn', faction: 'Horde', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'BAPTA', displayName: 'BAPTA', faction: 'Horde', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'ATB', displayName: 'ATB', faction: 'Horde', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'CBITAHOK', displayName: 'CBITAHOK', faction: 'Alliance', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
  { name: 'CMEPEKA', displayName: 'CMEPEKA', faction: 'Alliance', region: REGION, realm: REALM, wclServerId: WCL_SERVER_ID, group: 'ua' },
];

function russianGuild(name: string, faction: 'Alliance' | 'Horde'): WclStatsGuildConfig {
  return {
    name,
    displayName: name,
    faction,
    region: REGION,
    realm: REALM,
    wclServerId: WCL_SERVER_ID,
    group: 'ru',
  };
}

export const RUSSIAN_GUILDS: readonly WclStatsGuildConfig[] = [
  ...['Annuit Coeptis', 'BOARS', 'Dwarves drank Baikal', 'Free Will', 'GAMBIT', 'Its Official', 'MUGIWARA', 'N O R D', 'Warsong']
    .map(name => russianGuild(name, 'Alliance')),
  ...['CEBEP POMNIT', 'DELETED', 'Eternal Sleep', 'Faceroll', 'Just Ask', 'MATRëSHKA', 'Trade Goods', 'Unexpected Journey']
    .map(name => russianGuild(name, 'Horde')),
];

export const TRACKED_GUILDS: readonly WclStatsGuildConfig[] = [
  ...UKRAINIAN_GUILDS,
  ...RUSSIAN_GUILDS,
];
