// AUTO-GENERATED - do not edit manually.
// Run `npm run bake:wcl` to regenerate.
// Generated: 2026-05-19T11:37:46.399Z

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
  "generatedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 53.06439235925032,
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
            "points": 82.9152993777393,
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 69.964,
          "medianPerformance": 69.964,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 500.13250298132,
          "spec": "Guardian",
          "allStars": {
            "points": 78.91,
            "rank": 1002,
            "rankPercent": 64.18604651162791,
            "total": 2795
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 69.7418,
          "medianPerformance": 69.7418,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 527.13568005398,
          "spec": "Guardian",
          "allStars": {
            "points": 82.2,
            "rank": 1015,
            "rankPercent": 63.006202116016055,
            "total": 2741
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 51.4572,
          "medianPerformance": 51.4572,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 488.72396384413,
          "spec": "Guardian",
          "allStars": {
            "points": 60.85,
            "rank": 1604,
            "rankPercent": 41.772611696331275,
            "total": 2753
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 13.8434,
          "medianPerformance": 13.8434,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 492.24669006341,
          "spec": "Feral",
          "allStars": {
            "points": 28.54,
            "rank": 2933,
            "rankPercent": -6.30891950688905,
            "total": 2758
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 43.3106,
          "medianPerformance": 43.3106,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 596.39211714268,
          "spec": "Guardian",
          "allStars": {
            "points": 71.65,
            "rank": 2170,
            "rankPercent": 29.85122897800776,
            "total": 3092
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 27.8141,
          "medianPerformance": 27.8141,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 286.93153904503,
          "spec": "Warden",
          "allStars": {
            "points": 0,
            "rank": 454,
            "rankPercent": 5.625,
            "total": 480
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
      "bestPerformanceAverage": 49.6634,
      "medianPerformanceAverage": 49.6634,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 95.13,
            "rank": 858,
            "rankPercent": 80.32598714416896,
            "total": 4356
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
            "points": 112.7,
            "rank": 139,
            "rankPercent": 96.8348623853211,
            "total": 4360
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
            "points": 93.96,
            "rank": 884,
            "rankPercent": 78.19214620894049,
            "total": 4049
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
            "points": 112.52,
            "rank": 95,
            "rankPercent": 97.28793998845931,
            "total": 3466
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
            "points": 78.57,
            "rank": 1416,
            "rankPercent": 58.074074074074076,
            "total": 3375
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
            "rank": 773,
            "rankPercent": 66.59454781479879,
            "total": 2311
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
            "points": 115.18,
            "rank": 71,
            "rankPercent": 97.69812561657349,
            "total": 3041
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
            "points": 86.08,
            "rank": 1075,
            "rankPercent": 63.71621621621622,
            "total": 2960
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
            "points": 49.91,
            "rank": 2310,
            "rankPercent": 20.241796200345423,
            "total": 2895
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
            "rank": 533,
            "rankPercent": 69.7211155378486,
            "total": 1757
          }
        }
      ],
      "bestPerformanceAverage": 73.593175,
      "medianPerformanceAverage": 73.593175,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "id": 30026,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_17.jpg",
          "itemLevel": 128,
          "permanentEnchantID": null,
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
            "points": 66.21,
            "rank": 4689,
            "rankPercent": 48.187444739168875,
            "total": 9048
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
            "rank": 8321,
            "rankPercent": 7.740075404746063,
            "total": 9018
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
            "rank": 9232,
            "rankPercent": -9.307282415630551,
            "total": 8445
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
            "points": 33.27,
            "rank": 8589,
            "rankPercent": -14.338969511383304,
            "total": 7511
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
            "rank": 7009,
            "rankPercent": 2.9093931837073983,
            "total": 7218
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
            "rank": 5891,
            "rankPercent": -14.324534161490684,
            "total": 5152
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
            "points": 49.6,
            "rank": 6571,
            "rankPercent": -2.1455223880597014,
            "total": 6432
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
            "points": 58.49,
            "rank": 7314,
            "rankPercent": -16.37492043284532,
            "total": 6284
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
            "rank": 5846,
            "rankPercent": 4.211733857751557,
            "total": 6102
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
            "rank": 4724,
            "rankPercent": -19.539357124778537,
            "total": 3951
          }
        }
      ],
      "bestPerformanceAverage": 18.74572875,
      "medianPerformanceAverage": 18.74572875,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 84.0496,
          "medianPerformance": 84.0496,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1435.0313791151,
          "spec": "Arcane",
          "allStars": {
            "points": 94.39,
            "rank": 2491,
            "rankPercent": 81.13064565019702,
            "total": 13196
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 65.2255,
          "medianPerformance": 65.2255,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 922.29230265486,
          "spec": "Arcane",
          "allStars": {
            "points": 71.43,
            "rank": 5511,
            "rankPercent": 57.91322945310113,
            "total": 13092
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 91.1198,
          "medianPerformance": 91.1198,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 1285.2224976571,
          "spec": "Arcane",
          "allStars": {
            "points": 103.35,
            "rank": 1297,
            "rankPercent": 89.34998767359684,
            "total": 12169
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 16.0092,
          "medianPerformance": 16.0092,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 795.99267973069,
          "spec": "Arcane",
          "allStars": {
            "points": 37.82,
            "rank": 11199,
            "rankPercent": -5.1850460266766865,
            "total": 10646
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 51.5543,
          "medianPerformance": 51.5543,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1096.3208093579,
          "spec": "Arcane",
          "allStars": {
            "points": 60.48,
            "rank": 6074,
            "rankPercent": 39.31248126311582,
            "total": 10007
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 83.9487,
          "medianPerformance": 83.9487,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 902.93274956079,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 1412,
            "rankPercent": 79.83997713959137,
            "total": 6999
          }
        },
        {
          "encounterID": 100730,
          "encounterName": "Al'ar",
          "rankPercent": 59.72209783774941,
          "medianPerformance": 59.72209783774941,
          "totalKills": 1,
          "fastestKill": 433147,
          "bestAmount": 916.09315082409,
          "spec": "Arcane",
          "allStars": {
            "points": 69.69,
            "rank": 5203,
            "rankPercent": 46.00373676562176,
            "total": 9634
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 41.81095072648951,
          "medianPerformance": 41.81095072648951,
          "totalKills": 1,
          "fastestKill": 218195,
          "bestAmount": 1126.6115172208,
          "spec": "Arcane",
          "allStars": {
            "points": 52.19,
            "rank": 7446,
            "rankPercent": 19.678498219872694,
            "total": 9269
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 59.70175055564201,
          "medianPerformance": 59.70175055564201,
          "totalKills": 1,
          "fastestKill": 152744,
          "bestAmount": 1173.9642801027,
          "spec": "Arcane",
          "allStars": {
            "points": 66.41,
            "rank": 5116,
            "rankPercent": 42.91931704050887,
            "total": 8961
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 51.47821799051173,
          "medianPerformance": 51.47821799051173,
          "totalKills": 1,
          "fastestKill": 633087,
          "bestAmount": 895.98428020162,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 3957,
            "rankPercent": 30.535557506584723,
            "total": 5695
          }
        }
      ],
      "bestPerformanceAverage": 58.649149889985125,
      "medianPerformanceAverage": 58.649149889985125,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 42.17,
            "rank": 2959,
            "rankPercent": 21.53846153846154,
            "total": 3770
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
            "rank": 3787,
            "rankPercent": 1.636788776305534,
            "total": 3849
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
            "points": 40.13,
            "rank": 3008,
            "rankPercent": 18.926934483688324,
            "total": 3709
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
            "points": 25.46,
            "rank": 3056,
            "rankPercent": -10.20923520923521,
            "total": 2772
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
            "rank": 1984,
            "rankPercent": 36.847133757961785,
            "total": 3140
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
            "rank": 1339,
            "rankPercent": 41.23847167325428,
            "total": 2277
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 85.4104,
          "medianPerformance": 85.4104,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1362.2270137442,
          "spec": "Survival",
          "allStars": {
            "points": 96.98,
            "rank": 614,
            "rankPercent": 82.4757004002287,
            "total": 3498
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 69.1013,
          "medianPerformance": 69.1013,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 846.59220574762,
          "spec": "Survival",
          "allStars": {
            "points": 76.23,
            "rank": 1357,
            "rankPercent": 61.57551714366676,
            "total": 3529
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 79.4569,
          "medianPerformance": 79.4569,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 991.1688684664,
          "spec": "Survival",
          "allStars": {
            "points": 89.01,
            "rank": 861,
            "rankPercent": 74.2899850523169,
            "total": 3345
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 75.7195,
          "medianPerformance": 75.7195,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1390.3842388276,
          "spec": "Survival",
          "allStars": {
            "points": 85.76,
            "rank": 931,
            "rankPercent": 69.24603174603175,
            "total": 3024
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 2.9864,
          "medianPerformance": 2.9864,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 554.81822335927,
          "spec": "Survival",
          "allStars": {
            "points": 30.57,
            "rank": 3529,
            "rankPercent": -21.529452290733722,
            "total": 2903
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 90.1863,
          "medianPerformance": 90.1863,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 855.73049517169,
          "spec": "Survival",
          "allStars": {
            "points": 0,
            "rank": 258,
            "rankPercent": 87.96252927400468,
            "total": 2135
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
      "bestPerformanceAverage": 62.53489999999999,
      "medianPerformanceAverage": 62.53489999999999,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 114.75,
            "rank": 40,
            "rankPercent": 99.70445589572597,
            "total": 13196
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
            "points": 93.65,
            "rank": 2299,
            "rankPercent": 82.44729605866178,
            "total": 13092
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
            "points": 79,
            "rank": 4542,
            "rankPercent": 62.68386884707043,
            "total": 12169
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
            "points": 113.02,
            "rank": 196,
            "rankPercent": 98.16832613188052,
            "total": 10646
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
            "points": 107.92,
            "rank": 628,
            "rankPercent": 93.73438592984911,
            "total": 10007
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
            "rank": 744,
            "rankPercent": 89.38419774253465,
            "total": 6999
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
            "points": 110.72,
            "rank": 416,
            "rankPercent": 95.6923396304754,
            "total": 9634
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
            "points": 110.41,
            "rank": 387,
            "rankPercent": 95.8355809688208,
            "total": 9269
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
            "rank": 9311,
            "rankPercent": -3.8946546144403524,
            "total": 8961
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
            "rank": 3551,
            "rankPercent": 37.664618086040385,
            "total": 5695
          }
        }
      ],
      "bestPerformanceAverage": 79.17778750000001,
      "medianPerformanceAverage": 79.17778750000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 72.28,
            "rank": 598,
            "rankPercent": 55.580357142857146,
            "total": 1344
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
            "points": 97.33,
            "rank": 557,
            "rankPercent": 79.71543232396935,
            "total": 2741
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
            "points": 88.85,
            "rank": 737,
            "rankPercent": 73.26552851434798,
            "total": 2753
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
            "points": 90.42,
            "rank": 180,
            "rankPercent": 73.98255813953489,
            "total": 688
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
            "points": 90.95,
            "rank": 893,
            "rankPercent": 71.15135834411385,
            "total": 3092
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
            "rank": 432,
            "rankPercent": 74.6321365509123,
            "total": 1699
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
            "points": 104.54,
            "rank": 409,
            "rankPercent": 89.31657501963865,
            "total": 3819
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
            "points": 97.62,
            "rank": 851,
            "rankPercent": 76.02932882120699,
            "total": 3546
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
            "points": 110.95,
            "rank": 141,
            "rankPercent": 93.61896080218779,
            "total": 2194
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
            "rank": 387,
            "rankPercent": 60.20618556701031,
            "total": 970
          }
        }
      ],
      "bestPerformanceAverage": 73.8380875,
      "medianPerformanceAverage": 73.8380875,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 109.25,
            "rank": 752,
            "rankPercent": 94.954652334565,
            "total": 14885
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
            "points": 102.14,
            "rank": 1501,
            "rankPercent": 90.03322259136213,
            "total": 15050
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
            "rank": 15498,
            "rankPercent": -15.926092160383003,
            "total": 13368
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
            "rank": 12607,
            "rankPercent": -0.12708498808578236,
            "total": 12590
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
            "points": 91.78,
            "rank": 3099,
            "rankPercent": 74.2348636061211,
            "total": 12024
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
            "rank": 7532,
            "rankPercent": 13.803364999427721,
            "total": 8737
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
            "points": 102.52,
            "rank": 1716,
            "rankPercent": 84.15118750577581,
            "total": 10821
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
            "points": 85.59,
            "rank": 3937,
            "rankPercent": 63.13571227872998,
            "total": 10677
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
            "rank": 10944,
            "rankPercent": -5.719254178340257,
            "total": 10351
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
            "rank": 3623,
            "rankPercent": 48.0195177956372,
            "total": 6968
          }
        }
      ],
      "bestPerformanceAverage": 52.460910000000005,
      "medianPerformanceAverage": 52.460910000000005,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 94.28,
            "rank": 2582,
            "rankPercent": 79.31227957678743,
            "total": 12476
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
            "points": 89.2,
            "rank": 2852,
            "rankPercent": 77.3099880620772,
            "total": 12565
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
            "points": 78.03,
            "rank": 4254,
            "rankPercent": 63.835034013605444,
            "total": 11760
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
            "points": 105.93,
            "rank": 908,
            "rankPercent": 91.34211531118747,
            "total": 10476
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
            "rank": 11667,
            "rankPercent": -16.496904333932495,
            "total": 10014
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
            "rank": 2380,
            "rankPercent": 67.07722114586217,
            "total": 7226
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
            "points": 91.74,
            "rank": 2364,
            "rankPercent": 74.18332787064351,
            "total": 9153
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
            "points": 114.51,
            "rank": 149,
            "rankPercent": 98.35042353990191,
            "total": 8972
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
            "points": 90.79,
            "rank": 2193,
            "rankPercent": 74.79590663447166,
            "total": 8697
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
            "rank": 2284,
            "rankPercent": 60.61756080731413,
            "total": 5797
          }
        }
      ],
      "bestPerformanceAverage": 66.22856625,
      "medianPerformanceAverage": 66.22856625,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "id": 29059,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_25.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2747,
          "temporaryEnchantID": null
        },
        {
          "id": 29242,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_11.jpg",
          "itemLevel": 110,
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
          "id": 28227,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_63.jpg",
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
          "id": 25936,
          "slot": 13,
          "quality": 2,
          "icon": "inv_misc_stonetablet_11.jpg",
          "itemLevel": 99,
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
          "temporaryEnchantID": 2628
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
          "id": 25939,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_06.jpg",
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
          "rankPercent": 92.29330876972385,
          "medianPerformance": 92.29330876972385,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 113.90438103039,
          "spec": "Shadow",
          "allStars": {
            "points": 99.74953713987038,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 49.00585048976264,
          "medianPerformance": 49.00585048976264,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 114.16201699349,
          "spec": "Shadow",
          "allStars": {
            "points": 51.718128271653725,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 58.70711790854861,
          "medianPerformance": 58.70711790854861,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 89.051966504429,
          "spec": "Shadow",
          "allStars": {
            "points": 60.702507171498766,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 30.68352167492116,
          "medianPerformance": 30.68352167492116,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 78.000030124565,
          "spec": "Shadow",
          "allStars": {
            "points": 32.37104893284886,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 45.717616647179824,
          "medianPerformance": 45.717616647179824,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 147.54017247752,
          "spec": "Shadow",
          "allStars": {
            "points": 50.74342099108561,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 39.979308839952196,
          "medianPerformance": 39.979308839952196,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 60.682998148854,
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
      "bestPerformanceAverage": 55.281483098027216,
      "medianPerformanceAverage": 55.281483098027216,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 100.39,
            "rank": 728,
            "rankPercent": 89.64239920216555,
            "total": 7019
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
            "points": 102.45,
            "rank": 934,
            "rankPercent": 87.03806612948041,
            "total": 7198
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
            "points": 77.44,
            "rank": 2630,
            "rankPercent": 60.72602330445175,
            "total": 6694
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
            "points": 69.41,
            "rank": 2818,
            "rankPercent": 51.79671457905544,
            "total": 5844
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
            "points": 68.01,
            "rank": 3670,
            "rankPercent": 35.518453427065026,
            "total": 5690
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
            "points": 0,
            "rank": 196,
            "rankPercent": 95.42897327707455,
            "total": 4266
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 79.1641,
          "medianPerformance": 79.1641,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1352.7048676777,
          "spec": "Destruction",
          "allStars": {
            "points": 88.93,
            "rank": 3814,
            "rankPercent": 74.38360765871683,
            "total": 14885
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 36.6922,
          "medianPerformance": 36.6922,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 745.10750749956,
          "spec": "Destruction",
          "allStars": {
            "points": 42.16,
            "rank": 11436,
            "rankPercent": 24.019933554817275,
            "total": 15050
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 89.4597,
          "medianPerformance": 89.4597,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 1181.0476435201,
          "spec": "Destruction",
          "allStars": {
            "points": 101,
            "rank": 1731,
            "rankPercent": 87.05864751645721,
            "total": 13368
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 4.91258,
          "medianPerformance": 4.91258,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 465.34921902065,
          "spec": "Destruction",
          "allStars": {
            "points": 22.42,
            "rank": 14660,
            "rankPercent": -16.433677521842732,
            "total": 12590
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 19.1667,
          "medianPerformance": 19.1667,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 909.16261376502,
          "spec": "Destruction",
          "allStars": {
            "points": 48.41,
            "rank": 12031,
            "rankPercent": -0.0499001996007984,
            "total": 12024
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 87.7643,
          "medianPerformance": 87.7643,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 963.74151558146,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 1305,
            "rankPercent": 85.07496852466522,
            "total": 8737
          }
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
            "points": 98.68,
            "rank": 2204,
            "rankPercent": 79.64143794473709,
            "total": 10821
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
            "points": 67.19,
            "rank": 6808,
            "rankPercent": 36.24613655521214,
            "total": 10677
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
            "rank": 12326,
            "rankPercent": -19.070621196019708,
            "total": 10351
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
            "rank": 6298,
            "rankPercent": 9.629735935706085,
            "total": 6968
          }
        }
      ],
      "bestPerformanceAverage": 43.18209125,
      "medianPerformanceAverage": 43.18209125,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 61.2959,
          "medianPerformance": 61.2959,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 528.38575231579,
          "spec": "Discipline",
          "allStars": {
            "points": 69.62,
            "rank": 761,
            "rankPercent": 54.2719614921781,
            "total": 1662
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 47.7539,
          "medianPerformance": 47.7539,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 525.1743834153,
          "spec": "Discipline",
          "allStars": {
            "points": 54.62,
            "rank": 1000,
            "rankPercent": 38.10408921933085,
            "total": 1614
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 39.1126,
          "medianPerformance": 39.1126,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 493.90852202304,
          "spec": "Discipline",
          "allStars": {
            "points": 46.34,
            "rank": 1094,
            "rankPercent": 27.567925778661365,
            "total": 1509
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 51.8049,
          "medianPerformance": 51.8049,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 680.87918543176,
          "spec": "Discipline",
          "allStars": {
            "points": 59.76,
            "rank": 911,
            "rankPercent": 41.51670951156812,
            "total": 1556
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 61.3456,
          "medianPerformance": 61.3456,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 610.97674202008,
          "spec": "Discipline",
          "allStars": {
            "points": 72.22,
            "rank": 683,
            "rankPercent": 52.80276816608997,
            "total": 1445
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 32.0109,
          "medianPerformance": 32.0109,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 448.78103420493,
          "spec": "Discipline",
          "allStars": {
            "points": 0,
            "rank": 967,
            "rankPercent": 15.485564304461942,
            "total": 1143
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
      "bestPerformanceAverage": 52.26258,
      "medianPerformanceAverage": 52.26258,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 0,
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
            "points": 82.11086744108765,
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 95.08,
            "rank": 1124,
            "rankPercent": 84.00056988174954,
            "total": 7019
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
            "points": 106.17,
            "rank": 662,
            "rankPercent": 90.81689358155043,
            "total": 7198
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
            "points": 97.82,
            "rank": 1125,
            "rankPercent": 83.20884374066328,
            "total": 6694
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
            "points": 106.83,
            "rank": 423,
            "rankPercent": 92.77891854893909,
            "total": 5844
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
            "points": 92.3,
            "rank": 1476,
            "rankPercent": 74.07732864674868,
            "total": 5690
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
            "rank": 664,
            "rankPercent": 84.45850914205344,
            "total": 4266
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
            "points": 104.18,
            "rank": 751,
            "rankPercent": 85.67335243553009,
            "total": 5235
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
            "points": 115.96,
            "rank": 116,
            "rankPercent": 97.7214186645532,
            "total": 5047
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
            "points": 62.1,
            "rank": 3213,
            "rankPercent": 35.46313039983926,
            "total": 4977
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
            "rank": 1353,
            "rankPercent": 59.94074074074074,
            "total": 3375
          }
        }
      ],
      "bestPerformanceAverage": 79.1123375,
      "medianPerformanceAverage": 79.1123375,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 75,
          "medianPerformance": 75,
          "totalKills": 1,
          "fastestKill": 166034,
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
          "fastestKill": 302351,
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
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 1,
          "fastestKill": 264666,
          "bestAmount": 0,
          "spec": "Restoration",
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
          "rankPercent": 80.40806600944242,
          "medianPerformance": 80.40806600944242,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 9.8770917744875,
          "spec": "Restoration",
          "allStars": {
            "points": 80.77597414626855,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 0,
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
          "rankPercent": 99.75162742808399,
          "medianPerformance": 99.75162742808399,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 90.603960901913,
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
          "rankPercent": 93.74650834933982,
          "medianPerformance": 93.74650834933982,
          "totalKills": 1,
          "fastestKill": 450175,
          "bestAmount": 2.3257622035875,
          "spec": "Restoration",
          "allStars": {
            "points": 93.9831335263735,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100731,
          "encounterName": "Void Reaver",
          "rankPercent": 71.7610917653473,
          "medianPerformance": 71.7610917653473,
          "totalKills": 1,
          "fastestKill": 203848,
          "bestAmount": 1.8494172128252,
          "spec": "Restoration",
          "allStars": {
            "points": 71.96486533324918,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100732,
          "encounterName": "High Astromancer Solarian",
          "rankPercent": 98.80518013623939,
          "medianPerformance": 98.80518013623939,
          "totalKills": 1,
          "fastestKill": 123578,
          "bestAmount": 190.89158264416,
          "spec": "Restoration",
          "allStars": {
            "points": 104.11991052611158,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100733,
          "encounterName": "Kael'thas Sunstrider",
          "rankPercent": 53.530307251084196,
          "medianPerformance": 53.530307251084196,
          "totalKills": 1,
          "fastestKill": 512384,
          "bestAmount": 3.0348332500625,
          "spec": "Restoration",
          "allStars": {
            "points": null,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 73.71510578254612,
      "medianPerformanceAverage": 73.71510578254612,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 90.82,
            "rank": 3511,
            "rankPercent": 76.41921397379913,
            "total": 14885
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
            "points": 109.15,
            "rank": 459,
            "rankPercent": 96.95681063122923,
            "total": 15050
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
            "points": 81.63,
            "rank": 4492,
            "rankPercent": 66.4048473967684,
            "total": 13368
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
            "points": 110.21,
            "rank": 554,
            "rankPercent": 95.60762509928514,
            "total": 12590
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
            "points": 93.94,
            "rank": 2807,
            "rankPercent": 76.66333998669327,
            "total": 12024
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
            "rank": 8754,
            "rankPercent": -0.183129220556255,
            "total": 8737
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
            "points": 98.25,
            "rank": 2260,
            "rankPercent": 79.12392570002773,
            "total": 10821
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
            "points": 109.6,
            "rank": 870,
            "rankPercent": 91.86100964690456,
            "total": 10677
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
            "rank": 11994,
            "rankPercent": -15.86320162303159,
            "total": 10351
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
            "rank": 3935,
            "rankPercent": 43.54190585533869,
            "total": 6968
          }
        }
      ],
      "bestPerformanceAverage": 71.0515375,
      "medianPerformanceAverage": 71.0515375,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 111.8,
            "rank": 304,
            "rankPercent": 96.30532861846116,
            "total": 8201
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
            "points": 99.52,
            "rank": 1103,
            "rankPercent": 86.76435263031468,
            "total": 8326
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
            "points": 9.45,
            "rank": 9264,
            "rankPercent": -16.691861929957167,
            "total": 7938
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
            "points": 92.75,
            "rank": 1291,
            "rankPercent": 77.1560120417921,
            "total": 5647
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
            "points": 104.21,
            "rank": 824,
            "rankPercent": 87.00047385879009,
            "total": 6331
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
            "rank": 440,
            "rankPercent": 89.78594695207073,
            "total": 4298
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
            "points": 94.19,
            "rank": 638,
            "rankPercent": 74.72222222222223,
            "total": 2520
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
            "points": 113.63,
            "rank": 112,
            "rankPercent": 95.6436420722135,
            "total": 2548
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
            "points": 104.31,
            "rank": 221,
            "rankPercent": 91.37931034482759,
            "total": 2552
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
            "rank": 1666,
            "rankPercent": -1.2773722627737227,
            "total": 1644
          }
        }
      ],
      "bestPerformanceAverage": 74.6238275,
      "medianPerformanceAverage": 74.6238275,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 91.3764,
          "medianPerformance": 91.3764,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1844.7546887987,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.38,
            "rank": 1303,
            "rankPercent": 89.56396280859249,
            "total": 12476
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 81.6796,
          "medianPerformance": 81.6796,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 1123.5616882365,
          "spec": "BeastMastery",
          "allStars": {
            "points": 89.7,
            "rank": 2787,
            "rankPercent": 77.82729805013928,
            "total": 12565
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 76.5672,
          "medianPerformance": 76.5672,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 1098.5066053992,
          "spec": "BeastMastery",
          "allStars": {
            "points": 85.09,
            "rank": 3348,
            "rankPercent": 71.53911564625851,
            "total": 11760
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 82.7355,
          "medianPerformance": 82.7355,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1740.6387914024,
          "spec": "BeastMastery",
          "allStars": {
            "points": 94.24,
            "rank": 2171,
            "rankPercent": 79.28598701794579,
            "total": 10476
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 72.3493,
          "medianPerformance": 72.3493,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1642.488961846,
          "spec": "BeastMastery",
          "allStars": {
            "points": 83.64,
            "rank": 3432,
            "rankPercent": 65.73796684641502,
            "total": 10014
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 90.4028,
          "medianPerformance": 90.4028,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 998.98796165652,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 874,
            "rankPercent": 87.91862717962911,
            "total": 7226
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
      "bestPerformanceAverage": 80.9416,
      "medianPerformanceAverage": 80.9416,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 114.76,
            "rank": 137,
            "rankPercent": 98.49690539345711,
            "total": 9048
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
            "points": 93.54,
            "rank": 1946,
            "rankPercent": 78.43202483921047,
            "total": 9018
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
            "points": 103.29,
            "rank": 867,
            "rankPercent": 89.74541148608644,
            "total": 8445
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
            "points": 99.81,
            "rank": 1193,
            "rankPercent": 84.12994275063241,
            "total": 7511
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
            "rank": 8787,
            "rankPercent": -21.72346910501524,
            "total": 7218
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
            "rank": 1031,
            "rankPercent": 80.00776397515529,
            "total": 5152
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
            "points": 115.54,
            "rank": 118,
            "rankPercent": 98.18097014925372,
            "total": 6432
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
            "points": 114.32,
            "rank": 243,
            "rankPercent": 96.14894971355824,
            "total": 6284
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
            "points": 102.06,
            "rank": 802,
            "rankPercent": 86.8731563421829,
            "total": 6102
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
            "rank": 25,
            "rankPercent": 99.39255884586181,
            "total": 3951
          }
        }
      ],
      "bestPerformanceAverage": 77.414057125,
      "medianPerformanceAverage": 77.414057125,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 98.74,
            "rank": 2011,
            "rankPercent": 83.88906700865662,
            "total": 12476
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
            "points": 38.31,
            "rank": 9880,
            "rankPercent": 21.37684042976522,
            "total": 12565
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
            "points": 104.23,
            "rank": 1005,
            "rankPercent": 91.4625850340136,
            "total": 11760
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
            "points": 110.16,
            "rank": 497,
            "rankPercent": 95.26536846124475,
            "total": 10476
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
            "points": 103.84,
            "rank": 1211,
            "rankPercent": 87.91691631715598,
            "total": 10014
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
            "rank": 3646,
            "rankPercent": 49.55715471907003,
            "total": 7226
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
            "points": 111.37,
            "rank": 383,
            "rankPercent": 95.82650497104774,
            "total": 9153
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
            "points": 97.23,
            "rank": 1755,
            "rankPercent": 80.45028979045921,
            "total": 8972
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
            "points": 54.42,
            "rank": 6154,
            "rankPercent": 29.251466022766472,
            "total": 8697
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
            "rank": 880,
            "rankPercent": 84.83698464723133,
            "total": 5797
          }
        }
      ],
      "bestPerformanceAverage": 70.87083750000001,
      "medianPerformanceAverage": 70.87083750000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 85.64,
            "rank": 2418,
            "rankPercent": 70.5279843921473,
            "total": 8201
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
            "points": 81.25,
            "rank": 2732,
            "rankPercent": 67.19913523901033,
            "total": 8326
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
            "points": 87.03,
            "rank": 2123,
            "rankPercent": 73.26782564877803,
            "total": 7938
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
            "points": 111.34,
            "rank": 230,
            "rankPercent": 95.94474942447317,
            "total": 5647
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
            "points": 100.78,
            "rank": 1062,
            "rankPercent": 83.24119412415101,
            "total": 6331
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
            "rank": 161,
            "rankPercent": 96.27733829688228,
            "total": 4298
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
            "points": 107.79,
            "rank": 519,
            "rankPercent": 90.28142589118198,
            "total": 5330
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
            "points": 110.64,
            "rank": 390,
            "rankPercent": 92.80296022201665,
            "total": 5405
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
            "points": 112.55,
            "rank": 29,
            "rankPercent": 99.48529411764706,
            "total": 5440
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
            "rank": 7,
            "rankPercent": 99.80909958638243,
            "total": 3143
          }
        }
      ],
      "bestPerformanceAverage": 81.5758375,
      "medianPerformanceAverage": 81.5758375,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 86.6605,
          "medianPerformance": 86.6605,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1259.3685630654,
          "spec": "Combat",
          "allStars": {
            "points": 98.79,
            "rank": 1181,
            "rankPercent": 84.51443569553805,
            "total": 7620
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 92.4724,
          "medianPerformance": 92.4724,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 1158.6500458077,
          "spec": "Combat",
          "allStars": {
            "points": 103.84,
            "rank": 678,
            "rankPercent": 91.1803022407504,
            "total": 7676
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 88.9393,
          "medianPerformance": 88.9393,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 1105.0666586052,
          "spec": "Combat",
          "allStars": {
            "points": 100.33,
            "rank": 943,
            "rankPercent": 86.64776754075125,
            "total": 7055
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 80.5138,
          "medianPerformance": 80.5138,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1429.7683420946,
          "spec": "Combat",
          "allStars": {
            "points": 91.25,
            "rank": 1453,
            "rankPercent": 75.97219923878868,
            "total": 6043
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 70.7428,
          "medianPerformance": 70.7428,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1323.335690856,
          "spec": "Combat",
          "allStars": {
            "points": 83.67,
            "rank": 2094,
            "rankPercent": 63.466573573049395,
            "total": 5729
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 48.2499,
          "medianPerformance": 48.2499,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 675.50906511239,
          "spec": "Combat",
          "allStars": {
            "points": 0,
            "rank": 2520,
            "rankPercent": 32.284946236559136,
            "total": 3720
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
      "bestPerformanceAverage": 83.86576,
      "medianPerformanceAverage": 83.86576,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 99.24,
            "rank": 1821,
            "rankPercent": 86.20794180054563,
            "total": 13196
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
            "points": 84.44,
            "rank": 3616,
            "rankPercent": 72.38771769019249,
            "total": 13092
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
            "points": 61.85,
            "rank": 6905,
            "rankPercent": 43.26567507601282,
            "total": 12169
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
            "points": 84.74,
            "rank": 3342,
            "rankPercent": 68.61732105955288,
            "total": 10646
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
            "rank": 8974,
            "rankPercent": 10.332767063055861,
            "total": 10007
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
            "rank": 6452,
            "rankPercent": 7.829689955707958,
            "total": 6999
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
            "points": 87.39,
            "rank": 3061,
            "rankPercent": 68.23749221507163,
            "total": 9634
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
            "points": 83.17,
            "rank": 3488,
            "rankPercent": 62.37997626496925,
            "total": 9269
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
            "points": 44.61,
            "rank": 7639,
            "rankPercent": 14.76397723468363,
            "total": 8961
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
            "rank": 4745,
            "rankPercent": 16.698858647936788,
            "total": 5695
          }
        }
      ],
      "bestPerformanceAverage": 53.56133750000001,
      "medianPerformanceAverage": 53.56133750000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
      "error": null,
      "partial": false
    },
    "moorkit": {
      "characterName": "Moorkit",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
      "error": "Character not found on spineshatter-eu",
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
          "rankPercent": 50.4644,
          "medianPerformance": 50.4644,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1023.031427298,
          "spec": "Affliction",
          "allStars": {
            "points": 57.49,
            "rank": 1655,
            "rankPercent": 39.25817113477782,
            "total": 2723
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 35.3342,
          "medianPerformance": 35.3342,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 671.37862947369,
          "spec": "Affliction",
          "allStars": {
            "points": 44.94,
            "rank": 2139,
            "rankPercent": 22.141296431172616,
            "total": 2746
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 55.7515,
          "medianPerformance": 55.7515,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 864.721575622,
          "spec": "Affliction",
          "allStars": {
            "points": 65.72,
            "rank": 1264,
            "rankPercent": 45.34833405452185,
            "total": 2311
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 66.1704,
          "medianPerformance": 66.1704,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1127.694265789,
          "spec": "Affliction",
          "allStars": {
            "points": 76.9,
            "rank": 1028,
            "rankPercent": 57.875307629204265,
            "total": 2438
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 27.3743,
          "medianPerformance": 27.3743,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 937.70610132691,
          "spec": "Affliction",
          "allStars": {
            "points": 64.39,
            "rank": 2118,
            "rankPercent": 10.372565622353937,
            "total": 2362
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 74.9457,
          "medianPerformance": 74.9457,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 750.2643090431,
          "spec": "Affliction",
          "allStars": {
            "points": 0,
            "rank": 594,
            "rankPercent": 67.09211986681466,
            "total": 1802
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
      "bestPerformanceAverage": 47.01896,
      "medianPerformanceAverage": 47.01896,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 65.1988,
          "medianPerformance": 65.1988,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1117.7228760374,
          "spec": "Fury",
          "allStars": {
            "points": 73.64,
            "rank": 3473,
            "rankPercent": 57.66369954883551,
            "total": 8201
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 75.6281,
          "medianPerformance": 75.6281,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 1082.5695962639,
          "spec": "Fury",
          "allStars": {
            "points": 83.62,
            "rank": 2516,
            "rankPercent": 69.79341820802306,
            "total": 8326
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 55.4583,
          "medianPerformance": 55.4583,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 887.30765742616,
          "spec": "Fury",
          "allStars": {
            "points": 62.29,
            "rank": 4320,
            "rankPercent": 45.59082892416226,
            "total": 7938
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 69.1274,
          "medianPerformance": 69.1274,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1734.9829043093,
          "spec": "Fury",
          "allStars": {
            "points": 78.01,
            "rank": 2216,
            "rankPercent": 60.775633079511245,
            "total": 5647
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 57.2445,
          "medianPerformance": 57.2445,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1269.1767006907,
          "spec": "Fury",
          "allStars": {
            "points": 68.34,
            "rank": 3397,
            "rankPercent": 46.35918496288106,
            "total": 6331
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 30.8746,
          "medianPerformance": 30.8746,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 651.17298191694,
          "spec": "Fury",
          "allStars": {
            "points": 0,
            "rank": 3865,
            "rankPercent": 10.09771986970684,
            "total": 4298
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
      "bestPerformanceAverage": 64.53142,
      "medianPerformanceAverage": 64.53142,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 0,
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
            "points": 0,
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
            "points": 97.31889665941253,
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
            "points": 58.02606249634666,
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "id": 32083,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_01.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2999,
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
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28203,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_15.jpg",
          "itemLevel": 115,
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
          "id": 28621,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_05.jpg",
          "itemLevel": 115,
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
          "id": 28643,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 113,
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
          "id": 28407,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_ahnqiraj_04.jpg",
          "itemLevel": 115,
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
          "id": 27529,
          "slot": 13,
          "quality": 3,
          "icon": "inv_qirajidol_rebirth.jpg",
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
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 115,
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
          "id": 28606,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_29.jpg",
          "itemLevel": 115,
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
            "points": 115.36,
            "rank": 51,
            "rankPercent": 99.04196206169765,
            "total": 5219
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
            "points": 106.65,
            "rank": 397,
            "rankPercent": 92.53815715093273,
            "total": 5307
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
            "points": 36.34,
            "rank": 4701,
            "rankPercent": 10.493239382974672,
            "total": 5251
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
            "points": 108.91,
            "rank": 235,
            "rankPercent": 94.15438421184112,
            "total": 4003
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
            "rank": 4882,
            "rankPercent": -22.147147147147148,
            "total": 3996
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
            "rank": 3081,
            "rankPercent": 0.32362459546925565,
            "total": 3090
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
            "points": 114.1,
            "rank": 80,
            "rankPercent": 97.78773452814337,
            "total": 3571
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
            "points": 116.71,
            "rank": 34,
            "rankPercent": 99.11953041622199,
            "total": 3748
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
            "points": 102.03,
            "rank": 436,
            "rankPercent": 87.77746558021916,
            "total": 3559
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
            "rank": 2856,
            "rankPercent": -25.992939099735217,
            "total": 2266
          }
        }
      ],
      "bestPerformanceAverage": 73.42298075,
      "medianPerformanceAverage": 73.42298075,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 91.1849,
          "medianPerformance": 91.1849,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1838.8583061301,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.07,
            "rank": 1342,
            "rankPercent": 89.25136261622315,
            "total": 12476
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 78.5442,
          "medianPerformance": 78.5442,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 1068.2319555748,
          "spec": "BeastMastery",
          "allStars": {
            "points": 86.23,
            "rank": 3242,
            "rankPercent": 74.20612813370474,
            "total": 12565
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 83.6599,
          "medianPerformance": 83.6599,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 1210.9457661961,
          "spec": "BeastMastery",
          "allStars": {
            "points": 93.37,
            "rank": 2308,
            "rankPercent": 80.38265306122449,
            "total": 11760
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 76.725,
          "medianPerformance": 76.725,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1622.8969288006,
          "spec": "BeastMastery",
          "allStars": {
            "points": 86.99,
            "rank": 2999,
            "rankPercent": 71.38220694921726,
            "total": 10476
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 49.6181,
          "medianPerformance": 49.6181,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1379.8754878762,
          "spec": "BeastMastery",
          "allStars": {
            "points": 59.12,
            "rank": 6215,
            "rankPercent": 37.946874375873776,
            "total": 10014
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 81.215,
          "medianPerformance": 81.215,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 933.51006339487,
          "spec": "BeastMastery",
          "allStars": {
            "points": 0,
            "rank": 1688,
            "rankPercent": 76.65375034597288,
            "total": 7226
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
      "bestPerformanceAverage": 75.94642000000002,
      "medianPerformanceAverage": 75.94642000000002,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 108.57,
            "rank": 45,
            "rankPercent": 98.80467264330345,
            "total": 3681
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
            "points": 113.84,
            "rank": 59,
            "rankPercent": 98.92850544984297,
            "total": 5413
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
            "points": 108.82,
            "rank": 89,
            "rankPercent": 98.07481951432946,
            "total": 4571
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
            "points": 112.99,
            "rank": 39,
            "rankPercent": 99.01196047841914,
            "total": 3846
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
            "points": 101.96,
            "rank": 397,
            "rankPercent": 92.8,
            "total": 5500
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
            "rank": 74,
            "rankPercent": 97.37410071942446,
            "total": 2780
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
            "points": 106.29,
            "rank": 151,
            "rankPercent": 96.47390691114245,
            "total": 4254
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
            "points": 100.74,
            "rank": 268,
            "rankPercent": 86.41221374045801,
            "total": 1965
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
            "points": 116.5,
            "rank": 16,
            "rankPercent": 99.58915365653246,
            "total": 3651
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
            "rank": 122,
            "rankPercent": 93.7789203084833,
            "total": 1945
          }
        }
      ],
      "bestPerformanceAverage": 94.7324,
      "medianPerformanceAverage": 94.7324,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 79.6215,
          "medianPerformance": 79.6215,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1211.7578327331,
          "spec": "Enhancement",
          "allStars": {
            "points": 90.48,
            "rank": 2295,
            "rankPercent": 74.64633068081343,
            "total": 9048
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 75.0299,
          "medianPerformance": 75.0299,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 999.3484393966,
          "spec": "Enhancement",
          "allStars": {
            "points": 85.15,
            "rank": 2769,
            "rankPercent": 69.30583277888667,
            "total": 9018
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 78.9966,
          "medianPerformance": 78.9966,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 988.67483902174,
          "spec": "Enhancement",
          "allStars": {
            "points": 88.38,
            "rank": 2216,
            "rankPercent": 73.77146240378923,
            "total": 8445
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 73.3868,
          "medianPerformance": 73.3868,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1348.5336867949,
          "spec": "Enhancement",
          "allStars": {
            "points": 83.74,
            "rank": 2529,
            "rankPercent": 66.34269737718013,
            "total": 7511
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 37.0652,
          "medianPerformance": 37.0652,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1143.5702207049,
          "spec": "Enhancement",
          "allStars": {
            "points": 64.76,
            "rank": 5653,
            "rankPercent": 21.69576059850374,
            "total": 7218
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 11.9006,
          "medianPerformance": 11.9006,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 456.06771027799,
          "spec": "Elemental",
          "allStars": {
            "points": 0,
            "rank": 4739,
            "rankPercent": -11.064228785747773,
            "total": 4266
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
      "bestPerformanceAverage": 68.82000000000001,
      "medianPerformanceAverage": 68.82000000000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 99.4,
            "rank": 1135,
            "rankPercent": 85.11811023622047,
            "total": 7620
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
            "points": 105.6,
            "rank": 547,
            "rankPercent": 92.88692027097447,
            "total": 7676
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
            "points": 65.27,
            "rank": 3653,
            "rankPercent": 48.23529411764706,
            "total": 7055
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
            "rank": 7243,
            "rankPercent": -19.84113850736389,
            "total": 6043
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
            "points": 100.39,
            "rank": 1012,
            "rankPercent": 82.3529411764706,
            "total": 5729
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
            "rank": 1459,
            "rankPercent": 60.806451612903224,
            "total": 3720
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
            "points": 108.35,
            "rank": 457,
            "rankPercent": 91.36200037885963,
            "total": 5279
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
            "points": 119.2,
            "rank": 5,
            "rankPercent": 99.92289899768697,
            "total": 5188
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
            "points": 101.66,
            "rank": 683,
            "rankPercent": 86.29971876255524,
            "total": 4978
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
            "rank": 1237,
            "rankPercent": 57.56951596292482,
            "total": 2913
          }
        }
      ],
      "bestPerformanceAverage": 71.30479375,
      "medianPerformanceAverage": 71.30479375,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "id": 30341,
          "slot": 10,
          "quality": 2,
          "icon": "inv_gauntlets_23.jpg",
          "itemLevel": 114,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 68.0348,
          "medianPerformance": 68.0348,
          "totalKills": 1,
          "fastestKill": 169825,
          "bestAmount": 1149.78948918,
          "spec": "Retribution",
          "allStars": {
            "points": 76.57,
            "rank": 2072,
            "rankPercent": 60.31806859551638,
            "total": 5219
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 72.7467,
          "medianPerformance": 72.7467,
          "totalKills": 1,
          "fastestKill": 263322,
          "bestAmount": 981.95365370155,
          "spec": "Retribution",
          "allStars": {
            "points": 81.76,
            "rank": 1802,
            "rankPercent": 66.06368946674203,
            "total": 5307
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 81.1785,
          "medianPerformance": 81.1785,
          "totalKills": 1,
          "fastestKill": 237691,
          "bestAmount": 1055.8077503986,
          "spec": "Retribution",
          "allStars": {
            "points": 92.21,
            "rank": 1180,
            "rankPercent": 77.5471338792611,
            "total": 5251
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 54.7574,
          "medianPerformance": 54.7574,
          "totalKills": 1,
          "fastestKill": 225659,
          "bestAmount": 1144.8380077905,
          "spec": "Retribution",
          "allStars": {
            "points": 63.46,
            "rank": 2252,
            "rankPercent": 43.76717461903572,
            "total": 4003
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 63.8959,
          "medianPerformance": 63.8959,
          "totalKills": 1,
          "fastestKill": 239496,
          "bestAmount": 1322.5106056051,
          "spec": "Retribution",
          "allStars": {
            "points": 76.62,
            "rank": 1789,
            "rankPercent": 55.25525525525526,
            "total": 3996
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 17.1281,
          "medianPerformance": 17.1281,
          "totalKills": 1,
          "fastestKill": 557166,
          "bestAmount": 494.1974205174,
          "spec": "Retribution",
          "allStars": {
            "points": 0,
            "rank": 3280,
            "rankPercent": -6.116504854368932,
            "total": 3090
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
      "bestPerformanceAverage": 68.12266,
      "medianPerformanceAverage": 68.12266,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "id": 31371,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_06.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 3008,
          "temporaryEnchantID": null
        },
        {
          "id": 25070,
          "slot": 2,
          "quality": 2,
          "icon": "inv_jewelry_amulet_03.jpg",
          "itemLevel": 117,
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
          "id": 31369,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2987,
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
          "id": 31370,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_10.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2987,
          "temporaryEnchantID": null
        },
        {
          "id": 31214,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_08.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 2987,
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
          "id": 28394,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_48naxxramas.jpg",
          "itemLevel": 115,
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
          "id": 28570,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
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
          "rankPercent": 81.3521,
          "medianPerformance": 81.3521,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 413.99954226243,
          "spec": "Protection",
          "allStars": {
            "points": 87.23,
            "rank": 837,
            "rankPercent": 77.28878022276555,
            "total": 3681
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 45.775,
          "medianPerformance": 45.775,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 210.76497183737,
          "spec": "Justicar",
          "allStars": {
            "points": 51.76,
            "rank": 3529,
            "rankPercent": 34.823572880103455,
            "total": 5413
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 49.9919,
          "medianPerformance": 49.9919,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 256.76033132803,
          "spec": "Justicar",
          "allStars": {
            "points": 54.8,
            "rank": 2803,
            "rankPercent": 38.70050317217239,
            "total": 4571
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 76.1969,
          "medianPerformance": 76.1969,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 667.97457486708,
          "spec": "Protection",
          "allStars": {
            "points": 84.51,
            "rank": 1152,
            "rankPercent": 70.07280291211649,
            "total": 3846
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 44.7351,
          "medianPerformance": 44.7351,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 118.33599646081,
          "spec": "Justicar",
          "allStars": {
            "points": 47.06,
            "rank": 3799,
            "rankPercent": 30.945454545454545,
            "total": 5500
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 86.0798,
          "medianPerformance": 86.0798,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 257.93221897759,
          "spec": "Justicar",
          "allStars": {
            "points": 0,
            "rank": 494,
            "rankPercent": 82.26618705035972,
            "total": 2780
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
      "bestPerformanceAverage": 59.6102,
      "medianPerformanceAverage": 59.6102,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 1,
          "fastestKill": 166035,
          "bestAmount": 0,
          "spec": "Holy",
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
          "rankPercent": 50,
          "medianPerformance": 50,
          "totalKills": 1,
          "fastestKill": 302409,
          "bestAmount": 0,
          "spec": "Holy",
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
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 1,
          "fastestKill": 264637,
          "bestAmount": 0,
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
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 0,
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
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 343614,
          "bestAmount": 0,
          "spec": "Holy",
          "allStars": {
            "points": 60,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 69.42649719738289,
          "medianPerformance": 69.42649719738289,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 0.93146830060093,
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
      "bestPerformanceAverage": 61,
      "medianPerformanceAverage": 61,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 14.6114,
          "medianPerformance": 14.6114,
          "totalKills": 1,
          "fastestKill": 287813,
          "bestAmount": 739.13270074667,
          "spec": "Destruction",
          "allStars": {
            "points": 34.74,
            "rank": 14345,
            "rankPercent": 3.6345314074571715,
            "total": 14885
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 33.5995,
          "medianPerformance": 33.5995,
          "totalKills": 1,
          "fastestKill": 487142,
          "bestAmount": 756.37699069265,
          "spec": "Destruction",
          "allStars": {
            "points": 43.94,
            "rank": 11135,
            "rankPercent": 26.019933554817275,
            "total": 15050
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 12.7032,
          "medianPerformance": 12.7032,
          "totalKills": 1,
          "fastestKill": 464199,
          "bestAmount": 433.40248471022,
          "spec": "Destruction",
          "allStars": {
            "points": 25.95,
            "rank": 13768,
            "rankPercent": -2.9847396768402152,
            "total": 13368
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 29.6073,
          "medianPerformance": 29.6073,
          "totalKills": 1,
          "fastestKill": 277194,
          "bestAmount": 1007.1141511,
          "spec": "Destruction",
          "allStars": {
            "points": 48.52,
            "rank": 9899,
            "rankPercent": 21.382049245432885,
            "total": 12590
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 39.7444,
          "medianPerformance": 39.7444,
          "totalKills": 1,
          "fastestKill": 322304,
          "bestAmount": 1196.3829179905,
          "spec": "Destruction",
          "allStars": {
            "points": 63.7,
            "rank": 7115,
            "rankPercent": 40.83499667332003,
            "total": 12024
          }
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
      "bestPerformanceAverage": 26.053160000000002,
      "medianPerformanceAverage": 26.053160000000002,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 84.851,
          "medianPerformance": 84.851,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 789.3383282942,
          "spec": "Holy",
          "allStars": {
            "points": 96.74,
            "rank": 1445,
            "rankPercent": 83.07944691820951,
            "total": 8534
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 75.4177,
          "medianPerformance": 75.4177,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 867.29992624466,
          "spec": "Holy",
          "allStars": {
            "points": 84.02,
            "rank": 2567,
            "rankPercent": 70.45820861155883,
            "total": 8686
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 67.6516,
          "medianPerformance": 67.6516,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 823.43405181535,
          "spec": "Holy",
          "allStars": {
            "points": 74.72,
            "rank": 3187,
            "rankPercent": 60.73937153419593,
            "total": 8115
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 76.9325,
          "medianPerformance": 76.9325,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1136.1931587113,
          "spec": "Holy",
          "allStars": {
            "points": 87.2,
            "rank": 1963,
            "rankPercent": 72.20569485762856,
            "total": 7059
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 60.5481,
          "medianPerformance": 60.5481,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 852.3143014311,
          "spec": "Holy",
          "allStars": {
            "points": 70.36,
            "rank": 3233,
            "rankPercent": 51.64572112507481,
            "total": 6684
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 80.6913,
          "medianPerformance": 80.6913,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 772.41910571183,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 1092,
            "rankPercent": 75.21017950465803,
            "total": 4401
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
      "bestPerformanceAverage": 73.08018,
      "medianPerformanceAverage": 73.08018,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 108.26,
            "rank": 74,
            "rankPercent": 95.60770156438026,
            "total": 1662
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
            "points": 82.77,
            "rank": 496,
            "rankPercent": 69.33085501858736,
            "total": 1614
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
            "points": 77.56,
            "rank": 566,
            "rankPercent": 62.557985420808485,
            "total": 1509
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
            "points": 96.03,
            "rank": 273,
            "rankPercent": 82.51928020565553,
            "total": 1556
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
            "points": 107.35,
            "rank": 125,
            "rankPercent": 91.41868512110727,
            "total": 1445
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
            "rank": 57,
            "rankPercent": 95.10061242344707,
            "total": 1143
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
            "points": 105.93,
            "rank": 99,
            "rankPercent": 92.1285140562249,
            "total": 1245
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
            "points": 114.82,
            "rank": 198,
            "rankPercent": 96.80142880337718,
            "total": 6159
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
            "points": 117.01,
            "rank": 8,
            "rankPercent": 99.87807002264414,
            "total": 5741
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
            "rank": 44,
            "rankPercent": 98.7503632664923,
            "total": 3441
          }
        }
      ],
      "bestPerformanceAverage": 85.24839999999999,
      "medianPerformanceAverage": 85.24839999999999,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 80.68,
            "rank": 1241,
            "rankPercent": 64.55117209834191,
            "total": 3498
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
            "points": 70.12,
            "rank": 1598,
            "rankPercent": 54.74638707849249,
            "total": 3529
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
            "points": 66.42,
            "rank": 1716,
            "rankPercent": 48.729446935724965,
            "total": 3345
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
            "points": 97.08,
            "rank": 545,
            "rankPercent": 82.01058201058201,
            "total": 3024
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
            "points": 80.06,
            "rank": 1160,
            "rankPercent": 60.07578367206338,
            "total": 2903
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
            "rank": 905,
            "rankPercent": 57.65807962529274,
            "total": 2135
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
            "points": 98.21,
            "rank": 506,
            "rankPercent": 80.30421216848674,
            "total": 2564
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
            "points": 76.48,
            "rank": 1207,
            "rankPercent": 51.99044585987261,
            "total": 2512
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
            "rank": 2935,
            "rankPercent": -22.09737827715356,
            "total": 2403
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
            "rank": 1502,
            "rankPercent": 6.9435833849969,
            "total": 1613
          }
        }
      ],
      "bestPerformanceAverage": 59.13131250000001,
      "medianPerformanceAverage": 59.13131250000001,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "id": 35374,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_12.jpg",
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
          "id": 28585,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_09.jpg",
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
          "id": 31339,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_56.jpg",
          "itemLevel": 100,
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 23.05051470150677,
          "medianPerformance": 23.05051470150677,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 627.69071395015,
          "spec": "Balance",
          "allStars": {
            "points": 40.09,
            "rank": 4032,
            "rankPercent": 7.460973370064279,
            "total": 4356
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 32.50082169316449,
          "medianPerformance": 32.50082169316449,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 532.11664588508,
          "spec": "Balance",
          "allStars": {
            "points": 48.81,
            "rank": 3548,
            "rankPercent": 18.646788990825687,
            "total": 4360
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 45.73536447042335,
          "medianPerformance": 45.73536447042335,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 681.25925813961,
          "spec": "Balance",
          "allStars": {
            "points": 55.34,
            "rank": 2708,
            "rankPercent": 33.14398616942455,
            "total": 4049
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 3.127759487636913,
          "medianPerformance": 3.127759487636913,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 310.94952629121,
          "spec": "Balance",
          "allStars": {
            "points": 21.03,
            "rank": 4161,
            "rankPercent": -20.023081361800347,
            "total": 3466
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 0.43602878136297646,
          "medianPerformance": 0.43602878136297646,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 128.6276016427,
          "spec": "Balance",
          "allStars": {
            "points": 9.3,
            "rank": 4164,
            "rankPercent": -23.348148148148148,
            "total": 3375
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 4.608884663223055,
          "medianPerformance": 4.608884663223055,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 335.83558994957,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 2853,
            "rankPercent": -23.409779316313283,
            "total": 2311
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
      "bestPerformanceAverage": 20.9700978268189,
      "medianPerformanceAverage": 20.9700978268189,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 88.6824,
          "medianPerformance": 88.6824,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1522.7363070215,
          "spec": "Arcane",
          "allStars": {
            "points": 99.57,
            "rank": 1775,
            "rankPercent": 86.55653228250985,
            "total": 13196
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 59.1291,
          "medianPerformance": 59.1291,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 871.09683778125,
          "spec": "Arcane",
          "allStars": {
            "points": 64.65,
            "rank": 6514,
            "rankPercent": 50.252062328139324,
            "total": 13092
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 81.1412,
          "medianPerformance": 81.1412,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 1150.6129266302,
          "spec": "Arcane",
          "allStars": {
            "points": 91.67,
            "rank": 2827,
            "rankPercent": 76.77705645492645,
            "total": 12169
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 56.3849,
          "medianPerformance": 56.3849,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1132.6874124505,
          "spec": "Arcane",
          "allStars": {
            "points": 64.77,
            "rank": 5807,
            "rankPercent": 45.4630847266579,
            "total": 10646
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 9.23307,
          "medianPerformance": 9.23307,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 702.36421688044,
          "spec": "Arcane",
          "allStars": {
            "points": 34.74,
            "rank": 11400,
            "rankPercent": -13.91026281602878,
            "total": 10007
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 72.5223,
          "medianPerformance": 72.5223,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 839.62827733388,
          "spec": "Arcane",
          "allStars": {
            "points": 0,
            "rank": 2521,
            "rankPercent": 63.9948564080583,
            "total": 6999
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
      "bestPerformanceAverage": 58.914134000000004,
      "medianPerformanceAverage": 58.914134000000004,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 59.4711,
          "medianPerformance": 59.4711,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1117.4879843887,
          "spec": "Destruction",
          "allStars": {
            "points": 67.25,
            "rank": 7307,
            "rankPercent": 50.917030567685586,
            "total": 14885
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 55.7531,
          "medianPerformance": 55.7531,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 873.35249428644,
          "spec": "Destruction",
          "allStars": {
            "points": 62.24,
            "rank": 8048,
            "rankPercent": 46.53156146179402,
            "total": 15050
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 70.3517,
          "medianPerformance": 70.3517,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 942.7582454125,
          "spec": "Destruction",
          "allStars": {
            "points": 79.07,
            "rank": 4868,
            "rankPercent": 63.59216038300419,
            "total": 13368
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 85.9326,
          "medianPerformance": 85.9326,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 1475.2451386483,
          "spec": "Destruction",
          "allStars": {
            "points": 97.91,
            "rank": 2144,
            "rankPercent": 82.97855440826052,
            "total": 12590
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 45.7696,
          "medianPerformance": 45.7696,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1144.6005454318,
          "spec": "Destruction",
          "allStars": {
            "points": 60.94,
            "rank": 8081,
            "rankPercent": 32.801064537591486,
            "total": 12024
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 95.567,
          "medianPerformance": 95.567,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 1053.1939144071,
          "spec": "Destruction",
          "allStars": {
            "points": 0,
            "rank": 486,
            "rankPercent": 94.44889550188852,
            "total": 8737
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
      "bestPerformanceAverage": 63.455619999999996,
      "medianPerformanceAverage": 63.455619999999996,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 59.60934685927204,
          "medianPerformance": 59.60934685927204,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 889.80570244649,
          "spec": "Balance",
          "allStars": {
            "points": 68.46,
            "rank": 2123,
            "rankPercent": 51.28558310376492,
            "total": 4356
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 45.224113890995945,
          "medianPerformance": 45.224113890995945,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 597.94411131433,
          "spec": "Balance",
          "allStars": {
            "points": 54.85,
            "rank": 2894,
            "rankPercent": 33.64678899082569,
            "total": 4360
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 47.129285008740375,
          "medianPerformance": 47.129285008740375,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 688.09894494997,
          "spec": "Balance",
          "allStars": {
            "points": 55.9,
            "rank": 2632,
            "rankPercent": 35.020992837737715,
            "total": 4049
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 22.36919689920291,
          "medianPerformance": 22.36919689920291,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 650.2349716076,
          "spec": "Balance",
          "allStars": {
            "points": 43.97,
            "rank": 3329,
            "rankPercent": 3.981534910559723,
            "total": 3466
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 15.63969650430185,
          "medianPerformance": 15.63969650430185,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 679.70289393185,
          "spec": "Balance",
          "allStars": {
            "points": 49.14,
            "rank": 3586,
            "rankPercent": -6.222222222222222,
            "total": 3375
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 75.96350065016766,
          "medianPerformance": 75.96350065016766,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 659.51296391641,
          "spec": "Balance",
          "allStars": {
            "points": 0,
            "rank": 730,
            "rankPercent": 68.45521419299004,
            "total": 2311
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
      "bestPerformanceAverage": 37.99432783250262,
      "medianPerformanceAverage": 37.99432783250262,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "rankings": [
        {
          "encounterID": 100623,
          "encounterName": "Hydross the Unstable",
          "rankPercent": 84.94,
          "medianPerformance": 84.94,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 1243.3597937772,
          "spec": "Feral",
          "allStars": {
            "points": 96.16,
            "rank": 798,
            "rankPercent": 81.8781264211005,
            "total": 4398
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 77.2798,
          "medianPerformance": 77.2798,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 897.12288036091,
          "spec": "Feral",
          "allStars": {
            "points": 85.21,
            "rank": 1585,
            "rankPercent": 72.15679381262085,
            "total": 5689
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 43.8462,
          "medianPerformance": 43.8462,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 642.08032286345,
          "spec": "Feral",
          "allStars": {
            "points": 49.83,
            "rank": 2855,
            "rankPercent": 32.385690594645816,
            "total": 4221
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 38.7273,
          "medianPerformance": 38.7273,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 664.99600849513,
          "spec": "Feral",
          "allStars": {
            "points": 44.94,
            "rank": 2074,
            "rankPercent": 24.83683828861494,
            "total": 2758
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 61.3999,
          "medianPerformance": 61.3999,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 1202.2492512683,
          "spec": "Feral",
          "allStars": {
            "points": 71.5,
            "rank": 1750,
            "rankPercent": 51.64500967652751,
            "total": 3617
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 78.2089,
          "medianPerformance": 78.2089,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 755.65071117801,
          "spec": "Feral",
          "allStars": {
            "points": 0,
            "rank": 759,
            "rankPercent": 71.69529499626587,
            "total": 2678
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
      "bestPerformanceAverage": 61.23864,
      "medianPerformanceAverage": 61.23864,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 108.79,
            "rank": 586,
            "rankPercent": 93.53448275862068,
            "total": 9048
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
            "points": 106.47,
            "rank": 718,
            "rankPercent": 92.04923486360612,
            "total": 9018
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
            "rank": 9323,
            "rankPercent": -10.384843102427471,
            "total": 8445
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
            "points": 79.67,
            "rank": 2875,
            "rankPercent": 61.73612035681001,
            "total": 7511
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
            "points": 106.17,
            "rank": 788,
            "rankPercent": 89.09670268772513,
            "total": 7218
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
            "rank": 896,
            "rankPercent": 82.6281055900621,
            "total": 5152
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
            "points": 111.29,
            "rank": 383,
            "rankPercent": 94.06094527363184,
            "total": 6432
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
            "points": 113.79,
            "rank": 278,
            "rankPercent": 95.5919796308084,
            "total": 6284
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
            "points": 107.43,
            "rank": 399,
            "rankPercent": 93.47754834480499,
            "total": 6102
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
            "rank": 29,
            "rankPercent": 99.29131865350544,
            "total": 3951
          }
        }
      ],
      "bestPerformanceAverage": 76.904505,
      "medianPerformanceAverage": 76.904505,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "id": 29174,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_34.jpg",
          "itemLevel": 115,
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
          "id": 21694,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_05.jpg",
          "itemLevel": 75,
          "permanentEnchantID": null,
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
          "id": 27799,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 30543,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_20.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
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
          "id": 28511,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
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
          "id": 28661,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_36.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28259,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 115,
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
          "id": 28590,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_bandage_16.jpg",
          "itemLevel": 115,
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
            "points": 101.00293362180184,
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
            "points": 89.1226546558593,
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
            "points": 108.2091445426685,
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
            "points": 18.6162295711022,
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
          "rankPercent": 19.6571,
          "medianPerformance": 19.6571,
          "totalKills": 1,
          "fastestKill": 166034,
          "bestAmount": 475.49899418191,
          "spec": "Holy",
          "allStars": {
            "points": 39.9,
            "rank": 8143,
            "rankPercent": 4.593391141317085,
            "total": 8534
          }
        },
        {
          "encounterID": 100624,
          "encounterName": "The Lurker Below",
          "rankPercent": 13.9309,
          "medianPerformance": 13.9309,
          "totalKills": 1,
          "fastestKill": 302351,
          "bestAmount": 460.70957264901,
          "spec": "Holy",
          "allStars": {
            "points": 28.59,
            "rank": 8958,
            "rankPercent": -3.119963159106608,
            "total": 8686
          }
        },
        {
          "encounterID": 100625,
          "encounterName": "Leotheras the Blind",
          "rankPercent": 30.5012,
          "medianPerformance": 30.5012,
          "totalKills": 1,
          "fastestKill": 264632,
          "bestAmount": 602.81069560749,
          "spec": "Holy",
          "allStars": {
            "points": 35.65,
            "rank": 6804,
            "rankPercent": 16.16759088108441,
            "total": 8115
          }
        },
        {
          "encounterID": 100626,
          "encounterName": "Fathom-Lord Karathress",
          "rankPercent": 26.2583,
          "medianPerformance": 26.2583,
          "totalKills": 1,
          "fastestKill": 265564,
          "bestAmount": 792.78441355003,
          "spec": "Holy",
          "allStars": {
            "points": 41.74,
            "rank": 6366,
            "rankPercent": 9.831420881144638,
            "total": 7059
          }
        },
        {
          "encounterID": 100627,
          "encounterName": "Morogrim Tidewalker",
          "rankPercent": 57.5161,
          "medianPerformance": 57.5161,
          "totalKills": 1,
          "fastestKill": 343581,
          "bestAmount": 836.29478929277,
          "spec": "Holy",
          "allStars": {
            "points": 67.15,
            "rank": 3483,
            "rankPercent": 47.90544584081388,
            "total": 6684
          }
        },
        {
          "encounterID": 100628,
          "encounterName": "Lady Vashj",
          "rankPercent": 4.49684,
          "medianPerformance": 4.49684,
          "totalKills": 1,
          "fastestKill": 508874,
          "bestAmount": 403.00938935768,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": 5482,
            "rankPercent": -24.539877300613497,
            "total": 4401
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
      "bestPerformanceAverage": 29.572719999999997,
      "medianPerformanceAverage": 29.572719999999997,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
      "fetchedAt": "2026-05-19T11:37:46.399Z",
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
            "points": 108.11,
            "rank": 301,
            "rankPercent": 93.17871759890859,
            "total": 4398
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
            "points": 77.84,
            "rank": 2038,
            "rankPercent": 64.19405870979082,
            "total": 5689
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
            "points": 33.05,
            "rank": 3641,
            "rankPercent": 13.764510779436153,
            "total": 4221
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
            "rank": 3750,
            "rankPercent": 1.8072289156626506,
            "total": 3818
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
            "points": 110.44,
            "rank": 241,
            "rankPercent": 93.36466685098148,
            "total": 3617
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
            "rank": 749,
            "rankPercent": 72.06870799103808,
            "total": 2678
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
            "points": 98.96,
            "rank": 112,
            "rankPercent": 81.86274509803921,
            "total": 612
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
            "points": 113.63,
            "rank": 165,
            "rankPercent": 95.37507050197405,
            "total": 3546
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
            "points": 76.86,
            "rank": 1539,
            "rankPercent": 55.79189422247772,
            "total": 3479
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
            "rank": 1196,
            "rankPercent": 52.0850040096231,
            "total": 2494
          }
        }
      ],
      "bestPerformanceAverage": 63.3380375,
      "medianPerformanceAverage": 63.3380375,
      "totalKills": 0,
      "fetchedAt": "2026-05-19T11:37:46.399Z",
      "error": null,
      "partial": false
    }
  }
};
