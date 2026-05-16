// AUTO-GENERATED - do not edit manually.
// Run `npm run bake:wcl` to regenerate.
// Generated: 2026-05-16T22:37:47.068Z

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
    points: number | null;
    rank: number | null;
    rankPercent: number | null;
    total: number;
  } | null;
}

export interface WclBakedCharacter {
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
  "generatedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29352,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_57.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 50.282502936391026,
          "medianPerformance": 50.282502936391026,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 65.432293560359,
          "spec": "Shadow",
          "allStars": {
            "points": 54.874442941036456,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 56.49434794079491,
          "medianPerformance": 56.49434794079491,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 434.28520975757,
          "spec": "Shadow",
          "allStars": {
            "points": 63.9782397863037,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 77.93173753804683,
          "medianPerformance": 77.93173753804683,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 122.74171781812,
          "spec": "Shadow",
          "allStars": {
            "points": 86.03769046227436,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 56.123554623538816,
          "medianPerformance": 56.123554623538816,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 83.322709387175,
          "spec": "Shadow",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 61.56952947174426,
      "medianPerformanceAverage": 61.56952947174426,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28530,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_04.jpg",
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
          "permanentEnchantID": null,
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
          "id": 28569,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "permanentEnchantID": 2841,
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
          "id": 28510,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_31.jpg",
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
          "id": 28528,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_pocketwatch_02.jpg",
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
          "temporaryEnchantID": 2678
        },
        {
          "id": 28606,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_29.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": null,
      "partial": false
    },
    "antagonyst": {
      "characterName": "Antagonyst",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107976519,
      "gear": [
        {
          "id": 28192,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 29335,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_04.jpg",
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
          "id": 25512,
          "slot": 5,
          "quality": 2,
          "icon": "inv_chest_chain_06.jpg",
          "itemLevel": 93,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 30950,
          "slot": 6,
          "quality": 2,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 111,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27936,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_cloth_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 28384,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_09.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 28170,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27528,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 25811,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_43.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25055,
          "slot": 12,
          "quality": 2,
          "icon": "inv_jewelry_ring_33.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 185985,
          "slot": 13,
          "quality": 2,
          "icon": "inv_misc_stonetablet_06.jpg",
          "itemLevel": 52,
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
          "id": 27731,
          "slot": 15,
          "quality": 2,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 90,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31153,
          "slot": 16,
          "quality": 3,
          "icon": "inv_axe_18.jpg",
          "itemLevel": 94,
          "permanentEnchantID": 1900,
          "temporaryEnchantID": 2636
        },
        {
          "id": 31153,
          "slot": 17,
          "quality": 3,
          "icon": "inv_axe_18.jpg",
          "itemLevel": 94,
          "permanentEnchantID": 1900,
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
          "id": 23705,
          "slot": 19,
          "quality": 4,
          "icon": "inv_misc_tabardpvp_02.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29098,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_81.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 29386,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_03.jpg",
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
          "id": 29099,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_22.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 3013,
          "temporaryEnchantID": null
        },
        {
          "id": 28422,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_08.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28445,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 29097,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_44.jpg",
          "itemLevel": 120,
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
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
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
          "id": 28660,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
          "itemLevel": 115,
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
          "id": 23198,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_idolofferocity.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 27760,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_24.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28193,
          "slot": 1,
          "quality": 3,
          "icon": "inv_jewelry_ring_56.jpg",
          "itemLevel": 115,
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
          "id": 29286,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 79.2162,
          "medianPerformance": 79.2162,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1099.5775944249,
          "spec": "Balance",
          "allStars": {
            "points": 91.18,
            "rank": 241,
            "rankPercent": 79.96661101836393,
            "total": 1198
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 96.5614,
          "medianPerformance": 96.5614,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1006.3168495095,
          "spec": "Balance",
          "allStars": {
            "points": 112.06,
            "rank": 38,
            "rankPercent": 96.87763713080169,
            "total": 1185
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 76.8215,
          "medianPerformance": 76.8215,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 888.1365401488,
          "spec": "Balance",
          "allStars": {
            "points": 89.8,
            "rank": 231,
            "rankPercent": 78.64438254410399,
            "total": 1077
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 96.8587,
          "medianPerformance": 96.8587,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1308.7351922217,
          "spec": "Balance",
          "allStars": {
            "points": 113.08,
            "rank": 28,
            "rankPercent": 96.97648376259798,
            "total": 893
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 56.1424,
          "medianPerformance": 56.1424,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1034.1801345023,
          "spec": "Balance",
          "allStars": {
            "points": 74.76,
            "rank": 362,
            "rankPercent": 57.77777777777778,
            "total": 855
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 70.5566,
          "medianPerformance": 70.5566,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 654.16529711247,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 151,
            "rankPercent": 72.6775956284153,
            "total": 549
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 96.3071,
          "medianPerformance": 96.3071,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1037.3673414786,
          "spec": "Balance",
          "allStars": {
            "points": 113.9,
            "rank": 21,
            "rankPercent": 96.78972712680577,
            "total": 623
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 57.6549,
          "medianPerformance": 57.6549,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1010.6329305517,
          "spec": "Balance",
          "allStars": {
            "points": 81.33,
            "rank": 235,
            "rankPercent": 60,
            "total": 585
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 29.1832,
          "medianPerformance": 29.1832,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 793.65286665796,
          "spec": "Balance",
          "allStars": {
            "points": 45.01,
            "rank": 383,
            "rankPercent": 32.74647887323944,
            "total": 568
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 77.2813,
          "medianPerformance": 77.2813,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 745.03825701018,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 78,
            "rankPercent": 78.78787878787878,
            "total": 363
          }
        }
      ],
      "bestPerformanceAverage": 73.593175,
      "medianPerformanceAverage": 73.593175,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 24114,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_07.jpg",
          "itemLevel": 102,
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
          "id": 28385,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_14.jpg",
          "itemLevel": 123,
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
          "id": 28383,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2658,
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
          "id": 24549,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_54.jpg",
          "itemLevel": 123,
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
          "id": 30834,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 100,
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
          "id": 28441,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_2h_blacksmithing_02.jpg",
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
          "id": 28319,
          "slot": 18,
          "quality": 4,
          "icon": "inv_axe_03.jpg",
          "itemLevel": 123,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 27551,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_talisman_12.jpg",
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
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28171,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_08.jpg",
          "itemLevel": 115,
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
          "id": 29281,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
          "id": 27872,
          "slot": 17,
          "quality": 3,
          "icon": "inv_axe_62.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 49.1515,
          "medianPerformance": 49.1515,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1002.5640182768,
          "spec": "Enhancement",
          "allStars": {
            "points": 59.48,
            "rank": 1344,
            "rankPercent": 50.332840236686394,
            "total": 2704
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 20,
          "medianPerformance": 20,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 610.38465646409,
          "spec": "Enhancement",
          "allStars": {
            "points": 40.13,
            "rank": 2087,
            "rankPercent": 22.338049143708115,
            "total": 2686
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 8.94365,
          "medianPerformance": 8.94365,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 469.65971192169,
          "spec": "Enhancement",
          "allStars": {
            "points": 28.86,
            "rank": 2195,
            "rankPercent": 11.13811259619279,
            "total": 2469
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 7.24437,
          "medianPerformance": 7.24437,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 665.28134778721,
          "spec": "Enhancement",
          "allStars": {
            "points": 34.07,
            "rank": 1927,
            "rankPercent": 9.915809167446211,
            "total": 2138
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 15.282,
          "medianPerformance": 15.282,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1024.959508468,
          "spec": "Enhancement",
          "allStars": {
            "points": 58.05,
            "rank": 1688,
            "rankPercent": 17.30392156862745,
            "total": 2040
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 9.93796,
          "medianPerformance": 9.93796,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 480.38364858697,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 1234,
            "rankPercent": 12.985179957657023,
            "total": 1417
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 18.204,
          "medianPerformance": 18.204,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 505.9546268411,
          "spec": "Enhancement",
          "allStars": {
            "points": 50.6,
            "rank": 1201,
            "rankPercent": 20.424403183023873,
            "total": 1508
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 8.88811,
          "medianPerformance": 8.88811,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 954.31497691784,
          "spec": "Enhancement",
          "allStars": {
            "points": 58.48,
            "rank": 1266,
            "rankPercent": 12.274618585298198,
            "total": 1442
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 22.2522,
          "medianPerformance": 22.2522,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 922.83749074921,
          "spec": "Enhancement",
          "allStars": {
            "points": 44.82,
            "rank": 1040,
            "rankPercent": 25.25179856115108,
            "total": 1390
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 14.5235,
          "medianPerformance": 14.5235,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 481.23667054891,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 796,
            "rankPercent": 18.29393627954779,
            "total": 973
          }
        }
      ],
      "bestPerformanceAverage": 18.74572875,
      "medianPerformanceAverage": 18.74572875,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": null,
      "partial": false
    },
    "blackbary": {
      "characterName": "Blackbary",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 109654811,
      "gear": [
        {
          "id": 35383,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_09.jpg",
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
          "id": 35385,
          "slot": 3,
          "quality": 3,
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
          "id": 35381,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 31293,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_31.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31544,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_14.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3012,
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
          "id": 28171,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 35382,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 684,
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
          "id": 28553,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 95,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31617,
          "slot": 13,
          "quality": 2,
          "icon": "inv_jewelry_talisman_14.jpg",
          "itemLevel": 102,
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
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 27872,
          "slot": 17,
          "quality": 3,
          "icon": "inv_axe_62.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 24413,
          "slot": 18,
          "quality": 3,
          "icon": "spell_nature_lightning.jpg",
          "itemLevel": 94,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": null,
      "partial": false
    },
    "blackdye": {
      "characterName": "Blackdye",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29079,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_47.jpg",
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
          "id": 28602,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1144,
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
          "id": 29078,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_21.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 29242,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_11.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 28411,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 29080,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_47.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2934,
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
          "id": 28727,
          "slot": 14,
          "quality": 4,
          "icon": "inv_trinket_naxxramas02.jpg",
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
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2669,
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
          "id": 31404,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 28.0439,
          "medianPerformance": 28.0439,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 740.89444791427,
          "spec": "Arms",
          "allStars": {
            "points": 45.11,
            "rank": 831,
            "rankPercent": 29.481733220050977,
            "total": 1177
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 17.7687,
          "medianPerformance": 17.7687,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 498.31398098842,
          "spec": "Arms",
          "allStars": {
            "points": 26.38,
            "rank": 973,
            "rankPercent": 19.5364238410596,
            "total": 1208
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 29.6323,
          "medianPerformance": 29.6323,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 631.19130335567,
          "spec": "Arms",
          "allStars": {
            "points": 42.87,
            "rank": 775,
            "rankPercent": 31.685789938217123,
            "total": 1133
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 9.80232,
          "medianPerformance": 9.80232,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 688.31722172553,
          "spec": "Arms",
          "allStars": {
            "points": 30.33,
            "rank": 720,
            "rankPercent": 12.953995157384988,
            "total": 826
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 39.5049,
          "medianPerformance": 39.5049,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1031.2973134749,
          "spec": "Arms",
          "allStars": {
            "points": 68.04,
            "rank": 545,
            "rankPercent": 41.316073354908305,
            "total": 927
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 50.5287,
          "medianPerformance": 50.5287,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 629.15152274721,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 316,
            "rankPercent": 51.08695652173913,
            "total": 644
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": 24.950423999999998,
      "medianPerformanceAverage": 24.950423999999998,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": null,
      "partial": false
    },
    "brokentoy": {
      "characterName": "Brokentoy",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 103929069,
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
          "id": 29515,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate08.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 29516,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_29.jpg",
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
          "id": 29517,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 105,
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
          "id": 28767,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_66.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 2636
        },
        {
          "id": 27872,
          "slot": 17,
          "quality": 3,
          "icon": "inv_axe_62.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29079,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_47.jpg",
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
          "id": 21848,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_02.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 3150,
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
          "id": 28515,
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
          "id": 28793,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
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
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.7107,
          "medianPerformance": 99.7107,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 2100.0706748628,
          "spec": "Arcane",
          "allStars": {
            "points": 116.04,
            "rank": 14,
            "rankPercent": 99.63005122367672,
            "total": 3514
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 81.6384,
          "medianPerformance": 81.6384,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1152.8809818073,
          "spec": "Arcane",
          "allStars": {
            "points": 89.91,
            "rank": 615,
            "rankPercent": 82.23893549320219,
            "total": 3457
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 60.3359,
          "medianPerformance": 60.3359,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 1045.1710883002,
          "spec": "Arcane",
          "allStars": {
            "points": 70.11,
            "rank": 1193,
            "rankPercent": 61.794871794871796,
            "total": 3120
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 97.4782,
          "medianPerformance": 97.4782,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1832.4136678587,
          "spec": "Arcane",
          "allStars": {
            "points": 113.07,
            "rank": 60,
            "rankPercent": 97.74205893608878,
            "total": 2613
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 91.2177,
          "medianPerformance": 91.2177,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1569.0380620401,
          "spec": "Arcane",
          "allStars": {
            "points": 104.3,
            "rank": 200,
            "rankPercent": 91.7904290429043,
            "total": 2424
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 89.0723,
          "medianPerformance": 89.0723,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 961.45778896017,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 171,
            "rankPercent": 89.57055214723927,
            "total": 1630
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 93.5809,
          "medianPerformance": 93.5809,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1304.083858708,
          "spec": "Arcane",
          "allStars": {
            "points": 107.46,
            "rank": 114,
            "rankPercent": 93.98616285258116,
            "total": 1879
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 92.9347,
          "medianPerformance": 92.9347,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1744.2231527963,
          "spec": "Arcane",
          "allStars": {
            "points": 108.66,
            "rank": 115,
            "rankPercent": 93.51535836177474,
            "total": 1758
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 16.5258,
          "medianPerformance": 16.5258,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 870.95323088532,
          "spec": "Arcane",
          "allStars": {
            "points": 35.72,
            "rank": 1330,
            "rankPercent": 21.221102548903378,
            "total": 1687
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 46.4022,
          "medianPerformance": 46.4022,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 921.16527763072,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 591,
            "rankPercent": 48.82914137033825,
            "total": 1153
          }
        }
      ],
      "bestPerformanceAverage": 79.17778750000001,
      "medianPerformanceAverage": 79.17778750000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 23758,
          "slot": 1,
          "quality": 3,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 106,
          "permanentEnchantID": 3005,
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
          "id": 29100,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
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
          "id": 29096,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_11.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2661,
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
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
          "itemLevel": 115,
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
          "id": 25057,
          "slot": 11,
          "quality": 2,
          "icon": "inv_jewelry_ring_04.jpg",
          "itemLevel": 120,
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
          "id": 29181,
          "slot": 14,
          "quality": 4,
          "icon": "inv_datacrystal02.jpg",
          "itemLevel": 105,
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
          "id": 31405,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 57.7272,
          "medianPerformance": 57.7272,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 625.99026987936,
          "spec": "Warden",
          "allStars": {
            "points": 66.31,
            "rank": 191,
            "rankPercent": 59.05172413793103,
            "total": 464
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 80.3339,
          "medianPerformance": 80.3339,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 573.86695962201,
          "spec": "Guardian",
          "allStars": {
            "points": 94.44,
            "rank": 160,
            "rankPercent": 80.95808383233533,
            "total": 835
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 67.8815,
          "medianPerformance": 67.8815,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 589.79725928228,
          "spec": "Guardian",
          "allStars": {
            "points": 77.71,
            "rank": 233,
            "rankPercent": 68.2626538987688,
            "total": 731
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 72.4593,
          "medianPerformance": 72.4593,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 767.19658024139,
          "spec": "Warden",
          "allStars": {
            "points": 83.98,
            "rank": 52,
            "rankPercent": 71.97802197802197,
            "total": 182
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 67.0177,
          "medianPerformance": 67.0177,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 709.64930812295,
          "spec": "Guardian",
          "allStars": {
            "points": 85.26,
            "rank": 286,
            "rankPercent": 67.94150731158605,
            "total": 889
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 75.7437,
          "medianPerformance": 75.7437,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 442.93156327813,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 103,
            "rankPercent": 76.71232876712328,
            "total": 438
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 85.5368,
          "medianPerformance": 85.5368,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 484.84931638414,
          "spec": "Guardian",
          "allStars": {
            "points": 98.24,
            "rank": 118,
            "rankPercent": 86.17021276595744,
            "total": 846
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 67.8433,
          "medianPerformance": 67.8433,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 816.03012032996,
          "spec": "Guardian",
          "allStars": {
            "points": 91.68,
            "rank": 247,
            "rankPercent": 68.09338521400778,
            "total": 771
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 91.905,
          "medianPerformance": 91.905,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 850.61599407949,
          "spec": "Guardian",
          "allStars": {
            "points": 107.75,
            "rank": 40,
            "rankPercent": 91.64882226980728,
            "total": 467
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 60.306,
          "medianPerformance": 60.306,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 482.19606690709,
          "spec": "Guardian",
          "allStars": {
            "points": 0,
            "rank": 100,
            "rankPercent": 61.478599221789885,
            "total": 257
          }
        }
      ],
      "bestPerformanceAverage": 73.8380875,
      "medianPerformanceAverage": 73.8380875,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28793,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
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
          "id": 23046,
          "slot": 14,
          "quality": 4,
          "icon": "inv_trinket_naxxramas06.jpg",
          "itemLevel": 90,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29369,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 93.6255,
          "medianPerformance": 93.6255,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1726.1595608297,
          "spec": "Destruction",
          "allStars": {
            "points": 108.1,
            "rank": 245,
            "rankPercent": 94.00638663718988,
            "total": 4071
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 89.1851,
          "medianPerformance": 89.1851,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1249.4392651704,
          "spec": "Destruction",
          "allStars": {
            "points": 99.51,
            "rank": 431,
            "rankPercent": 89.42709613966068,
            "total": 4067
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 3.28668,
          "medianPerformance": 3.28668,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 239.18132566384,
          "spec": "Destruction",
          "allStars": {
            "points": 14.32,
            "rank": 3307,
            "rankPercent": 7.369010927430653,
            "total": 3569
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 16.5785,
          "medianPerformance": 16.5785,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 823.91316495306,
          "spec": "Destruction",
          "allStars": {
            "points": 39.69,
            "rank": 2591,
            "rankPercent": 18.9358372456964,
            "total": 3195
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 69.3914,
          "medianPerformance": 69.3914,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1431.4724833633,
          "spec": "Destruction",
          "allStars": {
            "points": 81.23,
            "rank": 912,
            "rankPercent": 69.96373227827233,
            "total": 3033
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 27.4644,
          "medianPerformance": 27.4644,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 703.5662009,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 1443,
            "rankPercent": 31.528964862298196,
            "total": 2106
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 78.4191,
          "medianPerformance": 78.4191,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1262.9742949461,
          "spec": "Destruction",
          "allStars": {
            "points": 92.3,
            "rank": 485,
            "rankPercent": 79.23637923637924,
            "total": 2331
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 55.959,
          "medianPerformance": 55.959,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1460.5963522615,
          "spec": "Destruction",
          "allStars": {
            "points": 78.9,
            "rank": 953,
            "rankPercent": 57.000903342366755,
            "total": 2214
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 13.242,
          "medianPerformance": 13.242,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 870.30023362791,
          "spec": "Destruction",
          "allStars": {
            "points": 35.21,
            "rank": 1758,
            "rankPercent": 17.627754336615094,
            "total": 2133
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 54.6543,
          "medianPerformance": 54.6543,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 951.72766972564,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 638,
            "rankPercent": 57.95379537953795,
            "total": 1515
          }
        }
      ],
      "bestPerformanceAverage": 52.460910000000005,
      "medianPerformanceAverage": 52.460910000000005,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 74.706,
          "medianPerformance": 74.706,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1642.6070806351,
          "spec": "BeastMastery",
          "allStars": {
            "points": 86.07,
            "rank": 818,
            "rankPercent": 75.42117930204573,
            "total": 3324
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 74.3984,
          "medianPerformance": 74.3984,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1115.0358310828,
          "spec": "BeastMastery",
          "allStars": {
            "points": 82.41,
            "rank": 819,
            "rankPercent": 75.21212121212122,
            "total": 3300
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 60.2859,
          "medianPerformance": 60.2859,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 1019.0150570294,
          "spec": "BeastMastery",
          "allStars": {
            "points": 68.55,
            "rank": 1145,
            "rankPercent": 61.72632987621278,
            "total": 2989
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 87.5071,
          "medianPerformance": 87.5071,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 2017.8042579347,
          "spec": "BeastMastery",
          "allStars": {
            "points": 100.61,
            "rank": 300,
            "rankPercent": 88.26990976853668,
            "total": 2549
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 3.77813,
          "medianPerformance": 3.77813,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 645.20615471286,
          "spec": "BeastMastery",
          "allStars": {
            "points": 27.31,
            "rank": 2211,
            "rankPercent": 8.639933856965689,
            "total": 2419
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 64.49,
          "medianPerformance": 64.49,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 893.33557191401,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 572,
            "rankPercent": 65.97139451728248,
            "total": 1678
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 64.7309,
          "medianPerformance": 64.7309,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1027.1422593281,
          "spec": "BeastMastery",
          "allStars": {
            "points": 74.95,
            "rank": 627,
            "rankPercent": 66.1987041036717,
            "total": 1852
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 96.7334,
          "medianPerformance": 96.7334,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1768.9008854469,
          "spec": "BeastMastery",
          "allStars": {
            "points": 112.04,
            "rank": 61,
            "rankPercent": 96.60056657223797,
            "total": 1765
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 67.6887,
          "medianPerformance": 67.6887,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1648.0417337803,
          "spec": "BeastMastery",
          "allStars": {
            "points": 75.54,
            "rank": 535,
            "rankPercent": 68.49557522123894,
            "total": 1695
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 59.2198,
          "medianPerformance": 59.2198,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 948.83867663805,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 466,
            "rankPercent": 61.34663341645885,
            "total": 1203
          }
        }
      ],
      "bestPerformanceAverage": 66.22856625,
      "medianPerformanceAverage": 66.22856625,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "temporaryEnchantID": 2636
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 87.6285,
          "medianPerformance": 87.6285,
          "totalKills": 1,
          "fastestKill": 207895,
          "bestAmount": 955.13600615695,
          "spec": "Elemental",
          "allStars": {
            "points": 96.81905729636284,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 85.456,
          "medianPerformance": 85.456,
          "totalKills": 1,
          "fastestKill": 230935,
          "bestAmount": 1010.617706281,
          "spec": "Elemental",
          "allStars": {
            "points": 98.89518021599464,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 60.8305,
          "medianPerformance": 60.8305,
          "totalKills": 1,
          "fastestKill": 329399,
          "bestAmount": 890.80112568648,
          "spec": "Elemental",
          "allStars": {
            "points": 72.16330291585155,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 54.2151,
          "medianPerformance": 54.2151,
          "totalKills": 1,
          "fastestKill": 241779,
          "bestAmount": 1090.2559775663,
          "spec": "Elemental",
          "allStars": {
            "points": 63.43609267982789,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 38.2551,
          "medianPerformance": 38.2551,
          "totalKills": 1,
          "fastestKill": 293249,
          "bestAmount": 1025.2481679392,
          "spec": "Elemental",
          "allStars": {
            "points": 68.01249060144752,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 95.9413,
          "medianPerformance": 95.9413,
          "totalKills": 1,
          "fastestKill": 528095,
          "bestAmount": 821.85402247702,
          "spec": "Elemental",
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
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": 65.27703999999999,
      "medianPerformanceAverage": 65.27703999999999,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28193,
          "slot": 1,
          "quality": 3,
          "icon": "inv_jewelry_ring_56.jpg",
          "itemLevel": 115,
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
          "id": 27465,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_15.jpg",
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
          "id": 29350,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_1h_stratholme_d_01.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 73.001,
          "medianPerformance": 73.001,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1224.0016738813,
          "spec": "Destruction",
          "allStars": {
            "points": 86.4,
            "rank": 604,
            "rankPercent": 74.13127413127413,
            "total": 2331
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 35.3865,
          "medianPerformance": 35.3865,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1257.4102570571,
          "spec": "Destruction",
          "allStars": {
            "points": 67.92,
            "rank": 1375,
            "rankPercent": 37.94037940379404,
            "total": 2214
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 7.67395,
          "medianPerformance": 7.67395,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 751.50552145459,
          "spec": "Destruction",
          "allStars": {
            "points": 30.4,
            "rank": 1866,
            "rankPercent": 12.56446319737459,
            "total": 2133
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 28.1615,
          "medianPerformance": 28.1615,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 803.46635954459,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 1025,
            "rankPercent": 32.40924092409241,
            "total": 1515
          }
        }
      ],
      "bestPerformanceAverage": 38.68715,
      "medianPerformanceAverage": 38.68715,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29089,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
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
          "id": 28752,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
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
          "id": 28765,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2938,
          "temporaryEnchantID": null
        },
        {
          "id": 28771,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_46.jpg",
          "itemLevel": 125,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95,
          "medianPerformance": 95,
          "totalKills": 1,
          "fastestKill": 121734,
          "bestAmount": 0,
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
          "totalKills": 1,
          "fastestKill": 196631,
          "bestAmount": 0,
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
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 254171,
          "bestAmount": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 60,
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
          "fastestKill": 143210,
          "bestAmount": 0,
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
          "fastestKill": 227248,
          "bestAmount": 0,
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
          "totalKills": 1,
          "fastestKill": 422890,
          "bestAmount": 0,
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
          "fastestKill": 291582,
          "bestAmount": 0,
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
          "fastestKill": 158564,
          "bestAmount": 0,
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
          "medianPerformance": 95,
          "totalKills": 1,
          "fastestKill": 137856,
          "bestAmount": 0,
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
          "rankPercent": 70,
          "medianPerformance": 70,
          "totalKills": 1,
          "fastestKill": 462841,
          "bestAmount": 0,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 85.625,
      "medianPerformanceAverage": 85.625,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "permanentEnchantID": null,
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
          "id": 28612,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
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
          "id": 28578,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_43.jpg",
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
          "id": 30543,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_20.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2745,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 75,
          "medianPerformance": 75,
          "totalKills": 1,
          "fastestKill": 121722,
          "bestAmount": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 75,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 70,
          "medianPerformance": 70,
          "totalKills": 1,
          "fastestKill": 196631,
          "bestAmount": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 70,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 88.44204024485751,
          "medianPerformance": 88.44204024485751,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 58.323857935924,
          "spec": "Restoration",
          "allStars": {
            "points": 93.13759873247983,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 65.9934146740568,
          "medianPerformance": 65.9934146740568,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 0.95691774698257,
          "spec": "Restoration",
          "allStars": {
            "points": 66.0290585491393,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 75.61371140527753,
          "medianPerformance": 75.61371140527753,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 16.971233407274,
          "spec": "Restoration",
          "allStars": {
            "points": 76.95814376408175,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 92.12421193376834,
          "medianPerformance": 92.12421193376834,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 36.409253535815,
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
          "rankPercent": 89.5582096337939,
          "medianPerformance": 89.5582096337939,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 0.25382625935556,
          "spec": "Restoration",
          "allStars": {
            "points": 89.58403414993022,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 80.83437714503454,
          "medianPerformance": 80.83437714503454,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 11.585227416059,
          "spec": "Restoration",
          "allStars": {
            "points": 83.00726952872617,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 87.68744745148594,
          "medianPerformance": 87.68744745148594,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 39.636933524879,
          "spec": "Restoration",
          "allStars": {
            "points": 88.79100378565238,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 67.3829592495676,
          "medianPerformance": 67.3829592495676,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 8.988938851447,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 79.14115006931327,
      "medianPerformanceAverage": 79.14115006931327,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28565,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_08.jpg",
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
          "id": 29289,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28530,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_ahnqiraj_04.jpg",
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
          "id": 29520,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30531,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_20.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2747,
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
          "id": 29521,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2650,
          "temporaryEnchantID": null
        },
        {
          "id": 29034,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 82.6978,
          "medianPerformance": 82.6978,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 899.99506919562,
          "spec": "Elemental",
          "allStars": {
            "points": 91.41,
            "rank": 310,
            "rankPercent": 83.51120597652081,
            "total": 1874
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 90.0888,
          "medianPerformance": 90.0888,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1049.3344929482,
          "spec": "Elemental",
          "allStars": {
            "points": 103.94,
            "rank": 181,
            "rankPercent": 90.50131926121372,
            "total": 1895
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 80.9494,
          "medianPerformance": 80.9494,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 1026.4983259038,
          "spec": "Elemental",
          "allStars": {
            "points": 93.83,
            "rank": 314,
            "rankPercent": 81.81289947704823,
            "total": 1721
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 91.8686,
          "medianPerformance": 91.8686,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1514.6261734466,
          "spec": "Elemental",
          "allStars": {
            "points": 104.33,
            "rank": 115,
            "rankPercent": 92.0223932820154,
            "total": 1429
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 70.735,
          "medianPerformance": 70.735,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1223.6673004472,
          "spec": "Elemental",
          "allStars": {
            "points": 83.87,
            "rank": 388,
            "rankPercent": 72.07792207792208,
            "total": 1386
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 86.5723,
          "medianPerformance": 86.5723,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 738.43367140631,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 110,
            "rankPercent": 88.85480572597137,
            "total": 978
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 81.8895,
          "medianPerformance": 81.8895,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 964.35113089889,
          "spec": "Elemental",
          "allStars": {
            "points": 97.22,
            "rank": 179,
            "rankPercent": 83.04761904761905,
            "total": 1050
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 95.573,
          "medianPerformance": 95.573,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1411.5372972428,
          "spec": "Elemental",
          "allStars": {
            "points": 113.42,
            "rank": 40,
            "rankPercent": 96.02446483180428,
            "total": 981
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 39.0966,
          "medianPerformance": 39.0966,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 898.90876902761,
          "spec": "Elemental",
          "allStars": {
            "points": 58.86,
            "rank": 557,
            "rankPercent": 42.2037422037422,
            "total": 962
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 65.1807,
          "medianPerformance": 65.1807,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 802.200129216,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 220,
            "rankPercent": 67.55555555555556,
            "total": 675
          }
        }
      ],
      "bestPerformanceAverage": 79.1123375,
      "medianPerformanceAverage": 79.1123375,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 27462,
          "slot": 9,
          "quality": 3,
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
          "id": 29172,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28227,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_63.jpg",
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
          "id": 27981,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 28412,
          "slot": 17,
          "quality": 3,
          "icon": "inv_offhand_outlandraid_03white.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28612,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 115,
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
          "id": 28655,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 115,
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
          "id": 28752,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
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
          "id": 29032,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2322,
          "temporaryEnchantID": null
        },
        {
          "id": 31923,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_52naxxramas.jpg",
          "itemLevel": 100,
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
          "id": 29353,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_54.jpg",
          "itemLevel": 105,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 72.8242,
          "medianPerformance": 72.8242,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1374.0343841425,
          "spec": "Destruction",
          "allStars": {
            "points": 83.75,
            "rank": 1083,
            "rankPercent": 73.42176369442397,
            "total": 4071
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 96.3979,
          "medianPerformance": 96.3979,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1387.3011997945,
          "spec": "Destruction",
          "allStars": {
            "points": 108.06,
            "rank": 143,
            "rankPercent": 96.50848291123678,
            "total": 4067
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 64.3509,
          "medianPerformance": 64.3509,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 964.78299700591,
          "spec": "Destruction",
          "allStars": {
            "points": 73.81,
            "rank": 1219,
            "rankPercent": 65.87279349957971,
            "total": 3569
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 94.4519,
          "medianPerformance": 94.4519,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1720.7336835047,
          "spec": "Destruction",
          "allStars": {
            "points": 108.25,
            "rank": 169,
            "rankPercent": 94.74178403755869,
            "total": 3195
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 71.6413,
          "medianPerformance": 71.6413,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1452.5896975459,
          "spec": "Destruction",
          "allStars": {
            "points": 83.92,
            "rank": 840,
            "rankPercent": 72.33761951862841,
            "total": 3033
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 18.316,
          "medianPerformance": 18.316,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 651.94484578623,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 1631,
            "rankPercent": 22.602089268755936,
            "total": 2106
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 72.5359,
          "medianPerformance": 72.5359,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1220.7225130172,
          "spec": "Destruction",
          "allStars": {
            "points": 85.86,
            "rank": 615,
            "rankPercent": 73.65937365937366,
            "total": 2331
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 87.3943,
          "medianPerformance": 87.3943,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1758.677884009,
          "spec": "Destruction",
          "allStars": {
            "points": 103.21,
            "rank": 262,
            "rankPercent": 88.21138211382114,
            "total": 2214
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 8.8159,
          "medianPerformance": 8.8159,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 786.17242029806,
          "spec": "Destruction",
          "allStars": {
            "points": 31.8,
            "rank": 1836,
            "rankPercent": 13.97093295827473,
            "total": 2133
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 51.5683,
          "medianPerformance": 51.5683,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 934.33104792444,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 684,
            "rankPercent": 54.917491749174914,
            "total": 1515
          }
        }
      ],
      "bestPerformanceAverage": 71.0515375,
      "medianPerformanceAverage": 71.0515375,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 27758,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_34.jpg",
          "itemLevel": 115,
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
          "id": 27948,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_08.jpg",
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
          "id": 28507,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
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
          "temporaryEnchantID": null
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 32461,
          "slot": 1,
          "quality": 4,
          "icon": "inv_gizmo_newgoggles.jpg",
          "itemLevel": 127,
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
          "id": 5107,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_12.jpg",
          "itemLevel": 14,
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
          "id": 28779,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 125,
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
          "id": 23537,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 105,
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
          "id": 28438,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_38.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": null
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.5342,
          "medianPerformance": 95.5342,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1804.4114263173,
          "spec": "Fury",
          "allStars": {
            "points": 110.44,
            "rank": 101,
            "rankPercent": 95.68593615185505,
            "total": 2318
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 86.5279,
          "medianPerformance": 86.5279,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1281.9339121236,
          "spec": "Fury",
          "allStars": {
            "points": 96.17,
            "rank": 329,
            "rankPercent": 86.01279317697228,
            "total": 2345
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 2.79252,
          "medianPerformance": 2.79252,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 188.98598165773,
          "spec": "Fury",
          "allStars": {
            "points": 9.86,
            "rank": 2034,
            "rankPercent": 5.661252900232019,
            "total": 2155
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 73.7878,
          "medianPerformance": 73.7878,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 2014.0743741618,
          "spec": "Fury",
          "allStars": {
            "points": 84.37,
            "rank": 379,
            "rankPercent": 74.35549525101764,
            "total": 1474
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 83.0483,
          "medianPerformance": 83.0483,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1654.1539030316,
          "spec": "Fury",
          "allStars": {
            "points": 98.23,
            "rank": 260,
            "rankPercent": 84.17837507635919,
            "total": 1637
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 88.9398,
          "medianPerformance": 88.9398,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 974.82306147978,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 121,
            "rankPercent": 89.23766816143498,
            "total": 1115
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 70.9222,
          "medianPerformance": 70.9222,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 808.02502589714,
          "spec": "Arms",
          "allStars": {
            "points": 84.69,
            "rank": 182,
            "rankPercent": 72.28177641653905,
            "total": 653
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 94.6145,
          "medianPerformance": 94.6145,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1556.6332837214,
          "spec": "Arms",
          "allStars": {
            "points": 110.98,
            "rank": 36,
            "rankPercent": 94.5141065830721,
            "total": 638
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 89.7632,
          "medianPerformance": 89.7632,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1512.8132572954,
          "spec": "Arms",
          "allStars": {
            "points": 100.21,
            "rank": 61,
            "rankPercent": 90.2439024390244,
            "total": 615
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 24.8851,
          "medianPerformance": 24.8851,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 574.90098122046,
          "spec": "Arms",
          "allStars": {
            "points": 0,
            "rank": 314,
            "rankPercent": 28.37528604118993,
            "total": 437
          }
        }
      ],
      "bestPerformanceAverage": 74.6238275,
      "medianPerformanceAverage": 74.6238275,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29283,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29285,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28545,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
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
          "id": 28767,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_66.jpg",
          "itemLevel": 125,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.8472,
          "medianPerformance": 97.8472,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1646.2312218533,
          "spec": "Enhancement",
          "allStars": {
            "points": 114.56,
            "rank": 45,
            "rankPercent": 98.37278106508876,
            "total": 2704
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 77.7761,
          "medianPerformance": 77.7761,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1065.3402299903,
          "spec": "Enhancement",
          "allStars": {
            "points": 89.24,
            "rank": 584,
            "rankPercent": 78.29486224869694,
            "total": 2686
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 87.2562,
          "medianPerformance": 87.2562,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 1152.1637348672,
          "spec": "Enhancement",
          "allStars": {
            "points": 99.07,
            "rank": 303,
            "rankPercent": 87.76832725799919,
            "total": 2469
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 81.8216,
          "medianPerformance": 81.8216,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1533.9461332141,
          "spec": "Enhancement",
          "allStars": {
            "points": 94.65,
            "rank": 380,
            "rankPercent": 82.2731524789523,
            "total": 2138
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 0.964257,
          "medianPerformance": 0.964257,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 592.22386535685,
          "spec": "Enhancement",
          "allStars": {
            "points": 33.54,
            "rank": 1954,
            "rankPercent": 4.264705882352941,
            "total": 2040
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 84.7365,
          "medianPerformance": 84.7365,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 799.36720684249,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 214,
            "rankPercent": 84.9682427664079,
            "total": 1417
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 97.0914,
          "medianPerformance": 97.0914,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1034.1636424754,
          "spec": "Enhancement",
          "allStars": {
            "points": 114.25,
            "rank": 43,
            "rankPercent": 97.21485411140584,
            "total": 1508
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 93.1923,
          "medianPerformance": 93.1923,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1676.9821649302,
          "spec": "Enhancement",
          "allStars": {
            "points": 110.36,
            "rank": 93,
            "rankPercent": 93.61997226074897,
            "total": 1442
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 83.3634,
          "medianPerformance": 83.3634,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1425.5945902805,
          "spec": "Enhancement",
          "allStars": {
            "points": 95.43,
            "rank": 213,
            "rankPercent": 84.74820143884892,
            "total": 1390
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.3854,
          "medianPerformance": 99.3854,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 1039.3503763038,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 7,
            "rankPercent": 99.38335046248716,
            "total": 973
          }
        }
      ],
      "bestPerformanceAverage": 77.414057125,
      "medianPerformanceAverage": 77.414057125,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29291,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
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
          "id": 28765,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 125,
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
          "temporaryEnchantID": 2629
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
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 27903,
          "slot": 16,
          "quality": 3,
          "icon": "inv_spear_08.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 79.5547,
          "medianPerformance": 79.5547,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1726.7512573551,
          "spec": "BeastMastery",
          "allStars": {
            "points": 91.54,
            "rank": 663,
            "rankPercent": 80.08423586040915,
            "total": 3324
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 28.0649,
          "medianPerformance": 28.0649,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 624.08133579497,
          "spec": "BeastMastery",
          "allStars": {
            "points": 32.43,
            "rank": 2280,
            "rankPercent": 30.939393939393938,
            "total": 3300
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 87.7805,
          "medianPerformance": 87.7805,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 1413.2558514677,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.59,
            "rank": 359,
            "rankPercent": 88.02275008364002,
            "total": 2989
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 93.1129,
          "medianPerformance": 93.1129,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 2173.6840634779,
          "spec": "BeastMastery",
          "allStars": {
            "points": 107.05,
            "rank": 169,
            "rankPercent": 93.40918007061593,
            "total": 2549
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 82.4702,
          "medianPerformance": 82.4702,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1941.8110277807,
          "spec": "BeastMastery",
          "allStars": {
            "points": 95.94,
            "rank": 405,
            "rankPercent": 83.29888383629599,
            "total": 2419
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 50.3625,
          "medianPerformance": 50.3625,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 826.461915358,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 797,
            "rankPercent": 52.56257449344458,
            "total": 1678
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 92.4626,
          "medianPerformance": 92.4626,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1337.6883973959,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.48,
            "rank": 140,
            "rankPercent": 92.49460043196544,
            "total": 1852
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 71.3036,
          "medianPerformance": 71.3036,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1320.9177366868,
          "spec": "BeastMastery",
          "allStars": {
            "points": 81.96,
            "rank": 491,
            "rankPercent": 72.23796033994334,
            "total": 1765
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 32.2173,
          "medianPerformance": 32.2173,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1172.601686184,
          "spec": "BeastMastery",
          "allStars": {
            "points": 40.22,
            "rank": 1078,
            "rankPercent": 36.46017699115044,
            "total": 1695
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 81.6964,
          "medianPerformance": 81.6964,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 1093.5908433829,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 214,
            "rankPercent": 82.29426433915212,
            "total": 1203
          }
        }
      ],
      "bestPerformanceAverage": 70.87083750000001,
      "medianPerformanceAverage": 70.87083750000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "temporaryEnchantID": 2791
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
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
          "itemLevel": 115,
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
          "id": 28824,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_31.jpg",
          "itemLevel": 125,
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
          "id": 28438,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_38.jpg",
          "itemLevel": 123,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 67.3675,
          "medianPerformance": 67.3675,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1260.8066795963,
          "spec": "Fury",
          "allStars": {
            "points": 77.08,
            "rank": 752,
            "rankPercent": 67.6013805004314,
            "total": 2318
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 66.7684,
          "medianPerformance": 66.7684,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1059.3743165647,
          "spec": "Fury",
          "allStars": {
            "points": 74.8,
            "rank": 773,
            "rankPercent": 67.07889125799574,
            "total": 2345
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 69.8823,
          "medianPerformance": 69.8823,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 1102.7946192857,
          "spec": "Fury",
          "allStars": {
            "points": 79.15,
            "rank": 635,
            "rankPercent": 70.5800464037123,
            "total": 2155
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 95.1466,
          "medianPerformance": 95.1466,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 2636.3433169423,
          "spec": "Fury",
          "allStars": {
            "points": 109.88,
            "rank": 67,
            "rankPercent": 95.5223880597015,
            "total": 1474
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 79.2658,
          "medianPerformance": 79.2658,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1605.7137072638,
          "spec": "Fury",
          "allStars": {
            "points": 92.95,
            "rank": 337,
            "rankPercent": 79.47464874770922,
            "total": 1637
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 95.891,
          "medianPerformance": 95.891,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 1037.6980138902,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 46,
            "rankPercent": 95.96412556053812,
            "total": 1115
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 85.6708,
          "medianPerformance": 85.6708,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1097.5824763839,
          "spec": "Fury",
          "allStars": {
            "points": 100,
            "rank": 157,
            "rankPercent": 85.93327321911632,
            "total": 1109
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 89.5069,
          "medianPerformance": 89.5069,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1784.5223379834,
          "spec": "Fury",
          "allStars": {
            "points": 104.78,
            "rank": 117,
            "rankPercent": 89.54012623985572,
            "total": 1109
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.9984,
          "medianPerformance": 98.9984,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 2313.308084106,
          "spec": "Fury",
          "allStars": {
            "points": 111.7,
            "rank": 13,
            "rankPercent": 98.92280071813285,
            "total": 1114
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.7264,
          "medianPerformance": 99.7264,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 1463.9718577068,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 3,
            "rankPercent": 99.72260748959778,
            "total": 721
          }
        }
      ],
      "bestPerformanceAverage": 81.5758375,
      "medianPerformanceAverage": 81.5758375,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 27712,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_08.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 4333,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_black_01.jpg",
          "itemLevel": 31,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28264,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_17.jpg",
          "itemLevel": 115,
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
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 3010,
          "temporaryEnchantID": null
        },
        {
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2939,
          "temporaryEnchantID": null
        },
        {
          "id": 28424,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
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
          "id": 29281,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
          "id": 28826,
          "slot": 18,
          "quality": 4,
          "icon": "inv_misc_ahnqirajtrinket_03.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29076,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_84.jpg",
          "itemLevel": 120,
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
          "id": 28594,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_05.jpg",
          "itemLevel": 115,
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
          "id": 21847,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2937,
          "temporaryEnchantID": null
        },
        {
          "id": 28793,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
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
          "id": 28734,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_gem_ebondraenite_02.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 82.763,
          "medianPerformance": 82.763,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1517.1345452155,
          "spec": "Arcane",
          "allStars": {
            "points": 94.92,
            "rank": 576,
            "rankPercent": 83.63688104723961,
            "total": 3514
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 71.5813,
          "medianPerformance": 71.5813,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1045.1792062741,
          "spec": "Arcane",
          "allStars": {
            "points": 79.08,
            "rank": 950,
            "rankPercent": 72.54845241538906,
            "total": 3457
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 44.0544,
          "medianPerformance": 44.0544,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 930.71091054307,
          "spec": "Arcane",
          "allStars": {
            "points": 53.07,
            "rank": 1689,
            "rankPercent": 45.8974358974359,
            "total": 3120
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 67.1645,
          "medianPerformance": 67.1645,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1285.3570630308,
          "spec": "Arcane",
          "allStars": {
            "points": 77.53,
            "rank": 832,
            "rankPercent": 68.19747416762343,
            "total": 2613
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 20.0935,
          "medianPerformance": 20.0935,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 923.05728671526,
          "spec": "Arcane",
          "allStars": {
            "points": 45.66,
            "rank": 1871,
            "rankPercent": 22.854785478547853,
            "total": 2424
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 25.2849,
          "medianPerformance": 25.2849,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 668.89500031923,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 1162,
            "rankPercent": 28.773006134969325,
            "total": 1630
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 61.8308,
          "medianPerformance": 61.8308,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1028.4491215553,
          "spec": "Arcane",
          "allStars": {
            "points": 71.86,
            "rank": 690,
            "rankPercent": 63.331559340074506,
            "total": 1879
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 55.2777,
          "medianPerformance": 55.2777,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1391.5832093035,
          "spec": "Arcane",
          "allStars": {
            "points": 74.8,
            "rank": 767,
            "rankPercent": 56.42775881683732,
            "total": 1758
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 25.7255,
          "medianPerformance": 25.7255,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 986.70787804913,
          "spec": "Arcane",
          "allStars": {
            "points": 40.47,
            "rank": 1194,
            "rankPercent": 29.28275044457617,
            "total": 1687
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 32.8555,
          "medianPerformance": 32.8555,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 843.47578064396,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 737,
            "rankPercent": 36.16652211621856,
            "total": 1153
          }
        }
      ],
      "bestPerformanceAverage": 53.56133750000001,
      "medianPerformanceAverage": 53.56133750000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 31297,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_25.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
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
          "id": 28406,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_04.jpg",
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
          "id": 29126,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_52naxxramas.jpg",
          "itemLevel": 105,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 32087,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_73.jpg",
          "itemLevel": 110,
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
          "id": 33173,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2983,
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
          "id": 29071,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
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
          "id": 30257,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28669,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 28646,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 113,
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
          "id": 28777,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 125,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29064,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_40.jpg",
          "itemLevel": 120,
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
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 28569,
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
          "id": 29065,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_40.jpg",
          "itemLevel": 120,
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
          "id": 25644,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_libramofhope.jpg",
          "itemLevel": 103,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 1,
          "fastestKill": 121734,
          "bestAmount": 0,
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
          "rankPercent": 73.0379117766678,
          "medianPerformance": 73.0379117766678,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1.8157127817025,
          "spec": "Holy",
          "allStars": {
            "points": 73.10894024181687,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 88.13241548381997,
          "medianPerformance": 88.13241548381997,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 40.886503755405,
          "spec": "Holy",
          "allStars": {
            "points": 89.59104660391466,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 77.59585675253157,
          "medianPerformance": 77.59585675253157,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 0.60069289226643,
          "spec": "Holy",
          "allStars": {
            "points": 77.60650260572267,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 94.16086096414378,
          "medianPerformance": 94.16086096414378,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 11.773353050949,
          "spec": "Holy",
          "allStars": {
            "points": 94.54354796126472,
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
          "totalKills": 1,
          "fastestKill": 422890,
          "bestAmount": 0,
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
          "rankPercent": 97.00046584018394,
          "medianPerformance": 97.00046584018394,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 6.7058153654069,
          "spec": "Holy",
          "allStars": {
            "points": 98.52723002726984,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 57.99409498168005,
          "medianPerformance": 57.99409498168005,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1.2487071466411,
          "spec": "Holy",
          "allStars": {
            "points": 58.07255878583837,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 70,
          "medianPerformance": 70,
          "totalKills": 1,
          "fastestKill": 137856,
          "bestAmount": 0,
          "spec": "Holy",
          "allStars": {
            "points": 70,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 49.20044205426875,
          "medianPerformance": 49.20044205426875,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 0.27226112867363,
          "spec": "Holy",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 79.74020072487838,
      "medianPerformanceAverage": 79.74020072487838,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28828,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 98.7716,
          "medianPerformance": 98.7716,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1889.648598008,
          "spec": "Retribution",
          "allStars": {
            "points": 114.88,
            "rank": 20,
            "rankPercent": 98.80277252678009,
            "total": 1587
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 91.5241,
          "medianPerformance": 91.5241,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1243.5089539562,
          "spec": "Retribution",
          "allStars": {
            "points": 104.46,
            "rank": 131,
            "rankPercent": 91.890205864005,
            "total": 1603
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 21.6994,
          "medianPerformance": 21.6994,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 594.08577824816,
          "spec": "Retribution",
          "allStars": {
            "points": 36.79,
            "rank": 1164,
            "rankPercent": 24.036577400391902,
            "total": 1531
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 93.0298,
          "medianPerformance": 93.0298,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1718.3728207421,
          "spec": "Retribution",
          "allStars": {
            "points": 106.63,
            "rank": 79,
            "rankPercent": 93.31046312178388,
            "total": 1166
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 0.931646,
          "medianPerformance": 0.931646,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 369.00989401782,
          "spec": "Retribution",
          "allStars": {
            "points": 21.35,
            "rank": 1109,
            "rankPercent": 4.317789291882556,
            "total": 1158
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 19.8276,
          "medianPerformance": 19.8276,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 525.8520597701,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 648,
            "rankPercent": 22.607655502392344,
            "total": 836
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 96.9595,
          "medianPerformance": 96.9595,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 1169.1203205071,
          "spec": "Retribution",
          "allStars": {
            "points": 113.51,
            "rank": 27,
            "rankPercent": 96.95550351288057,
            "total": 854
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 98.9172,
          "medianPerformance": 98.9172,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1890.7192048637,
          "spec": "Retribution",
          "allStars": {
            "points": 116.77,
            "rank": 10,
            "rankPercent": 98.94982497082847,
            "total": 857
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 85.5506,
          "medianPerformance": 85.5506,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1531.1479691785,
          "spec": "Retribution",
          "allStars": {
            "points": 96.03,
            "rank": 116,
            "rankPercent": 85.97560975609755,
            "total": 820
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 10.6139,
          "medianPerformance": 10.6139,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 399.14994025381,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 498,
            "rankPercent": 14.310344827586206,
            "total": 580
          }
        }
      ],
      "bestPerformanceAverage": 73.42298075,
      "medianPerformanceAverage": 73.42298075,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 24114,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_07.jpg",
          "itemLevel": 102,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28566,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_27.jpg",
          "itemLevel": 115,
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
          "id": 28642,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 123,
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
          "id": 29067,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_40.jpg",
          "itemLevel": 120,
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
          "id": 28555,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 95,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 97.9719,
          "medianPerformance": 97.9719,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 615.24933434141,
          "spec": "Protection",
          "allStars": {
            "points": 113.51,
            "rank": 21,
            "rankPercent": 98.18511796733212,
            "total": 1102
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 98.4448,
          "medianPerformance": 98.4448,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 475.17762960476,
          "spec": "Justicar",
          "allStars": {
            "points": 115.5,
            "rank": 20,
            "rankPercent": 98.63013698630137,
            "total": 1387
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 96.9982,
          "medianPerformance": 96.9982,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 512.69047516003,
          "spec": "Justicar",
          "allStars": {
            "points": 112.07,
            "rank": 36,
            "rankPercent": 96.99312714776632,
            "total": 1164
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 98.6987,
          "medianPerformance": 98.6987,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1061.5081582477,
          "spec": "Protection",
          "allStars": {
            "points": 116.18,
            "rank": 12,
            "rankPercent": 98.85892116182572,
            "total": 964
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 90.9946,
          "medianPerformance": 90.9946,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 328.99369740502,
          "spec": "Justicar",
          "allStars": {
            "points": 99.48,
            "rank": 118,
            "rankPercent": 91.2490650710546,
            "total": 1337
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 97.0276,
          "medianPerformance": 97.0276,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 339.80472324758,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 20,
            "rankPercent": 97.0404984423676,
            "total": 642
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 95.0004,
          "medianPerformance": 95.0004,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 168.40686291324,
          "spec": "Justicar",
          "allStars": {
            "points": 105.49,
            "rank": 43,
            "rankPercent": 95.23269012485811,
            "total": 881
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 80.7701,
          "medianPerformance": 80.7701,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 672.81980777478,
          "spec": "Protection",
          "allStars": {
            "points": 94.4,
            "rank": 80,
            "rankPercent": 81.41176470588235,
            "total": 425
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.9805,
          "medianPerformance": 98.9805,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 635.1631767591,
          "spec": "Justicar",
          "allStars": {
            "points": 115.58,
            "rank": 8,
            "rankPercent": 98.98255813953489,
            "total": 688
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 90.1851,
          "medianPerformance": 90.1851,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 400.77702461802,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 36,
            "rankPercent": 90.59139784946237,
            "total": 372
          }
        }
      ],
      "bestPerformanceAverage": 94.7324,
      "medianPerformanceAverage": 94.7324,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": null,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28438,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_38.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2673,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 82.4324,
          "medianPerformance": 82.4324,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1269.164393018,
          "spec": "Combat",
          "allStars": {
            "points": 94.57,
            "rank": 338,
            "rankPercent": 83.08232931726907,
            "total": 1992
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 91.9524,
          "medianPerformance": 91.9524,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1191.1889612801,
          "spec": "Combat",
          "allStars": {
            "points": 103.56,
            "rank": 153,
            "rankPercent": 92.29989868287741,
            "total": 1974
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 48.9494,
          "medianPerformance": 48.9494,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 811.8127058194,
          "spec": "Combat",
          "allStars": {
            "points": 56.8,
            "rank": 855,
            "rankPercent": 50.5787037037037,
            "total": 1728
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 2.59025,
          "medianPerformance": 2.59025,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 303.45468261064,
          "spec": "Combat",
          "allStars": {
            "points": 13.84,
            "rank": 1291,
            "rankPercent": 6.589427950760318,
            "total": 1381
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 77.1407,
          "medianPerformance": 77.1407,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1472.8222597796,
          "spec": "Combat",
          "allStars": {
            "points": 92.95,
            "rank": 282,
            "rankPercent": 78.02971071149335,
            "total": 1279
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 65.2808,
          "medianPerformance": 65.2808,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 760.11558643326,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 257,
            "rankPercent": 67.01030927835052,
            "total": 776
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 86.0946,
          "medianPerformance": 86.0946,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 946.37062749967,
          "spec": "Combat",
          "allStars": {
            "points": 101.59,
            "rank": 123,
            "rankPercent": 86.83926645091694,
            "total": 927
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 99.7782,
          "medianPerformance": 99.7782,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1754.402008022,
          "spec": "Combat",
          "allStars": {
            "points": 119.22,
            "rank": 3,
            "rankPercent": 99.77168949771689,
            "total": 876
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 81.5004,
          "medianPerformance": 81.5004,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1432.5671498846,
          "spec": "Combat",
          "allStars": {
            "points": 92.09,
            "rank": 152,
            "rankPercent": 81.85096153846153,
            "total": 832
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 60.1303,
          "medianPerformance": 60.1303,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 771.27472228284,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 194,
            "rankPercent": 63.09751434034417,
            "total": 523
          }
        }
      ],
      "bestPerformanceAverage": 71.30479375,
      "medianPerformanceAverage": 71.30479375,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29068,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_77.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2999,
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
          "id": 29069,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_22.jpg",
          "itemLevel": 120,
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
          "id": 29067,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_40.jpg",
          "itemLevel": 120,
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
          "id": 29384,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_46.jpg",
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
          "id": 28789,
          "slot": 14,
          "quality": 4,
          "icon": "inv_elemental_mote_life01.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2662,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 27790,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_74.jpg",
          "itemLevel": 112,
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
          "permanentEnchantID": null,
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28505,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27538,
          "slot": 16,
          "quality": 3,
          "icon": "inv_hammer_23.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
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
          "id": 28296,
          "slot": 18,
          "quality": 3,
          "icon": "inv_misc_book_12.jpg",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29053,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_25.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 28179,
          "slot": 8,
          "quality": 3,
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
          "id": 29168,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29290,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 19288,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_ticket_tarot_bluedragon_01.jpg",
          "itemLevel": 66,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29049,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_91.jpg",
          "itemLevel": 120,
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
          "id": 21874,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_02.jpg",
          "itemLevel": 105,
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
          "id": 21873,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_31.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29053,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_25.jpg",
          "itemLevel": 120,
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
          "id": 29373,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_53naxxramas.jpg",
          "itemLevel": 110,
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
          "id": 31329,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 100,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 95.1298,
          "medianPerformance": 95.1298,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 766.53463068275,
          "spec": "Discipline",
          "allStars": {
            "points": 110.82,
            "rank": 18,
            "rankPercent": 95.68527918781726,
            "total": 394
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 69.8843,
          "medianPerformance": 69.8843,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 647.27363351084,
          "spec": "Discipline",
          "allStars": {
            "points": 80.06,
            "rank": 103,
            "rankPercent": 72.1311475409836,
            "total": 366
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 61.4988,
          "medianPerformance": 61.4988,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 627.09950544327,
          "spec": "Discipline",
          "allStars": {
            "points": 71.14,
            "rank": 113,
            "rankPercent": 64.89028213166144,
            "total": 319
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 80.3388,
          "medianPerformance": 80.3388,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 893.97770451498,
          "spec": "Discipline",
          "allStars": {
            "points": 91.99,
            "rank": 58,
            "rankPercent": 81.78913738019169,
            "total": 313
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 91.9065,
          "medianPerformance": 91.9065,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 800.75965635013,
          "spec": "Discipline",
          "allStars": {
            "points": 105.48,
            "rank": 24,
            "rankPercent": 92.04152249134948,
            "total": 289
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 94.4118,
          "medianPerformance": 94.4118,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 720.07415692608,
          "spec": "Discipline",
          "allStars": {
            "points": 0,
            "rank": 14,
            "rankPercent": 94.00921658986175,
            "total": 217
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 88.4708,
          "medianPerformance": 88.4708,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 590.07402122536,
          "spec": "Discipline",
          "allStars": {
            "points": 100.36,
            "rank": 23,
            "rankPercent": 89.90825688073394,
            "total": 218
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 95.0298,
          "medianPerformance": 95.0298,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 2916.109583512,
          "spec": "Holy",
          "allStars": {
            "points": 112.07,
            "rank": 57,
            "rankPercent": 95.07908611599296,
            "total": 1138
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 99.7284,
          "medianPerformance": 99.7284,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1323.2699200441,
          "spec": "Holy",
          "allStars": {
            "points": 116.71,
            "rank": 4,
            "rankPercent": 99.71428571428571,
            "total": 1050
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 98.3214,
          "medianPerformance": 98.3214,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 957.22475156172,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 13,
            "rankPercent": 98.24046920821114,
            "total": 682
          }
        }
      ],
      "bestPerformanceAverage": 85.24839999999999,
      "medianPerformanceAverage": 85.24839999999999,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": null,
      "partial": false
    },
    "serj": {
      "characterName": "Serj",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": "Character not found on spineshatter-eu",
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
          "permanentEnchantID": 2606,
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
          "id": 29247,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_26.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29083,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
          "itemLevel": 120,
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
          "id": 28504,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_crossbow_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2723,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 66.6735,
          "medianPerformance": 66.6735,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1213.7257157884,
          "spec": "Survival",
          "allStars": {
            "points": 76.1,
            "rank": 372,
            "rankPercent": 66.66666666666667,
            "total": 1113
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 58.4192,
          "medianPerformance": 58.4192,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 806.34940010274,
          "spec": "Survival",
          "allStars": {
            "points": 66.4,
            "rank": 453,
            "rankPercent": 59.570661896243294,
            "total": 1118
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 54.032,
          "medianPerformance": 54.032,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 847.51364260506,
          "spec": "Survival",
          "allStars": {
            "points": 64.12,
            "rank": 468,
            "rankPercent": 55.09615384615385,
            "total": 1040
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 83.2923,
          "medianPerformance": 83.2923,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1516.5679481448,
          "spec": "Survival",
          "allStars": {
            "points": 96.2,
            "rank": 143,
            "rankPercent": 84.64864864864865,
            "total": 925
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 63.8642,
          "medianPerformance": 63.8642,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1327.4928699694,
          "spec": "Survival",
          "allStars": {
            "points": 76.18,
            "rank": 310,
            "rankPercent": 65.20270270270271,
            "total": 888
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 69.3283,
          "medianPerformance": 69.3283,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 747.83571024884,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 188,
            "rankPercent": 69.64285714285714,
            "total": 616
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 79.9514,
          "medianPerformance": 79.9514,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 938.92048377913,
          "spec": "Survival",
          "allStars": {
            "points": 93.32,
            "rank": 137,
            "rankPercent": 79.9410029498525,
            "total": 678
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 55.6681,
          "medianPerformance": 55.6681,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 857.81766353018,
          "spec": "Survival",
          "allStars": {
            "points": 68.69,
            "rank": 279,
            "rankPercent": 56.96594427244582,
            "total": 646
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 11.1498,
          "medianPerformance": 11.1498,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 764.73959920479,
          "spec": "Survival",
          "allStars": {
            "points": 35,
            "rank": 523,
            "rankPercent": 14.566284779050736,
            "total": 611
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 32.8826,
          "medianPerformance": 32.8826,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 716.32983355338,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 288,
            "rankPercent": 34.77272727272727,
            "total": 440
          }
        }
      ],
      "bestPerformanceAverage": 59.13131250000001,
      "medianPerformanceAverage": 59.13131250000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28963,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_89.jpg",
          "itemLevel": 120,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28729,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_74.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28030,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 97,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29098,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_81.jpg",
          "itemLevel": 120,
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
          "id": 28422,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_08.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 2940,
          "temporaryEnchantID": null
        },
        {
          "id": 28445,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 113,
          "permanentEnchantID": 2649,
          "temporaryEnchantID": null
        },
        {
          "id": 30341,
          "slot": 10,
          "quality": 2,
          "icon": "inv_gauntlets_23.jpg",
          "itemLevel": 114,
          "permanentEnchantID": 2613,
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
          "id": 29278,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
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
          "id": 28660,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
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
          "id": 23198,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_idolofferocity.jpg",
          "itemLevel": 65,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29283,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
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
          "id": 28767,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_66.jpg",
          "itemLevel": 125,
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
          "id": 31404,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_15.jpg",
          "itemLevel": 1,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 91.8451,
          "medianPerformance": 91.8451,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1461.2438775846,
          "spec": "Enhancement",
          "allStars": {
            "points": 106.29,
            "rank": 214,
            "rankPercent": 92.12278106508876,
            "total": 2704
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 91.4465,
          "medianPerformance": 91.4465,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 1201.3813658026,
          "spec": "Enhancement",
          "allStars": {
            "points": 104.87,
            "rank": 216,
            "rankPercent": 91.99553239017126,
            "total": 2686
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 8.31574,
          "medianPerformance": 8.31574,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 450.12531131107,
          "spec": "Enhancement",
          "allStars": {
            "points": 27.66,
            "rank": 2210,
            "rankPercent": 10.530579181855002,
            "total": 2469
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 61.5948,
          "medianPerformance": 61.5948,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 1312.1228207421,
          "spec": "Enhancement",
          "allStars": {
            "points": 72.65,
            "rank": 794,
            "rankPercent": 62.909260991580915,
            "total": 2138
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 87.1772,
          "medianPerformance": 87.1772,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1591.0971444667,
          "spec": "Enhancement",
          "allStars": {
            "points": 102.05,
            "rank": 255,
            "rankPercent": 87.54901960784314,
            "total": 2040
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 86.7415,
          "medianPerformance": 86.7415,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 810.80997997101,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 179,
            "rankPercent": 87.43824982357093,
            "total": 1417
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 91.9919,
          "medianPerformance": 91.9919,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 959.53872222489,
          "spec": "Enhancement",
          "allStars": {
            "points": 108.07,
            "rank": 114,
            "rankPercent": 92.50663129973475,
            "total": 1508
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 92.3515,
          "medianPerformance": 92.3515,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 1664.4950934638,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.58,
            "rank": 102,
            "rankPercent": 92.99583911234397,
            "total": 1442
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 90.5133,
          "medianPerformance": 90.5133,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1500.3845428294,
          "spec": "Enhancement",
          "allStars": {
            "points": 102.61,
            "rank": 126,
            "rankPercent": 91.00719424460432,
            "total": 1390
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 99.168,
          "medianPerformance": 99.168,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 1033.410329933,
          "spec": "Enhancement",
          "allStars": {
            "points": 0,
            "rank": 9,
            "rankPercent": 99.17780061664953,
            "total": 973
          }
        }
      ],
      "bestPerformanceAverage": 76.904505,
      "medianPerformanceAverage": 76.904505,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 29352,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_57.jpg",
          "itemLevel": 110,
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
          "id": 28788,
          "slot": 19,
          "quality": 2,
          "icon": "inv_shirt_guildtabard_01.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        }
      ],
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 99.79300544674378,
          "medianPerformance": 99.79300544674378,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 224.15436704908,
          "spec": "Shadow",
          "allStars": {
            "points": 114.46624396280815,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 95.06838173809996,
          "medianPerformance": 95.06838173809996,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 249.79020125422,
          "spec": "Shadow",
          "allStars": {
            "points": 104.40027690072053,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 85.76398623217543,
          "medianPerformance": 85.76398623217543,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 149.89357391007,
          "spec": "Shadow",
          "allStars": {
            "points": 93.74349108979513,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 99.50910183049999,
          "medianPerformance": 99.50910183049999,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 402.12896736701,
          "spec": "Shadow",
          "allStars": {
            "points": 113.96989043026369,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 17.002145888075987,
          "medianPerformance": 17.002145888075987,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 47.383894933277,
          "spec": "Shadow",
          "allStars": {
            "points": 18.84229361665454,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 64.2708736475075,
          "medianPerformance": 64.2708736475075,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 89.071075724721,
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
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": 79.42732422711903,
      "medianPerformanceAverage": 79.42732422711903,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 28413,
          "slot": 1,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 27775,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_22.jpg",
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
          "id": 28230,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_39.jpg",
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
          "id": 28511,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27536,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_27.jpg",
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
          "id": 29289,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
          "temporaryEnchantID": 2629
        },
        {
          "id": 27714,
          "slot": 17,
          "quality": 3,
          "icon": "inv_offhand_outlandraid_03orange.jpg",
          "itemLevel": 115,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": null,
      "partial": false
    },
    "zabyjaka": {
      "characterName": "Zabyjaka",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106560073,
      "gear": [
        {
          "id": 27993,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_17.jpg",
          "itemLevel": 112,
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
          "id": 32078,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_33.jpg",
          "itemLevel": 110,
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
          "id": 28191,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_42.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 29244,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30541,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_03.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2748,
          "temporaryEnchantID": null
        },
        {
          "id": 29242,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_11.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2792,
          "temporaryEnchantID": null
        },
        {
          "id": 27746,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 28780,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_15.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2792,
          "temporaryEnchantID": null
        },
        {
          "id": 29367,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_56.jpg",
          "itemLevel": 110,
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
          "id": 27683,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_gem_pearl_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28269,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2662,
          "temporaryEnchantID": null
        },
        {
          "id": 30832,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_08.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2678
        },
        {
          "id": 29268,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_37.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 3229,
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
          "id": 0,
          "slot": 19,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
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
          "spec": "",
          "allStars": null
        }
      ],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
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
          "id": 30535,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_08.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 29265,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2657,
          "temporaryEnchantID": null
        },
        {
          "id": 29246,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_15.jpg",
          "itemLevel": 110,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 90.9743,
          "medianPerformance": 90.9743,
          "totalKills": 1,
          "fastestKill": 121684,
          "bestAmount": 1503.7802833569,
          "spec": "Feral",
          "allStars": {
            "points": 106.13,
            "rank": 103,
            "rankPercent": 91.54929577464789,
            "total": 1207
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 63.3766,
          "medianPerformance": 63.3766,
          "totalKills": 1,
          "fastestKill": 196617,
          "bestAmount": 829.5315257582,
          "spec": "Feral",
          "allStars": {
            "points": 70.39,
            "rank": 583,
            "rankPercent": 63.57947434292866,
            "total": 1598
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 22.049,
          "medianPerformance": 22.049,
          "totalKills": 1,
          "fastestKill": 254167,
          "bestAmount": 523.43537910114,
          "spec": "Feral",
          "allStars": {
            "points": 31.57,
            "rank": 916,
            "rankPercent": 24.317617866004962,
            "total": 1209
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 14.065,
          "medianPerformance": 14.065,
          "totalKills": 1,
          "fastestKill": 143168,
          "bestAmount": 510.76357845329,
          "spec": "Guardian",
          "allStars": {
            "points": 48.51,
            "rank": 884,
            "rankPercent": 15.340364333652925,
            "total": 1043
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 90.3096,
          "medianPerformance": 90.3096,
          "totalKills": 1,
          "fastestKill": 227208,
          "bestAmount": 1759.7839864793,
          "spec": "Feral",
          "allStars": {
            "points": 105.74,
            "rank": 88,
            "rankPercent": 90.46052631578948,
            "total": 912
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 74.5507,
          "medianPerformance": 74.5507,
          "totalKills": 1,
          "fastestKill": 422887,
          "bestAmount": 757.41273673582,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 178,
            "rankPercent": 74.92917847025495,
            "total": 706
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 78.1948,
          "medianPerformance": 78.1948,
          "totalKills": 1,
          "fastestKill": 291538,
          "bestAmount": 582.68561902737,
          "spec": "Warden",
          "allStars": {
            "points": 88.35,
            "rank": 42,
            "rankPercent": 76.57142857142857,
            "total": 175
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 91.2358,
          "medianPerformance": 91.2358,
          "totalKills": 1,
          "fastestKill": 158564,
          "bestAmount": 924.42168461946,
          "spec": "Guardian",
          "allStars": {
            "points": 108.04,
            "rank": 68,
            "rankPercent": 91.30998702983139,
            "total": 771
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 56.4992,
          "medianPerformance": 56.4992,
          "totalKills": 1,
          "fastestKill": 137826,
          "bestAmount": 1092.595011101,
          "spec": "Feral",
          "allStars": {
            "points": 64.62,
            "rank": 323,
            "rankPercent": 58.01825293350717,
            "total": 767
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 59.1993,
          "medianPerformance": 59.1993,
          "totalKills": 1,
          "fastestKill": 462791,
          "bestAmount": 568.74053298357,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 218,
            "rankPercent": 59.81481481481482,
            "total": 540
          }
        }
      ],
      "bestPerformanceAverage": 63.3380375,
      "medianPerformanceAverage": 63.3380375,
      "totalKills": 0,
      "fetchedAt": "2026-05-16T22:37:47.068Z",
      "error": null,
      "partial": false
    }
  }
};
