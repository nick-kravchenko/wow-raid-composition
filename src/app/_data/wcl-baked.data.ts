// AUTO-GENERATED - do not edit manually.
// Run `npm run bake:wcl` to regenerate.
// Generated: 2026-06-02T12:44:51.501Z

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
  "generatedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 25036,
          "slot": 15,
          "quality": 2,
          "icon": "inv_misc_cape_22.jpg",
          "itemLevel": 99,
          "permanentEnchantID": 2662,
          "temporaryEnchantID": null
        },
        {
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
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
          "rankPercent": 35.30722031563523,
          "total": 7099,
          "bestAmount": 793.14658419904,
          "medianPerformance": 35.30722031563523,
          "averagePerformance": 35.30722031563523,
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
          "rankPercent": 61.07158244958672,
          "total": 7099,
          "bestAmount": 408.3074157412,
          "medianPerformance": 61.07158244958672,
          "averagePerformance": 61.07158244958672,
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
          "rankPercent": 35.55431845180205,
          "total": 526,
          "bestAmount": 790.88105227997,
          "medianPerformance": 34.345093157552206,
          "averagePerformance": 34.345093157552206,
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
          "rankPercent": 59.23364604576168,
          "total": 7135,
          "bestAmount": 423.85177372735,
          "medianPerformance": 38.709879747640024,
          "averagePerformance": 38.709879747640024,
          "totalKills": 2,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.68498232000658,
          "medianPerformance": 94.68498232000658,
          "totalKills": 1,
          "fastestKill": 102130,
          "bestAmount": 139.6847155586,
          "highestDps": 139.6847155586,
          "spec": "Shadow",
          "allStars": {
            "points": 103.82880215908725,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 37.91225786353924,
          "medianPerformance": 37.91225786353924,
          "totalKills": 1,
          "fastestKill": 197785,
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
          "rankPercent": 32.059947148552155,
          "medianPerformance": 32.059947148552155,
          "totalKills": 1,
          "fastestKill": 163533,
          "bestAmount": 63.161563721084,
          "highestDps": 63.161563721084,
          "spec": "Shadow",
          "allStars": {
            "points": 33.47520961862826,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 4.6009640787469905,
          "medianPerformance": 4.6009640787469905,
          "totalKills": 1,
          "fastestKill": 115131,
          "bestAmount": 14.487844281731,
          "highestDps": 14.487844281731,
          "spec": "Shadow",
          "allStars": {
            "points": 4.914407959409457,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 25.7923683617675,
          "medianPerformance": 25.7923683617675,
          "totalKills": 1,
          "fastestKill": 203960,
          "bestAmount": 96.053147676015,
          "highestDps": 96.053147676015,
          "spec": "Shadow",
          "allStars": {
            "points": 29.064320120597746,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 17.416623421500994,
          "medianPerformance": 17.416623421500994,
          "totalKills": 1,
          "fastestKill": 409306,
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
          "medianPerformance": 31.478171696085834,
          "totalKills": 2,
          "fastestKill": 278120,
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
          "medianPerformance": 48.951038199390794,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 434.28520975757,
          "highestDps": 434.28520975757,
          "spec": "Shadow",
          "allStars": {
            "points": 70.64634579924345,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 78.1716647029374,
          "medianPerformance": 48.11390511282316,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 122.74171781812,
          "highestDps": 122.74171781812,
          "spec": "Shadow",
          "allStars": {
            "points": 83.15522654262988,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 59.31062199552752,
          "medianPerformance": 36.031396508875744,
          "totalKills": 2,
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
      "bestPerformanceAverage": 48.68380533259886,
      "medianPerformanceAverage": 40.44920434761403,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "rankPercent": 54.0075,
          "medianPerformance": 54.0075,
          "totalKills": 1,
          "fastestKill": 116972,
          "bestAmount": 357.57275245358,
          "highestDps": 357.57275245358,
          "spec": "Protection",
          "allStars": {
            "points": 57.14,
            "rank": 3268,
            "rankPercent": 51.66444740346205,
            "total": 6759
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
            "points": 95.79,
            "rank": 1579,
            "rankPercent": 85.95210540372118,
            "total": 11233
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
            "points": 80.25,
            "rank": 2885,
            "rankPercent": 72.64795144157814,
            "total": 10544
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
            "points": 46.34,
            "rank": 6107,
            "rankPercent": 40.09614441283234,
            "total": 10193
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
            "points": 35.83,
            "rank": 8442,
            "rankPercent": 33.21465305799509,
            "total": 12639
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
            "rank": 3681,
            "rankPercent": 56.122570645045904,
            "total": 8387
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
            "points": 73.58,
            "rank": 3424,
            "rankPercent": 70.7285787583376,
            "total": 11694
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
            "points": 77.44,
            "rank": 2250,
            "rankPercent": 67.04761904761905,
            "total": 6825
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
            "points": 101.6,
            "rank": 673,
            "rankPercent": 93.85234653737078,
            "total": 10931
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
            "rank": 5527,
            "rankPercent": 31.028457314028955,
            "total": 8012
          }
        }
      ],
      "bestPerformanceAverage": 66.050625,
      "medianPerformanceAverage": 66.050625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "amorales": {
      "characterName": "Amorales",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106205233,
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
          "id": 14617,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_red_01.jpg",
          "itemLevel": 1,
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
          "id": 28515,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 369,
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
          "id": 29287,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28675,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_19.jpg",
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
          "id": 28660,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
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
          "rankPercent": 56.61661161387029,
          "total": 4371,
          "bestAmount": 556.0993142676,
          "medianPerformance": 30.53621561066504,
          "averagePerformance": 35.66425485289347,
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
          "rankPercent": 76.85138084755896,
          "total": 2641,
          "bestAmount": 303.18294404224,
          "medianPerformance": 48.514246011253604,
          "averagePerformance": 51.65154052387439,
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
          "rankPercent": 67.61959650883496,
          "total": 2566,
          "bestAmount": 542.76088736595,
          "medianPerformance": 57.04654681726778,
          "averagePerformance": 57.04654681726778,
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
          "rankPercent": 63.711443101199755,
          "total": 2566,
          "bestAmount": 259.41116335634,
          "medianPerformance": 57.35617237650972,
          "averagePerformance": 57.35617237650972,
          "totalKills": 2,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 83.3264,
          "medianPerformance": 82.0328,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 624.69650856615,
          "highestDps": 624.69650856615,
          "spec": "Guardian",
          "allStars": {
            "points": 93.56,
            "rank": 1046,
            "rankPercent": 82.5658992325659,
            "total": 5994
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 78.8027,
          "medianPerformance": 69.8887,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 601.25153215922,
          "highestDps": 601.25153215922,
          "spec": "Guardian",
          "allStars": {
            "points": 89.12,
            "rank": 1352,
            "rankPercent": 77.38912133891213,
            "total": 5975
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 89.0293,
          "medianPerformance": 76.5147,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 701.44595925891,
          "highestDps": 701.44595925891,
          "spec": "Guardian",
          "allStars": {
            "points": 100.84,
            "rank": 804,
            "rankPercent": 88.48415316219705,
            "total": 6973
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 71.1687,
          "medianPerformance": 60.7439,
          "totalKills": 3,
          "fastestKill": 142609,
          "bestAmount": 741.80796108475,
          "highestDps": 741.80796108475,
          "spec": "Guardian",
          "allStars": {
            "points": 80.72,
            "rank": 2861,
            "rankPercent": 70.04294542788311,
            "total": 9547
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 70.3679,
          "medianPerformance": 51.5891,
          "totalKills": 3,
          "fastestKill": 189409,
          "bestAmount": 714.66508983206,
          "highestDps": 714.66508983206,
          "spec": "Guardian",
          "allStars": {
            "points": 82.84,
            "rank": 2319,
            "rankPercent": 69.17143237132598,
            "total": 7519
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 41.4577,
          "medianPerformance": 41.4577,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 364.85095363136,
          "highestDps": 364.85095363136,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 3213,
            "rankPercent": 39.6467493423525,
            "total": 5322
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 78.3932,
          "medianPerformance": 76.6373,
          "totalKills": 2,
          "fastestKill": 302151,
          "bestAmount": 416.32495010773,
          "highestDps": 416.32495010773,
          "spec": "Guardian",
          "allStars": {
            "points": 84.21,
            "rank": 2848,
            "rankPercent": 73.22486598325966,
            "total": 10633
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 42.5967,
          "medianPerformance": 36.8641,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 753.16785381928,
          "highestDps": 753.16785381928,
          "spec": "Feral",
          "allStars": {
            "points": 49.49,
            "rank": 4916,
            "rankPercent": 40.86150884370112,
            "total": 8311
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 77.8215,
          "medianPerformance": 76.2891,
          "totalKills": 2,
          "fastestKill": 111349,
          "bestAmount": 739.47678021356,
          "highestDps": 739.47678021356,
          "spec": "Guardian",
          "allStars": {
            "points": 83.85,
            "rank": 1783,
            "rankPercent": 73.55690755304941,
            "total": 6739
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 76.8045,
          "medianPerformance": 55.1255,
          "totalKills": 2,
          "fastestKill": 467406,
          "bestAmount": 502.84335246017,
          "highestDps": 502.84335246017,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 1015,
            "rankPercent": 72.96720874433484,
            "total": 3751
          }
        }
      ],
      "bestPerformanceAverage": 73.9383,
      "medianPerformanceAverage": 66.31996249999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 29382,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 110,
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
          "rankPercent": 50.47880407097596,
          "total": 9264,
          "bestAmount": 1080.827231922,
          "medianPerformance": 50.47880407097596,
          "averagePerformance": 50.47880407097596,
          "totalKills": 1,
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
          "rankPercent": 70.24332893894828,
          "total": 9264,
          "bestAmount": 526.52134258407,
          "medianPerformance": 70.24332893894828,
          "averagePerformance": 70.24332893894828,
          "totalKills": 1,
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
          "rankPercent": 42.25683212145278,
          "total": 8904,
          "bestAmount": 843.46001614974,
          "medianPerformance": 42.25683212145278,
          "averagePerformance": 42.25683212145278,
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
          "rankPercent": 41.489354431820416,
          "total": 8904,
          "bestAmount": 395.09560682285,
          "medianPerformance": 41.489354431820416,
          "averagePerformance": 41.489354431820416,
          "totalKills": 1,
          "fastestKill": 5803613,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 67.9161,
          "medianPerformance": 67.9161,
          "totalKills": 1,
          "fastestKill": 114597,
          "bestAmount": 1443.8423344416,
          "highestDps": 1443.8423344416,
          "spec": "BeastMastery",
          "allStars": {
            "points": 72.01,
            "rank": 9413,
            "rankPercent": 62.97840538095426,
            "total": 25423
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 40.5393,
          "medianPerformance": 40.5393,
          "totalKills": 1,
          "fastestKill": 187766,
          "bestAmount": 707.67338069725,
          "highestDps": 707.67338069725,
          "spec": "BeastMastery",
          "allStars": {
            "points": 33.74,
            "rank": 18583,
            "rankPercent": 27.82568165928688,
            "total": 25746
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 75.3146,
          "medianPerformance": 75.3146,
          "totalKills": 1,
          "fastestKill": 179077,
          "bestAmount": 1119.6356874417,
          "highestDps": 1119.6356874417,
          "spec": "BeastMastery",
          "allStars": {
            "points": 76.33,
            "rank": 8128,
            "rankPercent": 67.9345038469126,
            "total": 25345
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 69.2688,
          "medianPerformance": 69.2688,
          "totalKills": 1,
          "fastestKill": 142609,
          "bestAmount": 1547.4899901128,
          "highestDps": 1547.4899901128,
          "spec": "BeastMastery",
          "allStars": {
            "points": 73.2,
            "rank": 8825,
            "rankPercent": 64.21445372698516,
            "total": 24658
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 52.5553,
          "medianPerformance": 52.5553,
          "totalKills": 1,
          "fastestKill": 220836,
          "bestAmount": 1424.849209368,
          "highestDps": 1424.849209368,
          "spec": "BeastMastery",
          "allStars": {
            "points": 58.73,
            "rank": 12517,
            "rankPercent": 48.77210216110019,
            "total": 24432
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 48.8316,
          "medianPerformance": 48.8316,
          "totalKills": 1,
          "fastestKill": 402466,
          "bestAmount": 780.26466831981,
          "highestDps": 780.26466831981,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 11827,
            "rankPercent": 43.83281880788412,
            "total": 21055
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 82.6098,
          "medianPerformance": 82.6098,
          "totalKills": 1,
          "fastestKill": 307948,
          "bestAmount": 1077.5228285295,
          "highestDps": 1077.5228285295,
          "spec": "BeastMastery",
          "allStars": {
            "points": 86.63,
            "rank": 5961,
            "rankPercent": 75.29943221849227,
            "total": 24129
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 15.9976,
          "medianPerformance": 15.9976,
          "totalKills": 1,
          "fastestKill": 170857,
          "bestAmount": 387.31804959703,
          "highestDps": 387.31804959703,
          "spec": "BeastMastery",
          "allStars": {
            "points": 19.05,
            "rank": 22190,
            "rankPercent": 7.849163171228041,
            "total": 24079
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 69.4771,
          "medianPerformance": 69.4771,
          "totalKills": 1,
          "fastestKill": 111349,
          "bestAmount": 1497.5078357237,
          "highestDps": 1497.5078357237,
          "spec": "BeastMastery",
          "allStars": {
            "points": 69.87,
            "rank": 9161,
            "rankPercent": 61.91268191268191,
            "total": 24050
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 28.8904,
          "medianPerformance": 28.8904,
          "totalKills": 1,
          "fastestKill": 467406,
          "bestAmount": 700.25202928503,
          "highestDps": 700.25202928503,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 16298,
            "rankPercent": 20.888349514563107,
            "total": 20600
          }
        }
      ],
      "bestPerformanceAverage": 59.209824999999995,
      "medianPerformanceAverage": 59.209824999999995,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 24116,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_28.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29095,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
          "itemLevel": 120,
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
          "id": 21848,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_02.jpg",
          "itemLevel": 105,
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
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 21847,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 105,
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
          "id": 27518,
          "slot": 18,
          "quality": 3,
          "icon": "spell_arcane_arcane03.jpg",
          "itemLevel": 112,
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
          "rankPercent": 85.66728872772879,
          "total": 5424,
          "bestAmount": 955.57493066553,
          "medianPerformance": 82.5312000620723,
          "averagePerformance": 81.80052431561948,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 90.26333720001715,
          "total": 3547,
          "bestAmount": 452.6295771556,
          "medianPerformance": 59.39945583028984,
          "averagePerformance": 66.43346068632461,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 77.53416766731932,
          "total": 343,
          "bestAmount": 872.52087173577,
          "medianPerformance": 63.87672037714397,
          "averagePerformance": 56.025161860847014,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 75.50294325006297,
          "total": 3331,
          "bestAmount": 418.57127258517,
          "medianPerformance": 48.66853431633705,
          "averagePerformance": 53.54445805848612,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.731,
          "medianPerformance": 92.6116,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1368.4129535273,
          "highestDps": 1368.4129535273,
          "spec": "Balance",
          "allStars": {
            "points": 105.96,
            "rank": 696,
            "rankPercent": 91.91390343222804,
            "total": 8595
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 97.3312,
          "medianPerformance": 68.851,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1006.3168495095,
          "highestDps": 1006.3168495095,
          "spec": "Balance",
          "allStars": {
            "points": 101.36,
            "rank": 784,
            "rankPercent": 90.92068645640074,
            "total": 8624
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 95.8034,
          "medianPerformance": 80.8296,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1117.4866639417,
          "highestDps": 1117.4866639417,
          "spec": "Balance",
          "allStars": {
            "points": 106.39,
            "rank": 603,
            "rankPercent": 92.84780800760366,
            "total": 8417
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.6097,
          "medianPerformance": 92.8168,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1308.7351922217,
          "highestDps": 1308.7351922217,
          "spec": "Balance",
          "allStars": {
            "points": 106.72,
            "rank": 552,
            "rankPercent": 93.09177532597793,
            "total": 7976
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 94.834,
          "medianPerformance": 73.0809,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1386.3385583578,
          "highestDps": 1386.3385583578,
          "spec": "Balance",
          "allStars": {
            "points": 109.01,
            "rank": 475,
            "rankPercent": 94.091985541568,
            "total": 8023
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 83.3353,
          "medianPerformance": 70.7442,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 730.60064902425,
          "highestDps": 730.60064902425,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 1230,
            "rankPercent": 82.24245051293165,
            "total": 6921
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.3651,
          "medianPerformance": 88.3784,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 1037.3673414786,
          "highestDps": 1037.3673414786,
          "spec": "Balance",
          "allStars": {
            "points": 107.93,
            "rank": 549,
            "rankPercent": 93.24624106482622,
            "total": 8114
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 94.0882,
          "medianPerformance": 86.0118,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1254.9020909393,
          "highestDps": 1254.9020909393,
          "spec": "Balance",
          "allStars": {
            "points": 108.57,
            "rank": 527,
            "rankPercent": 93.48526133267278,
            "total": 8074
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 92.1396,
          "medianPerformance": 88.575,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 1207.2899562124,
          "highestDps": 1207.2899562124,
          "spec": "Balance",
          "allStars": {
            "points": 102.42,
            "rank": 717,
            "rankPercent": 91.28847791702154,
            "total": 8219
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 77.8212,
          "medianPerformance": 29.0437,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 745.03825701018,
          "highestDps": 745.03825701018,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 2120,
            "rankPercent": 68.55616560320523,
            "total": 6739
          }
        }
      ],
      "bestPerformanceAverage": 95.487775,
      "medianPerformanceAverage": 83.89438750000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "rankPercent": 85.8125,
          "medianPerformance": 66.7449,
          "totalKills": 2,
          "fastestKill": 102130,
          "bestAmount": 1386.1549006169,
          "highestDps": 1386.1549006169,
          "spec": "Arms",
          "allStars": {
            "points": 94.83,
            "rank": 1264,
            "rankPercent": 83.56324830817283,
            "total": 7684
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
            "points": 59.89,
            "rank": 3839,
            "rankPercent": 50.98339719029374,
            "total": 7830
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
            "points": 102.23,
            "rank": 840,
            "rankPercent": 89.38914885544455,
            "total": 7907
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
            "points": 55.65,
            "rank": 3474,
            "rankPercent": 47.14655303606757,
            "total": 6571
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
            "points": 78.48,
            "rank": 2623,
            "rankPercent": 65.14224940175485,
            "total": 7522
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
            "rank": 4460,
            "rankPercent": 32.28549734244495,
            "total": 6585
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
            "points": 73.67,
            "rank": 2687,
            "rankPercent": 61.72698774579652,
            "total": 7018
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
            "points": 83.06,
            "rank": 2261,
            "rankPercent": 68.96030765004807,
            "total": 7281
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
            "points": 62.13,
            "rank": 3486,
            "rankPercent": 53.67539545394125,
            "total": 7523
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
            "rank": 1234,
            "rankPercent": 79.97401331817444,
            "total": 6157
          }
        }
      ],
      "bestPerformanceAverage": 70.06386250000001,
      "medianPerformanceAverage": 61.440174999999996,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 27533,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_hand_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2636
        },
        {
          "id": 28308,
          "slot": 17,
          "quality": 4,
          "icon": "inv_axe_54.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
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
          "rankPercent": 19.69960305267147,
          "total": 11143,
          "bestAmount": 799.45976403523,
          "medianPerformance": 19.62663845926317,
          "averagePerformance": 14.388866681441838,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 64.5316043710115,
          "total": 7762,
          "bestAmount": 476.70190624751,
          "medianPerformance": 22.748849778401215,
          "averagePerformance": 30.433518845591113,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 40.82033551276339,
          "total": 7252,
          "bestAmount": 791.44891926612,
          "medianPerformance": 23.073223429478787,
          "averagePerformance": 24.50273381292116,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 74.15977503444658,
          "total": 7252,
          "bestAmount": 484.94274209615,
          "medianPerformance": 23.72666114958386,
          "averagePerformance": 34.5673050178822,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 72.8838,
          "medianPerformance": 65.3265,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1210.2474676729,
          "highestDps": 1210.2474676729,
          "spec": "Enhancement",
          "allStars": {
            "points": 75.78,
            "rank": 5745,
            "rankPercent": 64.84269800465174,
            "total": 16338
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 29.7225,
          "medianPerformance": 23.6205,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 744.08102703051,
          "highestDps": 744.08102703051,
          "spec": "Enhancement",
          "allStars": {
            "points": 42.51,
            "rank": 13040,
            "rankPercent": 20.045376502330146,
            "total": 16308
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 56.6105,
          "medianPerformance": 28.5893,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 923.64063940001,
          "highestDps": 923.64063940001,
          "spec": "Enhancement",
          "allStars": {
            "points": 63.57,
            "rank": 7421,
            "rankPercent": 53.723337906947734,
            "total": 16034
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 51.9343,
          "medianPerformance": 36.5245,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1217.3860476363,
          "highestDps": 1217.3860476363,
          "spec": "Enhancement",
          "allStars": {
            "points": 53.04,
            "rank": 8720,
            "rankPercent": 43.75927239889054,
            "total": 15503
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 45.5252,
          "medianPerformance": 37.8645,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1235.20702152,
          "highestDps": 1235.20702152,
          "spec": "Enhancement",
          "allStars": {
            "points": 65.51,
            "rank": 9440,
            "rankPercent": 38.91010290596078,
            "total": 15451
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 10.1908,
          "medianPerformance": 8.39848,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 480.38364858697,
          "highestDps": 480.38364858697,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 12828,
            "rankPercent": 5.097662030186446,
            "total": 13516
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 44.1757,
          "medianPerformance": 32.8816,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 632.69708793444,
          "highestDps": 632.69708793444,
          "spec": "Enhancement",
          "allStars": {
            "points": 56.3,
            "rank": 10344,
            "rankPercent": 32.7940220922677,
            "total": 15390
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 38.7821,
          "medianPerformance": 31.1806,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1217.2651842018,
          "highestDps": 1217.2651842018,
          "spec": "Enhancement",
          "allStars": {
            "points": 68.73,
            "rank": 9920,
            "rankPercent": 35.406355821828605,
            "total": 15356
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 44.4903,
          "medianPerformance": 30.2327,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 1074.2165975628,
          "highestDps": 1074.2165975628,
          "spec": "Enhancement",
          "allStars": {
            "points": 42.64,
            "rank": 10193,
            "rankPercent": 33.61990360818028,
            "total": 15354
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 57.007,
          "medianPerformance": 36.0416,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 718.43469396114,
          "highestDps": 718.43469396114,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 6891,
            "rankPercent": 47.8306958431135,
            "total": 13207
          }
        }
      ],
      "bestPerformanceAverage": 48.01555,
      "medianPerformanceAverage": 35.777525000000004,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "medianPerformance": 76.27729065120472,
          "averagePerformance": 77.4999310627398,
          "totalKills": 4,
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
          "rankPercent": 85.63687953600444,
          "total": 16017,
          "bestAmount": 732.33919724252,
          "medianPerformance": 58.32996821151748,
          "averagePerformance": 61.077077527305875,
          "totalKills": 4,
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
          "rankPercent": 88.23619500121232,
          "total": 16562,
          "bestAmount": 1378.6686000555,
          "medianPerformance": 57.00095203161389,
          "averagePerformance": 62.17242266564776,
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
          "rankPercent": 88.80123538048403,
          "total": 16562,
          "bestAmount": 725.66187326515,
          "medianPerformance": 30.477029158862546,
          "averagePerformance": 41.20378210564916,
          "totalKills": 4,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.5803,
          "medianPerformance": 94.5625,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 2092.5932222985,
          "highestDps": 2092.5932222985,
          "spec": "Arcane",
          "allStars": {
            "points": 106.11,
            "rank": 1574,
            "rankPercent": 94.24715649343524,
            "total": 27343
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.4104,
          "medianPerformance": 65.4004,
          "totalKills": 3,
          "fastestKill": 197785,
          "bestAmount": 1490.0871690045,
          "highestDps": 1490.0871690045,
          "spec": "Arcane",
          "allStars": {
            "points": 97.08,
            "rank": 3079,
            "rankPercent": 88.84701789984781,
            "total": 27598
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 96.0537,
          "medianPerformance": 95.6808,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1680.1318388338,
          "highestDps": 1680.1318388338,
          "spec": "Arcane",
          "allStars": {
            "points": 106.73,
            "rank": 1601,
            "rankPercent": 94.09027110881289,
            "total": 27074
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 91.8456,
          "medianPerformance": 91.435,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1791.0032919023,
          "highestDps": 1791.0032919023,
          "spec": "Arcane",
          "allStars": {
            "points": 100.15,
            "rank": 2859,
            "rankPercent": 89.1314268329784,
            "total": 26296
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 93.601,
          "medianPerformance": 89.9477,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1819.6509119435,
          "highestDps": 1819.6509119435,
          "spec": "Arcane",
          "allStars": {
            "points": 104.17,
            "rank": 2183,
            "rankPercent": 91.54525728456292,
            "total": 25808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.5251,
          "medianPerformance": 96.3655,
          "totalKills": 3,
          "fastestKill": 409306,
          "bestAmount": 1166.4231650648,
          "highestDps": 1166.4231650648,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 1113,
            "rankPercent": 95.02238137869293,
            "total": 22340
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 91.2233,
          "medianPerformance": 71.733,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1374.8381993384,
          "highestDps": 1374.8381993384,
          "spec": "Arcane",
          "allStars": {
            "points": 101.14,
            "rank": 3192,
            "rankPercent": 88.08661564308382,
            "total": 26785
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 73.5779,
          "medianPerformance": 68.1039,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 1494.1109106283,
          "highestDps": 1494.1109106283,
          "spec": "Arcane",
          "allStars": {
            "points": 80.15,
            "rank": 8213,
            "rankPercent": 68.75309158707812,
            "total": 26281
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.8756,
          "medianPerformance": 84.8627,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 1855.6753932563,
          "highestDps": 1855.6753932563,
          "spec": "Arcane",
          "allStars": {
            "points": 102.76,
            "rank": 1901,
            "rankPercent": 92.74587660354307,
            "total": 26192
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 88.1114,
          "medianPerformance": 59.5235,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 1220.9935698619,
          "highestDps": 1220.9935698619,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 3387,
            "rankPercent": 84.84265186445231,
            "total": 22339
          }
        }
      ],
      "bestPerformanceAverage": 91.77097499999999,
      "medianPerformanceAverage": 82.71575,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "bozer": {
      "characterName": "Bozer",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 98116473,
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
          "id": 29349,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_06.jpg",
          "itemLevel": 110,
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
          "id": 6125,
          "slot": 4,
          "quality": 2,
          "icon": "inv_chest_leather_04.jpg",
          "itemLevel": 1,
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
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 911,
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
          "id": 29020,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_54.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 1594,
          "temporaryEnchantID": null
        },
        {
          "id": 29283,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
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
          "id": 27892,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_08.jpg",
          "itemLevel": 112,
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
          "id": 28729,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_74.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2506
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
          "id": 15199,
          "slot": 19,
          "quality": 2,
          "icon": "inv_misc_tabardpvp_04.jpg",
          "itemLevel": 40,
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
          "rankPercent": 14.854033117913154,
          "total": 587,
          "bestAmount": 693.75594461867,
          "medianPerformance": 14.854033117913154,
          "averagePerformance": 14.854033117913154,
          "totalKills": 1,
          "fastestKill": 9557059,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 6.872671235692337,
          "total": 587,
          "bestAmount": 258.6020322897,
          "medianPerformance": 6.872671235692337,
          "averagePerformance": 6.872671235692337,
          "totalKills": 1,
          "fastestKill": 9557102,
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
          "rankPercent": 34.9257,
          "medianPerformance": 34.9257,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 740.89444791427,
          "highestDps": 740.89444791427,
          "spec": "Arms",
          "allStars": {
            "points": 35.27,
            "rank": 5979,
            "rankPercent": 22.201978136387297,
            "total": 7684
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 18.8055,
          "medianPerformance": 18.8055,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 498.31398098842,
          "highestDps": 498.31398098842,
          "spec": "Arms",
          "allStars": {
            "points": 26.38,
            "rank": 7295,
            "rankPercent": 6.845466155810984,
            "total": 7830
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 33.0934,
          "medianPerformance": 33.0934,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 631.19130335567,
          "highestDps": 631.19130335567,
          "spec": "Arms",
          "allStars": {
            "points": 37.25,
            "rank": 6254,
            "rankPercent": 20.918173770077146,
            "total": 7907
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 10.8909,
          "medianPerformance": 10.8909,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 688.31722172553,
          "highestDps": 688.31722172553,
          "spec": "Arms",
          "allStars": {
            "points": 22.05,
            "rank": 6307,
            "rankPercent": 4.032871709024501,
            "total": 6571
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 46.6983,
          "medianPerformance": 46.6983,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1031.2973134749,
          "highestDps": 1031.2973134749,
          "spec": "Arms",
          "allStars": {
            "points": 63.04,
            "rank": 4602,
            "rankPercent": 38.832757245413454,
            "total": 7522
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 52.3179,
          "medianPerformance": 52.3179,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 629.15152274721,
          "highestDps": 629.15152274721,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 3812,
            "rankPercent": 42.12604403948367,
            "total": 6585
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
      "bestPerformanceAverage": 28.88276,
      "medianPerformanceAverage": 28.88276,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28228,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 25695,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27773,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 31288,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 109,
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
          "id": 27474,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 31277,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_ahnqiraj_01.jpg",
          "itemLevel": 106,
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
          "rankPercent": 63.28056803574253,
          "total": 3055,
          "bestAmount": 997.95653160321,
          "medianPerformance": 53.933263689796696,
          "averagePerformance": 55.59085301717984,
          "totalKills": 4,
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
          "rankPercent": 77.87181614403724,
          "total": 3055,
          "bestAmount": 496.16000820113,
          "medianPerformance": 69.57294550070033,
          "averagePerformance": 56.28952966473701,
          "totalKills": 4,
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
          "rankPercent": 73.74247756040232,
          "total": 4750,
          "bestAmount": 954.96457473583,
          "medianPerformance": 61.911963158359185,
          "averagePerformance": 61.911963158359185,
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
          "rankPercent": 71.16066228010929,
          "total": 4750,
          "bestAmount": 492.70876365751,
          "medianPerformance": 61.32529460256326,
          "averagePerformance": 61.32529460256326,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 85.5295,
          "medianPerformance": 78.7817,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1362.2270137442,
          "highestDps": 1362.2270137442,
          "spec": "Survival",
          "allStars": {
            "points": 82.61,
            "rank": 2158,
            "rankPercent": 71.513470681458,
            "total": 7572
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 69.178,
          "medianPerformance": 42.7857,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 846.59220574762,
          "highestDps": 846.59220574762,
          "spec": "Survival",
          "allStars": {
            "points": 52.25,
            "rank": 4276,
            "rankPercent": 44.2560959707915,
            "total": 7669
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 91.6027,
          "medianPerformance": 79.5016,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1211.1047203158,
          "highestDps": 1211.1047203158,
          "spec": "Survival",
          "allStars": {
            "points": 97.17,
            "rank": 1124,
            "rankPercent": 85.13370399788192,
            "total": 7554
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 90.9235,
          "medianPerformance": 80.5584,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1739.8354917442,
          "highestDps": 1739.8354917442,
          "spec": "Survival",
          "allStars": {
            "points": 102.35,
            "rank": 777,
            "rankPercent": 89.45652173913044,
            "total": 7360
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 27.3073,
          "medianPerformance": 23.8433,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1081.682682879,
          "highestDps": 1081.682682879,
          "spec": "Survival",
          "allStars": {
            "points": 52.72,
            "rank": 5808,
            "rankPercent": 20.1786941580756,
            "total": 7275
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 90.2345,
          "medianPerformance": 54.9625,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 855.73049517169,
          "highestDps": 855.73049517169,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 1037,
            "rankPercent": 84.02220851326342,
            "total": 6484
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 77.8238,
          "medianPerformance": 75.0714,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 951.04271537466,
          "highestDps": 951.04271537466,
          "spec": "Survival",
          "allStars": {
            "points": 85.48,
            "rank": 1981,
            "rankPercent": 72.65571053721861,
            "total": 7241
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 76.2238,
          "medianPerformance": 74.5532,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 993.23537048997,
          "highestDps": 993.23537048997,
          "spec": "Survival",
          "allStars": {
            "points": 79.57,
            "rank": 2377,
            "rankPercent": 67.69105248844167,
            "total": 7354
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 76.6798,
          "medianPerformance": 51.5791,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 1398.5837174152,
          "highestDps": 1398.5837174152,
          "spec": "Survival",
          "allStars": {
            "points": 83.46,
            "rank": 1974,
            "rankPercent": 72.65419265419266,
            "total": 7215
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 58.6587,
          "medianPerformance": 48.6755,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 832.82811377154,
          "highestDps": 832.82811377154,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 2895,
            "rankPercent": 54.0707824154896,
            "total": 6301
          }
        }
      ],
      "bestPerformanceAverage": 74.40855,
      "medianPerformanceAverage": 63.33429999999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28585,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_09.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2671,
          "temporaryEnchantID": null
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
          "rankPercent": 92.2935334577552,
          "total": 17067,
          "bestAmount": 1495.4820766281,
          "medianPerformance": 92.2935334577552,
          "averagePerformance": 93.04779503234447,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 91.76384381716689,
          "total": 10783,
          "bestAmount": 763.07012593019,
          "medianPerformance": 76.25979284110879,
          "averagePerformance": 69.61401549972118,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 91.94241998032977,
          "total": 10635,
          "bestAmount": 1373.3633566503,
          "medianPerformance": 72.86333673528382,
          "averagePerformance": 76.32977928766341,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 91.62581494842657,
          "total": 10635,
          "bestAmount": 716.67226985732,
          "medianPerformance": 71.06085454277414,
          "averagePerformance": 69.83589383201678,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7588,
          "medianPerformance": 98.1875,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 2350.9814314537,
          "highestDps": 2350.9814314537,
          "spec": "Arcane",
          "allStars": {
            "points": 111.26,
            "rank": 547,
            "rankPercent": 98.00314522912629,
            "total": 27343
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 99.4118,
          "medianPerformance": 98.6244,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1966.3540768631,
          "highestDps": 1966.3540768631,
          "spec": "Arcane",
          "allStars": {
            "points": 109.9,
            "rank": 206,
            "rankPercent": 99.2571925501848,
            "total": 27598
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 99.3958,
          "medianPerformance": 89.8797,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 2125.0452855372,
          "highestDps": 2125.0452855372,
          "spec": "Arcane",
          "allStars": {
            "points": 115.14,
            "rank": 198,
            "rankPercent": 99.27236463027259,
            "total": 27074
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 98.2029,
          "medianPerformance": 95.8132,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1849.3047999033,
          "highestDps": 1849.3047999033,
          "spec": "Arcane",
          "allStars": {
            "points": 102.13,
            "rank": 2424,
            "rankPercent": 90.78567082446,
            "total": 26296
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.4302,
          "medianPerformance": 95.2575,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 2041.5450163403,
          "highestDps": 2041.5450163403,
          "spec": "Arcane",
          "allStars": {
            "points": 111.15,
            "rank": 745,
            "rankPercent": 97.11717296962182,
            "total": 25808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 91.4377,
          "medianPerformance": 86.8557,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 978.25797797392,
          "highestDps": 978.25797797392,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 4978,
            "rankPercent": 77.72157564905999,
            "total": 22340
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 96.4919,
          "medianPerformance": 96.0603,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 1555.0039549762,
          "highestDps": 1555.0039549762,
          "spec": "Arcane",
          "allStars": {
            "points": 110.2,
            "rank": 1169,
            "rankPercent": 95.63935038267687,
            "total": 26785
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.5207,
          "medianPerformance": 96.2945,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 2155.7583803518,
          "highestDps": 2155.7583803518,
          "spec": "Arcane",
          "allStars": {
            "points": 113.84,
            "rank": 428,
            "rankPercent": 98.37525208325407,
            "total": 26281
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.8019,
          "medianPerformance": 98.4858,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 2105.3896414888,
          "highestDps": 2105.3896414888,
          "spec": "Arcane",
          "allStars": {
            "points": 109.57,
            "rank": 430,
            "rankPercent": 98.36209529627367,
            "total": 26192
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 83.6466,
          "medianPerformance": 54.8254,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 1130.8168773068,
          "highestDps": 1130.8168773068,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 5679,
            "rankPercent": 74.58256860199651,
            "total": 22339
          }
        }
      ],
      "bestPerformanceAverage": 98.50175000000002,
      "medianPerformanceAverage": 96.0753625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 30228,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_85.jpg",
          "itemLevel": 133,
          "permanentEnchantID": 2999,
          "temporaryEnchantID": null
        },
        {
          "id": 24095,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_31.jpg",
          "itemLevel": 114,
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
          "id": 24801,
          "slot": 10,
          "quality": 2,
          "icon": "inv_gauntlets_23.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2988,
          "temporaryEnchantID": null
        },
        {
          "id": 29279,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31399,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_69.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24125,
          "slot": 13,
          "quality": 3,
          "icon": "inv_jewelcrafting_truesilvercrab.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32658,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_armorkit_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25043,
          "slot": 15,
          "quality": 2,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2620,
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
          "rankPercent": 72.78913107490459,
          "total": 4138,
          "bestAmount": 601.49492156234,
          "medianPerformance": 72.78913107490459,
          "averagePerformance": 71.23129319856103,
          "totalKills": 3,
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
          "rankPercent": 91.1886684363123,
          "total": 2956,
          "bestAmount": 366.31390397036,
          "medianPerformance": 85.21892414928897,
          "averagePerformance": 73.55718470261704,
          "totalKills": 3,
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
          "rankPercent": 86.66086231901707,
          "total": 4561,
          "bestAmount": 621.45812277781,
          "medianPerformance": 73.45400288355795,
          "averagePerformance": 75.73170068668492,
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
          "rankPercent": 87.72838957086098,
          "total": 4561,
          "bestAmount": 361.4324618654,
          "medianPerformance": 84.01647394953851,
          "averagePerformance": 75.59952989166833,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.8221,
          "medianPerformance": 94.8221,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 721.22009090649,
          "highestDps": 721.22009090649,
          "spec": "Guardian",
          "allStars": {
            "points": 104.46,
            "rank": 482,
            "rankPercent": 91.9753086419753,
            "total": 5994
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 93.216,
          "medianPerformance": 92.4837,
          "totalKills": 3,
          "fastestKill": 186240,
          "bestAmount": 679.5055236747,
          "highestDps": 679.5055236747,
          "spec": "Guardian",
          "allStars": {
            "points": 104.97,
            "rank": 478,
            "rankPercent": 92.01673640167364,
            "total": 5975
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 88.0145,
          "medianPerformance": 81.6323,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 674.03620785107,
          "highestDps": 674.03620785107,
          "spec": "Guardian",
          "allStars": {
            "points": 96.87,
            "rank": 1052,
            "rankPercent": 84.92757780008604,
            "total": 6973
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 83.2056,
          "medianPerformance": 81.6018,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 821.0292991577,
          "highestDps": 821.0292991577,
          "spec": "Guardian",
          "allStars": {
            "points": 91.96,
            "rank": 1873,
            "rankPercent": 80.39174609825076,
            "total": 9547
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 87.6579,
          "medianPerformance": 84.1845,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 778.48216290183,
          "highestDps": 778.48216290183,
          "spec": "Guardian",
          "allStars": {
            "points": 97.76,
            "rank": 1261,
            "rankPercent": 83.24245245378374,
            "total": 7519
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 79.2693,
          "medianPerformance": 48.9094,
          "totalKills": 3,
          "fastestKill": 409306,
          "bestAmount": 442.93156327813,
          "highestDps": 442.93156327813,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 1194,
            "rankPercent": 77.5836151822623,
            "total": 5322
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 96.7305,
          "medianPerformance": 93.4993,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 584.46354091759,
          "highestDps": 584.46354091759,
          "spec": "Guardian",
          "allStars": {
            "points": 110.69,
            "rank": 429,
            "rankPercent": 95.97479544813316,
            "total": 10633
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 90.8872,
          "medianPerformance": 84.2559,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 897.90469595787,
          "highestDps": 897.90469595787,
          "spec": "Guardian",
          "allStars": {
            "points": 105,
            "rank": 1070,
            "rankPercent": 89.78792510508215,
            "total": 10468
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.2017,
          "medianPerformance": 87.5521,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 850.61599407949,
          "highestDps": 850.61599407949,
          "spec": "Guardian",
          "allStars": {
            "points": 102.98,
            "rank": 560,
            "rankPercent": 91.70500074194985,
            "total": 6739
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 83.9966,
          "medianPerformance": 67.2181,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 532.72067171184,
          "highestDps": 532.72067171184,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 622,
            "rankPercent": 83.44441482271394,
            "total": 3751
          }
        }
      ],
      "bestPerformanceAverage": 91.0919375,
      "medianPerformanceAverage": 87.5039625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28530,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_04.jpg",
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
          "id": 28783,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_20.jpg",
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
          "rankPercent": 80.62895746564872,
          "total": 12814,
          "bestAmount": 1161.1197185372,
          "medianPerformance": 54.90465678908419,
          "averagePerformance": 54.90465678908419,
          "totalKills": 2,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 90.64525754877972,
          "total": 12814,
          "bestAmount": 715.14478516778,
          "medianPerformance": 56.866824741862885,
          "averagePerformance": 56.866824741862885,
          "totalKills": 2,
          "fastestKill": 4906131,
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
          "medianPerformance": 72.5524368811474,
          "averagePerformance": 72.5524368811474,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 83.74394320734054,
          "total": 12341,
          "bestAmount": 666.49450025286,
          "medianPerformance": 57.842326703304366,
          "averagePerformance": 57.842326703304366,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.6119,
          "medianPerformance": 94.0634,
          "totalKills": 2,
          "fastestKill": 104943,
          "bestAmount": 1726.1595608297,
          "highestDps": 1726.1595608297,
          "spec": "Destruction",
          "allStars": {
            "points": 101.95,
            "rank": 2988,
            "rankPercent": 89.5778087927425,
            "total": 28660
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.0421,
          "medianPerformance": 87.3463,
          "totalKills": 2,
          "fastestKill": 186240,
          "bestAmount": 1249.4392651704,
          "highestDps": 1249.4392651704,
          "spec": "Destruction",
          "allStars": {
            "points": 88.93,
            "rank": 5953,
            "rankPercent": 79.52387505160314,
            "total": 29068
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 9.962,
          "medianPerformance": 6.86239,
          "totalKills": 2,
          "fastestKill": 193273,
          "bestAmount": 411.75435782546,
          "highestDps": 411.75435782546,
          "spec": "Destruction",
          "allStars": {
            "points": 23.13,
            "rank": 26291,
            "rankPercent": 4.959872749620418,
            "total": 27662
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.0697,
          "medianPerformance": 57.9555,
          "totalKills": 2,
          "fastestKill": 124065,
          "bestAmount": 1832.4346108895,
          "highestDps": 1832.4346108895,
          "spec": "Destruction",
          "allStars": {
            "points": 108,
            "rank": 1527,
            "rankPercent": 94.53536257833483,
            "total": 27925
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 89.009,
          "medianPerformance": 83.341,
          "totalKills": 2,
          "fastestKill": 187082,
          "bestAmount": 1622.1015383629,
          "highestDps": 1622.1015383629,
          "spec": "Destruction",
          "allStars": {
            "points": 97.71,
            "rank": 4359,
            "rankPercent": 84.21986457616686,
            "total": 27617
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 85.4551,
          "medianPerformance": 57.8595,
          "totalKills": 2,
          "fastestKill": 422887,
          "bestAmount": 965.29708160022,
          "highestDps": 965.29708160022,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 4777,
            "rankPercent": 80.24813895781638,
            "total": 24180
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 95.0854,
          "medianPerformance": 90.0762,
          "totalKills": 2,
          "fastestKill": 291538,
          "bestAmount": 1410.3496587776,
          "highestDps": 1410.3496587776,
          "spec": "Destruction",
          "allStars": {
            "points": 105.45,
            "rank": 2573,
            "rankPercent": 90.57771916327802,
            "total": 27297
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 92.2941,
          "medianPerformance": 80.796,
          "totalKills": 2,
          "fastestKill": 158564,
          "bestAmount": 1775.2447875388,
          "highestDps": 1775.2447875388,
          "spec": "Destruction",
          "allStars": {
            "points": 102.84,
            "rank": 3157,
            "rankPercent": 88.48847388386343,
            "total": 27416
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 92.839,
          "medianPerformance": 56.6817,
          "totalKills": 2,
          "fastestKill": 110703,
          "bestAmount": 1574.8534366729,
          "highestDps": 1574.8534366729,
          "spec": "Destruction",
          "allStars": {
            "points": 99.13,
            "rank": 3039,
            "rankPercent": 88.87749871860585,
            "total": 27314
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 72.6785,
          "medianPerformance": 66.4766,
          "totalKills": 2,
          "fastestKill": 439454,
          "bestAmount": 1022.769163553,
          "highestDps": 1022.769163553,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 8149,
            "rankPercent": 65.38657604078165,
            "total": 23540
          }
        }
      ],
      "bestPerformanceAverage": 82.98915,
      "medianPerformanceAverage": 69.64031125,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "medianPerformance": 67.41222351046734,
          "averagePerformance": 67.41222351046734,
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
          "rankPercent": 72.77395524693276,
          "total": 6314,
          "bestAmount": 407.75481410999,
          "medianPerformance": 72.77395524693276,
          "averagePerformance": 72.77395524693276,
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
          "rankPercent": 57.29500575051636,
          "total": 6398,
          "bestAmount": 639.99185649989,
          "medianPerformance": 57.29500575051636,
          "averagePerformance": 57.29500575051636,
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
          "rankPercent": 73.00653941426788,
          "total": 6398,
          "bestAmount": 376.74481479856,
          "medianPerformance": 73.00653941426788,
          "averagePerformance": 73.00653941426788,
          "totalKills": 1,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 80.7523,
          "medianPerformance": 80.7523,
          "totalKills": 1,
          "fastestKill": 102130,
          "bestAmount": 1261.6077548223,
          "highestDps": 1261.6077548223,
          "spec": "Feral",
          "allStars": {
            "points": 90,
            "rank": 2084,
            "rankPercent": 79.71762414800389,
            "total": 10270
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 41.492,
          "medianPerformance": 41.492,
          "totalKills": 1,
          "fastestKill": 197785,
          "bestAmount": 651.86439821018,
          "highestDps": 651.86439821018,
          "spec": "Feral",
          "allStars": {
            "points": 44.5,
            "rank": 7362,
            "rankPercent": 37.803126320236586,
            "total": 11835
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 83.8701,
          "medianPerformance": 83.8701,
          "totalKills": 1,
          "fastestKill": 163533,
          "bestAmount": 1095.9500528945,
          "highestDps": 1095.9500528945,
          "spec": "Feral",
          "allStars": {
            "points": 93.85,
            "rank": 1650,
            "rankPercent": 83.02624806999485,
            "total": 9715
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 29.0784,
          "medianPerformance": 29.0784,
          "totalKills": 1,
          "fastestKill": 115131,
          "bestAmount": 545.83040189002,
          "highestDps": 545.83040189002,
          "spec": "Guardian",
          "allStars": {
            "points": 44.75,
            "rank": 6941,
            "rankPercent": 27.30700743689117,
            "total": 9547
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 71.6482,
          "medianPerformance": 71.6482,
          "totalKills": 1,
          "fastestKill": 203960,
          "bestAmount": 1397.9358697784,
          "highestDps": 1397.9358697784,
          "spec": "Feral",
          "allStars": {
            "points": 82.63,
            "rank": 2747,
            "rankPercent": 70.14243775144068,
            "total": 9197
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 65.356,
          "medianPerformance": 65.356,
          "totalKills": 1,
          "fastestKill": 409306,
          "bestAmount": 687.74950770328,
          "highestDps": 687.74950770328,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 2955,
            "rankPercent": 64.41821247892074,
            "total": 8302
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 88.4921,
          "medianPerformance": 88.4921,
          "totalKills": 1,
          "fastestKill": 278120,
          "bestAmount": 645.39767007047,
          "highestDps": 645.39767007047,
          "spec": "Warden",
          "allStars": {
            "points": 100.15,
            "rank": 346,
            "rankPercent": 87.48639825897715,
            "total": 2757
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 49.9981,
          "medianPerformance": 49.9981,
          "totalKills": 1,
          "fastestKill": 150193,
          "bestAmount": 833.78053571072,
          "highestDps": 833.78053571072,
          "spec": "Feral",
          "allStars": {
            "points": 57.55,
            "rank": 4287,
            "rankPercent": 48.42979184213693,
            "total": 8311
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 44.4109,
          "medianPerformance": 44.4109,
          "totalKills": 1,
          "fastestKill": 107182,
          "bestAmount": 878.32845067269,
          "highestDps": 878.32845067269,
          "spec": "Feral",
          "allStars": {
            "points": 49.26,
            "rank": 6206,
            "rankPercent": 41.41252006420546,
            "total": 10591
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 55.1119,
          "medianPerformance": 55.1119,
          "totalKills": 1,
          "fastestKill": 427207,
          "bestAmount": 508.58951281229,
          "highestDps": 508.58951281229,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 4894,
            "rankPercent": 51.835810611280635,
            "total": 10159
          }
        }
      ],
      "bestPerformanceAverage": 61.217762500000006,
      "medianPerformanceAverage": 61.217762500000006,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
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
          "rankPercent": 79.84773474094723,
          "total": 10512,
          "bestAmount": 1324.1018688874,
          "medianPerformance": 63.726878494189066,
          "averagePerformance": 61.44133654082387,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 87.8140389929552,
          "total": 10512,
          "bestAmount": 651.34604029122,
          "medianPerformance": 53.29078606870854,
          "averagePerformance": 57.166152854531525,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 86.83902531610941,
          "total": 10144,
          "bestAmount": 1224.8822557016,
          "medianPerformance": 75.06727955116497,
          "averagePerformance": 63.134234082830595,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 91.03870359328039,
          "total": 10144,
          "bestAmount": 662.92809334437,
          "medianPerformance": 45.930497675028974,
          "averagePerformance": 56.889535675198545,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.9883,
          "medianPerformance": 83.0471,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 2086.9805513469,
          "highestDps": 2086.9805513469,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.31,
            "rank": 1548,
            "rankPercent": 93.91495889548834,
            "total": 25423
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 93.045,
          "medianPerformance": 84.4793,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1442.4720790378,
          "highestDps": 1442.4720790378,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.32,
            "rank": 2803,
            "rankPercent": 89.11675600093218,
            "total": 25746
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 76.4983,
          "medianPerformance": 69.1555,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1156.3280954919,
          "highestDps": 1156.3280954919,
          "spec": "BeastMastery",
          "allStars": {
            "points": 79.61,
            "rank": 7352,
            "rankPercent": 70.99625172617873,
            "total": 25345
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 91.9726,
          "medianPerformance": 85.2294,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 2017.8042579347,
          "highestDps": 2017.8042579347,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.24,
            "rank": 2942,
            "rankPercent": 88.07283640197907,
            "total": 24658
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 90.6195,
          "medianPerformance": 80.4647,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 2004.8053794593,
          "highestDps": 2004.8053794593,
          "spec": "BeastMastery",
          "allStars": {
            "points": 101.72,
            "rank": 2764,
            "rankPercent": 88.6910609037328,
            "total": 24432
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 71.9135,
          "medianPerformance": 36.7373,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 893.33557191401,
          "highestDps": 893.33557191401,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 6896,
            "rankPercent": 67.25243410116362,
            "total": 21055
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 77.6951,
          "medianPerformance": 71.1239,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 1027.1422593281,
          "highestDps": 1027.1422593281,
          "spec": "BeastMastery",
          "allStars": {
            "points": 81.27,
            "rank": 7155,
            "rankPercent": 70.351029881056,
            "total": 24129
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.5118,
          "medianPerformance": 98.0203,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1936.6391872242,
          "highestDps": 1936.6391872242,
          "spec": "BeastMastery",
          "allStars": {
            "points": 114.97,
            "rank": 224,
            "rankPercent": 99.07388180572283,
            "total": 24079
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.4503,
          "medianPerformance": 79.1358,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 2071.4072789355,
          "highestDps": 2071.4072789355,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.28,
            "rank": 892,
            "rankPercent": 96.29521829521829,
            "total": 24050
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 97.0704,
          "medianPerformance": 68.884,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 1244.608081847,
          "highestDps": 1244.608081847,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 936,
            "rankPercent": 95.46116504854369,
            "total": 20600
          }
        }
      ],
      "bestPerformanceAverage": 90.3476125,
      "medianPerformanceAverage": 81.332,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 24116,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_28.jpg",
          "itemLevel": 114,
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
          "rankPercent": 98.89208097550365,
          "medianPerformance": 92.34251635300254,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 171.38319502256,
          "highestDps": 171.38319502256,
          "spec": "Shadow",
          "allStars": {
            "points": 110.11089652354327,
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
            "points": 102.25010042819709,
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
            "points": 101.46419857898019,
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
      "bestPerformanceAverage": 84.55928139596858,
      "medianPerformanceAverage": 61.06763139714306,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
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
          "id": 29333,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_29naxxramas.jpg",
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
          "id": 28517,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 115,
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
          "rankPercent": 83.47355374580609,
          "total": 9529,
          "bestAmount": 998.9429142293,
          "medianPerformance": 79.49256874284339,
          "averagePerformance": 79.49256874284339,
          "totalKills": 2,
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
          "rankPercent": 41.76140378554763,
          "total": 9529,
          "bestAmount": 397.11474714896,
          "medianPerformance": 30.542418259475447,
          "averagePerformance": 30.542418259475447,
          "totalKills": 2,
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
          "rankPercent": 77.74691176849913,
          "total": 9544,
          "bestAmount": 956.47938437322,
          "medianPerformance": 77.74691176849913,
          "averagePerformance": 77.74691176849913,
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
          "rankPercent": 23.03477145253007,
          "total": 9544,
          "bestAmount": 374.17761758738,
          "medianPerformance": 23.03477145253007,
          "averagePerformance": 23.03477145253007,
          "totalKills": 1,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 90.5636,
          "medianPerformance": 86.4487,
          "totalKills": 2,
          "fastestKill": 116972,
          "bestAmount": 976.47300208597,
          "highestDps": 976.47300208597,
          "spec": "Elemental",
          "allStars": {
            "points": 89.77,
            "rank": 2802,
            "rankPercent": 80.60517933804182,
            "total": 14442
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 91.4651,
          "medianPerformance": 90.203,
          "totalKills": 2,
          "fastestKill": 170511,
          "bestAmount": 1127.0064687909,
          "highestDps": 1127.0064687909,
          "spec": "Elemental",
          "allStars": {
            "points": 102.59,
            "rank": 1424,
            "rankPercent": 90.45414905748977,
            "total": 14907
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.7982,
          "medianPerformance": 82.4803,
          "totalKills": 2,
          "fastestKill": 157335,
          "bestAmount": 1349.4136714653,
          "highestDps": 1349.4136714653,
          "spec": "Elemental",
          "allStars": {
            "points": 112.83,
            "rank": 341,
            "rankPercent": 97.64689597896049,
            "total": 14449
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 82.5424,
          "medianPerformance": 71.4782,
          "totalKills": 2,
          "fastestKill": 142669,
          "bestAmount": 1422.600564944,
          "highestDps": 1422.600564944,
          "spec": "Elemental",
          "allStars": {
            "points": 92.62,
            "rank": 2589,
            "rankPercent": 81.28570395545593,
            "total": 13829
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 64.7578,
          "medianPerformance": 56.2855,
          "totalKills": 2,
          "fastestKill": 189409,
          "bestAmount": 1184.6321980476,
          "highestDps": 1184.6321980476,
          "spec": "Elemental",
          "allStars": {
            "points": 75.68,
            "rank": 5231,
            "rankPercent": 62.4847571910193,
            "total": 13941
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 96.2936,
          "medianPerformance": 76.5594,
          "totalKills": 2,
          "fastestKill": 497362,
          "bestAmount": 821.85402247702,
          "highestDps": 821.85402247702,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 935,
            "rankPercent": 92.55064603605041,
            "total": 12538
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 71.3912,
          "medianPerformance": 71.3912,
          "totalKills": 1,
          "fastestKill": 302151,
          "bestAmount": 912.04728761447,
          "highestDps": 912.04728761447,
          "spec": "Elemental",
          "allStars": {
            "points": 81.32,
            "rank": 4414,
            "rankPercent": 68.48532457330572,
            "total": 14003
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 89.1046,
          "medianPerformance": 89.1046,
          "totalKills": 1,
          "fastestKill": 150650,
          "bestAmount": 1321.9581812147,
          "highestDps": 1321.9581812147,
          "spec": "Elemental",
          "allStars": {
            "points": 103.39,
            "rank": 1618,
            "rankPercent": 88.22201179983975,
            "total": 13729
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 57.3687,
          "medianPerformance": 57.3687,
          "totalKills": 1,
          "fastestKill": 116928,
          "bestAmount": 991.09708538588,
          "highestDps": 991.09708538588,
          "spec": "Elemental",
          "allStars": {
            "points": 63.32,
            "rank": 6450,
            "rankPercent": 54.314253329555115,
            "total": 14116
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 81.1901,
          "medianPerformance": 81.1901,
          "totalKills": 1,
          "fastestKill": 573821,
          "bestAmount": 876.8692675939,
          "highestDps": 876.8692675939,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 2479,
            "rankPercent": 79.45443993035403,
            "total": 12061
          }
        }
      ],
      "bestPerformanceAverage": 80.62395000000001,
      "medianPerformanceAverage": 75.595025,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "medianPerformance": 68.87511933330383,
          "averagePerformance": 68.91168444666296,
          "totalKills": 4,
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
          "rankPercent": 86.78935867701591,
          "total": 18123,
          "bestAmount": 707.05529815448,
          "medianPerformance": 72.02384694803082,
          "averagePerformance": 70.36358792553774,
          "totalKills": 4,
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
          "medianPerformance": 92.29404626377621,
          "averagePerformance": 73.92198197644201,
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
          "rankPercent": 90.08614364470047,
          "total": 18270,
          "bestAmount": 747.70355058746,
          "medianPerformance": 72.89867878624,
          "averagePerformance": 57.599041772458996,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.675,
          "medianPerformance": 97.4729,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 2164.2451373073,
          "highestDps": 2164.2451373073,
          "spec": "Destruction",
          "allStars": {
            "points": 114.37,
            "rank": 288,
            "rankPercent": 98.99860432658758,
            "total": 28660
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 84.634,
          "medianPerformance": 68.6238,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 1197.5277739314,
          "highestDps": 1197.5277739314,
          "spec": "Destruction",
          "allStars": {
            "points": 82.97,
            "rank": 7595,
            "rankPercent": 73.87505160313746,
            "total": 29068
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.1736,
          "medianPerformance": 89.4898,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1552.0659438768,
          "highestDps": 1552.0659438768,
          "spec": "Destruction",
          "allStars": {
            "points": 110.97,
            "rank": 999,
            "rankPercent": 96.39216253343938,
            "total": 27662
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.7408,
          "medianPerformance": 95.7642,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1855.6612836497,
          "highestDps": 1855.6612836497,
          "spec": "Destruction",
          "allStars": {
            "points": 108.73,
            "rank": 1369,
            "rankPercent": 95.10116383169203,
            "total": 27925
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.6322,
          "medianPerformance": 98.1754,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1986.4924494999,
          "highestDps": 1986.4924494999,
          "spec": "Destruction",
          "allStars": {
            "points": 114.5,
            "rank": 487,
            "rankPercent": 98.24021436071985,
            "total": 27617
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 95.8298,
          "medianPerformance": 89.2369,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 1091.7724147704,
          "highestDps": 1091.7724147704,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 1244,
            "rankPercent": 94.85938792390405,
            "total": 24180
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 98.8342,
          "medianPerformance": 82.6723,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1588.2568675392,
          "highestDps": 1588.2568675392,
          "spec": "Destruction",
          "allStars": {
            "points": 114.9,
            "rank": 463,
            "rankPercent": 98.30750631937576,
            "total": 27297
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.7534,
          "medianPerformance": 97.7577,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 2156.0592038244,
          "highestDps": 2156.0592038244,
          "spec": "Destruction",
          "allStars": {
            "points": 116.81,
            "rank": 106,
            "rankPercent": 99.61701196381675,
            "total": 27416
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.2894,
          "medianPerformance": 99.2631,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 1912.7558731877,
          "highestDps": 1912.7558731877,
          "spec": "Destruction",
          "allStars": {
            "points": 111.08,
            "rank": 313,
            "rankPercent": 98.85772863732885,
            "total": 27314
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 75.4843,
          "medianPerformance": 69.86,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 1027.9286102446,
          "highestDps": 1027.9286102446,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 7886,
            "rankPercent": 66.50382327952421,
            "total": 23540
          }
        }
      ],
      "bestPerformanceAverage": 96.96657499999999,
      "medianPerformanceAverage": 91.1524,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 29086,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_81.jpg",
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
          "id": 21875,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_04.jpg",
          "itemLevel": 120,
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
          "id": 29290,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
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
          "id": 28190,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
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
          "rankPercent": 68.99879134134557,
          "total": 512,
          "bestAmount": 763.91251278619,
          "medianPerformance": 52.14323692137921,
          "averagePerformance": 54.52514262736,
          "totalKills": 3,
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
          "rankPercent": 85.2644845282615,
          "total": 6496,
          "bestAmount": 772.46603672262,
          "medianPerformance": 65.2712573736718,
          "averagePerformance": 67.84840138089167,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95,
          "medianPerformance": 90,
          "totalKills": 3,
          "fastestKill": 102130,
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
          "totalKills": 3,
          "fastestKill": 187766,
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
          "totalKills": 3,
          "fastestKill": 163533,
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
          "totalKills": 3,
          "fastestKill": 115133,
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
          "totalKills": 3,
          "fastestKill": 203960,
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
          "medianPerformance": 80,
          "totalKills": 3,
          "fastestKill": 402519,
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
          "totalKills": 3,
          "fastestKill": 278120,
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
          "totalKills": 3,
          "fastestKill": 150193,
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
          "totalKills": 3,
          "fastestKill": 107182,
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
          "rankPercent": 75,
          "medianPerformance": 70,
          "totalKills": 3,
          "fastestKill": 427310,
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
      "bestPerformanceAverage": 90.31775637412139,
      "medianPerformanceAverage": 83.125,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "rankPercent": 60.719358163584495,
          "total": 2474,
          "bestAmount": 605.15688345688,
          "medianPerformance": 44.64393798976089,
          "averagePerformance": 50.001224092264685,
          "totalKills": 3,
          "fastestKill": 7492099,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps&metric=hps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "hps",
          "label": "TK healing",
          "rank": null,
          "rankPercent": 7.85315006782263,
          "total": 2333,
          "bestAmount": 428.41152551266,
          "medianPerformance": 7.85315006782263,
          "averagePerformance": 7.85315006782263,
          "totalKills": 1,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.3589,
          "medianPerformance": 79.4819,
          "totalKills": 2,
          "fastestKill": 116972,
          "bestAmount": 864.17262250795,
          "highestDps": 864.17262250795,
          "spec": "Discipline",
          "allStars": {
            "points": 110.55,
            "rank": 116,
            "rankPercent": 97.2208796520058,
            "total": 4138
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.9373,
          "medianPerformance": 70.5076,
          "totalKills": 2,
          "fastestKill": 170511,
          "bestAmount": 870.95260716317,
          "highestDps": 870.95260716317,
          "spec": "Discipline",
          "allStars": {
            "points": 103.49,
            "rank": 295,
            "rankPercent": 92.68474744961433,
            "total": 4019
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 90.8003,
          "medianPerformance": 65.1029,
          "totalKills": 2,
          "fastestKill": 157335,
          "bestAmount": 866.29167063908,
          "highestDps": 866.29167063908,
          "spec": "Discipline",
          "allStars": {
            "points": 100.56,
            "rank": 396,
            "rankPercent": 90.24209486166008,
            "total": 4048
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 52.5286,
          "medianPerformance": 40.0897,
          "totalKills": 2,
          "fastestKill": 142669,
          "bestAmount": 680.87918543176,
          "highestDps": 680.87918543176,
          "spec": "Discipline",
          "allStars": {
            "points": 52.94,
            "rank": 2404,
            "rankPercent": 43.80261927034612,
            "total": 4276
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 61.4673,
          "medianPerformance": 56.2246,
          "totalKills": 2,
          "fastestKill": 189409,
          "bestAmount": 610.97674202008,
          "highestDps": 610.97674202008,
          "spec": "Discipline",
          "allStars": {
            "points": 64.26,
            "rank": 1835,
            "rankPercent": 54.46871896722939,
            "total": 4028
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 32.3049,
          "medianPerformance": 22.08,
          "totalKills": 2,
          "fastestKill": 497362,
          "bestAmount": 448.78103420493,
          "highestDps": 448.78103420493,
          "spec": "Discipline",
          "allStars": {
            "points": 0,
            "rank": 2667,
            "rankPercent": 27.69189042582045,
            "total": 3687
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 49.4867,
          "medianPerformance": 49.4867,
          "totalKills": 1,
          "fastestKill": 302151,
          "bestAmount": 422.39807248694,
          "highestDps": 422.39807248694,
          "spec": "Discipline",
          "allStars": {
            "points": 57.01,
            "rank": 1958,
            "rankPercent": 48.89004962131105,
            "total": 3829
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 7.09798,
          "medianPerformance": 7.09798,
          "totalKills": 1,
          "fastestKill": 150650,
          "bestAmount": 743.86325921009,
          "highestDps": 743.86325921009,
          "spec": "Discipline",
          "allStars": {
            "points": 29.13,
            "rank": 2852,
            "rankPercent": 6.309562931317778,
            "total": 3043
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 43.1641,
          "medianPerformance": 43.1641,
          "totalKills": 1,
          "fastestKill": 116928,
          "bestAmount": 442.93924466338,
          "highestDps": 442.93924466338,
          "spec": "Discipline",
          "allStars": {
            "points": 47,
            "rank": 2140,
            "rankPercent": 41.76422542880479,
            "total": 3673
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 14.5649,
          "medianPerformance": 14.5649,
          "totalKills": 1,
          "fastestKill": 573821,
          "bestAmount": 345.79947405201,
          "highestDps": 345.79947405201,
          "spec": "Discipline",
          "allStars": {
            "points": 0,
            "rank": 3040,
            "rankPercent": 13.468109339407745,
            "total": 3512
          }
        }
      ],
      "bestPerformanceAverage": 61.8551475,
      "medianPerformanceAverage": 51.394435,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28803,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 125,
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
          "id": 28631,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 115,
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
          "id": 28520,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
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
          "rankPercent": 62.17050162835254,
          "total": 8486,
          "bestAmount": 698.95581162648,
          "medianPerformance": 59.02679421195943,
          "averagePerformance": 59.02679421195943,
          "totalKills": 2,
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
          "rankPercent": 95.2978017832363,
          "total": 968,
          "bestAmount": 882.47402274217,
          "medianPerformance": 87.65919236866635,
          "averagePerformance": 87.65919236866635,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.96018422594102,
          "medianPerformance": 84.98009211297051,
          "totalKills": 2,
          "fastestKill": 104943,
          "bestAmount": 130.84245733398,
          "highestDps": 130.84245733398,
          "spec": "Restoration",
          "allStars": {
            "points": 0,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 83.43930772560275,
          "medianPerformance": 76.71965386280138,
          "totalKills": 2,
          "fastestKill": 186240,
          "bestAmount": 8.3064862542955,
          "highestDps": 8.3064862542955,
          "spec": "Restoration",
          "allStars": {
            "points": 0,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 95.05244929744094,
          "medianPerformance": 92.01315650509432,
          "totalKills": 2,
          "fastestKill": 193273,
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
          "medianPerformance": 58.56917772236119,
          "totalKills": 2,
          "fastestKill": 124097,
          "bestAmount": 0.95691774698257,
          "highestDps": 0.95691774698257,
          "spec": "Restoration",
          "allStars": {
            "points": 67.17399931980488,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 76.60758770146477,
          "medianPerformance": 73.45040886302091,
          "totalKills": 2,
          "fastestKill": 187082,
          "bestAmount": 16.971233407274,
          "highestDps": 16.971233407274,
          "spec": "Restoration",
          "allStars": {
            "points": 0,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 92.46741627447281,
          "medianPerformance": 91.63099712184273,
          "totalKills": 2,
          "fastestKill": 422887,
          "bestAmount": 36.79731268247,
          "highestDps": 36.79731268247,
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
          "rankPercent": 90.09149895679579,
          "medianPerformance": 85.0457494783979,
          "totalKills": 2,
          "fastestKill": 291538,
          "bestAmount": 0.25382625935556,
          "highestDps": 0.25382625935556,
          "spec": "Restoration",
          "allStars": {
            "points": 0,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 87.25205028078653,
          "medianPerformance": 84.64570728538229,
          "totalKills": 2,
          "fastestKill": 158564,
          "bestAmount": 22.260220542807,
          "highestDps": 22.260220542807,
          "spec": "Restoration",
          "allStars": {
            "points": 88.3732510595505,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 88.47679304290754,
          "medianPerformance": 81.84783234432643,
          "totalKills": 2,
          "fastestKill": 110703,
          "bestAmount": 39.636933524879,
          "highestDps": 39.636933524879,
          "spec": "Restoration",
          "allStars": {
            "points": 89.30250792002144,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 85.38971586472286,
          "medianPerformance": 76.4469707327659,
          "totalKills": 2,
          "fastestKill": 439454,
          "bestAmount": 31.343439813951,
          "highestDps": 31.343439813951,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 85.37727833445771,
      "medianPerformanceAverage": 79.65897227179437,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "rankPercent": 99.44628363732524,
          "medianPerformance": 99.44628363732524,
          "totalKills": 1,
          "fastestKill": 104943,
          "bestAmount": 28.834700742308,
          "highestDps": 28.834700742308,
          "spec": "Restoration",
          "allStars": {
            "points": 101.31695030250285,
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
          "fastestKill": 331903,
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
          "fastestKill": 160241,
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
          "fastestKill": 110703,
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
          "fastestKill": 439454,
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
      "bestPerformanceAverage": 90.06161587057377,
      "medianPerformanceAverage": 90.06161587057377,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 24116,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_28.jpg",
          "itemLevel": 114,
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
          "id": 29519,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate07.jpg",
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
          "rankPercent": 92.60247333451892,
          "total": 5466,
          "bestAmount": 1038.2046017722,
          "medianPerformance": 90.83552036429717,
          "averagePerformance": 87.22552363235125,
          "totalKills": 3,
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
          "rankPercent": 91.02740330784269,
          "total": 5466,
          "bestAmount": 545.36339962381,
          "medianPerformance": 81.41519998407206,
          "averagePerformance": 75.39441182421636,
          "totalKills": 3,
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
          "rankPercent": 92.54069152455783,
          "total": 8984,
          "bestAmount": 1040.3321384686,
          "medianPerformance": 88.80551302720507,
          "averagePerformance": 85.54657019154475,
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
          "rankPercent": 88.49084554660787,
          "total": 8984,
          "bestAmount": 602.80173843262,
          "medianPerformance": 74.31327743859264,
          "averagePerformance": 66.64715299634283,
          "totalKills": 3,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7774,
          "medianPerformance": 96.1674,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1818.4568686968,
          "highestDps": 1818.4568686968,
          "spec": "Elemental",
          "allStars": {
            "points": 116.21,
            "rank": 51,
            "rankPercent": 99.6537875640493,
            "total": 14442
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.1523,
          "medianPerformance": 73.8235,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 1049.3344929482,
          "highestDps": 1049.3344929482,
          "spec": "Elemental",
          "allStars": {
            "points": 93.26,
            "rank": 2710,
            "rankPercent": 81.82732944254377,
            "total": 14907
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 92.0974,
          "medianPerformance": 88.0939,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1181.1316370396,
          "highestDps": 1181.1316370396,
          "spec": "Elemental",
          "allStars": {
            "points": 104.2,
            "rank": 1331,
            "rankPercent": 90.79521074122776,
            "total": 14449
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 95.1262,
          "medianPerformance": 94.0598,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1633.31335609,
          "highestDps": 1633.31335609,
          "spec": "Elemental",
          "allStars": {
            "points": 105.83,
            "rank": 963,
            "rankPercent": 93.04360402053655,
            "total": 13829
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 77.502,
          "medianPerformance": 73.6004,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1223.6673004472,
          "highestDps": 1223.6673004472,
          "spec": "Elemental",
          "allStars": {
            "points": 81.79,
            "rank": 4424,
            "rankPercent": 68.2734380603974,
            "total": 13941
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 89.7498,
          "medianPerformance": 88.1693,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 763.77134962953,
          "highestDps": 763.77134962953,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 2025,
            "rankPercent": 83.85707449353964,
            "total": 12538
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 98.9864,
          "medianPerformance": 87.3585,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1177.3515029484,
          "highestDps": 1177.3515029484,
          "spec": "Elemental",
          "allStars": {
            "points": 114.41,
            "rank": 201,
            "rankPercent": 98.57173462829394,
            "total": 14003
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.8417,
          "medianPerformance": 97.5259,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 1451.8519504904,
          "highestDps": 1451.8519504904,
          "spec": "Elemental",
          "allStars": {
            "points": 114,
            "rank": 337,
            "rankPercent": 97.55262582853813,
            "total": 13729
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 93.7088,
          "medianPerformance": 67.5111,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 1247.4561962838,
          "highestDps": 1247.4561962838,
          "spec": "Elemental",
          "allStars": {
            "points": 99.48,
            "rank": 1534,
            "rankPercent": 89.13998299801644,
            "total": 14116
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 83.4342,
          "medianPerformance": 70.2764,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 870.92377932675,
          "highestDps": 870.92377932675,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 2624,
            "rankPercent": 78.2522178923804,
            "total": 12061
          }
        }
      ],
      "bestPerformanceAverage": 93.39902500000001,
      "medianPerformanceAverage": 84.7675625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "garhard": {
      "characterName": "Garhard",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105376758,
      "gear": [],
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
          "medianPerformance": 63.60717480392406,
          "averagePerformance": 63.60717480392406,
          "totalKills": 1,
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
          "rankPercent": 66.45120003064898,
          "total": 11446,
          "bestAmount": 533.85090337086,
          "medianPerformance": 66.45120003064898,
          "averagePerformance": 66.45120003064898,
          "totalKills": 1,
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
          "rankPercent": 66.67855852944334,
          "total": 10914,
          "bestAmount": 1114.4022042318,
          "medianPerformance": 66.67855852944334,
          "averagePerformance": 66.67855852944334,
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
          "rankPercent": 45.67712173157036,
          "total": 10914,
          "bestAmount": 471.73045480462,
          "medianPerformance": 45.67712173157036,
          "averagePerformance": 45.67712173157036,
          "totalKills": 1,
          "fastestKill": 5803613,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 84.4442,
          "medianPerformance": 84.4442,
          "totalKills": 1,
          "fastestKill": 114597,
          "bestAmount": 1500.7460928297,
          "highestDps": 1500.7460928297,
          "spec": "Destruction",
          "allStars": {
            "points": 88.52,
            "rank": 6418,
            "rankPercent": 77.6099092812282,
            "total": 28660
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 28.3552,
          "medianPerformance": 28.3552,
          "totalKills": 1,
          "fastestKill": 187766,
          "bestAmount": 717.76572968482,
          "highestDps": 717.76572968482,
          "spec": "Destruction",
          "allStars": {
            "points": 31.59,
            "rank": 24266,
            "rankPercent": 16.523324618136783,
            "total": 29068
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 77.6036,
          "medianPerformance": 77.6036,
          "totalKills": 1,
          "fastestKill": 179077,
          "bestAmount": 1057.5729993243,
          "highestDps": 1057.5729993243,
          "spec": "Destruction",
          "allStars": {
            "points": 78.43,
            "rank": 8827,
            "rankPercent": 68.09341334682959,
            "total": 27662
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 62.2985,
          "medianPerformance": 62.2985,
          "totalKills": 1,
          "fastestKill": 142609,
          "bestAmount": 1251.919584318,
          "highestDps": 1251.919584318,
          "spec": "Destruction",
          "allStars": {
            "points": 61.89,
            "rank": 13381,
            "rankPercent": 52.08594449418084,
            "total": 27925
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 82.306,
          "medianPerformance": 82.306,
          "totalKills": 1,
          "fastestKill": 220836,
          "bestAmount": 1503.7765581699,
          "highestDps": 1503.7765581699,
          "spec": "Destruction",
          "allStars": {
            "points": 87.5,
            "rank": 6950,
            "rankPercent": 74.83796212477822,
            "total": 27617
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 40.3252,
          "medianPerformance": 40.3252,
          "totalKills": 1,
          "fastestKill": 402466,
          "bestAmount": 746.26179602749,
          "highestDps": 746.26179602749,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 16836,
            "rankPercent": 30.376344086021504,
            "total": 24180
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 64.3326,
          "medianPerformance": 64.3326,
          "totalKills": 1,
          "fastestKill": 307948,
          "bestAmount": 1078.4418148519,
          "highestDps": 1078.4418148519,
          "spec": "Destruction",
          "allStars": {
            "points": 67.49,
            "rank": 13329,
            "rankPercent": 51.17412169835513,
            "total": 27297
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 85.5276,
          "medianPerformance": 85.5276,
          "totalKills": 1,
          "fastestKill": 170857,
          "bestAmount": 1644.3341507811,
          "highestDps": 1644.3341507811,
          "spec": "Destruction",
          "allStars": {
            "points": 92.18,
            "rank": 5843,
            "rankPercent": 78.69127516778524,
            "total": 27416
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 72.1641,
          "medianPerformance": 72.1641,
          "totalKills": 1,
          "fastestKill": 111349,
          "bestAmount": 1323.9993174613,
          "highestDps": 1323.9993174613,
          "spec": "Destruction",
          "allStars": {
            "points": 70.49,
            "rank": 10564,
            "rankPercent": 61.32752434648898,
            "total": 27314
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 50.2486,
          "medianPerformance": 50.2486,
          "totalKills": 1,
          "fastestKill": 467406,
          "bestAmount": 894.54992019786,
          "highestDps": 894.54992019786,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 14404,
            "rankPercent": 38.81478334749363,
            "total": 23540
          }
        }
      ],
      "bestPerformanceAverage": 69.628975,
      "medianPerformanceAverage": 69.628975,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": true
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
          "id": 29030,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 120,
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
          "id": 30062,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 29032,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
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
          "id": 28661,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_36.jpg",
          "itemLevel": 115,
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
          "id": 19288,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_ticket_tarot_bluedragon_01.jpg",
          "itemLevel": 66,
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
          "temporaryEnchantID": null
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
          "rankPercent": 95.98970058197646,
          "total": 12537,
          "bestAmount": 928.36066165565,
          "medianPerformance": 30.61365576022076,
          "averagePerformance": 44.311306218263006,
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
          "rankPercent": 88.7865628185242,
          "total": 12638,
          "bestAmount": 811.48616151458,
          "medianPerformance": 21.448820979975775,
          "averagePerformance": 36.90821548439543,
          "totalKills": 4,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 65.0068,
          "medianPerformance": 65.0068,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 1112.4287721319,
          "highestDps": 1112.4287721319,
          "spec": "Enhancement",
          "allStars": {
            "points": 64.73,
            "rank": 7426,
            "rankPercent": 54.553800954829235,
            "total": 16338
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.9663,
          "medianPerformance": 95.9663,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1295.8309811148,
          "highestDps": 1295.8309811148,
          "spec": "Enhancement",
          "allStars": {
            "points": 102.95,
            "rank": 1548,
            "rankPercent": 90.51385822909002,
            "total": 16308
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 74.273,
          "medianPerformance": 74.273,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 986.23497154855,
          "highestDps": 986.23497154855,
          "spec": "Enhancement",
          "allStars": {
            "points": 73.17,
            "rank": 5969,
            "rankPercent": 62.77909442434826,
            "total": 16034
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 77.0348,
          "medianPerformance": 77.0348,
          "totalKills": 3,
          "fastestKill": 142609,
          "bestAmount": 1430.6179834372,
          "highestDps": 1430.6179834372,
          "spec": "Enhancement",
          "allStars": {
            "points": 78.31,
            "rank": 4989,
            "rankPercent": 67.82558214539121,
            "total": 15503
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 78.1494,
          "medianPerformance": 78.1494,
          "totalKills": 3,
          "fastestKill": 189409,
          "bestAmount": 1475.0719991306,
          "highestDps": 1475.0719991306,
          "spec": "Enhancement",
          "allStars": {
            "points": 83.54,
            "rank": 4618,
            "rankPercent": 70.1184389359912,
            "total": 15451
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 75.3934,
          "medianPerformance": 75.3934,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 764.6558963987,
          "highestDps": 764.6558963987,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 4555,
            "rankPercent": 66.30659958567624,
            "total": 13516
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 78.6989,
          "medianPerformance": 78.6989,
          "totalKills": 3,
          "fastestKill": 302151,
          "bestAmount": 811.81887851196,
          "highestDps": 811.81887851196,
          "spec": "Enhancement",
          "allStars": {
            "points": 80.19,
            "rank": 4987,
            "rankPercent": 67.60233918128655,
            "total": 15390
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 61.3057,
          "medianPerformance": 61.3057,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1324.247762749,
          "highestDps": 1324.247762749,
          "spec": "Enhancement",
          "allStars": {
            "points": 74.77,
            "rank": 7440,
            "rankPercent": 51.556394894503775,
            "total": 15356
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 64.6902,
          "medianPerformance": 64.6902,
          "totalKills": 3,
          "fastestKill": 111349,
          "bestAmount": 1215.6912051298,
          "highestDps": 1215.6912051298,
          "spec": "Enhancement",
          "allStars": {
            "points": 62.47,
            "rank": 7131,
            "rankPercent": 53.56258955321089,
            "total": 15354
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 56.3487,
          "medianPerformance": 56.3487,
          "totalKills": 3,
          "fastestKill": 467406,
          "bestAmount": 707.06837310604,
          "highestDps": 707.06837310604,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 7255,
            "rankPercent": 45.07458166124025,
            "total": 13207
          }
        }
      ],
      "bestPerformanceAverage": 74.3906375,
      "medianPerformanceAverage": 74.3906375,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "gromobiy": {
      "characterName": "Gromobiy",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109989823,
      "gear": [
        {
          "id": 28796,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_58.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
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
          "id": 31320,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate02.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31284,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28824,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_31.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31305,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_shortblade_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2639
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28793,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
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
          "rankPercent": 88.90893014874054,
          "total": 12814,
          "bestAmount": 1236.1883089636,
          "medianPerformance": 85.4383724225951,
          "averagePerformance": 82.30157531635582,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 90.47323265551869,
          "total": 12814,
          "bestAmount": 712.5268363197,
          "medianPerformance": 66.84558788768348,
          "averagePerformance": 66.14059941012987,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 69.12016914141181,
          "total": 19212,
          "bestAmount": 1160.2168685235,
          "medianPerformance": 55.33062595947253,
          "averagePerformance": 57.05974031268406,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 70.31880517656712,
          "total": 12341,
          "bestAmount": 582.94589903912,
          "medianPerformance": 47.078606259627435,
          "averagePerformance": 48.90526561530178,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 96.1753,
          "medianPerformance": 81.3465,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1820.388210743,
          "highestDps": 1820.388210743,
          "spec": "Destruction",
          "allStars": {
            "points": 106.22,
            "rank": 1944,
            "rankPercent": 93.22051639916259,
            "total": 28660
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 97.4532,
          "medianPerformance": 60.2517,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1387.3011997945,
          "highestDps": 1387.3011997945,
          "spec": "Destruction",
          "allStars": {
            "points": 101.73,
            "rank": 2487,
            "rankPercent": 91.447640016513,
            "total": 29068
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 94.9833,
          "medianPerformance": 92.0833,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1388.3729232743,
          "highestDps": 1388.3729232743,
          "spec": "Destruction",
          "allStars": {
            "points": 104.66,
            "rank": 2340,
            "rankPercent": 91.54435687947364,
            "total": 27662
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 96.4313,
          "medianPerformance": 96.061,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1802.418087293,
          "highestDps": 1802.418087293,
          "spec": "Destruction",
          "allStars": {
            "points": 106.93,
            "rank": 1769,
            "rankPercent": 93.66875559534468,
            "total": 27925
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 79.7001,
          "medianPerformance": 77.2261,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1507.3412562233,
          "highestDps": 1507.3412562233,
          "spec": "Destruction",
          "allStars": {
            "points": 87.83,
            "rank": 6866,
            "rankPercent": 75.14212260564145,
            "total": 27617
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 92.9172,
          "medianPerformance": 81.1522,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 1033.5824512755,
          "highestDps": 1033.5824512755,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 2451,
            "rankPercent": 89.86765922249793,
            "total": 24180
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 80.6941,
          "medianPerformance": 77.9578,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 1251.6854155704,
          "highestDps": 1251.6854155704,
          "spec": "Destruction",
          "allStars": {
            "points": 88.65,
            "rank": 6783,
            "rankPercent": 75.15477891343372,
            "total": 27297
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.0695,
          "medianPerformance": 92.1386,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1954.7958845005,
          "highestDps": 1954.7958845005,
          "spec": "Destruction",
          "allStars": {
            "points": 112.29,
            "rank": 921,
            "rankPercent": 96.64429530201342,
            "total": 27416
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 95.548,
          "medianPerformance": 66.9373,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 1626.9658455507,
          "highestDps": 1626.9658455507,
          "spec": "Destruction",
          "allStars": {
            "points": 102.87,
            "rank": 2089,
            "rankPercent": 92.35556857289302,
            "total": 27314
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 92.8644,
          "medianPerformance": 56.9198,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 1180.2213656037,
          "highestDps": 1180.2213656037,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 2367,
            "rankPercent": 89.94902293967715,
            "total": 23540
          }
        }
      ],
      "bestPerformanceAverage": 92.25685000000001,
      "medianPerformanceAverage": 80.50028750000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 33173,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2983,
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
          "id": 23522,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 32806,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_14.jpg",
          "itemLevel": 136,
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
          "id": 28746,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 23537,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 105,
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
          "id": 30061,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 128,
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
          "id": 30098,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 128,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28429,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_2h_blacksmithing_02.jpg",
          "itemLevel": 123,
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
          "rankPercent": 87.01921630017645,
          "total": 6125,
          "bestAmount": 1195.261858777,
          "medianPerformance": 20.25274625617594,
          "averagePerformance": 36.21246338400915,
          "totalKills": 4,
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
          "medianPerformance": 27.459037834577423,
          "averagePerformance": 41.446189070929975,
          "totalKills": 4,
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
          "rankPercent": 60.525924704988235,
          "total": 6039,
          "bestAmount": 961.55520077779,
          "medianPerformance": 36.62630293826933,
          "averagePerformance": 36.62630293826933,
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
          "rankPercent": 78.48739745225802,
          "total": 6039,
          "bestAmount": 546.57580574506,
          "medianPerformance": 54.18925450427464,
          "averagePerformance": 54.18925450427464,
          "totalKills": 2,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.1757,
          "medianPerformance": 43.3571,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1760.334867326,
          "highestDps": 1760.334867326,
          "spec": "Retribution",
          "allStars": {
            "points": 106.13,
            "rank": 716,
            "rankPercent": 92.59987580211137,
            "total": 9662
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 73.0543,
          "medianPerformance": 35.932,
          "totalKills": 3,
          "fastestKill": 197785,
          "bestAmount": 1122.4258664712,
          "highestDps": 1122.4258664712,
          "spec": "Retribution",
          "allStars": {
            "points": 77.94,
            "rank": 3086,
            "rankPercent": 68.61328721131346,
            "total": 9829
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 92.7063,
          "medianPerformance": 65.4108,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1415.9405135355,
          "highestDps": 1415.9405135355,
          "spec": "Retribution",
          "allStars": {
            "points": 102.48,
            "rank": 907,
            "rankPercent": 90.95627869834298,
            "total": 10018
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 74.3229,
          "medianPerformance": 60.4489,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1455.1858317916,
          "highestDps": 1455.1858317916,
          "spec": "Retribution",
          "allStars": {
            "points": 81.89,
            "rank": 2480,
            "rankPercent": 71.30454913763167,
            "total": 8639
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 93.1107,
          "medianPerformance": 34.3857,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1732.0798195725,
          "highestDps": 1732.0798195725,
          "spec": "Retribution",
          "allStars": {
            "points": 105.22,
            "rank": 777,
            "rankPercent": 91.19282714788332,
            "total": 8811
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 44.0754,
          "medianPerformance": 38.3004,
          "totalKills": 3,
          "fastestKill": 409306,
          "bestAmount": 660.8454310467,
          "highestDps": 660.8454310467,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 4896,
            "rankPercent": 40.37032525277135,
            "total": 8209
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 72.4084,
          "medianPerformance": 50.9138,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 906.43607076082,
          "highestDps": 906.43607076082,
          "spec": "Retribution",
          "allStars": {
            "points": 80.04,
            "rank": 2859,
            "rankPercent": 67.64772470002264,
            "total": 8834
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 66.8194,
          "medianPerformance": 58.9049,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 1441.3587850299,
          "highestDps": 1441.3587850299,
          "spec": "Retribution",
          "allStars": {
            "points": 75.75,
            "rank": 3533,
            "rankPercent": 62.54506892895016,
            "total": 9430
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 76.1436,
          "medianPerformance": 62.9355,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 1439.2621895468,
          "highestDps": 1439.2621895468,
          "spec": "Retribution",
          "allStars": {
            "points": 80.61,
            "rank": 2565,
            "rankPercent": 72.12134391649451,
            "total": 9197
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 35.4666,
          "medianPerformance": 19.6385,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 708.96778376759,
          "highestDps": 708.96778376759,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 5301,
            "rankPercent": 30.116033755274263,
            "total": 7584
          }
        }
      ],
      "bestPerformanceAverage": 80.3426625,
      "medianPerformanceAverage": 51.5360875,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 27826,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_33.jpg",
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
          "id": 28600,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_07.jpg",
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
          "id": 28591,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 29168,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
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
          "id": 31304,
          "slot": 16,
          "quality": 3,
          "icon": "inv_mace_34.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 25645,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_totemoflife.jpg",
          "itemLevel": 103,
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 29349,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_06.jpg",
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
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2657,
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
          "id": 28295,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_71.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
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
          "medianPerformance": 95.435249624038,
          "averagePerformance": 84.82808129082956,
          "totalKills": 3,
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
          "rankPercent": 93.78247049048866,
          "total": 9482,
          "bestAmount": 904.7291043191,
          "medianPerformance": 93.78247049048866,
          "averagePerformance": 78.97443178886623,
          "totalKills": 3,
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
          "rankPercent": 96.15703514458139,
          "total": 9485,
          "bestAmount": 1389.0162464905,
          "medianPerformance": 90.72197237201357,
          "averagePerformance": 82.9283744492803,
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
          "rankPercent": 94.24270093339229,
          "total": 9485,
          "bestAmount": 869.587037767,
          "medianPerformance": 79.08425025434724,
          "averagePerformance": 71.27904655938572,
          "totalKills": 3,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.0855,
          "medianPerformance": 98.7819,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 2170.8900421032,
          "highestDps": 2170.8900421032,
          "spec": "Fury",
          "allStars": {
            "points": 113.05,
            "rank": 242,
            "rankPercent": 98.53129380218174,
            "total": 16409
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 97.909,
          "medianPerformance": 95.5387,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 1551.7772120618,
          "highestDps": 1551.7772120618,
          "spec": "Fury",
          "allStars": {
            "points": 105.83,
            "rank": 883,
            "rankPercent": 94.73464270789803,
            "total": 16751
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.0141,
          "medianPerformance": 94.7366,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1774.0884102903,
          "highestDps": 1774.0884102903,
          "spec": "Fury",
          "allStars": {
            "points": 110.15,
            "rank": 688,
            "rankPercent": 95.89556697335405,
            "total": 16738
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 96.9989,
          "medianPerformance": 92.7084,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 2734.6801394021,
          "highestDps": 2734.6801394021,
          "spec": "Fury",
          "allStars": {
            "points": 106.48,
            "rank": 860,
            "rankPercent": 93.84008605234851,
            "total": 13945
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 88.1034,
          "medianPerformance": 86.1885,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1693.1113943911,
          "highestDps": 1693.1113943911,
          "spec": "Fury",
          "allStars": {
            "points": 97.97,
            "rank": 2420,
            "rankPercent": 84.6188084186431,
            "total": 15727
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 91.3438,
          "medianPerformance": 81.7162,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 974.82306147978,
          "highestDps": 974.82306147978,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 1505,
            "rankPercent": 88.59915100060643,
            "total": 13192
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 92.1174,
          "medianPerformance": 91.6114,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1166.1081547533,
          "highestDps": 1166.1081547533,
          "spec": "Fury",
          "allStars": {
            "points": 104.57,
            "rank": 1442,
            "rankPercent": 90.36507087456539,
            "total": 14956
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.0593,
          "medianPerformance": 86.428,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 2018.123347959,
          "highestDps": 2018.123347959,
          "spec": "Fury",
          "allStars": {
            "points": 115.77,
            "rank": 209,
            "rankPercent": 98.65092748735245,
            "total": 15418
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 96.3342,
          "medianPerformance": 96.0265,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 2059.5808997779,
          "highestDps": 2059.5808997779,
          "spec": "Fury",
          "allStars": {
            "points": 106.02,
            "rank": 757,
            "rankPercent": 95.21397822233477,
            "total": 15796
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 90.5018,
          "medianPerformance": 89.7709,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 1144.8150428247,
          "highestDps": 1144.8150428247,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 1614,
            "rankPercent": 87.1678599840891,
            "total": 12570
          }
        }
      ],
      "bestPerformanceAverage": 95.827725,
      "medianPerformanceAverage": 92.7525,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 29379,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_01.jpg",
          "itemLevel": 110,
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
          "medianPerformance": 76.17405049597036,
          "averagePerformance": 73.86817543450461,
          "totalKills": 4,
          "fastestKill": 4906131,
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
          "medianPerformance": 71.85310803788619,
          "averagePerformance": 68.95722677445295,
          "totalKills": 4,
          "fastestKill": 4906131,
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
          "medianPerformance": 63.94116327484764,
          "averagePerformance": 63.94116327484764,
          "totalKills": 2,
          "fastestKill": 4176192,
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
          "medianPerformance": 69.33182793854141,
          "averagePerformance": 69.33182793854141,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.261,
          "medianPerformance": 91.4742,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 2050.2272662302,
          "highestDps": 2050.2272662302,
          "spec": "BeastMastery",
          "allStars": {
            "points": 105.13,
            "rank": 1798,
            "rankPercent": 92.93159737245801,
            "total": 25423
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 84.143,
          "medianPerformance": 81.8261,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1261.6570017182,
          "highestDps": 1261.6570017182,
          "spec": "BeastMastery",
          "allStars": {
            "points": 86.68,
            "rank": 5771,
            "rankPercent": 77.58875165074187,
            "total": 25746
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 88.3238,
          "medianPerformance": 76.6429,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1369.6274182115,
          "highestDps": 1369.6274182115,
          "spec": "BeastMastery",
          "allStars": {
            "points": 94.66,
            "rank": 3868,
            "rankPercent": 84.74255277174986,
            "total": 25345
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 82.817,
          "medianPerformance": 81.188,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1763.3740378028,
          "highestDps": 1763.3740378028,
          "spec": "BeastMastery",
          "allStars": {
            "points": 87.43,
            "rank": 5554,
            "rankPercent": 77.47992537918728,
            "total": 24658
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 79.8958,
          "medianPerformance": 72.4377,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1789.0978287596,
          "highestDps": 1789.0978287596,
          "spec": "BeastMastery",
          "allStars": {
            "points": 88.9,
            "rank": 5605,
            "rankPercent": 77.06286836935168,
            "total": 24432
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 90.3807,
          "medianPerformance": 35.4987,
          "totalKills": 3,
          "fastestKill": 443565,
          "bestAmount": 998.98796165652,
          "highestDps": 998.98796165652,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 2984,
            "rankPercent": 85.83234386131561,
            "total": 21055
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 81.9453,
          "medianPerformance": 79.6298,
          "totalKills": 2,
          "fastestKill": 302151,
          "bestAmount": 1085.42460718,
          "highestDps": 1085.42460718,
          "spec": "BeastMastery",
          "allStars": {
            "points": 87.33,
            "rank": 5808,
            "rankPercent": 75.93352397529944,
            "total": 24129
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 92.9095,
          "medianPerformance": 91.8471,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 1611.9880517756,
          "highestDps": 1611.9880517756,
          "spec": "BeastMastery",
          "allStars": {
            "points": 105.86,
            "rank": 1806,
            "rankPercent": 92.50384152165788,
            "total": 24079
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 80.432,
          "medianPerformance": 74.9171,
          "totalKills": 2,
          "fastestKill": 110703,
          "bestAmount": 1669.475985294,
          "highestDps": 1669.475985294,
          "spec": "BeastMastery",
          "allStars": {
            "points": 84.59,
            "rank": 5748,
            "rankPercent": 76.1039501039501,
            "total": 24050
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 35.1374,
          "medianPerformance": 25.2148,
          "totalKills": 2,
          "fastestKill": 439454,
          "bestAmount": 748.28082120085,
          "highestDps": 748.28082120085,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 14816,
            "rankPercent": 28.08252427184466,
            "total": 20600
          }
        }
      ],
      "bestPerformanceAverage": 85.715925,
      "medianPerformanceAverage": 81.2453625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "lansena": {
      "characterName": "Lansena",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105245556,
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
          "id": 29054,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_55.jpg",
          "itemLevel": 120,
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
          "id": 29050,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_64.jpg",
          "itemLevel": 120,
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
          "id": 28508,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 29291,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2930,
          "temporaryEnchantID": null
        },
        {
          "id": 27780,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_31.jpg",
          "itemLevel": 115,
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
          "id": 28190,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_ahnqirajtrinket_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29354,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28522,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2639
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "medianPerformance": 97.17069488829526,
          "averagePerformance": 86.33032191654992,
          "totalKills": 3,
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
          "rankPercent": 97.12462159504334,
          "total": 7762,
          "bestAmount": 713.9911266128,
          "medianPerformance": 92.7622364075683,
          "averagePerformance": 78.04226344910012,
          "totalKills": 3,
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
          "rankPercent": 98.26394989283239,
          "total": 924,
          "bestAmount": 1184.6838144959,
          "medianPerformance": 91.9695780539971,
          "averagePerformance": 92.54075061369629,
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
          "rankPercent": 93.13154239836153,
          "total": 7252,
          "bestAmount": 618.81278446968,
          "medianPerformance": 89.88867442694367,
          "averagePerformance": 81.3872288091248,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7713,
          "medianPerformance": 99.2245,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1906.9304288995,
          "highestDps": 1906.9304288995,
          "spec": "Enhancement",
          "allStars": {
            "points": 115.92,
            "rank": 126,
            "rankPercent": 99.23491247398702,
            "total": 16338
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.4829,
          "medianPerformance": 95.4006,
          "totalKills": 3,
          "fastestKill": 186240,
          "bestAmount": 1347.1850747023,
          "highestDps": 1347.1850747023,
          "spec": "Enhancement",
          "allStars": {
            "points": 106.64,
            "rank": 1020,
            "rankPercent": 93.75153298994358,
            "total": 16308
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.4972,
          "medianPerformance": 96.4733,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1583.0566307718,
          "highestDps": 1583.0566307718,
          "spec": "Enhancement",
          "allStars": {
            "points": 114.08,
            "rank": 317,
            "rankPercent": 98.02918797555195,
            "total": 16034
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.3457,
          "medianPerformance": 98.5538,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 2051.3601741023,
          "highestDps": 2051.3601741023,
          "spec": "Enhancement",
          "allStars": {
            "points": 113.13,
            "rank": 211,
            "rankPercent": 98.64542346642585,
            "total": 15503
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 99.2785,
          "medianPerformance": 92.4445,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1880.0686330058,
          "highestDps": 1880.0686330058,
          "spec": "Enhancement",
          "allStars": {
            "points": 115.02,
            "rank": 250,
            "rankPercent": 98.38845382175911,
            "total": 15451
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 87.0201,
          "medianPerformance": 85.2674,
          "totalKills": 3,
          "fastestKill": 409306,
          "bestAmount": 842.99032997317,
          "highestDps": 842.99032997317,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 1946,
            "rankPercent": 85.60964782480023,
            "total": 13516
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.9292,
          "medianPerformance": 95.1516,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1034.1636424754,
          "highestDps": 1034.1636424754,
          "spec": "Enhancement",
          "allStars": {
            "points": 110,
            "rank": 836,
            "rankPercent": 94.57439896036388,
            "total": 15390
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.6156,
          "medianPerformance": 97.6356,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 1769.0478716433,
          "highestDps": 1769.0478716433,
          "spec": "Enhancement",
          "allStars": {
            "points": 114.03,
            "rank": 410,
            "rankPercent": 97.33654597551445,
            "total": 15356
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.1213,
          "medianPerformance": 90.6833,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 1663.1617249165,
          "highestDps": 1663.1617249165,
          "spec": "Enhancement",
          "allStars": {
            "points": 107.19,
            "rank": 596,
            "rankPercent": 96.12478832877426,
            "total": 15354
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.4991,
          "medianPerformance": 70.1764,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 1039.3503763038,
          "highestDps": 1039.3503763038,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 128,
            "rankPercent": 99.03838873324752,
            "total": 13207
          }
        }
      ],
      "bestPerformanceAverage": 98.2552125,
      "medianPerformanceAverage": 95.6959,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
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
          "rankPercent": 84.51766465825835,
          "total": 10512,
          "bestAmount": 1380.3040573255,
          "medianPerformance": 81.88554447450541,
          "averagePerformance": 79.39070534277359,
          "totalKills": 3,
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
          "rankPercent": 93.73218368459167,
          "total": 10512,
          "bestAmount": 725.57051574856,
          "medianPerformance": 91.08643390430105,
          "averagePerformance": 81.54301215906354,
          "totalKills": 3,
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
          "rankPercent": 99.31191141430992,
          "total": 15483,
          "bestAmount": 1557.8318346454,
          "medianPerformance": 91.99429236836653,
          "averagePerformance": 89.54335033908899,
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
          "rankPercent": 95.04297732521893,
          "total": 15483,
          "bestAmount": 748.70101996603,
          "medianPerformance": 94.90967917535578,
          "averagePerformance": 80.83186576253026,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 98.9141,
          "medianPerformance": 95.7525,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 2315.1615638966,
          "highestDps": 2315.1615638966,
          "spec": "BeastMastery",
          "allStars": {
            "points": 111.68,
            "rank": 513,
            "rankPercent": 97.98607560083389,
            "total": 25423
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 93.8169,
          "medianPerformance": 82.4777,
          "totalKills": 3,
          "fastestKill": 186240,
          "bestAmount": 1461.7214347079,
          "highestDps": 1461.7214347079,
          "spec": "BeastMastery",
          "allStars": {
            "points": 100.4,
            "rank": 2555,
            "rankPercent": 90.0800124291152,
            "total": 25746
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 93.6636,
          "medianPerformance": 91.8467,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1579.6872802431,
          "highestDps": 1579.6872802431,
          "spec": "BeastMastery",
          "allStars": {
            "points": 103.85,
            "rank": 1884,
            "rankPercent": 92.57052673111068,
            "total": 25345
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 95.7903,
          "medianPerformance": 94.8571,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 2232.1616245842,
          "highestDps": 2232.1616245842,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.05,
            "rank": 1527,
            "rankPercent": 93.81133911914998,
            "total": 24658
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 96.8583,
          "medianPerformance": 92.6129,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 2212.1903764125,
          "highestDps": 2212.1903764125,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.96,
            "rank": 1050,
            "rankPercent": 95.70645055664703,
            "total": 24432
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 85.5143,
          "medianPerformance": 57.9372,
          "totalKills": 3,
          "fastestKill": 409306,
          "bestAmount": 977.86344729634,
          "highestDps": 977.86344729634,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 3684,
            "rankPercent": 82.5077178817383,
            "total": 21055
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.2955,
          "medianPerformance": 95.7461,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1447.4471451172,
          "highestDps": 1447.4471451172,
          "spec": "BeastMastery",
          "allStars": {
            "points": 111.16,
            "rank": 842,
            "rankPercent": 96.5145675328443,
            "total": 24129
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.1442,
          "medianPerformance": 99.0115,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 1911.1876052812,
          "highestDps": 1911.1876052812,
          "spec": "BeastMastery",
          "allStars": {
            "points": 114.57,
            "rank": 270,
            "rankPercent": 98.88284397192574,
            "total": 24079
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.4686,
          "medianPerformance": 94.2674,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 2123.0150584986,
          "highestDps": 2123.0150584986,
          "spec": "BeastMastery",
          "allStars": {
            "points": 107.36,
            "rank": 687,
            "rankPercent": 97.14760914760915,
            "total": 24050
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.2183,
          "medianPerformance": 87.3459,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 1363.772129202,
          "highestDps": 1363.772129202,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 213,
            "rankPercent": 98.97087378640776,
            "total": 20600
          }
        }
      ],
      "bestPerformanceAverage": 96.6189375,
      "medianPerformanceAverage": 93.32148749999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 6125,
          "slot": 4,
          "quality": 2,
          "icon": "inv_chest_leather_04.jpg",
          "itemLevel": 1,
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
          "rankPercent": 96.43432091770933,
          "total": 10080,
          "bestAmount": 1539.2024221155,
          "medianPerformance": 92.50561283637924,
          "averagePerformance": 91.13523510057227,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 94.74641234359528,
          "total": 6556,
          "bestAmount": 884.34226481111,
          "medianPerformance": 74.30952891042497,
          "averagePerformance": 71.2020910897751,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 100,
          "total": 672,
          "bestAmount": 1521.9451801112,
          "medianPerformance": 98.21553078544325,
          "averagePerformance": 90.5062058435695,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 94.07971820711145,
          "total": 6148,
          "bestAmount": 826.33988092501,
          "medianPerformance": 72.2086950310396,
          "averagePerformance": 74.18014551730607,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.5077,
          "medianPerformance": 91.6665,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 2181.9559189274,
          "highestDps": 2181.9559189274,
          "spec": "Fury",
          "allStars": {
            "points": 113.23,
            "rank": 225,
            "rankPercent": 98.6348954841855,
            "total": 16409
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 93.4336,
          "medianPerformance": 87.7756,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1433.9776632302,
          "highestDps": 1433.9776632302,
          "spec": "Fury",
          "allStars": {
            "points": 99.05,
            "rank": 1894,
            "rankPercent": 88.6991821383798,
            "total": 16751
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.5216,
          "medianPerformance": 94.5994,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1844.0397877141,
          "highestDps": 1844.0397877141,
          "spec": "Fury",
          "allStars": {
            "points": 112.01,
            "rank": 466,
            "rankPercent": 97.22189030947544,
            "total": 16738
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 98.1841,
          "medianPerformance": 97.0105,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 2947.9788820376,
          "highestDps": 2947.9788820376,
          "spec": "Fury",
          "allStars": {
            "points": 110.29,
            "rank": 457,
            "rankPercent": 96.73001075654356,
            "total": 13945
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 99.4451,
          "medianPerformance": 91.2809,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 2120.4958581694,
          "highestDps": 2120.4958581694,
          "spec": "Fury",
          "allStars": {
            "points": 115.71,
            "rank": 110,
            "rankPercent": 99.30692439753291,
            "total": 15727
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 96.9081,
          "medianPerformance": 63.9274,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 1037.6980138902,
          "highestDps": 1037.6980138902,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 674,
            "rankPercent": 94.89842328684051,
            "total": 13192
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 90.8074,
          "medianPerformance": 90.0647,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 1097.5824763839,
          "highestDps": 1097.5824763839,
          "spec": "Fury",
          "allStars": {
            "points": 98.99,
            "rank": 2168,
            "rankPercent": 85.51083177320139,
            "total": 14956
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.0733,
          "medianPerformance": 96.939,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1936.4022568868,
          "highestDps": 1936.4022568868,
          "spec": "Fury",
          "allStars": {
            "points": 113.13,
            "rank": 515,
            "rankPercent": 96.66623427163056,
            "total": 15418
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.4525,
          "medianPerformance": 98.3924,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 2313.308084106,
          "highestDps": 2313.308084106,
          "spec": "Fury",
          "allStars": {
            "points": 110.27,
            "rank": 284,
            "rankPercent": 98.20840719169409,
            "total": 15796
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.7833,
          "medianPerformance": 98.6432,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 1463.9718577068,
          "highestDps": 1463.9718577068,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 36,
            "rankPercent": 99.72155926809864,
            "total": 12570
          }
        }
      ],
      "bestPerformanceAverage": 96.9281625,
      "medianPerformanceAverage": 93.46612499999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 24259,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 105,
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
          "rankPercent": 69.88979112437232,
          "total": 9264,
          "bestAmount": 1229.0416221403,
          "medianPerformance": 62.968564339045386,
          "averagePerformance": 62.968564339045386,
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
          "rankPercent": 83.08452357442658,
          "total": 9264,
          "bestAmount": 602.76273583485,
          "medianPerformance": 74.36386970038771,
          "averagePerformance": 74.36386970038771,
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
          "rankPercent": 83.40323766033939,
          "total": 8904,
          "bestAmount": 1172.2651810416,
          "medianPerformance": 82.04106157482386,
          "averagePerformance": 82.04106157482386,
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
          "rankPercent": 78.75134898220529,
          "total": 15483,
          "bestAmount": 584.9268883949,
          "medianPerformance": 75.25324030931597,
          "averagePerformance": 75.25324030931597,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.1591,
          "medianPerformance": 92.3474,
          "totalKills": 2,
          "fastestKill": 102130,
          "bestAmount": 2058.6703221385,
          "highestDps": 2058.6703221385,
          "spec": "BeastMastery",
          "allStars": {
            "points": 105.37,
            "rank": 1749,
            "rankPercent": 93.12433623097195,
            "total": 25423
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 81.8497,
          "medianPerformance": 75.5185,
          "totalKills": 2,
          "fastestKill": 187766,
          "bestAmount": 1194.9128170169,
          "highestDps": 1194.9128170169,
          "spec": "BeastMastery",
          "allStars": {
            "points": 81.27,
            "rank": 7062,
            "rankPercent": 72.57438048628913,
            "total": 25746
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 74.7773,
          "medianPerformance": 39.6783,
          "totalKills": 2,
          "fastestKill": 163533,
          "bestAmount": 1112.2422198272,
          "highestDps": 1112.2422198272,
          "spec": "BeastMastery",
          "allStars": {
            "points": 75.67,
            "rank": 8284,
            "rankPercent": 67.31899782994674,
            "total": 25345
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 92.0995,
          "medianPerformance": 91.4674,
          "totalKills": 2,
          "fastestKill": 115131,
          "bestAmount": 2119.4118004708,
          "highestDps": 2119.4118004708,
          "spec": "BeastMastery",
          "allStars": {
            "points": 102.65,
            "rank": 2225,
            "rankPercent": 90.98061481060914,
            "total": 24658
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 31.8352,
          "medianPerformance": 31.1632,
          "totalKills": 2,
          "fastestKill": 203960,
          "bestAmount": 1194.7489703864,
          "highestDps": 1194.7489703864,
          "spec": "BeastMastery",
          "allStars": {
            "points": 45.97,
            "rank": 17827,
            "rankPercent": 27.038310412573672,
            "total": 24432
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 67.5753,
          "medianPerformance": 67.0258,
          "totalKills": 2,
          "fastestKill": 402466,
          "bestAmount": 882.34719256498,
          "highestDps": 882.34719256498,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 7372,
            "rankPercent": 64.99168843505106,
            "total": 21055
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 87.3934,
          "medianPerformance": 84.7073,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 1205.5983028908,
          "highestDps": 1205.5983028908,
          "spec": "BeastMastery",
          "allStars": {
            "points": 97.84,
            "rank": 3519,
            "rankPercent": 85.42003398400266,
            "total": 24129
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 94.6794,
          "medianPerformance": 92.5792,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 1642.1870526589,
          "highestDps": 1642.1870526589,
          "spec": "BeastMastery",
          "allStars": {
            "points": 107.11,
            "rank": 1562,
            "rankPercent": 93.5171726400598,
            "total": 24079
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.9477,
          "medianPerformance": 94.1857,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 2090.8584720114,
          "highestDps": 2090.8584720114,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.74,
            "rank": 801,
            "rankPercent": 96.67359667359668,
            "total": 24050
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 65.9704,
          "medianPerformance": 53.331,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 918.57614151295,
          "highestDps": 918.57614151295,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 8644,
            "rankPercent": 58.04368932038835,
            "total": 20600
          }
        }
      ],
      "bestPerformanceAverage": 81.84266249999999,
      "medianPerformanceAverage": 75.205875,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "mellorin": {
      "characterName": "Mellorin",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107614853,
      "gear": [
        {
          "id": 28586,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_30.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24096,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_amulet_05.jpg",
          "itemLevel": 85,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25718,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_14.jpg",
          "itemLevel": 85,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 2587,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_grey_01.jpg",
          "itemLevel": 20,
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
          "id": 28654,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
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
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27493,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 28555,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 95,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28040,
          "slot": 13,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28633,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_halberd17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "moneylazy": {
      "characterName": "Moneylazy",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109070276,
      "gear": [],
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
          "medianPerformance": 84.76148613914,
          "averagePerformance": 86.31678999470334,
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
          "rankPercent": 86.29992429809002,
          "total": 4878,
          "bestAmount": 538.68781515865,
          "medianPerformance": 66.70227625439719,
          "averagePerformance": 57.62272473979076,
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
          "rankPercent": 96.3495,
          "medianPerformance": 92.7006,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 1536.4451076381,
          "highestDps": 1536.4451076381,
          "spec": "Combat",
          "allStars": {
            "points": 105.05,
            "rank": 1062,
            "rankPercent": 92.92808105045657,
            "total": 15003
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 96.9893,
          "medianPerformance": 96.0695,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1364.1641888207,
          "highestDps": 1364.1641888207,
          "spec": "Combat",
          "allStars": {
            "points": 107.42,
            "rank": 670,
            "rankPercent": 95.6050453291289,
            "total": 15222
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.5922,
          "medianPerformance": 96.4585,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1450.923189373,
          "highestDps": 1450.923189373,
          "spec": "Combat",
          "allStars": {
            "points": 109.96,
            "rank": 584,
            "rankPercent": 96.09249329758713,
            "total": 14920
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 91.0482,
          "medianPerformance": 80.5756,
          "totalKills": 3,
          "fastestKill": 142609,
          "bestAmount": 1825.4701441799,
          "highestDps": 1825.4701441799,
          "spec": "Combat",
          "allStars": {
            "points": 101.03,
            "rank": 1354,
            "rankPercent": 90.55233573074506,
            "total": 14321
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.0837,
          "medianPerformance": 70.8849,
          "totalKills": 3,
          "fastestKill": 189409,
          "bestAmount": 1775.079325692,
          "highestDps": 1775.079325692,
          "spec": "Combat",
          "allStars": {
            "points": 112.68,
            "rank": 459,
            "rankPercent": 96.77759797368606,
            "total": 14213
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 74.0469,
          "medianPerformance": 71.1214,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 798.04649329864,
          "highestDps": 798.04649329864,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 3707,
            "rankPercent": 68.64901446578124,
            "total": 11821
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
            "points": 109.41,
            "rank": 802,
            "rankPercent": 94.36986012511422,
            "total": 14227
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
            "points": 117.32,
            "rank": 75,
            "rankPercent": 99.48392495989957,
            "total": 14339
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
            "points": 103.31,
            "rank": 971,
            "rankPercent": 93.1867668750439,
            "total": 14237
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
            "rank": 554,
            "rankPercent": 95.30281151787989,
            "total": 11773
          }
        }
      ],
      "bestPerformanceAverage": 96.27296250000002,
      "medianPerformanceAverage": 90.3473375,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": true
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
          "id": 30008,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_12.jpg",
          "itemLevel": 128,
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
          "rankPercent": 95.3491207567663,
          "total": 16017,
          "bestAmount": 1551.1342375464,
          "medianPerformance": 90.51406609762842,
          "averagePerformance": 73.62815553517464,
          "totalKills": 3,
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
          "rankPercent": 93.5995259805519,
          "total": 16017,
          "bestAmount": 839.92787004001,
          "medianPerformance": 91.54496103162911,
          "averagePerformance": 72.24491267167168,
          "totalKills": 3,
          "fastestKill": 4632749,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 95.93840117829313,
          "total": 16562,
          "bestAmount": 1528.9151382889,
          "medianPerformance": 69.18779993739575,
          "averagePerformance": 67.72910592441401,
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
          "rankPercent": 94.85543026006276,
          "total": 16562,
          "bestAmount": 818.06562062267,
          "medianPerformance": 62.82973421908575,
          "averagePerformance": 59.725924765824,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.1419,
          "medianPerformance": 92.5683,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 2431.5969842358,
          "highestDps": 2431.5969842358,
          "spec": "Arcane",
          "allStars": {
            "points": 112.36,
            "rank": 367,
            "rankPercent": 98.661448999744,
            "total": 27343
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 96.4477,
          "medianPerformance": 87.5172,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 1645.7163081123,
          "highestDps": 1645.7163081123,
          "spec": "Arcane",
          "allStars": {
            "points": 103.7,
            "rank": 1458,
            "rankPercent": 94.72063192984999,
            "total": 27598
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.4564,
          "medianPerformance": 91.5421,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1814.6429161087,
          "highestDps": 1814.6429161087,
          "spec": "Arcane",
          "allStars": {
            "points": 110.13,
            "rank": 941,
            "rankPercent": 96.52803427642758,
            "total": 27074
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 98.4241,
          "medianPerformance": 90.259,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 2231.6665363803,
          "highestDps": 2231.6665363803,
          "spec": "Arcane",
          "allStars": {
            "points": 111.4,
            "rank": 559,
            "rankPercent": 97.87800425920292,
            "total": 26296
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 90.3577,
          "medianPerformance": 50.7944,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1549.5571374232,
          "highestDps": 1549.5571374232,
          "spec": "Arcane",
          "allStars": {
            "points": 90.5,
            "rank": 5296,
            "rankPercent": 79.48310601363919,
            "total": 25808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.1549,
          "medianPerformance": 87.9772,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 1190.6348795278,
          "highestDps": 1190.6348795278,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 870,
            "rankPercent": 96.1101163831692,
            "total": 22340
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 90.7648,
          "medianPerformance": 76.4212,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1362.8110168273,
          "highestDps": 1362.8110168273,
          "spec": "Arcane",
          "allStars": {
            "points": 100.41,
            "rank": 3363,
            "rankPercent": 87.44819861862983,
            "total": 26785
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.1798,
          "medianPerformance": 88.9228,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 2104.359058012,
          "highestDps": 2104.359058012,
          "spec": "Arcane",
          "allStars": {
            "points": 112.75,
            "rank": 622,
            "rankPercent": 97.63707621475591,
            "total": 26281
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.4996,
          "medianPerformance": 66.8366,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 2066.0931872889,
          "highestDps": 2066.0931872889,
          "spec": "Arcane",
          "allStars": {
            "points": 108.99,
            "rank": 530,
            "rankPercent": 97.9802993280391,
            "total": 26192
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 93.4908,
          "medianPerformance": 57.6898,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 1300.0746710611,
          "highestDps": 1300.0746710611,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 1894,
            "rankPercent": 91.52603070862617,
            "total": 22339
          }
        }
      ],
      "bestPerformanceAverage": 96.159,
      "medianPerformanceAverage": 80.60770000000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 24121,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_ahnqiraj_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28340,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_18.jpg",
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
          "id": 24757,
          "slot": 6,
          "quality": 2,
          "icon": "inv_belt_21.jpg",
          "itemLevel": 105,
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
          "id": 28251,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 115,
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
          "id": 28304,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_16.jpg",
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
          "id": 28327,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
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
          "id": 28257,
          "slot": 16,
          "quality": 3,
          "icon": "inv_mace_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
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
          "rankPercent": 19.6547,
          "medianPerformance": 19.6547,
          "totalKills": 1,
          "fastestKill": 102130,
          "bestAmount": 658.61157348477,
          "highestDps": 658.61157348477,
          "spec": "Balance",
          "allStars": {
            "points": 40.32,
            "rank": 7101,
            "rankPercent": 17.393833624200116,
            "total": 8595
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
            "points": 24.53,
            "rank": 8104,
            "rankPercent": 6.041280148423006,
            "total": 8624
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
            "points": 39.36,
            "rank": 7379,
            "rankPercent": 12.344065581561127,
            "total": 8417
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
            "points": 27.53,
            "rank": 7851,
            "rankPercent": 1.5797392176529588,
            "total": 7976
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
            "points": 36.2,
            "rank": 7721,
            "rankPercent": 3.7766421538078028,
            "total": 8023
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
            "rank": 7008,
            "rankPercent": -1.242595000722439,
            "total": 6921
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
            "points": 39.02,
            "rank": 7507,
            "rankPercent": 7.493221592309588,
            "total": 8114
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
            "points": 39.55,
            "rank": 7791,
            "rankPercent": 3.5174634629675503,
            "total": 8074
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
            "points": 36.41,
            "rank": 6936,
            "rankPercent": 15.622338484000487,
            "total": 8219
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
            "rank": 6896,
            "rankPercent": -2.314883513874462,
            "total": 6739
          }
        }
      ],
      "bestPerformanceAverage": 11.522436249999998,
      "medianPerformanceAverage": 11.522436249999998,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 24116,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_28.jpg",
          "itemLevel": 114,
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
          "medianPerformance": 47.955431090075706,
          "averagePerformance": 54.439542552445204,
          "totalKills": 4,
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
          "rankPercent": 80.05211912198943,
          "total": 2506,
          "bestAmount": 555.80388528549,
          "medianPerformance": 59.4174012075172,
          "averagePerformance": 63.47980461417627,
          "totalKills": 4,
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
          "rankPercent": 62.83086306702169,
          "total": 2264,
          "bestAmount": 980.32719302724,
          "medianPerformance": 49.991814243935366,
          "averagePerformance": 49.991814243935366,
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
          "rankPercent": 53.55447065267384,
          "total": 3889,
          "bestAmount": 485.31185356796,
          "medianPerformance": 51.44335151452097,
          "averagePerformance": 51.44335151452097,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 93.8454,
          "medianPerformance": 81.5657,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1555.5730080194,
          "highestDps": 1555.5730080194,
          "spec": "Affliction",
          "allStars": {
            "points": 101.16,
            "rank": 722,
            "rankPercent": 88.00332778702163,
            "total": 6010
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 57.2463,
          "medianPerformance": 35.4368,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 857.12003238073,
          "highestDps": 857.12003238073,
          "spec": "Affliction",
          "allStars": {
            "points": 50.42,
            "rank": 3509,
            "rankPercent": 42.13130979874629,
            "total": 6062
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 88.7434,
          "medianPerformance": 55.7542,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1171.8702010867,
          "highestDps": 1171.8702010867,
          "spec": "Affliction",
          "allStars": {
            "points": 95.96,
            "rank": 995,
            "rankPercent": 82.22778473091364,
            "total": 5593
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 90.122,
          "medianPerformance": 66.1499,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1404.7640751986,
          "highestDps": 1404.7640751986,
          "spec": "Affliction",
          "allStars": {
            "points": 95.95,
            "rank": 981,
            "rankPercent": 83.38701474826242,
            "total": 5899
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 74.8307,
          "medianPerformance": 27.3284,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1268.6971327139,
          "highestDps": 1268.6971327139,
          "spec": "Affliction",
          "allStars": {
            "points": 76.93,
            "rank": 2100,
            "rankPercent": 64.0705237932215,
            "total": 5842
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 74.9455,
          "medianPerformance": 66.7572,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 750.2643090431,
          "highestDps": 750.2643090431,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 1931,
            "rankPercent": 64.3253234750462,
            "total": 5410
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 79.2171,
          "medianPerformance": 74.7735,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 1030.9565251276,
          "highestDps": 1030.9565251276,
          "spec": "Affliction",
          "allStars": {
            "points": 80.46,
            "rank": 1956,
            "rankPercent": 66.46079945102076,
            "total": 5829
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 82.6579,
          "medianPerformance": 54.6788,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 1424.2202543648,
          "highestDps": 1424.2202543648,
          "spec": "Affliction",
          "allStars": {
            "points": 86.85,
            "rank": 1551,
            "rankPercent": 73.28507411237504,
            "total": 5802
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 89.2596,
          "medianPerformance": 74.7218,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 1299.3291363191,
          "highestDps": 1299.3291363191,
          "spec": "Affliction",
          "allStars": {
            "points": 91.53,
            "rank": 1059,
            "rankPercent": 81.40924266385521,
            "total": 5691
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 26.5104,
          "medianPerformance": 22.4553,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 708.80134187409,
          "highestDps": 708.80134187409,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 4084,
            "rankPercent": 17.913148371531967,
            "total": 4974
          }
        }
      ],
      "bestPerformanceAverage": 81.9903,
      "medianPerformanceAverage": 58.80113750000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28182,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
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
          "id": 31544,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_14.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3010,
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
          "id": 25685,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_22.jpg",
          "itemLevel": 106,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 30860,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_34.jpg",
          "itemLevel": 109,
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
          "temporaryEnchantID": 2639
        },
        {
          "id": 29124,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_draenei_01.jpg",
          "itemLevel": 100,
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
          "rankPercent": 65.3806,
          "medianPerformance": 65.3806,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1117.7228760374,
          "highestDps": 1117.7228760374,
          "spec": "Fury",
          "allStars": {
            "points": 61.84,
            "rank": 7600,
            "rankPercent": 53.69004814431105,
            "total": 16409
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
            "points": 66.19,
            "rank": 7062,
            "rankPercent": 57.84729269894335,
            "total": 16751
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
            "points": 50.99,
            "rank": 9537,
            "rankPercent": 43.02784084119966,
            "total": 16738
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
            "points": 67.52,
            "rank": 5747,
            "rankPercent": 58.79526712083184,
            "total": 13945
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
            "points": 62.4,
            "rank": 7590,
            "rankPercent": 51.74540598969924,
            "total": 15727
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
            "rank": 10180,
            "rankPercent": 22.839599757428743,
            "total": 13192
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
      "bestPerformanceAverage": 64.64254000000001,
      "medianPerformanceAverage": 64.64254000000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 32478,
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
          "id": 27797,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_15.jpg",
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
          "id": 29246,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 110,
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
          "id": 28772,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_18.jpg",
          "itemLevel": 125,
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
          "rankPercent": 90.95006946435815,
          "total": 8823,
          "bestAmount": 1236.3783472421,
          "medianPerformance": 90.95006946435815,
          "averagePerformance": 90.95006946435815,
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
          "rankPercent": 80.27584209551142,
          "total": 8823,
          "bestAmount": 543.88776763361,
          "medianPerformance": 80.27584209551142,
          "averagePerformance": 80.27584209551142,
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
          "rankPercent": 75.10777506303616,
          "total": 9132,
          "bestAmount": 957.31013073324,
          "medianPerformance": 75.10777506303616,
          "averagePerformance": 75.10777506303616,
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
          "rankPercent": 72.18534056040001,
          "total": 9132,
          "bestAmount": 479.22138765198,
          "medianPerformance": 72.18534056040001,
          "averagePerformance": 72.18534056040001,
          "totalKills": 1,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 92.1586,
          "medianPerformance": 92.1586,
          "totalKills": 1,
          "fastestKill": 116972,
          "bestAmount": 1505.3517081011,
          "highestDps": 1505.3517081011,
          "spec": "Combat",
          "allStars": {
            "points": 103.62,
            "rank": 1242,
            "rankPercent": 91.72832100246617,
            "total": 15003
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 93.8982,
          "medianPerformance": 93.8982,
          "totalKills": 1,
          "fastestKill": 170511,
          "bestAmount": 1311.5693415674,
          "highestDps": 1311.5693415674,
          "spec": "Combat",
          "allStars": {
            "points": 104.44,
            "rank": 1061,
            "rankPercent": 93.0363946918933,
            "total": 15222
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.1147,
          "medianPerformance": 98.1147,
          "totalKills": 1,
          "fastestKill": 157335,
          "bestAmount": 1582.2353576763,
          "highestDps": 1582.2353576763,
          "spec": "Combat",
          "allStars": {
            "points": 112.98,
            "rank": 316,
            "rankPercent": 97.8887399463807,
            "total": 14920
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 88.9303,
          "medianPerformance": 88.9303,
          "totalKills": 1,
          "fastestKill": 142669,
          "bestAmount": 1756.9338819225,
          "highestDps": 1756.9338819225,
          "spec": "Combat",
          "allStars": {
            "points": 98.52,
            "rank": 1663,
            "rankPercent": 88.39466517701278,
            "total": 14321
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 93.1513,
          "medianPerformance": 93.1513,
          "totalKills": 1,
          "fastestKill": 189409,
          "bestAmount": 1669.4507652751,
          "highestDps": 1669.4507652751,
          "spec": "Combat",
          "allStars": {
            "points": 107.74,
            "rank": 1037,
            "rankPercent": 92.71089847322874,
            "total": 14213
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 51.5194,
          "medianPerformance": 51.5194,
          "totalKills": 1,
          "fastestKill": 497362,
          "bestAmount": 723.68616822355,
          "highestDps": 723.68616822355,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 6111,
            "rankPercent": 48.31232552237543,
            "total": 11821
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 92.4341,
          "medianPerformance": 92.4341,
          "totalKills": 1,
          "fastestKill": 302151,
          "bestAmount": 1006.6357549702,
          "highestDps": 1006.6357549702,
          "spec": "Combat",
          "allStars": {
            "points": 106.04,
            "rank": 1203,
            "rankPercent": 91.55127574330498,
            "total": 14227
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 95.737,
          "medianPerformance": 95.737,
          "totalKills": 1,
          "fastestKill": 150650,
          "bestAmount": 1606.5449717889,
          "highestDps": 1606.5449717889,
          "spec": "Combat",
          "allStars": {
            "points": 111.57,
            "rank": 667,
            "rankPercent": 95.35532463909617,
            "total": 14339
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 71.2951,
          "medianPerformance": 71.2951,
          "totalKills": 1,
          "fastestKill": 116928,
          "bestAmount": 1278.0685550082,
          "highestDps": 1278.0685550082,
          "spec": "Combat",
          "allStars": {
            "points": 77.45,
            "rank": 4450,
            "rankPercent": 68.7504389969797,
            "total": 14237
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 50.5652,
          "medianPerformance": 50.5652,
          "totalKills": 1,
          "fastestKill": 573821,
          "bestAmount": 695.52700232302,
          "highestDps": 695.52700232302,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 6297,
            "rankPercent": 46.52170219994903,
            "total": 11773
          }
        }
      ],
      "bestPerformanceAverage": 90.71491250000001,
      "medianPerformanceAverage": 90.71491250000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "averagePerformance": 94.07125403324964,
          "totalKills": 3,
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
          "rankPercent": 95.04424918004823,
          "total": 5410,
          "bestAmount": 650.513623224,
          "medianPerformance": 89.19255292372992,
          "averagePerformance": 88.9994275770757,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 80,
          "medianPerformance": 75,
          "totalKills": 3,
          "fastestKill": 102133,
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
          "medianPerformance": 50,
          "totalKills": 3,
          "fastestKill": 186240,
          "bestAmount": 1.8157127817025,
          "highestDps": 1.8157127817025,
          "spec": "Holy",
          "allStars": {
            "points": 75.61490929677178,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 89.48741065719052,
          "medianPerformance": 30,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 40.886503755405,
          "highestDps": 40.886503755405,
          "spec": "Holy",
          "allStars": {
            "points": 90.69957419316903,
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
          "totalKills": 3,
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
          "totalKills": 3,
          "fastestKill": 187092,
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
          "totalKills": 3,
          "fastestKill": 409361,
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
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 6.7058153654069,
          "highestDps": 6.7058153654069,
          "spec": "Holy",
          "allStars": {
            "points": 97.8804698070207,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 71.59582198613677,
          "medianPerformance": 62.801089390712626,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 2.3589468363278,
          "highestDps": 2.3589468363278,
          "spec": "Holy",
          "allStars": {
            "points": 71.64450063901762,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 75,
          "medianPerformance": 70,
          "totalKills": 3,
          "fastestKill": 107182,
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
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 67.54646283465172,
          "medianPerformance": 55.76128971468318,
          "totalKills": 3,
          "fastestKill": 427207,
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
      "bestPerformanceAverage": 83.04404583259142,
      "medianPerformanceAverage": 59.725136173839076,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 29071,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 120,
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
          "id": 19031,
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
          "rankPercent": 92.02000339055063,
          "total": 6436,
          "bestAmount": 1257.048415627,
          "medianPerformance": 85.59232208742776,
          "averagePerformance": 69.51156682504927,
          "totalKills": 3,
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
          "rankPercent": 89.93319536647745,
          "total": 4061,
          "bestAmount": 578.99561283405,
          "medianPerformance": 66.56111545621005,
          "averagePerformance": 66.41860149384956,
          "totalKills": 3,
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
          "rankPercent": 98.42500963911489,
          "total": 3710,
          "bestAmount": 1266.531266015,
          "medianPerformance": 63.84122507272061,
          "averagePerformance": 71.3212963822807,
          "totalKills": 3,
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
          "rankPercent": 78.11059627782225,
          "total": 3710,
          "bestAmount": 495.67502174938,
          "medianPerformance": 53.72258789904597,
          "averagePerformance": 60.316365570670136,
          "totalKills": 3,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.04,
          "medianPerformance": 95.2916,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 1889.648598008,
          "highestDps": 1889.648598008,
          "spec": "Retribution",
          "allStars": {
            "points": 110.94,
            "rank": 342,
            "rankPercent": 96.47070999793003,
            "total": 9662
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.6558,
          "medianPerformance": 93.0474,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1333.3457601483,
          "highestDps": 1333.3457601483,
          "spec": "Retribution",
          "allStars": {
            "points": 100.19,
            "rank": 1039,
            "rankPercent": 89.43941397904162,
            "total": 9829
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 95.5205,
          "medianPerformance": 94.9541,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1509.9437505959,
          "highestDps": 1509.9437505959,
          "spec": "Retribution",
          "allStars": {
            "points": 106.22,
            "rank": 604,
            "rankPercent": 93.98083449790377,
            "total": 10018
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 94.0711,
          "medianPerformance": 92.4235,
          "totalKills": 3,
          "fastestKill": 142609,
          "bestAmount": 1806.7064323714,
          "highestDps": 1806.7064323714,
          "spec": "Retribution",
          "allStars": {
            "points": 104.31,
            "rank": 728,
            "rankPercent": 91.58467415210093,
            "total": 8639
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 92.6842,
          "medianPerformance": 83.2094,
          "totalKills": 3,
          "fastestKill": 189409,
          "bestAmount": 1739.2679334139,
          "highestDps": 1739.2679334139,
          "spec": "Retribution",
          "allStars": {
            "points": 105.91,
            "rank": 721,
            "rankPercent": 91.82839632277835,
            "total": 8811
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 82.8135,
          "medianPerformance": 51.5251,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 836.84720585811,
          "highestDps": 836.84720585811,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 1517,
            "rankPercent": 81.53246436837617,
            "total": 8209
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.6448,
          "medianPerformance": 97.4134,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 1183.7712860613,
          "highestDps": 1183.7712860613,
          "spec": "Retribution",
          "allStars": {
            "points": 109.62,
            "rank": 517,
            "rankPercent": 94.15893140140366,
            "total": 8834
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.1734,
          "medianPerformance": 83.994,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1890.7192048637,
          "highestDps": 1890.7192048637,
          "spec": "Retribution",
          "allStars": {
            "points": 113.59,
            "rank": 259,
            "rankPercent": 97.26405090137858,
            "total": 9430
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 95.4118,
          "medianPerformance": 90.8759,
          "totalKills": 3,
          "fastestKill": 111349,
          "bestAmount": 1659.1707154981,
          "highestDps": 1659.1707154981,
          "spec": "Retribution",
          "allStars": {
            "points": 99.56,
            "rank": 895,
            "rankPercent": 90.27943894748287,
            "total": 9197
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 97.6383,
          "medianPerformance": 11.5198,
          "totalKills": 3,
          "fastestKill": 462791,
          "bestAmount": 1120.1439433811,
          "highestDps": 1120.1439433811,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 359,
            "rankPercent": 95.2795358649789,
            "total": 7584
          }
        }
      ],
      "bestPerformanceAverage": 96.15020000000001,
      "medianPerformanceAverage": 91.4011625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "rankPercent": 75.72094176349245,
          "total": 9264,
          "bestAmount": 1277.3441163903,
          "medianPerformance": 75.53773246426962,
          "averagePerformance": 70.42257476280479,
          "totalKills": 4,
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
          "rankPercent": 86.22119179296453,
          "total": 9264,
          "bestAmount": 627.42795440634,
          "medianPerformance": 71.27466712754091,
          "averagePerformance": 62.94137152914667,
          "totalKills": 4,
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
          "rankPercent": 88.73788273607822,
          "total": 8904,
          "bestAmount": 1236.0301890503,
          "medianPerformance": 81.7217683142076,
          "averagePerformance": 81.7217683142076,
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
          "rankPercent": 81.42394602376187,
          "total": 15483,
          "bestAmount": 604.11285250013,
          "medianPerformance": 77.1532373707033,
          "averagePerformance": 77.1532373707033,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 92.4305,
          "medianPerformance": 91.2823,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1933.5235651893,
          "highestDps": 1933.5235651893,
          "spec": "BeastMastery",
          "allStars": {
            "points": 100.63,
            "rank": 2781,
            "rankPercent": 89.06501986390276,
            "total": 25423
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.2949,
          "medianPerformance": 78.7442,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 1401.7127701501,
          "highestDps": 1401.7127701501,
          "spec": "BeastMastery",
          "allStars": {
            "points": 96.79,
            "rank": 3387,
            "rankPercent": 86.8484424765012,
            "total": 25746
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 96.5643,
          "medianPerformance": 83.7131,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1627.5736135852,
          "highestDps": 1627.5736135852,
          "spec": "BeastMastery",
          "allStars": {
            "points": 105.3,
            "rank": 1600,
            "rankPercent": 93.69106332609982,
            "total": 25345
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 90.0358,
          "medianPerformance": 79.0988,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1960.0305731055,
          "highestDps": 1960.0305731055,
          "spec": "BeastMastery",
          "allStars": {
            "points": 96.93,
            "rank": 3442,
            "rankPercent": 86.04509692594695,
            "total": 24658
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 62.4122,
          "medianPerformance": 49.8445,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1557.3838007452,
          "highestDps": 1557.3838007452,
          "spec": "BeastMastery",
          "allStars": {
            "points": 70.85,
            "rank": 9718,
            "rankPercent": 60.22838899803536,
            "total": 24432
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 81.1873,
          "medianPerformance": 80.941,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 939.59738213911,
          "highestDps": 939.59738213911,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 5012,
            "rankPercent": 76.20042745191166,
            "total": 21055
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 83.0355,
          "medianPerformance": 75.8129,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1139.9647634115,
          "highestDps": 1139.9647634115,
          "spec": "BeastMastery",
          "allStars": {
            "points": 92.61,
            "rank": 4644,
            "rankPercent": 80.7575945957147,
            "total": 24129
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.6492,
          "medianPerformance": 86.7116,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 1797.5324394084,
          "highestDps": 1797.5324394084,
          "spec": "BeastMastery",
          "allStars": {
            "points": 112.16,
            "rank": 633,
            "rankPercent": 97.37530628348354,
            "total": 24079
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.6814,
          "medianPerformance": 73.4893,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 2069.511176571,
          "highestDps": 2069.511176571,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.23,
            "rank": 901,
            "rankPercent": 96.25779625779626,
            "total": 24050
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 76.9432,
          "medianPerformance": 62.916,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 992.27652191029,
          "highestDps": 992.27652191029,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 6147,
            "rankPercent": 70.16504854368932,
            "total": 20600
          }
        }
      ],
      "bestPerformanceAverage": 89.13797499999998,
      "medianPerformanceAverage": 77.3370875,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 31371,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_06.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 3008,
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
          "id": 31369,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2987,
          "temporaryEnchantID": null
        },
        {
          "id": 32801,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_14.jpg",
          "itemLevel": 136,
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
          "permanentEnchantID": 2650,
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
          "id": 31398,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_70.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 29172,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 105,
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
          "id": 28789,
          "slot": 14,
          "quality": 4,
          "icon": "inv_elemental_mote_life01.jpg",
          "itemLevel": 125,
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
          "id": 27917,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_libramoftruth.jpg",
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
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 99.4636314275419,
          "total": 4754,
          "bestAmount": 525.81905038572,
          "medianPerformance": 99.21261222728025,
          "averagePerformance": 98.04617547566566,
          "totalKills": 3,
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
          "rankPercent": 96.51430962626785,
          "total": 4754,
          "bestAmount": 389.67650884169,
          "medianPerformance": 90.70477732426598,
          "averagePerformance": 83.54129675333878,
          "totalKills": 3,
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
          "rankPercent": 99.2510215246818,
          "total": 7211,
          "bestAmount": 483.40294433232,
          "medianPerformance": 96.9657034285559,
          "averagePerformance": 97.26028690222103,
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
          "rankPercent": 94.75551735593689,
          "total": 7211,
          "bestAmount": 371.03010970398,
          "medianPerformance": 91.34678080480816,
          "averagePerformance": 79.06459626254117,
          "totalKills": 3,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.5762,
          "medianPerformance": 99.1671,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 755.21394301381,
          "highestDps": 755.21394301381,
          "spec": "Protection",
          "allStars": {
            "points": 109.85,
            "rank": 42,
            "rankPercent": 99.39340139073828,
            "total": 6759
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 99.7137,
          "medianPerformance": 99.41,
          "totalKills": 3,
          "fastestKill": 186240,
          "bestAmount": 568.66945876289,
          "highestDps": 568.66945876289,
          "spec": "Justicar",
          "allStars": {
            "points": 114.01,
            "rank": 53,
            "rankPercent": 99.53707825158017,
            "total": 11233
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.1163,
          "medianPerformance": 93.3675,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 512.69047516003,
          "highestDps": 512.69047516003,
          "spec": "Justicar",
          "allStars": {
            "points": 106.06,
            "rank": 467,
            "rankPercent": 95.5804248861912,
            "total": 10544
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.1809,
          "medianPerformance": 99.0311,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1123.9833958006,
          "highestDps": 1123.9833958006,
          "spec": "Protection",
          "allStars": {
            "points": 111.06,
            "rank": 157,
            "rankPercent": 98.46953791817914,
            "total": 10193
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.9576,
          "medianPerformance": 93.5097,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 458.32843352113,
          "highestDps": 458.32843352113,
          "spec": "Justicar",
          "allStars": {
            "points": 103.93,
            "rank": 371,
            "rankPercent": 97.07255320832344,
            "total": 12639
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 98.8058,
          "medianPerformance": 98.3971,
          "totalKills": 3,
          "fastestKill": 409306,
          "bestAmount": 366.00949128087,
          "highestDps": 366.00949128087,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 133,
            "rankPercent": 98.426135686181,
            "total": 8387
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 99.5728,
          "medianPerformance": 96.5071,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 293.15403422983,
          "highestDps": 293.15403422983,
          "spec": "Justicar",
          "allStars": {
            "points": 112.71,
            "rank": 63,
            "rankPercent": 99.46981357961347,
            "total": 11694
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.3584,
          "medianPerformance": 93.9137,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 870.84617791775,
          "highestDps": 870.84617791775,
          "spec": "Protection",
          "allStars": {
            "points": 112.91,
            "rank": 60,
            "rankPercent": 99.13553113553114,
            "total": 6825
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.6536,
          "medianPerformance": 99.5514,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 665.14909261718,
          "highestDps": 665.14909261718,
          "spec": "Justicar",
          "allStars": {
            "points": 109.55,
            "rank": 72,
            "rankPercent": 99.35047113713293,
            "total": 10931
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 96.0475,
          "medianPerformance": 95.6849,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 416.98989014693,
          "highestDps": 416.98989014693,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 422,
            "rankPercent": 94.74538192710934,
            "total": 8012
          }
        }
      ],
      "bestPerformanceAverage": 99.1411875,
      "medianPerformanceAverage": 96.80720000000002,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 27797,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_15.jpg",
          "itemLevel": 115,
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
          "id": 28601,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_06.jpg",
          "itemLevel": 115,
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
          "id": 28746,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
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
          "rankPercent": 91.147192099176,
          "total": 10607,
          "bestAmount": 1202.3245199689,
          "medianPerformance": 58.40603283909605,
          "averagePerformance": 65.35260944220231,
          "totalKills": 4,
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
          "rankPercent": 85.68710487863743,
          "total": 10607,
          "bestAmount": 609.21761106861,
          "medianPerformance": 72.92438683987436,
          "averagePerformance": 70.4191738321979,
          "totalKills": 4,
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
          "rankPercent": 86.7160548417716,
          "total": 10610,
          "bestAmount": 1038.4323346812,
          "medianPerformance": 67.26663851111336,
          "averagePerformance": 67.26663851111336,
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
          "rankPercent": 83.83172867541667,
          "total": 10610,
          "bestAmount": 567.93913999224,
          "medianPerformance": 72.24179027732387,
          "averagePerformance": 72.24179027732387,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 91.7743,
          "medianPerformance": 85.7491,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1532.5075883678,
          "highestDps": 1532.5075883678,
          "spec": "Enhancement",
          "allStars": {
            "points": 103.44,
            "rank": 1645,
            "rankPercent": 89.93756885787734,
            "total": 16338
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 75.1319,
          "medianPerformance": 55.2994,
          "totalKills": 3,
          "fastestKill": 186240,
          "bestAmount": 999.3484393966,
          "highestDps": 999.3484393966,
          "spec": "Enhancement",
          "allStars": {
            "points": 62.79,
            "rank": 7703,
            "rankPercent": 52.771645818003435,
            "total": 16308
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.0875,
          "medianPerformance": 88.0575,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1490.3903187736,
          "highestDps": 1490.3903187736,
          "spec": "Enhancement",
          "allStars": {
            "points": 111.21,
            "rank": 630,
            "rankPercent": 96.07708619184234,
            "total": 16034
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 96.1275,
          "medianPerformance": 84.7948,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1862.3220505337,
          "highestDps": 1862.3220505337,
          "spec": "Enhancement",
          "allStars": {
            "points": 108.25,
            "rank": 768,
            "rankPercent": 95.05257047023157,
            "total": 15503
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.2729,
          "medianPerformance": 67.2136,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1803.186899392,
          "highestDps": 1803.186899392,
          "spec": "Enhancement",
          "allStars": {
            "points": 112.6,
            "rank": 523,
            "rankPercent": 96.62157789139862,
            "total": 15451
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 54.329,
          "medianPerformance": 33.0807,
          "totalKills": 3,
          "fastestKill": 409306,
          "bestAmount": 631.31220903363,
          "highestDps": 631.31220903363,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 6772,
            "rankPercent": 45.99617163821981,
            "total": 12538
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 92.6358,
          "medianPerformance": 92.6358,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 984.24421113189,
          "highestDps": 984.24421113189,
          "spec": "Enhancement",
          "allStars": {
            "points": 105.59,
            "rank": 1410,
            "rankPercent": 90.84470435347629,
            "total": 15390
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 79.3911,
          "medianPerformance": 79.3911,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 1502.6532528147,
          "highestDps": 1502.6532528147,
          "spec": "Enhancement",
          "allStars": {
            "points": 90.83,
            "rank": 3644,
            "rankPercent": 76.27637405574369,
            "total": 15356
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 68.9343,
          "medianPerformance": 68.9343,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 1289.5915358922,
          "highestDps": 1289.5915358922,
          "spec": "Enhancement",
          "allStars": {
            "points": 73.44,
            "rank": 5491,
            "rankPercent": 64.24384525205159,
            "total": 15354
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 81.8584,
          "medianPerformance": 81.8584,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 847.56101842901,
          "highestDps": 847.56101842901,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 2789,
            "rankPercent": 78.88998258499281,
            "total": 13207
          }
        }
      ],
      "bestPerformanceAverage": 87.2944125,
      "medianPerformanceAverage": 77.75945,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 30834,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
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
          "rankPercent": 99.09847037199184,
          "total": 8268,
          "bestAmount": 1419.5420428861,
          "medianPerformance": 91.89123269270999,
          "averagePerformance": 78.90710979153882,
          "totalKills": 3,
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
          "rankPercent": 98.38970121299707,
          "total": 8268,
          "bestAmount": 749.25938429817,
          "medianPerformance": 98.33642022351694,
          "averagePerformance": 82.3246346223183,
          "totalKills": 3,
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
          "rankPercent": 97.11087525541699,
          "total": 8607,
          "bestAmount": 1185.6001312932,
          "medianPerformance": 90.71218702320122,
          "averagePerformance": 90.59315592253284,
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
          "rankPercent": 96.73812153772683,
          "total": 8607,
          "bestAmount": 663.90512816439,
          "medianPerformance": 96.00837744744352,
          "averagePerformance": 86.97211888613015,
          "totalKills": 3,
          "fastestKill": 3965181,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.6729,
          "medianPerformance": 95.4652,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1918.6820718692,
          "highestDps": 1918.6820718692,
          "spec": "Combat",
          "allStars": {
            "points": 114.5,
            "rank": 78,
            "rankPercent": 99.4867693128041,
            "total": 15003
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 98.6732,
          "medianPerformance": 96.9381,
          "totalKills": 3,
          "fastestKill": 186240,
          "bestAmount": 1465.9402886973,
          "highestDps": 1465.9402886973,
          "spec": "Combat",
          "allStars": {
            "points": 110.81,
            "rank": 282,
            "rankPercent": 98.15398764945473,
            "total": 15222
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 98.2296,
          "medianPerformance": 95.8066,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1568.3623488837,
          "highestDps": 1568.3623488837,
          "spec": "Combat",
          "allStars": {
            "points": 112.66,
            "rank": 345,
            "rankPercent": 97.69436997319035,
            "total": 14920
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.1814,
          "medianPerformance": 89.1755,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 2322.3979640583,
          "highestDps": 2322.3979640583,
          "spec": "Combat",
          "allStars": {
            "points": 111.94,
            "rank": 174,
            "rankPercent": 98.79198380001397,
            "total": 14321
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 94.0134,
          "medianPerformance": 90.333,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1646.3315551469,
          "highestDps": 1646.3315551469,
          "spec": "Combat",
          "allStars": {
            "points": 106.22,
            "rank": 1227,
            "rankPercent": 91.37409413916836,
            "total": 14213
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 86.2967,
          "medianPerformance": 68.1072,
          "totalKills": 3,
          "fastestKill": 409306,
          "bestAmount": 869.30560509741,
          "highestDps": 869.30560509741,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 1813,
            "rankPercent": 84.67134760172574,
            "total": 11821
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.4302,
          "medianPerformance": 94.6602,
          "totalKills": 3,
          "fastestKill": 278120,
          "bestAmount": 1097.8570401266,
          "highestDps": 1097.8570401266,
          "spec": "Combat",
          "allStars": {
            "points": 112.28,
            "rank": 487,
            "rankPercent": 96.583960075912,
            "total": 14227
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.8745,
          "medianPerformance": 98.4005,
          "totalKills": 3,
          "fastestKill": 150193,
          "bestAmount": 1754.402008022,
          "highestDps": 1754.402008022,
          "spec": "Combat",
          "allStars": {
            "points": 116.77,
            "rank": 123,
            "rankPercent": 99.14917358253713,
            "total": 14339
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 91.3043,
          "medianPerformance": 88.171,
          "totalKills": 3,
          "fastestKill": 107182,
          "bestAmount": 1487.4574311446,
          "highestDps": 1487.4574311446,
          "spec": "Combat",
          "allStars": {
            "points": 97.5,
            "rank": 1729,
            "rankPercent": 87.86261150523285,
            "total": 14237
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 92.8819,
          "medianPerformance": 81.3843,
          "totalKills": 3,
          "fastestKill": 427207,
          "bestAmount": 996.41391643864,
          "highestDps": 996.41391643864,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 983,
            "rankPercent": 91.65888048925507,
            "total": 11773
          }
        }
      ],
      "bestPerformanceAverage": 97.2974375,
      "medianPerformanceAverage": 93.6187625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28429,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_2h_blacksmithing_02.jpg",
          "itemLevel": 123,
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
          "rankPercent": 85.58811987146242,
          "total": 4493,
          "bestAmount": 1158.4422710694,
          "medianPerformance": 78.64520246220656,
          "averagePerformance": 70.80837446740448,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 90.36306954970934,
          "total": 4493,
          "bestAmount": 600.14642902931,
          "medianPerformance": 54.70137577336916,
          "averagePerformance": 61.234554245942526,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 91.1352601756453,
          "total": 6360,
          "bestAmount": 1191.1433693323,
          "medianPerformance": 62.88574989252207,
          "averagePerformance": 70.49178938964356,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 74.58195535796746,
          "total": 4143,
          "bestAmount": 494.76269290301,
          "medianPerformance": 64.35326440294247,
          "averagePerformance": 47.39900663751288,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 86.9728,
          "medianPerformance": 85.6051,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1584.2252846835,
          "highestDps": 1584.2252846835,
          "spec": "Retribution",
          "allStars": {
            "points": 96.88,
            "rank": 1489,
            "rankPercent": 84.59946180914925,
            "total": 9662
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 87.7106,
          "medianPerformance": 80.8337,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1289.5414372093,
          "highestDps": 1289.5414372093,
          "spec": "Retribution",
          "allStars": {
            "points": 96.78,
            "rank": 1344,
            "rankPercent": 86.33635161257503,
            "total": 9829
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 96.4163,
          "medianPerformance": 81.2273,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1586.8878507643,
          "highestDps": 1586.8878507643,
          "spec": "Retribution",
          "allStars": {
            "points": 108.54,
            "rank": 431,
            "rankPercent": 95.70772609303255,
            "total": 10018
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.2136,
          "medianPerformance": 87.6006,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 2002.8597663122,
          "highestDps": 2002.8597663122,
          "spec": "Retribution",
          "allStars": {
            "points": 110.95,
            "rank": 265,
            "rankPercent": 96.94409075124436,
            "total": 8639
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 96.7159,
          "medianPerformance": 76.0428,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1830.4251645909,
          "highestDps": 1830.4251645909,
          "spec": "Retribution",
          "allStars": {
            "points": 110.79,
            "rank": 349,
            "rankPercent": 96.05039155600953,
            "total": 8811
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 90.5487,
          "medianPerformance": 17.3766,
          "totalKills": 3,
          "fastestKill": 443565,
          "bestAmount": 867.75106241475,
          "highestDps": 867.75106241475,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 1089,
            "rankPercent": 86.74625411134122,
            "total": 8209
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 96.0204,
          "medianPerformance": 52.5715,
          "totalKills": 3,
          "fastestKill": 302151,
          "bestAmount": 1206.562281773,
          "highestDps": 1206.562281773,
          "spec": "Retribution",
          "allStars": {
            "points": 110.99,
            "rank": 420,
            "rankPercent": 95.2569617387367,
            "total": 8834
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 84.9888,
          "medianPerformance": 83.2498,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1645.2107534019,
          "highestDps": 1645.2107534019,
          "spec": "Retribution",
          "allStars": {
            "points": 98.09,
            "rank": 1549,
            "rankPercent": 83.58430540827148,
            "total": 9430
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.8705,
          "medianPerformance": 79.2922,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 1753.2755199781,
          "highestDps": 1753.2755199781,
          "spec": "Retribution",
          "allStars": {
            "points": 103.66,
            "rank": 558,
            "rankPercent": 93.94367728607155,
            "total": 9197
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 80.0356,
          "medianPerformance": 76.151,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 949.26815156643,
          "highestDps": 949.26815156643,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 1992,
            "rankPercent": 73.74736286919831,
            "total": 7584
          }
        }
      ],
      "bestPerformanceAverage": 92.61361249999999,
      "medianPerformanceAverage": 78.30287499999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "retrivutia": {
      "characterName": "Retrivutia",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "overallRanks": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": "Character not found on spineshatter-eu",
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
          "id": 30641,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 115,
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
          "rankPercent": 90.86341362470866,
          "total": 4236,
          "bestAmount": 390.63596039407,
          "medianPerformance": 65.91524255947216,
          "averagePerformance": 74.23025909149263,
          "totalKills": 3,
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
          "rankPercent": 97.2258534579883,
          "total": 4236,
          "bestAmount": 390.74576635594,
          "medianPerformance": 91.7103496042508,
          "averagePerformance": 90.93529786195627,
          "totalKills": 3,
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
          "rankPercent": 65.85970690323455,
          "total": 4119,
          "bestAmount": 277.51649486291,
          "medianPerformance": 65.85970690323455,
          "averagePerformance": 65.85970690323455,
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
          "rankPercent": 74.51808671609871,
          "total": 4119,
          "bestAmount": 247.83527089074,
          "medianPerformance": 74.51808671609871,
          "averagePerformance": 74.51808671609871,
          "totalKills": 1,
          "fastestKill": 5803613,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 98.1795,
          "medianPerformance": 89.8502,
          "totalKills": 2,
          "fastestKill": 114597,
          "bestAmount": 616.97077584928,
          "highestDps": 616.97077584928,
          "spec": "Protection",
          "allStars": {
            "points": 105.52,
            "rank": 207,
            "rankPercent": 96.9522118656606,
            "total": 6759
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 53.3361,
          "medianPerformance": 49.6905,
          "totalKills": 2,
          "fastestKill": 187766,
          "bestAmount": 235.50056985823,
          "highestDps": 235.50056985823,
          "spec": "Justicar",
          "allStars": {
            "points": 51.15,
            "rank": 6247,
            "rankPercent": 44.39597614172527,
            "total": 11233
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 79.3174,
          "medianPerformance": 64.7028,
          "totalKills": 2,
          "fastestKill": 179077,
          "bestAmount": 356.58962345807,
          "highestDps": 356.58962345807,
          "spec": "Justicar",
          "allStars": {
            "points": 80.78,
            "rank": 2833,
            "rankPercent": 73.14112291350531,
            "total": 10544
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.5955,
          "medianPerformance": 87.9251,
          "totalKills": 2,
          "fastestKill": 142609,
          "bestAmount": 1169.3792116907,
          "highestDps": 1169.3792116907,
          "spec": "Protection",
          "allStars": {
            "points": 112.1,
            "rank": 102,
            "rankPercent": 99.0091239085647,
            "total": 10193
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 81.4309,
          "medianPerformance": 63.1853,
          "totalKills": 2,
          "fastestKill": 220836,
          "bestAmount": 243.96384647431,
          "highestDps": 243.96384647431,
          "spec": "Justicar",
          "allStars": {
            "points": 79.26,
            "rank": 3128,
            "rankPercent": 75.25911860115515,
            "total": 12639
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 86.0678,
          "medianPerformance": 78.0813,
          "totalKills": 2,
          "fastestKill": 402466,
          "bestAmount": 257.93221897759,
          "highestDps": 257.93221897759,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 1583,
            "rankPercent": 81.13747466316919,
            "total": 8387
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 84.793,
          "medianPerformance": 84.793,
          "totalKills": 1,
          "fastestKill": 307948,
          "bestAmount": 80.309013210022,
          "highestDps": 80.309013210022,
          "spec": "Justicar",
          "allStars": {
            "points": 85.01,
            "rank": 2224,
            "rankPercent": 80.99025141098,
            "total": 11694
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 80.7153,
          "medianPerformance": 80.7153,
          "totalKills": 1,
          "fastestKill": 170857,
          "bestAmount": 633.12009458202,
          "highestDps": 633.12009458202,
          "spec": "Protection",
          "allStars": {
            "points": 86.33,
            "rank": 1661,
            "rankPercent": 75.67765567765568,
            "total": 6825
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 79.5473,
          "medianPerformance": 79.5473,
          "totalKills": 1,
          "fastestKill": 111349,
          "bestAmount": 364.56546533871,
          "highestDps": 364.56546533871,
          "spec": "Justicar",
          "allStars": {
            "points": 78.08,
            "rank": 3073,
            "rankPercent": 71.896441313695,
            "total": 10931
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 57.7823,
          "medianPerformance": 57.7823,
          "totalKills": 1,
          "fastestKill": 467406,
          "bestAmount": 256.74467165591,
          "highestDps": 256.74467165591,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 3871,
            "rankPercent": 51.6974538192711,
            "total": 8012
          }
        }
      ],
      "bestPerformanceAverage": 82.114375,
      "medianPerformanceAverage": 75.0511875,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28733,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28748,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "permanentEnchantID": null,
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
          "id": 29168,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
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
          "id": 29376,
          "slot": 13,
          "quality": 4,
          "icon": "inv_valentineperfumebottle.jpg",
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
          "rankPercent": 80.9531617934707,
          "total": 4944,
          "bestAmount": 601.38096455877,
          "medianPerformance": 12.316888554799018,
          "averagePerformance": 35.1949275980352,
          "totalKills": 3,
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
          "rankPercent": 87.28254075372274,
          "total": 4738,
          "bestAmount": 591.42380593078,
          "medianPerformance": 87.28254075372274,
          "averagePerformance": 87.28254075372274,
          "totalKills": 1,
          "fastestKill": 5811499,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 80,
          "medianPerformance": 77.5,
          "totalKills": 2,
          "fastestKill": 114612,
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
          "rankPercent": 50,
          "medianPerformance": 50,
          "totalKills": 2,
          "fastestKill": 187774,
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
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 2,
          "fastestKill": 179077,
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
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 75,
          "medianPerformance": 75,
          "totalKills": 2,
          "fastestKill": 142613,
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
          "rankPercent": 74.64853954774705,
          "medianPerformance": 67.32426977387352,
          "totalKills": 2,
          "fastestKill": 220836,
          "bestAmount": 1.2271549928454,
          "highestDps": 1.2271549928454,
          "spec": "Holy",
          "allStars": {
            "points": 74.67791056410863,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 69.76804154961631,
          "medianPerformance": 59.88402077480816,
          "totalKills": 2,
          "fastestKill": 402466,
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
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 307948,
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
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 1,
          "fastestKill": 170887,
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
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 75,
          "medianPerformance": 75,
          "totalKills": 1,
          "fastestKill": 111361,
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
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 1,
          "fastestKill": 467406,
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
      "bestPerformanceAverage": 61.831067443468385,
      "medianPerformanceAverage": 60.60303372173419,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "medianPerformance": 44.667270595760044,
          "averagePerformance": 44.667270595760044,
          "totalKills": 2,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 68.3859040733544,
          "total": 2826,
          "bestAmount": 514.68275103131,
          "medianPerformance": 46.42504239276309,
          "averagePerformance": 46.42504239276309,
          "totalKills": 2,
          "fastestKill": 4906131,
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
          "medianPerformance": 56.71222660247291,
          "averagePerformance": 56.71222660247291,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 51.1091001065328,
          "total": 4170,
          "bestAmount": 483.42115293239,
          "medianPerformance": 48.87757601938533,
          "averagePerformance": 48.87757601938533,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.2903,
          "medianPerformance": 77.7344,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1706.3741750162,
          "highestDps": 1706.3741750162,
          "spec": "Affliction",
          "allStars": {
            "points": 108.89,
            "rank": 326,
            "rankPercent": 94.59234608985025,
            "total": 6010
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 67.1614,
          "medianPerformance": 38.8463,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 982.81635788893,
          "highestDps": 982.81635788893,
          "spec": "Affliction",
          "allStars": {
            "points": 72.37,
            "rank": 2220,
            "rankPercent": 63.39491916859122,
            "total": 6062
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 74.0922,
          "medianPerformance": 69.3091,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1037.54275041,
          "highestDps": 1037.54275041,
          "spec": "Affliction",
          "allStars": {
            "points": 78.29,
            "rank": 1916,
            "rankPercent": 65.760772394064,
            "total": 5593
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 59.2212,
          "medianPerformance": 34.0185,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1132.2935557974,
          "highestDps": 1132.2935557974,
          "spec": "Affliction",
          "allStars": {
            "points": 61.96,
            "rank": 2883,
            "rankPercent": 51.144261739277844,
            "total": 5899
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 50.1827,
          "medianPerformance": 50.1827,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1196.3829179905,
          "highestDps": 1196.3829179905,
          "spec": "Destruction",
          "allStars": {
            "points": 58.69,
            "rank": 16313,
            "rankPercent": 40.9349313828439,
            "total": 27617
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 56.3462,
          "medianPerformance": 47.743,
          "totalKills": 2,
          "fastestKill": 443565,
          "bestAmount": 714.76711127911,
          "highestDps": 714.76711127911,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 2488,
            "rankPercent": 54.029574861367834,
            "total": 5410
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 77.4492,
          "medianPerformance": 56.4164,
          "totalKills": 2,
          "fastestKill": 302151,
          "bestAmount": 1077.931233059,
          "highestDps": 1077.931233059,
          "spec": "Affliction",
          "allStars": {
            "points": 88.98,
            "rank": 1483,
            "rankPercent": 74.57539886773031,
            "total": 5829
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 95.338,
          "medianPerformance": 74.5569,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 1628.3703949552,
          "highestDps": 1628.3703949552,
          "spec": "Affliction",
          "allStars": {
            "points": 109.56,
            "rank": 311,
            "rankPercent": 94.657014822475,
            "total": 5802
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 80.1513,
          "medianPerformance": 67.1456,
          "totalKills": 2,
          "fastestKill": 110703,
          "bestAmount": 1272.526683087,
          "highestDps": 1272.526683087,
          "spec": "Affliction",
          "allStars": {
            "points": 87.75,
            "rank": 1268,
            "rankPercent": 77.73677736777368,
            "total": 5691
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 87.4274,
          "medianPerformance": 50.8583,
          "totalKills": 2,
          "fastestKill": 439454,
          "bestAmount": 1014.2065208488,
          "highestDps": 1014.2065208488,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 670,
            "rankPercent": 86.55006031363088,
            "total": 4974
          }
        }
      ],
      "bestPerformanceAverage": 74.8607875,
      "medianPerformanceAverage": 58.5262375,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28731,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_32.jpg",
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
          "id": 28511,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
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
          "id": 31329,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 28522,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2343,
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
          "medianPerformance": 77.79211823303459,
          "averagePerformance": 79.07518388168154,
          "totalKills": 4,
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
          "rankPercent": 81.12128908351757,
          "total": 5662,
          "bestAmount": 989.57358250079,
          "medianPerformance": 77.2600430377347,
          "averagePerformance": 77.2600430377347,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 94.8825,
          "medianPerformance": 84.9379,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 917.99959859333,
          "highestDps": 917.99959859333,
          "spec": "Holy",
          "allStars": {
            "points": 103.1,
            "rank": 1406,
            "rankPercent": 91.91506502474392,
            "total": 17378
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 94.1686,
          "medianPerformance": 93.024,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 1194.8681649266,
          "highestDps": 1194.8681649266,
          "spec": "Holy",
          "allStars": {
            "points": 101.03,
            "rank": 1384,
            "rankPercent": 92.23687903452146,
            "total": 17815
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 80.8627,
          "medianPerformance": 75.3992,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1015.4464236576,
          "highestDps": 1015.4464236576,
          "spec": "Holy",
          "allStars": {
            "points": 86.28,
            "rank": 3758,
            "rankPercent": 78.73195584489103,
            "total": 17665
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 94.9063,
          "medianPerformance": 87.2596,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1512.6942352624,
          "highestDps": 1512.6942352624,
          "spec": "Holy",
          "allStars": {
            "points": 106.55,
            "rank": 1017,
            "rankPercent": 94.05535076941081,
            "total": 17091
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 89.058,
          "medianPerformance": 80.5729,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1118.2339674446,
          "highestDps": 1118.2339674446,
          "spec": "Holy",
          "allStars": {
            "points": 99.63,
            "rank": 2067,
            "rankPercent": 87.71992391821207,
            "total": 16824
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 80.6923,
          "medianPerformance": 67.4286,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 772.41910571183,
          "highestDps": 772.41910571183,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 3655,
            "rankPercent": 74.1839762611276,
            "total": 14154
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 89.9677,
          "medianPerformance": 89.7643,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 719.65698259744,
          "highestDps": 719.65698259744,
          "spec": "Holy",
          "allStars": {
            "points": 99.15,
            "rank": 1918,
            "rankPercent": 88.44693545470982,
            "total": 16593
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 74.3289,
          "medianPerformance": 65.071,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 2338.6340624031,
          "highestDps": 2338.6340624031,
          "spec": "Holy",
          "allStars": {
            "points": 79.14,
            "rank": 5940,
            "rankPercent": 65.75761070110701,
            "total": 17344
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 87.9904,
          "medianPerformance": 68.7252,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 942.35972458062,
          "highestDps": 942.35972458062,
          "spec": "Holy",
          "allStars": {
            "points": 96.15,
            "rank": 2267,
            "rankPercent": 86.43357480692092,
            "total": 16703
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 84.7511,
          "medianPerformance": 76.2671,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 759.20505941302,
          "highestDps": 759.20505941302,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 2668,
            "rankPercent": 80.83225528244934,
            "total": 13914
          }
        }
      ],
      "bestPerformanceAverage": 88.27063749999999,
      "medianPerformanceAverage": 80.5942625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28771,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_46.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2629
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
          "medianPerformance": 95.40815606732549,
          "averagePerformance": 91.91234183355725,
          "totalKills": 3,
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
          "rankPercent": 96.64774941308671,
          "total": 635,
          "bestAmount": 1198.8650800373,
          "medianPerformance": 96.64774941308671,
          "averagePerformance": 95.10176514512666,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps&metric=hps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.6309,
          "medianPerformance": 99.2751,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1166.2712138971,
          "highestDps": 1166.2712138971,
          "spec": "Holy",
          "allStars": {
            "points": 113.56,
            "rank": 87,
            "rankPercent": 99.50512141788468,
            "total": 17378
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 90.7685,
          "medianPerformance": 89.6181,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1116.0277049575,
          "highestDps": 1116.0277049575,
          "spec": "Holy",
          "allStars": {
            "points": 95.94,
            "rank": 2202,
            "rankPercent": 87.64524277294414,
            "total": 17815
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.4171,
          "medianPerformance": 85.2714,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1512.6767724918,
          "highestDps": 1512.6767724918,
          "spec": "Holy",
          "allStars": {
            "points": 108.11,
            "rank": 469,
            "rankPercent": 97.35069346164732,
            "total": 17665
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.781,
          "medianPerformance": 93.6516,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1629.6135090477,
          "highestDps": 1629.6135090477,
          "spec": "Holy",
          "allStars": {
            "points": 110.57,
            "rank": 484,
            "rankPercent": 97.17395120238722,
            "total": 17091
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 93.4994,
          "medianPerformance": 93.4994,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 800.75965635013,
          "highestDps": 800.75965635013,
          "spec": "Discipline",
          "allStars": {
            "points": 100.32,
            "rank": 456,
            "rankPercent": 88.70407149950347,
            "total": 4028
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.5415,
          "medianPerformance": 95.9856,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 976.21318183355,
          "highestDps": 976.21318183355,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 447,
            "rankPercent": 96.84894729405116,
            "total": 14154
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 94.0014,
          "medianPerformance": 87.6199,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 767.45054911945,
          "highestDps": 767.45054911945,
          "spec": "Holy",
          "allStars": {
            "points": 103.87,
            "rank": 1237,
            "rankPercent": 92.55107575483638,
            "total": 16593
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 97.3976,
          "medianPerformance": 97.1549,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 2972.7160963798,
          "highestDps": 2972.7160963798,
          "spec": "Holy",
          "allStars": {
            "points": 112.34,
            "rank": 667,
            "rankPercent": 96.1600553505535,
            "total": 17344
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.7896,
          "medianPerformance": 97.8155,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 1323.2699200441,
          "highestDps": 1323.2699200441,
          "spec": "Holy",
          "allStars": {
            "points": 112.79,
            "rank": 78,
            "rankPercent": 99.53900496916721,
            "total": 16703
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 98.9792,
          "medianPerformance": 96.7691,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 957.22475156172,
          "highestDps": 957.22475156172,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 254,
            "rankPercent": 98.18168750898376,
            "total": 13914
          }
        }
      ],
      "bestPerformanceAverage": 96.2856875,
      "medianPerformanceAverage": 92.9882375,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    },
    "serjioo": {
      "characterName": "Serjioo",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 101900347,
      "gear": [],
      "overallRanks": [
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses",
          "label": "SSC bosses",
          "rank": null,
          "rankPercent": 64.92197958026969,
          "total": 577,
          "bestAmount": 993.33909825581,
          "medianPerformance": 59.342613737041695,
          "averagePerformance": 49.19126524968819,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 79.22999886183582,
          "total": 3447,
          "bestAmount": 515.80685472932,
          "medianPerformance": 32.78274498171842,
          "averagePerformance": 46.1296789395246,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 63.393254617625956,
          "total": 3135,
          "bestAmount": 886.61144909196,
          "medianPerformance": 39.76737699808391,
          "averagePerformance": 35.749461772235335,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 68.81609097319132,
          "total": 3135,
          "bestAmount": 453.9250111106,
          "medianPerformance": 21.791850365482613,
          "averagePerformance": 37.155352245251244,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 85.4739,
          "medianPerformance": 73.1014,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1433.3495326034,
          "highestDps": 1433.3495326034,
          "spec": "Survival",
          "allStars": {
            "points": 90.64,
            "rank": 1582,
            "rankPercent": 79.12044374009508,
            "total": 7572
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 67.5969,
          "medianPerformance": 63.5835,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 916.67203608247,
          "highestDps": 916.67203608247,
          "spec": "Survival",
          "allStars": {
            "points": 62.96,
            "rank": 3485,
            "rankPercent": 54.570348154909375,
            "total": 7669
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 77.782,
          "medianPerformance": 58.1547,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1038.2464182788,
          "highestDps": 1038.2464182788,
          "spec": "Survival",
          "allStars": {
            "points": 78.84,
            "rank": 2404,
            "rankPercent": 68.1890389197776,
            "total": 7554
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 85.2135,
          "medianPerformance": 74.3464,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1516.5679481448,
          "highestDps": 1516.5679481448,
          "spec": "Survival",
          "allStars": {
            "points": 85.05,
            "rank": 1953,
            "rankPercent": 73.47826086956522,
            "total": 7360
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 75.2942,
          "medianPerformance": 67.4061,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1430.5277899531,
          "highestDps": 1430.5277899531,
          "spec": "Survival",
          "allStars": {
            "points": 79.74,
            "rank": 2369,
            "rankPercent": 67.45017182130584,
            "total": 7275
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 67.6252,
          "medianPerformance": 18.0525,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 747.83571024884,
          "highestDps": 747.83571024884,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 2815,
            "rankPercent": 56.60086366440469,
            "total": 6484
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 83.3012,
          "medianPerformance": 69.7955,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 938.92048377913,
          "highestDps": 938.92048377913,
          "spec": "Survival",
          "allStars": {
            "points": 83.29,
            "rank": 2132,
            "rankPercent": 70.57036320950145,
            "total": 7241
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 61.2485,
          "medianPerformance": 55.6941,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 857.81766353018,
          "highestDps": 857.81766353018,
          "spec": "Survival",
          "allStars": {
            "points": 58.34,
            "rank": 3865,
            "rankPercent": 47.4571661680718,
            "total": 7354
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 81.6258,
          "medianPerformance": 60.9575,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 1408.4622819616,
          "highestDps": 1408.4622819616,
          "spec": "Survival",
          "allStars": {
            "points": 85.09,
            "rank": 1858,
            "rankPercent": 74.26195426195426,
            "total": 7215
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 51.8994,
          "medianPerformance": 34.7288,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 792.29908022228,
          "highestDps": 792.29908022228,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 3587,
            "rankPercent": 43.08839866687828,
            "total": 6301
          }
        }
      ],
      "bestPerformanceAverage": 77.19200000000001,
      "medianPerformanceAverage": 65.37989999999999,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": true
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
          "id": 31283,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_23.jpg",
          "itemLevel": 106,
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
          "id": 31290,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 109,
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
          "id": 24252,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2621,
          "temporaryEnchantID": null
        },
        {
          "id": 31308,
          "slot": 16,
          "quality": 3,
          "icon": "inv_staff_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2669,
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
          "rankPercent": 1.457721118944513,
          "total": 1942,
          "bestAmount": 401.40670833491,
          "medianPerformance": 1.4575559759608108,
          "averagePerformance": 1.4575559759608108,
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
          "rankPercent": 8.431923773296274,
          "total": 1942,
          "bestAmount": 212.29284221747,
          "medianPerformance": 4.640317559308297,
          "averagePerformance": 4.640317559308297,
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
          "rankPercent": 23.1034,
          "medianPerformance": 23.1034,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 627.69071395015,
          "highestDps": 627.69071395015,
          "spec": "Balance",
          "allStars": {
            "points": 38.42,
            "rank": 7367,
            "rankPercent": 14.299011052937754,
            "total": 8595
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 32.6057,
          "medianPerformance": 32.6057,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 532.11664588508,
          "highestDps": 532.11664588508,
          "spec": "Balance",
          "allStars": {
            "points": 32.77,
            "rank": 7101,
            "rankPercent": 17.67161410018553,
            "total": 8624
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 45.8716,
          "medianPerformance": 45.8716,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 681.25925813961,
          "highestDps": 681.25925813961,
          "spec": "Balance",
          "allStars": {
            "points": 49.23,
            "rank": 5778,
            "rankPercent": 31.365094451704884,
            "total": 8417
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 3.14093,
          "medianPerformance": 3.14093,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 310.94952629121,
          "highestDps": 310.94952629121,
          "spec": "Balance",
          "allStars": {
            "points": 19.29,
            "rank": 8019,
            "rankPercent": -0.526579739217653,
            "total": 7976
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 0.43719,
          "medianPerformance": 0.43719,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 128.6276016427,
          "highestDps": 128.6276016427,
          "spec": "Balance",
          "allStars": {
            "points": 8.26,
            "rank": 8133,
            "rankPercent": -1.3585940421288796,
            "total": 8023
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 4.63388,
          "medianPerformance": 4.63388,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 335.83558994957,
          "highestDps": 335.83558994957,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 6895,
            "rankPercent": 0.39011703511053314,
            "total": 6921
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
      "bestPerformanceAverage": 21.031764000000003,
      "medianPerformanceAverage": 21.031764000000003,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 28350,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_20.jpg",
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
          "id": 29807,
          "slot": 6,
          "quality": 2,
          "icon": "inv_belt_01.jpg",
          "itemLevel": 111,
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
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30399,
          "slot": 9,
          "quality": 2,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 111,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23520,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_26.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 31729,
          "slot": 12,
          "quality": 2,
          "icon": "inv_jewelry_ring_10.jpg",
          "itemLevel": 99,
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
          "id": 29776,
          "slot": 14,
          "quality": 2,
          "icon": "spell_nature_abolishmagic.jpg",
          "itemLevel": 108,
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
          "id": 28428,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_2h_blacksmithing_01.jpg",
          "itemLevel": 107,
          "permanentEnchantID": 1900,
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
          "id": 30279,
          "slot": 18,
          "quality": 2,
          "icon": "inv_weapon_rifle_06.jpg",
          "itemLevel": 111,
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 25855,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_84.jpg",
          "itemLevel": 123,
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
          "id": 29079,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_47.jpg",
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
          "id": 29078,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_21.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2747,
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
          "id": 21847,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 105,
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
          "id": 28793,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
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
          "rankPercent": 77.49299836650773,
          "total": 10783,
          "bestAmount": 1192.5809367031,
          "medianPerformance": 54.50432078315502,
          "averagePerformance": 58.868534334358,
          "totalKills": 4,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 80.04103675897262,
          "total": 10783,
          "bestAmount": 636.49360361556,
          "medianPerformance": 53.334335168291005,
          "averagePerformance": 58.062742684829104,
          "totalKills": 4,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 63.53628063873056,
          "total": 17514,
          "bestAmount": 1135.1825455817,
          "medianPerformance": 55.39065936480836,
          "averagePerformance": 55.39065936480836,
          "totalKills": 2,
          "fastestKill": 4176370,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 73.20295827848247,
          "total": 10635,
          "bestAmount": 560.41341011141,
          "medianPerformance": 58.104143210995616,
          "averagePerformance": 58.104143210995616,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 88.8717,
          "medianPerformance": 86.8347,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1614.5431329388,
          "highestDps": 1614.5431329388,
          "spec": "Arcane",
          "allStars": {
            "points": 88.34,
            "rank": 5760,
            "rankPercent": 78.93793658340343,
            "total": 27343
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 83.0106,
          "medianPerformance": 71.5268,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1343.2799056952,
          "highestDps": 1343.2799056952,
          "spec": "Arcane",
          "allStars": {
            "points": 87.97,
            "rank": 5413,
            "rankPercent": 80.38988332487861,
            "total": 27598
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 81.1794,
          "medianPerformance": 80.6457,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1303.5370388026,
          "highestDps": 1303.5370388026,
          "spec": "Arcane",
          "allStars": {
            "points": 88.37,
            "rank": 5886,
            "rankPercent": 78.26327842210239,
            "total": 27074
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 81.8817,
          "medianPerformance": 56.4086,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 1463.1040180551,
          "highestDps": 1463.1040180551,
          "spec": "Arcane",
          "allStars": {
            "points": 83.01,
            "rank": 6920,
            "rankPercent": 73.68801338606632,
            "total": 26296
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 88.0158,
          "medianPerformance": 59.5149,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 1553.3936990197,
          "highestDps": 1553.3936990197,
          "spec": "Arcane",
          "allStars": {
            "points": 90.79,
            "rank": 5225,
            "rankPercent": 79.75821450712957,
            "total": 25808
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 79.898,
          "medianPerformance": 72.5287,
          "totalKills": 3,
          "fastestKill": 443565,
          "bestAmount": 916.26255452978,
          "highestDps": 916.26255452978,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 7147,
            "rankPercent": 68.01253357206804,
            "total": 22340
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 73.5164,
          "medianPerformance": 62.721,
          "totalKills": 2,
          "fastestKill": 302151,
          "bestAmount": 1126.2348957971,
          "highestDps": 1126.2348957971,
          "spec": "Arcane",
          "allStars": {
            "points": 80.48,
            "rank": 8219,
            "rankPercent": 69.31864849729327,
            "total": 26785
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 72.1067,
          "medianPerformance": 69.7078,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 1496.7806173249,
          "highestDps": 1496.7806173249,
          "spec": "Arcane",
          "allStars": {
            "points": 80.37,
            "rank": 8159,
            "rankPercent": 68.9585632205776,
            "total": 26281
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 66.1881,
          "medianPerformance": 50.0321,
          "totalKills": 2,
          "fastestKill": 110703,
          "bestAmount": 1365.6780240832,
          "highestDps": 1365.6780240832,
          "spec": "Arcane",
          "allStars": {
            "points": 70.61,
            "rank": 9831,
            "rankPercent": 62.469456322541234,
            "total": 26192
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 59.2333,
          "medianPerformance": 55.8156,
          "totalKills": 2,
          "fastestKill": 439573,
          "bestAmount": 997.99240529712,
          "highestDps": 997.99240529712,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 9966,
            "rankPercent": 55.39191548413089,
            "total": 22339
          }
        }
      ],
      "bestPerformanceAverage": 79.3463,
      "medianPerformanceAverage": 67.17395,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 33067,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_36.jpg",
          "itemLevel": 128,
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
          "rankPercent": 92.7650143322415,
          "total": 18123,
          "bestAmount": 1316.7752046729,
          "medianPerformance": 81.33543040059706,
          "averagePerformance": 82.53891966303472,
          "totalKills": 4,
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
          "rankPercent": 85.04366775017962,
          "total": 18123,
          "bestAmount": 692.14476781234,
          "medianPerformance": 77.63075562159254,
          "averagePerformance": 76.85385340531002,
          "totalKills": 4,
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
          "rankPercent": 96.20054126255049,
          "total": 18270,
          "bestAmount": 1397.080804503,
          "medianPerformance": 89.73527848995408,
          "averagePerformance": 89.73527848995408,
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
          "rankPercent": 88.71533405397146,
          "total": 18270,
          "bestAmount": 736.11651249397,
          "medianPerformance": 74.78243374536734,
          "averagePerformance": 74.78243374536734,
          "totalKills": 2,
          "fastestKill": 3965034,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 96.7435,
          "medianPerformance": 94.6983,
          "totalKills": 3,
          "fastestKill": 102130,
          "bestAmount": 1919.024772349,
          "highestDps": 1919.024772349,
          "spec": "Destruction",
          "allStars": {
            "points": 109.43,
            "rank": 1217,
            "rankPercent": 95.75715282623867,
            "total": 28660
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 79.5383,
          "medianPerformance": 57.8275,
          "totalKills": 3,
          "fastestKill": 187766,
          "bestAmount": 1134.4652386481,
          "highestDps": 1134.4652386481,
          "spec": "Destruction",
          "allStars": {
            "points": 75.06,
            "rank": 9787,
            "rankPercent": 66.33411311407734,
            "total": 29068
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 97.5992,
          "medianPerformance": 97.343,
          "totalKills": 3,
          "fastestKill": 163533,
          "bestAmount": 1565.1581026459,
          "highestDps": 1565.1581026459,
          "spec": "Destruction",
          "allStars": {
            "points": 111.37,
            "rank": 921,
            "rankPercent": 96.67413780637698,
            "total": 27662
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.2836,
          "medianPerformance": 93.6541,
          "totalKills": 3,
          "fastestKill": 115131,
          "bestAmount": 1986.4805166574,
          "highestDps": 1986.4805166574,
          "spec": "Destruction",
          "allStars": {
            "points": 112.4,
            "rank": 600,
            "rankPercent": 97.85496866606982,
            "total": 27925
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 91.1563,
          "medianPerformance": 45.8121,
          "totalKills": 3,
          "fastestKill": 203960,
          "bestAmount": 1706.8395763875,
          "highestDps": 1706.8395763875,
          "spec": "Destruction",
          "allStars": {
            "points": 103.44,
            "rank": 2946,
            "rankPercent": 89.33627837925916,
            "total": 27617
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 95.5806,
          "medianPerformance": 85.3624,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 1053.1939144071,
          "highestDps": 1053.1939144071,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 1967,
            "rankPercent": 91.86931348221671,
            "total": 24180
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 92.7602,
          "medianPerformance": 83.9727,
          "totalKills": 2,
          "fastestKill": 278120,
          "bestAmount": 1412.3292104128,
          "highestDps": 1412.3292104128,
          "spec": "Destruction",
          "allStars": {
            "points": 105.62,
            "rank": 2533,
            "rankPercent": 90.72425541268271,
            "total": 27297
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.3431,
          "medianPerformance": 97.1116,
          "totalKills": 2,
          "fastestKill": 150193,
          "bestAmount": 2008.2094371908,
          "highestDps": 2008.2094371908,
          "spec": "Destruction",
          "allStars": {
            "points": 114.04,
            "rank": 551,
            "rankPercent": 97.99387219142106,
            "total": 27416
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 97.1913,
          "medianPerformance": 95.373,
          "totalKills": 2,
          "fastestKill": 107182,
          "bestAmount": 1714.4949711705,
          "highestDps": 1714.4949711705,
          "spec": "Destruction",
          "allStars": {
            "points": 107.19,
            "rank": 1042,
            "rankPercent": 96.18876766493374,
            "total": 27314
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 81.0845,
          "medianPerformance": 72.288,
          "totalKills": 2,
          "fastestKill": 427207,
          "bestAmount": 1092.7583115445,
          "highestDps": 1092.7583115445,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 5210,
            "rankPercent": 77.87170773152081,
            "total": 23540
          }
        }
      ],
      "bestPerformanceAverage": 94.07693749999999,
      "medianPerformanceAverage": 83.22403750000001,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 29021,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_58.jpg",
          "itemLevel": 120,
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
          "id": 28385,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_14.jpg",
          "itemLevel": 123,
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
          "id": 28773,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_60.jpg",
          "itemLevel": 125,
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
          "rankPercent": 76.79827482588118,
          "total": 3546,
          "bestAmount": 1030.6639553275,
          "medianPerformance": 70.18252389351932,
          "averagePerformance": 70.18252389351932,
          "totalKills": 2,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 83.46236231664071,
          "total": 3546,
          "bestAmount": 588.18975685729,
          "medianPerformance": 62.78478787763984,
          "averagePerformance": 62.78478787763984,
          "totalKills": 2,
          "fastestKill": 4906131,
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
          "medianPerformance": 79.19548153055264,
          "averagePerformance": 79.19548153055264,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 76.79209669578636,
          "total": 3182,
          "bestAmount": 518.47520420517,
          "medianPerformance": 65.60710009466428,
          "averagePerformance": 65.60710009466428,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 86.5566,
          "medianPerformance": 78.8932,
          "totalKills": 2,
          "fastestKill": 104943,
          "bestAmount": 1343.4721706069,
          "highestDps": 1343.4721706069,
          "spec": "Arms",
          "allStars": {
            "points": 91.79,
            "rank": 1475,
            "rankPercent": 80.8172826652785,
            "total": 7684
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 82.4984,
          "medianPerformance": 76.2834,
          "totalKills": 2,
          "fastestKill": 170511,
          "bestAmount": 1062.4409364261,
          "highestDps": 1062.4409364261,
          "spec": "Arms",
          "allStars": {
            "points": 83.07,
            "rank": 2097,
            "rankPercent": 73.23116219667943,
            "total": 7830
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 92.7103,
          "medianPerformance": 83.6448,
          "totalKills": 2,
          "fastestKill": 157335,
          "bestAmount": 1349.1848603299,
          "highestDps": 1349.1848603299,
          "spec": "Arms",
          "allStars": {
            "points": 105.24,
            "rank": 647,
            "rankPercent": 91.83002402934109,
            "total": 7907
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 84.4294,
          "medianPerformance": 80.0278,
          "totalKills": 2,
          "fastestKill": 124065,
          "bestAmount": 1846.298311369,
          "highestDps": 1846.298311369,
          "spec": "Arms",
          "allStars": {
            "points": 89.29,
            "rank": 1380,
            "rankPercent": 79.01384872926495,
            "total": 6571
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 79.5669,
          "medianPerformance": 79.5667,
          "totalKills": 2,
          "fastestKill": 187082,
          "bestAmount": 1340.6068349445,
          "highestDps": 1340.6068349445,
          "spec": "Arms",
          "allStars": {
            "points": 91.73,
            "rank": 1685,
            "rankPercent": 77.6123371443765,
            "total": 7522
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 48.695,
          "medianPerformance": 28.8825,
          "totalKills": 2,
          "fastestKill": 443565,
          "bestAmount": 627.86288368108,
          "highestDps": 627.86288368108,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 3834,
            "rankPercent": 41.79195140470767,
            "total": 6585
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 81.5625,
          "medianPerformance": 78.7129,
          "totalKills": 2,
          "fastestKill": 302151,
          "bestAmount": 854.04420072613,
          "highestDps": 854.04420072613,
          "spec": "Arms",
          "allStars": {
            "points": 86.87,
            "rank": 1811,
            "rankPercent": 74.20917640353377,
            "total": 7018
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 90.7631,
          "medianPerformance": 85.7342,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 1527.0428144706,
          "highestDps": 1527.0428144706,
          "spec": "Arms",
          "allStars": {
            "points": 105.26,
            "rank": 734,
            "rankPercent": 89.93270155198462,
            "total": 7281
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 86.3098,
          "medianPerformance": 80.7567,
          "totalKills": 2,
          "fastestKill": 110703,
          "bestAmount": 1495.0824438971,
          "highestDps": 1495.0824438971,
          "spec": "Arms",
          "allStars": {
            "points": 95.09,
            "rank": 1087,
            "rankPercent": 85.56426957330852,
            "total": 7523
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 81.1543,
          "medianPerformance": 70.6285,
          "totalKills": 2,
          "fastestKill": 439454,
          "bestAmount": 902.25143018382,
          "highestDps": 902.25143018382,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 1479,
            "rankPercent": 75.99480266363489,
            "total": 6157
          }
        }
      ],
      "bestPerformanceAverage": 85.549625,
      "medianPerformanceAverage": 80.4524625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "medianPerformance": 30.49353749391643,
          "averagePerformance": 45.580247929172494,
          "totalKills": 3,
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
          "medianPerformance": 50.252776429975846,
          "averagePerformance": 58.805385013712545,
          "totalKills": 3,
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
          "medianPerformance": 83.77319255445754,
          "averagePerformance": 83.77319255445754,
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
          "rankPercent": 76.60732863587883,
          "total": 2917,
          "bestAmount": 412.66513166396,
          "medianPerformance": 76.60732863587883,
          "averagePerformance": 76.60732863587883,
          "totalKills": 1,
          "fastestKill": 5811499,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 83.8977,
          "medianPerformance": 71.838,
          "totalKills": 2,
          "fastestKill": 114597,
          "bestAmount": 1157.0198172727,
          "highestDps": 1157.0198172727,
          "spec": "Balance",
          "allStars": {
            "points": 88.31,
            "rank": 2045,
            "rankPercent": 76.21873182082606,
            "total": 8595
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 75.7121,
          "medianPerformance": 60.5258,
          "totalKills": 2,
          "fastestKill": 187766,
          "bestAmount": 804.86350031422,
          "highestDps": 804.86350031422,
          "spec": "Balance",
          "allStars": {
            "points": 70.91,
            "rank": 3264,
            "rankPercent": 62.16372912801484,
            "total": 8624
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 72.8161,
          "medianPerformance": 60.0415,
          "totalKills": 2,
          "fastestKill": 179077,
          "bestAmount": 851.77325954757,
          "highestDps": 851.77325954757,
          "spec": "Balance",
          "allStars": {
            "points": 72.4,
            "rank": 3231,
            "rankPercent": 61.62528216704289,
            "total": 8417
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 61.0482,
          "medianPerformance": 41.7511,
          "totalKills": 2,
          "fastestKill": 142609,
          "bestAmount": 924.18430814324,
          "highestDps": 924.18430814324,
          "spec": "Balance",
          "allStars": {
            "points": 61.19,
            "rank": 3921,
            "rankPercent": 50.85255767301906,
            "total": 7976
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 83.1477,
          "medianPerformance": 49.4251,
          "totalKills": 2,
          "fastestKill": 220836,
          "bestAmount": 1186.4324657212,
          "highestDps": 1186.4324657212,
          "spec": "Balance",
          "allStars": {
            "points": 88.52,
            "rank": 1971,
            "rankPercent": 75.44559391748723,
            "total": 8023
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 76.0703,
          "medianPerformance": 70.8827,
          "totalKills": 2,
          "fastestKill": 402466,
          "bestAmount": 659.51296391641,
          "highestDps": 659.51296391641,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 2442,
            "rankPercent": 64.73053027019216,
            "total": 6921
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 89.6077,
          "medianPerformance": 89.6077,
          "totalKills": 1,
          "fastestKill": 307948,
          "bestAmount": 921.34386324964,
          "highestDps": 921.34386324964,
          "spec": "Balance",
          "allStars": {
            "points": 93.86,
            "rank": 1581,
            "rankPercent": 80.52748336209021,
            "total": 8114
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 44.1555,
          "medianPerformance": 44.1555,
          "totalKills": 1,
          "fastestKill": 170857,
          "bestAmount": 861.73232586315,
          "highestDps": 861.73232586315,
          "spec": "Balance",
          "allStars": {
            "points": 61.64,
            "rank": 5422,
            "rankPercent": 32.858558335397575,
            "total": 8074
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 92.5311,
          "medianPerformance": 92.5311,
          "totalKills": 1,
          "fastestKill": 111349,
          "bestAmount": 1166.8717276311,
          "highestDps": 1166.8717276311,
          "spec": "Balance",
          "allStars": {
            "points": 98.68,
            "rank": 1001,
            "rankPercent": 87.83306971651052,
            "total": 8219
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 85.9519,
          "medianPerformance": 85.9519,
          "totalKills": 1,
          "fastestKill": 467406,
          "bestAmount": 788.69975995173,
          "highestDps": 788.69975995173,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 1348,
            "rankPercent": 80.01187119750705,
            "total": 6739
          }
        }
      ],
      "bestPerformanceAverage": 75.3645125,
      "medianPerformanceAverage": 63.734475,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 27878,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_21.jpg",
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
          "medianPerformance": 66.73552743002209,
          "averagePerformance": 65.86006664957672,
          "totalKills": 3,
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
          "rankPercent": 73.71980152047463,
          "total": 3772,
          "bestAmount": 390.9653540138,
          "medianPerformance": 62.68519137703932,
          "averagePerformance": 60.7685809087483,
          "totalKills": 3,
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
          "rankPercent": 51.62532237211238,
          "total": 3540,
          "bestAmount": 590.33360375642,
          "medianPerformance": 51.62532237211238,
          "averagePerformance": 51.62532237211238,
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
          "rankPercent": 41.90120712405751,
          "total": 3540,
          "bestAmount": 245.20053284049,
          "medianPerformance": 41.90120712405751,
          "averagePerformance": 41.90120712405751,
          "totalKills": 1,
          "fastestKill": 5803613,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 85.035,
          "medianPerformance": 84.3215,
          "totalKills": 2,
          "fastestKill": 114597,
          "bestAmount": 1275.5307730569,
          "highestDps": 1275.5307730569,
          "spec": "Feral",
          "allStars": {
            "points": 90.72,
            "rank": 2020,
            "rankPercent": 80.34079844206427,
            "total": 10270
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 79.6437,
          "medianPerformance": 78.4898,
          "totalKills": 2,
          "fastestKill": 187766,
          "bestAmount": 974.75048730867,
          "highestDps": 974.75048730867,
          "spec": "Feral",
          "allStars": {
            "points": 79.92,
            "rank": 3436,
            "rankPercent": 70.97591888466413,
            "total": 11835
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 67.2323,
          "medianPerformance": 55.5408,
          "totalKills": 2,
          "fastestKill": 179077,
          "bestAmount": 866.83382008857,
          "highestDps": 866.83382008857,
          "spec": "Feral",
          "allStars": {
            "points": 72.17,
            "rank": 3579,
            "rankPercent": 63.17035512094699,
            "total": 9715
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 38.6238,
          "medianPerformance": 38.6238,
          "totalKills": 2,
          "fastestKill": 142609,
          "bestAmount": 664.99600849513,
          "highestDps": 664.99600849513,
          "spec": "Feral",
          "allStars": {
            "points": 42.54,
            "rank": 5371,
            "rankPercent": 35.16841724013039,
            "total": 8283
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 62.8037,
          "medianPerformance": 62.1373,
          "totalKills": 2,
          "fastestKill": 220836,
          "bestAmount": 1247.5185205311,
          "highestDps": 1247.5185205311,
          "spec": "Feral",
          "allStars": {
            "points": 70.96,
            "rank": 3723,
            "rankPercent": 59.53028161356964,
            "total": 9197
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 78.1171,
          "medianPerformance": 65.5373,
          "totalKills": 2,
          "fastestKill": 402466,
          "bestAmount": 755.65071117801,
          "highestDps": 755.65071117801,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 2132,
            "rankPercent": 74.33148638882197,
            "total": 8302
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 32.4507,
          "medianPerformance": 32.4507,
          "totalKills": 1,
          "fastestKill": 307948,
          "bestAmount": 338.7584916934,
          "highestDps": 338.7584916934,
          "spec": "Feral",
          "allStars": {
            "points": 31.11,
            "rank": 4180,
            "rankPercent": 24.471353696005785,
            "total": 5533
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 70.2417,
          "medianPerformance": 70.2417,
          "totalKills": 1,
          "fastestKill": 170857,
          "bestAmount": 762.07003517561,
          "highestDps": 762.07003517561,
          "spec": "Guardian",
          "allStars": {
            "points": 77.78,
            "rank": 3736,
            "rankPercent": 64.31983186855177,
            "total": 10468
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 76.1619,
          "medianPerformance": 76.1619,
          "totalKills": 1,
          "fastestKill": 111349,
          "bestAmount": 1200.9627387763,
          "highestDps": 1200.9627387763,
          "spec": "Feral",
          "allStars": {
            "points": 80.39,
            "rank": 3076,
            "rankPercent": 70.9659144556699,
            "total": 10591
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 62.5752,
          "medianPerformance": 62.5752,
          "totalKills": 1,
          "fastestKill": 467406,
          "bestAmount": 547.88984309145,
          "highestDps": 547.88984309145,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 4330,
            "rankPercent": 57.387538143518064,
            "total": 10159
          }
        }
      ],
      "bestPerformanceAverage": 64.0241,
      "medianPerformanceAverage": 62.2459375,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 32087,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_73.jpg",
          "itemLevel": 110,
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
          "id": 28776,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
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
          "rankPercent": 99.36033908478298,
          "total": 6976,
          "bestAmount": 1336.1862257884,
          "medianPerformance": 92.38801234039616,
          "averagePerformance": 86.25294983950904,
          "totalKills": 3,
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
          "rankPercent": 95.5410696172684,
          "total": 6976,
          "bestAmount": 672.54454228937,
          "medianPerformance": 68.37457447465061,
          "averagePerformance": 67.927556608158,
          "totalKills": 3,
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
          "rankPercent": 97.40960462931994,
          "total": 924,
          "bestAmount": 1169.2892142635,
          "medianPerformance": 97.37003067339201,
          "averagePerformance": 94.85423932573029,
          "totalKills": 3,
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
          "rankPercent": 78.67291300726198,
          "total": 6475,
          "bestAmount": 491.6290938076,
          "medianPerformance": 66.79001790224304,
          "averagePerformance": 64.12973072871159,
          "totalKills": 3,
          "fastestKill": 5701271,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.1522,
          "medianPerformance": 94.3127,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 1608.3667111704,
          "highestDps": 1608.3667111704,
          "spec": "Enhancement",
          "allStars": {
            "points": 107.6,
            "rank": 1067,
            "rankPercent": 93.47533357816134,
            "total": 16338
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 99.28,
          "medianPerformance": 96.9513,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1443.97281723,
          "highestDps": 1443.97281723,
          "spec": "Enhancement",
          "allStars": {
            "points": 111.24,
            "rank": 414,
            "rankPercent": 97.46750061319598,
            "total": 16308
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 94.4571,
          "medianPerformance": 91.0491,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1403.7181809515,
          "highestDps": 1403.7181809515,
          "spec": "Enhancement",
          "allStars": {
            "points": 107.77,
            "rank": 1046,
            "rankPercent": 93.48259947611326,
            "total": 16034
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 96.9523,
          "medianPerformance": 96.5624,
          "totalKills": 3,
          "fastestKill": 142609,
          "bestAmount": 1902.5226222936,
          "highestDps": 1902.5226222936,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.6,
            "rank": 600,
            "rankPercent": 96.13623169709089,
            "total": 15503
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 97.2239,
          "medianPerformance": 94.3357,
          "totalKills": 3,
          "fastestKill": 189409,
          "bestAmount": 1750.6294263616,
          "highestDps": 1750.6294263616,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.92,
            "rank": 870,
            "rankPercent": 94.37576855866934,
            "total": 15451
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 93.6168,
          "medianPerformance": 87.2507,
          "totalKills": 3,
          "fastestKill": 402466,
          "bestAmount": 872.96815134695,
          "highestDps": 872.96815134695,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 1265,
            "rankPercent": 90.64812074578278,
            "total": 13516
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 98.0755,
          "medianPerformance": 94.8511,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 1042.6890254199,
          "highestDps": 1042.6890254199,
          "spec": "Enhancement",
          "allStars": {
            "points": 110.69,
            "rank": 748,
            "rankPercent": 95.14619883040936,
            "total": 15390
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.2345,
          "medianPerformance": 95.1253,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 1836.5350149353,
          "highestDps": 1836.5350149353,
          "spec": "Enhancement",
          "allStars": {
            "points": 116.36,
            "rank": 144,
            "rankPercent": 99.06876790830945,
            "total": 15356
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.971,
          "medianPerformance": 93.4738,
          "totalKills": 3,
          "fastestKill": 111349,
          "bestAmount": 1686.2746858975,
          "highestDps": 1686.2746858975,
          "spec": "Enhancement",
          "allStars": {
            "points": 107.86,
            "rank": 516,
            "rankPercent": 96.64582519213235,
            "total": 15354
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.3862,
          "medianPerformance": 98.8878,
          "totalKills": 3,
          "fastestKill": 462791,
          "bestAmount": 1033.410329933,
          "highestDps": 1033.410329933,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 146,
            "rankPercent": 98.90209737260544,
            "total": 13207
          }
        }
      ],
      "bestPerformanceAverage": 97.6683125,
      "medianPerformanceAverage": 94.582675,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "medianPerformance": 82.99378562564529,
          "averagePerformance": 80.40806223157723,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 81.67611452609279,
          "total": 4985,
          "bestAmount": 456.81006071791,
          "medianPerformance": 53.88894441847013,
          "averagePerformance": 58.66860332153664,
          "totalKills": 3,
          "fastestKill": 4906131,
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
          "medianPerformance": 71.91481528345878,
          "averagePerformance": 71.91481528345878,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 71.86840841003979,
          "total": 4717,
          "bestAmount": 445.29178735077,
          "medianPerformance": 67.90946906238739,
          "averagePerformance": 67.90946906238739,
          "totalKills": 2,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.79512825994338,
          "medianPerformance": 96.09837084080185,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 224.15436704908,
          "highestDps": 224.15436704908,
          "spec": "Shadow",
          "allStars": {
            "points": 114.46836677600776,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.39851507213328,
          "medianPerformance": 69.97925089910771,
          "totalKills": 3,
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
          "medianPerformance": 85.34164390821554,
          "totalKills": 3,
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
          "medianPerformance": 32.87164326818282,
          "totalKills": 3,
          "fastestKill": 124065,
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
          "rankPercent": 18.124435836330804,
          "medianPerformance": 12.758746284155055,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 47.383894933277,
          "highestDps": 47.383894933277,
          "spec": "Shadow",
          "allStars": {
            "points": 19.738519519357016,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 92.16536142100836,
          "medianPerformance": 63.89423805742961,
          "totalKills": 3,
          "fastestKill": 422887,
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
          "medianPerformance": 61.11940918967085,
          "totalKills": 2,
          "fastestKill": 302151,
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
          "medianPerformance": 79.0683346023045,
          "totalKills": 2,
          "fastestKill": 150650,
          "bestAmount": 551.06995088648,
          "highestDps": 551.06995088648,
          "spec": "Shadow",
          "allStars": {
            "points": 91.86684410788104,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 16.92952750035071,
          "medianPerformance": 16.07671350977551,
          "totalKills": 2,
          "fastestKill": 110703,
          "bestAmount": 25.631157635468,
          "highestDps": 25.631157635468,
          "spec": "Shadow",
          "allStars": {
            "points": 17.970204308284412,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 90.20586498926859,
          "medianPerformance": 71.98885759799012,
          "totalKills": 2,
          "fastestKill": 439454,
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
      "bestPerformanceAverage": 71.65955962210955,
      "medianPerformanceAverage": 56.66426406277673,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 35333,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_30.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 35341,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_02.jpg",
          "itemLevel": 115,
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
          "id": 35337,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_43.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2933,
          "temporaryEnchantID": null
        },
        {
          "id": 32974,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_17.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31411,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_25.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
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
          "id": 32973,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 35338,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_15.jpg",
          "itemLevel": 115,
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
          "id": 29291,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30346,
          "slot": 13,
          "quality": 3,
          "icon": "inv_jewelry_trinketpvp_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28370,
          "slot": 14,
          "quality": 3,
          "icon": "inv_jewelry_necklace_27.jpg",
          "itemLevel": 115,
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
          "permanentEnchantID": null,
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
          "id": 32962,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_09.jpg",
          "itemLevel": 136,
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
          "rankPercent": 67.08,
          "medianPerformance": 39.2955,
          "totalKills": 3,
          "fastestKill": 114597,
          "bestAmount": 726.78931710153,
          "highestDps": 726.78931710153,
          "spec": "Holy",
          "allStars": {
            "points": 74.7,
            "rank": 6014,
            "rankPercent": 65.39878006675106,
            "total": 17378
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
            "points": 77.83,
            "rank": 5233,
            "rankPercent": 70.63149031714848,
            "total": 17815
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
            "points": 102.82,
            "rank": 1158,
            "rankPercent": 93.45032550240589,
            "total": 17665
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
            "points": 92.44,
            "rank": 3142,
            "rankPercent": 81.62190626645602,
            "total": 17091
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
            "points": 55.88,
            "rank": 9060,
            "rankPercent": 46.15430337612934,
            "total": 16824
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
            "rank": 3929,
            "rankPercent": 72.24812773774198,
            "total": 14154
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
            "points": 35.69,
            "rank": 14097,
            "rankPercent": 15.048514433797385,
            "total": 16593
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
            "points": 76.03,
            "rank": 6452,
            "rankPercent": 62.80558118081181,
            "total": 17344
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
            "points": 38.84,
            "rank": 11515,
            "rankPercent": 31.066275519367778,
            "total": 16703
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
            "rank": 5163,
            "rankPercent": 62.90067557855397,
            "total": 13914
          }
        }
      ],
      "bestPerformanceAverage": 62.6469875,
      "medianPerformanceAverage": 39.0831625,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "id": 27775,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_22.jpg",
          "itemLevel": 115,
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
          "id": 27411,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_14.jpg",
          "itemLevel": 100,
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
          "temporaryEnchantID": 2629
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
            "points": 99.96,
            "rank": 1886,
            "rankPercent": 89.15295200828633,
            "total": 17378
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
            "points": 38.85,
            "rank": 11974,
            "rankPercent": 32.792590513612126,
            "total": 17815
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
            "points": 85.72,
            "rank": 3850,
            "rankPercent": 78.21115199547127,
            "total": 17665
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
            "points": 83.79,
            "rank": 4517,
            "rankPercent": 73.57673629395589,
            "total": 17091
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
            "points": 37.65,
            "rank": 15166,
            "rankPercent": 9.860912981455064,
            "total": 16824
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
            "rank": 3384,
            "rankPercent": 76.09862936272432,
            "total": 14154
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
            "points": 94.97,
            "rank": 2546,
            "rankPercent": 84.66220695473996,
            "total": 16593
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
            "points": 77.49,
            "rank": 6212,
            "rankPercent": 64.18934501845018,
            "total": 17344
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
            "points": 108.14,
            "rank": 522,
            "rankPercent": 96.88079985631323,
            "total": 16703
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
            "rank": 2988,
            "rankPercent": 78.53241339657899,
            "total": 13914
          }
        }
      ],
      "bestPerformanceAverage": 68.451975,
      "medianPerformanceAverage": 63.956799999999994,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
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
          "rankPercent": 84.94154666180144,
          "total": 6770,
          "bestAmount": 1072.66895715,
          "medianPerformance": 69.24603580885596,
          "averagePerformance": 73.61962471038632,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps"
        },
        {
          "raid": "ssc",
          "raidName": "SSC",
          "bossID": 100702,
          "metric": "dps-bosses-trash",
          "label": "SSC bosses + trash",
          "rank": null,
          "rankPercent": 86.67957498333982,
          "total": 4270,
          "bestAmount": 471.46152436615,
          "medianPerformance": 66.60734527034619,
          "averagePerformance": 70.86693383757087,
          "totalKills": 3,
          "fastestKill": 4906131,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=wdps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses",
          "label": "TK bosses",
          "rank": null,
          "rankPercent": 84.66543152929685,
          "total": 237,
          "bestAmount": 733.96840260155,
          "medianPerformance": 64.01681073295063,
          "averagePerformance": 70.44114691757711,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=dps"
        },
        {
          "raid": "tk",
          "raidName": "TK",
          "bossID": 100703,
          "metric": "dps-bosses-trash",
          "label": "TK bosses + trash",
          "rank": null,
          "rankPercent": 81.25777193338361,
          "total": 237,
          "bestAmount": 375.45280485188,
          "medianPerformance": 59.46947743135448,
          "averagePerformance": 65.33687116467985,
          "totalKills": 3,
          "fastestKill": 4176192,
          "sourceUrl": "https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100703&dpstype=wdps"
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.8791,
          "medianPerformance": 95.9415,
          "totalKills": 3,
          "fastestKill": 104943,
          "bestAmount": 1760.0316362216,
          "highestDps": 1760.0316362216,
          "spec": "Feral",
          "allStars": {
            "points": 111.03,
            "rank": 295,
            "rankPercent": 97.13729308666018,
            "total": 10270
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 83.5718,
          "medianPerformance": 69.5454,
          "totalKills": 3,
          "fastestKill": 170511,
          "bestAmount": 1111.6702148249,
          "highestDps": 1111.6702148249,
          "spec": "Feral",
          "allStars": {
            "points": 92.44,
            "rank": 2072,
            "rankPercent": 82.50105618926912,
            "total": 11835
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 95.0038,
          "medianPerformance": 83.5714,
          "totalKills": 3,
          "fastestKill": 157335,
          "bestAmount": 1361.1021069692,
          "highestDps": 1361.1021069692,
          "spec": "Feral",
          "allStars": {
            "points": 107.59,
            "rank": 542,
            "rankPercent": 94.43129181677818,
            "total": 9715
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 33.4718,
          "medianPerformance": 20.1453,
          "totalKills": 3,
          "fastestKill": 124065,
          "bestAmount": 563.57723121351,
          "highestDps": 563.57723121351,
          "spec": "Guardian",
          "allStars": {
            "points": 46.2,
            "rank": 6475,
            "rankPercent": 32.18812192311721,
            "total": 9547
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 98.5539,
          "medianPerformance": 93.3244,
          "totalKills": 3,
          "fastestKill": 187082,
          "bestAmount": 2005.1000744421,
          "highestDps": 2005.1000744421,
          "spec": "Feral",
          "allStars": {
            "points": 115.5,
            "rank": 147,
            "rankPercent": 98.41252582363815,
            "total": 9197
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 77.2244,
          "medianPerformance": 54.1096,
          "totalKills": 3,
          "fastestKill": 422887,
          "bestAmount": 757.41273673582,
          "highestDps": 757.41273673582,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 2109,
            "rankPercent": 74.60852806552639,
            "total": 8302
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 81.3981,
          "medianPerformance": 74.0983,
          "totalKills": 3,
          "fastestKill": 291538,
          "bestAmount": 582.68561902737,
          "highestDps": 582.68561902737,
          "spec": "Warden",
          "allStars": {
            "points": 90.61,
            "rank": 584,
            "rankPercent": 78.85382662314109,
            "total": 2757
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 94.6997,
          "medianPerformance": 94.6997,
          "totalKills": 3,
          "fastestKill": 150650,
          "bestAmount": 924.42168461946,
          "highestDps": 924.42168461946,
          "spec": "Guardian",
          "allStars": {
            "points": 108.11,
            "rank": 784,
            "rankPercent": 92.52006113870844,
            "total": 10468
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 94.2769,
          "medianPerformance": 90.6758,
          "totalKills": 3,
          "fastestKill": 110703,
          "bestAmount": 1501.5040242812,
          "highestDps": 1501.5040242812,
          "spec": "Feral",
          "allStars": {
            "points": 103.29,
            "rank": 823,
            "rankPercent": 92.23869323010103,
            "total": 10591
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 76.2966,
          "medianPerformance": 65.965,
          "totalKills": 3,
          "fastestKill": 439454,
          "bestAmount": 665.6737679029,
          "highestDps": 665.6737679029,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 2765,
            "rankPercent": 72.79259769662369,
            "total": 10159
          }
        }
      ],
      "bestPerformanceAverage": 84.8568875,
      "medianPerformanceAverage": 77.750225,
      "totalKills": 0,
      "fetchedAt": "2026-06-02T12:44:51.501Z",
      "error": null,
      "partial": false
    }
  }
};
