// AUTO-GENERATED - do not edit manually.
// Run `npm run bake:wcl` to regenerate.
// Generated: 2026-06-17T11:41:15.165Z

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
  highestDps: number;
  spec: string;
  allStars: {
    points: number | null;
    rank: number | null;
    rankPercent: number | null;
    total: number;
  } | null;
}

export type WclOverallRankMetric = 'dps-bosses' | 'dps-bosses-trash' | 'hps';

export interface WclOverallRank {
  raid: 'ssc' | 'tk';
  raidName: string;
  bossID: number;
  metric: WclOverallRankMetric;
  label: string;
  rank: number | null;
  rankPercent: number | null;
  total: number | null;
  bestAmount: number | null;
  medianPerformance: number | null;
  averagePerformance: number | null;
  totalKills: number;
  fastestKill: number | null;
  sourceUrl: string;
}

export interface WclBakedCharacter {
  characterName: string;
  serverSlug: string;
  serverRegion: string;
  wclId: number | null;
  gear: WclGearItem[];
  rankings: WclEncounterRanking[];
  overallRanks: WclOverallRank[];
  bestPerformanceAverage: number | null;
  medianPerformanceAverage: number | null;
  totalKills: number;
  fetchedAt: string;
  error: string | null;
  partial: boolean;
}

export interface WclBakedData {
  generatedAt: string;
  defaultServerSlug: string;
  defaultServerRegion: string;
  /**
   * Keyed by lowercased character name.
   * Look up via `character.name.toLowerCase()` from players.data.ts.
   */
  characters: Record<string, WclBakedCharacter>;
}

export const wclBakedData: WclBakedData = {
  "generatedAt": "2026-06-17T11:41:15.165Z",
  "defaultServerSlug": "spineshatter",
  "defaultServerRegion": "eu",
  "characters": {
    "alarian": {
      "characterName": "Alarian",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876708,
      "gear": [
        {
          "id": 28804,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_27.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 29368,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_30naxxramas.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21869,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2981,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21871,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_08.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28799,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28594,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 21870,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_03.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 24668,
          "slot": 9,
          "quality": 2,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 111,
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 27889,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2935,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29922,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_61.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25036,
          "slot": 15,
          "quality": 2,
          "icon": "inv_misc_cape_22.jpg",
          "itemLevel": 99,
          "permanentEnchantID": 2662,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 16,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28673,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 42.09246077678109,
          "total": 9154,
          "bestAmount": 833.07850942733,
          "medianPerformance": 38.69984054620816,
          "averagePerformance": 38.69984054620816,
          "totalKills": 2,
          "fastestKill": 4632749,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 62.45545768009461,
          "total": 9154,
          "bestAmount": 428.13436480538,
          "medianPerformance": 61.76352006484066,
          "averagePerformance": 61.76352006484066,
          "totalKills": 2,
          "fastestKill": 4632632,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 57.59636309044655,
          "total": 9327,
          "bestAmount": 871.22732451598,
          "medianPerformance": 35.55431845180205,
          "averagePerformance": 42.09551646851699,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 61.93481860783182,
          "total": 9327,
          "bestAmount": 451.17138232385,
          "medianPerformance": 59.23364604576168,
          "averagePerformance": 46.45152603437062,
          "totalKills": 3,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.67674106616039,
          "medianPerformance": 57.36950736985569,
          "totalKills": 2,
          "fastestKill": 96484,
          "bestAmount": 139.6847155586,
          "highestDps": 139.6847155586,
          "spec": "Shadow",
          "allStars": {
            "points": 101.59822714722539,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 37.91225786353924,
          "medianPerformance": 24.214038580448705,
          "totalKills": 2,
          "fastestKill": 161614,
          "bestAmount": 110.06901433375,
          "highestDps": 110.06901433375,
          "spec": "Shadow",
          "allStars": {
            "points": 40.52729349372703,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 34.18474014629949,
          "medianPerformance": 33.12234364742582,
          "totalKills": 2,
          "fastestKill": 163533,
          "bestAmount": 72.027597692262,
          "highestDps": 72.027597692262,
          "spec": "Shadow",
          "allStars": {
            "points": 35.79866402370297,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 12.438712523924318,
          "medianPerformance": 8.519838301335653,
          "totalKills": 2,
          "fastestKill": 115131,
          "bestAmount": 42.72379039756,
          "highestDps": 42.72379039756,
          "spec": "Shadow",
          "allStars": {
            "points": 13.363039870243716,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 39.13200956618314,
          "medianPerformance": 32.46218896397532,
          "totalKills": 2,
          "fastestKill": 181787,
          "bestAmount": 151.91405326013,
          "highestDps": 151.91405326013,
          "spec": "Shadow",
          "allStars": {
            "points": 44.30680566377768,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 17.416623421500994,
          "medianPerformance": 12.427189686688433,
          "totalKills": 2,
          "fastestKill": 395742,
          "bestAmount": 36.547228723742,
          "highestDps": 36.547228723742,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 52.68501333154374,
          "medianPerformance": 11.50810965266607,
          "totalKills": 3,
          "fastestKill": 255889,
          "bestAmount": 65.432293560359,
          "highestDps": 65.432293560359,
          "spec": "Shadow",
          "allStars": {
            "points": 55.46690275440304,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 63.56324485369725,
          "medianPerformance": 34.33883154508433,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 434.28520975757,
          "highestDps": 434.28520975757,
          "spec": "Shadow",
          "allStars": {
            "points": 70.58459719338094,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 78.1716647029374,
          "medianPerformance": 18.05614552270891,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 122.74171781812,
          "highestDps": 122.74171781812,
          "spec": "Shadow",
          "allStars": {
            "points": 82.36173067991272,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 59.31062199552752,
          "medianPerformance": 12.752171022223964,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 83.322709387175,
          "highestDps": 83.322709387175,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 51.59554800678562,
      "medianPerformanceAverage": 27.448875447937564,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "alpine": {
      "characterName": "Alpine",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105988641,
      "gear": [
        {
          "id": 29068,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_77.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 33065,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_36.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28743,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29066,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 27672,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28621,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28747,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 29463,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2648,
          "temporaryEnchantID": null
        },
        {
          "id": 29067,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 28510,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_31.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28555,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 95,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28528,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_pocketwatch_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28378,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_07.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28802,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_65.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2678
        },
        {
          "id": 28606,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2655,
          "temporaryEnchantID": null
        },
        {
          "id": 27917,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_libramoftruth.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23705,
          "slot": 19,
          "quality": 4,
          "icon": "inv_misc_tabardpvp_02.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 52.76425001213253,
          "total": 7278,
          "bestAmount": 272.92903007083,
          "medianPerformance": 52.76425001213253,
          "averagePerformance": 52.76425001213253,
          "totalKills": 1,
          "fastestKill": 7492099,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 50.74932071480498,
          "total": 7278,
          "bestAmount": 223.19539557606,
          "medianPerformance": 50.74932071480498,
          "averagePerformance": 50.74932071480498,
          "totalKills": 1,
          "fastestKill": 7492099,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 52.27791389071967,
          "total": 7637,
          "bestAmount": 250.08875869004,
          "medianPerformance": 52.27791389071967,
          "averagePerformance": 52.27791389071967,
          "totalKills": 1,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 63.8035230255862,
          "total": 7637,
          "bestAmount": 240.22994170949,
          "medianPerformance": 63.8035230255862,
          "averagePerformance": 63.8035230255862,
          "totalKills": 1,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 54.5622,
          "medianPerformance": 54.5622,
          "totalKills": 1,
          "fastestKill": 116972,
          "bestAmount": 357.57275245358,
          "highestDps": 357.57275245358,
          "spec": "Protection",
          "allStars": {
            "points": 48.68,
            "rank": 4446,
            "rankPercent": 44.430553819227406,
            "total": 7999
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 86.9733,
          "medianPerformance": 86.9733,
          "totalKills": 1,
          "fastestKill": 170511,
          "bestAmount": 379.43006609544,
          "highestDps": 379.43006609544,
          "spec": "Justicar",
          "allStars": {
            "points": 84.82,
            "rank": 2824,
            "rankPercent": 79.75473321858864,
            "total": 13944
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 74.2349,
          "medianPerformance": 74.2349,
          "totalKills": 1,
          "fastestKill": 157335,
          "bestAmount": 354.63819239203,
          "highestDps": 354.63819239203,
          "spec": "Justicar",
          "allStars": {
            "points": 70.56,
            "rank": 4570,
            "rankPercent": 65.79321703975444,
            "total": 13357
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 41.8073,
          "medianPerformance": 41.8073,
          "totalKills": 1,
          "fastestKill": 142669,
          "bestAmount": 460.39433934492,
          "highestDps": 460.39433934492,
          "spec": "Protection",
          "allStars": {
            "points": 42.5,
            "rank": 8518,
            "rankPercent": 36.77529507831638,
            "total": 13471
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 35.2453,
          "medianPerformance": 35.2453,
          "totalKills": 1,
          "fastestKill": 189409,
          "bestAmount": 108.00437149238,
          "highestDps": 108.00437149238,
          "spec": "Justicar",
          "allStars": {
            "points": 32.59,
            "rank": 10844,
            "rankPercent": 30.457927142124166,
            "total": 15592
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 57.9877,
          "medianPerformance": 57.9877,
          "totalKills": 1,
          "fastestKill": 497362,
          "bestAmount": 199.6955939537,
          "highestDps": 199.6955939537,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 5391,
            "rankPercent": 53.11820474906497,
            "total": 11497
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 72.3998,
          "medianPerformance": 72.3998,
          "totalKills": 1,
          "fastestKill": 302151,
          "bestAmount": 49.6738385774,
          "highestDps": 49.6738385774,
          "spec": "Justicar",
          "allStars": {
            "points": 68.3,
            "rank": 5001,
            "rankPercent": 66.02799293382253,
            "total": 14718
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 69.047,
          "medianPerformance": 69.047,
          "totalKills": 1,
          "fastestKill": 150650,
          "bestAmount": 601.48689014271,
          "highestDps": 601.48689014271,
          "spec": "Protection",
          "allStars": {
            "points": 71.43,
            "rank": 3568,
            "rankPercent": 61.491957249271294,
            "total": 9263
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.6899,
          "medianPerformance": 94.6899,
          "totalKills": 1,
          "fastestKill": 116928,
          "bestAmount": 497.64812534209,
          "highestDps": 497.64812534209,
          "spec": "Justicar",
          "allStars": {
            "points": 96.34,
            "rank": 1372,
            "rankPercent": 90.12816820276498,
            "total": 13888
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 35.1022,
          "medianPerformance": 35.1022,
          "totalKills": 1,
          "fastestKill": 573821,
          "bestAmount": 212.91831424782,
          "highestDps": 212.91831424782,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 8481,
            "rankPercent": 27.415903449456476,
            "total": 11683
          }
        }
      ],
      "bestPerformanceAverage": 66.1199625,
      "medianPerformanceAverage": 66.1199625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "anyataylorj": {
      "characterName": "Anyataylorj",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 101486123,
      "gear": [
        {
          "id": 30228,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_85.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 28509,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30230,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_48.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29096,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_11.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 32802,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_17.jpg",
          "itemLevel": 136,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30229,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_23.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3013,
          "temporaryEnchantID": null
        },
        {
          "id": 32790,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_08.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 32814,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 30223,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_48.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 29298,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32658,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_armorkit_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 30021,
          "slot": 16,
          "quality": 4,
          "icon": "inv_staff_50.jpg",
          "itemLevel": 134,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": 2639
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32387,
          "slot": 18,
          "quality": 3,
          "icon": "inv-mount_raven_54.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 59.76600265767979,
          "total": 5617,
          "bestAmount": 569.89725206285,
          "medianPerformance": 30.53621561066504,
          "averagePerformance": 37.86717690841316,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 72.53123514856391,
          "total": 5617,
          "bestAmount": 327.59584278652,
          "medianPerformance": 48.514246011253604,
          "averagePerformance": 53.65756948142965,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 81.97724043549569,
          "total": 7643,
          "bestAmount": 619.20909098608,
          "medianPerformance": 61.78287030460102,
          "averagePerformance": 63.00411954259958,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 84.4349183680439,
          "total": 7643,
          "bestAmount": 374.20385024921,
          "medianPerformance": 72.81980098715377,
          "averagePerformance": 70.26885549854278,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 83.4493,
          "medianPerformance": 82.2061,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 624.69650856615,
          "highestDps": 624.69650856615,
          "spec": "Guardian",
          "allStars": {
            "points": 85.38,
            "rank": 1790,
            "rankPercent": 76.13393810032017,
            "total": 7496
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 78.8027,
          "medianPerformance": 73.6586,
          "totalKills": 5,
          "fastestKill": 170511,
          "bestAmount": 609.12283897557,
          "highestDps": 609.12283897557,
          "spec": "Guardian",
          "allStars": {
            "points": 83.08,
            "rank": 2089,
            "rankPercent": 73.35035098915124,
            "total": 7835
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 90.5618,
          "medianPerformance": 82.772,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 738.81734526819,
          "highestDps": 738.81734526819,
          "spec": "Guardian",
          "allStars": {
            "points": 100.08,
            "rank": 1120,
            "rankPercent": 87.96644800516185,
            "total": 9299
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 71.1687,
          "medianPerformance": 57.0764,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 741.80796108475,
          "highestDps": 741.80796108475,
          "spec": "Guardian",
          "allStars": {
            "points": 74.7,
            "rank": 4274,
            "rankPercent": 65.63731403297145,
            "total": 12435
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 83.3046,
          "medianPerformance": 70.3679,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 806.92855601122,
          "highestDps": 806.92855601122,
          "spec": "Guardian",
          "allStars": {
            "points": 96.87,
            "rank": 1722,
            "rankPercent": 82.38304841846657,
            "total": 9769
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 41.4577,
          "medianPerformance": 41.4577,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 364.85095363136,
          "highestDps": 364.85095363136,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 4726,
            "rankPercent": 36.91588785046729,
            "total": 7490
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 81.1047,
          "medianPerformance": 78.3932,
          "totalKills": 4,
          "fastestKill": 247416,
          "bestAmount": 466.01094600515,
          "highestDps": 466.01094600515,
          "spec": "Guardian",
          "allStars": {
            "points": 88.54,
            "rank": 3012,
            "rankPercent": 77.56333830104322,
            "total": 13420
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 77.3841,
          "medianPerformance": 65.5464,
          "totalKills": 4,
          "fastestKill": 150650,
          "bestAmount": 846.87819593365,
          "highestDps": 846.87819593365,
          "spec": "Guardian",
          "allStars": {
            "points": 89.64,
            "rank": 3160,
            "rankPercent": 76.037320791929,
            "total": 13183
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 77.8215,
          "medianPerformance": 76.2891,
          "totalKills": 4,
          "fastestKill": 102300,
          "bestAmount": 739.47678021356,
          "highestDps": 739.47678021356,
          "spec": "Guardian",
          "allStars": {
            "points": 79.1,
            "rank": 2668,
            "rankPercent": 70.09419152276296,
            "total": 8918
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 76.8045,
          "medianPerformance": 51.345,
          "totalKills": 4,
          "fastestKill": 426009,
          "bestAmount": 502.84335246017,
          "highestDps": 502.84335246017,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 1685,
            "rankPercent": 70.06222222222222,
            "total": 5625
          }
        }
      ],
      "bestPerformanceAverage": 80.449675,
      "medianPerformanceAverage": 73.2887125,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "bawownahunt": {
      "characterName": "Bawownahunt",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876718,
      "gear": [
        {
          "id": 28275,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 30017,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_30naxxramas.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27801,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 127,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_07.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28228,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28828,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28514,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 27474,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 14,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 19022,
          "slot": 16,
          "quality": 2,
          "icon": "inv_fishingpole_01.jpg",
          "itemLevel": 50,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2724,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 63.14878073065563,
          "total": 23522,
          "bestAmount": 1217.6402041346,
          "medianPerformance": 56.8137924008158,
          "averagePerformance": 56.8137924008158,
          "totalKills": 2,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 73.0460737557008,
          "total": 23522,
          "bestAmount": 626.41581547251,
          "medianPerformance": 71.64470134732454,
          "averagePerformance": 71.64470134732454,
          "totalKills": 2,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 65.75419647069079,
          "total": 23847,
          "bestAmount": 1089.4626629289,
          "medianPerformance": 54.00551429607178,
          "averagePerformance": 54.00551429607178,
          "totalKills": 2,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 71.99378279075981,
          "total": 23847,
          "bestAmount": 612.3220053384,
          "medianPerformance": 56.74156861129011,
          "averagePerformance": 56.74156861129011,
          "totalKills": 2,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 89.9974,
          "medianPerformance": 79.0143,
          "totalKills": 2,
          "fastestKill": 92487,
          "bestAmount": 2037.3133521468,
          "highestDps": 2037.3133521468,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.9,
            "rank": 3332,
            "rankPercent": 89.08942024238453,
            "total": 30530
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 40.5393,
          "medianPerformance": 31.0191,
          "totalKills": 2,
          "fastestKill": 170600,
          "bestAmount": 707.67338069725,
          "highestDps": 707.67338069725,
          "spec": "BeastMastery",
          "allStars": {
            "points": 24.8,
            "rank": 24669,
            "rankPercent": 20.10881886193607,
            "total": 30877
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 75.3146,
          "medianPerformance": 63.6801,
          "totalKills": 2,
          "fastestKill": 179077,
          "bestAmount": 1119.6356874417,
          "highestDps": 1119.6356874417,
          "spec": "BeastMastery",
          "allStars": {
            "points": 68,
            "rank": 12106,
            "rankPercent": 60.4321249959141,
            "total": 30593
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 70.4984,
          "medianPerformance": 69.8836,
          "totalKills": 2,
          "fastestKill": 138482,
          "bestAmount": 1714.9593448968,
          "highestDps": 1714.9593448968,
          "spec": "BeastMastery",
          "allStars": {
            "points": 76.4,
            "rank": 9315,
            "rankPercent": 69.01427193186733,
            "total": 30059
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 77.4088,
          "medianPerformance": 64.982,
          "totalKills": 2,
          "fastestKill": 176054,
          "bestAmount": 1857.0893021459,
          "highestDps": 1857.0893021459,
          "spec": "BeastMastery",
          "allStars": {
            "points": 87.48,
            "rank": 7110,
            "rankPercent": 76.22567052371079,
            "total": 29902
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 70.7566,
          "medianPerformance": 59.7941,
          "totalKills": 2,
          "fastestKill": 398721,
          "bestAmount": 930.6005954038,
          "highestDps": 930.6005954038,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 8510,
            "rankPercent": 69.02100702661376,
            "total": 27467
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 82.6098,
          "medianPerformance": 76.0928,
          "totalKills": 2,
          "fastestKill": 247416,
          "bestAmount": 1081.2881947813,
          "highestDps": 1081.2881947813,
          "spec": "BeastMastery",
          "allStars": {
            "points": 77.09,
            "rank": 9518,
            "rankPercent": 67.64685885232527,
            "total": 29416
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 76.4116,
          "medianPerformance": 46.2046,
          "totalKills": 2,
          "fastestKill": 155471,
          "bestAmount": 1374.1791073576,
          "highestDps": 1374.1791073576,
          "spec": "BeastMastery",
          "allStars": {
            "points": 84.78,
            "rank": 7350,
            "rankPercent": 74.9369074415115,
            "total": 29322
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 80.091,
          "medianPerformance": 74.784,
          "totalKills": 2,
          "fastestKill": 102300,
          "bestAmount": 1780.0586510264,
          "highestDps": 1780.0586510264,
          "spec": "BeastMastery",
          "allStars": {
            "points": 87.07,
            "rank": 6221,
            "rankPercent": 78.83777898747958,
            "total": 29392
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 39.963,
          "medianPerformance": 34.4267,
          "totalKills": 2,
          "fastestKill": 439330,
          "bestAmount": 832.66792616029,
          "highestDps": 832.66792616029,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 16919,
            "rankPercent": 37.73737671132048,
            "total": 27172
          }
        }
      ],
      "bestPerformanceAverage": 74.1088625,
      "medianPerformanceAverage": 63.20756250000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "benzöbak": {
      "characterName": "Benzöbak",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 108294213,
      "gear": [
        {
          "id": 30233,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_85.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 24121,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_ahnqiraj_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30235,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_48.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2995,
          "temporaryEnchantID": null
        },
        {
          "id": 10056,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_orange_01.jpg",
          "itemLevel": 43,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30231,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_12.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30038,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 32655,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_09.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 30232,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_48.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29287,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28766,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 30832,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_08.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2671,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29271,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_outlandraid_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32387,
          "slot": 18,
          "quality": 3,
          "icon": "inv-mount_raven_54.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31778,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 20,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 97.75556474535044,
          "total": 6947,
          "bestAmount": 1130.167994005,
          "medianPerformance": 83.51223419765452,
          "averagePerformance": 85.33387437797269,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 95.39296568690672,
          "total": 6947,
          "bestAmount": 548.92165994798,
          "medianPerformance": 84.59540714966917,
          "averagePerformance": 75.85775097910992,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 91.78411260107224,
          "total": 7053,
          "bestAmount": 980.74935626828,
          "medianPerformance": 77.53416766731932,
          "averagePerformance": 69.83777214900196,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 92.17337295983222,
          "total": 7053,
          "bestAmount": 553.23860325429,
          "medianPerformance": 75.50294325006297,
          "averagePerformance": 66.84405492498492,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.9092,
          "medianPerformance": 94.8384,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 1637.2895650199,
          "highestDps": 1637.2895650199,
          "spec": "Balance",
          "allStars": {
            "points": 110.78,
            "rank": 340,
            "rankPercent": 96.8497351547254,
            "total": 10761
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 97.3312,
          "medianPerformance": 89.7029,
          "totalKills": 5,
          "fastestKill": 170511,
          "bestAmount": 1083.3328589563,
          "highestDps": 1083.3328589563,
          "spec": "Balance",
          "allStars": {
            "points": 100.64,
            "rank": 1050,
            "rankPercent": 90.31304829624158,
            "total": 10829
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 95.8034,
          "medianPerformance": 80.8296,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 1141.3050978227,
          "highestDps": 1141.3050978227,
          "spec": "Balance",
          "allStars": {
            "points": 101.38,
            "rank": 1181,
            "rankPercent": 88.89098098286576,
            "total": 10622
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 98.5433,
          "medianPerformance": 92.8168,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1551.6023767777,
          "highestDps": 1551.6023767777,
          "spec": "Balance",
          "allStars": {
            "points": 109.48,
            "rank": 261,
            "rankPercent": 97.46390948107687,
            "total": 10252
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.8356,
          "medianPerformance": 93.5069,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1629.4489190816,
          "highestDps": 1629.4489190816,
          "spec": "Balance",
          "allStars": {
            "points": 114.57,
            "rank": 150,
            "rankPercent": 98.56122054847431,
            "total": 10356
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 93.2511,
          "medianPerformance": 83.3353,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 814.55250437737,
          "highestDps": 814.55250437737,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 862,
            "rankPercent": 90.94637223974763,
            "total": 9510
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.3761,
          "medianPerformance": 88.3784,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1200.6903353057,
          "highestDps": 1200.6903353057,
          "spec": "Balance",
          "allStars": {
            "points": 112.42,
            "rank": 330,
            "rankPercent": 96.8313589521333,
            "total": 10383
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 94.0882,
          "medianPerformance": 92.1413,
          "totalKills": 5,
          "fastestKill": 150650,
          "bestAmount": 1315.8402531662,
          "highestDps": 1315.8402531662,
          "spec": "Balance",
          "allStars": {
            "points": 106.97,
            "rank": 768,
            "rankPercent": 92.54471228615863,
            "total": 10288
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 93.0471,
          "medianPerformance": 88.575,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 1263.4881564236,
          "highestDps": 1263.4881564236,
          "spec": "Balance",
          "allStars": {
            "points": 100.05,
            "rank": 1127,
            "rankPercent": 89.37033890304919,
            "total": 10593
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 77.8212,
          "medianPerformance": 54.5542,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 779.97413200191,
          "highestDps": 779.97413200191,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 2660,
            "rankPercent": 71.90999366152546,
            "total": 9466
          }
        }
      ],
      "bestPerformanceAverage": 96.6167625,
      "medianPerformanceAverage": 90.09866250000002,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "betonnyi": {
      "characterName": "Betonnyi",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107023331,
      "gear": [
        {
          "id": 24545,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_07.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 33066,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_36.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29023,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_54.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2997,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24544,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate20.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 32805,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_14.jpg",
          "itemLevel": 136,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29022,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_24.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 32793,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2658,
          "temporaryEnchantID": null
        },
        {
          "id": 32818,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 24549,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_54.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 33057,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30446,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_gem_sapphire_01.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 24550,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_70.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2667,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30025,
          "slot": 18,
          "quality": 4,
          "icon": "inv_throwingknife_06.jpg",
          "itemLevel": 134,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31404,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 68.3784425479735,
          "total": 4925,
          "bestAmount": 997.49559947043,
          "medianPerformance": 60.36730726385593,
          "averagePerformance": 60.36730726385593,
          "totalKills": 2,
          "fastestKill": 4632749,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 83.57411725599064,
          "total": 4925,
          "bestAmount": 617.97289316311,
          "medianPerformance": 74.27134980279504,
          "averagePerformance": 74.27134980279504,
          "totalKills": 2,
          "fastestKill": 4632632,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 76.41384047455195,
          "total": 4780,
          "bestAmount": 978.83832555511,
          "medianPerformance": 64.69072708944475,
          "averagePerformance": 64.69072708944475,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 80.8573254420148,
          "total": 4780,
          "bestAmount": 572.21044890511,
          "medianPerformance": 63.08816105150102,
          "averagePerformance": 63.08816105150102,
          "totalKills": 2,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 86.1305,
          "medianPerformance": 67.0147,
          "totalKills": 2,
          "fastestKill": 102130,
          "bestAmount": 1386.1549006169,
          "highestDps": 1386.1549006169,
          "spec": "Arms",
          "allStars": {
            "points": 87.02,
            "rank": 2300,
            "rankPercent": 76.63617886178862,
            "total": 9840
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 65.218,
          "medianPerformance": 60.666,
          "totalKills": 2,
          "fastestKill": 187766,
          "bestAmount": 912.8852036302,
          "highestDps": 912.8852036302,
          "spec": "Arms",
          "allStars": {
            "points": 49.78,
            "rank": 5808,
            "rankPercent": 42.074812967581046,
            "total": 10025
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 91.2343,
          "medianPerformance": 76.4583,
          "totalKills": 2,
          "fastestKill": 163533,
          "bestAmount": 1287.3915356534,
          "highestDps": 1287.3915356534,
          "spec": "Arms",
          "allStars": {
            "points": 93.98,
            "rank": 1794,
            "rankPercent": 82.31581023769603,
            "total": 10139
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 51.1018,
          "medianPerformance": 49.3274,
          "totalKills": 2,
          "fastestKill": 115131,
          "bestAmount": 1390.2511052627,
          "highestDps": 1390.2511052627,
          "spec": "Arms",
          "allStars": {
            "points": 45.29,
            "rank": 5245,
            "rankPercent": 39.682539682539684,
            "total": 8694
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 68.6113,
          "medianPerformance": 68.5957,
          "totalKills": 2,
          "fastestKill": 203960,
          "bestAmount": 1238.1986664052,
          "highestDps": 1238.1986664052,
          "spec": "Arms",
          "allStars": {
            "points": 69.98,
            "rank": 4131,
            "rankPercent": 58.261748357756446,
            "total": 9895
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 38.3971,
          "medianPerformance": 37.1234,
          "totalKills": 2,
          "fastestKill": 402466,
          "bestAmount": 595.29789448481,
          "highestDps": 595.29789448481,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 6415,
            "rankPercent": 29.53197099538563,
            "total": 9102
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 67.1929,
          "medianPerformance": 65.2497,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 780.67380986624,
          "highestDps": 780.67380986624,
          "spec": "Arms",
          "allStars": {
            "points": 64.93,
            "rank": 4353,
            "rankPercent": 52.757273122014766,
            "total": 9212
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 73.339,
          "medianPerformance": 58.029,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 1349.7366721485,
          "highestDps": 1349.7366721485,
          "spec": "Arms",
          "allStars": {
            "points": 73.77,
            "rank": 3643,
            "rankPercent": 61.77581863979849,
            "total": 9528
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 58.0011,
          "medianPerformance": 46.4504,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 1180.9912112108,
          "highestDps": 1180.9912112108,
          "spec": "Arms",
          "allStars": {
            "points": 53.58,
            "rank": 5286,
            "rankPercent": 46.62155337844662,
            "total": 9901
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 82.5978,
          "medianPerformance": 71.1996,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 926.79895226436,
          "highestDps": 926.79895226436,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 2291,
            "rankPercent": 73.59317343173431,
            "total": 8672
          }
        }
      ],
      "bestPerformanceAverage": 70.10361250000001,
      "medianPerformanceAverage": 61.4739,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "bigfrendd": {
      "characterName": "Bigfrendd",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109310604,
      "gear": [
        {
          "id": 29040,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28755,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2983,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30185,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate08.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28656,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31544,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_14.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 30026,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_17.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 30644,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_28.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29282,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27892,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_08.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 32944,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_hand_12.jpg",
          "itemLevel": 134,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 28308,
          "slot": 17,
          "quality": 4,
          "icon": "inv_axe_54.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 186073,
          "slot": 18,
          "quality": 2,
          "icon": "spell_nature_manaregentotem.jpg",
          "itemLevel": 52,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 65.15978328668079,
          "total": 13273,
          "bestAmount": 1051.4862611532,
          "medianPerformance": 19.69960305267147,
          "averagePerformance": 30.547427584212063,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 60.517418003198344,
          "total": 13273,
          "bestAmount": 512.63844668856,
          "medianPerformance": 51.405891543846465,
          "averagePerformance": 40.64477321676363,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 48.950478122230066,
          "total": 15485,
          "bestAmount": 876.01858311193,
          "medianPerformance": 40.82033551276339,
          "averagePerformance": 33.72922058242087,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 61.422022549695015,
          "total": 15485,
          "bestAmount": 518.16129936418,
          "medianPerformance": 42.79289016433862,
          "averagePerformance": 41.58336555353605,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.5776,
          "medianPerformance": 65.3468,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 1691.5550764894,
          "highestDps": 1691.5550764894,
          "spec": "Enhancement",
          "allStars": {
            "points": 104.9,
            "rank": 1565,
            "rankPercent": 91.94146743610882,
            "total": 19408
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 59.3153,
          "medianPerformance": 29.7225,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1057.7548974718,
          "highestDps": 1057.7548974718,
          "spec": "Enhancement",
          "allStars": {
            "points": 58.47,
            "rank": 9700,
            "rankPercent": 50.015460729746444,
            "total": 19404
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 82.4743,
          "medianPerformance": 56.6105,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1274.9111175171,
          "highestDps": 1274.9111175171,
          "spec": "Enhancement",
          "allStars": {
            "points": 92.56,
            "rank": 3808,
            "rankPercent": 80.11387379857919,
            "total": 19144
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 72.459,
          "medianPerformance": 51.9343,
          "totalKills": 5,
          "fastestKill": 116887,
          "bestAmount": 1497.370672022,
          "highestDps": 1497.370672022,
          "spec": "Enhancement",
          "allStars": {
            "points": 75.24,
            "rank": 6436,
            "rankPercent": 65.6964656964657,
            "total": 18759
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 50.995,
          "medianPerformance": 39.5491,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 1335.1009698163,
          "highestDps": 1335.1009698163,
          "spec": "Enhancement",
          "allStars": {
            "points": 67.83,
            "rank": 10480,
            "rankPercent": 44.28434708634624,
            "total": 18808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 36.9956,
          "medianPerformance": 10.1908,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 675.12144302656,
          "highestDps": 675.12144302656,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 11468,
            "rankPercent": 34.564026477973066,
            "total": 17524
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 68.1166,
          "medianPerformance": 44.1757,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 825.28752701367,
          "highestDps": 825.28752701367,
          "spec": "Enhancement",
          "allStars": {
            "points": 71.35,
            "rank": 7436,
            "rankPercent": 60.14686963979417,
            "total": 18656
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 61.6885,
          "medianPerformance": 38.7821,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 1400.5073462187,
          "highestDps": 1400.5073462187,
          "spec": "Enhancement",
          "allStars": {
            "points": 74.51,
            "rank": 8525,
            "rankPercent": 54.27529235060616,
            "total": 18642
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 63.5186,
          "medianPerformance": 30.2327,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 1326.1798839458,
          "highestDps": 1326.1798839458,
          "spec": "Enhancement",
          "allStars": {
            "points": 69.51,
            "rank": 7382,
            "rankPercent": 60.651455379038275,
            "total": 18758
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 57.007,
          "medianPerformance": 35.0187,
          "totalKills": 5,
          "fastestKill": 433670,
          "bestAmount": 718.43469396114,
          "highestDps": 718.43469396114,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 10178,
            "rankPercent": 41.581998737156304,
            "total": 17421
          }
        }
      ],
      "bestPerformanceAverage": 69.2681125,
      "medianPerformanceAverage": 44.54421250000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "bigkoshenya": {
      "characterName": "Bigkoshenya",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "overallRanks": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": "Character not found on spineshatter-eu",
      "partial": false
    },
    "blinkmate": {
      "characterName": "Blinkmate",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107402610,
      "gear": [
        {
          "id": 29076,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_84.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30210,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_49.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2995,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30196,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_61.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28799,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30207,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_22.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 32795,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 32820,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 30205,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_49.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29287,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30720,
          "slot": 14,
          "quality": 4,
          "icon": "spell_nature_poisoncleansingtotem.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27981,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29271,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_outlandraid_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28673,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31404,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 96.19629258846392,
          "total": 11743,
          "bestAmount": 1498.4480991243,
          "medianPerformance": 77.17704224064187,
          "averagePerformance": 77.39230145537383,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 86.7458074096611,
          "total": 25869,
          "bestAmount": 817.28517731868,
          "medianPerformance": 77.47450523715978,
          "averagePerformance": 69.63826602018126,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 88.23619500121232,
          "total": 16562,
          "bestAmount": 1378.6686000555,
          "medianPerformance": 70.7961207824489,
          "averagePerformance": 66.20705634185124,
          "totalKills": 6,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 83.53152284227859,
          "total": 26638,
          "bestAmount": 758.47937903251,
          "medianPerformance": 56.346606495780435,
          "averagePerformance": 52.96176360792516,
          "totalKills": 6,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.578,
          "medianPerformance": 94.588,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 2401.3825456199,
          "highestDps": 2401.3825456199,
          "spec": "Arcane",
          "allStars": {
            "points": 108.99,
            "rank": 1301,
            "rankPercent": 96.13739006417875,
            "total": 33656
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.4104,
          "medianPerformance": 73.6816,
          "totalKills": 5,
          "fastestKill": 170600,
          "bestAmount": 1490.0871690045,
          "highestDps": 1490.0871690045,
          "spec": "Arcane",
          "allStars": {
            "points": 87.53,
            "rank": 6977,
            "rankPercent": 79.59935663108642,
            "total": 34195
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 96.0537,
          "medianPerformance": 91.1398,
          "totalKills": 5,
          "fastestKill": 159421,
          "bestAmount": 1680.1318388338,
          "highestDps": 1680.1318388338,
          "spec": "Arcane",
          "allStars": {
            "points": 100.97,
            "rank": 3575,
            "rankPercent": 89.41193897200415,
            "total": 33755
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 91.8456,
          "medianPerformance": 88.387,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1846.442950841,
          "highestDps": 1846.442950841,
          "spec": "Arcane",
          "allStars": {
            "points": 92.55,
            "rank": 5273,
            "rankPercent": 84.1286088448686,
            "total": 33217
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 93.601,
          "medianPerformance": 76.4894,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1819.6509119435,
          "highestDps": 1819.6509119435,
          "spec": "Arcane",
          "allStars": {
            "points": 97.63,
            "rank": 4919,
            "rankPercent": 85.05485155134166,
            "total": 32907
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.5251,
          "medianPerformance": 83.956,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 1166.4231650648,
          "highestDps": 1166.4231650648,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 2773,
            "rankPercent": 90.88877202208782,
            "total": 30424
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 91.2233,
          "medianPerformance": 78.8745,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1374.8381993384,
          "highestDps": 1374.8381993384,
          "spec": "Arcane",
          "allStars": {
            "points": 91.66,
            "rank": 6981,
            "rankPercent": 79.22619047619048,
            "total": 33600
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 73.5779,
          "medianPerformance": 67.0263,
          "totalKills": 5,
          "fastestKill": 150193,
          "bestAmount": 1500.1971177012,
          "highestDps": 1500.1971177012,
          "spec": "Arcane",
          "allStars": {
            "points": 70.04,
            "rank": 13338,
            "rankPercent": 59.675273628832315,
            "total": 33074
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.8756,
          "medianPerformance": 78.2567,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 1855.6753932563,
          "highestDps": 1855.6753932563,
          "spec": "Arcane",
          "allStars": {
            "points": 95.09,
            "rank": 4572,
            "rankPercent": 86.1824007738581,
            "total": 33081
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 88.1114,
          "medianPerformance": 74.5764,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 1220.9935698619,
          "highestDps": 1220.9935698619,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 6884,
            "rankPercent": 77.59877628067434,
            "total": 30726
          }
        }
      ],
      "bestPerformanceAverage": 91.7706875,
      "medianPerformanceAverage": 81.0554125,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "cambellsh": {
      "characterName": "Cambellsh",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 108347172,
      "gear": [
        {
          "id": 28275,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 28674,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_34.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27801,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30139,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_chain_15.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28828,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29985,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 28746,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 25697,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_14.jpg",
          "itemLevel": 114,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 30140,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 29298,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28288,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_enggizmos_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31255,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 103,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 27903,
          "slot": 16,
          "quality": 3,
          "icon": "inv_spear_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 60.39467608629162,
          "total": 7697,
          "bestAmount": 1060.8651044308,
          "medianPerformance": 56.397545837643904,
          "averagePerformance": 56.93621496719768,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 64.74664459106535,
          "total": 7697,
          "bestAmount": 531.07409226669,
          "medianPerformance": 65.70112610375986,
          "averagePerformance": 58.88257508317631,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 69.81995137981149,
          "total": 7731,
          "bestAmount": 984.57097056684,
          "medianPerformance": 60.548405910896044,
          "averagePerformance": 61.23018453462761,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 80.11986459742077,
          "total": 7731,
          "bestAmount": 577.74499535309,
          "medianPerformance": 65.64090902297174,
          "averagePerformance": 65.72290239209536,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 85.6298,
          "medianPerformance": 78.5849,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 1481.4738149451,
          "highestDps": 1481.4738149451,
          "spec": "Survival",
          "allStars": {
            "points": 87.43,
            "rank": 2418,
            "rankPercent": 75.60064607308702,
            "total": 9906
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 80.7199,
          "medianPerformance": 69.178,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1119.476035492,
          "highestDps": 1119.476035492,
          "spec": "Survival",
          "allStars": {
            "points": 81.09,
            "rank": 2776,
            "rankPercent": 72.26386806596702,
            "total": 10005
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 91.6027,
          "medianPerformance": 73.6848,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1211.1047203158,
          "highestDps": 1211.1047203158,
          "spec": "Survival",
          "allStars": {
            "points": 86.92,
            "rank": 2392,
            "rankPercent": 75.86554961138589,
            "total": 9907
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 90.9235,
          "medianPerformance": 75.6991,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1739.8354917442,
          "highestDps": 1739.8354917442,
          "spec": "Survival",
          "allStars": {
            "points": 95.01,
            "rank": 1649,
            "rankPercent": 83.08008213552361,
            "total": 9740
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 65.4955,
          "medianPerformance": 27.3073,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 1429.0350795161,
          "highestDps": 1429.0350795161,
          "spec": "Survival",
          "allStars": {
            "points": 69.39,
            "rank": 4105,
            "rankPercent": 57.72994129158513,
            "total": 9709
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 90.2345,
          "medianPerformance": 54.9625,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 855.73049517169,
          "highestDps": 855.73049517169,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 1975,
            "rankPercent": 78.44272141531069,
            "total": 9157
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 80.1936,
          "medianPerformance": 78.3134,
          "totalKills": 4,
          "fastestKill": 255889,
          "bestAmount": 1042.5568376557,
          "highestDps": 1042.5568376557,
          "spec": "Survival",
          "allStars": {
            "points": 88.32,
            "rank": 2254,
            "rankPercent": 76.6625233064015,
            "total": 9654
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 80.8139,
          "medianPerformance": 74.8881,
          "totalKills": 4,
          "fastestKill": 143538,
          "bestAmount": 1110.5409546865,
          "highestDps": 1110.5409546865,
          "spec": "Survival",
          "allStars": {
            "points": 83.83,
            "rank": 2597,
            "rankPercent": 73.42342342342343,
            "total": 9768
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 76.6798,
          "medianPerformance": 62.9202,
          "totalKills": 4,
          "fastestKill": 103400,
          "bestAmount": 1434.2962198538,
          "highestDps": 1434.2962198538,
          "spec": "Survival",
          "allStars": {
            "points": 76.56,
            "rank": 3121,
            "rankPercent": 67.53044021230097,
            "total": 9609
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 58.6587,
          "medianPerformance": 45.8531,
          "totalKills": 4,
          "fastestKill": 427207,
          "bestAmount": 845.08036064289,
          "highestDps": 845.08036064289,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 4512,
            "rankPercent": 49.95562458398047,
            "total": 9014
          }
        }
      ],
      "bestPerformanceAverage": 81.5073375,
      "medianPerformanceAverage": 67.571975,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "cambellsw": {
      "characterName": "Cambellsw",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109678601,
      "gear": [
        {
          "id": 28182,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31695,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_34.jpg",
          "itemLevel": 103,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 33173,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2996,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23522,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32805,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_14.jpg",
          "itemLevel": 136,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 32793,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2658,
          "temporaryEnchantID": null
        },
        {
          "id": 32818,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 25685,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_22.jpg",
          "itemLevel": 106,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28730,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27740,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27920,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_armorkit_11.jpg",
          "itemLevel": 91,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28041,
          "slot": 14,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28031,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 97,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28437,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_37.jpg",
          "itemLevel": 107,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28308,
          "slot": 17,
          "quality": 4,
          "icon": "inv_axe_54.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30279,
          "slot": 18,
          "quality": 2,
          "icon": "inv_weapon_rifle_06.jpg",
          "itemLevel": 111,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "cambels": {
      "characterName": "Cambels",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105376760,
      "gear": [
        {
          "id": 30206,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_86.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30210,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_49.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2982,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30196,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_61.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30038,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30207,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_22.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 29918,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 30205,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_49.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29287,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30720,
          "slot": 13,
          "quality": 4,
          "icon": "spell_nature_poisoncleansingtotem.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28570,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29988,
          "slot": 16,
          "quality": 4,
          "icon": "inv_staff_43.jpg",
          "itemLevel": 141,
          "permanentEnchantID": 2671,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28673,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 94.42258543157527,
          "total": 25869,
          "bestAmount": 1636.8409780678,
          "medianPerformance": 94.42258543157527,
          "averagePerformance": 93.74180077781068,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 92.69920263214817,
          "total": 25869,
          "bestAmount": 905.23823826989,
          "medianPerformance": 91.76384381716689,
          "averagePerformance": 78.98568947278554,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 98.22769366752347,
          "total": 26638,
          "bestAmount": 1715.7500021173,
          "medianPerformance": 91.94241998032977,
          "averagePerformance": 85.0196721804599,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 97.28212213205975,
          "total": 22864,
          "bestAmount": 953.00439284594,
          "medianPerformance": 91.62581494842657,
          "averagePerformance": 80.07867709928671,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7588,
          "medianPerformance": 99.4754,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 2914.6907132894,
          "highestDps": 2914.6907132894,
          "spec": "Arcane",
          "allStars": {
            "points": 115.27,
            "rank": 99,
            "rankPercent": 99.70881863560732,
            "total": 33656
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 99.4118,
          "medianPerformance": 97.572,
          "totalKills": 5,
          "fastestKill": 170511,
          "bestAmount": 1966.3540768631,
          "highestDps": 1966.3540768631,
          "spec": "Arcane",
          "allStars": {
            "points": 108.2,
            "rank": 722,
            "rankPercent": 97.89150460593655,
            "total": 34195
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 99.3958,
          "medianPerformance": 89.8797,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 2125.0452855372,
          "highestDps": 2125.0452855372,
          "spec": "Arcane",
          "allStars": {
            "points": 112.63,
            "rank": 645,
            "rankPercent": 98.0921344985928,
            "total": 33755
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 98.2029,
          "medianPerformance": 95.8132,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 2245.1214364569,
          "highestDps": 2245.1214364569,
          "spec": "Arcane",
          "allStars": {
            "points": 105.73,
            "rank": 1462,
            "rankPercent": 95.60164975765422,
            "total": 33217
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.8939,
          "medianPerformance": 95.2575,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 2304.6054051598,
          "highestDps": 2304.6054051598,
          "spec": "Arcane",
          "allStars": {
            "points": 114.48,
            "rank": 430,
            "rankPercent": 98.6963260096636,
            "total": 32907
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 98.8372,
          "medianPerformance": 91.4377,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 1330.3538062956,
          "highestDps": 1330.3538062956,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 391,
            "rankPercent": 98.71811727583487,
            "total": 30424
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 99.7699,
          "medianPerformance": 96.0603,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1967.4758301807,
          "highestDps": 1967.4758301807,
          "spec": "Arcane",
          "allStars": {
            "points": 117.35,
            "rank": 76,
            "rankPercent": 99.77678571428571,
            "total": 33600
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.1126,
          "medianPerformance": 96.2945,
          "totalKills": 5,
          "fastestKill": 150650,
          "bestAmount": 2270.7020519014,
          "highestDps": 2270.7020519014,
          "spec": "Arcane",
          "allStars": {
            "points": 113.56,
            "rank": 558,
            "rankPercent": 98.31589768398138,
            "total": 33074
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.8019,
          "medianPerformance": 97.254,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 2141.048197679,
          "highestDps": 2141.048197679,
          "spec": "Arcane",
          "allStars": {
            "points": 106.62,
            "rank": 1181,
            "rankPercent": 96.43299779329524,
            "total": 33081
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 95.5809,
          "medianPerformance": 83.6466,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 1422.1496369472,
          "highestDps": 1422.1496369472,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 1540,
            "rankPercent": 94.99121265377856,
            "total": 30726
          }
        }
      ],
      "bestPerformanceAverage": 99.16845,
      "medianPerformanceAverage": 95.950825,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "chaiser": {
      "characterName": "Chaiser",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105987217,
      "gear": [
        {
          "id": 8345,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_04.jpg",
          "itemLevel": 45,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30230,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_48.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2978,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30222,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_12.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": 2791
        },
        {
          "id": 28423,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_17.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30229,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_23.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3013,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28424,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 30644,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_28.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29298,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 14,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 30021,
          "slot": 16,
          "quality": 4,
          "icon": "inv_staff_50.jpg",
          "itemLevel": 134,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": 2955
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32387,
          "slot": 18,
          "quality": 3,
          "icon": "inv-mount_raven_54.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 89.19724025482495,
          "total": 5413,
          "bestAmount": 681.12958271792,
          "medianPerformance": 74.16153795833064,
          "averagePerformance": 77.19002571545073,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 85.35305347789226,
          "total": 5413,
          "bestAmount": 370.72531837913,
          "medianPerformance": 85.21892414928897,
          "averagePerformance": 77.40441913181454,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 56.06882260738882,
          "total": 8713,
          "bestAmount": 641.3781796523,
          "medianPerformance": 73.45400288355795,
          "averagePerformance": 73.41864014182815,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 84.44195359585815,
          "total": 7447,
          "bestAmount": 372.45784589966,
          "medianPerformance": 84.01647394953851,
          "averagePerformance": 74.71474672613041,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.8497,
          "medianPerformance": 94.8497,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 721.22009090649,
          "highestDps": 721.22009090649,
          "spec": "Guardian",
          "allStars": {
            "points": 98.38,
            "rank": 912,
            "rankPercent": 87.84685165421558,
            "total": 7496
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.4131,
          "medianPerformance": 92.8499,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 717.65441112775,
          "highestDps": 717.65441112775,
          "spec": "Guardian",
          "allStars": {
            "points": 103.8,
            "rank": 585,
            "rankPercent": 92.54626675175494,
            "total": 7835
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 90.6655,
          "medianPerformance": 88.0145,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 752.24093673214,
          "highestDps": 752.24093673214,
          "spec": "Guardian",
          "allStars": {
            "points": 101.76,
            "rank": 983,
            "rankPercent": 89.43972470158081,
            "total": 9299
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 90.9079,
          "medianPerformance": 85.9959,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 949.21343300234,
          "highestDps": 949.21343300234,
          "spec": "Guardian",
          "allStars": {
            "points": 99.17,
            "rank": 1502,
            "rankPercent": 87.92923200643345,
            "total": 12435
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 87.6579,
          "medianPerformance": 84.1845,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 808.55616738271,
          "highestDps": 808.55616738271,
          "spec": "Guardian",
          "allStars": {
            "points": 97.2,
            "rank": 1692,
            "rankPercent": 82.69014228682568,
            "total": 9769
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 88.3771,
          "medianPerformance": 48.9094,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 476.21177433783,
          "highestDps": 476.21177433783,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 979,
            "rankPercent": 86.94259012016022,
            "total": 7490
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 96.7305,
          "medianPerformance": 90.5177,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 584.46354091759,
          "highestDps": 584.46354091759,
          "spec": "Guardian",
          "allStars": {
            "points": 106.8,
            "rank": 916,
            "rankPercent": 93.18181818181819,
            "total": 13420
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 90.8872,
          "medianPerformance": 82.5844,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 897.90469595787,
          "highestDps": 897.90469595787,
          "spec": "Guardian",
          "allStars": {
            "points": 99.22,
            "rank": 1994,
            "rankPercent": 84.88204505802928,
            "total": 13183
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.2017,
          "medianPerformance": 87.5521,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 850.61599407949,
          "highestDps": 850.61599407949,
          "spec": "Guardian",
          "allStars": {
            "points": 98.38,
            "rank": 1052,
            "rankPercent": 88.21484637811169,
            "total": 8918
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 83.9966,
          "medianPerformance": 66.1128,
          "totalKills": 5,
          "fastestKill": 427207,
          "bestAmount": 532.72067171184,
          "highestDps": 532.72067171184,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 1109,
            "rankPercent": 80.30222222222223,
            "total": 5625
          }
        }
      ],
      "bestPerformanceAverage": 92.6641875,
      "medianPerformanceAverage": 88.3185875,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "chortenya": {
      "characterName": "Chortenya",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106035284,
      "gear": [
        {
          "id": 32494,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21869,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2995,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28964,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30038,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 30037,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28766,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28802,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_65.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2672,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28673,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 97.0305626261692,
          "total": 26478,
          "bestAmount": 1470.3243806875,
          "medianPerformance": 84.58006964351696,
          "averagePerformance": 73.84276450643071,
          "totalKills": 4,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 95.73927170659154,
          "total": 26478,
          "bestAmount": 904.49204010155,
          "medianPerformance": 85.67458617583254,
          "averagePerformance": 72.54420899830068,
          "totalKills": 4,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 92.42639682109963,
          "total": 12341,
          "bestAmount": 1320.4976297634,
          "medianPerformance": 77.8164851719209,
          "averagePerformance": 75.18446102653415,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 95.62105344306659,
          "total": 26851,
          "bestAmount": 906.25016596103,
          "medianPerformance": 85.86787799990958,
          "averagePerformance": 74.8243799105385,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.069,
          "medianPerformance": 96.3963,
          "totalKills": 4,
          "fastestKill": 96484,
          "bestAmount": 2210.739604494,
          "highestDps": 2210.739604494,
          "spec": "Destruction",
          "allStars": {
            "points": 112.44,
            "rank": 728,
            "rankPercent": 97.84087196697455,
            "total": 33671
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.7352,
          "medianPerformance": 87.3463,
          "totalKills": 4,
          "fastestKill": 155841,
          "bestAmount": 1481.7153380689,
          "highestDps": 1481.7153380689,
          "spec": "Destruction",
          "allStars": {
            "points": 101.14,
            "rank": 2983,
            "rankPercent": 91.26333059885152,
            "total": 34132
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 85.8752,
          "medianPerformance": 8.70739,
          "totalKills": 4,
          "fastestKill": 145698,
          "bestAmount": 1355.3034358742,
          "highestDps": 1355.3034358742,
          "spec": "Destruction",
          "allStars": {
            "points": 95.82,
            "rank": 5101,
            "rankPercent": 84.56463182107079,
            "total": 33041
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.0697,
          "medianPerformance": 85.143,
          "totalKills": 4,
          "fastestKill": 116887,
          "bestAmount": 1864.3133966994,
          "highestDps": 1864.3133966994,
          "spec": "Destruction",
          "allStars": {
            "points": 103.15,
            "rank": 2836,
            "rankPercent": 91.4849522436475,
            "total": 33294
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.3656,
          "medianPerformance": 91.2739,
          "totalKills": 4,
          "fastestKill": 173996,
          "bestAmount": 2035.6351114216,
          "highestDps": 2035.6351114216,
          "spec": "Destruction",
          "allStars": {
            "points": 112.4,
            "rank": 987,
            "rankPercent": 97.0233063639657,
            "total": 33124
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 96.1522,
          "medianPerformance": 88.6727,
          "totalKills": 4,
          "fastestKill": 395742,
          "bestAmount": 1135.4793257467,
          "highestDps": 1135.4793257467,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 1381,
            "rankPercent": 95.52456623966272,
            "total": 30835
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 95.3362,
          "medianPerformance": 92.6256,
          "totalKills": 4,
          "fastestKill": 255889,
          "bestAmount": 1558.6313264024,
          "highestDps": 1558.6313264024,
          "spec": "Destruction",
          "allStars": {
            "points": 108.85,
            "rank": 1966,
            "rankPercent": 94.01297949483562,
            "total": 32821
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.0997,
          "medianPerformance": 80.796,
          "totalKills": 4,
          "fastestKill": 143538,
          "bestAmount": 2034.8061140604,
          "highestDps": 2034.8061140604,
          "spec": "Destruction",
          "allStars": {
            "points": 112.09,
            "rank": 1226,
            "rankPercent": 96.27399093591265,
            "total": 32877
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 92.839,
          "medianPerformance": 76.451,
          "totalKills": 4,
          "fastestKill": 103400,
          "bestAmount": 1636.9052224371,
          "highestDps": 1636.9052224371,
          "spec": "Destruction",
          "allStars": {
            "points": 96.69,
            "rank": 4332,
            "rankPercent": 86.82024284105779,
            "total": 32861
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 89.3003,
          "medianPerformance": 66.4766,
          "totalKills": 4,
          "fastestKill": 433670,
          "bestAmount": 1179.5567409549,
          "highestDps": 1179.5567409549,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 4520,
            "rankPercent": 85.24070808021425,
            "total": 30618
          }
        }
      ],
      "bestPerformanceAverage": 94.7987,
      "medianPerformanceAverage": 77.34243625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "deserv": {
      "characterName": "Deserv",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 102085054,
      "gear": [
        {
          "id": 8345,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_04.jpg",
          "itemLevel": 45,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29100,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29096,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_11.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 28423,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_17.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29099,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_22.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3013,
          "temporaryEnchantID": null
        },
        {
          "id": 30674,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 28424,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 28506,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_28.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28377,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_07.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 29171,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_10.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29390,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_idolofhealth.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 67.41222351046734,
          "total": 6314,
          "bestAmount": 894.75980407785,
          "medianPerformance": 63.3253294104126,
          "averagePerformance": 63.3253294104126,
          "totalKills": 2,
          "fastestKill": 4632749,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 72.77395524693276,
          "total": 6314,
          "bestAmount": 407.75481410999,
          "medianPerformance": 69.62795509048271,
          "averagePerformance": 69.62795509048271,
          "totalKills": 2,
          "fastestKill": 4632632,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 57.29500575051636,
          "total": 6398,
          "bestAmount": 639.99185649989,
          "medianPerformance": 56.04848447979583,
          "averagePerformance": 56.04848447979583,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 73.00653941426788,
          "total": 6398,
          "bestAmount": 376.74481479856,
          "medianPerformance": 65.48549944145842,
          "averagePerformance": 65.48549944145842,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 80.9256,
          "medianPerformance": 80.8386,
          "totalKills": 2,
          "fastestKill": 96484,
          "bestAmount": 1300.6716139464,
          "highestDps": 1300.6716139464,
          "spec": "Feral",
          "allStars": {
            "points": 88.27,
            "rank": 2951,
            "rankPercent": 78.09785433217017,
            "total": 13469
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 64.7243,
          "medianPerformance": 53.1081,
          "totalKills": 2,
          "fastestKill": 161614,
          "bestAmount": 922.89653124111,
          "highestDps": 922.89653124111,
          "spec": "Feral",
          "allStars": {
            "points": 67.11,
            "rank": 6071,
            "rankPercent": 59.05288720992984,
            "total": 14824
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 83.8701,
          "medianPerformance": 71.729,
          "totalKills": 2,
          "fastestKill": 163533,
          "bestAmount": 1095.9500528945,
          "highestDps": 1095.9500528945,
          "spec": "Feral",
          "allStars": {
            "points": 87.71,
            "rank": 2804,
            "rankPercent": 77.89955057951589,
            "total": 12683
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 29.0784,
          "medianPerformance": 26.8234,
          "totalKills": 2,
          "fastestKill": 115131,
          "bestAmount": 545.83040189002,
          "highestDps": 545.83040189002,
          "spec": "Guardian",
          "allStars": {
            "points": 38.34,
            "rank": 9398,
            "rankPercent": 24.43104141535987,
            "total": 12435
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 71.6482,
          "medianPerformance": 70.2134,
          "totalKills": 2,
          "fastestKill": 181787,
          "bestAmount": 1397.9358697784,
          "highestDps": 1397.9358697784,
          "spec": "Feral",
          "allStars": {
            "points": 79.62,
            "rank": 3934,
            "rankPercent": 67.91483113069016,
            "total": 12258
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 65.356,
          "medianPerformance": 51.2982,
          "totalKills": 2,
          "fastestKill": 395742,
          "bestAmount": 687.74950770328,
          "highestDps": 687.74950770328,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 4213,
            "rankPercent": 64.05836675484257,
            "total": 11719
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 94.7517,
          "medianPerformance": 91.6219,
          "totalKills": 2,
          "fastestKill": 255889,
          "bestAmount": 735.07262914779,
          "highestDps": 735.07262914779,
          "spec": "Warden",
          "allStars": {
            "points": 105.79,
            "rank": 343,
            "rankPercent": 92.22196952467591,
            "total": 4397
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 66.9431,
          "medianPerformance": 66.9431,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 776.02080892105,
          "highestDps": 776.02080892105,
          "spec": "Guardian",
          "allStars": {
            "points": 74.69,
            "rank": 4997,
            "rankPercent": 62.102708033072894,
            "total": 13183
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 44.9669,
          "medianPerformance": 44.6889,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 910.54781334281,
          "highestDps": 910.54781334281,
          "spec": "Feral",
          "allStars": {
            "points": 48.16,
            "rank": 8101,
            "rankPercent": 41.78106806583771,
            "total": 13913
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 55.1119,
          "medianPerformance": 49.3619,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 508.58951281229,
          "highestDps": 508.58951281229,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 7195,
            "rankPercent": 49.81513777467736,
            "total": 14335
          }
        }
      ],
      "bestPerformanceAverage": 67.11353749999999,
      "medianPerformanceAverage": 63.245799999999996,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "deserve": {
      "characterName": "Deserve",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 92514748,
      "gear": [
        {
          "id": 30141,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 30017,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_30naxxramas.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30143,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30139,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_chain_15.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28750,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28454,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 30140,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28757,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_05.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28288,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_enggizmos_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28777,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28524,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_38.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28572,
          "slot": 17,
          "quality": 4,
          "icon": "inv_weapon_shortblade_39.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 30105,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_08.jpg",
          "itemLevel": 141,
          "permanentEnchantID": 2724,
          "temporaryEnchantID": null
        },
        {
          "id": 31404,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 93.69411166965952,
          "total": 23091,
          "bestAmount": 1600.5762564919,
          "medianPerformance": 78.68305075845814,
          "averagePerformance": 71.34023441011786,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 91.04838182862858,
          "total": 23091,
          "bestAmount": 763.82137231322,
          "medianPerformance": 85.05367931864863,
          "averagePerformance": 69.52010394217436,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 90.05341406818147,
          "total": 23393,
          "bestAmount": 1337.8716781415,
          "medianPerformance": 81.79099235683186,
          "averagePerformance": 72.24942173470102,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 92.7242585125099,
          "total": 23393,
          "bestAmount": 778.33861949931,
          "medianPerformance": 90.17818543331154,
          "averagePerformance": 70.71421019428342,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 96.2595,
          "medianPerformance": 95.6942,
          "totalKills": 5,
          "fastestKill": 96778,
          "bestAmount": 2248.5534888764,
          "highestDps": 2248.5534888764,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.9,
            "rank": 1524,
            "rankPercent": 95.01146413363904,
            "total": 30530
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 93.045,
          "medianPerformance": 84.4793,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1509.7826025081,
          "highestDps": 1509.7826025081,
          "spec": "BeastMastery",
          "allStars": {
            "points": 96.33,
            "rank": 3881,
            "rankPercent": 87.43401237166823,
            "total": 30877
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 93.9825,
          "medianPerformance": 76.4983,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1765.2404288322,
          "highestDps": 1765.2404288322,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.52,
            "rank": 2155,
            "rankPercent": 92.95917366717876,
            "total": 30593
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 95.3232,
          "medianPerformance": 87.5812,
          "totalKills": 5,
          "fastestKill": 116887,
          "bestAmount": 2344.9899344113,
          "highestDps": 2344.9899344113,
          "spec": "BeastMastery",
          "allStars": {
            "points": 103.62,
            "rank": 1870,
            "rankPercent": 93.78222828437407,
            "total": 30059
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 90.6195,
          "medianPerformance": 80.4647,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 2076.9730338628,
          "highestDps": 2076.9730338628,
          "spec": "BeastMastery",
          "allStars": {
            "points": 100.79,
            "rank": 3497,
            "rankPercent": 88.30847434954184,
            "total": 29902
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 98.6117,
          "medianPerformance": 36.7373,
          "totalKills": 5,
          "fastestKill": 422887,
          "bestAmount": 1197.1089175305,
          "highestDps": 1197.1089175305,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 415,
            "rankPercent": 98.49273673863182,
            "total": 27467
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 91.0218,
          "medianPerformance": 77.6951,
          "totalKills": 5,
          "fastestKill": 262590,
          "bestAmount": 1362.6642294071,
          "highestDps": 1362.6642294071,
          "spec": "BeastMastery",
          "allStars": {
            "points": 101.31,
            "rank": 3048,
            "rankPercent": 89.64169159641011,
            "total": 29416
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.5118,
          "medianPerformance": 96.9117,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 1936.6391872242,
          "highestDps": 1936.6391872242,
          "spec": "BeastMastery",
          "allStars": {
            "points": 111.21,
            "rank": 706,
            "rankPercent": 97.59566196030285,
            "total": 29322
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.4503,
          "medianPerformance": 79.1358,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 2071.4072789355,
          "highestDps": 2071.4072789355,
          "spec": "BeastMastery",
          "allStars": {
            "points": 102.88,
            "rank": 1928,
            "rankPercent": 93.44379422972237,
            "total": 29392
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 97.0704,
          "medianPerformance": 71.4102,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 1244.608081847,
          "highestDps": 1244.608081847,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 1941,
            "rankPercent": 92.8602973649345,
            "total": 27172
          }
        }
      ],
      "bestPerformanceAverage": 94.6517,
      "medianPerformanceAverage": 84.8075375,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "deserving": {
      "characterName": "Deserving",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 97176801,
      "gear": [
        {
          "id": 29058,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_91.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28245,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_36.jpg",
          "itemLevel": 113,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29060,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_55.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2605,
          "temporaryEnchantID": null
        },
        {
          "id": 53,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_01.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21875,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_04.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 28654,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29972,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 30050,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28477,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28507,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29126,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_52naxxramas.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29132,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_gem_bloodstone_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28570,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30832,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_08.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": null
        },
        {
          "id": 29272,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_orb_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30859,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_11.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 66.07497333068542,
          "total": 4456,
          "bestAmount": 922.92460491475,
          "medianPerformance": 36.833435636976944,
          "averagePerformance": 42.02994955842687,
          "totalKills": 4,
          "fastestKill": 5013943,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 74.1913218273205,
          "total": 4456,
          "bestAmount": 420.07956612191,
          "medianPerformance": 41.78796022158893,
          "averagePerformance": 45.90994884692415,
          "totalKills": 4,
          "fastestKill": 5013943,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 44.177228719762134,
          "total": 4170,
          "bestAmount": 798.3664932555,
          "medianPerformance": 44.177228719762134,
          "averagePerformance": 44.177228719762134,
          "totalKills": 1,
          "fastestKill": 5811499,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 46.17298792302609,
          "total": 4170,
          "bestAmount": 365.96306473226,
          "medianPerformance": 46.17298792302609,
          "averagePerformance": 46.17298792302609,
          "totalKills": 1,
          "fastestKill": 5803613,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 98.87313852786919,
          "medianPerformance": 92.31071369083698,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 171.38319502256,
          "highestDps": 171.38319502256,
          "spec": "Shadow",
          "allStars": {
            "points": 107.36530887115528,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 86.51569416869467,
          "medianPerformance": 48.97365374472998,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 211.06590117487,
          "highestDps": 211.06590117487,
          "spec": "Shadow",
          "allStars": {
            "points": 91.53022850636374,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 91.09848692501005,
          "medianPerformance": 58.7534041160436,
          "totalKills": 3,
          "fastestKill": 179077,
          "bestAmount": 167.66530598569,
          "highestDps": 167.66530598569,
          "spec": "Shadow",
          "allStars": {
            "points": 94.85536691840647,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 86.94457059980732,
          "medianPerformance": 50.84385765483953,
          "totalKills": 3,
          "fastestKill": 142609,
          "bestAmount": 241.84308143245,
          "highestDps": 241.84308143245,
          "spec": "Shadow",
          "allStars": {
            "points": 92.17683514389442,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 45.76311560371892,
          "medianPerformance": 23.787090637966717,
          "totalKills": 3,
          "fastestKill": 220836,
          "bestAmount": 147.54017247752,
          "highestDps": 147.54017247752,
          "spec": "Shadow",
          "allStars": {
            "points": 50.7889199476247,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 86.36179489201433,
          "medianPerformance": 65.66546346411602,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 132.58759746165,
          "highestDps": 132.58759746165,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 80.7664397555038,
          "medianPerformance": 66.1875428872855,
          "totalKills": 2,
          "fastestKill": 307948,
          "bestAmount": 109.15803966904,
          "highestDps": 109.15803966904,
          "spec": "Shadow",
          "allStars": {
            "points": 85.40735297208295,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 92.09415153769547,
          "medianPerformance": 64.92911940243869,
          "totalKills": 2,
          "fastestKill": 170857,
          "bestAmount": 622.69031997518,
          "highestDps": 622.69031997518,
          "spec": "Shadow",
          "allStars": {
            "points": 102.16156354441972,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.39971160181486,
          "medianPerformance": 82.723866380838,
          "totalKills": 2,
          "fastestKill": 111349,
          "bestAmount": 173.99347995941,
          "highestDps": 173.99347995941,
          "spec": "Shadow",
          "allStars": {
            "points": 100.33937232640865,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 77.97914555449434,
          "medianPerformance": 77.97914555449434,
          "totalKills": 1,
          "fastestKill": 467406,
          "bestAmount": 108.12869325597,
          "highestDps": 108.12869325597,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 84.55691359001428,
      "medianPerformanceAverage": 61.06365606437237,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "dixonmyez": {
      "characterName": "Dixonmyez",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 110264557,
      "gear": [
        {
          "id": 29986,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_14.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24121,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_ahnqiraj_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21869,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21871,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_08.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28654,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29059,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_25.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21870,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_03.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28507,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 31290,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29922,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_61.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25936,
          "slot": 14,
          "quality": 2,
          "icon": "inv_misc_stonetablet_11.jpg",
          "itemLevel": 99,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24252,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32450,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_47.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2678
        },
        {
          "id": 25099,
          "slot": 17,
          "quality": 2,
          "icon": "inv_misc_orb_01.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25292,
          "slot": 18,
          "quality": 2,
          "icon": "inv_wand_07.jpg",
          "itemLevel": 111,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 46.78962204119643,
          "total": 10803,
          "bestAmount": 861.10260311276,
          "medianPerformance": 46.78962204119643,
          "averagePerformance": 46.78962204119643,
          "totalKills": 1,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 54.67689694523475,
          "total": 10803,
          "bestAmount": 417.99065024814,
          "medianPerformance": 54.67689694523475,
          "averagePerformance": 54.67689694523475,
          "totalKills": 1,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 30.632065700237447,
          "total": 10993,
          "bestAmount": 758.91253596714,
          "medianPerformance": 30.632065700237447,
          "averagePerformance": 30.632065700237447,
          "totalKills": 1,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 58.15130774920897,
          "total": 10993,
          "bestAmount": 456.1886497411,
          "medianPerformance": 58.15130774920897,
          "averagePerformance": 58.15130774920897,
          "totalKills": 1,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 69.29406122635426,
          "medianPerformance": 69.29406122635426,
          "totalKills": 1,
          "fastestKill": 101451,
          "bestAmount": 87.451084760131,
          "highestDps": 87.451084760131,
          "spec": "Shadow",
          "allStars": {
            "points": 73.62733035691531,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 30.757716015144048,
          "medianPerformance": 30.757716015144048,
          "totalKills": 1,
          "fastestKill": 155841,
          "bestAmount": 105.93489518163,
          "highestDps": 105.93489518163,
          "spec": "Shadow",
          "allStars": {
            "points": 33.27453264203038,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 73.50951409551011,
          "medianPerformance": 73.50951409551011,
          "totalKills": 1,
          "fastestKill": 145698,
          "bestAmount": 145.51332207717,
          "highestDps": 145.51332207717,
          "spec": "Shadow",
          "allStars": {
            "points": 76.77003412540245,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 25.905857488428747,
          "medianPerformance": 25.905857488428747,
          "totalKills": 1,
          "fastestKill": 116887,
          "bestAmount": 93.543336726924,
          "highestDps": 93.543336726924,
          "spec": "Shadow",
          "allStars": {
            "points": 27.929663508402044,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 68.18778451304789,
          "medianPerformance": 68.18778451304789,
          "totalKills": 1,
          "fastestKill": 173996,
          "bestAmount": 237.28131681188,
          "highestDps": 237.28131681188,
          "spec": "Shadow",
          "allStars": {
            "points": 76.27052870898902,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 40.942844758348116,
          "medianPerformance": 40.942844758348116,
          "totalKills": 1,
          "fastestKill": 501058,
          "bestAmount": 74.791740676728,
          "highestDps": 74.791740676728,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 41.75629809807121,
          "medianPerformance": 41.75629809807121,
          "totalKills": 1,
          "fastestKill": 262590,
          "bestAmount": 64.880612361476,
          "highestDps": 64.880612361476,
          "spec": "Shadow",
          "allStars": {
            "points": 44.514732495767014,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 42.981750993723665,
          "medianPerformance": 42.981750993723665,
          "totalKills": 1,
          "fastestKill": 143538,
          "bestAmount": 391.93802338057,
          "highestDps": 391.93802338057,
          "spec": "Shadow",
          "allStars": {
            "points": 49.31845069162581,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 38.56702451838831,
          "medianPerformance": 38.56702451838831,
          "totalKills": 1,
          "fastestKill": 103400,
          "bestAmount": 82.959381044487,
          "highestDps": 82.959381044487,
          "spec": "Shadow",
          "allStars": {
            "points": 41.399030507586865,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 39.67454020770445,
          "medianPerformance": 39.67454020770445,
          "totalKills": 1,
          "fastestKill": 433670,
          "bestAmount": 76.173127032075,
          "highestDps": 76.173127032075,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 48.87000086858353,
      "medianPerformanceAverage": 48.87000086858353,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "dixonmyezpala": {
      "characterName": "Dixonmyezpala",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "overallRanks": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": "Character not found on spineshatter-eu",
      "partial": false
    },
    "dontmissbyte": {
      "characterName": "Dontmissbyte",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106673921,
      "gear": [
        {
          "id": 29035,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 24121,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_ahnqiraj_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29037,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2982,
          "temporaryEnchantID": null
        },
        {
          "id": 4334,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_08.jpg",
          "itemLevel": 34,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29519,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate07.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29520,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 30067,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 29521,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28780,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_15.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 30667,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28785,
          "slot": 13,
          "quality": 4,
          "icon": "inv_trinket_naxxramas06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28797,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 23554,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_05.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": null
        },
        {
          "id": 29268,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_37.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2654,
          "temporaryEnchantID": null
        },
        {
          "id": 28248,
          "slot": 18,
          "quality": 3,
          "icon": "spell_arcane_blast.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23705,
          "slot": 19,
          "quality": 4,
          "icon": "inv_misc_tabardpvp_02.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 94.18479072731245,
          "total": 13844,
          "bestAmount": 1124.8617101579,
          "medianPerformance": 79.78875433047804,
          "averagePerformance": 82.3184707820373,
          "totalKills": 4,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 76.98471452123202,
          "total": 13844,
          "bestAmount": 544.82183152003,
          "medianPerformance": 50.84692704799778,
          "averagePerformance": 49.50050033765771,
          "totalKills": 4,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 82.56640442745143,
          "total": 14110,
          "bestAmount": 1006.9930514767,
          "medianPerformance": 77.74691176849913,
          "averagePerformance": 78.29990395066875,
          "totalKills": 3,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 75.88913696433092,
          "total": 14110,
          "bestAmount": 582.47245046985,
          "medianPerformance": 57.25555090752444,
          "averagePerformance": 52.05981977479514,
          "totalKills": 3,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 98.3583,
          "medianPerformance": 94.0703,
          "totalKills": 4,
          "fastestKill": 96484,
          "bestAmount": 1663.5420055002,
          "highestDps": 1663.5420055002,
          "spec": "Elemental",
          "allStars": {
            "points": 112.93,
            "rank": 364,
            "rankPercent": 97.98780487804878,
            "total": 18040
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 91.4651,
          "medianPerformance": 90.0108,
          "totalKills": 4,
          "fastestKill": 155841,
          "bestAmount": 1182.0894373111,
          "highestDps": 1182.0894373111,
          "spec": "Elemental",
          "allStars": {
            "points": 100.49,
            "rank": 1884,
            "rankPercent": 89.88450174590385,
            "total": 18615
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.7982,
          "medianPerformance": 71.2847,
          "totalKills": 4,
          "fastestKill": 145698,
          "bestAmount": 1349.4136714653,
          "highestDps": 1349.4136714653,
          "spec": "Elemental",
          "allStars": {
            "points": 108.87,
            "rank": 906,
            "rankPercent": 94.99778907804554,
            "total": 18092
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 88.1495,
          "medianPerformance": 75.1008,
          "totalKills": 4,
          "fastestKill": 116887,
          "bestAmount": 1602.1627725923,
          "highestDps": 1602.1627725923,
          "spec": "Elemental",
          "allStars": {
            "points": 97.91,
            "rank": 2335,
            "rankPercent": 86.69630642954856,
            "total": 17544
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.0488,
          "medianPerformance": 66.4991,
          "totalKills": 4,
          "fastestKill": 173996,
          "bestAmount": 1615.9854249523,
          "highestDps": 1615.9854249523,
          "spec": "Elemental",
          "allStars": {
            "points": 114.16,
            "rank": 373,
            "rankPercent": 97.90575916230367,
            "total": 17763
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 96.2936,
          "medianPerformance": 69.7893,
          "totalKills": 4,
          "fastestKill": 395742,
          "bestAmount": 821.85402247702,
          "highestDps": 821.85402247702,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 1748,
            "rankPercent": 89.6394259281224,
            "total": 16862
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 91.4998,
          "medianPerformance": 89.7369,
          "totalKills": 3,
          "fastestKill": 255889,
          "bestAmount": 1079.846909631,
          "highestDps": 1079.846909631,
          "spec": "Elemental",
          "allStars": {
            "points": 102.44,
            "rank": 2173,
            "rankPercent": 87.80734253957561,
            "total": 17814
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 91.7786,
          "medianPerformance": 89.1046,
          "totalKills": 3,
          "fastestKill": 143538,
          "bestAmount": 1367.0083312945,
          "highestDps": 1367.0083312945,
          "spec": "Elemental",
          "allStars": {
            "points": 103.31,
            "rank": 2018,
            "rankPercent": 88.48349891515359,
            "total": 17514
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 95.8547,
          "medianPerformance": 57.3687,
          "totalKills": 3,
          "fastestKill": 103400,
          "bestAmount": 1432.5918762089,
          "highestDps": 1432.5918762089,
          "spec": "Elemental",
          "allStars": {
            "points": 106.01,
            "rank": 919,
            "rankPercent": 94.95132816366936,
            "total": 18183
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 81.1901,
          "medianPerformance": 46.3428,
          "totalKills": 3,
          "fastestKill": 433670,
          "bestAmount": 876.8692675939,
          "highestDps": 876.8692675939,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 4089,
            "rankPercent": 75.24074859184786,
            "total": 16511
          }
        }
      ],
      "bestPerformanceAverage": 94.119125,
      "medianPerformanceAverage": 79.1469875,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "dubasaw": {
      "characterName": "Dubasaw",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105086234,
      "gear": [
        {
          "id": 28275,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27801,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2983,
          "temporaryEnchantID": null
        },
        {
          "id": 4333,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_black_01.jpg",
          "itemLevel": 31,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28228,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28750,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28514,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 27474,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28757,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_05.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29382,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 29356,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_81.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": 2677
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2722,
          "temporaryEnchantID": null
        },
        {
          "id": 31404,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "dubasw": {
      "characterName": "Dubasw",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104766898,
      "gear": [
        {
          "id": 29040,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29043,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2996,
          "temporaryEnchantID": null
        },
        {
          "id": 154,
          "slot": 4,
          "quality": 2,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28401,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3150,
          "temporaryEnchantID": null
        },
        {
          "id": 29261,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_30.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 3011,
          "temporaryEnchantID": null
        },
        {
          "id": 28746,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 28454,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 29039,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28757,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_05.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25937,
          "slot": 13,
          "quality": 2,
          "icon": "inv_misc_stonetablet_11.jpg",
          "itemLevel": 99,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28764,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_17.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27872,
          "slot": 16,
          "quality": 3,
          "icon": "inv_axe_62.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1900,
          "temporaryEnchantID": 2636
        },
        {
          "id": 27872,
          "slot": 17,
          "quality": 3,
          "icon": "inv_axe_62.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1900,
          "temporaryEnchantID": 2636
        },
        {
          "id": 27815,
          "slot": 18,
          "quality": 3,
          "icon": "spell_unused.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "edgelørd": {
      "characterName": "Edgelørd",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876720,
      "gear": [
        {
          "id": 32494,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28967,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2982,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30107,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_17.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30038,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 30037,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28766,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2672,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29982,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_15.jpg",
          "itemLevel": 134,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 98.34158630321619,
          "total": 18123,
          "bestAmount": 1457.8807653649,
          "medianPerformance": 96.00769395834112,
          "averagePerformance": 74.33088634899859,
          "totalKills": 5,
          "fastestKill": 4632749,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 86.48816537154599,
          "total": 22931,
          "bestAmount": 738.47064857689,
          "medianPerformance": 86.48816537154599,
          "averagePerformance": 73.58850341473939,
          "totalKills": 5,
          "fastestKill": 4632632,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 98.47138287152293,
          "total": 18270,
          "bestAmount": 1462.478096166,
          "medianPerformance": 93.63791833696928,
          "averagePerformance": 79.18693408487209,
          "totalKills": 4,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 90.08614364470047,
          "total": 18270,
          "bestAmount": 747.70355058746,
          "medianPerformance": 75.51999586378093,
          "averagePerformance": 62.73460956467471,
          "totalKills": 4,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.6775,
          "medianPerformance": 97.2926,
          "totalKills": 4,
          "fastestKill": 96484,
          "bestAmount": 2164.2451373073,
          "highestDps": 2164.2451373073,
          "spec": "Destruction",
          "allStars": {
            "points": 111.59,
            "rank": 915,
            "rankPercent": 97.2854979062101,
            "total": 33671
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 87.1607,
          "medianPerformance": 76.6289,
          "totalKills": 4,
          "fastestKill": 161614,
          "bestAmount": 1351.3618869652,
          "highestDps": 1351.3618869652,
          "spec": "Destruction",
          "allStars": {
            "points": 89.74,
            "rank": 6600,
            "rankPercent": 80.66623696238135,
            "total": 34132
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.1736,
          "medianPerformance": 91.5955,
          "totalKills": 4,
          "fastestKill": 163533,
          "bestAmount": 1552.0659438768,
          "highestDps": 1552.0659438768,
          "spec": "Destruction",
          "allStars": {
            "points": 105.84,
            "rank": 2310,
            "rankPercent": 93.0117127205593,
            "total": 33041
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.7408,
          "medianPerformance": 82.5241,
          "totalKills": 4,
          "fastestKill": 115131,
          "bestAmount": 1855.6612836497,
          "highestDps": 1855.6612836497,
          "spec": "Destruction",
          "allStars": {
            "points": 102.73,
            "rank": 2959,
            "rankPercent": 91.11551630924491,
            "total": 33294
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.6322,
          "medianPerformance": 97.5968,
          "totalKills": 4,
          "fastestKill": 181787,
          "bestAmount": 1986.4924494999,
          "highestDps": 1986.4924494999,
          "spec": "Destruction",
          "allStars": {
            "points": 110.84,
            "rank": 1384,
            "rankPercent": 95.8247796159884,
            "total": 33124
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 95.8298,
          "medianPerformance": 88.5016,
          "totalKills": 4,
          "fastestKill": 395742,
          "bestAmount": 1091.7724147704,
          "highestDps": 1091.7724147704,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 2395,
            "rankPercent": 92.2360953461975,
            "total": 30835
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 98.8342,
          "medianPerformance": 89.4436,
          "totalKills": 4,
          "fastestKill": 255889,
          "bestAmount": 1588.2568675392,
          "highestDps": 1588.2568675392,
          "spec": "Destruction",
          "allStars": {
            "points": 110.45,
            "rank": 1529,
            "rankPercent": 95.3444441059078,
            "total": 32821
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.7534,
          "medianPerformance": 96.7064,
          "totalKills": 4,
          "fastestKill": 150193,
          "bestAmount": 2156.0592038244,
          "highestDps": 2156.0592038244,
          "spec": "Destruction",
          "allStars": {
            "points": 115.51,
            "rank": 406,
            "rankPercent": 98.76813577881194,
            "total": 32877
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.2894,
          "medianPerformance": 87.1007,
          "totalKills": 4,
          "fastestKill": 107182,
          "bestAmount": 1912.7558731877,
          "highestDps": 1912.7558731877,
          "spec": "Destruction",
          "allStars": {
            "points": 108.11,
            "rank": 1096,
            "rankPercent": 96.66778247770914,
            "total": 32861
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 82.1501,
          "medianPerformance": 72.6721,
          "totalKills": 4,
          "fastestKill": 427207,
          "bestAmount": 1125.2599097378,
          "highestDps": 1125.2599097378,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 7011,
            "rankPercent": 77.10497093213142,
            "total": 30618
          }
        }
      ],
      "bestPerformanceAverage": 97.28272499999999,
      "medianPerformanceAverage": 89.861075,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "elitemob": {
      "characterName": "Elitemob",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109959786,
      "gear": [
        {
          "id": 28182,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 28509,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28755,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2983,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28601,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28124,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31544,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_14.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 28610,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28454,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25685,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_22.jpg",
          "itemLevel": 106,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27925,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30365,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29776,
          "slot": 13,
          "quality": 2,
          "icon": "spell_nature_abolishmagic.jpg",
          "itemLevel": 108,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28032,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_05.jpg",
          "itemLevel": 97,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28920,
          "slot": 16,
          "quality": 3,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1900,
          "temporaryEnchantID": 2636
        },
        {
          "id": 28920,
          "slot": 17,
          "quality": 3,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1900,
          "temporaryEnchantID": 2636
        },
        {
          "id": 27815,
          "slot": 18,
          "quality": 3,
          "icon": "spell_unused.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "entim": {
      "characterName": "Entim",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876713,
      "gear": [
        {
          "id": 30219,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_85.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 28609,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30221,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_48.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2980,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30216,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_12.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 21873,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_31.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28591,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 30092,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_16.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 30062,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 28521,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 30110,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_35.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 28763,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_08.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 13,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25634,
          "slot": 14,
          "quality": 2,
          "icon": "inv_jewelry_talisman_06.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29989,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 2938,
          "temporaryEnchantID": null
        },
        {
          "id": 30108,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_43.jpg",
          "itemLevel": 141,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2678
        },
        {
          "id": 29274,
          "slot": 17,
          "quality": 4,
          "icon": "inv_potion_75.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27886,
          "slot": 18,
          "quality": 3,
          "icon": "spell_nature_natureresistancetotem.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 93.37881310540368,
          "total": 8616,
          "bestAmount": 916.57561690184,
          "medianPerformance": 68.34597741029303,
          "averagePerformance": 65.06004367955533,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 92.38267242124925,
          "total": 8861,
          "bestAmount": 837.93293805372,
          "medianPerformance": 75.92740982449045,
          "averagePerformance": 74.37105727768294,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95,
          "medianPerformance": 90,
          "totalKills": 5,
          "fastestKill": 96509,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 95,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 5,
          "fastestKill": 155851,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 80,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.54205099297116,
          "medianPerformance": 50,
          "totalKills": 5,
          "fastestKill": 145711,
          "bestAmount": 63.546807066464,
          "highestDps": 63.546807066464,
          "spec": "Restoration",
          "allStars": {
            "points": 101.35885897392765,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 95,
          "medianPerformance": 95,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 95,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 90,
          "medianPerformance": 80,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 90,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 80,
          "medianPerformance": 75,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 90,
          "medianPerformance": 90,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 90,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 80,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 95,
          "medianPerformance": 90,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 95,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 91.7338277066384,
          "medianPerformance": 70,
          "totalKills": 5,
          "fastestKill": 427310,
          "bestAmount": 7.0979090561817,
          "highestDps": 7.0979090561817,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 90.31775637412139,
      "medianPerformanceAverage": 81.875,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "entimx": {
      "characterName": "Entimx",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107023329,
      "gear": [
        {
          "id": 28756,
          "slot": 1,
          "quality": 4,
          "icon": "inv_crown_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 28822,
          "slot": 2,
          "quality": 4,
          "icon": "inv_misc_bone_09.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29054,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_55.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2979,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29050,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_64.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 28652,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28742,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 28663,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_fabric_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29183,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 28508,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29290,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28763,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_08.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28823,
          "slot": 13,
          "quality": 4,
          "icon": "spell_shadow_unholyfrenzy.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29354,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2938,
          "temporaryEnchantID": null
        },
        {
          "id": 32451,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_47.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2678
        },
        {
          "id": 29170,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_orb_01.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27885,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 90.72189925360716,
          "total": 2474,
          "bestAmount": 53.350263447434,
          "medianPerformance": 45.813719155065094,
          "averagePerformance": 48.19678292596186,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 88.71285127480995,
          "total": 2474,
          "bestAmount": 25.486582598548,
          "medianPerformance": 47.381280580538785,
          "averagePerformance": 47.54217549428297,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 84.10422416139888,
          "total": 2333,
          "bestAmount": 41.287219623103,
          "medianPerformance": 75.5322398555204,
          "averagePerformance": 75.5322398555204,
          "totalKills": 2,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 82.18999416702513,
          "total": 2333,
          "bestAmount": 22.298536589473,
          "medianPerformance": 69.38236580251271,
          "averagePerformance": 69.38236580251271,
          "totalKills": 2,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.3689,
          "medianPerformance": 79.5216,
          "totalKills": 3,
          "fastestKill": 92487,
          "bestAmount": 864.17262250795,
          "highestDps": 864.17262250795,
          "spec": "Discipline",
          "allStars": {
            "points": 108.68,
            "rank": 264,
            "rankPercent": 95.35253578370737,
            "total": 5659
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.9373,
          "medianPerformance": 70.5076,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 870.95260716317,
          "highestDps": 870.95260716317,
          "spec": "Discipline",
          "allStars": {
            "points": 98.68,
            "rank": 543,
            "rankPercent": 90.1094890510949,
            "total": 5480
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 90.8003,
          "medianPerformance": 65.1029,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 866.29167063908,
          "highestDps": 866.29167063908,
          "spec": "Discipline",
          "allStars": {
            "points": 93.93,
            "rank": 726,
            "rankPercent": 86.49906890130354,
            "total": 5370
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 83.7874,
          "medianPerformance": 83.7874,
          "totalKills": 3,
          "fastestKill": 138482,
          "bestAmount": 1367.7517655724,
          "highestDps": 1367.7517655724,
          "spec": "Holy",
          "allStars": {
            "points": 94.19,
            "rank": 3548,
            "rankPercent": 83.35757518885187,
            "total": 21313
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 61.4673,
          "medianPerformance": 56.2246,
          "totalKills": 3,
          "fastestKill": 176054,
          "bestAmount": 610.97674202008,
          "highestDps": 610.97674202008,
          "spec": "Discipline",
          "allStars": {
            "points": 60.57,
            "rank": 2680,
            "rankPercent": 51.39695210449928,
            "total": 5512
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 89.7379,
          "medianPerformance": 89.7379,
          "totalKills": 3,
          "fastestKill": 398721,
          "bestAmount": 893.34396733556,
          "highestDps": 893.34396733556,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 2125,
            "rankPercent": 88.93922824558663,
            "total": 19203
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 55.1899,
          "medianPerformance": 55.1899,
          "totalKills": 2,
          "fastestKill": 247416,
          "bestAmount": 565.5737704918,
          "highestDps": 565.5737704918,
          "spec": "Holy",
          "allStars": {
            "points": 60.87,
            "rank": 9699,
            "rankPercent": 53.336861858249534,
            "total": 20783
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 70.9537,
          "medianPerformance": 70.9537,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 2480.8678145764,
          "highestDps": 2480.8678145764,
          "spec": "Holy",
          "allStars": {
            "points": 82.04,
            "rank": 6662,
            "rankPercent": 69.1048237476809,
            "total": 21560
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.4818,
          "medianPerformance": 97.4818,
          "totalKills": 2,
          "fastestKill": 102300,
          "bestAmount": 1216.7253176931,
          "highestDps": 1216.7253176931,
          "spec": "Holy",
          "allStars": {
            "points": 108.5,
            "rank": 512,
            "rankPercent": 97.55315073740663,
            "total": 20884
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 79.1861,
          "medianPerformance": 79.1861,
          "totalKills": 2,
          "fastestKill": 439330,
          "bestAmount": 766.01643411559,
          "highestDps": 766.01643411559,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 4240,
            "rankPercent": 77.93336803748048,
            "total": 19210
          }
        }
      ],
      "bestPerformanceAverage": 81.24832500000001,
      "medianPerformanceAverage": 72.34618750000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "fantagodx": {
      "characterName": "Fantagodx",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105376756,
      "gear": [
        {
          "id": 28278,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_34.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 27758,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_34.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27796,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21848,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_02.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21846,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_04.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27838,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_cloth_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28411,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 21847,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29352,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_57.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29367,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_56.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28727,
          "slot": 14,
          "quality": 4,
          "icon": "inv_trinket_naxxramas02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28766,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29155,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_01.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2678
        },
        {
          "id": 29271,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_outlandraid_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25808,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "figurehead": {
      "characterName": "Figurehead",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 103469472,
      "gear": [
        {
          "id": 29028,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 31691,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_31.jpg",
          "itemLevel": 103,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30168,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2979,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28735,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 28655,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28591,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 28752,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28194,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 29976,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_26.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29307,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29291,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28190,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28765,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2662,
          "temporaryEnchantID": null
        },
        {
          "id": 29175,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_04.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2677
        },
        {
          "id": 28728,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_gem_sapphire_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28523,
          "slot": 18,
          "quality": 4,
          "icon": "spell_nature_giftofthewaterspirit.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 75.92293914819452,
          "total": 17673,
          "bestAmount": 783.2259651836,
          "medianPerformance": 62.89198815760005,
          "averagePerformance": 64.39750056474024,
          "totalKills": 4,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 95.2978017832363,
          "total": 968,
          "bestAmount": 882.47402274217,
          "medianPerformance": 78.79116519365752,
          "averagePerformance": 78.32016821548135,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.98497397294636,
          "medianPerformance": 90.04988212395719,
          "totalKills": 4,
          "fastestKill": 96484,
          "bestAmount": 188.16591351934,
          "highestDps": 188.16591351934,
          "spec": "Restoration",
          "allStars": {
            "points": 99.14767150585547,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 96.46076991608106,
          "medianPerformance": 76.71965386280138,
          "totalKills": 4,
          "fastestKill": 155841,
          "bestAmount": 58.546852240425,
          "highestDps": 58.546852240425,
          "spec": "Restoration",
          "allStars": {
            "points": 97.78027421402587,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 95.05244929744094,
          "medianPerformance": 83.05766336012283,
          "totalKills": 4,
          "fastestKill": 145698,
          "bestAmount": 84.548798849296,
          "highestDps": 84.548798849296,
          "spec": "Restoration",
          "allStars": {
            "points": 97.63102410499323,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 67.13835544472238,
          "medianPerformance": 53.209839596598286,
          "totalKills": 4,
          "fastestKill": 116887,
          "bestAmount": 2.7120210117464,
          "highestDps": 2.7120210117464,
          "spec": "Restoration",
          "allStars": {
            "points": 67.23937451189782,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 94.4645564711351,
          "medianPerformance": 80.28554764081746,
          "totalKills": 4,
          "fastestKill": 173996,
          "bestAmount": 131.3790315039,
          "highestDps": 131.3790315039,
          "spec": "Restoration",
          "allStars": {
            "points": 98.05241421694166,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 92.46741627447281,
          "medianPerformance": 91.3788415364412,
          "totalKills": 4,
          "fastestKill": 395742,
          "bestAmount": 47.669132116442,
          "highestDps": 47.669132116442,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 95.07046805867114,
          "medianPerformance": 85.0457494783979,
          "totalKills": 4,
          "fastestKill": 255904,
          "bestAmount": 22.403747286645,
          "highestDps": 22.403747286645,
          "spec": "Restoration",
          "allStars": {
            "points": 95.71162035400349,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.17473837464267,
          "medianPerformance": 84.64570728538229,
          "totalKills": 4,
          "fastestKill": 143538,
          "bestAmount": 65.092262326324,
          "highestDps": 65.092262326324,
          "spec": "Restoration",
          "allStars": {
            "points": 101.45329956730637,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 95.58703503763012,
          "medianPerformance": 81.84783234432643,
          "totalKills": 4,
          "fastestKill": 103400,
          "bestAmount": 192.21470019342,
          "highestDps": 192.21470019342,
          "spec": "Restoration",
          "allStars": {
            "points": 99.2105774680071,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 97.21721558945137,
          "medianPerformance": 90.45630408681546,
          "totalKills": 4,
          "fastestKill": 433670,
          "bestAmount": 70.608526183118,
          "highestDps": 70.608526183118,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 92.11666832165872,
      "medianPerformanceAverage": 79.35773446155048,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "fleabus": {
      "characterName": "Fleabus",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105245557,
      "gear": [
        {
          "id": 29086,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_81.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28731,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_32.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28250,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_35.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29087,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_11.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27742,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29088,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_22.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28251,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28511,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29090,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_44.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28259,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28763,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_08.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28190,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 13968,
          "slot": 14,
          "quality": 3,
          "icon": "inv_jewelry_talisman_08.jpg",
          "itemLevel": 63,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28765,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28604,
          "slot": 16,
          "quality": 4,
          "icon": "inv_staff_57.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25940,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_idolofferocity.jpg",
          "itemLevel": 97,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 18.429870684022095,
          "total": 4141,
          "bestAmount": 572.40808882864,
          "medianPerformance": 18.429870684022095,
          "averagePerformance": 18.429870684022095,
          "totalKills": 1,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 32.52747071411768,
          "total": 4025,
          "bestAmount": 577.95876622972,
          "medianPerformance": 32.52747071411768,
          "averagePerformance": 32.52747071411768,
          "totalKills": 1,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.4545865752768,
          "medianPerformance": 99.4545865752768,
          "totalKills": 1,
          "fastestKill": 104943,
          "bestAmount": 28.834700742308,
          "highestDps": 28.834700742308,
          "spec": "Restoration",
          "allStars": {
            "points": 101.10121477466096,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 1,
          "fastestKill": 186265,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 80,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 96.04664332726496,
          "medianPerformance": 96.04664332726496,
          "totalKills": 1,
          "fastestKill": 193273,
          "bestAmount": 53.768503619233,
          "highestDps": 53.768503619233,
          "spec": "Restoration",
          "allStars": {
            "points": 99.27613766713529,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 95,
          "medianPerformance": 95,
          "totalKills": 1,
          "fastestKill": 124065,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 95,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 90,
          "medianPerformance": 90,
          "totalKills": 1,
          "fastestKill": 187092,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 90,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 94.41189637690935,
          "medianPerformance": 94.41189637690935,
          "totalKills": 1,
          "fastestKill": 443565,
          "bestAmount": 4.0625387485487,
          "highestDps": 4.0625387485487,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 90,
          "medianPerformance": 90,
          "totalKills": 1,
          "fastestKill": 331895,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 90,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 1,
          "fastestKill": 160299,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 80,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 90,
          "medianPerformance": 90,
          "totalKills": 1,
          "fastestKill": 110725,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 90,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 70,
          "medianPerformance": 70,
          "totalKills": 1,
          "fastestKill": 439573,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 90.06265373781773,
      "medianPerformanceAverage": 90.06265373781773,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "flinesham": {
      "characterName": "Flinesham",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106796178,
      "gear": [
        {
          "id": 29035,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29037,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2982,
          "temporaryEnchantID": null
        },
        {
          "id": 154,
          "slot": 4,
          "quality": 2,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30169,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate08.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30038,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30172,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29521,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28507,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28570,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29268,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_37.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2654,
          "temporaryEnchantID": null
        },
        {
          "id": 28248,
          "slot": 18,
          "quality": 3,
          "icon": "spell_arcane_blast.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23192,
          "slot": 19,
          "quality": 2,
          "icon": "inv_tabard_scarletcrusade_b_01.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 93.26158484693924,
          "total": 12109,
          "bestAmount": 1100.930069749,
          "medianPerformance": 90.83552036429717,
          "averagePerformance": 88.20100531817053,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 90.71876997482921,
          "total": 12109,
          "bestAmount": 609.1119734396,
          "medianPerformance": 81.41519998407206,
          "averagePerformance": 79.29788176849675,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 99.41746694321976,
          "total": 12319,
          "bestAmount": 1181.9017365043,
          "medianPerformance": 89.3932480908836,
          "averagePerformance": 89.09008512174752,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 95.04387809155429,
          "total": 12319,
          "bestAmount": 693.80407010624,
          "medianPerformance": 80.63436458543052,
          "averagePerformance": 75.12394033320265,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7794,
          "medianPerformance": 98.5871,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 1863.1375220301,
          "highestDps": 1863.1375220301,
          "spec": "Elemental",
          "allStars": {
            "points": 116.03,
            "rank": 125,
            "rankPercent": 99.31263858093126,
            "total": 18040
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.1523,
          "medianPerformance": 84.2544,
          "totalKills": 5,
          "fastestKill": 170600,
          "bestAmount": 1120.4161781946,
          "highestDps": 1120.4161781946,
          "spec": "Elemental",
          "allStars": {
            "points": 93.43,
            "rank": 3105,
            "rankPercent": 83.3252753156057,
            "total": 18615
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 92.0974,
          "medianPerformance": 84.5084,
          "totalKills": 5,
          "fastestKill": 159421,
          "bestAmount": 1181.1316370396,
          "highestDps": 1181.1316370396,
          "spec": "Elemental",
          "allStars": {
            "points": 97.5,
            "rank": 2667,
            "rankPercent": 85.26420517355737,
            "total": 18092
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.2277,
          "medianPerformance": 95.1262,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1829.0798103773,
          "highestDps": 1829.0798103773,
          "spec": "Elemental",
          "allStars": {
            "points": 108.48,
            "rank": 742,
            "rankPercent": 95.77633378932968,
            "total": 17544
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 99.8314,
          "medianPerformance": 77.502,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1818.4647892124,
          "highestDps": 1818.4647892124,
          "spec": "Elemental",
          "allStars": {
            "points": 118.18,
            "rank": 18,
            "rankPercent": 99.90429544558914,
            "total": 17763
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 89.7498,
          "medianPerformance": 80.8623,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 763.77134962953,
          "highestDps": 763.77134962953,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 3575,
            "rankPercent": 78.80441228798482,
            "total": 16862
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 98.9864,
          "medianPerformance": 97.3948,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1192.9988359686,
          "highestDps": 1192.9988359686,
          "spec": "Elemental",
          "allStars": {
            "points": 113.2,
            "rank": 510,
            "rankPercent": 97.14269675536096,
            "total": 17814
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.8417,
          "medianPerformance": 97.5259,
          "totalKills": 5,
          "fastestKill": 150193,
          "bestAmount": 1482.7443790167,
          "highestDps": 1482.7443790167,
          "spec": "Elemental",
          "allStars": {
            "points": 112.8,
            "rank": 558,
            "rankPercent": 96.81968710745689,
            "total": 17514
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.3636,
          "medianPerformance": 81.9098,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 1587.6372650136,
          "highestDps": 1587.6372650136,
          "spec": "Elemental",
          "allStars": {
            "points": 109.68,
            "rank": 463,
            "rankPercent": 97.45916515426497,
            "total": 18183
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 92.7345,
          "medianPerformance": 70.2764,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 970.13208641132,
          "highestDps": 970.13208641132,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 1424,
            "rankPercent": 91.38150324026407,
            "total": 16511
          }
        }
      ],
      "bestPerformanceAverage": 97.03498750000001,
      "medianPerformanceAverage": 89.601075,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "garhard": {
      "characterName": "Garhard",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105376758,
      "gear": [
        {
          "id": 28963,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_89.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28967,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2982,
          "temporaryEnchantID": null
        },
        {
          "id": 10056,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_orange_01.jpg",
          "itemLevel": 43,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28964,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 24256,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 21870,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_03.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 32820,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2935,
          "temporaryEnchantID": null
        },
        {
          "id": 28793,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27981,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 29155,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_01.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29350,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_1h_stratholme_d_01.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 63.60717480392406,
          "total": 11446,
          "bestAmount": 1047.8752017214,
          "medianPerformance": 57.15917339228336,
          "averagePerformance": 57.15917339228336,
          "totalKills": 2,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 56.20258828699071,
          "total": 26942,
          "bestAmount": 586.06530698785,
          "medianPerformance": 61.32689415881984,
          "averagePerformance": 61.32689415881984,
          "totalKills": 2,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 61.8955218671417,
          "total": 27323,
          "bestAmount": 1169.024671178,
          "medianPerformance": 64.28704019829252,
          "averagePerformance": 64.28704019829252,
          "totalKills": 2,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 74.44359162417817,
          "total": 27323,
          "bestAmount": 698.56671565158,
          "medianPerformance": 60.06035667787427,
          "averagePerformance": 60.06035667787427,
          "totalKills": 2,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 96.7308,
          "medianPerformance": 90.6082,
          "totalKills": 2,
          "fastestKill": 92487,
          "bestAmount": 2093.9159016943,
          "highestDps": 2093.9159016943,
          "spec": "Destruction",
          "allStars": {
            "points": 110.03,
            "rank": 1283,
            "rankPercent": 96.19256927326185,
            "total": 33671
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 28.3552,
          "medianPerformance": 19.4579,
          "totalKills": 2,
          "fastestKill": 170600,
          "bestAmount": 717.76572968482,
          "highestDps": 717.76572968482,
          "spec": "Destruction",
          "allStars": {
            "points": 28.58,
            "rank": 30057,
            "rankPercent": 11.941872729403492,
            "total": 34132
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 77.6036,
          "medianPerformance": 72.7756,
          "totalKills": 2,
          "fastestKill": 179077,
          "bestAmount": 1123.3803130302,
          "highestDps": 1123.3803130302,
          "spec": "Destruction",
          "allStars": {
            "points": 75.12,
            "rank": 11347,
            "rankPercent": 65.66084561605278,
            "total": 33041
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 77.5592,
          "medianPerformance": 69.9289,
          "totalKills": 2,
          "fastestKill": 138482,
          "bestAmount": 1584.8124666022,
          "highestDps": 1584.8124666022,
          "spec": "Destruction",
          "allStars": {
            "points": 85.4,
            "rank": 8199,
            "rankPercent": 75.37694479485793,
            "total": 33294
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 82.306,
          "medianPerformance": 46.5777,
          "totalKills": 2,
          "fastestKill": 176054,
          "bestAmount": 1503.7765581699,
          "highestDps": 1503.7765581699,
          "spec": "Destruction",
          "allStars": {
            "points": 77.58,
            "rank": 11255,
            "rankPercent": 66.02463470595339,
            "total": 33124
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 40.3252,
          "medianPerformance": 34.446,
          "totalKills": 2,
          "fastestKill": 398721,
          "bestAmount": 753.58458671602,
          "highestDps": 753.58458671602,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 22698,
            "rankPercent": 26.392086914220855,
            "total": 30835
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 90.0669,
          "medianPerformance": 77.1998,
          "totalKills": 2,
          "fastestKill": 247416,
          "bestAmount": 1474.2458046367,
          "highestDps": 1474.2458046367,
          "spec": "Destruction",
          "allStars": {
            "points": 102.62,
            "rank": 3761,
            "rankPercent": 88.54392005118675,
            "total": 32821
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 85.5276,
          "medianPerformance": 74.2437,
          "totalKills": 2,
          "fastestKill": 155471,
          "bestAmount": 1644.3341507811,
          "highestDps": 1644.3341507811,
          "spec": "Destruction",
          "allStars": {
            "points": 83.21,
            "rank": 9786,
            "rankPercent": 70.23755208808589,
            "total": 32877
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 91.34,
          "medianPerformance": 81.7521,
          "totalKills": 2,
          "fastestKill": 102300,
          "bestAmount": 1691.0850439883,
          "highestDps": 1691.0850439883,
          "spec": "Destruction",
          "allStars": {
            "points": 100.65,
            "rank": 3127,
            "rankPercent": 90.4872036760902,
            "total": 32861
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 50.2486,
          "medianPerformance": 32.3249,
          "totalKills": 2,
          "fastestKill": 439330,
          "bestAmount": 894.54992019786,
          "highestDps": 894.54992019786,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 20607,
            "rankPercent": 32.699719119472206,
            "total": 30618
          }
        }
      ],
      "bestPerformanceAverage": 78.6861625,
      "medianPerformanceAverage": 66.5679875,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "globaldoctor": {
      "characterName": "Globaldoctor",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105376753,
      "gear": [
        {
          "id": 29035,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28822,
          "slot": 2,
          "quality": 4,
          "icon": "inv_misc_bone_09.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30168,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2980,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28735,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3150,
          "temporaryEnchantID": null
        },
        {
          "id": 30030,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29991,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_07.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 30092,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_16.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 32516,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 29976,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_26.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29307,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 29920,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 28190,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28765,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28771,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_46.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2629
        },
        {
          "id": 29458,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_33.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2654,
          "temporaryEnchantID": null
        },
        {
          "id": 28523,
          "slot": 18,
          "quality": 4,
          "icon": "spell_nature_giftofthewaterspirit.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 99.17479379755241,
          "total": 18019,
          "bestAmount": 1077.0024421566,
          "medianPerformance": 61.05189980888697,
          "averagePerformance": 61.31804887871639,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 97.51373067670546,
          "total": 15920,
          "bestAmount": 946.68592795769,
          "medianPerformance": 57.86684094844935,
          "averagePerformance": 56.9386406537045,
          "totalKills": 6,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 65.0467,
          "medianPerformance": 65.0467,
          "totalKills": 5,
          "fastestKill": 92557,
          "bestAmount": 1112.4287721319,
          "highestDps": 1112.4287721319,
          "spec": "Enhancement",
          "allStars": {
            "points": 55.08,
            "rank": 10443,
            "rankPercent": 46.19744435284419,
            "total": 19408
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.9663,
          "medianPerformance": 95.9663,
          "totalKills": 5,
          "fastestKill": 170511,
          "bestAmount": 1295.8309811148,
          "highestDps": 1295.8309811148,
          "spec": "Enhancement",
          "allStars": {
            "points": 92.51,
            "rank": 3399,
            "rankPercent": 82.48814677386106,
            "total": 19404
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 74.273,
          "medianPerformance": 74.273,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 986.23497154855,
          "highestDps": 986.23497154855,
          "spec": "Enhancement",
          "allStars": {
            "points": 61.67,
            "rank": 9230,
            "rankPercent": 51.791684078562476,
            "total": 19144
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 77.0348,
          "medianPerformance": 77.0348,
          "totalKills": 5,
          "fastestKill": 123201,
          "bestAmount": 1430.6179834372,
          "highestDps": 1430.6179834372,
          "spec": "Enhancement",
          "allStars": {
            "points": 68.43,
            "rank": 7646,
            "rankPercent": 59.24622847699771,
            "total": 18759
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 78.1494,
          "medianPerformance": 78.1494,
          "totalKills": 5,
          "fastestKill": 176086,
          "bestAmount": 1475.0719991306,
          "highestDps": 1475.0719991306,
          "spec": "Enhancement",
          "allStars": {
            "points": 74.95,
            "rank": 7123,
            "rankPercent": 62.1331348362399,
            "total": 18808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 75.3934,
          "medianPerformance": 75.3934,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 764.6558963987,
          "highestDps": 764.6558963987,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 7053,
            "rankPercent": 59.75804610819448,
            "total": 17524
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 78.6989,
          "medianPerformance": 78.6989,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 811.81887851196,
          "highestDps": 811.81887851196,
          "spec": "Enhancement",
          "allStars": {
            "points": 68.57,
            "rank": 7926,
            "rankPercent": 57.520368782161235,
            "total": 18656
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 61.3057,
          "medianPerformance": 61.3057,
          "totalKills": 5,
          "fastestKill": 150650,
          "bestAmount": 1324.247762749,
          "highestDps": 1324.247762749,
          "spec": "Enhancement",
          "allStars": {
            "points": 70.45,
            "rank": 10537,
            "rankPercent": 43.48245896363051,
            "total": 18642
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 64.6902,
          "medianPerformance": 64.6902,
          "totalKills": 5,
          "fastestKill": 102305,
          "bestAmount": 1215.6912051298,
          "highestDps": 1215.6912051298,
          "spec": "Enhancement",
          "allStars": {
            "points": 53.31,
            "rank": 10315,
            "rankPercent": 45.015460070369976,
            "total": 18758
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 56.3487,
          "medianPerformance": 56.3487,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 707.06837310604,
          "highestDps": 707.06837310604,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 10573,
            "rankPercent": 39.31462028586189,
            "total": 17421
          }
        }
      ],
      "bestPerformanceAverage": 74.395625,
      "medianPerformanceAverage": 74.395625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "hellpapa": {
      "characterName": "Hellpapa",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 93786580,
      "gear": [
        {
          "id": 28963,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_89.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 30015,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_14.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28967,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2982,
          "temporaryEnchantID": null
        },
        {
          "id": 4334,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_08.jpg",
          "itemLevel": 34,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28964,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30038,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30213,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_24.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 30037,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 30109,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_44.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28766,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2672,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28673,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 94.05305047452975,
          "total": 23682,
          "bestAmount": 1379.1364628611,
          "medianPerformance": 88.90893014874054,
          "averagePerformance": 86.22632958880745,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 92.23690463914541,
          "total": 23682,
          "bestAmount": 812.43704851757,
          "medianPerformance": 86.9302338014943,
          "averagePerformance": 75.51778733420586,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 92.26889230666609,
          "total": 27323,
          "bestAmount": 1403.064206042,
          "medianPerformance": 69.12016914141181,
          "averagePerformance": 68.96376881184861,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 93.57926213941644,
          "total": 24008,
          "bestAmount": 846.20360616791,
          "medianPerformance": 70.31880517656712,
          "averagePerformance": 66.28007381750933,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.6111,
          "medianPerformance": 96.1956,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 2477.5373836323,
          "highestDps": 2477.5373836323,
          "spec": "Destruction",
          "allStars": {
            "points": 115.9,
            "rank": 153,
            "rankPercent": 99.54857295595616,
            "total": 33671
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 97.4532,
          "medianPerformance": 81.7656,
          "totalKills": 5,
          "fastestKill": 170511,
          "bestAmount": 1425.0996483001,
          "highestDps": 1425.0996483001,
          "spec": "Destruction",
          "allStars": {
            "points": 96.95,
            "rank": 4292,
            "rankPercent": 87.42821985233799,
            "total": 34132
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 94.9833,
          "medianPerformance": 86.3948,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 1388.3729232743,
          "highestDps": 1388.3729232743,
          "spec": "Destruction",
          "allStars": {
            "points": 97.79,
            "rank": 4538,
            "rankPercent": 86.26857540631337,
            "total": 33041
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.0141,
          "medianPerformance": 96.061,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 2202.2428907728,
          "highestDps": 2202.2428907728,
          "spec": "Destruction",
          "allStars": {
            "points": 112.5,
            "rank": 412,
            "rankPercent": 98.76554334114255,
            "total": 33294
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.0053,
          "medianPerformance": 79.7001,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1973.5308484897,
          "highestDps": 1973.5308484897,
          "spec": "Destruction",
          "allStars": {
            "points": 110.37,
            "rank": 1507,
            "rankPercent": 95.45344765124985,
            "total": 33124
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 92.9172,
          "medianPerformance": 75.8962,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 1033.5824512755,
          "highestDps": 1033.5824512755,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 4475,
            "rankPercent": 85.49051402626885,
            "total": 30835
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 99.5919,
          "medianPerformance": 80.6941,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1777.6619135383,
          "highestDps": 1777.6619135383,
          "spec": "Destruction",
          "allStars": {
            "points": 116.33,
            "rank": 180,
            "rankPercent": 99.45461747052192,
            "total": 32821
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.0695,
          "medianPerformance": 76.3028,
          "totalKills": 5,
          "fastestKill": 150650,
          "bestAmount": 1954.7958845005,
          "highestDps": 1954.7958845005,
          "spec": "Destruction",
          "allStars": {
            "points": 108.43,
            "rank": 2231,
            "rankPercent": 93.21714268333486,
            "total": 32877
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 95.548,
          "medianPerformance": 89.987,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 1714.4477028348,
          "highestDps": 1714.4477028348,
          "spec": "Destruction",
          "allStars": {
            "points": 102.01,
            "rank": 2724,
            "rankPercent": 91.71358144913424,
            "total": 32861
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 92.8644,
          "medianPerformance": 56.9198,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 1231.6208772449,
          "highestDps": 1231.6208772449,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 2690,
            "rankPercent": 91.21758442746098,
            "total": 30618
          }
        }
      ],
      "bestPerformanceAverage": 97.53455,
      "medianPerformanceAverage": 85.88762500000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "joyboyx": {
      "characterName": "Joyboyx",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109774591,
      "gear": [
        {
          "id": 32473,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28516,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29070,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2978,
          "temporaryEnchantID": null
        },
        {
          "id": 4334,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_08.jpg",
          "itemLevel": 34,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27702,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2659,
          "temporaryEnchantID": null
        },
        {
          "id": 31460,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28621,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 30641,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 29463,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2648,
          "temporaryEnchantID": null
        },
        {
          "id": 29067,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29172,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29294,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27529,
          "slot": 14,
          "quality": 3,
          "icon": "inv_qirajidol_rebirth.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32450,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_47.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28606,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2655,
          "temporaryEnchantID": null
        },
        {
          "id": 27917,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_libramoftruth.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31779,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 20,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 87.01921630017645,
          "total": 6125,
          "bestAmount": 1195.261858777,
          "medianPerformance": 29.63870673793401,
          "averagePerformance": 40.804648283982154,
          "totalKills": 6,
          "fastestKill": 4632749,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 91.11533333201179,
          "total": 6125,
          "bestAmount": 639.80691753629,
          "medianPerformance": 41.3980274281768,
          "averagePerformance": 48.02429979200658,
          "totalKills": 6,
          "fastestKill": 4632632,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 68.67112057834547,
          "total": 9176,
          "bestAmount": 1067.9878059965,
          "medianPerformance": 52.26760286464411,
          "averagePerformance": 46.48325186979603,
          "totalKills": 4,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 83.22025776790322,
          "total": 9176,
          "bestAmount": 635.12224305109,
          "medianPerformance": 78.62079520123255,
          "averagePerformance": 67.58823993166489,
          "totalKills": 4,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.1823,
          "medianPerformance": 45.5942,
          "totalKills": 5,
          "fastestKill": 102130,
          "bestAmount": 1760.334867326,
          "highestDps": 1760.334867326,
          "spec": "Retribution",
          "allStars": {
            "points": 99.82,
            "rank": 1466,
            "rankPercent": 87.4453680692433,
            "total": 11669
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 73.0543,
          "medianPerformance": 37.7172,
          "totalKills": 5,
          "fastestKill": 197785,
          "bestAmount": 1124.6029770498,
          "highestDps": 1124.6029770498,
          "spec": "Retribution",
          "allStars": {
            "points": 67.68,
            "rank": 4892,
            "rankPercent": 58.61748032828496,
            "total": 11819
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 92.7063,
          "medianPerformance": 63.0836,
          "totalKills": 5,
          "fastestKill": 163533,
          "bestAmount": 1415.9405135355,
          "highestDps": 1415.9405135355,
          "spec": "Retribution",
          "allStars": {
            "points": 96.01,
            "rank": 1873,
            "rankPercent": 84.4917571038025,
            "total": 12071
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 74.3229,
          "medianPerformance": 57.1718,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1455.1858317916,
          "highestDps": 1455.1858317916,
          "spec": "Retribution",
          "allStars": {
            "points": 72.35,
            "rank": 3939,
            "rankPercent": 63.32308838595511,
            "total": 10737
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 93.1107,
          "medianPerformance": 46.0291,
          "totalKills": 5,
          "fastestKill": 203960,
          "bestAmount": 1732.0798195725,
          "highestDps": 1732.0798195725,
          "spec": "Retribution",
          "allStars": {
            "points": 99.96,
            "rank": 1532,
            "rankPercent": 85.95541693422622,
            "total": 10901
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 56.262,
          "medianPerformance": 38.3004,
          "totalKills": 5,
          "fastestKill": 409306,
          "bestAmount": 741.3773479963,
          "highestDps": 741.3773479963,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 4874,
            "rankPercent": 55.0668510834486,
            "total": 10845
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 77.06,
          "medianPerformance": 50.9138,
          "totalKills": 4,
          "fastestKill": 278120,
          "bestAmount": 1033.9609550329,
          "highestDps": 1033.9609550329,
          "spec": "Retribution",
          "allStars": {
            "points": 87,
            "rank": 2741,
            "rankPercent": 74.87160674981658,
            "total": 10904
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 77.1065,
          "medianPerformance": 64.4293,
          "totalKills": 4,
          "fastestKill": 150193,
          "bestAmount": 1627.8331740565,
          "highestDps": 1627.8331740565,
          "spec": "Retribution",
          "allStars": {
            "points": 88.98,
            "rank": 2824,
            "rankPercent": 75.70986060918946,
            "total": 11622
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 76.1436,
          "medianPerformance": 45.3996,
          "totalKills": 4,
          "fastestKill": 107182,
          "bestAmount": 1439.2621895468,
          "highestDps": 1439.2621895468,
          "spec": "Retribution",
          "allStars": {
            "points": 72.25,
            "rank": 4047,
            "rankPercent": 64.46825327127426,
            "total": 11387
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 50.4666,
          "medianPerformance": 42.4631,
          "totalKills": 4,
          "fastestKill": 427207,
          "bestAmount": 855.96732575203,
          "highestDps": 855.96732575203,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 5219,
            "rankPercent": 48.57086536566135,
            "total": 10146
          }
        }
      ],
      "bestPerformanceAverage": 82.210825,
      "medianPerformanceAverage": 51.292325,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "kravarlocka": {
      "characterName": "Kravarlocka",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104996563,
      "gear": [
        {
          "id": 28744,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_53.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28075,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 91,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 4334,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_08.jpg",
          "itemLevel": 34,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28602,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28565,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28966,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_23.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29352,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_57.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29287,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31140,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 88,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2678
        },
        {
          "id": 28734,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_gem_ebondraenite_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28673,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "kravashamanb": {
      "characterName": "Kravashamanb",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107927835,
      "gear": [
        {
          "id": 29028,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 28609,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29031,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28600,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3150,
          "temporaryEnchantID": null
        },
        {
          "id": 28565,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28591,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 30066,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28174,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28520,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 28763,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_08.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29168,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28190,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30841,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_book_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24254,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_11.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32451,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_47.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28728,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_gem_sapphire_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28523,
          "slot": 18,
          "quality": 4,
          "icon": "spell_nature_giftofthewaterspirit.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23705,
          "slot": 19,
          "quality": 4,
          "icon": "inv_misc_tabardpvp_02.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 21.11039859782003,
          "total": 18788,
          "bestAmount": 543.82297794665,
          "medianPerformance": 21.11039859782003,
          "averagePerformance": 21.11039859782003,
          "totalKills": 1,
          "fastestKill": 4783005,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 229606,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 60,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 321496,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 60,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 25,
          "medianPerformance": 25,
          "totalKills": 1,
          "fastestKill": 392926,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 25,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 75,
          "medianPerformance": 75,
          "totalKills": 1,
          "fastestKill": 285300,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 75,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 1,
          "fastestKill": 159749,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 40,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 20.4718,
          "medianPerformance": 20.4718,
          "totalKills": 1,
          "fastestKill": 116007,
          "bestAmount": 772.69475117881,
          "highestDps": 772.69475117881,
          "spec": "Elemental",
          "allStars": {
            "points": 35.61,
            "rank": 14706,
            "rankPercent": 19.12775669581477,
            "total": 18183
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 51.2068966310725,
          "medianPerformance": 51.2068966310725,
          "totalKills": 1,
          "fastestKill": 446970,
          "bestAmount": 10.557755554064,
          "highestDps": 10.557755554064,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 46.74530000000001,
      "medianPerformanceAverage": 46.74530000000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "kravá": {
      "characterName": "Kravá",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 102028091,
      "gear": [
        {
          "id": 30120,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_92.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 30022,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_01.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30122,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_56.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2717,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30118,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate21.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30106,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30121,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 30081,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2939,
          "temporaryEnchantID": null
        },
        {
          "id": 30057,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 30119,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_56.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 28757,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_05.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28730,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21670,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_ahnqirajtrinket_04.jpg",
          "itemLevel": 76,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28830,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_bone_03.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28439,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_39.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2639
        },
        {
          "id": 30082,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_50.jpg",
          "itemLevel": 134,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2713
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 97.0852933941377,
          "total": 5784,
          "bestAmount": 1507.0030279247,
          "medianPerformance": 90.83538720218382,
          "averagePerformance": 83.49484703342331,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 93.78247049048866,
          "total": 9482,
          "bestAmount": 904.7291043191,
          "medianPerformance": 89.79909905334453,
          "averagePerformance": 82.5587330149904,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 95.06298252002935,
          "total": 15197,
          "bestAmount": 1436.2047208083,
          "medianPerformance": 94.51138402175341,
          "averagePerformance": 87.67189797792473,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 93.48889593637738,
          "total": 15197,
          "bestAmount": 931.35845760617,
          "medianPerformance": 93.48889593637738,
          "averagePerformance": 80.36965193680795,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.1276,
          "medianPerformance": 98.8146,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 2314.5859596189,
          "highestDps": 2314.5859596189,
          "spec": "Fury",
          "allStars": {
            "points": 111.67,
            "rank": 334,
            "rankPercent": 98.33091073129167,
            "total": 19951
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 97.909,
          "medianPerformance": 89.4802,
          "totalKills": 5,
          "fastestKill": 170600,
          "bestAmount": 1551.7772120618,
          "highestDps": 1551.7772120618,
          "spec": "Fury",
          "allStars": {
            "points": 99.64,
            "rank": 2115,
            "rankPercent": 89.63522259266523,
            "total": 20396
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.0141,
          "medianPerformance": 94.7366,
          "totalKills": 5,
          "fastestKill": 159421,
          "bestAmount": 1849.1541264953,
          "highestDps": 1849.1541264953,
          "spec": "Fury",
          "allStars": {
            "points": 107.58,
            "rank": 1162,
            "rankPercent": 94.3169024426061,
            "total": 20429
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 96.9989,
          "medianPerformance": 88.3422,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 2734.6801394021,
          "highestDps": 2734.6801394021,
          "spec": "Fury",
          "allStars": {
            "points": 98.89,
            "rank": 1747,
            "rankPercent": 90.20147034064762,
            "total": 17819
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 88.1034,
          "medianPerformance": 85.2095,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1732.5195678599,
          "highestDps": 1732.5195678599,
          "spec": "Fury",
          "allStars": {
            "points": 95.7,
            "rank": 3509,
            "rankPercent": 82.18927701056052,
            "total": 19696
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 91.3438,
          "medianPerformance": 63.7522,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 974.82306147978,
          "highestDps": 974.82306147978,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 2658,
            "rankPercent": 85.19282211324119,
            "total": 17944
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.3921,
          "medianPerformance": 94.7515,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1398.7373492418,
          "highestDps": 1398.7373492418,
          "spec": "Fury",
          "allStars": {
            "points": 111.3,
            "rank": 544,
            "rankPercent": 97.10384553842871,
            "total": 18749
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.0593,
          "medianPerformance": 92.3964,
          "totalKills": 5,
          "fastestKill": 150193,
          "bestAmount": 2018.123347959,
          "highestDps": 2018.123347959,
          "spec": "Fury",
          "allStars": {
            "points": 111.99,
            "rank": 656,
            "rankPercent": 96.59669541722955,
            "total": 19246
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 96.3342,
          "medianPerformance": 95.874,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 2314.4183773216,
          "highestDps": 2314.4183773216,
          "spec": "Fury",
          "allStars": {
            "points": 106.65,
            "rank": 825,
            "rankPercent": 95.82488852857722,
            "total": 19736
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 90.5018,
          "medianPerformance": 85.0761,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 1144.8150428247,
          "highestDps": 1144.8150428247,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 3016,
            "rankPercent": 82.59740259740259,
            "total": 17325
          }
        }
      ],
      "bestPerformanceAverage": 96.49232500000001,
      "medianPerformanceAverage": 92.450625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "kravä": {
      "characterName": "Kravä",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 96867497,
      "gear": [
        {
          "id": 28275,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27801,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 127,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_07.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28228,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28828,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 30091,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 27474,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 29298,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 14,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 27903,
          "slot": 16,
          "quality": 3,
          "icon": "inv_spear_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2724,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 83.17574936054118,
          "total": 5826,
          "bestAmount": 1335.2060633235,
          "medianPerformance": 64.56198095943026,
          "averagePerformance": 65.32045262311901,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 89.31079762637097,
          "total": 10512,
          "bestAmount": 663.0104251191,
          "medianPerformance": 63.789330899763655,
          "averagePerformance": 65.05809489935226,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 71.22898015291736,
          "total": 10144,
          "bestAmount": 1067.5783674773,
          "medianPerformance": 60.53324439207102,
          "averagePerformance": 62.237203833459326,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 86.31334842839053,
          "total": 10144,
          "bestAmount": 618.2768895683,
          "medianPerformance": 69.66012146528271,
          "averagePerformance": 69.49597470191206,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.3015,
          "medianPerformance": 89.112,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 2050.2272662302,
          "highestDps": 2050.2272662302,
          "spec": "BeastMastery",
          "allStars": {
            "points": 100.38,
            "rank": 3207,
            "rankPercent": 89.4988535866361,
            "total": 30530
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 84.143,
          "medianPerformance": 76.8476,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1279.1370691923,
          "highestDps": 1279.1370691923,
          "spec": "BeastMastery",
          "allStars": {
            "points": 78.25,
            "rank": 9080,
            "rankPercent": 70.5962366810247,
            "total": 30877
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 88.3238,
          "medianPerformance": 76.173,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1369.6274182115,
          "highestDps": 1369.6274182115,
          "spec": "BeastMastery",
          "allStars": {
            "points": 87.49,
            "rank": 6605,
            "rankPercent": 78.41336253391299,
            "total": 30593
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 82.817,
          "medianPerformance": 81.188,
          "totalKills": 5,
          "fastestKill": 116887,
          "bestAmount": 1962.0060400216,
          "highestDps": 1962.0060400216,
          "spec": "BeastMastery",
          "allStars": {
            "points": 89.86,
            "rank": 5553,
            "rankPercent": 81.52965833860075,
            "total": 30059
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 79.8958,
          "medianPerformance": 65.7775,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 1789.0978287596,
          "highestDps": 1789.0978287596,
          "spec": "BeastMastery",
          "allStars": {
            "points": 82.87,
            "rank": 8377,
            "rankPercent": 71.98849575279246,
            "total": 29902
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 90.3807,
          "medianPerformance": 35.4987,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 998.98796165652,
          "highestDps": 998.98796165652,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 5277,
            "rankPercent": 80.79149524884407,
            "total": 27467
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 81.9453,
          "medianPerformance": 79.3283,
          "totalKills": 4,
          "fastestKill": 255889,
          "bestAmount": 1162.7111755488,
          "highestDps": 1162.7111755488,
          "spec": "BeastMastery",
          "allStars": {
            "points": 85.62,
            "rank": 7195,
            "rankPercent": 75.54392167527875,
            "total": 29416
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 92.9095,
          "medianPerformance": 85.0189,
          "totalKills": 4,
          "fastestKill": 143538,
          "bestAmount": 1611.9880517756,
          "highestDps": 1611.9880517756,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.88,
            "rank": 3380,
            "rankPercent": 88.47622945228838,
            "total": 29322
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 80.432,
          "medianPerformance": 58.9703,
          "totalKills": 4,
          "fastestKill": 103400,
          "bestAmount": 1669.475985294,
          "highestDps": 1669.475985294,
          "spec": "BeastMastery",
          "allStars": {
            "points": 77.78,
            "rank": 8823,
            "rankPercent": 69.98502994011976,
            "total": 29392
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 46.535,
          "medianPerformance": 38.1307,
          "totalKills": 4,
          "fastestKill": 433670,
          "bestAmount": 867.81654253234,
          "highestDps": 867.81654253234,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 15348,
            "rankPercent": 43.51906374208744,
            "total": 27172
          }
        }
      ],
      "bestPerformanceAverage": 85.7209875,
      "medianPerformanceAverage": 76.55195,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "kyivstar": {
      "characterName": "Kyivstar",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107614860,
      "gear": [
        {
          "id": 28963,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_89.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 28530,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28967,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2995,
          "temporaryEnchantID": null
        },
        {
          "id": 4334,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_08.jpg",
          "itemLevel": 34,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28964,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28654,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28966,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_23.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2747,
          "temporaryEnchantID": null
        },
        {
          "id": 21870,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_03.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2935,
          "temporaryEnchantID": null
        },
        {
          "id": 28793,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29126,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_52naxxramas.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29132,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_gem_bloodstone_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25777,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28633,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_halberd17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2628
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28673,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23705,
          "slot": 19,
          "quality": 4,
          "icon": "inv_misc_tabardpvp_02.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 19.43894454514993,
          "total": 5485,
          "bestAmount": 777.90940236774,
          "medianPerformance": 19.43894454514993,
          "averagePerformance": 19.43894454514993,
          "totalKills": 1,
          "fastestKill": 5174620,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 30.57223008072784,
          "total": 5485,
          "bestAmount": 439.13755985947,
          "medianPerformance": 30.57223008072784,
          "averagePerformance": 30.57223008072784,
          "totalKills": 1,
          "fastestKill": 5174620,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 16.307707234713597,
          "total": 5388,
          "bestAmount": 790.47369793089,
          "medianPerformance": 16.307707234713597,
          "averagePerformance": 16.307707234713597,
          "totalKills": 1,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 53.9554542477193,
          "total": 5388,
          "bestAmount": 519.41453001031,
          "medianPerformance": 53.9554542477193,
          "averagePerformance": 53.9554542477193,
          "totalKills": 1,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 61.584,
          "medianPerformance": 61.584,
          "totalKills": 1,
          "fastestKill": 96778,
          "bestAmount": 1289.156626506,
          "highestDps": 1289.156626506,
          "spec": "Affliction",
          "allStars": {
            "points": 66.18,
            "rank": 3552,
            "rankPercent": 55.56250782129896,
            "total": 7991
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 40.8587,
          "medianPerformance": 40.8587,
          "totalKills": 1,
          "fastestKill": 175669,
          "bestAmount": 865.21810905737,
          "highestDps": 865.21810905737,
          "spec": "Affliction",
          "allStars": {
            "points": 43.99,
            "rank": 5323,
            "rankPercent": 33.863551634149374,
            "total": 8047
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 43.9304,
          "medianPerformance": 43.9304,
          "totalKills": 1,
          "fastestKill": 159421,
          "bestAmount": 900.27662604048,
          "highestDps": 900.27662604048,
          "spec": "Affliction",
          "allStars": {
            "points": 53.25,
            "rank": 4672,
            "rankPercent": 38.55564325177585,
            "total": 7602
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 29.3046,
          "medianPerformance": 29.3046,
          "totalKills": 1,
          "fastestKill": 123192,
          "bestAmount": 986.17605039288,
          "highestDps": 986.17605039288,
          "spec": "Affliction",
          "allStars": {
            "points": 43.97,
            "rank": 5969,
            "rankPercent": 24.826804383423607,
            "total": 7939
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 37.9126,
          "medianPerformance": 37.9126,
          "totalKills": 1,
          "fastestKill": 183905,
          "bestAmount": 1100.4649139501,
          "highestDps": 1100.4649139501,
          "spec": "Affliction",
          "allStars": {
            "points": 59.02,
            "rank": 5371,
            "rankPercent": 31.965032307107563,
            "total": 7893
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 3.3088,
          "medianPerformance": 3.3088,
          "totalKills": 1,
          "fastestKill": 458038,
          "bestAmount": 408.29800147586,
          "highestDps": 408.29800147586,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 7495,
            "rankPercent": 0.7680084745762712,
            "total": 7552
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 28.2553,
          "medianPerformance": 28.2553,
          "totalKills": 1,
          "fastestKill": 269322,
          "bestAmount": 820.48997111265,
          "highestDps": 820.48997111265,
          "spec": "Affliction",
          "allStars": {
            "points": 58.58,
            "rank": 6101,
            "rankPercent": 22.391857506361323,
            "total": 7860
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 26.884,
          "medianPerformance": 26.884,
          "totalKills": 1,
          "fastestKill": 159803,
          "bestAmount": 1118.5459597129,
          "highestDps": 1118.5459597129,
          "spec": "Affliction",
          "allStars": {
            "points": 60.94,
            "rank": 6080,
            "rankPercent": 22.07409306499167,
            "total": 7801
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 30.3258,
          "medianPerformance": 30.3258,
          "totalKills": 1,
          "fastestKill": 115379,
          "bestAmount": 986.3666698446,
          "highestDps": 986.3666698446,
          "spec": "Affliction",
          "allStars": {
            "points": 43.42,
            "rank": 5793,
            "rankPercent": 24.593151933342014,
            "total": 7681
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 8.20542,
          "medianPerformance": 8.20542,
          "totalKills": 1,
          "fastestKill": 426009,
          "bestAmount": 595.37709297221,
          "highestDps": 595.37709297221,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 6751,
            "rankPercent": 5.342869162810265,
            "total": 7131
          }
        }
      ],
      "bestPerformanceAverage": 37.381925,
      "medianPerformanceAverage": 37.381925,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "lazykit": {
      "characterName": "Lazykit",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105987216,
      "gear": [
        {
          "id": 32474,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29043,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 45,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_01.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29038,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_chain_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28828,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 30039,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2939,
          "temporaryEnchantID": null
        },
        {
          "id": 28514,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 28776,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 30052,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28757,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_05.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28288,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_enggizmos_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28308,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_54.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 28308,
          "slot": 17,
          "quality": 4,
          "icon": "inv_axe_54.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 27815,
          "slot": 18,
          "quality": 3,
          "icon": "spell_unused.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 99.31001507169474,
          "total": 10607,
          "bestAmount": 1370.9340197432,
          "medianPerformance": 82.13295133234236,
          "averagePerformance": 84.48882824789504,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 97.12462159504334,
          "total": 7762,
          "bestAmount": 713.9911266128,
          "medianPerformance": 84.21142459415597,
          "averagePerformance": 80.43833499443295,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 99.11549403888598,
          "total": 15788,
          "bestAmount": 1267.0413642408,
          "medianPerformance": 95.7475418697032,
          "averagePerformance": 94.4970575499356,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 93.26744193545704,
          "total": 15788,
          "bestAmount": 712.1939923977,
          "medianPerformance": 92.77016981537933,
          "averagePerformance": 86.03985963564216,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7717,
          "medianPerformance": 98.7127,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 1906.9304288995,
          "highestDps": 1906.9304288995,
          "spec": "Enhancement",
          "allStars": {
            "points": 112.34,
            "rank": 432,
            "rankPercent": 97.7792662819456,
            "total": 19408
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.4829,
          "medianPerformance": 94.1959,
          "totalKills": 5,
          "fastestKill": 170600,
          "bestAmount": 1389.6646534107,
          "highestDps": 1389.6646534107,
          "spec": "Enhancement",
          "allStars": {
            "points": 101.14,
            "rank": 1852,
            "rankPercent": 90.46072974644403,
            "total": 19404
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.4972,
          "medianPerformance": 94.5901,
          "totalKills": 5,
          "fastestKill": 159421,
          "bestAmount": 1583.0566307718,
          "highestDps": 1583.0566307718,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.98,
            "rank": 1022,
            "rankPercent": 94.66673631424989,
            "total": 19144
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.3457,
          "medianPerformance": 95.2258,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 2051.3601741023,
          "highestDps": 2051.3601741023,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.37,
            "rank": 631,
            "rankPercent": 96.6416120262274,
            "total": 18759
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 99.2785,
          "medianPerformance": 92.4445,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1880.0686330058,
          "highestDps": 1880.0686330058,
          "spec": "Enhancement",
          "allStars": {
            "points": 111.96,
            "rank": 751,
            "rankPercent": 96.01233517652064,
            "total": 18808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 87.0201,
          "medianPerformance": 75.8585,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 842.99032997317,
          "highestDps": 842.99032997317,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 3269,
            "rankPercent": 81.351289659895,
            "total": 17524
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.9292,
          "medianPerformance": 95.1516,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1127.0451385521,
          "highestDps": 1127.0451385521,
          "spec": "Enhancement",
          "allStars": {
            "points": 110.52,
            "rank": 810,
            "rankPercent": 95.66359348198971,
            "total": 18656
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.6156,
          "medianPerformance": 96.7365,
          "totalKills": 5,
          "fastestKill": 150193,
          "bestAmount": 1813.527924822,
          "highestDps": 1813.527924822,
          "spec": "Enhancement",
          "allStars": {
            "points": 112.26,
            "rank": 718,
            "rankPercent": 96.15384615384616,
            "total": 18642
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.1213,
          "medianPerformance": 90.2381,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 1663.1617249165,
          "highestDps": 1663.1617249165,
          "spec": "Enhancement",
          "allStars": {
            "points": 102.43,
            "rank": 1561,
            "rankPercent": 91.68354835270284,
            "total": 18758
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.4991,
          "medianPerformance": 97.3366,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 1074.6819019871,
          "highestDps": 1074.6819019871,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 166,
            "rankPercent": 99.05286722920613,
            "total": 17421
          }
        }
      ],
      "bestPerformanceAverage": 98.2552625,
      "medianPerformanceAverage": 94.6619,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "lazyswotch": {
      "characterName": "Lazyswotch",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 108577499,
      "gear": [
        {
          "id": 31376,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_81.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 29374,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_31.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28612,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2992,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28600,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 28652,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28591,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 28752,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 29183,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 28521,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 28763,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_08.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29291,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28190,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28765,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2938,
          "temporaryEnchantID": null
        },
        {
          "id": 32451,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_47.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": null
        },
        {
          "id": 32452,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_book_06.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27886,
          "slot": 18,
          "quality": 3,
          "icon": "spell_nature_natureresistancetotem.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "legalise": {
      "characterName": "Legalise",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 91164531,
      "gear": [
        {
          "id": 30141,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 30017,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_30naxxramas.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30143,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 127,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_07.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30139,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_chain_15.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30040,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_29.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29995,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_03.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 29966,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 30140,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 28830,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_bone_03.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29994,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_15.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 27846,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_hand_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": 2955
        },
        {
          "id": 28315,
          "slot": 17,
          "quality": 3,
          "icon": "inv_weapon_hand_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": 2955
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2724,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 97.87753368220639,
          "total": 19773,
          "bestAmount": 1716.8121442782,
          "medianPerformance": 84.51766465825835,
          "averagePerformance": 85.89949431364315,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 93.68321053459933,
          "total": 19773,
          "bestAmount": 783.5881884699,
          "medianPerformance": 92.08538351334006,
          "averagePerformance": 86.079526105026,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 99.31191141430992,
          "total": 15483,
          "bestAmount": 1557.8318346454,
          "medianPerformance": 93.79721652759297,
          "averagePerformance": 91.29528000914122,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 95.50777512350666,
          "total": 23393,
          "bestAmount": 827.46898372844,
          "medianPerformance": 94.90967917535578,
          "averagePerformance": 84.6942619001355,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 98.8958,
          "medianPerformance": 95.7694,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 2388.9660461838,
          "highestDps": 2388.9660461838,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.8,
            "rank": 859,
            "rankPercent": 97.18964952505732,
            "total": 30530
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 96.8836,
          "medianPerformance": 93.8169,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1679.7678418949,
          "highestDps": 1679.7678418949,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.49,
            "rank": 1654,
            "rankPercent": 94.64650063153803,
            "total": 30877
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.1696,
          "medianPerformance": 93.6636,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1948.9354692583,
          "highestDps": 1948.9354692583,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.22,
            "rank": 1076,
            "rankPercent": 96.48612427679535,
            "total": 30593
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 95.7903,
          "medianPerformance": 94.8571,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 2362.452625185,
          "highestDps": 2362.452625185,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.07,
            "rank": 1756,
            "rankPercent": 94.16148241791144,
            "total": 30059
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 96.8583,
          "medianPerformance": 93.2896,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 2212.1903764125,
          "highestDps": 2212.1903764125,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.56,
            "rank": 2004,
            "rankPercent": 93.30145140793257,
            "total": 29902
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.1858,
          "medianPerformance": 82.2323,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 1133.1524073765,
          "highestDps": 1133.1524073765,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 1128,
            "rankPercent": 95.89689445516439,
            "total": 27467
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.2955,
          "medianPerformance": 95.7461,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 1447.4471451172,
          "highestDps": 1447.4471451172,
          "spec": "BeastMastery",
          "allStars": {
            "points": 105.93,
            "rank": 1893,
            "rankPercent": 93.56812618982866,
            "total": 29416
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.3245,
          "medianPerformance": 99.0115,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 2080.1529908456,
          "highestDps": 2080.1529908456,
          "spec": "BeastMastery",
          "allStars": {
            "points": 113.63,
            "rank": 290,
            "rankPercent": 99.01439192415252,
            "total": 29322
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.4686,
          "medianPerformance": 94.2674,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 2123.0150584986,
          "highestDps": 2123.0150584986,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.25,
            "rank": 1591,
            "rankPercent": 94.59036472509527,
            "total": 29392
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.2183,
          "medianPerformance": 78.4513,
          "totalKills": 5,
          "fastestKill": 427207,
          "bestAmount": 1363.772129202,
          "highestDps": 1363.772129202,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 482,
            "rankPercent": 98.22979537759458,
            "total": 27172
          }
        }
      ],
      "bestPerformanceAverage": 97.460775,
      "medianPerformanceAverage": 95.05269999999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "livingstone": {
      "characterName": "Livingstone",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105988637,
      "gear": [
        {
          "id": 28278,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_34.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28134,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_27.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27738,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2996,
          "temporaryEnchantID": null
        },
        {
          "id": 6096,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_01.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21848,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_02.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21846,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_04.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30836,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_cloth_09.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27902,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_09.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28411,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21847,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28555,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 95,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29285,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28797,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28931,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_shortblade_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29330,
          "slot": 17,
          "quality": 3,
          "icon": "inv_misc_book_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25808,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "llóydaustin": {
      "characterName": "Llóydaustin",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 96959436,
      "gear": [
        {
          "id": 30120,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_92.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30122,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_56.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30118,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate21.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30106,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30121,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28608,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2939,
          "temporaryEnchantID": null
        },
        {
          "id": 28795,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 30119,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_56.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 28730,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28757,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_05.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28830,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_bone_03.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21670,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_ahnqirajtrinket_04.jpg",
          "itemLevel": 76,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28439,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_39.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28729,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_74.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2713
        },
        {
          "id": 30279,
          "slot": 18,
          "quality": 2,
          "icon": "inv_weapon_rifle_06.jpg",
          "itemLevel": 111,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 98.54380634329348,
          "total": 14684,
          "bestAmount": 1694.5112531528,
          "medianPerformance": 96.43432091770933,
          "averagePerformance": 93.99451674572113,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 95.04841447591784,
          "total": 12406,
          "bestAmount": 976.70527163157,
          "medianPerformance": 92.93311935993323,
          "averagePerformance": 80.31756142103528,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 98.92386977880078,
          "total": 12548,
          "bestAmount": 1527.6360217743,
          "medianPerformance": 98.21553078544325,
          "averagePerformance": 93.40619108131963,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 94.65939907174995,
          "total": 14875,
          "bestAmount": 950.76312567306,
          "medianPerformance": 91.02391345758132,
          "averagePerformance": 81.6447498162499,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7705,
          "medianPerformance": 91.6665,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 2567.7728949878,
          "highestDps": 2567.7728949878,
          "spec": "Fury",
          "allStars": {
            "points": 114.31,
            "rank": 98,
            "rankPercent": 99.51380883163752,
            "total": 19951
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 96.3212,
          "medianPerformance": 89.9313,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1626.1338745406,
          "highestDps": 1626.1338745406,
          "spec": "Fury",
          "allStars": {
            "points": 103.58,
            "rank": 1404,
            "rankPercent": 93.12120023534027,
            "total": 20396
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 99.4907,
          "medianPerformance": 94.5994,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 2198.0878255021,
          "highestDps": 2198.0878255021,
          "spec": "Fury",
          "allStars": {
            "points": 115.02,
            "rank": 145,
            "rankPercent": 99.29511968280386,
            "total": 20429
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.7035,
          "medianPerformance": 97.0105,
          "totalKills": 5,
          "fastestKill": 116887,
          "bestAmount": 3807.5577266933,
          "highestDps": 3807.5577266933,
          "spec": "Fury",
          "allStars": {
            "points": 111.59,
            "rank": 73,
            "rankPercent": 99.59593692126381,
            "total": 17819
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 99.4451,
          "medianPerformance": 91.2809,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 2120.4958581694,
          "highestDps": 2120.4958581694,
          "spec": "Fury",
          "allStars": {
            "points": 114.53,
            "rank": 369,
            "rankPercent": 98.13160032493907,
            "total": 19696
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 96.9081,
          "medianPerformance": 89.4202,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 1050.1977814944,
          "highestDps": 1050.1977814944,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 1069,
            "rankPercent": 94.04814979937584,
            "total": 17944
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 99.3169,
          "medianPerformance": 90.8074,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 1445.5994591405,
          "highestDps": 1445.5994591405,
          "spec": "Fury",
          "allStars": {
            "points": 113.06,
            "rank": 301,
            "rankPercent": 98.39991466211531,
            "total": 18749
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.693,
          "medianPerformance": 97.0733,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 2195.7042734328,
          "highestDps": 2195.7042734328,
          "spec": "Fury",
          "allStars": {
            "points": 116.25,
            "rank": 93,
            "rankPercent": 99.52197859295438,
            "total": 19246
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.4525,
          "medianPerformance": 96.3878,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 2313.308084106,
          "highestDps": 2313.308084106,
          "spec": "Fury",
          "allStars": {
            "points": 106.63,
            "rank": 828,
            "rankPercent": 95.80968788001621,
            "total": 19736
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.7833,
          "medianPerformance": 93.8636,
          "totalKills": 5,
          "fastestKill": 433670,
          "bestAmount": 1463.9718577068,
          "highestDps": 1463.9718577068,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 110,
            "rankPercent": 99.37085137085137,
            "total": 17325
          }
        }
      ],
      "bestPerformanceAverage": 99.149175,
      "medianPerformanceAverage": 93.5946375,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "manowarr": {
      "characterName": "Manowarr",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107539496,
      "gear": [
        {
          "id": 28275,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27801,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 127,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_07.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28228,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28828,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 29951,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_04.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 29966,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 27474,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28757,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_05.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29994,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_15.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 27846,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_hand_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": 2955
        },
        {
          "id": 28315,
          "slot": 17,
          "quality": 3,
          "icon": "inv_weapon_hand_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": 2955
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2724,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 82.27749666916114,
          "total": 19773,
          "bestAmount": 1389.3212911001,
          "medianPerformance": 72.13177871263339,
          "averagePerformance": 70.6470979120366,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 78.00459396404896,
          "total": 23522,
          "bestAmount": 653.86845423638,
          "medianPerformance": 75.88039112996233,
          "averagePerformance": 75.12213041517502,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 91.97084319703936,
          "total": 20144,
          "bestAmount": 1342.5069471395,
          "medianPerformance": 82.35185212315226,
          "averagePerformance": 84.33835823316304,
          "totalKills": 4,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 77.83269082179083,
          "total": 23847,
          "bestAmount": 645.11384234221,
          "medianPerformance": 77.99154419259008,
          "averagePerformance": 76.62239225095303,
          "totalKills": 4,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.6386,
          "medianPerformance": 95.7207,
          "totalKills": 4,
          "fastestKill": 92487,
          "bestAmount": 2412.8580232898,
          "highestDps": 2412.8580232898,
          "spec": "BeastMastery",
          "allStars": {
            "points": 110.23,
            "rank": 764,
            "rankPercent": 97.5008188666885,
            "total": 30530
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 91.7601,
          "medianPerformance": 80.7636,
          "totalKills": 4,
          "fastestKill": 161614,
          "bestAmount": 1523.0301830287,
          "highestDps": 1523.0301830287,
          "spec": "BeastMastery",
          "allStars": {
            "points": 97.15,
            "rank": 3649,
            "rankPercent": 88.18538070408394,
            "total": 30877
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 74.7773,
          "medianPerformance": 50.0672,
          "totalKills": 4,
          "fastestKill": 163533,
          "bestAmount": 1157.8432273728,
          "highestDps": 1157.8432273728,
          "spec": "BeastMastery",
          "allStars": {
            "points": 71.37,
            "rank": 11147,
            "rankPercent": 63.56682901317295,
            "total": 30593
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 92.0995,
          "medianPerformance": 90.7265,
          "totalKills": 4,
          "fastestKill": 115131,
          "bestAmount": 2200.8708713046,
          "highestDps": 2200.8708713046,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.16,
            "rank": 3038,
            "rankPercent": 89.89653681093849,
            "total": 30059
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 89.9021,
          "medianPerformance": 59.6442,
          "totalKills": 4,
          "fastestKill": 176054,
          "bestAmount": 2050.548169011,
          "highestDps": 2050.548169011,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.31,
            "rank": 3895,
            "rankPercent": 86.9774597016922,
            "total": 29902
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 67.5753,
          "medianPerformance": 63.5486,
          "totalKills": 4,
          "fastestKill": 395742,
          "bestAmount": 882.34719256498,
          "highestDps": 882.34719256498,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 11135,
            "rankPercent": 59.464084173735756,
            "total": 27467
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 92.812,
          "medianPerformance": 87.4411,
          "totalKills": 4,
          "fastestKill": 247416,
          "bestAmount": 1362.2703594137,
          "highestDps": 1362.2703594137,
          "spec": "BeastMastery",
          "allStars": {
            "points": 101.29,
            "rank": 3054,
            "rankPercent": 89.62129453358716,
            "total": 29416
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 94.6794,
          "medianPerformance": 90.0085,
          "totalKills": 4,
          "fastestKill": 150193,
          "bestAmount": 1642.1870526589,
          "highestDps": 1642.1870526589,
          "spec": "BeastMastery",
          "allStars": {
            "points": 101.33,
            "rank": 3014,
            "rankPercent": 89.72443898779073,
            "total": 29322
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.9477,
          "medianPerformance": 95.5116,
          "totalKills": 4,
          "fastestKill": 102300,
          "bestAmount": 2108.3479960899,
          "highestDps": 2108.3479960899,
          "spec": "BeastMastery",
          "allStars": {
            "points": 103.86,
            "rank": 1689,
            "rankPercent": 94.25694066412629,
            "total": 29392
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 78.9521,
          "medianPerformance": 62.4624,
          "totalKills": 4,
          "fastestKill": 427207,
          "bestAmount": 1057.6685095763,
          "highestDps": 1057.6685095763,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 7229,
            "rankPercent": 73.39908729574562,
            "total": 27172
          }
        }
      ],
      "bestPerformanceAverage": 91.4520875,
      "medianPerformanceAverage": 81.235425,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "moneylazy": {
      "characterName": "Moneylazy",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109070276,
      "gear": [
        {
          "id": 30146,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_87.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30149,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_51.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 4333,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_black_01.jpg",
          "itemLevel": 31,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30101,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate08.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29247,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29046,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_05.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2939,
          "temporaryEnchantID": null
        },
        {
          "id": 32814,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 29048,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_28.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 29282,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30450,
          "slot": 13,
          "quality": 4,
          "icon": "inv_gizmo_hardenedadamantitetube.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28830,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_bone_03.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27878,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28295,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_71.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28307,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_71.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2643
        },
        {
          "id": 28504,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_crossbow_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 93.93436325607895,
          "total": 8823,
          "bestAmount": 1280.9588011219,
          "medianPerformance": 87.71010441477,
          "averagePerformance": 86.74992715006692,
          "totalKills": 5,
          "fastestKill": 5013943,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 80.35170884814477,
          "total": 13854,
          "bestAmount": 583.94716039533,
          "medianPerformance": 77.70529772347004,
          "averagePerformance": 62.16852156146157,
          "totalKills": 5,
          "fastestKill": 5013943,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 97.00613902989309,
          "total": 9132,
          "bestAmount": 1193.0024922391,
          "medianPerformance": 97.00875347659226,
          "averagePerformance": 97.00875347659226,
          "totalKills": 2,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 78.02318910697828,
          "total": 9132,
          "bestAmount": 506.67000393421,
          "medianPerformance": 76.84164252983513,
          "averagePerformance": 76.84164252983513,
          "totalKills": 2,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 96.4108,
          "medianPerformance": 84.0449,
          "totalKills": 6,
          "fastestKill": 114597,
          "bestAmount": 1536.4451076381,
          "highestDps": 1536.4451076381,
          "spec": "Combat",
          "allStars": {
            "points": 100.54,
            "rank": 2078,
            "rankPercent": 88.4636747389469,
            "total": 18004
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 96.9893,
          "medianPerformance": 80.5933,
          "totalKills": 6,
          "fastestKill": 170511,
          "bestAmount": 1364.1641888207,
          "highestDps": 1364.1641888207,
          "spec": "Combat",
          "allStars": {
            "points": 101.16,
            "rank": 1743,
            "rankPercent": 90.45897688684413,
            "total": 18258
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.5922,
          "medianPerformance": 90.4649,
          "totalKills": 6,
          "fastestKill": 157335,
          "bestAmount": 1450.923189373,
          "highestDps": 1450.923189373,
          "spec": "Combat",
          "allStars": {
            "points": 104.52,
            "rank": 1447,
            "rankPercent": 91.98803191489361,
            "total": 18048
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 91.0482,
          "medianPerformance": 72.549,
          "totalKills": 6,
          "fastestKill": 142609,
          "bestAmount": 1825.4701441799,
          "highestDps": 1825.4701441799,
          "spec": "Combat",
          "allStars": {
            "points": 94.49,
            "rank": 2524,
            "rankPercent": 85.68591852944513,
            "total": 17626
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.0837,
          "medianPerformance": 68.186,
          "totalKills": 6,
          "fastestKill": 189409,
          "bestAmount": 1775.079325692,
          "highestDps": 1775.079325692,
          "spec": "Combat",
          "allStars": {
            "points": 109.05,
            "rank": 1142,
            "rankPercent": 93.50486708032106,
            "total": 17567
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 95.7523,
          "medianPerformance": 72.5842,
          "totalKills": 4,
          "fastestKill": 402466,
          "bestAmount": 985.97504797692,
          "highestDps": 985.97504797692,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 714,
            "rankPercent": 95.51261879287557,
            "total": 15889
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 95.0872,
          "medianPerformance": 95.0359,
          "totalKills": 2,
          "fastestKill": 302151,
          "bestAmount": 1048.7438400005,
          "highestDps": 1048.7438400005,
          "spec": "Combat",
          "allStars": {
            "points": 103.79,
            "rank": 1815,
            "rankPercent": 89.56811777560527,
            "total": 17389
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.5378,
          "medianPerformance": 97.549,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 1776.6080318619,
          "highestDps": 1776.6080318619,
          "spec": "Combat",
          "allStars": {
            "points": 115.07,
            "rank": 353,
            "rankPercent": 97.98338584932684,
            "total": 17455
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 96.4958,
          "medianPerformance": 93.5047,
          "totalKills": 2,
          "fastestKill": 111349,
          "bestAmount": 1580.5440551779,
          "highestDps": 1580.5440551779,
          "spec": "Combat",
          "allStars": {
            "points": 98.29,
            "rank": 1991,
            "rankPercent": 88.56387563933107,
            "total": 17401
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 95.7537,
          "medianPerformance": 95.5466,
          "totalKills": 2,
          "fastestKill": 467406,
          "bestAmount": 1051.0019675125,
          "highestDps": 1051.0019675125,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 1207,
            "rankPercent": 92.42509892594687,
            "total": 15921
          }
        }
      ],
      "bestPerformanceAverage": 96.280625,
      "medianPerformanceAverage": 85.2409625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "monkablaze": {
      "characterName": "Monkablaze",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107006954,
      "gear": [
        {
          "id": 30206,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_86.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 24116,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_28.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30210,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_49.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2995,
          "temporaryEnchantID": null
        },
        {
          "id": 6096,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_01.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30196,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_61.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30038,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30207,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_22.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 28411,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 30205,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_49.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 29287,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 30720,
          "slot": 13,
          "quality": 4,
          "icon": "spell_nature_poisoncleansingtotem.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28766,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2671,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29271,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_outlandraid_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28783,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_20.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31780,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 20,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 96.51667994230353,
          "total": 25288,
          "bestAmount": 1688.7754675075,
          "medianPerformance": 95.3491207567663,
          "averagePerformance": 82.58157952773023,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 97.42289333185325,
          "total": 25288,
          "bestAmount": 1055.88302271,
          "medianPerformance": 92.6631363759438,
          "averagePerformance": 81.36415354456241,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 92.44757943851552,
          "total": 26115,
          "bestAmount": 1549.2725996637,
          "medianPerformance": 92.44757943851552,
          "averagePerformance": 77.89135529466127,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 95.49940259204799,
          "total": 26115,
          "bestAmount": 908.17737914349,
          "medianPerformance": 80.58549723394653,
          "averagePerformance": 71.0525348246933,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.1448,
          "medianPerformance": 97.6923,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 2571.3201447004,
          "highestDps": 2571.3201447004,
          "spec": "Arcane",
          "allStars": {
            "points": 111.82,
            "rank": 649,
            "rankPercent": 98.07463750891371,
            "total": 33656
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 98.7627,
          "medianPerformance": 92.5141,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1939.6401301867,
          "highestDps": 1939.6401301867,
          "spec": "Arcane",
          "allStars": {
            "points": 107.77,
            "rank": 822,
            "rankPercent": 97.59906419067116,
            "total": 34195
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.4564,
          "medianPerformance": 91.5421,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1814.6429161087,
          "highestDps": 1814.6429161087,
          "spec": "Arcane",
          "allStars": {
            "points": 105.49,
            "rank": 2351,
            "rankPercent": 93.03806843430603,
            "total": 33755
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 98.4241,
          "medianPerformance": 90.259,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 2231.6665363803,
          "highestDps": 2231.6665363803,
          "spec": "Arcane",
          "allStars": {
            "points": 105.36,
            "rank": 1565,
            "rankPercent": 95.29156757082217,
            "total": 33217
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.4708,
          "medianPerformance": 90.3577,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 2255.7989838847,
          "highestDps": 2255.7989838847,
          "spec": "Arcane",
          "allStars": {
            "points": 113.6,
            "rank": 610,
            "rankPercent": 98.14932992980216,
            "total": 32907
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.1549,
          "medianPerformance": 94.1257,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 1214.212795205,
          "highestDps": 1214.212795205,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 1765,
            "rankPercent": 94.20194583223771,
            "total": 30424
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.1692,
          "medianPerformance": 90.4864,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 1650.606317583,
          "highestDps": 1650.606317583,
          "spec": "Arcane",
          "allStars": {
            "points": 109.33,
            "rank": 1832,
            "rankPercent": 94.55059523809524,
            "total": 33600
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.8662,
          "medianPerformance": 97.7543,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 2288.2929955831,
          "highestDps": 2288.2929955831,
          "spec": "Arcane",
          "allStars": {
            "points": 113.89,
            "rank": 489,
            "rankPercent": 98.52452077160306,
            "total": 33074
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.4996,
          "medianPerformance": 82.5658,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 2066.0931872889,
          "highestDps": 2066.0931872889,
          "spec": "Arcane",
          "allStars": {
            "points": 104.92,
            "rank": 1629,
            "rankPercent": 95.07874610803785,
            "total": 33081
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 93.4908,
          "medianPerformance": 82.6889,
          "totalKills": 5,
          "fastestKill": 427207,
          "bestAmount": 1300.0746710611,
          "highestDps": 1300.0746710611,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 4307,
            "rankPercent": 85.98581006313871,
            "total": 30726
          }
        }
      ],
      "bestPerformanceAverage": 98.349225,
      "medianPerformanceAverage": 91.6464625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "monkablazé": {
      "characterName": "Monkablazé",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 108294206,
      "gear": [
        {
          "id": 29068,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_77.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2999,
          "temporaryEnchantID": null
        },
        {
          "id": 29173,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27739,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2991,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29066,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2659,
          "temporaryEnchantID": null
        },
        {
          "id": 31460,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29184,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_plate_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2747,
          "temporaryEnchantID": null
        },
        {
          "id": 29325,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 97,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 28502,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2648,
          "temporaryEnchantID": null
        },
        {
          "id": 29067,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29278,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 28407,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_ahnqiraj_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 28789,
          "slot": 13,
          "quality": 4,
          "icon": "inv_elemental_mote_life01.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2622,
          "temporaryEnchantID": null
        },
        {
          "id": 30832,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_08.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": null
        },
        {
          "id": 28611,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_37.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1071,
          "temporaryEnchantID": null
        },
        {
          "id": 29388,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_libramofhope.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "moorkit": {
      "characterName": "Moorkit",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 110070481,
      "gear": [
        {
          "id": 27410,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_06.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29334,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28647,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28202,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28652,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24083,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_plate_01.jpg",
          "itemLevel": 85,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30092,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_16.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28029,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_12.jpg",
          "itemLevel": 94,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28508,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28259,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28661,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_36.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30841,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_book_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24390,
          "slot": 14,
          "quality": 3,
          "icon": "inv_qiraj_jewelencased.jpg",
          "itemLevel": 88,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27946,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28522,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2629
        },
        {
          "id": 28728,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_gem_sapphire_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27886,
          "slot": 18,
          "quality": 3,
          "icon": "spell_nature_natureresistancetotem.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23705,
          "slot": 19,
          "quality": 4,
          "icon": "inv_misc_tabardpvp_02.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 2.610205389766794,
          "total": 5104,
          "bestAmount": 430.28873179171,
          "medianPerformance": 2.610205389766794,
          "averagePerformance": 2.610205389766794,
          "totalKills": 1,
          "fastestKill": 4632749,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 7.1764323512020525,
          "total": 5104,
          "bestAmount": 230.69132190945,
          "medianPerformance": 7.1764323512020525,
          "averagePerformance": 7.1764323512020525,
          "totalKills": 1,
          "fastestKill": 4632632,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 2.9150208942422227,
          "total": 5133,
          "bestAmount": 429.71920505312,
          "medianPerformance": 2.9150208942422227,
          "averagePerformance": 2.9150208942422227,
          "totalKills": 1,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 8.699449124642731,
          "total": 5133,
          "bestAmount": 255.69955066364,
          "medianPerformance": 8.699449124642731,
          "averagePerformance": 8.699449124642731,
          "totalKills": 1,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 19.8138,
          "medianPerformance": 19.8138,
          "totalKills": 1,
          "fastestKill": 102130,
          "bestAmount": 658.61157348477,
          "highestDps": 658.61157348477,
          "spec": "Balance",
          "allStars": {
            "points": 33.58,
            "rank": 9052,
            "rankPercent": 15.890716476163925,
            "total": 10761
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 8.6417,
          "medianPerformance": 8.6417,
          "totalKills": 1,
          "fastestKill": 197785,
          "bestAmount": 398.33657759689,
          "highestDps": 398.33657759689,
          "spec": "Balance",
          "allStars": {
            "points": 22.63,
            "rank": 10304,
            "rankPercent": 4.857327546403177,
            "total": 10829
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 16.0806,
          "medianPerformance": 16.0806,
          "totalKills": 1,
          "fastestKill": 163533,
          "bestAmount": 544.72797539335,
          "highestDps": 544.72797539335,
          "spec": "Balance",
          "allStars": {
            "points": 35.51,
            "rank": 9426,
            "rankPercent": 11.269064206364149,
            "total": 10622
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 4.05486,
          "medianPerformance": 4.05486,
          "totalKills": 1,
          "fastestKill": 115131,
          "bestAmount": 443.73800279681,
          "highestDps": 443.73800279681,
          "spec": "Balance",
          "allStars": {
            "points": 20.59,
            "rank": 10049,
            "rankPercent": 1.9898556379243075,
            "total": 10252
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 5.6074,
          "medianPerformance": 5.6074,
          "totalKills": 1,
          "fastestKill": 203960,
          "bestAmount": 563.95371641498,
          "highestDps": 563.95371641498,
          "spec": "Balance",
          "allStars": {
            "points": 33.24,
            "rank": 9936,
            "rankPercent": 4.06527616840479,
            "total": 10356
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 1.29941,
          "medianPerformance": 1.29941,
          "totalKills": 1,
          "fastestKill": 409306,
          "bestAmount": 272.70550639375,
          "highestDps": 272.70550639375,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 9491,
            "rankPercent": 0.2103049421661409,
            "total": 9510
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 11.7698,
          "medianPerformance": 11.7698,
          "totalKills": 1,
          "fastestKill": 278120,
          "bestAmount": 463.72429167266,
          "highestDps": 463.72429167266,
          "spec": "Balance",
          "allStars": {
            "points": 36.07,
            "rank": 9722,
            "rankPercent": 6.375806606953674,
            "total": 10383
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 6.74213,
          "medianPerformance": 6.74213,
          "totalKills": 1,
          "fastestKill": 150193,
          "bestAmount": 552.96851384552,
          "highestDps": 552.96851384552,
          "spec": "Balance",
          "allStars": {
            "points": 36.21,
            "rank": 9929,
            "rankPercent": 3.4992223950233283,
            "total": 10288
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 19.6283,
          "medianPerformance": 19.6283,
          "totalKills": 1,
          "fastestKill": 107182,
          "bestAmount": 669.24483588662,
          "highestDps": 669.24483588662,
          "spec": "Balance",
          "allStars": {
            "points": 33.65,
            "rank": 9168,
            "rankPercent": 13.461720003776078,
            "total": 10593
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 1.85505,
          "medianPerformance": 1.85505,
          "totalKills": 1,
          "fastestKill": 427207,
          "bestAmount": 304.18509060011,
          "highestDps": 304.18509060011,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 9456,
            "rankPercent": 0.11620536657511092,
            "total": 9466
          }
        }
      ],
      "bestPerformanceAverage": 11.54232375,
      "medianPerformanceAverage": 11.54232375,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "månowar": {
      "characterName": "Månowar",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 110142451,
      "gear": [
        {
          "id": 25617,
          "slot": 1,
          "quality": 2,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 96,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25562,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_06.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29326,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_03.jpg",
          "itemLevel": 97,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 127,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_07.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28057,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_plate16.jpg",
          "itemLevel": 85,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24360,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_11.jpg",
          "itemLevel": 91,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24022,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_15.jpg",
          "itemLevel": 85,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27915,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 11679,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 55,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25716,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 85,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25775,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_02.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25499,
          "slot": 12,
          "quality": 2,
          "icon": "inv_jewelry_ring_04.jpg",
          "itemLevel": 93,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28041,
          "slot": 13,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25937,
          "slot": 14,
          "quality": 2,
          "icon": "inv_misc_stonetablet_11.jpg",
          "itemLevel": 99,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28032,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_05.jpg",
          "itemLevel": 97,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29329,
          "slot": 16,
          "quality": 3,
          "icon": "inv_spear_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2639
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24381,
          "slot": 18,
          "quality": 3,
          "icon": "inv_weapon_crossbow_11.jpg",
          "itemLevel": 91,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "möxentöxen": {
      "characterName": "Möxentöxen",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109399069,
      "gear": [
        {
          "id": 28963,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_89.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28530,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28967,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2995,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28964,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 24256,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 30050,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29172,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28570,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2672,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28386,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31778,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 20,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 85.70704378733055,
          "total": 2506,
          "bestAmount": 1061.8187269569,
          "medianPerformance": 47.958211742898214,
          "averagePerformance": 56.424721228298,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 77.69990228444637,
          "total": 6290,
          "bestAmount": 634.40432971802,
          "medianPerformance": 60.897384301879846,
          "averagePerformance": 66.3238241482303,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 62.83086306702169,
          "total": 2264,
          "bestAmount": 980.32719302724,
          "medianPerformance": 38.614344783788844,
          "averagePerformance": 46.199324423886516,
          "totalKills": 3,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 56.70452791649844,
          "total": 6240,
          "bestAmount": 542.68429049818,
          "medianPerformance": 53.55447065267384,
          "averagePerformance": 53.1970769818468,
          "totalKills": 3,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 93.8376,
          "medianPerformance": 71.6596,
          "totalKills": 4,
          "fastestKill": 101451,
          "bestAmount": 1555.5730080194,
          "highestDps": 1555.5730080194,
          "spec": "Affliction",
          "allStars": {
            "points": 93.22,
            "rank": 1532,
            "rankPercent": 80.84094606432237,
            "total": 7991
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 57.2463,
          "medianPerformance": 31.7166,
          "totalKills": 4,
          "fastestKill": 155841,
          "bestAmount": 857.12003238073,
          "highestDps": 857.12003238073,
          "spec": "Affliction",
          "allStars": {
            "points": 43.58,
            "rank": 5415,
            "rankPercent": 32.72026842301479,
            "total": 8047
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 88.7434,
          "medianPerformance": 69.5572,
          "totalKills": 4,
          "fastestKill": 145698,
          "bestAmount": 1242.9683317547,
          "highestDps": 1242.9683317547,
          "spec": "Affliction",
          "allStars": {
            "points": 94.35,
            "rank": 1378,
            "rankPercent": 81.88634569850039,
            "total": 7602
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 90.122,
          "medianPerformance": 69.0121,
          "totalKills": 4,
          "fastestKill": 115131,
          "bestAmount": 1404.7640751986,
          "highestDps": 1404.7640751986,
          "spec": "Affliction",
          "allStars": {
            "points": 86.25,
            "rank": 1945,
            "rankPercent": 75.51328882730823,
            "total": 7939
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 74.8307,
          "medianPerformance": 36.053,
          "totalKills": 4,
          "fastestKill": 173996,
          "bestAmount": 1268.6971327139,
          "highestDps": 1268.6971327139,
          "spec": "Affliction",
          "allStars": {
            "points": 68.04,
            "rank": 3513,
            "rankPercent": 55.50487773976941,
            "total": 7893
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 74.9455,
          "medianPerformance": 70.7928,
          "totalKills": 4,
          "fastestKill": 402466,
          "bestAmount": 800.8294448946,
          "highestDps": 800.8294448946,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 2022,
            "rankPercent": 73.23887711864407,
            "total": 7552
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 79.2171,
          "medianPerformance": 70.33,
          "totalKills": 3,
          "fastestKill": 262590,
          "bestAmount": 1030.9565251276,
          "highestDps": 1030.9565251276,
          "spec": "Affliction",
          "allStars": {
            "points": 73.61,
            "rank": 3527,
            "rankPercent": 55.13994910941476,
            "total": 7860
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 82.6579,
          "medianPerformance": 46.3405,
          "totalKills": 3,
          "fastestKill": 143538,
          "bestAmount": 1424.2202543648,
          "highestDps": 1424.2202543648,
          "spec": "Affliction",
          "allStars": {
            "points": 77.6,
            "rank": 2894,
            "rankPercent": 62.91501089603897,
            "total": 7801
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 89.2596,
          "medianPerformance": 60.184,
          "totalKills": 3,
          "fastestKill": 103400,
          "bestAmount": 1299.3291363191,
          "highestDps": 1299.3291363191,
          "spec": "Affliction",
          "allStars": {
            "points": 82.32,
            "rank": 2120,
            "rankPercent": 72.41244629605521,
            "total": 7681
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 26.5104,
          "medianPerformance": 24.2223,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 744.19258883483,
          "highestDps": 744.19258883483,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 5571,
            "rankPercent": 21.890337961015284,
            "total": 7131
          }
        }
      ],
      "bestPerformanceAverage": 81.989325,
      "medianPerformanceAverage": 56.85662500000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "nahába": {
      "characterName": "Nahába",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 97456377,
      "gear": [
        {
          "id": 29021,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_58.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 33173,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23522,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 27985,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28381,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 28776,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 30365,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29379,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_01.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 14,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27423,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 103,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28438,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_38.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": null
        },
        {
          "id": 28308,
          "slot": 17,
          "quality": 4,
          "icon": "inv_axe_54.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2713
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 56.38192727304756,
          "total": 3573,
          "bestAmount": 1067.3939701696,
          "medianPerformance": 56.38000800968754,
          "averagePerformance": 56.38000800968754,
          "totalKills": 2,
          "fastestKill": 11111458,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 47.506988642075854,
          "total": 3573,
          "bestAmount": 458.09451828914,
          "medianPerformance": 37.705695288105744,
          "averagePerformance": 37.705695288105744,
          "totalKills": 2,
          "fastestKill": 11111458,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 65.5923,
          "medianPerformance": 65.5923,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1117.7228760374,
          "highestDps": 1117.7228760374,
          "spec": "Fury",
          "allStars": {
            "points": 55.24,
            "rank": 10283,
            "rankPercent": 48.463736153576264,
            "total": 19951
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 75.7437,
          "medianPerformance": 75.7437,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 1082.5695962639,
          "highestDps": 1082.5695962639,
          "spec": "Fury",
          "allStars": {
            "points": 56.51,
            "rank": 10349,
            "rankPercent": 49.26456167876054,
            "total": 20396
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 55.5918,
          "medianPerformance": 55.5918,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 887.30765742616,
          "highestDps": 887.30765742616,
          "spec": "Fury",
          "allStars": {
            "points": 43.58,
            "rank": 12909,
            "rankPercent": 36.8153115668902,
            "total": 20429
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 69.171,
          "medianPerformance": 69.171,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1734.9829043093,
          "highestDps": 1734.9829043093,
          "spec": "Fury",
          "allStars": {
            "points": 58.94,
            "rank": 8357,
            "rankPercent": 53.106234917784384,
            "total": 17819
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 57.3256,
          "medianPerformance": 57.3256,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1269.1767006907,
          "highestDps": 1269.1767006907,
          "spec": "Fury",
          "allStars": {
            "points": 58.87,
            "rank": 10515,
            "rankPercent": 46.61860276198213,
            "total": 19696
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 30.9124,
          "medianPerformance": 30.9124,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 651.17298191694,
          "highestDps": 651.17298191694,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 14076,
            "rankPercent": 21.561524743646903,
            "total": 17944
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": 64.68488,
      "medianPerformanceAverage": 64.68488,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "notalazy": {
      "characterName": "Notalazy",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107619028,
      "gear": [
        {
          "id": 29068,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_77.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2999,
          "temporaryEnchantID": null
        },
        {
          "id": 29173,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28743,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2977,
          "temporaryEnchantID": null
        },
        {
          "id": 4335,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_16.jpg",
          "itemLevel": 37,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28597,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2659,
          "temporaryEnchantID": null
        },
        {
          "id": 29253,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_11.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29069,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_22.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 29254,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 29252,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 28518,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_31.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28675,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29279,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28789,
          "slot": 13,
          "quality": 4,
          "icon": "inv_elemental_mote_life01.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2622,
          "temporaryEnchantID": null
        },
        {
          "id": 29155,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_01.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": null
        },
        {
          "id": 28606,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1071,
          "temporaryEnchantID": null
        },
        {
          "id": 29388,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_libramofhope.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "obivankapman": {
      "characterName": "Obivankapman",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 108619544,
      "gear": [
        {
          "id": 30146,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_87.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30149,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_51.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29045,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate02.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29247,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29046,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_05.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 29246,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 30145,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_50.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30052,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 16,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28189,
          "slot": 17,
          "quality": 3,
          "icon": "inv_sword_76.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2643
        },
        {
          "id": 29949,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_rifle_18.jpg",
          "itemLevel": 134,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31779,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 20,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 93.05954674861226,
          "total": 13316,
          "bestAmount": 1326.2318884246,
          "medianPerformance": 93.05954674861226,
          "averagePerformance": 92.47910153172747,
          "totalKills": 3,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 93.2264381908504,
          "total": 13316,
          "bestAmount": 686.80232147241,
          "medianPerformance": 91.24217441107346,
          "averagePerformance": 88.24815156581177,
          "totalKills": 3,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 83.4337825983422,
          "total": 13751,
          "bestAmount": 1072.2942586366,
          "medianPerformance": 82.0651012707657,
          "averagePerformance": 80.20221964404801,
          "totalKills": 3,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 93.33922505518217,
          "total": 11835,
          "bestAmount": 649.84731498498,
          "medianPerformance": 86.92774158244079,
          "averagePerformance": 84.15076906600764,
          "totalKills": 3,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 98.5056,
          "medianPerformance": 97.993,
          "totalKills": 3,
          "fastestKill": 92487,
          "bestAmount": 1871.1927081644,
          "highestDps": 1871.1927081644,
          "spec": "Combat",
          "allStars": {
            "points": 112.45,
            "rank": 397,
            "rankPercent": 97.80048878027105,
            "total": 18004
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.5868,
          "medianPerformance": 93.8982,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1456.9695193435,
          "highestDps": 1456.9695193435,
          "spec": "Combat",
          "allStars": {
            "points": 106.27,
            "rank": 939,
            "rankPercent": 94.86252601599298,
            "total": 18258
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.1147,
          "medianPerformance": 97.3764,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1598.2273351691,
          "highestDps": 1598.2273351691,
          "spec": "Combat",
          "allStars": {
            "points": 109.5,
            "rank": 773,
            "rankPercent": 95.72251773049645,
            "total": 18048
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 94.0768,
          "medianPerformance": 88.9303,
          "totalKills": 3,
          "fastestKill": 123192,
          "bestAmount": 2022.9316838756,
          "highestDps": 2022.9316838756,
          "spec": "Combat",
          "allStars": {
            "points": 101.47,
            "rank": 1452,
            "rankPercent": 91.76784295926473,
            "total": 17626
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 94.1525,
          "medianPerformance": 93.1513,
          "totalKills": 3,
          "fastestKill": 176054,
          "bestAmount": 1735.7276854898,
          "highestDps": 1735.7276854898,
          "spec": "Combat",
          "allStars": {
            "points": 106.94,
            "rank": 1455,
            "rankPercent": 91.72311720840212,
            "total": 17567
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 90.7459,
          "medianPerformance": 57.6159,
          "totalKills": 3,
          "fastestKill": 398721,
          "bestAmount": 932.7023156543,
          "highestDps": 932.7023156543,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 1607,
            "rankPercent": 89.8923783749764,
            "total": 15889
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.9024,
          "medianPerformance": 92.4341,
          "totalKills": 3,
          "fastestKill": 247416,
          "bestAmount": 1203.4872441556,
          "highestDps": 1203.4872441556,
          "spec": "Combat",
          "allStars": {
            "points": 113.83,
            "rank": 423,
            "rankPercent": 97.57317844614411,
            "total": 17389
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.4203,
          "medianPerformance": 95.8793,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1740.5625486425,
          "highestDps": 1740.5625486425,
          "spec": "Combat",
          "allStars": {
            "points": 113.74,
            "rank": 526,
            "rankPercent": 96.99226582641077,
            "total": 17455
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 95.0427,
          "medianPerformance": 87.1048,
          "totalKills": 3,
          "fastestKill": 102300,
          "bestAmount": 1710.7624633431,
          "highestDps": 1710.7624633431,
          "spec": "Combat",
          "allStars": {
            "points": 104.91,
            "rank": 970,
            "rankPercent": 94.43135451985518,
            "total": 17401
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 50.5652,
          "medianPerformance": 46.5049,
          "totalKills": 3,
          "fastestKill": 426009,
          "bestAmount": 698.53923273921,
          "highestDps": 698.53923273921,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 9345,
            "rankPercent": 41.310219207336225,
            "total": 15921
          }
        }
      ],
      "bestPerformanceAverage": 96.350225,
      "medianPerformanceAverage": 93.34592500000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "palayoshka": {
      "characterName": "Palayoshka",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876715,
      "gear": [
        {
          "id": 29061,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_77.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 29374,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_31.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30138,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_41.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2980,
          "temporaryEnchantID": null
        },
        {
          "id": 4334,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_08.jpg",
          "itemLevel": 34,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29062,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3150,
          "temporaryEnchantID": null
        },
        {
          "id": 29965,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28748,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 30027,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_08.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2656,
          "temporaryEnchantID": null
        },
        {
          "id": 28512,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 30112,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_20.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29290,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 28790,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_70.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 28727,
          "slot": 13,
          "quality": 4,
          "icon": "inv_trinket_naxxramas02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 13503,
          "slot": 14,
          "quality": 4,
          "icon": "spell_holy_pureofheart.jpg",
          "itemLevel": 90,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28582,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2662,
          "temporaryEnchantID": null
        },
        {
          "id": 28771,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_46.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2666,
          "temporaryEnchantID": 2629
        },
        {
          "id": 29458,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_33.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2654,
          "temporaryEnchantID": null
        },
        {
          "id": 30063,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_libramoftruth.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 97.02292846560456,
          "total": 5595,
          "bestAmount": 730.32503792647,
          "medianPerformance": 93.27246765570005,
          "averagePerformance": 92.82774468859108,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 98.98759555171738,
          "total": 11276,
          "bestAmount": 768.79048174443,
          "medianPerformance": 89.19255292372992,
          "averagePerformance": 90.55700256118091,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 80,
          "medianPerformance": 75,
          "totalKills": 5,
          "fastestKill": 96509,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 80,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 75.55680984171671,
          "medianPerformance": 55.33105038576905,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1.8672878125782,
          "highestDps": 1.8672878125782,
          "spec": "Holy",
          "allStars": {
            "points": 75.61655960249112,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 92.19435793409725,
          "medianPerformance": 30,
          "totalKills": 5,
          "fastestKill": 145711,
          "bestAmount": 56.19028565558,
          "highestDps": 56.19028565558,
          "spec": "Holy",
          "allStars": {
            "points": 93.80374827513627,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 79.70850843584742,
          "medianPerformance": 70,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 0.60069289226643,
          "highestDps": 0.60069289226643,
          "spec": "Holy",
          "allStars": {
            "points": 79.71915428903851,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 95.3707326787984,
          "medianPerformance": 60,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 11.773353050949,
          "highestDps": 11.773353050949,
          "spec": "Holy",
          "allStars": {
            "points": 95.65251888111692,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 50,
          "medianPerformance": 50,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.63308306104157,
          "medianPerformance": 60,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 6.7058153654069,
          "highestDps": 6.7058153654069,
          "spec": "Holy",
          "allStars": {
            "points": 97.80171956571753,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 71.59582198613677,
          "medianPerformance": 60.585314973269774,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 2.3589468363278,
          "highestDps": 2.3589468363278,
          "spec": "Holy",
          "allStars": {
            "points": 71.63264129996203,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 81.6871552238327,
          "medianPerformance": 70,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 4.7609549660489,
          "highestDps": 4.7609549660489,
          "spec": "Holy",
          "allStars": {
            "points": 81.7816916083923,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 67.54646283465172,
          "medianPerformance": 40,
          "totalKills": 5,
          "fastestKill": 427310,
          "bestAmount": 1.303890737142,
          "highestDps": 1.303890737142,
          "spec": "Holy",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 84.21830864518385,
      "medianPerformanceAverage": 60.11454566987985,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "pappit": {
      "characterName": "Pappit",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105987565,
      "gear": [
        {
          "id": 32461,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 30022,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_01.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30055,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_23.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30129,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate19.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30106,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30257,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28608,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28795,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 30341,
          "slot": 10,
          "quality": 2,
          "icon": "inv_gauntlets_23.jpg",
          "itemLevel": 114,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28730,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28288,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_enggizmos_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30098,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28430,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_2h_blacksmithing_03.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27484,
          "slot": 18,
          "quality": 3,
          "icon": "inv_misc_stonetablet_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 95.5391065344285,
          "total": 8914,
          "bestAmount": 1360.0875012762,
          "medianPerformance": 92.02000339055063,
          "averagePerformance": 79.93958037431175,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 90.078469573468,
          "total": 8914,
          "bestAmount": 674.10031222299,
          "medianPerformance": 88.54834844599142,
          "averagePerformance": 75.57652450020163,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 98.42500963911489,
          "total": 3710,
          "bestAmount": 1266.531266015,
          "medianPerformance": 82.89123716571387,
          "averagePerformance": 76.51653161481022,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 92.55023147072332,
          "total": 9000,
          "bestAmount": 715.59119005119,
          "medianPerformance": 72.7350816129514,
          "averagePerformance": 69.24688195913703,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.0405,
          "medianPerformance": 94.8389,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 1916.1368542449,
          "highestDps": 1916.1368542449,
          "spec": "Retribution",
          "allStars": {
            "points": 106.93,
            "rank": 758,
            "rankPercent": 93.51272602622333,
            "total": 11669
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.6558,
          "medianPerformance": 89.5674,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1357.0297127724,
          "highestDps": 1357.0297127724,
          "spec": "Retribution",
          "allStars": {
            "points": 94.75,
            "rank": 1882,
            "rankPercent": 84.08494796514087,
            "total": 11819
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.3625,
          "medianPerformance": 94.9541,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1785.4328817142,
          "highestDps": 1785.4328817142,
          "spec": "Retribution",
          "allStars": {
            "points": 110.94,
            "rank": 419,
            "rankPercent": 96.53715516527214,
            "total": 12071
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 95.836,
          "medianPerformance": 94.0711,
          "totalKills": 5,
          "fastestKill": 116887,
          "bestAmount": 2044.6670716162,
          "highestDps": 2044.6670716162,
          "spec": "Retribution",
          "allStars": {
            "points": 107.25,
            "rank": 543,
            "rankPercent": 94.95203501909286,
            "total": 10737
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 93.2225,
          "medianPerformance": 83.2094,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 1825.9327800639,
          "highestDps": 1825.9327800639,
          "spec": "Retribution",
          "allStars": {
            "points": 107.14,
            "rank": 825,
            "rankPercent": 92.44106045316943,
            "total": 10901
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 82.8135,
          "medianPerformance": 79.7996,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 845.72444707,
          "highestDps": 845.72444707,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 2388,
            "rankPercent": 77.989857076994,
            "total": 10845
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.6448,
          "medianPerformance": 94.4141,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 1208.3911383451,
          "highestDps": 1208.3911383451,
          "spec": "Retribution",
          "allStars": {
            "points": 104.78,
            "rank": 1007,
            "rankPercent": 90.77402787967718,
            "total": 10904
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.1734,
          "medianPerformance": 83.994,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 1968.0848324083,
          "highestDps": 1968.0848324083,
          "spec": "Retribution",
          "allStars": {
            "points": 113.02,
            "rank": 325,
            "rankPercent": 97.212183789365,
            "total": 11622
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 95.4118,
          "medianPerformance": 88.2883,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 1659.1707154981,
          "highestDps": 1659.1707154981,
          "spec": "Retribution",
          "allStars": {
            "points": 92.56,
            "rank": 1844,
            "rankPercent": 83.81487661368227,
            "total": 11387
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 97.6383,
          "medianPerformance": 55.5333,
          "totalKills": 5,
          "fastestKill": 433670,
          "bestAmount": 1120.1439433811,
          "highestDps": 1120.1439433811,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 760,
            "rankPercent": 92.51921939680662,
            "total": 10146
          }
        }
      ],
      "bestPerformanceAverage": 96.6684125,
      "medianPerformanceAverage": 90.4171625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "pigtasty": {
      "characterName": "Pigtasty",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 102022370,
      "gear": [
        {
          "id": 28275,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27801,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 127,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_07.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28228,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28750,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 29246,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 27474,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 27903,
          "slot": 16,
          "quality": 3,
          "icon": "inv_spear_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2724,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 86.27606267163385,
          "total": 20482,
          "bestAmount": 1448.5353886819,
          "medianPerformance": 75.53773246426962,
          "averagePerformance": 71.42973679197651,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 88.60819978326629,
          "total": 20482,
          "bestAmount": 722.07176565622,
          "medianPerformance": 73.21400520005778,
          "averagePerformance": 68.80574779785151,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 88.73788273607822,
          "total": 8904,
          "bestAmount": 1236.0301890503,
          "medianPerformance": 76.09890553531673,
          "averagePerformance": 78.91033692476215,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 92.31155653200439,
          "total": 20803,
          "bestAmount": 750.98923080371,
          "medianPerformance": 80.24667167139887,
          "averagePerformance": 81.42185714811171,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.2501,
          "medianPerformance": 91.3182,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 2183.6264440265,
          "highestDps": 2183.6264440265,
          "spec": "BeastMastery",
          "allStars": {
            "points": 105.04,
            "rank": 1988,
            "rankPercent": 93.49164755977726,
            "total": 30530
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.2949,
          "medianPerformance": 66.6938,
          "totalKills": 5,
          "fastestKill": 170600,
          "bestAmount": 1401.7127701501,
          "highestDps": 1401.7127701501,
          "spec": "BeastMastery",
          "allStars": {
            "points": 88.51,
            "rank": 6113,
            "rankPercent": 80.20533082877222,
            "total": 30877
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 96.5643,
          "medianPerformance": 83.7131,
          "totalKills": 5,
          "fastestKill": 159421,
          "bestAmount": 1844.9890541397,
          "highestDps": 1844.9890541397,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.66,
            "rank": 1654,
            "rankPercent": 94.59680319027228,
            "total": 30593
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 90.0358,
          "medianPerformance": 79.0988,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1960.0305731055,
          "highestDps": 1960.0305731055,
          "spec": "BeastMastery",
          "allStars": {
            "points": 89.78,
            "rank": 5573,
            "rankPercent": 81.46312252569946,
            "total": 30059
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 87.4576,
          "medianPerformance": 62.4122,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 2011.8430711509,
          "highestDps": 2011.8430711509,
          "spec": "BeastMastery",
          "allStars": {
            "points": 97.15,
            "rank": 4475,
            "rankPercent": 85.03779011437362,
            "total": 29902
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 81.1873,
          "medianPerformance": 68.6589,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 939.59738213911,
          "highestDps": 939.59738213911,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 8049,
            "rankPercent": 70.6993847162049,
            "total": 27467
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 83.0355,
          "medianPerformance": 75.8129,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1159.7592718337,
          "highestDps": 1159.7592718337,
          "spec": "BeastMastery",
          "allStars": {
            "points": 85.3,
            "rank": 7281,
            "rankPercent": 75.25156377481643,
            "total": 29416
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.6492,
          "medianPerformance": 86.7116,
          "totalKills": 5,
          "fastestKill": 150193,
          "bestAmount": 1797.5324394084,
          "highestDps": 1797.5324394084,
          "spec": "BeastMastery",
          "allStars": {
            "points": 107.55,
            "rank": 1498,
            "rankPercent": 94.89461837528135,
            "total": 29322
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.6814,
          "medianPerformance": 71.1221,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 2069.511176571,
          "highestDps": 2069.511176571,
          "spec": "BeastMastery",
          "allStars": {
            "points": 102.81,
            "rank": 1946,
            "rankPercent": 93.38255307566685,
            "total": 29392
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 76.9432,
          "medianPerformance": 65.4583,
          "totalKills": 4,
          "fastestKill": 426009,
          "bestAmount": 1030.7581999863,
          "highestDps": 1030.7581999863,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 8294,
            "rankPercent": 69.47961136464006,
            "total": 27172
          }
        }
      ],
      "bestPerformanceAverage": 92.62109999999998,
      "medianPerformanceAverage": 77.1103375,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "prõfessõr": {
      "characterName": "Prõfessõr",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106035081,
      "gear": [
        {
          "id": 30125,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_78.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28516,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29070,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2982,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29066,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28566,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_27.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30126,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_23.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28747,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 29252,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 30124,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_41.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2613,
          "temporaryEnchantID": null
        },
        {
          "id": 33054,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_39.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 30028,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30447,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_book_07.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28378,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_07.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 32963,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_47.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2678
        },
        {
          "id": 33313,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_31.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 1071,
          "temporaryEnchantID": null
        },
        {
          "id": 29388,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_libramofhope.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 99.4636314275419,
          "total": 4754,
          "bestAmount": 525.81905038572,
          "medianPerformance": 98.18253355116394,
          "averagePerformance": 98.00645270675582,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 97.47578541279192,
          "total": 10660,
          "bestAmount": 464.90714235976,
          "medianPerformance": 92.45328410019712,
          "averagePerformance": 88.11059195460108,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 99.2510215246818,
          "total": 7211,
          "bestAmount": 483.40294433232,
          "medianPerformance": 96.9657034285559,
          "averagePerformance": 96.90893085907777,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 95.54974305009175,
          "total": 11257,
          "bestAmount": 417.54790741588,
          "medianPerformance": 91.34678080480816,
          "averagePerformance": 84.26255319772136,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7505,
          "medianPerformance": 99.2054,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 854.98113676879,
          "highestDps": 854.98113676879,
          "spec": "Protection",
          "allStars": {
            "points": 108.72,
            "rank": 35,
            "rankPercent": 99.57494686835855,
            "total": 7999
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 99.7748,
          "medianPerformance": 99.5618,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 617.56407241947,
          "highestDps": 617.56407241947,
          "spec": "Justicar",
          "allStars": {
            "points": 107.6,
            "rank": 54,
            "rankPercent": 99.61990820424555,
            "total": 13944
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.1163,
          "medianPerformance": 93.3675,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 596.07544372606,
          "highestDps": 596.07544372606,
          "spec": "Justicar",
          "allStars": {
            "points": 104.66,
            "rank": 382,
            "rankPercent": 97.14756307554092,
            "total": 13357
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.1809,
          "medianPerformance": 97.1347,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1123.9833958006,
          "highestDps": 1123.9833958006,
          "spec": "Protection",
          "allStars": {
            "points": 109.64,
            "rank": 399,
            "rankPercent": 97.04550515923094,
            "total": 13471
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.9576,
          "medianPerformance": 95.6931,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 507.11510609439,
          "highestDps": 507.11510609439,
          "spec": "Justicar",
          "allStars": {
            "points": 104.51,
            "rank": 477,
            "rankPercent": 96.94715238583889,
            "total": 15592
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 98.8058,
          "medianPerformance": 97.5445,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 366.00949128087,
          "highestDps": 366.00949128087,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 240,
            "rankPercent": 97.92119683395669,
            "total": 11497
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 99.5728,
          "medianPerformance": 96.4314,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 293.15403422983,
          "highestDps": 293.15403422983,
          "spec": "Justicar",
          "allStars": {
            "points": 110.44,
            "rank": 171,
            "rankPercent": 98.84495175974996,
            "total": 14718
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.3584,
          "medianPerformance": 94.5861,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 870.84617791775,
          "highestDps": 870.84617791775,
          "spec": "Protection",
          "allStars": {
            "points": 112.15,
            "rank": 151,
            "rankPercent": 98.38065421569686,
            "total": 9263
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.6536,
          "medianPerformance": 99.5514,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 665.14909261718,
          "highestDps": 665.14909261718,
          "spec": "Justicar",
          "allStars": {
            "points": 106.64,
            "rank": 216,
            "rankPercent": 98.45190092165899,
            "total": 13888
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 96.0475,
          "medianPerformance": 94.328,
          "totalKills": 5,
          "fastestKill": 427207,
          "bestAmount": 416.98989014693,
          "highestDps": 416.98989014693,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 896,
            "rankPercent": 92.3392964135924,
            "total": 11683
          }
        }
      ],
      "bestPerformanceAverage": 99.1706125,
      "medianPerformanceAverage": 96.94142500000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "prõfessõrr": {
      "characterName": "Prõfessõrr",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "overallRanks": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": "Character not found on spineshatter-eu",
      "partial": false
    },
    "puppit": {
      "characterName": "Puppit",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 108619453,
      "gear": [
        {
          "id": 29040,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29043,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 154,
          "slot": 4,
          "quality": 2,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30054,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate09.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28656,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27837,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_mail_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28746,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 32816,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_16.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 27531,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 29282,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28730,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28288,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_enggizmos_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28529,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 29924,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_62.jpg",
          "itemLevel": 134,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 28308,
          "slot": 17,
          "quality": 4,
          "icon": "inv_axe_54.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 27815,
          "slot": 18,
          "quality": 3,
          "icon": "spell_unused.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 91.147192099176,
          "total": 10607,
          "bestAmount": 1202.3245199689,
          "medianPerformance": 73.43256953605459,
          "averagePerformance": 72.04288228641396,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 87.2201965289447,
          "total": 13677,
          "bestAmount": 651.49808101851,
          "medianPerformance": 81.85361439666283,
          "averagePerformance": 74.8115043981793,
          "totalKills": 6,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 91.17262276426996,
          "total": 13803,
          "bestAmount": 1105.1176027524,
          "medianPerformance": 83.33806947830851,
          "averagePerformance": 76.41649597533554,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 90.08229933887904,
          "total": 13803,
          "bestAmount": 650.79788426196,
          "medianPerformance": 79.91062360143621,
          "averagePerformance": 77.63884960524564,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 91.7934,
          "medianPerformance": 85.0779,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 1544.9792308169,
          "highestDps": 1544.9792308169,
          "spec": "Enhancement",
          "allStars": {
            "points": 96.12,
            "rank": 3063,
            "rankPercent": 84.2230008244023,
            "total": 19408
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 89.8689,
          "medianPerformance": 79.8572,
          "totalKills": 5,
          "fastestKill": 170600,
          "bestAmount": 1316.5897227172,
          "highestDps": 1316.5897227172,
          "spec": "Enhancement",
          "allStars": {
            "points": 94.82,
            "rank": 2978,
            "rankPercent": 84.65780251494537,
            "total": 19404
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.0875,
          "medianPerformance": 87.2797,
          "totalKills": 5,
          "fastestKill": 159421,
          "bestAmount": 1517.1966052151,
          "highestDps": 1517.1966052151,
          "spec": "Enhancement",
          "allStars": {
            "points": 106.94,
            "rank": 1486,
            "rankPercent": 92.2430004178855,
            "total": 19144
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 96.1275,
          "medianPerformance": 78.2348,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1862.3220505337,
          "highestDps": 1862.3220505337,
          "spec": "Enhancement",
          "allStars": {
            "points": 102.42,
            "rank": 1723,
            "rankPercent": 90.82040620502158,
            "total": 18759
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.2729,
          "medianPerformance": 70.474,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1803.186899392,
          "highestDps": 1803.186899392,
          "spec": "Enhancement",
          "allStars": {
            "points": 108.15,
            "rank": 1350,
            "rankPercent": 92.82752020416844,
            "total": 18808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 73.8076,
          "medianPerformance": 63.6477,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 797.47968509163,
          "highestDps": 797.47968509163,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 5370,
            "rankPercent": 69.3620178041543,
            "total": 17524
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 92.6358,
          "medianPerformance": 89.2163,
          "totalKills": 4,
          "fastestKill": 247416,
          "bestAmount": 1021.4375788146,
          "highestDps": 1021.4375788146,
          "spec": "Enhancement",
          "allStars": {
            "points": 101.44,
            "rank": 2258,
            "rankPercent": 87.90201543739279,
            "total": 18656
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 84.9849,
          "medianPerformance": 81.5983,
          "totalKills": 4,
          "fastestKill": 150193,
          "bestAmount": 1639.5662213532,
          "highestDps": 1639.5662213532,
          "spec": "Enhancement",
          "allStars": {
            "points": 98.49,
            "rank": 3019,
            "rankPercent": 83.81074991953653,
            "total": 18642
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 80.4173,
          "medianPerformance": 68.9343,
          "totalKills": 4,
          "fastestKill": 102300,
          "bestAmount": 1432.4270447828,
          "highestDps": 1432.4270447828,
          "spec": "Enhancement",
          "allStars": {
            "points": 84.07,
            "rank": 4755,
            "rankPercent": 74.65614671073675,
            "total": 18758
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 89.8704,
          "medianPerformance": 81.8584,
          "totalKills": 4,
          "fastestKill": 426009,
          "bestAmount": 921.2739636956,
          "highestDps": 921.2739636956,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 2393,
            "rankPercent": 86.26944492279434,
            "total": 17421
          }
        }
      ],
      "bestPerformanceAverage": 91.273525,
      "medianPerformanceAverage": 80.0840625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "renko": {
      "characterName": "Renko",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876719,
      "gear": [
        {
          "id": 29044,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_58.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30149,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_51.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29045,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate02.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29247,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30148,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2939,
          "temporaryEnchantID": null
        },
        {
          "id": 29246,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 27531,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30052,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28830,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_bone_03.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 30082,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_50.jpg",
          "itemLevel": 134,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2639
        },
        {
          "id": 32027,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_71.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2643
        },
        {
          "id": 29949,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_rifle_18.jpg",
          "itemLevel": 134,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 99.75194009604319,
          "total": 10967,
          "bestAmount": 1533.824626898,
          "medianPerformance": 97.38721969644064,
          "averagePerformance": 86.77209783342006,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 97.42342257859274,
          "total": 13026,
          "bestAmount": 770.23521175268,
          "medianPerformance": 97.46660509325383,
          "averagePerformance": 88.3727863077603,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 98.13624269309766,
          "total": 13459,
          "bestAmount": 1289.3443961231,
          "medianPerformance": 97.11087525541699,
          "averagePerformance": 93.50050352525986,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 98.24311438896046,
          "total": 13459,
          "bestAmount": 781.94462064998,
          "medianPerformance": 96.00837744744352,
          "averagePerformance": 90.58180895767114,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.6807,
          "medianPerformance": 95.5139,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 1949.3387504664,
          "highestDps": 1949.3387504664,
          "spec": "Combat",
          "allStars": {
            "points": 113.91,
            "rank": 243,
            "rankPercent": 98.65585425461009,
            "total": 18004
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 98.6732,
          "medianPerformance": 97.8117,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1547.3206665768,
          "highestDps": 1547.3206665768,
          "spec": "Combat",
          "allStars": {
            "points": 109.5,
            "rank": 475,
            "rankPercent": 97.40387775221821,
            "total": 18258
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.2296,
          "medianPerformance": 95.8066,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1647.462559541,
          "highestDps": 1647.462559541,
          "spec": "Combat",
          "allStars": {
            "points": 110.74,
            "rank": 624,
            "rankPercent": 96.5480939716312,
            "total": 18048
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.1814,
          "medianPerformance": 93.2201,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 2322.3979640583,
          "highestDps": 2322.3979640583,
          "spec": "Combat",
          "allStars": {
            "points": 108.32,
            "rank": 491,
            "rankPercent": 97.22001588562351,
            "total": 17626
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.423,
          "medianPerformance": 94.0134,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 1874.3879169636,
          "highestDps": 1874.3879169636,
          "spec": "Combat",
          "allStars": {
            "points": 113.22,
            "rank": 559,
            "rankPercent": 96.82358968520522,
            "total": 17567
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 99.7123,
          "medianPerformance": 86.2967,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 1105.9452875864,
          "highestDps": 1105.9452875864,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 66,
            "rankPercent": 99.59091195166468,
            "total": 15889
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 98.0439,
          "medianPerformance": 97.4302,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 1196.664000914,
          "highestDps": 1196.664000914,
          "spec": "Combat",
          "allStars": {
            "points": 113.48,
            "rank": 467,
            "rankPercent": 97.3201449192018,
            "total": 17389
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.8745,
          "medianPerformance": 97.9582,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 1757.1444495534,
          "highestDps": 1757.1444495534,
          "spec": "Combat",
          "allStars": {
            "points": 114.31,
            "rank": 453,
            "rankPercent": 97.41048410197651,
            "total": 17455
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.0579,
          "medianPerformance": 89.8201,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 1720.629937648,
          "highestDps": 1720.629937648,
          "spec": "Combat",
          "allStars": {
            "points": 105.36,
            "rank": 902,
            "rankPercent": 94.82213665881271,
            "total": 17401
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 97.1597,
          "medianPerformance": 90.5835,
          "totalKills": 5,
          "fastestKill": 427207,
          "bestAmount": 1122.1320358798,
          "highestDps": 1122.1320358798,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 523,
            "rankPercent": 96.72131147540983,
            "total": 15921
          }
        }
      ],
      "bestPerformanceAverage": 98.520525,
      "medianPerformanceAverage": 95.196775,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "retributia": {
      "characterName": "Retributia",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106356920,
      "gear": [
        {
          "id": 32461,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 28745,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29075,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29071,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28779,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30257,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28608,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28795,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 30644,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_28.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 28730,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28288,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_enggizmos_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28430,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_2h_blacksmithing_03.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2639
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27484,
          "slot": 18,
          "quality": 3,
          "icon": "inv_misc_stonetablet_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 84.40341098091056,
          "total": 7938,
          "bestAmount": 1212.7823813896,
          "medianPerformance": 78.64520246220656,
          "averagePerformance": 71.41708404825208,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 80.35593922035487,
          "total": 9102,
          "bestAmount": 604.75151392288,
          "medianPerformance": 79.85630758838604,
          "averagePerformance": 68.7831819093137,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 93.88480804429194,
          "total": 7981,
          "bestAmount": 1252.7436520685,
          "medianPerformance": 65.31158923204318,
          "averagePerformance": 74.13435308905316,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 93.22826271423725,
          "total": 7981,
          "bestAmount": 710.25454973329,
          "medianPerformance": 73.1343317304466,
          "averagePerformance": 61.71192287144449,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 91.8859,
          "medianPerformance": 85.6617,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 1852.7684971942,
          "highestDps": 1852.7684971942,
          "spec": "Retribution",
          "allStars": {
            "points": 104.43,
            "rank": 1000,
            "rankPercent": 91.43885508612563,
            "total": 11669
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.3714,
          "medianPerformance": 82.0908,
          "totalKills": 5,
          "fastestKill": 170511,
          "bestAmount": 1484.1662444711,
          "highestDps": 1484.1662444711,
          "spec": "Retribution",
          "allStars": {
            "points": 103.97,
            "rank": 902,
            "rankPercent": 92.37668161434978,
            "total": 11819
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 96.4163,
          "medianPerformance": 75.158,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 1586.8878507643,
          "highestDps": 1586.8878507643,
          "spec": "Retribution",
          "allStars": {
            "points": 104.07,
            "rank": 1061,
            "rankPercent": 91.21862314638389,
            "total": 12071
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.2136,
          "medianPerformance": 87.6006,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 2002.8597663122,
          "highestDps": 2002.8597663122,
          "spec": "Retribution",
          "allStars": {
            "points": 105.89,
            "rank": 663,
            "rankPercent": 93.83440439601378,
            "total": 10737
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 96.7159,
          "medianPerformance": 76.0428,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1833.8918740841,
          "highestDps": 1833.8918740841,
          "spec": "Retribution",
          "allStars": {
            "points": 107.57,
            "rank": 784,
            "rankPercent": 92.8171727364462,
            "total": 10901
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 91.0158,
          "medianPerformance": 83.5849,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 908.52069042307,
          "highestDps": 908.52069042307,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 1195,
            "rankPercent": 88.99031811894882,
            "total": 10845
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 99.509,
          "medianPerformance": 91.9763,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 1444.8823034889,
          "highestDps": 1444.8823034889,
          "spec": "Retribution",
          "allStars": {
            "points": 116.06,
            "rank": 67,
            "rankPercent": 99.39471753484959,
            "total": 10904
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 92.5569,
          "medianPerformance": 84.9888,
          "totalKills": 5,
          "fastestKill": 150650,
          "bestAmount": 1820.6610879199,
          "highestDps": 1820.6610879199,
          "spec": "Retribution",
          "allStars": {
            "points": 105.31,
            "rank": 1090,
            "rankPercent": 90.62983995869902,
            "total": 11622
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.8705,
          "medianPerformance": 77.0851,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 1753.2755199781,
          "highestDps": 1753.2755199781,
          "spec": "Retribution",
          "allStars": {
            "points": 97.83,
            "rank": 1295,
            "rankPercent": 88.63616404671994,
            "total": 11387
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 83.6862,
          "medianPerformance": 76.151,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 1024.8421981695,
          "highestDps": 1024.8421981695,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 2047,
            "rankPercent": 79.83441750443525,
            "total": 10146
          }
        }
      ],
      "bestPerformanceAverage": 95.5674375,
      "medianPerformanceAverage": 82.5755125,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "retrivutia": {
      "characterName": "Retrivutia",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 110543670,
      "gear": [
        {
          "id": 28182,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31275,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_19.jpg",
          "itemLevel": 106,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 33173,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23522,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27985,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30257,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28176,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32819,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 126,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30341,
          "slot": 10,
          "quality": 2,
          "icon": "inv_gauntlets_23.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27925,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30365,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29776,
          "slot": 13,
          "quality": 2,
          "icon": "spell_nature_abolishmagic.jpg",
          "itemLevel": 108,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25936,
          "slot": 14,
          "quality": 2,
          "icon": "inv_misc_stonetablet_11.jpg",
          "itemLevel": 99,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31942,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32663,
          "slot": 16,
          "quality": 3,
          "icon": "inv_axe_44.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27917,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_libramoftruth.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23705,
          "slot": 19,
          "quality": 4,
          "icon": "inv_misc_tabardpvp_02.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "rinn": {
      "characterName": "Rinn",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 91156149,
      "gear": [
        {
          "id": 30125,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_78.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28245,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_36.jpg",
          "itemLevel": 113,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29070,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2978,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29066,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29253,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_11.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30126,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_23.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 32267,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 28643,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2648,
          "temporaryEnchantID": null
        },
        {
          "id": 30124,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_41.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29287,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30028,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28789,
          "slot": 14,
          "quality": 4,
          "icon": "inv_elemental_mote_life01.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29925,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_08.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2622,
          "temporaryEnchantID": null
        },
        {
          "id": 32450,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_47.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2678
        },
        {
          "id": 28825,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_30.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2655,
          "temporaryEnchantID": null
        },
        {
          "id": 29388,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_libramofhope.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25549,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 74.36865390058006,
          "total": 1953,
          "bestAmount": 468.76376715882,
          "medianPerformance": 74.36865390058006,
          "averagePerformance": 77.01942848370206,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 96.54154592459767,
          "total": 9336,
          "bestAmount": 434.26609103664,
          "medianPerformance": 91.7103496042508,
          "averagePerformance": 90.90425655796605,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 90.56683897120531,
          "total": 11503,
          "bestAmount": 395.40686693825,
          "medianPerformance": 87.24158315822514,
          "averagePerformance": 81.222709677555,
          "totalKills": 3,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 96.13559274616182,
          "total": 11503,
          "bestAmount": 430.45058523254,
          "medianPerformance": 95.72130440173272,
          "averagePerformance": 88.79166128799774,
          "totalKills": 3,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 98.2563,
          "medianPerformance": 96.5942,
          "totalKills": 4,
          "fastestKill": 92487,
          "bestAmount": 683.16628282894,
          "highestDps": 683.16628282894,
          "spec": "Protection",
          "allStars": {
            "points": 104.72,
            "rank": 209,
            "rankPercent": 97.39967495936992,
            "total": 7999
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 86.8856,
          "medianPerformance": 53.3361,
          "totalKills": 4,
          "fastestKill": 170600,
          "bestAmount": 398.55637591152,
          "highestDps": 398.55637591152,
          "spec": "Justicar",
          "allStars": {
            "points": 89.02,
            "rank": 2268,
            "rankPercent": 83.74211130235227,
            "total": 13944
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 82.418,
          "medianPerformance": 79.3174,
          "totalKills": 4,
          "fastestKill": 159421,
          "bestAmount": 412.72479786226,
          "highestDps": 412.72479786226,
          "spec": "Justicar",
          "allStars": {
            "points": 83.83,
            "rank": 2879,
            "rankPercent": 78.45324548925657,
            "total": 13357
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.5955,
          "medianPerformance": 94.7775,
          "totalKills": 4,
          "fastestKill": 123192,
          "bestAmount": 1169.3792116907,
          "highestDps": 1169.3792116907,
          "spec": "Protection",
          "allStars": {
            "points": 110.97,
            "rank": 286,
            "rankPercent": 97.88434414668548,
            "total": 13471
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 89.986,
          "medianPerformance": 76.1279,
          "totalKills": 4,
          "fastestKill": 176054,
          "bestAmount": 357.73361246296,
          "highestDps": 357.73361246296,
          "spec": "Justicar",
          "allStars": {
            "points": 92.64,
            "rank": 1993,
            "rankPercent": 87.22421754746024,
            "total": 15592
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 86.0678,
          "medianPerformance": 74.5199,
          "totalKills": 4,
          "fastestKill": 398721,
          "bestAmount": 258.46895448196,
          "highestDps": 258.46895448196,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 2509,
            "rankPercent": 78.18561363834044,
            "total": 11497
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 90.5098,
          "medianPerformance": 89.0037,
          "totalKills": 3,
          "fastestKill": 247416,
          "bestAmount": 147.55715070974,
          "highestDps": 147.55715070974,
          "spec": "Justicar",
          "allStars": {
            "points": 94.28,
            "rank": 1716,
            "rankPercent": 88.34760157630113,
            "total": 14718
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 82.7909,
          "medianPerformance": 80.7153,
          "totalKills": 3,
          "fastestKill": 155471,
          "bestAmount": 688.38561532376,
          "highestDps": 688.38561532376,
          "spec": "Protection",
          "allStars": {
            "points": 93.41,
            "rank": 1637,
            "rankPercent": 82.33833531253373,
            "total": 9263
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 89.6125,
          "medianPerformance": 80.8372,
          "totalKills": 3,
          "fastestKill": 102300,
          "bestAmount": 669.01270772239,
          "highestDps": 669.01270772239,
          "spec": "Protection",
          "allStars": {
            "points": 94.79,
            "rank": 523,
            "rankPercent": 88.6669561441598,
            "total": 4606
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 83.884,
          "medianPerformance": 83.4151,
          "totalKills": 3,
          "fastestKill": 426009,
          "bestAmount": 367.6575694808,
          "highestDps": 367.6575694808,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 1933,
            "rankPercent": 83.4631515877771,
            "total": 11683
          }
        }
      ],
      "bestPerformanceAverage": 90.00682499999999,
      "medianPerformanceAverage": 81.3386625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "romovababka": {
      "characterName": "Romovababka",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107101385,
      "gear": [
        {
          "id": 30048,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_22.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 28233,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28631,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28662,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30030,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28748,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2745,
          "temporaryEnchantID": null
        },
        {
          "id": 30027,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_08.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29249,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 28505,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 28661,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_36.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29168,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28727,
          "slot": 13,
          "quality": 4,
          "icon": "inv_trinket_naxxramas02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25810,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_19.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 2662,
          "temporaryEnchantID": null
        },
        {
          "id": 27538,
          "slot": 16,
          "quality": 3,
          "icon": "inv_hammer_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2629
        },
        {
          "id": 28728,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_gem_sapphire_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30063,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_libramoftruth.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 91.04931813480673,
          "total": 13487,
          "bestAmount": 699.36637478593,
          "medianPerformance": 34.64252534374903,
          "averagePerformance": 46.255325254532266,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 89.65071115527337,
          "total": 13692,
          "bestAmount": 637.60872511074,
          "medianPerformance": 87.28254075372274,
          "averagePerformance": 62.91650989045775,
          "totalKills": 3,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 80,
          "medianPerformance": 75,
          "totalKills": 4,
          "fastestKill": 92557,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 80,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 64.33745399077323,
          "medianPerformance": 50,
          "totalKills": 4,
          "fastestKill": 170603,
          "bestAmount": 1.5597515782523,
          "highestDps": 1.5597515782523,
          "spec": "Holy",
          "allStars": {
            "points": 64.38736316012587,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 40,
          "medianPerformance": 32.65849401171556,
          "totalKills": 4,
          "fastestKill": 159442,
          "bestAmount": 0.35761257842643,
          "highestDps": 0.35761257842643,
          "spec": "Holy",
          "allStars": {
            "points": 40.0102426642406,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 75,
          "medianPerformance": 67.5,
          "totalKills": 4,
          "fastestKill": 123201,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 75,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 91.63162575997926,
          "medianPerformance": 67.32426977387352,
          "totalKills": 4,
          "fastestKill": 176054,
          "bestAmount": 12.207389684892,
          "highestDps": 12.207389684892,
          "spec": "Holy",
          "allStars": {
            "points": 91.92380029722807,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 69.76804154961631,
          "medianPerformance": 45,
          "totalKills": 4,
          "fastestKill": 398721,
          "bestAmount": 0.93146830060093,
          "highestDps": 0.93146830060093,
          "spec": "Holy",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 60,
          "medianPerformance": 50,
          "totalKills": 3,
          "fastestKill": 247465,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 60,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 95.20321530461786,
          "medianPerformance": 63.37650470937953,
          "totalKills": 3,
          "fastestKill": 155471,
          "bestAmount": 14.142412845816,
          "highestDps": 14.142412845816,
          "spec": "Holy",
          "allStars": {
            "points": 95.42395530977505,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 96.34953037246954,
          "medianPerformance": 75,
          "totalKills": 3,
          "fastestKill": 102300,
          "bestAmount": 25.333899583113,
          "highestDps": 25.333899583113,
          "spec": "Holy",
          "allStars": {
            "points": 96.85257551582043,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 40,
          "medianPerformance": 30,
          "totalKills": 3,
          "fastestKill": 426009,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 75.31522817847998,
      "medianPerformanceAverage": 60.10740856187108,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "roombaboomba": {
      "characterName": "Roombaboomba",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106091864,
      "gear": [
        {
          "id": 28963,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_89.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28967,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2981,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28964,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30064,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28507,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 28227,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_63.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27981,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28802,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_65.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28673,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 50.917886175331425,
          "total": 4300,
          "bestAmount": 916.00915984047,
          "medianPerformance": 41.20558704069086,
          "averagePerformance": 36.65885262344673,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 68.51791538526973,
          "total": 5278,
          "bestAmount": 570.07016627186,
          "medianPerformance": 63.9797646171223,
          "averagePerformance": 55.23540633292153,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 88.9611179108932,
          "total": 4170,
          "bestAmount": 1138.3664903152,
          "medianPerformance": 50.131812236295914,
          "averagePerformance": 53.42201941938441,
          "totalKills": 4,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 76.93465138866385,
          "total": 6409,
          "bestAmount": 630.22164353977,
          "medianPerformance": 48.87757601938533,
          "averagePerformance": 54.512687733994255,
          "totalKills": 4,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.2783,
          "medianPerformance": 73.1376,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 1706.3741750162,
          "highestDps": 1706.3741750162,
          "spec": "Affliction",
          "allStars": {
            "points": 103.53,
            "rank": 793,
            "rankPercent": 90.08884995620073,
            "total": 7991
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 67.1614,
          "medianPerformance": 40.0903,
          "totalKills": 5,
          "fastestKill": 161614,
          "bestAmount": 982.81635788893,
          "highestDps": 982.81635788893,
          "spec": "Affliction",
          "allStars": {
            "points": 61.89,
            "rank": 3785,
            "rankPercent": 52.976264446377535,
            "total": 8047
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 74.0922,
          "medianPerformance": 58.3476,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 1037.54275041,
          "highestDps": 1037.54275041,
          "spec": "Affliction",
          "allStars": {
            "points": 67.79,
            "rank": 3267,
            "rankPercent": 57.03762167850566,
            "total": 7602
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 59.2212,
          "medianPerformance": 19.3698,
          "totalKills": 5,
          "fastestKill": 124065,
          "bestAmount": 1132.2935557974,
          "highestDps": 1132.2935557974,
          "spec": "Affliction",
          "allStars": {
            "points": 51.49,
            "rank": 4577,
            "rankPercent": 42.36049880337574,
            "total": 7939
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 50.1827,
          "medianPerformance": 50.1827,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1196.3829179905,
          "highestDps": 1196.3829179905,
          "spec": "Destruction",
          "allStars": {
            "points": 54.18,
            "rank": 22105,
            "rankPercent": 33.26892887332448,
            "total": 33124
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 56.3462,
          "medianPerformance": 30.6182,
          "totalKills": 4,
          "fastestKill": 395742,
          "bestAmount": 714.76711127911,
          "highestDps": 714.76711127911,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 3781,
            "rankPercent": 49.94703389830509,
            "total": 7552
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 77.4492,
          "medianPerformance": 51.9713,
          "totalKills": 4,
          "fastestKill": 247416,
          "bestAmount": 1077.931233059,
          "highestDps": 1077.931233059,
          "spec": "Affliction",
          "allStars": {
            "points": 76.97,
            "rank": 2867,
            "rankPercent": 63.536895674300254,
            "total": 7860
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 95.338,
          "medianPerformance": 52.427,
          "totalKills": 4,
          "fastestKill": 150650,
          "bestAmount": 1628.3703949552,
          "highestDps": 1628.3703949552,
          "spec": "Affliction",
          "allStars": {
            "points": 104.64,
            "rank": 803,
            "rankPercent": 89.71926676067172,
            "total": 7801
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 80.1513,
          "medianPerformance": 45.992,
          "totalKills": 4,
          "fastestKill": 102300,
          "bestAmount": 1272.526683087,
          "highestDps": 1272.526683087,
          "spec": "Affliction",
          "allStars": {
            "points": 78.2,
            "rank": 2426,
            "rankPercent": 68.42859002734019,
            "total": 7681
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 87.4274,
          "medianPerformance": 58.9457,
          "totalKills": 4,
          "fastestKill": 437171,
          "bestAmount": 1014.2065208488,
          "highestDps": 1014.2065208488,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 1174,
            "rankPercent": 83.5506941522928,
            "total": 7131
          }
        }
      ],
      "bestPerformanceAverage": 74.85928750000001,
      "medianPerformanceAverage": 48.9397875,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "ryzha": {
      "characterName": "Ryzha",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 91156121,
      "gear": [
        {
          "id": 29049,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_91.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 28609,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21874,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_02.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2980,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21875,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_04.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 21873,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_31.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30153,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_26.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 30100,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_fabric_01.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 32516,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 29055,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_55.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29307,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 29290,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 28190,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28823,
          "slot": 14,
          "quality": 4,
          "icon": "spell_shadow_unholyfrenzy.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28765,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 19022,
          "slot": 16,
          "quality": 2,
          "icon": "inv_fishingpole_01.jpg",
          "itemLevel": 50,
          "permanentEnchantID": null,
          "temporaryEnchantID": 266
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30080,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_15.jpg",
          "itemLevel": 134,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 88.28018125575974,
          "total": 9996,
          "bestAmount": 996.44266055431,
          "medianPerformance": 79.04461620576669,
          "averagePerformance": 79.17089372331914,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 81.12128908351757,
          "total": 5662,
          "bestAmount": 989.57358250079,
          "medianPerformance": 74.46464372499068,
          "averagePerformance": 75.74465059174767,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.4212,
          "medianPerformance": 87.8144,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 986.94083993201,
          "highestDps": 986.94083993201,
          "spec": "Holy",
          "allStars": {
            "points": 104.67,
            "rank": 1412,
            "rankPercent": 93.34779124039413,
            "total": 21211
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 94.1686,
          "medianPerformance": 75.6492,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1194.8681649266,
          "highestDps": 1194.8681649266,
          "spec": "Holy",
          "allStars": {
            "points": 96.9,
            "rank": 2578,
            "rankPercent": 88.14790967207837,
            "total": 21743
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 92.4985,
          "medianPerformance": 80.8627,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1310.7768339434,
          "highestDps": 1310.7768339434,
          "spec": "Holy",
          "allStars": {
            "points": 97.01,
            "rank": 2430,
            "rankPercent": 88.8157288884796,
            "total": 21718
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 94.9063,
          "medianPerformance": 82.4793,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1512.6942352624,
          "highestDps": 1512.6942352624,
          "spec": "Holy",
          "allStars": {
            "points": 103.26,
            "rank": 1844,
            "rankPercent": 91.3526955379346,
            "total": 21313
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 89.058,
          "medianPerformance": 60.6101,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 1118.2339674446,
          "highestDps": 1118.2339674446,
          "spec": "Holy",
          "allStars": {
            "points": 94.78,
            "rank": 3512,
            "rankPercent": 83.36728409683073,
            "total": 21109
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 91.8232,
          "medianPerformance": 67.4286,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 916.56454941344,
          "highestDps": 916.56454941344,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 1659,
            "rankPercent": 91.36593240639483,
            "total": 19203
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 89.9677,
          "medianPerformance": 88.3864,
          "totalKills": 4,
          "fastestKill": 255889,
          "bestAmount": 719.65698259744,
          "highestDps": 719.65698259744,
          "spec": "Holy",
          "allStars": {
            "points": 94.17,
            "rank": 3129,
            "rankPercent": 84.94923735745562,
            "total": 20783
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 74.3289,
          "medianPerformance": 57.3486,
          "totalKills": 4,
          "fastestKill": 143538,
          "bestAmount": 2338.6340624031,
          "highestDps": 2338.6340624031,
          "spec": "Holy",
          "allStars": {
            "points": 71.88,
            "rank": 8829,
            "rankPercent": 59.05380333951763,
            "total": 21560
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 96.0806,
          "medianPerformance": 86.5513,
          "totalKills": 4,
          "fastestKill": 103400,
          "bestAmount": 1140.7156673114,
          "highestDps": 1140.7156673114,
          "spec": "Holy",
          "allStars": {
            "points": 105.78,
            "rank": 941,
            "rankPercent": 95.4989465619613,
            "total": 20884
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 84.7511,
          "medianPerformance": 64.1217,
          "totalKills": 4,
          "fastestKill": 427207,
          "bestAmount": 759.20505941302,
          "highestDps": 759.20505941302,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 4529,
            "rankPercent": 76.42894325871941,
            "total": 19210
          }
        }
      ],
      "bestPerformanceAverage": 90.803725,
      "medianPerformanceAverage": 77.46275,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "ryzhã": {
      "characterName": "Ryzhã",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 103400542,
      "gear": [
        {
          "id": 30152,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_93.jpg",
          "itemLevel": 133,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28822,
          "slot": 2,
          "quality": 4,
          "icon": "inv_misc_bone_09.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30154,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_57.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2980,
          "temporaryEnchantID": null
        },
        {
          "id": 53,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_01.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21875,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_04.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30036,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30153,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_26.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 30100,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_fabric_01.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 29183,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 30151,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_57.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29290,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 29307,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 28823,
          "slot": 13,
          "quality": 4,
          "icon": "spell_shadow_unholyfrenzy.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29989,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 19022,
          "slot": 16,
          "quality": 2,
          "icon": "inv_fishingpole_01.jpg",
          "itemLevel": 50,
          "permanentEnchantID": null,
          "temporaryEnchantID": 266
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27885,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 96.2751742423067,
          "total": 10645,
          "bestAmount": 1124.1287086289,
          "medianPerformance": 91.82318984172343,
          "averagePerformance": 90.9938122791983,
          "totalKills": 4,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 97.94501423637962,
          "total": 14308,
          "bestAmount": 1251.7895175026,
          "medianPerformance": 96.67961743460239,
          "averagePerformance": 95.8125774179399,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.6342,
          "medianPerformance": 98.9241,
          "totalKills": 4,
          "fastestKill": 96778,
          "bestAmount": 1166.2712138971,
          "highestDps": 1166.2712138971,
          "spec": "Holy",
          "allStars": {
            "points": 112.24,
            "rank": 232,
            "rankPercent": 98.91094243552874,
            "total": 21211
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 90.7685,
          "medianPerformance": 88.4678,
          "totalKills": 4,
          "fastestKill": 170511,
          "bestAmount": 1116.0277049575,
          "highestDps": 1116.0277049575,
          "spec": "Holy",
          "allStars": {
            "points": 90.96,
            "rank": 3754,
            "rankPercent": 82.7392724095111,
            "total": 21743
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.4171,
          "medianPerformance": 93.1391,
          "totalKills": 4,
          "fastestKill": 157335,
          "bestAmount": 1512.6767724918,
          "highestDps": 1512.6767724918,
          "spec": "Holy",
          "allStars": {
            "points": 104.13,
            "rank": 1146,
            "rankPercent": 94.72787549498112,
            "total": 21718
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.781,
          "medianPerformance": 89.5221,
          "totalKills": 4,
          "fastestKill": 123192,
          "bestAmount": 1629.6135090477,
          "highestDps": 1629.6135090477,
          "spec": "Holy",
          "allStars": {
            "points": 108.08,
            "rank": 1006,
            "rankPercent": 95.2845681039741,
            "total": 21313
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 93.4994,
          "medianPerformance": 93.4994,
          "totalKills": 4,
          "fastestKill": 183905,
          "bestAmount": 800.75965635013,
          "highestDps": 800.75965635013,
          "spec": "Discipline",
          "allStars": {
            "points": 97.41,
            "rank": 777,
            "rankPercent": 85.92162554426706,
            "total": 5512
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.5415,
          "medianPerformance": 94.4297,
          "totalKills": 4,
          "fastestKill": 422887,
          "bestAmount": 976.21318183355,
          "highestDps": 976.21318183355,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 900,
            "rankPercent": 95.31843982711035,
            "total": 19203
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 94.0014,
          "medianPerformance": 91.2852,
          "totalKills": 4,
          "fastestKill": 269322,
          "bestAmount": 767.45054911945,
          "highestDps": 767.45054911945,
          "spec": "Holy",
          "allStars": {
            "points": 99.72,
            "rank": 2094,
            "rankPercent": 89.92926911417986,
            "total": 20783
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.3976,
          "medianPerformance": 93.998,
          "totalKills": 4,
          "fastestKill": 150650,
          "bestAmount": 2972.7160963798,
          "highestDps": 2972.7160963798,
          "spec": "Holy",
          "allStars": {
            "points": 109.21,
            "rank": 1308,
            "rankPercent": 93.93784786641929,
            "total": 21560
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.7896,
          "medianPerformance": 97.399,
          "totalKills": 4,
          "fastestKill": 110703,
          "bestAmount": 1323.2699200441,
          "highestDps": 1323.2699200441,
          "spec": "Holy",
          "allStars": {
            "points": 110.73,
            "rank": 243,
            "rankPercent": 98.8412181574411,
            "total": 20884
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.0104,
          "medianPerformance": 97.8741,
          "totalKills": 4,
          "fastestKill": 426009,
          "bestAmount": 1009.1265677486,
          "highestDps": 1009.1265677486,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 264,
            "rankPercent": 98.63092139510671,
            "total": 19210
          }
        }
      ],
      "bestPerformanceAverage": 96.28609999999999,
      "medianPerformanceAverage": 93.2793375,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "sayfer": {
      "characterName": "Sayfer",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109878589,
      "gear": [
        {
          "id": 29061,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_77.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 29374,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_31.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32078,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_33.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 5107,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_12.jpg",
          "itemLevel": 14,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28230,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_39.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3150,
          "temporaryEnchantID": null
        },
        {
          "id": 28655,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30543,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_20.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 28663,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_fabric_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 29183,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 29065,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29168,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 29373,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_53naxxramas.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 28190,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29375,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2664,
          "temporaryEnchantID": null
        },
        {
          "id": 29175,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_04.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2677
        },
        {
          "id": 28525,
          "slot": 17,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28592,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_libramofgrace.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24004,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 20,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 31.606801547388134,
          "total": 13487,
          "bestAmount": 456.66617535808,
          "medianPerformance": 31.606801547388134,
          "averagePerformance": 31.606801547388134,
          "totalKills": 1,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 34.43829379112982,
          "total": 13692,
          "bestAmount": 441.74049105215,
          "medianPerformance": 27.209953070122424,
          "averagePerformance": 27.209953070122424,
          "totalKills": 2,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 92487,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 60,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 1,
          "fastestKill": 170603,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 40,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 20,
          "medianPerformance": 20,
          "totalKills": 1,
          "fastestKill": 251714,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 20,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 138507,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 60,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 50,
          "medianPerformance": 50,
          "totalKills": 1,
          "fastestKill": 176086,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": 50,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 1,
          "fastestKill": 398721,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Holy",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 42.4205,
          "medianPerformance": 42.4205,
          "totalKills": 2,
          "fastestKill": 247416,
          "bestAmount": 722.58818874621,
          "highestDps": 722.58818874621,
          "spec": "Retribution",
          "allStars": {
            "points": 50.01,
            "rank": 7310,
            "rankPercent": 32.96955245781365,
            "total": 10904
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 11.6344,
          "medianPerformance": 11.6344,
          "totalKills": 2,
          "fastestKill": 155471,
          "bestAmount": 838.693694969,
          "highestDps": 838.693694969,
          "spec": "Retribution",
          "allStars": {
            "points": 40.37,
            "rank": 10496,
            "rankPercent": 9.69712614007916,
            "total": 11622
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 22.9191,
          "medianPerformance": 22.9191,
          "totalKills": 2,
          "fastestKill": 102305,
          "bestAmount": 910.4034202277,
          "highestDps": 910.4034202277,
          "spec": "Retribution",
          "allStars": {
            "points": 28.37,
            "rank": 9303,
            "rankPercent": 18.310353912356195,
            "total": 11387
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 6.62944,
          "medianPerformance": 6.62944,
          "totalKills": 2,
          "fastestKill": 439330,
          "bestAmount": 410.24192860595,
          "highestDps": 410.24192860595,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 9662,
            "rankPercent": 4.780208949339642,
            "total": 10146
          }
        }
      ],
      "bestPerformanceAverage": 38.37175,
      "medianPerformanceAverage": 38.37175,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "serjioo": {
      "characterName": "Serjioo",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 101900347,
      "gear": [
        {
          "id": 28275,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 30017,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_30naxxramas.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27801,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30054,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate09.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30040,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_29.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27874,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 30060,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 29246,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 27474,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 29298,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28587,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_46.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": 2677
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30105,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_08.jpg",
          "itemLevel": 141,
          "permanentEnchantID": 2724,
          "temporaryEnchantID": null
        },
        {
          "id": 24004,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 20,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 51.48994703487668,
          "total": 7898,
          "bestAmount": 1020.7766530159,
          "medianPerformance": 51.48994703487668,
          "averagePerformance": 45.14321719487258,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 61.54137415953922,
          "total": 7898,
          "bestAmount": 523.27098475662,
          "medianPerformance": 47.144568751118534,
          "averagePerformance": 49.41499594584631,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 59.55923134446676,
          "total": 7944,
          "bestAmount": 941.17939749138,
          "medianPerformance": 39.76737699808391,
          "averagePerformance": 35.17821520847743,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 68.14712749285982,
          "total": 7944,
          "bestAmount": 534.51521063111,
          "medianPerformance": 45.07332509283928,
          "averagePerformance": 44.937301864290575,
          "totalKills": 5,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 85.5385,
          "medianPerformance": 80.6621,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 1533.3614453923,
          "highestDps": 1533.3614453923,
          "spec": "Survival",
          "allStars": {
            "points": 92.73,
            "rank": 1928,
            "rankPercent": 80.54714314556834,
            "total": 9906
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 73.0042,
          "medianPerformance": 63.5835,
          "totalKills": 5,
          "fastestKill": 170511,
          "bestAmount": 1105.0879249707,
          "highestDps": 1105.0879249707,
          "spec": "Survival",
          "allStars": {
            "points": 78.86,
            "rank": 2991,
            "rankPercent": 70.11494252873563,
            "total": 10005
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 77.782,
          "medianPerformance": 53.4668,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 1038.2464182788,
          "highestDps": 1038.2464182788,
          "spec": "Survival",
          "allStars": {
            "points": 66.17,
            "rank": 4318,
            "rankPercent": 56.424750176642775,
            "total": 9907
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 85.2135,
          "medianPerformance": 74.3464,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1667.5163559163,
          "highestDps": 1667.5163559163,
          "spec": "Survival",
          "allStars": {
            "points": 89.16,
            "rank": 2178,
            "rankPercent": 77.64887063655031,
            "total": 9740
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 75.2942,
          "medianPerformance": 33.4604,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 1430.5277899531,
          "highestDps": 1430.5277899531,
          "spec": "Survival",
          "allStars": {
            "points": 69.59,
            "rank": 4086,
            "rankPercent": 57.92563600782779,
            "total": 9709
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 67.6252,
          "medianPerformance": 18.0525,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 747.83571024884,
          "highestDps": 747.83571024884,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 4612,
            "rankPercent": 49.64508026646281,
            "total": 9157
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 83.3012,
          "medianPerformance": 54.3835,
          "totalKills": 5,
          "fastestKill": 247416,
          "bestAmount": 938.92048377913,
          "highestDps": 938.92048377913,
          "spec": "Survival",
          "allStars": {
            "points": 70.21,
            "rank": 3912,
            "rankPercent": 59.48829500725088,
            "total": 9654
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 88.5567,
          "medianPerformance": 55.6941,
          "totalKills": 5,
          "fastestKill": 150650,
          "bestAmount": 1234.6546944446,
          "highestDps": 1234.6546944446,
          "spec": "Survival",
          "allStars": {
            "points": 98.36,
            "rank": 1273,
            "rankPercent": 86.97788697788698,
            "total": 9768
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 81.6258,
          "medianPerformance": 50.5488,
          "totalKills": 5,
          "fastestKill": 102300,
          "bestAmount": 1408.4622819616,
          "highestDps": 1408.4622819616,
          "spec": "Survival",
          "allStars": {
            "points": 73.35,
            "rank": 3418,
            "rankPercent": 64.43958788635653,
            "total": 9609
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 51.8994,
          "medianPerformance": 34.7288,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 829.83861789543,
          "highestDps": 829.83861789543,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 4893,
            "rankPercent": 45.7288662081207,
            "total": 9014
          }
        }
      ],
      "bestPerformanceAverage": 81.2895125,
      "medianPerformanceAverage": 58.26819999999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "serjo": {
      "characterName": "Serjo",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109077208,
      "gear": [
        {
          "id": 24266,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_27.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24116,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_28.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30079,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29091,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_11.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28654,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2656,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 31149,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_15.jpg",
          "itemLevel": 91,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29286,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30841,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_book_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28040,
          "slot": 14,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28570,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28633,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_halberd17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2678
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23197,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_idolofrejuvenation.jpg",
          "itemLevel": 65,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 18.031106323561595,
          "total": 7949,
          "bestAmount": 628.2869466105,
          "medianPerformance": 1.457721118944513,
          "averagePerformance": 6.982072758494405,
          "totalKills": 3,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 35.564741374232,
          "total": 7949,
          "bestAmount": 342.93386104477,
          "medianPerformance": 8.431923773296274,
          "averagePerformance": 14.948458830949532,
          "totalKills": 3,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 20.391598485889293,
          "total": 8094,
          "bestAmount": 645.75571816603,
          "medianPerformance": 20.391598485889293,
          "averagePerformance": 20.391598485889293,
          "totalKills": 1,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 42.79815344489733,
          "total": 8094,
          "bestAmount": 394.18561081033,
          "medianPerformance": 42.79815344489733,
          "averagePerformance": 42.79815344489733,
          "totalKills": 1,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 86.4025,
          "medianPerformance": 54.8676,
          "totalKills": 2,
          "fastestKill": 101451,
          "bestAmount": 1354.1019802663,
          "highestDps": 1354.1019802663,
          "spec": "Balance",
          "allStars": {
            "points": 96.35,
            "rank": 1644,
            "rankPercent": 84.73190223956881,
            "total": 10761
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 32.794,
          "medianPerformance": 32.6998,
          "totalKills": 2,
          "fastestKill": 155841,
          "bestAmount": 665.43464171816,
          "highestDps": 665.43464171816,
          "spec": "Balance",
          "allStars": {
            "points": 37.8,
            "rank": 7564,
            "rankPercent": 30.15975621017638,
            "total": 10829
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 45.8716,
          "medianPerformance": 34.4403,
          "totalKills": 2,
          "fastestKill": 145698,
          "bestAmount": 681.25925813961,
          "highestDps": 681.25925813961,
          "spec": "Balance",
          "allStars": {
            "points": 44.41,
            "rank": 7771,
            "rankPercent": 26.84993409903973,
            "total": 10622
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 20.9313,
          "medianPerformance": 12.0361,
          "totalKills": 2,
          "fastestKill": 116887,
          "bestAmount": 731.74946743436,
          "highestDps": 731.74946743436,
          "spec": "Balance",
          "allStars": {
            "points": 33.96,
            "rank": 8286,
            "rankPercent": 19.186500195083887,
            "total": 10252
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 21.6507,
          "medianPerformance": 11.044,
          "totalKills": 2,
          "fastestKill": 173996,
          "bestAmount": 810.20253339157,
          "highestDps": 810.20253339157,
          "spec": "Balance",
          "allStars": {
            "points": 47.75,
            "rank": 8278,
            "rankPercent": 20.07531865585168,
            "total": 10356
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 4.77429,
          "medianPerformance": 4.70409,
          "totalKills": 2,
          "fastestKill": 501058,
          "bestAmount": 378.95612883139,
          "highestDps": 378.95612883139,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 9143,
            "rankPercent": 3.8696109358569926,
            "total": 9510
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 25.5468,
          "medianPerformance": 25.5468,
          "totalKills": 1,
          "fastestKill": 262590,
          "bestAmount": 629.56700559808,
          "highestDps": 629.56700559808,
          "spec": "Balance",
          "allStars": {
            "points": 48.97,
            "rank": 7976,
            "rankPercent": 23.191755754598862,
            "total": 10383
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 60.341,
          "medianPerformance": 60.341,
          "totalKills": 1,
          "fastestKill": 143538,
          "bestAmount": 1047.2000445875,
          "highestDps": 1047.2000445875,
          "spec": "Balance",
          "allStars": {
            "points": 69.23,
            "rank": 4387,
            "rankPercent": 57.367807153965785,
            "total": 10288
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 37.5596,
          "medianPerformance": 37.5596,
          "totalKills": 1,
          "fastestKill": 103400,
          "bestAmount": 857.96905222437,
          "highestDps": 857.96905222437,
          "spec": "Balance",
          "allStars": {
            "points": 43.14,
            "rank": 6913,
            "rankPercent": 34.74936278674596,
            "total": 10593
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 7.88403,
          "medianPerformance": 7.88403,
          "totalKills": 1,
          "fastestKill": 433670,
          "bestAmount": 472.12396522702,
          "highestDps": 472.12396522702,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 8880,
            "rankPercent": 6.201140925417283,
            "total": 9466
          }
        }
      ],
      "bestPerformanceAverage": 41.387187499999996,
      "medianPerformanceAverage": 33.566900000000004,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "serjoo": {
      "characterName": "Serjoo",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 93624562,
      "gear": [
        {
          "id": 28796,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_58.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 24114,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_07.jpg",
          "itemLevel": 102,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 33173,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28601,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 31151,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_23.jpg",
          "itemLevel": 94,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25687,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_03.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 31284,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 28824,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_31.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 31203,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_57.jpg",
          "itemLevel": 103,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24087,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_64.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 833,
          "slot": 13,
          "quality": 4,
          "icon": "inv_ore_truesilver_01.jpg",
          "itemLevel": 56,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28041,
          "slot": 14,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31143,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 91,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 31305,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_shortblade_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31305,
          "slot": 17,
          "quality": 3,
          "icon": "inv_weapon_shortblade_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25250,
          "slot": 18,
          "quality": 2,
          "icon": "inv_weapon_bow_15.jpg",
          "itemLevel": 111,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "serlo": {
      "characterName": "Serlo",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 110142450,
      "gear": [
        {
          "id": 30120,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_92.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 28745,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30122,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_56.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30118,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate21.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 27985,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30121,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28608,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2939,
          "temporaryEnchantID": null
        },
        {
          "id": 32818,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 28824,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_31.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 29298,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28730,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 14,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28430,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_2h_blacksmithing_03.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2639
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 5976,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 64.1987351842459,
          "total": 7572,
          "bestAmount": 1015.0691993165,
          "medianPerformance": 48.109670624019046,
          "averagePerformance": 48.109670624019046,
          "totalKills": 2,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 71.12289042413676,
          "total": 7572,
          "bestAmount": 590.06193646008,
          "medianPerformance": 54.57948954569598,
          "averagePerformance": 54.57948954569598,
          "totalKills": 2,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 52.23196594372814,
          "total": 7547,
          "bestAmount": 884.16618781157,
          "medianPerformance": 42.72517490120947,
          "averagePerformance": 42.72517490120947,
          "totalKills": 2,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 72.04240331396443,
          "total": 7547,
          "bestAmount": 577.5535132105,
          "medianPerformance": 63.731307084076164,
          "averagePerformance": 63.731307084076164,
          "totalKills": 2,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 73.6312,
          "medianPerformance": 69.0431,
          "totalKills": 2,
          "fastestKill": 96778,
          "bestAmount": 1312.4365457216,
          "highestDps": 1312.4365457216,
          "spec": "Arms",
          "allStars": {
            "points": 81.01,
            "rank": 2844,
            "rankPercent": 71.10772357723577,
            "total": 9840
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 68.2492,
          "medianPerformance": 66.9334,
          "totalKills": 2,
          "fastestKill": 155841,
          "bestAmount": 1071.951540352,
          "highestDps": 1071.951540352,
          "spec": "Arms",
          "allStars": {
            "points": 74.04,
            "rank": 3474,
            "rankPercent": 65.356608478803,
            "total": 10025
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 78.123,
          "medianPerformance": 70.322,
          "totalKills": 2,
          "fastestKill": 145698,
          "bestAmount": 1184.0107619871,
          "highestDps": 1184.0107619871,
          "spec": "Arms",
          "allStars": {
            "points": 85.98,
            "rank": 2520,
            "rankPercent": 75.15534076338889,
            "total": 10139
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 77.6165,
          "medianPerformance": 69.9362,
          "totalKills": 2,
          "fastestKill": 116887,
          "bestAmount": 1864.4554841223,
          "highestDps": 1864.4554841223,
          "spec": "Arms",
          "allStars": {
            "points": 79.19,
            "rank": 2408,
            "rankPercent": 72.31423970554405,
            "total": 8694
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 49.233,
          "medianPerformance": 46.1557,
          "totalKills": 2,
          "fastestKill": 173996,
          "bestAmount": 1139.8250534495,
          "highestDps": 1139.8250534495,
          "spec": "Arms",
          "allStars": {
            "points": 62.22,
            "rank": 5328,
            "rankPercent": 46.16472966144517,
            "total": 9895
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 57.386,
          "medianPerformance": 29.1258,
          "totalKills": 2,
          "fastestKill": 458038,
          "bestAmount": 693.91966598677,
          "highestDps": 693.91966598677,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 4065,
            "rankPercent": 55.350472423643154,
            "total": 9102
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 56.469,
          "medianPerformance": 49.8499,
          "totalKills": 2,
          "fastestKill": 262590,
          "bestAmount": 782.01378574965,
          "highestDps": 782.01378574965,
          "spec": "Arms",
          "allStars": {
            "points": 65.04,
            "rank": 4334,
            "rankPercent": 52.963525835866264,
            "total": 9212
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 57.6337,
          "medianPerformance": 57.1744,
          "totalKills": 2,
          "fastestKill": 143538,
          "bestAmount": 1292.9328818849,
          "highestDps": 1292.9328818849,
          "spec": "Arms",
          "allStars": {
            "points": 66.32,
            "rank": 4387,
            "rankPercent": 53.967254408060455,
            "total": 9528
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 75.7445,
          "medianPerformance": 53.6952,
          "totalKills": 2,
          "fastestKill": 103400,
          "bestAmount": 1429.3036750484,
          "highestDps": 1429.3036750484,
          "spec": "Arms",
          "allStars": {
            "points": 81.11,
            "rank": 2658,
            "rankPercent": 73.16432683567317,
            "total": 9901
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 31.5323,
          "medianPerformance": 24.954,
          "totalKills": 2,
          "fastestKill": 426009,
          "bestAmount": 680.79645813637,
          "highestDps": 680.79645813637,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 6172,
            "rankPercent": 28.839944649446494,
            "total": 8672
          }
        }
      ],
      "bestPerformanceAverage": 67.0875125,
      "medianPerformanceAverage": 60.3887375,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "skifon": {
      "characterName": "Skifon",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 108566413,
      "gear": [
        {
          "id": 30206,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_86.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 28134,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_27.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30079,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2995,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30196,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_61.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 21846,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_04.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30207,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_22.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28585,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_09.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 929,
          "temporaryEnchantID": null
        },
        {
          "id": 28477,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 30205,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_49.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 29286,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 30626,
          "slot": 13,
          "quality": 4,
          "icon": "inv_gizmo_09.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27981,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 903,
          "temporaryEnchantID": null
        },
        {
          "id": 28802,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_65.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2666,
          "temporaryEnchantID": 2628
        },
        {
          "id": 28603,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_outlandraid_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25808,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 74.63534485152978,
          "total": 25288,
          "bestAmount": 1317.960356633,
          "medianPerformance": 60.09038731660474,
          "averagePerformance": 61.7097399162548,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 86.09815893437633,
          "total": 25288,
          "bestAmount": 804.98695777368,
          "medianPerformance": 64.75963077300736,
          "averagePerformance": 65.10766178027141,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 72.77444407539284,
          "total": 26115,
          "bestAmount": 1299.8318529466,
          "medianPerformance": 55.76950578217287,
          "averagePerformance": 57.889623432656194,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 89.65123284454485,
          "total": 26115,
          "bestAmount": 806.17906088188,
          "medianPerformance": 58.66900646507432,
          "averagePerformance": 62.49864347955056,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 88.896,
          "medianPerformance": 69.0458,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 1614.5431329388,
          "highestDps": 1614.5431329388,
          "spec": "Arcane",
          "allStars": {
            "points": 78.86,
            "rank": 10090,
            "rankPercent": 70.02317565961492,
            "total": 33656
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 83.0106,
          "medianPerformance": 71.5268,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1413.222451088,
          "highestDps": 1413.222451088,
          "spec": "Arcane",
          "allStars": {
            "points": 81.52,
            "rank": 8908,
            "rankPercent": 73.95233221231175,
            "total": 34195
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 84.6527,
          "medianPerformance": 80.6457,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1530.288679323,
          "highestDps": 1530.288679323,
          "spec": "Arcane",
          "allStars": {
            "points": 93.88,
            "rank": 5639,
            "rankPercent": 83.29728929047549,
            "total": 33755
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 83.6764,
          "medianPerformance": 60.8406,
          "totalKills": 5,
          "fastestKill": 116887,
          "bestAmount": 1789.3007776742,
          "highestDps": 1789.3007776742,
          "spec": "Arcane",
          "allStars": {
            "points": 89.99,
            "rank": 6043,
            "rankPercent": 81.81051871029895,
            "total": 33217
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 88.0158,
          "medianPerformance": 60.6988,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 1572.5304029978,
          "highestDps": 1572.5304029978,
          "spec": "Arcane",
          "allStars": {
            "points": 82.79,
            "rank": 9280,
            "rankPercent": 71.8023520831434,
            "total": 32907
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 79.898,
          "medianPerformance": 72.5287,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 1004.6681222533,
          "highestDps": 1004.6681222533,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 8698,
            "rankPercent": 71.41401525111753,
            "total": 30424
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 80.5315,
          "medianPerformance": 72.5364,
          "totalKills": 4,
          "fastestKill": 255889,
          "bestAmount": 1352.9037663277,
          "highestDps": 1352.9037663277,
          "spec": "Arcane",
          "allStars": {
            "points": 89.83,
            "rank": 7532,
            "rankPercent": 77.58630952380952,
            "total": 33600
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 79.7525,
          "medianPerformance": 69.7078,
          "totalKills": 4,
          "fastestKill": 143538,
          "bestAmount": 1740.7933787568,
          "highestDps": 1740.7933787568,
          "spec": "Arcane",
          "allStars": {
            "points": 88.84,
            "rank": 7612,
            "rankPercent": 76.98796637842413,
            "total": 33074
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 85.8217,
          "medianPerformance": 65.9083,
          "totalKills": 4,
          "fastestKill": 103400,
          "bestAmount": 1813.413926499,
          "highestDps": 1813.413926499,
          "spec": "Arcane",
          "allStars": {
            "points": 92.54,
            "rank": 5354,
            "rankPercent": 83.8185060911097,
            "total": 33081
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 59.2333,
          "medianPerformance": 51.9513,
          "totalKills": 4,
          "fastestKill": 433670,
          "bestAmount": 999.36357137916,
          "highestDps": 999.36357137916,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 16259,
            "rankPercent": 47.087157456225995,
            "total": 30726
          }
        }
      ],
      "bestPerformanceAverage": 84.29464999999999,
      "medianPerformanceAverage": 68.863775,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "strikex": {
      "characterName": "Strikex",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 91410246,
      "gear": [
        {
          "id": 28224,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27797,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 2105,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_14.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29045,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate02.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29247,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27837,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_mail_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 29246,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 27531,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 27925,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28288,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_enggizmos_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28729,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_74.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28189,
          "slot": 17,
          "quality": 3,
          "icon": "inv_sword_76.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2643
        },
        {
          "id": 29152,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_08.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "swotchw": {
      "characterName": "Swotchw",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105982009,
      "gear": [
        {
          "id": 32494,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 30015,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_14.jpg",
          "itemLevel": 138,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28967,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2982,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30056,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_43.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30038,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30213,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_24.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 30037,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 32820,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 28793,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29172,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 14,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28797,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2672,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29982,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_15.jpg",
          "itemLevel": 134,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 97.04605218723083,
          "total": 26478,
          "bestAmount": 1471.0273366171,
          "medianPerformance": 90.35599251898404,
          "averagePerformance": 87.10922791833065,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 88.45236791686779,
          "total": 26478,
          "bestAmount": 778.10500968286,
          "medianPerformance": 83.00207911766721,
          "averagePerformance": 79.69548713126473,
          "totalKills": 6,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 96.20054126255049,
          "total": 18270,
          "bestAmount": 1397.080804503,
          "medianPerformance": 88.19017373799534,
          "averagePerformance": 88.83212931407175,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 90.6832554273181,
          "total": 26851,
          "bestAmount": 820.23603345774,
          "medianPerformance": 89.67840562457614,
          "averagePerformance": 82.7224000283084,
          "totalKills": 4,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.7129,
          "medianPerformance": 96.7478,
          "totalKills": 5,
          "fastestKill": 96778,
          "bestAmount": 2100.6397176962,
          "highestDps": 2100.6397176962,
          "spec": "Destruction",
          "allStars": {
            "points": 110.17,
            "rank": 1251,
            "rankPercent": 96.28760654569214,
            "total": 33671
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 93.9869,
          "medianPerformance": 79.5383,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1505.3419831752,
          "highestDps": 1505.3419831752,
          "spec": "Destruction",
          "allStars": {
            "points": 102.64,
            "rank": 2523,
            "rankPercent": 92.61103949373022,
            "total": 34132
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.5992,
          "medianPerformance": 97.0102,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1625.3253962778,
          "highestDps": 1625.3253962778,
          "spec": "Destruction",
          "allStars": {
            "points": 108.45,
            "rank": 1643,
            "rankPercent": 95.03041675494083,
            "total": 33041
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.2836,
          "medianPerformance": 93.6541,
          "totalKills": 5,
          "fastestKill": 115131,
          "bestAmount": 1986.4805166574,
          "highestDps": 1986.4805166574,
          "spec": "Destruction",
          "allStars": {
            "points": 107.94,
            "rank": 1488,
            "rankPercent": 95.53372980116538,
            "total": 33294
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.7214,
          "medianPerformance": 91.1563,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 2111.5657831215,
          "highestDps": 2111.5657831215,
          "spec": "Destruction",
          "allStars": {
            "points": 114.31,
            "rank": 543,
            "rankPercent": 98.36372418790002,
            "total": 33124
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 95.5806,
          "medianPerformance": 81.5382,
          "totalKills": 5,
          "fastestKill": 402466,
          "bestAmount": 1053.1939144071,
          "highestDps": 1053.1939144071,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 3657,
            "rankPercent": 88.14334360304848,
            "total": 30835
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 94.4953,
          "medianPerformance": 90.7439,
          "totalKills": 4,
          "fastestKill": 262590,
          "bestAmount": 1540.9116874215,
          "highestDps": 1540.9116874215,
          "spec": "Destruction",
          "allStars": {
            "points": 107.7,
            "rank": 2289,
            "rankPercent": 93.02885347795619,
            "total": 32821
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.3431,
          "medianPerformance": 95.9462,
          "totalKills": 4,
          "fastestKill": 143538,
          "bestAmount": 2008.2094371908,
          "highestDps": 2008.2094371908,
          "spec": "Destruction",
          "allStars": {
            "points": 110.91,
            "rank": 1549,
            "rankPercent": 95.2915411990145,
            "total": 32877
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.1913,
          "medianPerformance": 94.8521,
          "totalKills": 4,
          "fastestKill": 103400,
          "bestAmount": 1818.5976789168,
          "highestDps": 1818.5976789168,
          "spec": "Destruction",
          "allStars": {
            "points": 106.22,
            "rank": 1538,
            "rankPercent": 95.3227229846931,
            "total": 32861
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 85.1003,
          "medianPerformance": 72.288,
          "totalKills": 4,
          "fastestKill": 426009,
          "bestAmount": 1151.6118204076,
          "highestDps": 1151.6118204076,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 5739,
            "rankPercent": 81.25938990136521,
            "total": 30618
          }
        }
      ],
      "bestPerformanceAverage": 97.1667125,
      "medianPerformanceAverage": 92.45611249999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "swotchww": {
      "characterName": "Swotchww",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104995183,
      "gear": [
        {
          "id": 30120,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_92.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 28745,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29023,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_54.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29019,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate20.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 30032,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30121,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28608,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2939,
          "temporaryEnchantID": null
        },
        {
          "id": 28381,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 28776,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 28649,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29283,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28729,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_74.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": null
        },
        {
          "id": 28307,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_71.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2713
        },
        {
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 94.7181602539246,
          "total": 6378,
          "bestAmount": 1247.7321249543,
          "medianPerformance": 77.56510708373129,
          "averagePerformance": 78.35378684563617,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 79.54373378854754,
          "total": 7747,
          "bestAmount": 641.72057149659,
          "medianPerformance": 80.67599855675404,
          "averagePerformance": 71.73039321719693,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 82.69839551891492,
          "total": 3182,
          "bestAmount": 1004.3288838829,
          "medianPerformance": 74.86867110132158,
          "averagePerformance": 75.54734276589474,
          "totalKills": 4,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 70.79174946461504,
          "total": 7739,
          "bestAmount": 576.29920122345,
          "medianPerformance": 72.04010115237415,
          "averagePerformance": 68.82360062351921,
          "totalKills": 4,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.6469,
          "medianPerformance": 86.5419,
          "totalKills": 4,
          "fastestKill": 92487,
          "bestAmount": 1679.5945441731,
          "highestDps": 1679.5945441731,
          "spec": "Arms",
          "allStars": {
            "points": 105.38,
            "rank": 687,
            "rankPercent": 93.02845528455285,
            "total": 9840
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 94.4698,
          "medianPerformance": 86.5767,
          "totalKills": 4,
          "fastestKill": 161614,
          "bestAmount": 1312.6152437289,
          "highestDps": 1312.6152437289,
          "spec": "Arms",
          "allStars": {
            "points": 101.25,
            "rank": 904,
            "rankPercent": 90.9925187032419,
            "total": 10025
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.4448,
          "medianPerformance": 83.6448,
          "totalKills": 4,
          "fastestKill": 157335,
          "bestAmount": 1583.2499743164,
          "highestDps": 1583.2499743164,
          "spec": "Arms",
          "allStars": {
            "points": 109.78,
            "rank": 445,
            "rankPercent": 95.62086990827498,
            "total": 10139
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 84.4644,
          "medianPerformance": 81.0134,
          "totalKills": 4,
          "fastestKill": 124065,
          "bestAmount": 2081.1007928828,
          "highestDps": 2081.1007928828,
          "spec": "Arms",
          "allStars": {
            "points": 91.19,
            "rank": 1419,
            "rankPercent": 83.68990108120543,
            "total": 8694
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 89.674,
          "medianPerformance": 82.7682,
          "totalKills": 4,
          "fastestKill": 176054,
          "bestAmount": 1528.2242948186,
          "highestDps": 1528.2242948186,
          "spec": "Arms",
          "allStars": {
            "points": 102.73,
            "rank": 1118,
            "rankPercent": 88.71147043961597,
            "total": 9895
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 52.2151,
          "medianPerformance": 38.3391,
          "totalKills": 4,
          "fastestKill": 395742,
          "bestAmount": 664.59713651824,
          "highestDps": 664.59713651824,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 4792,
            "rankPercent": 47.363216875412,
            "total": 9102
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 89.1527,
          "medianPerformance": 80.5769,
          "totalKills": 4,
          "fastestKill": 247416,
          "bestAmount": 991.20712496434,
          "highestDps": 991.20712496434,
          "spec": "Arms",
          "allStars": {
            "points": 97.5,
            "rank": 1514,
            "rankPercent": 83.57577073382545,
            "total": 9212
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 90.7631,
          "medianPerformance": 86.7418,
          "totalKills": 4,
          "fastestKill": 150650,
          "bestAmount": 1583.2084440185,
          "highestDps": 1583.2084440185,
          "spec": "Arms",
          "allStars": {
            "points": 103.16,
            "rank": 1001,
            "rankPercent": 89.50461796809404,
            "total": 9528
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 86.3098,
          "medianPerformance": 82.692,
          "totalKills": 4,
          "fastestKill": 102300,
          "bestAmount": 1514.677443133,
          "highestDps": 1514.677443133,
          "spec": "Arms",
          "allStars": {
            "points": 88.45,
            "rank": 1968,
            "rankPercent": 80.13331986668014,
            "total": 9901
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 81.1543,
          "medianPerformance": 46.7906,
          "totalKills": 4,
          "fastestKill": 437171,
          "bestAmount": 902.25143018382,
          "highestDps": 902.25143018382,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 2659,
            "rankPercent": 69.34963099630997,
            "total": 8672
          }
        }
      ],
      "bestPerformanceAverage": 90.9906875,
      "medianPerformanceAverage": 83.8194625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "sypukha": {
      "characterName": "Sypukha",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106532287,
      "gear": [
        {
          "id": 29093,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_81.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28762,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29095,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2994,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29091,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_11.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28654,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28594,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 28585,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_09.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 28507,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2935,
          "temporaryEnchantID": null
        },
        {
          "id": 30366,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_09.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29286,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29132,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_bloodstone_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28797,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2628
        },
        {
          "id": 28603,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_outlandraid_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27518,
          "slot": 18,
          "quality": 3,
          "icon": "spell_arcane_arcane03.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 75.75792418750827,
          "total": 3149,
          "bestAmount": 870.30589495338,
          "medianPerformance": 40.86166630759465,
          "averagePerformance": 46.99263472719759,
          "totalKills": 4,
          "fastestKill": 5013943,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 84.56267314393385,
          "total": 3149,
          "bestAmount": 417.03385937973,
          "medianPerformance": 59.03196603933631,
          "averagePerformance": 61.056827672458596,
          "totalKills": 4,
          "fastestKill": 5013943,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 83.77319255445754,
          "total": 2917,
          "bestAmount": 878.90529707773,
          "medianPerformance": 60.69830312113404,
          "averagePerformance": 60.69830312113404,
          "totalKills": 2,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 67.44964233901214,
          "total": 7053,
          "bestAmount": 448.73621632525,
          "medianPerformance": 72.0284854874455,
          "averagePerformance": 72.0284854874455,
          "totalKills": 2,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 83.956,
          "medianPerformance": 82.859,
          "totalKills": 3,
          "fastestKill": 96778,
          "bestAmount": 1267.3954824444,
          "highestDps": 1267.3954824444,
          "spec": "Balance",
          "allStars": {
            "points": 89.12,
            "rank": 2349,
            "rankPercent": 78.18046649939596,
            "total": 10761
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 75.7121,
          "medianPerformance": 45.3394,
          "totalKills": 3,
          "fastestKill": 175669,
          "bestAmount": 804.86350031422,
          "highestDps": 804.86350031422,
          "spec": "Balance",
          "allStars": {
            "points": 59.41,
            "rank": 5264,
            "rankPercent": 51.399021146920305,
            "total": 10829
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 72.8161,
          "medianPerformance": 50.7483,
          "totalKills": 3,
          "fastestKill": 159421,
          "bestAmount": 851.77325954757,
          "highestDps": 851.77325954757,
          "spec": "Balance",
          "allStars": {
            "points": 63.61,
            "rank": 4890,
            "rankPercent": 53.972886462059876,
            "total": 10622
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 61.0482,
          "medianPerformance": 55.5835,
          "totalKills": 3,
          "fastestKill": 123192,
          "bestAmount": 970.46074420417,
          "highestDps": 970.46074420417,
          "spec": "Balance",
          "allStars": {
            "points": 57.82,
            "rank": 5139,
            "rankPercent": 49.88294966835739,
            "total": 10252
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 83.1477,
          "medianPerformance": 75.7626,
          "totalKills": 3,
          "fastestKill": 183905,
          "bestAmount": 1209.8529131889,
          "highestDps": 1209.8529131889,
          "spec": "Balance",
          "allStars": {
            "points": 82.84,
            "rank": 3037,
            "rankPercent": 70.68366164542294,
            "total": 10356
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 76.0703,
          "medianPerformance": 65.6951,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 659.51296391641,
          "highestDps": 659.51296391641,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 3988,
            "rankPercent": 58.07570977917981,
            "total": 9510
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 89.6077,
          "medianPerformance": 67.6773,
          "totalKills": 2,
          "fastestKill": 269322,
          "bestAmount": 921.34386324964,
          "highestDps": 921.34386324964,
          "spec": "Balance",
          "allStars": {
            "points": 82.51,
            "rank": 3085,
            "rankPercent": 70.29760184917654,
            "total": 10383
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 50.5819,
          "medianPerformance": 47.3687,
          "totalKills": 2,
          "fastestKill": 159803,
          "bestAmount": 972.05934807231,
          "highestDps": 972.05934807231,
          "spec": "Balance",
          "allStars": {
            "points": 63.65,
            "rank": 5672,
            "rankPercent": 44.87752721617419,
            "total": 10288
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 92.5311,
          "medianPerformance": 66.4148,
          "totalKills": 2,
          "fastestKill": 111349,
          "bestAmount": 1166.8717276311,
          "highestDps": 1166.8717276311,
          "spec": "Balance",
          "allStars": {
            "points": 90.41,
            "rank": 2072,
            "rankPercent": 80.44935334654961,
            "total": 10593
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 85.9519,
          "medianPerformance": 54.7776,
          "totalKills": 2,
          "fastestKill": 426009,
          "bestAmount": 788.69975995173,
          "highestDps": 788.69975995173,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 2442,
            "rankPercent": 74.21297274455948,
            "total": 9466
          }
        }
      ],
      "bestPerformanceAverage": 76.1751,
      "medianPerformanceAverage": 61.4692,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "taurhorn": {
      "characterName": "Taurhorn",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 110302941,
      "gear": [
        {
          "id": 28182,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3009,
          "temporaryEnchantID": null
        },
        {
          "id": 28516,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27776,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 5107,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_12.jpg",
          "itemLevel": 14,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25689,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_leather_06.jpg",
          "itemLevel": 114,
          "permanentEnchantID": 2984,
          "temporaryEnchantID": null
        },
        {
          "id": 32802,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_17.jpg",
          "itemLevel": 136,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3011,
          "temporaryEnchantID": null
        },
        {
          "id": 32790,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_08.jpg",
          "itemLevel": 136,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 32814,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 856,
          "temporaryEnchantID": null
        },
        {
          "id": 30341,
          "slot": 10,
          "quality": 2,
          "icon": "inv_gauntlets_23.jpg",
          "itemLevel": 114,
          "permanentEnchantID": 904,
          "temporaryEnchantID": null
        },
        {
          "id": 27925,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29321,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_38.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32658,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_armorkit_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28256,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 884,
          "temporaryEnchantID": null
        },
        {
          "id": 28325,
          "slot": 16,
          "quality": 3,
          "icon": "inv_staff_49.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 943,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28064,
          "slot": 18,
          "quality": 2,
          "icon": "spell_nature_spiritwolf.jpg",
          "itemLevel": 93,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31404,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": null,
          "total": null,
          "bestAmount": null,
          "medianPerformance": null,
          "averagePerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "tenten": {
      "characterName": "Tenten",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105988638,
      "gear": [
        {
          "id": 8345,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_04.jpg",
          "itemLevel": 45,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29100,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2983,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29096,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_11.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28750,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30257,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 28422,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_08.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 29246,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 1593,
          "temporaryEnchantID": null
        },
        {
          "id": 28506,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_28.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27925,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28579,
          "slot": 13,
          "quality": 4,
          "icon": "inv_poison_mindnumbing.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 30021,
          "slot": 16,
          "quality": 4,
          "icon": "inv_staff_50.jpg",
          "itemLevel": 134,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": 2955
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29390,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_idolofhealth.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 5976,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 66.7378997586739,
          "total": 2304,
          "bestAmount": 876.1140492564,
          "medianPerformance": 65.42115009502811,
          "averagePerformance": 64.46628546827878,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 73.71980152047463,
          "total": 3772,
          "bestAmount": 390.9653540138,
          "medianPerformance": 60.83517372272678,
          "averagePerformance": 60.32272469866478,
          "totalKills": 4,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 51.62532237211238,
          "total": 3540,
          "bestAmount": 590.33360375642,
          "medianPerformance": 46.28533517510467,
          "averagePerformance": 46.28533517510467,
          "totalKills": 2,
          "fastestKill": 3731081,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 47.45367576136194,
          "total": 10895,
          "bestAmount": 310.74664474723,
          "medianPerformance": 44.67744144270972,
          "averagePerformance": 44.67744144270972,
          "totalKills": 2,
          "fastestKill": 3731239,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 89.7826,
          "medianPerformance": 85.0584,
          "totalKills": 3,
          "fastestKill": 92487,
          "bestAmount": 1549.4718176609,
          "highestDps": 1549.4718176609,
          "spec": "Feral",
          "allStars": {
            "points": 101.06,
            "rank": 1468,
            "rankPercent": 89.10832281535377,
            "total": 13469
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 79.6437,
          "medianPerformance": 77.3359,
          "totalKills": 3,
          "fastestKill": 170600,
          "bestAmount": 995.65650644783,
          "highestDps": 995.65650644783,
          "spec": "Feral",
          "allStars": {
            "points": 74.61,
            "rank": 5038,
            "rankPercent": 66.02131678359417,
            "total": 14824
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 67.2323,
          "medianPerformance": 43.8494,
          "totalKills": 3,
          "fastestKill": 179077,
          "bestAmount": 866.83382008857,
          "highestDps": 866.83382008857,
          "spec": "Feral",
          "allStars": {
            "points": 67.19,
            "rank": 5174,
            "rankPercent": 59.21311992430813,
            "total": 12683
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 38.6238,
          "medianPerformance": 38.6238,
          "totalKills": 3,
          "fastestKill": 138482,
          "bestAmount": 664.99600849513,
          "highestDps": 664.99600849513,
          "spec": "Feral",
          "allStars": {
            "points": 39.69,
            "rank": 7712,
            "rankPercent": 33.867924528301884,
            "total": 11660
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 92.5923,
          "medianPerformance": 62.8037,
          "totalKills": 3,
          "fastestKill": 176054,
          "bestAmount": 1833.8861940087,
          "highestDps": 1833.8861940087,
          "spec": "Feral",
          "allStars": {
            "points": 107.65,
            "rank": 901,
            "rankPercent": 92.65785609397945,
            "total": 12258
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 78.1171,
          "medianPerformance": 52.9574,
          "totalKills": 3,
          "fastestKill": 398721,
          "bestAmount": 755.65071117801,
          "highestDps": 755.65071117801,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 3126,
            "rankPercent": 73.33390221008618,
            "total": 11719
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 89.8428,
          "medianPerformance": 89.8428,
          "totalKills": 2,
          "fastestKill": 247416,
          "bestAmount": 542.78219678598,
          "highestDps": 542.78219678598,
          "spec": "Guardian",
          "allStars": {
            "points": 101.61,
            "rank": 1486,
            "rankPercent": 88.93442622950819,
            "total": 13420
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 70.2417,
          "medianPerformance": 70.2417,
          "totalKills": 2,
          "fastestKill": 155471,
          "bestAmount": 762.07003517561,
          "highestDps": 762.07003517561,
          "spec": "Guardian",
          "allStars": {
            "points": 72.47,
            "rank": 5405,
            "rankPercent": 59.00781309261928,
            "total": 13183
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 76.1619,
          "medianPerformance": 69.2623,
          "totalKills": 2,
          "fastestKill": 102300,
          "bestAmount": 1200.9627387763,
          "highestDps": 1200.9627387763,
          "spec": "Feral",
          "allStars": {
            "points": 74.66,
            "rank": 4632,
            "rankPercent": 66.71458348307338,
            "total": 13913
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 62.5752,
          "medianPerformance": 43.2705,
          "totalKills": 2,
          "fastestKill": 439330,
          "bestAmount": 547.88984309145,
          "highestDps": 547.88984309145,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 6455,
            "rankPercent": 54.97732821764911,
            "total": 14335
          }
        }
      ],
      "bestPerformanceAverage": 75.51513750000001,
      "medianPerformanceAverage": 67.12725,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "thundermate": {
      "characterName": "Thundermate",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104953221,
      "gear": [
        {
          "id": 30190,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_54.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30085,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_27.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30185,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate08.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28828,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30192,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28514,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 30189,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 30052,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28830,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_bone_03.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 32944,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_hand_12.jpg",
          "itemLevel": 134,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 29996,
          "slot": 17,
          "quality": 4,
          "icon": "inv_mace_48.jpg",
          "itemLevel": 141,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 27815,
          "slot": 18,
          "quality": 3,
          "icon": "spell_unused.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31404,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 99.23333159304639,
          "total": 15295,
          "bestAmount": 1426.6691437495,
          "medianPerformance": 99.23333159304639,
          "averagePerformance": 91.46181490461993,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 92.83596162192059,
          "total": 15295,
          "bestAmount": 726.9443832796,
          "medianPerformance": 85.3083748116697,
          "averagePerformance": 76.38540125161285,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 95.912272284121,
          "total": 15485,
          "bestAmount": 1177.8616274854,
          "medianPerformance": 97.04458814251184,
          "averagePerformance": 95.50391568076473,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 93.68036433989712,
          "total": 15485,
          "bestAmount": 712.30442415212,
          "medianPerformance": 78.67291300726198,
          "averagePerformance": 74.4939811263076,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.8414,
          "medianPerformance": 97.1798,
          "totalKills": 5,
          "fastestKill": 96484,
          "bestAmount": 2207.8375689233,
          "highestDps": 2207.8375689233,
          "spec": "Enhancement",
          "allStars": {
            "points": 116.6,
            "rank": 48,
            "rankPercent": 99.7578318219291,
            "total": 19408
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 99.28,
          "medianPerformance": 95.1143,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1443.97281723,
          "highestDps": 1443.97281723,
          "spec": "Enhancement",
          "allStars": {
            "points": 104.62,
            "rank": 1252,
            "rankPercent": 93.55287569573284,
            "total": 19404
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.5309,
          "medianPerformance": 91.0491,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1712.4737470658,
          "highestDps": 1712.4737470658,
          "spec": "Enhancement",
          "allStars": {
            "points": 114.52,
            "rank": 387,
            "rankPercent": 97.98370246552444,
            "total": 19144
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.4701,
          "medianPerformance": 96.5624,
          "totalKills": 5,
          "fastestKill": 116887,
          "bestAmount": 2184.7075012087,
          "highestDps": 2184.7075012087,
          "spec": "Enhancement",
          "allStars": {
            "points": 112.19,
            "rank": 254,
            "rankPercent": 98.65131403592942,
            "total": 18759
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.2431,
          "medianPerformance": 95.0455,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 1945.4182854778,
          "highestDps": 1945.4182854778,
          "spec": "Enhancement",
          "allStars": {
            "points": 114.33,
            "rank": 406,
            "rankPercent": 97.84666099532114,
            "total": 18808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.8303,
          "medianPerformance": 93.6168,
          "totalKills": 5,
          "fastestKill": 395742,
          "bestAmount": 966.99583680931,
          "highestDps": 966.99583680931,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 414,
            "rankPercent": 97.6432321387811,
            "total": 17524
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 98.0755,
          "medianPerformance": 95.6254,
          "totalKills": 5,
          "fastestKill": 255889,
          "bestAmount": 1112.9317790136,
          "highestDps": 1112.9317790136,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.43,
            "rank": 979,
            "rankPercent": 94.75771869639794,
            "total": 18656
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.2345,
          "medianPerformance": 95.1253,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 1836.5350149353,
          "highestDps": 1836.5350149353,
          "spec": "Enhancement",
          "allStars": {
            "points": 113.27,
            "rank": 568,
            "rankPercent": 96.95848084969424,
            "total": 18642
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.971,
          "medianPerformance": 92.9547,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 1686.2746858975,
          "highestDps": 1686.2746858975,
          "spec": "Enhancement",
          "allStars": {
            "points": 103.33,
            "rank": 1418,
            "rankPercent": 92.44588975370509,
            "total": 18758
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.3862,
          "medianPerformance": 92.1042,
          "totalKills": 5,
          "fastestKill": 433670,
          "bestAmount": 1033.410329933,
          "highestDps": 1033.410329933,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 391,
            "rankPercent": 97.76132254175994,
            "total": 17421
          }
        }
      ],
      "bestPerformanceAverage": 98.95581250000001,
      "medianPerformanceAverage": 94.8320625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "udy": {
      "characterName": "Udy",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106014959,
      "gear": [
        {
          "id": 24266,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_27.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 3002,
          "temporaryEnchantID": null
        },
        {
          "id": 30666,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_30naxxramas.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21869,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2995,
          "temporaryEnchantID": null
        },
        {
          "id": 18231,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_12.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21871,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_08.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29257,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24262,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_14.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 21870,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_03.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 29317,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_32.jpg",
          "itemLevel": 103,
          "permanentEnchantID": 2935,
          "temporaryEnchantID": null
        },
        {
          "id": 29922,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_61.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28753,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28766,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32450,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_47.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2672,
          "temporaryEnchantID": 2678
        },
        {
          "id": 29272,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_orb_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30859,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_11.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 85.88305904273528,
          "total": 7508,
          "bestAmount": 1041.6838662186,
          "medianPerformance": 72.79539794848904,
          "averagePerformance": 76.05302443869658,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 83.44807944468306,
          "total": 9475,
          "bestAmount": 507.58239252351,
          "medianPerformance": 69.42006379991533,
          "averagePerformance": 65.77479064184166,
          "totalKills": 5,
          "fastestKill": 4301408,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 80.58006602742867,
          "total": 7550,
          "bestAmount": 965.80647982161,
          "medianPerformance": 74.12182070867416,
          "averagePerformance": 73.01831799606647,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 84.06610219679544,
          "total": 9656,
          "bestAmount": 539.11229772737,
          "medianPerformance": 75.84060797227207,
          "averagePerformance": 74.92446196401863,
          "totalKills": 4,
          "fastestKill": 3569440,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.79250709681422,
          "medianPerformance": 94.51906102173878,
          "totalKills": 5,
          "fastestKill": 92487,
          "bestAmount": 224.15436704908,
          "highestDps": 224.15436704908,
          "spec": "Shadow",
          "allStars": {
            "points": 110.89952997570086,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.39851507213328,
          "medianPerformance": 19.12259118806828,
          "totalKills": 5,
          "fastestKill": 170511,
          "bestAmount": 249.79020125422,
          "highestDps": 249.79020125422,
          "spec": "Shadow",
          "allStars": {
            "points": 101.33306695583516,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 87.26465096926135,
          "medianPerformance": 72.97213319696823,
          "totalKills": 5,
          "fastestKill": 157335,
          "bestAmount": 164.03216067626,
          "highestDps": 164.03216067626,
          "spec": "Shadow",
          "allStars": {
            "points": 90.940123000254,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.68429348016613,
          "medianPerformance": 23.001779103629154,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 402.12896736701,
          "highestDps": 402.12896736701,
          "spec": "Shadow",
          "allStars": {
            "points": 108.38433619233464,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 50.88747440884596,
          "medianPerformance": 12.758746284155055,
          "totalKills": 5,
          "fastestKill": 176054,
          "bestAmount": 191.01525668261,
          "highestDps": 191.01525668261,
          "spec": "Shadow",
          "allStars": {
            "points": 57.394212815526416,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 92.16536142100836,
          "medianPerformance": 58.88353437203154,
          "totalKills": 5,
          "fastestKill": 398721,
          "bestAmount": 151.11877627856,
          "highestDps": 151.11877627856,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 73.20091740002529,
          "medianPerformance": 46.46176651219436,
          "totalKills": 4,
          "fastestKill": 247416,
          "bestAmount": 102.78304556331,
          "highestDps": 102.78304556331,
          "spec": "Shadow",
          "allStars": {
            "points": 77.57079428716321,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 82.87900845866554,
          "medianPerformance": 68.76097768477854,
          "totalKills": 4,
          "fastestKill": 150650,
          "bestAmount": 551.06995088648,
          "highestDps": 551.06995088648,
          "spec": "Shadow",
          "allStars": {
            "points": 91.7884905272492,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 43.538371541310696,
          "medianPerformance": 16.07671350977551,
          "totalKills": 4,
          "fastestKill": 102300,
          "bestAmount": 87.641598557796,
          "highestDps": 87.641598557796,
          "spec": "Shadow",
          "allStars": {
            "points": 46.53021560877688,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 90.20586498926859,
          "medianPerformance": 48.66218191015393,
          "totalKills": 4,
          "fastestKill": 426009,
          "bestAmount": 131.96147947225,
          "highestDps": 131.96147947225,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 79.08071730340279,
      "medianPerformanceAverage": 44.20922106266349,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "xamyc": {
      "characterName": "Xamyc",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109878593,
      "gear": [
        {
          "id": 32475,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 28134,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_27.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32078,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_33.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 154,
          "slot": 4,
          "quality": 2,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28231,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28654,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30543,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_20.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 28406,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27522,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_09.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29976,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_26.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 28227,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_63.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29302,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29370,
          "slot": 13,
          "quality": 4,
          "icon": "inv_weapon_shortblade_23.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29369,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2938,
          "temporaryEnchantID": null
        },
        {
          "id": 30832,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_08.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2629
        },
        {
          "id": 28603,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_outlandraid_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28248,
          "slot": 18,
          "quality": 3,
          "icon": "spell_arcane_blast.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 93.8398091833383,
          "total": 17673,
          "bestAmount": 917.70263923546,
          "medianPerformance": 86.41661147853061,
          "averagePerformance": 86.41661147853061,
          "totalKills": 2,
          "fastestKill": 5682159,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 83.28289760481077,
          "total": 15434,
          "bestAmount": 783.09593233501,
          "medianPerformance": 20.13253066630275,
          "averagePerformance": 31.876234193919966,
          "totalKills": 4,
          "fastestKill": 5230941,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 70,
          "medianPerformance": 60,
          "totalKills": 3,
          "fastestKill": 132025,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 70,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 3,
          "fastestKill": 186318,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 60,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 30,
          "medianPerformance": 30,
          "totalKills": 3,
          "fastestKill": 195168,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 30,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 50,
          "medianPerformance": 40,
          "totalKills": 3,
          "fastestKill": 139312,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 50,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 50,
          "medianPerformance": 50,
          "totalKills": 3,
          "fastestKill": 227422,
          "bestAmount": 0,
          "highestDps": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 50,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 44.49074178271404,
          "medianPerformance": 43.08508877551902,
          "totalKills": 3,
          "fastestKill": 431274,
          "bestAmount": 3.0450349389564,
          "highestDps": 3.0450349389564,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 16.6791,
          "medianPerformance": 16.6782,
          "totalKills": 5,
          "fastestKill": 338497,
          "bestAmount": 635.92000915823,
          "highestDps": 635.92000915823,
          "spec": "Elemental",
          "allStars": {
            "points": 51.26,
            "rank": 15245,
            "rankPercent": 14.426855282362187,
            "total": 17814
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 61.85906917957263,
          "medianPerformance": 50,
          "totalKills": 5,
          "fastestKill": 190379,
          "bestAmount": 2.4560459783132,
          "highestDps": 2.4560459783132,
          "spec": "Restoration",
          "allStars": {
            "points": 61.98277508168934,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 11.4071,
          "medianPerformance": 11.4069,
          "totalKills": 5,
          "fastestKill": 146423,
          "bestAmount": 669.62609341115,
          "highestDps": 669.62609341115,
          "spec": "Elemental",
          "allStars": {
            "points": 30.86,
            "rank": 16446,
            "rankPercent": 9.55837870538415,
            "total": 18183
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 21.265897697367137,
          "medianPerformance": 20,
          "totalKills": 5,
          "fastestKill": 503201,
          "bestAmount": 0.24380193668017,
          "highestDps": 0.24380193668017,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 43.74315864744658,
      "medianPerformanceAverage": 39.7606375,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "yoshkap": {
      "characterName": "Yoshkap",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105376752,
      "gear": [
        {
          "id": 30152,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_93.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 30377,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_11.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29054,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_55.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2979,
          "temporaryEnchantID": null
        },
        {
          "id": 10056,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_orange_01.jpg",
          "itemLevel": 43,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29050,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_64.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 28652,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28742,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 28663,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_fabric_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 28511,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 30151,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_57.jpg",
          "itemLevel": 133,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28763,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_08.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29307,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_54.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28590,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_bandage_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28765,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28771,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_46.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 1894,
          "temporaryEnchantID": 2629
        },
        {
          "id": 29923,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_blood_02.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27885,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 74.4526679525935,
          "total": 10645,
          "bestAmount": 890.57553493876,
          "medianPerformance": 17.34635373729745,
          "averagePerformance": 30.54640197144303,
          "totalKills": 4,
          "fastestKill": 5013943,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 51.743652076467264,
          "total": 5662,
          "bestAmount": 844.90573958824,
          "medianPerformance": 47.305691043419856,
          "averagePerformance": 47.305691043419856,
          "totalKills": 2,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 67.0585,
          "medianPerformance": 39.3075,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 726.78931710153,
          "highestDps": 726.78931710153,
          "spec": "Holy",
          "allStars": {
            "points": 68.27,
            "rank": 8553,
            "rankPercent": 59.68129744000754,
            "total": 21211
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 72.5226,
          "medianPerformance": 44.4434,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 927.50614329867,
          "highestDps": 927.50614329867,
          "spec": "Holy",
          "allStars": {
            "points": 70.09,
            "rank": 8022,
            "rankPercent": 63.109966425976175,
            "total": 21743
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 93.7821,
          "medianPerformance": 57.4733,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1307.1281024565,
          "highestDps": 1307.1281024565,
          "spec": "Holy",
          "allStars": {
            "points": 96.81,
            "rank": 2468,
            "rankPercent": 88.64075881757068,
            "total": 21718
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 82.5163,
          "medianPerformance": 31.6359,
          "totalKills": 3,
          "fastestKill": 142609,
          "bestAmount": 1281.1753078805,
          "highestDps": 1281.1753078805,
          "spec": "Holy",
          "allStars": {
            "points": 86.65,
            "rank": 5022,
            "rankPercent": 76.44160840801389,
            "total": 21313
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 57.5849,
          "medianPerformance": 18.878,
          "totalKills": 3,
          "fastestKill": 189409,
          "bestAmount": 836.29478929277,
          "highestDps": 836.29478929277,
          "spec": "Holy",
          "allStars": {
            "points": 50.62,
            "rank": 12680,
            "rankPercent": 39.93557250461888,
            "total": 21109
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 73.5055,
          "medianPerformance": 21.6872,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 762.15513046835,
          "highestDps": 762.15513046835,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 6202,
            "rankPercent": 67.70817059834401,
            "total": 19203
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 21.5492,
          "medianPerformance": 19.3453,
          "totalKills": 2,
          "fastestKill": 302151,
          "bestAmount": 408.56248457532,
          "highestDps": 408.56248457532,
          "spec": "Holy",
          "allStars": {
            "points": 31.03,
            "rank": 17971,
            "rankPercent": 13.535100803541356,
            "total": 20783
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 71.7787,
          "medianPerformance": 67.3347,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 2298.5127913987,
          "highestDps": 2298.5127913987,
          "spec": "Holy",
          "allStars": {
            "points": 70.65,
            "rank": 9494,
            "rankPercent": 55.96938775510204,
            "total": 21560
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 34.3621,
          "medianPerformance": 34.2592,
          "totalKills": 2,
          "fastestKill": 111349,
          "bestAmount": 630.9438286809,
          "highestDps": 630.9438286809,
          "spec": "Holy",
          "allStars": {
            "points": 34,
            "rank": 15391,
            "rankPercent": 26.307220838919747,
            "total": 20884
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 64.9685,
          "medianPerformance": 64.1498,
          "totalKills": 2,
          "fastestKill": 467406,
          "bestAmount": 681.51043618132,
          "highestDps": 681.51043618132,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 8027,
            "rankPercent": 58.21967725143155,
            "total": 19210
          }
        }
      ],
      "bestPerformanceAverage": 62.6443,
      "medianPerformanceAverage": 39.0846625,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "yourßunywrot": {
      "characterName": "Yourßunywrot",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109151822,
      "gear": [
        {
          "id": 29990,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_32.jpg",
          "itemLevel": 138,
          "permanentEnchantID": 3001,
          "temporaryEnchantID": null
        },
        {
          "id": 28822,
          "slot": 2,
          "quality": 4,
          "icon": "inv_misc_bone_09.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29054,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_55.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2979,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29050,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_64.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 28652,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31343,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_20.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 30100,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_fabric_01.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2656,
          "temporaryEnchantID": null
        },
        {
          "id": 29183,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 24393,
          "slot": 10,
          "quality": 3,
          "icon": "inv_misc_surgeonglove_01.jpg",
          "itemLevel": 88,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29168,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29291,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28823,
          "slot": 13,
          "quality": 4,
          "icon": "spell_shadow_unholyfrenzy.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29376,
          "slot": 14,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29354,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 1888,
          "temporaryEnchantID": null
        },
        {
          "id": 28771,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_46.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": null
        },
        {
          "id": 29170,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_orb_01.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28588,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "hps",
          "label": "SSC healing",
          "rank": null,
          "rankPercent": 60.167050370168155,
          "total": 9996,
          "bestAmount": 814.47971393621,
          "medianPerformance": 60.167050370168155,
          "averagePerformance": 60.167050370168155,
          "totalKills": 1,
          "fastestKill": 4632749,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 75.00392143944094,
          "total": 10288,
          "bestAmount": 960.52687614713,
          "medianPerformance": 73.03754341755067,
          "averagePerformance": 73.03754341755067,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 90.5265,
          "medianPerformance": 90.5265,
          "totalKills": 1,
          "fastestKill": 102130,
          "bestAmount": 883.62870850876,
          "highestDps": 883.62870850876,
          "spec": "Holy",
          "allStars": {
            "points": 94.94,
            "rank": 3238,
            "rankPercent": 84.7390504926689,
            "total": 21211
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 36.6774,
          "medianPerformance": 36.6774,
          "totalKills": 1,
          "fastestKill": 197785,
          "bestAmount": 686.14910129686,
          "highestDps": 686.14910129686,
          "spec": "Holy",
          "allStars": {
            "points": 33.14,
            "rank": 15729,
            "rankPercent": 27.664075794508577,
            "total": 21743
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 80.4808,
          "medianPerformance": 80.4808,
          "totalKills": 1,
          "fastestKill": 163533,
          "bestAmount": 1009.1235408144,
          "highestDps": 1009.1235408144,
          "spec": "Holy",
          "allStars": {
            "points": 76.33,
            "rank": 6544,
            "rankPercent": 69.87291647481352,
            "total": 21718
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 76.0646,
          "medianPerformance": 76.0646,
          "totalKills": 1,
          "fastestKill": 115131,
          "bestAmount": 1189.9140978537,
          "highestDps": 1189.9140978537,
          "spec": "Holy",
          "allStars": {
            "points": 76.43,
            "rank": 7064,
            "rankPercent": 66.860601510815,
            "total": 21313
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 13.0512,
          "medianPerformance": 13.0512,
          "totalKills": 1,
          "fastestKill": 203960,
          "bestAmount": 600.01961168857,
          "highestDps": 600.01961168857,
          "spec": "Holy",
          "allStars": {
            "points": 36.32,
            "rank": 19261,
            "rankPercent": 8.759296982329811,
            "total": 21109
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 78.0083,
          "medianPerformance": 78.0083,
          "totalKills": 1,
          "fastestKill": 409306,
          "bestAmount": 782.8470630775,
          "highestDps": 782.8470630775,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 5378,
            "rankPercent": 71.99916679685465,
            "total": 19203
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 85.405,
          "medianPerformance": 76.1162,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 687.51618006616,
          "highestDps": 687.51618006616,
          "spec": "Holy",
          "allStars": {
            "points": 89.38,
            "rank": 4048,
            "rankPercent": 80.52735408747535,
            "total": 20783
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 68.0984,
          "medianPerformance": 67.9752,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 2318.2372014674,
          "highestDps": 2318.2372014674,
          "spec": "Holy",
          "allStars": {
            "points": 71.25,
            "rank": 9163,
            "rankPercent": 57.50463821892394,
            "total": 21560
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.3119,
          "medianPerformance": 70.7625,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 1118.6020040678,
          "highestDps": 1118.6020040678,
          "spec": "Holy",
          "allStars": {
            "points": 104.83,
            "rank": 1098,
            "rankPercent": 94.74717487071442,
            "total": 20884
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 81.1291,
          "medianPerformance": 65.2762,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 748.09356714769,
          "highestDps": 748.09356714769,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 4996,
            "rankPercent": 73.99791775117127,
            "total": 19210
          }
        }
      ],
      "bestPerformanceAverage": 68.451975,
      "medianPerformanceAverage": 63.956799999999994,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    },
    "zulnani": {
      "characterName": "Zulnani",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876717,
      "gear": [
        {
          "id": 8345,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_04.jpg",
          "itemLevel": 45,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29100,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2986,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29096,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_11.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29247,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30229,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_23.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 32810,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 126,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 28506,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_28.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 30834,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 28791,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_71.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 30627,
          "slot": 13,
          "quality": 4,
          "icon": "spell_nature_unrelentingstorm.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29383,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28658,
          "slot": 16,
          "quality": 4,
          "icon": "inv_staff_55.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2670,
          "temporaryEnchantID": 2955
        },
        {
          "id": 0,
          "slot": 17,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29390,
          "slot": 18,
          "quality": 4,
          "icon": "inv_relics_idolofhealth.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 91.52120089677993,
          "total": 10163,
          "bestAmount": 1186.5594826244,
          "medianPerformance": 84.44927001165084,
          "averagePerformance": 79.36586900791795,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 84.971122548326,
          "total": 10163,
          "bestAmount": 512.7241691462,
          "medianPerformance": 75.85865018787625,
          "averagePerformance": 74.68611484978297,
          "totalKills": 5,
          "fastestKill": 4250808,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 76.58831048133611,
          "total": 9101,
          "bestAmount": 838.24018843642,
          "medianPerformance": 73.49814996866866,
          "averagePerformance": 72.28198024054723,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 85.44489448076806,
          "total": 9101,
          "bestAmount": 486.92680084271,
          "medianPerformance": 77.5302442041517,
          "averagePerformance": 71.79715043579186,
          "totalKills": 5,
          "fastestKill": 3389350,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.8796,
          "medianPerformance": 95.9456,
          "totalKills": 5,
          "fastestKill": 96778,
          "bestAmount": 1782.5846960602,
          "highestDps": 1782.5846960602,
          "spec": "Feral",
          "allStars": {
            "points": 109.25,
            "rank": 595,
            "rankPercent": 95.58987304179969,
            "total": 13469
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 87.7365,
          "medianPerformance": 83.5718,
          "totalKills": 5,
          "fastestKill": 155841,
          "bestAmount": 1228.3545408461,
          "highestDps": 1228.3545408461,
          "spec": "Feral",
          "allStars": {
            "points": 95.72,
            "rank": 2166,
            "rankPercent": 85.3953049109552,
            "total": 14824
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 95.0038,
          "medianPerformance": 91.2439,
          "totalKills": 5,
          "fastestKill": 145698,
          "bestAmount": 1398.4544068849,
          "highestDps": 1398.4544068849,
          "spec": "Feral",
          "allStars": {
            "points": 104.29,
            "rank": 1019,
            "rankPercent": 91.97350784514705,
            "total": 12683
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 33.4718,
          "medianPerformance": 23.2319,
          "totalKills": 5,
          "fastestKill": 116887,
          "bestAmount": 563.57723121351,
          "highestDps": 563.57723121351,
          "spec": "Guardian",
          "allStars": {
            "points": 39.59,
            "rank": 8828,
            "rankPercent": 29.014877362283876,
            "total": 12435
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.5539,
          "medianPerformance": 93.7654,
          "totalKills": 5,
          "fastestKill": 173996,
          "bestAmount": 2005.1000744421,
          "highestDps": 2005.1000744421,
          "spec": "Feral",
          "allStars": {
            "points": 113.86,
            "rank": 304,
            "rankPercent": 97.52814488497307,
            "total": 12258
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 92.4672,
          "medianPerformance": 54.1096,
          "totalKills": 5,
          "fastestKill": 422887,
          "bestAmount": 926.83880907999,
          "highestDps": 926.83880907999,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 890,
            "rankPercent": 92.41402850072532,
            "total": 11719
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 92.5532,
          "medianPerformance": 86.563,
          "totalKills": 5,
          "fastestKill": 262590,
          "bestAmount": 724.47541795194,
          "highestDps": 724.47541795194,
          "spec": "Warden",
          "allStars": {
            "points": 104.76,
            "rank": 380,
            "rankPercent": 91.38048669547419,
            "total": 4397
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 94.6997,
          "medianPerformance": 94.6997,
          "totalKills": 5,
          "fastestKill": 143538,
          "bestAmount": 924.42168461946,
          "highestDps": 924.42168461946,
          "spec": "Guardian",
          "allStars": {
            "points": 103.03,
            "rank": 1544,
            "rankPercent": 88.29553212470606,
            "total": 13183
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.2769,
          "medianPerformance": 90.6758,
          "totalKills": 5,
          "fastestKill": 103400,
          "bestAmount": 1539.5067698259,
          "highestDps": 1539.5067698259,
          "spec": "Feral",
          "allStars": {
            "points": 99.66,
            "rank": 1417,
            "rankPercent": 89.8224681952131,
            "total": 13913
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 80.8112,
          "medianPerformance": 75.4041,
          "totalKills": 5,
          "fastestKill": 426009,
          "bestAmount": 740.94913487743,
          "highestDps": 740.94913487743,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 3059,
            "rankPercent": 78.6675967910708,
            "total": 14335
          }
        }
      ],
      "bestPerformanceAverage": 86.771925,
      "medianPerformanceAverage": 82.4621375,
      "totalKills": 0,
      "fetchedAt": "2026-06-17T11:41:15.165Z",
      "error": null,
      "partial": false
    }
  }
};
