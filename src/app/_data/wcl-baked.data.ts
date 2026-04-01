// AUTO-GENERATED — do not edit manually.
// Run `npm run bake:wcl` to regenerate.
// Generated: 2026-04-01T15:25:57.083Z

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
  "generatedAt": "2026-04-01T15:25:57.083Z",
  "defaultServerSlug": "spineshatter",
  "defaultServerRegion": "eu",
  "characters": {
    "akatoshi": {
      "characterName": "Akatoshi",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104995178,
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
          "permanentEnchantID": 2991,
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
          "id": 28262,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_plate07.jpg",
          "itemLevel": 115,
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
          "id": 23538,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_06.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 1891,
          "temporaryEnchantID": null
        },
        {
          "id": 28518,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_31.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2613,
          "temporaryEnchantID": null
        },
        {
          "id": 29279,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 28510,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_31.jpg",
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
          "id": 28660,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_20.jpg",
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
          "id": 28825,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_30.jpg",
          "itemLevel": 125,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 94.2193,
          "medianPerformance": 90.6437,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 959.88727101926,
          "spec": "Protection",
          "allStars": {
            "points": 101.04,
            "rank": 454,
            "rankPercent": 93.72836771424616,
            "total": 7223
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 78.7139,
          "medianPerformance": 78.4713,
          "totalKills": 5,
          "fastestKill": 145352,
          "bestAmount": 494.98068991745,
          "spec": "Protection",
          "allStars": {
            "points": 85.21,
            "rank": 2463,
            "rankPercent": 76.81295912601243,
            "total": 10618
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.0208,
          "medianPerformance": 79.8844,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 425.7182107758,
          "spec": "Justicar",
          "allStars": {
            "points": 95.62,
            "rank": 1816,
            "rankPercent": 87.81142972265127,
            "total": 14891
          }
        }
      ],
      "bestPerformanceAverage": 87.65133333333334,
      "medianPerformanceAverage": 82.99980000000001,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "alarian": {
      "characterName": "Alarian",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876708,
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
          "id": 28419,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_30naxxramas.jpg",
          "itemLevel": 115,
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27525,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_12.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 929,
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
          "id": 28508,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 43.0713939717154,
          "medianPerformance": 16.737661634233163,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 65.786305632212,
          "spec": "Shadow",
          "allStars": {
            "points": 44.703855921883516,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 60.43743789710873,
          "medianPerformance": 8.81904617048847,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 129.45769954724,
          "spec": "Shadow",
          "allStars": {
            "points": 63.74207648341099,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 71.50913735517403,
          "medianPerformance": 54.437215255305794,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 141.27202185957,
          "spec": "Shadow",
          "allStars": {
            "points": 76.18266775452187,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 58.339323074666055,
      "medianPerformanceAverage": 26.664641020009142,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 27778,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2994,
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
          "id": 27795,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28185,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
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
          "id": 28174,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 115,
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
          "id": 29286,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
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
          "id": 28269,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_05.jpg",
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
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 83.4367,
          "medianPerformance": 80.9608,
          "totalKills": 5,
          "fastestKill": 31935,
          "bestAmount": 1619.1012995146,
          "spec": "Destruction",
          "allStars": {
            "points": 89.96,
            "rank": 5730,
            "rankPercent": 82.24061502216436,
            "total": 32259
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 63.6306,
          "medianPerformance": 35.5995,
          "totalKills": 5,
          "fastestKill": 152511,
          "bestAmount": 931.13776262909,
          "spec": "Destruction",
          "allStars": {
            "points": 48.74,
            "rank": 19438,
            "rankPercent": 40.3827868601049,
            "total": 32603
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 71.1278,
          "medianPerformance": 57.0572,
          "totalKills": 5,
          "fastestKill": 252930,
          "bestAmount": 1058.4904914403,
          "spec": "Affliction",
          "allStars": {
            "points": 74.12,
            "rank": 2287,
            "rankPercent": 65.70657065706571,
            "total": 6666
          }
        }
      ],
      "bestPerformanceAverage": 72.73169999999999,
      "medianPerformanceAverage": 57.8725,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "anvi": {
      "characterName": "Anvi",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 91348456,
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
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29075,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_40.jpg",
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
          "id": 31720,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_plate02.jpg",
          "itemLevel": 88,
          "permanentEnchantID": 928,
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
          "id": 30257,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3012,
          "temporaryEnchantID": null
        },
        {
          "id": 28318,
          "slot": 8,
          "quality": 3,
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
          "id": 27925,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_16.jpg",
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
          "id": 27892,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_08.jpg",
          "itemLevel": 112,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 74.9746,
          "medianPerformance": 74.9746,
          "totalKills": 1,
          "fastestKill": 237599,
          "bestAmount": 1277.135004777,
          "spec": "Retribution",
          "allStars": {
            "points": 80.98,
            "rank": 3073,
            "rankPercent": 74.55689912208051,
            "total": 12074
          }
        }
      ],
      "bestPerformanceAverage": 74.9746,
      "medianPerformanceAverage": 74.9746,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
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
          "id": 25689,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_leather_06.jpg",
          "itemLevel": 114,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 27911,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_19.jpg",
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
          "id": 29384,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_46.jpg",
          "itemLevel": 110,
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
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23836,
          "slot": 14,
          "quality": 3,
          "icon": "inv_gizmo_rocketlauncher.jpg",
          "itemLevel": 70,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 83.8102,
          "medianPerformance": 83.8102,
          "totalKills": 1,
          "fastestKill": 53993,
          "bestAmount": 724.85322171393,
          "spec": "Guardian",
          "allStars": {
            "points": 92.39,
            "rank": 1495,
            "rankPercent": 83.62560280578694,
            "total": 9124
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 73.7798,
          "medianPerformance": 73.7798,
          "totalKills": 1,
          "fastestKill": 171879,
          "bestAmount": 626.10906509812,
          "spec": "Guardian",
          "allStars": {
            "points": 80.75,
            "rank": 3340,
            "rankPercent": 72.04922149673531,
            "total": 11946
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 78.8715,
          "medianPerformance": 78.8715,
          "totalKills": 1,
          "fastestKill": 268799,
          "bestAmount": 715.75787112303,
          "spec": "Guardian",
          "allStars": {
            "points": 83.8,
            "rank": 1741,
            "rankPercent": 77.34669964848327,
            "total": 7681
          }
        }
      ],
      "bestPerformanceAverage": 78.8205,
      "medianPerformanceAverage": 78.8205,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "artlicht": {
      "characterName": "Artlicht",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105379028,
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
          "id": 30705,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_26.jpg",
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
          "id": 28403,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 28375,
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
          "id": 28176,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_01.jpg",
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
          "id": 29177,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_48naxxramas.jpg",
          "itemLevel": 105,
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
          "id": 28777,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28794,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_64.jpg",
          "itemLevel": 125,
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
          "id": 27484,
          "slot": 18,
          "quality": 3,
          "icon": "inv_misc_stonetablet_05.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 87.6223,
          "medianPerformance": 77.8612,
          "totalKills": 4,
          "fastestKill": 26349,
          "bestAmount": 1320.3916657179,
          "spec": "Retribution",
          "allStars": {
            "points": 88.19,
            "rank": 2272,
            "rankPercent": 81.59792561380763,
            "total": 12341
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 82.5285,
          "medianPerformance": 64.656,
          "totalKills": 4,
          "fastestKill": 123192,
          "bestAmount": 1103.8297941425,
          "spec": "Retribution",
          "allStars": {
            "points": 86.68,
            "rank": 3380,
            "rankPercent": 76.12182884601795,
            "total": 14151
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 82.925,
          "medianPerformance": 65.5031,
          "totalKills": 4,
          "fastestKill": 198723,
          "bestAmount": 1319.4098317271,
          "spec": "Retribution",
          "allStars": {
            "points": 84.18,
            "rank": 2713,
            "rankPercent": 77.53851250621169,
            "total": 12074
          }
        }
      ],
      "bestPerformanceAverage": 84.35860000000001,
      "medianPerformanceAverage": 69.3401,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "permanentEnchantID": 2983,
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
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
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
          "id": 30332,
          "slot": 9,
          "quality": 2,
          "icon": "inv_bracer_08.jpg",
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
          "id": 29283,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31077,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_39.jpg",
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
          "id": 29351,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_crossbow_16.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2723,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 89.7872,
          "medianPerformance": 89.7872,
          "totalKills": 3,
          "fastestKill": 26349,
          "bestAmount": 1754.9891325825,
          "spec": "BeastMastery",
          "allStars": {
            "points": 89.43,
            "rank": 5699,
            "rankPercent": 81.43127158965001,
            "total": 30686
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 34.8819,
          "medianPerformance": 33.2233,
          "totalKills": 3,
          "fastestKill": 145352,
          "bestAmount": 956.93901700699,
          "spec": "Survival",
          "allStars": {
            "points": 53.66,
            "rank": 5051,
            "rankPercent": 30.084452443583,
            "total": 7223
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 89.5424,
          "medianPerformance": 78.5374,
          "totalKills": 3,
          "fastestKill": 198723,
          "bestAmount": 1386.9557122225,
          "spec": "Survival",
          "allStars": {
            "points": 95.3,
            "rank": 985,
            "rankPercent": 86.15254714325921,
            "total": 7106
          }
        }
      ],
      "bestPerformanceAverage": 71.40383333333334,
      "medianPerformanceAverage": 67.18263333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28180,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
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
          "id": 27847,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_34.jpg",
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
          "id": 25819,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_07.jpg",
          "itemLevel": 103,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2718
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
          "id": 24547,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_24.jpg",
          "itemLevel": 123,
          "permanentEnchantID": 3012,
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
          "id": 29281,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
          "id": 27891,
          "slot": 14,
          "quality": 3,
          "icon": "inv_qirajidol_sage.jpg",
          "itemLevel": 112,
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
          "id": 29348,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_hand_10.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28316,
          "slot": 17,
          "quality": 3,
          "icon": "inv_shield_35.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1071,
          "temporaryEnchantID": null
        },
        {
          "id": 28258,
          "slot": 18,
          "quality": 3,
          "icon": "inv_misc_coin_10.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
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
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "blinkmate": {
      "characterName": "Blinkmate",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 107402610,
      "gear": [
        {
          "id": 28193,
          "slot": 1,
          "quality": 3,
          "icon": "inv_jewelry_ring_56.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
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
          "id": 35343,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_19.jpg",
          "itemLevel": 115,
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
          "id": 31297,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_25.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 1144,
          "temporaryEnchantID": null
        },
        {
          "id": 27843,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_10.jpg",
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
          "id": 27537,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2934,
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
          "id": 29355,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_halberd19.jpg",
          "itemLevel": 105,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 44.5307,
          "medianPerformance": 44.5307,
          "totalKills": 2,
          "fastestKill": 53993,
          "bestAmount": 562.99890726576,
          "spec": "Frost",
          "allStars": {
            "points": 46.17,
            "rank": 7706,
            "rankPercent": 42.51287025292845,
            "total": 13403
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 49.5244,
          "medianPerformance": 43.8043,
          "totalKills": 2,
          "fastestKill": 171879,
          "bestAmount": 928.36239447518,
          "spec": "Arcane",
          "allStars": {
            "points": 55.32,
            "rank": 14476,
            "rankPercent": 47.62456127654956,
            "total": 27637
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 69.2406,
          "medianPerformance": 56.0544,
          "totalKills": 2,
          "fastestKill": 268799,
          "bestAmount": 1112.4901274963,
          "spec": "Arcane",
          "allStars": {
            "points": 73.22,
            "rank": 8938,
            "rankPercent": 66.04225245079414,
            "total": 26318
          }
        }
      ],
      "bestPerformanceAverage": 54.431900000000006,
      "medianPerformanceAverage": 48.12980000000001,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 29023,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_54.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2983,
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
          "id": 29022,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_24.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 28176,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 27918,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 1593,
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
          "id": 27925,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_16.jpg",
          "itemLevel": 115,
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
          "id": 28041,
          "slot": 13,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
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
          "id": 28657,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_44.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1900,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28749,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_74.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1900,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 74.8431,
          "medianPerformance": 72.9719,
          "totalKills": 3,
          "fastestKill": 26349,
          "bestAmount": 1361.3799385176,
          "spec": "Arms",
          "allStars": {
            "points": 74.61,
            "rank": 2707,
            "rankPercent": 69.88984088127295,
            "total": 8987
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 62.5911,
          "medianPerformance": 60.6918,
          "totalKills": 3,
          "fastestKill": 123192,
          "bestAmount": 877.06395508834,
          "spec": "Arms",
          "allStars": {
            "points": 65.87,
            "rank": 4102,
            "rankPercent": 57.21886083872314,
            "total": 9586
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 65.9895,
          "medianPerformance": 61.8251,
          "totalKills": 3,
          "fastestKill": 198723,
          "bestAmount": 1096.9423249342,
          "spec": "Arms",
          "allStars": {
            "points": 71.95,
            "rank": 3110,
            "rankPercent": 65.26256983240224,
            "total": 8950
          }
        }
      ],
      "bestPerformanceAverage": 67.8079,
      "medianPerformanceAverage": 65.16293333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 29283,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 130,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 91.6475,
          "medianPerformance": 72.5001,
          "totalKills": 3,
          "fastestKill": 31935,
          "bestAmount": 1289.0275761974,
          "spec": "Enhancement",
          "allStars": {
            "points": 95.11,
            "rank": 2709,
            "rankPercent": 85.53959523682384,
            "total": 18727
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.2111,
          "medianPerformance": 72.926,
          "totalKills": 3,
          "fastestKill": 123192,
          "bestAmount": 1373.2060523411,
          "spec": "Enhancement",
          "allStars": {
            "points": 106.15,
            "rank": 1469,
            "rankPercent": 92.24224488717434,
            "total": 18923
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 86.9489,
          "medianPerformance": 79.2707,
          "totalKills": 3,
          "fastestKill": 226715,
          "bestAmount": 1385.3207771872,
          "spec": "Enhancement",
          "allStars": {
            "points": 90.69,
            "rank": 3490,
            "rankPercent": 80.94171628338887,
            "total": 18307
          }
        }
      ],
      "bestPerformanceAverage": 91.6025,
      "medianPerformanceAverage": 74.89893333333335,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "cambelish": {
      "characterName": "Cambelish",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": "Character not found on spineshatter-eu",
      "partial": false
    },
    "cambels": {
      "characterName": "Cambels",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105376760,
      "gear": [
        {
          "id": 32089,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_30.jpg",
          "itemLevel": 110,
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
          "id": 27994,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_36.jpg",
          "itemLevel": 112,
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
          "id": 27462,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
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
          "id": 28793,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 125,
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
          "id": 29155,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_01.jpg",
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
          "id": 28320,
          "slot": 18,
          "quality": 4,
          "icon": "inv_wand_09.jpg",
          "itemLevel": 123,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 80.7947,
          "medianPerformance": 80.3922,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 1518.0522937216,
          "spec": "Arcane",
          "allStars": {
            "points": 84.07,
            "rank": 5867,
            "rankPercent": 76.64251015369913,
            "total": 25114
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.1499,
          "medianPerformance": 71.895,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1406.5199038899,
          "spec": "Arcane",
          "allStars": {
            "points": 104.61,
            "rank": 1971,
            "rankPercent": 92.87187466078083,
            "total": 27637
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 95.2576,
          "medianPerformance": 91.5527,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1463.6755685049,
          "spec": "Arcane",
          "allStars": {
            "points": 98.06,
            "rank": 3002,
            "rankPercent": 88.59715783874155,
            "total": 26318
          }
        }
      ],
      "bestPerformanceAverage": 91.73406666666666,
      "medianPerformanceAverage": 81.27996666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 29098,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_81.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2999,
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
          "id": 28422,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_08.jpg",
          "itemLevel": 123,
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
          "id": 29097,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_44.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2564,
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
          "id": 23836,
          "slot": 14,
          "quality": 3,
          "icon": "inv_gizmo_rocketlauncher.jpg",
          "itemLevel": 70,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 96.655,
          "medianPerformance": 87.8615,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 934.19105089377,
          "spec": "Guardian",
          "allStars": {
            "points": 106.82,
            "rank": 412,
            "rankPercent": 95.49539675580886,
            "total": 9124
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.6804,
          "medianPerformance": 91.1549,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 820.23183323592,
          "spec": "Guardian",
          "allStars": {
            "points": 106.57,
            "rank": 585,
            "rankPercent": 95.11133433785368,
            "total": 11946
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.5486,
          "medianPerformance": 82.3803,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 960.88022020602,
          "spec": "Guardian",
          "allStars": {
            "points": 105.05,
            "rank": 282,
            "rankPercent": 96.34162218461138,
            "total": 7681
          }
        }
      ],
      "bestPerformanceAverage": 97.29466666666667,
      "medianPerformanceAverage": 87.13223333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "chd": {
      "characterName": "Chd",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 94979341,
      "gear": [
        {
          "id": 18870,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_18.jpg",
          "itemLevel": 62,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 18723,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_01.jpg",
          "itemLevel": 62,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 16844,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_29.jpg",
          "itemLevel": 66,
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
          "id": 13346,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_08.jpg",
          "itemLevel": 63,
          "permanentEnchantID": 1891,
          "temporaryEnchantID": null
        },
        {
          "id": 16838,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_14.jpg",
          "itemLevel": 66,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 18682,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_02.jpg",
          "itemLevel": 61,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 16837,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 66,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 16840,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_16.jpg",
          "itemLevel": 66,
          "permanentEnchantID": 66,
          "temporaryEnchantID": null
        },
        {
          "id": 16948,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_11.jpg",
          "itemLevel": 76,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 16058,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_19.jpg",
          "itemLevel": 63,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 13178,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 18471,
          "slot": 13,
          "quality": 3,
          "icon": "inv_jewelry_talisman_10.jpg",
          "itemLevel": 62,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 12930,
          "slot": 14,
          "quality": 3,
          "icon": "inv_misc_root_02.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 19430,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 75,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 22713,
          "slot": 16,
          "quality": 3,
          "icon": "inv_waepon_bow_zulgrub_d_01.jpg",
          "itemLevel": 68,
          "permanentEnchantID": null,
          "temporaryEnchantID": 29
        },
        {
          "id": 19312,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_flower_04.jpg",
          "itemLevel": 65,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 18,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
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
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "cherepaha": {
      "characterName": "Cherepaha",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": "Character not found on spineshatter-eu",
      "partial": false
    },
    "chortenya": {
      "characterName": "Chortenya",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106035284,
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
          "id": 27778,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_18.jpg",
          "itemLevel": 115,
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
          "permanentEnchantID": null,
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
          "id": 27889,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2935,
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
          "id": 28766,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 125,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.5012,
          "medianPerformance": 85.7164,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 2648.7912254735,
          "spec": "Destruction",
          "allStars": {
            "points": 111.76,
            "rank": 297,
            "rankPercent": 99.08242660962831,
            "total": 32259
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 84.8605,
          "medianPerformance": 82.0403,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1097.1248132996,
          "spec": "Affliction",
          "allStars": {
            "points": 85.56,
            "rank": 1726,
            "rankPercent": 74.33035714285714,
            "total": 6720
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.3373,
          "medianPerformance": 73.4548,
          "totalKills": 6,
          "fastestKill": 198723,
          "bestAmount": 1618.5745988134,
          "spec": "Destruction",
          "allStars": {
            "points": 99.49,
            "rank": 3430,
            "rankPercent": 89.24471488614265,
            "total": 31882
          }
        }
      ],
      "bestPerformanceAverage": 92.23299999999999,
      "medianPerformanceAverage": 80.40383333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 27778,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2981,
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
          "id": 28070,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 91,
          "permanentEnchantID": 2841,
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
          "id": 27784,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 112,
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
          "id": 28785,
          "slot": 14,
          "quality": 4,
          "icon": "inv_trinket_naxxramas06.jpg",
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 94.0576,
          "medianPerformance": 85.9451,
          "totalKills": 4,
          "fastestKill": 26349,
          "bestAmount": 1890.6979392007,
          "spec": "Elemental",
          "allStars": {
            "points": 102.52,
            "rank": 1200,
            "rankPercent": 91.56821378340366,
            "total": 14220
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.6223,
          "medianPerformance": 85.9915,
          "totalKills": 4,
          "fastestKill": 123192,
          "bestAmount": 1220.9802584583,
          "spec": "Elemental",
          "allStars": {
            "points": 108.61,
            "rank": 757,
            "rankPercent": 94.74598651747863,
            "total": 14389
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 85.2238,
          "medianPerformance": 50.7473,
          "totalKills": 4,
          "fastestKill": 198723,
          "bestAmount": 1185.0817469543,
          "spec": "Elemental",
          "allStars": {
            "points": 89.71,
            "rank": 2647,
            "rankPercent": 80.9448365259974,
            "total": 13886
          }
        }
      ],
      "bestPerformanceAverage": 92.30123333333331,
      "medianPerformanceAverage": 74.22796666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28656,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
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
          "id": 29248,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 110,
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
          "id": 27903,
          "slot": 16,
          "quality": 3,
          "icon": "inv_spear_08.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 97.2298,
          "medianPerformance": 95.4601,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 2647.9724440269,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.09,
            "rank": 920,
            "rankPercent": 97.00514892784983,
            "total": 30686
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 95.9884,
          "medianPerformance": 79.9116,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1793.0466264043,
          "spec": "BeastMastery",
          "allStars": {
            "points": 107.22,
            "rank": 2003,
            "rankPercent": 93.53463587921847,
            "total": 30965
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.7461,
          "medianPerformance": 89.9986,
          "totalKills": 4,
          "fastestKill": 198723,
          "bestAmount": 1855.1935750492,
          "spec": "BeastMastery",
          "allStars": {
            "points": 102.81,
            "rank": 2233,
            "rankPercent": 92.47369840841651,
            "total": 29656
          }
        }
      ],
      "bestPerformanceAverage": 95.32143333333333,
      "medianPerformanceAverage": 88.45676666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28171,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_08.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2647,
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
          "id": 27878,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_21.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 44.1996,
          "medianPerformance": 27.7802,
          "totalKills": 2,
          "fastestKill": 53993,
          "bestAmount": 762.8396273591,
          "spec": "Enhancement",
          "allStars": {
            "points": 48.13,
            "rank": 10766,
            "rankPercent": 42.516153147861374,
            "total": 18727
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 67.057,
          "medianPerformance": 53.0806,
          "totalKills": 2,
          "fastestKill": 171879,
          "bestAmount": 1068.0711430716,
          "spec": "Enhancement",
          "allStars": {
            "points": 75.98,
            "rank": 6588,
            "rankPercent": 65.19050890450774,
            "total": 18923
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 47.9466,
          "medianPerformance": 37.4767,
          "totalKills": 2,
          "fastestKill": 268799,
          "bestAmount": 1070.7108285373,
          "spec": "Enhancement",
          "allStars": {
            "points": 53.98,
            "rank": 9798,
            "rankPercent": 46.48495111159666,
            "total": 18307
          }
        }
      ],
      "bestPerformanceAverage": 53.06773333333333,
      "medianPerformanceAverage": 39.44583333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "dullo": {
      "characterName": "Dullo",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": "Character not found on spineshatter-eu",
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
          "id": 27465,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_15.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.4461,
          "medianPerformance": 98.4461,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 1899.9582526851,
          "spec": "Affliction",
          "allStars": {
            "points": 109.38,
            "rank": 199,
            "rankPercent": 97.06405693950178,
            "total": 6744
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.7114,
          "medianPerformance": 90.9178,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1746.9884408078,
          "spec": "Destruction",
          "allStars": {
            "points": 113.89,
            "rank": 439,
            "rankPercent": 98.65656534674723,
            "total": 32603
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.5803,
          "medianPerformance": 97.5803,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1578.4836179003,
          "spec": "Affliction",
          "allStars": {
            "points": 108.39,
            "rank": 280,
            "rankPercent": 95.81458145814581,
            "total": 6666
          }
        }
      ],
      "bestPerformanceAverage": 98.57926666666667,
      "medianPerformanceAverage": 95.64806666666668,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 30377,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_11.jpg",
          "itemLevel": 109,
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
          "id": 29090,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_44.jpg",
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
          "id": 27946,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 60.1175,
          "medianPerformance": 46.4378,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 752.07468879668,
          "spec": "Balance",
          "allStars": {
            "points": 51.73,
            "rank": 5084,
            "rankPercent": 45.94278421780283,
            "total": 9403
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 82.3539,
          "medianPerformance": 54.5462,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 908.13526852393,
          "spec": "Balance",
          "allStars": {
            "points": 84.2,
            "rank": 2355,
            "rankPercent": 73.80952380952381,
            "total": 8988
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 61.7104,
          "medianPerformance": 39.3287,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 756.6411537668,
          "spec": "Balance",
          "allStars": {
            "points": 64.02,
            "rank": 3694,
            "rankPercent": 56.48639095086603,
            "total": 8487
          }
        }
      ],
      "bestPerformanceAverage": 68.0606,
      "medianPerformanceAverage": 46.770900000000005,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 29334,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27775,
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
          "id": 28230,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_39.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27542,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_30.jpg",
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
          "id": 27525,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_12.jpg",
          "itemLevel": 112,
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
          "id": 27536,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_27.jpg",
          "itemLevel": 115,
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
          "id": 27780,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_31.jpg",
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29353,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_54.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2678
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 82.7722,
          "medianPerformance": 82.7722,
          "totalKills": 1,
          "fastestKill": 53993,
          "bestAmount": 1014.242587002,
          "spec": "Holy",
          "allStars": {
            "points": 89.24,
            "rank": 3605,
            "rankPercent": 81.90127052679155,
            "total": 19913
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 62.3804,
          "medianPerformance": 62.3804,
          "totalKills": 1,
          "fastestKill": 171879,
          "bestAmount": 680.48452690556,
          "spec": "Holy",
          "allStars": {
            "points": 67.08,
            "rank": 7830,
            "rankPercent": 60.88042772198071,
            "total": 20013
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 62.0164,
          "medianPerformance": 62.0164,
          "totalKills": 1,
          "fastestKill": 268799,
          "bestAmount": 659.46301883564,
          "spec": "Holy",
          "allStars": {
            "points": 67.13,
            "rank": 7614,
            "rankPercent": 60.47042940962667,
            "total": 19259
          }
        }
      ],
      "bestPerformanceAverage": 69.05633333333334,
      "medianPerformanceAverage": 69.05633333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 22267,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_62.jpg",
          "itemLevel": 63,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 12023,
          "slot": 2,
          "quality": 2,
          "icon": "inv_jewelry_necklace_03.jpg",
          "itemLevel": 45,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 21468,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 74,
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
          "id": 940,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_26.jpg",
          "itemLevel": 47,
          "permanentEnchantID": 1893,
          "temporaryEnchantID": null
        },
        {
          "id": 18740,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 61,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 14632,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_08.jpg",
          "itemLevel": 61,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 22311,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 61,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 16703,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 57,
          "permanentEnchantID": 1883,
          "temporaryEnchantID": null
        },
        {
          "id": 16684,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 59,
          "permanentEnchantID": 930,
          "temporaryEnchantID": null
        },
        {
          "id": 11988,
          "slot": 11,
          "quality": 2,
          "icon": "inv_jewelry_ring_12.jpg",
          "itemLevel": 47,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 11988,
          "slot": 12,
          "quality": 2,
          "icon": "inv_jewelry_ring_12.jpg",
          "itemLevel": 47,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 13,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 0,
          "slot": 14,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 13376,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 59,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 22394,
          "slot": 16,
          "quality": 3,
          "icon": "inv_staff_29.jpg",
          "itemLevel": 62,
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
          "id": 5216,
          "slot": 18,
          "quality": 2,
          "icon": "inv_wand_06.jpg",
          "itemLevel": 45,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
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
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28348,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 115,
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
          "id": 28612,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
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
          "id": 28230,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_39.jpg",
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
          "id": 28742,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 27919,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_02.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28194,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_12.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 369,
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
          "id": 29289,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
          "id": 27946,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29175,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_04.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": null
        },
        {
          "id": 28754,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_31.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2654,
          "temporaryEnchantID": null
        },
        {
          "id": 27544,
          "slot": 18,
          "quality": 3,
          "icon": "spell_nature_protectionformnature.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.82881064604565,
          "medianPerformance": 90.14218529842952,
          "totalKills": 3,
          "fastestKill": 26349,
          "bestAmount": 573.60810656951,
          "spec": "Restoration",
          "allStars": {
            "points": 111.32075151478581,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 75.11508085215226,
          "medianPerformance": 40,
          "totalKills": 3,
          "fastestKill": 145355,
          "bestAmount": 21.806955714013,
          "spec": "Restoration",
          "allStars": {
            "points": 75.88678776250806,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.05399458275605,
          "medianPerformance": 90.04107045808254,
          "totalKills": 3,
          "fastestKill": 198723,
          "bestAmount": 118.67214757492,
          "spec": "Restoration",
          "allStars": {
            "points": 94.12083896634151,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 88.33262869365132,
      "medianPerformanceAverage": 73.39441858550403,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 16900,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_09.jpg",
          "itemLevel": 76,
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
          "id": 24397,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_31.jpg",
          "itemLevel": 88,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 17755,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_24.jpg",
          "itemLevel": 50,
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
          "id": 27468,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_13.jpg",
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
          "id": 24045,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_26.jpg",
          "itemLevel": 85,
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
          "id": 27519,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_06.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31289,
          "slot": 16,
          "quality": 3,
          "icon": "inv_staff_47.jpg",
          "itemLevel": 109,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
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
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28193,
          "slot": 1,
          "quality": 3,
          "icon": "inv_jewelry_ring_56.jpg",
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
          "id": 27796,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2981,
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
          "id": 31461,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28185,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28179,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_fabric_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27462,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31149,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_15.jpg",
          "itemLevel": 91,
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
          "id": 28187,
          "slot": 17,
          "quality": 3,
          "icon": "inv_offhand_outlandraid_03blue.jpg",
          "itemLevel": 112,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 96.9542,
          "medianPerformance": 96.9542,
          "totalKills": 1,
          "fastestKill": 31935,
          "bestAmount": 1831.8772506654,
          "spec": "Affliction",
          "allStars": {
            "points": 107.99,
            "rank": 263,
            "rankPercent": 96.11506524317912,
            "total": 6744
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 70.1276,
          "medianPerformance": 70.1276,
          "totalKills": 1,
          "fastestKill": 152511,
          "bestAmount": 1051.0258276452,
          "spec": "Affliction",
          "allStars": {
            "points": 78.48,
            "rank": 2170,
            "rankPercent": 67.72321428571429,
            "total": 6720
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.7733,
          "medianPerformance": 90.7733,
          "totalKills": 1,
          "fastestKill": 273434,
          "bestAmount": 1377.769406877,
          "spec": "Affliction",
          "allStars": {
            "points": 100.41,
            "rank": 705,
            "rankPercent": 89.43894389438944,
            "total": 6666
          }
        }
      ],
      "bestPerformanceAverage": 85.9517,
      "medianPerformanceAverage": 85.9517,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 35393,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_09.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3001,
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
          "id": 29781,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_leather_08.jpg",
          "itemLevel": 106,
          "permanentEnchantID": null,
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
          "id": 27800,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_14.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
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
          "id": 28174,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 29032,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_25.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 25713,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_35.jpg",
          "itemLevel": 88,
          "permanentEnchantID": 2928,
          "temporaryEnchantID": null
        },
        {
          "id": 29168,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_22.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2928,
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
          "id": 27946,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2662,
          "temporaryEnchantID": null
        },
        {
          "id": 31304,
          "slot": 16,
          "quality": 3,
          "icon": "inv_mace_34.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31292,
          "slot": 17,
          "quality": 3,
          "icon": "inv_shield_35.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 60,
          "medianPerformance": 60,
          "totalKills": 1,
          "fastestKill": 53993,
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
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 40,
          "medianPerformance": 40,
          "totalKills": 1,
          "fastestKill": 171879,
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
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 37.23749227532949,
          "medianPerformance": 37.23749227532949,
          "totalKills": 1,
          "fastestKill": 268799,
          "bestAmount": 4.2448074583611,
          "spec": "Restoration",
          "allStars": {
            "points": 37.38296003439687,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 45.74583075844316,
      "medianPerformanceAverage": 45.74583075844316,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "greenbeam": {
      "characterName": "Greenbeam",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876710,
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
          "id": 28609,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_17.jpg",
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
          "permanentEnchantID": 2979,
          "temporaryEnchantID": null
        },
        {
          "id": 6134,
          "slot": 4,
          "quality": 2,
          "icon": "inv_misc_cape_13.jpg",
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
          "permanentEnchantID": 3150,
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
          "id": 27875,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_cloth_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2745,
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
          "permanentEnchantID": 2617,
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
          "id": 28790,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_70.jpg",
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
          "id": 28771,
          "slot": 16,
          "quality": 4,
          "icon": "inv_mace_46.jpg",
          "itemLevel": 125,
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
          "id": 27544,
          "slot": 18,
          "quality": 3,
          "icon": "spell_nature_protectionformnature.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.54321246971311,
          "medianPerformance": 97.115590884423,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 404.10208235478,
          "spec": "Restoration",
          "allStars": {
            "points": 107.63918807077124,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 94.96412431067354,
          "medianPerformance": 50,
          "totalKills": 5,
          "fastestKill": 123214,
          "bestAmount": 81.873070513346,
          "spec": "Restoration",
          "allStars": {
            "points": 97.86145739630902,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.02484566148118,
          "medianPerformance": 48.57781856717558,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 131.81914909787,
          "spec": "Restoration",
          "allStars": {
            "points": 102.54223223543903,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 97.5107274806226,
      "medianPerformanceAverage": 65.2311364838662,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "hanzo": {
      "characterName": "Hanzo",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 91345969,
      "gear": [],
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 16.7174,
          "medianPerformance": 16.7174,
          "totalKills": 1,
          "fastestKill": 453620,
          "bestAmount": 696.54997575063,
          "spec": "Fury",
          "allStars": {
            "points": 20.07,
            "rank": 16366,
            "rankPercent": 16.180086047940996,
            "total": 19524
          }
        }
      ],
      "bestPerformanceAverage": 16.7174,
      "medianPerformanceAverage": 16.7174,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": true
    },
    "hellpapa": {
      "characterName": "Hellpapa",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 93786580,
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
          "id": 27994,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_36.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2981,
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
          "permanentEnchantID": 369,
          "temporaryEnchantID": null
        },
        {
          "id": 27465,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_15.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.487,
          "medianPerformance": 93.9424,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 2643.4020266424,
          "spec": "Destruction",
          "allStars": {
            "points": 111.7,
            "rank": 307,
            "rankPercent": 99.05142750860225,
            "total": 32259
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.3387,
          "medianPerformance": 90.2159,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1460.5006818625,
          "spec": "Destruction",
          "allStars": {
            "points": 103.35,
            "rank": 3057,
            "rankPercent": 90.6266294512775,
            "total": 32603
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.0115,
          "medianPerformance": 95.6402,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1873.1686622732,
          "spec": "Destruction",
          "allStars": {
            "points": 108.18,
            "rank": 1177,
            "rankPercent": 96.31139828116179,
            "total": 31882
          }
        }
      ],
      "bestPerformanceAverage": 97.6124,
      "medianPerformanceAverage": 93.26616666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28183,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_62.jpg",
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
          "id": 29320,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_38.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29284,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 115,
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
          "id": 31140,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 88,
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
          "id": 25640,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 103,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 40.2216,
          "medianPerformance": 40.2216,
          "totalKills": 1,
          "fastestKill": 456313,
          "bestAmount": 967.78527019831,
          "spec": "Destruction",
          "allStars": {
            "points": 46.15,
            "rank": 19107,
            "rankPercent": 40.07276833322878,
            "total": 31882
          }
        }
      ],
      "bestPerformanceAverage": 40.2216,
      "medianPerformanceAverage": 40.2216,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 32087,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_73.jpg",
          "itemLevel": 110,
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
          "id": 33173,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_16.jpg",
          "itemLevel": 115,
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
          "id": 23520,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_26.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.1978,
          "medianPerformance": 98.1978,
          "totalKills": 1,
          "fastestKill": 31935,
          "bestAmount": 3951.5578518866,
          "spec": "Fury",
          "allStars": {
            "points": 110.43,
            "rank": 374,
            "rankPercent": 98.1173026448617,
            "total": 19812
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 92.1248,
          "medianPerformance": 92.1248,
          "totalKills": 1,
          "fastestKill": 152511,
          "bestAmount": 1467.913789825,
          "spec": "Fury",
          "allStars": {
            "points": 103.15,
            "rank": 1779,
            "rankPercent": 91.41145783016134,
            "total": 20702
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 21.611,
          "medianPerformance": 21.611,
          "totalKills": 1,
          "fastestKill": 273434,
          "bestAmount": 767.278392592,
          "spec": "Fury",
          "allStars": {
            "points": 24.53,
            "rank": 15440,
            "rankPercent": 20.92296660520385,
            "total": 19524
          }
        }
      ],
      "bestPerformanceAverage": 70.64453333333333,
      "medianPerformanceAverage": 70.64453333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.0488,
          "medianPerformance": 94.4921,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 2519.0823047062,
          "spec": "BeastMastery",
          "allStars": {
            "points": 107.2,
            "rank": 1320,
            "rankPercent": 95.70162288991723,
            "total": 30686
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.1536,
          "medianPerformance": 93.6008,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1924.524319761,
          "spec": "BeastMastery",
          "allStars": {
            "points": 111.42,
            "rank": 1014,
            "rankPercent": 96.72856450831584,
            "total": 30965
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 95.0303,
          "medianPerformance": 92.1643,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1899.9612525978,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.2,
            "rank": 1896,
            "rankPercent": 93.61006204478015,
            "total": 29656
          }
        }
      ],
      "bestPerformanceAverage": 97.41090000000001,
      "medianPerformanceAverage": 93.41906666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28169,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_08.jpg",
          "itemLevel": 103,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 31692,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_35.jpg",
          "itemLevel": 103,
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
          "id": 4334,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_08.jpg",
          "itemLevel": 34,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29341,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_46.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 29328,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_10.jpg",
          "itemLevel": 97,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25711,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_14.jpg",
          "itemLevel": 88,
          "permanentEnchantID": 2841,
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
          "id": 28174,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29317,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_32.jpg",
          "itemLevel": 103,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 29320,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_38.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31791,
          "slot": 12,
          "quality": 2,
          "icon": "inv_jewelry_ring_58.jpg",
          "itemLevel": 108,
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
          "id": 25620,
          "slot": 14,
          "quality": 2,
          "icon": "inv_jewelry_necklace_28.jpg",
          "itemLevel": 96,
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
          "id": 25309,
          "slot": 16,
          "quality": 2,
          "icon": "inv_weapon_shortblade_24.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28187,
          "slot": 17,
          "quality": 3,
          "icon": "inv_offhand_outlandraid_03blue.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25640,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 40.4624,
          "medianPerformance": 40.4624,
          "totalKills": 1,
          "fastestKill": 53993,
          "bestAmount": 798.21458337192,
          "spec": "Affliction",
          "allStars": {
            "points": 44.16,
            "rank": 4112,
            "rankPercent": 39.04211150652432,
            "total": 6744
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 6.4003,
          "medianPerformance": 6.4003,
          "totalKills": 1,
          "fastestKill": 171879,
          "bestAmount": 510.58011740818,
          "spec": "Affliction",
          "allStars": {
            "points": 31.47,
            "rank": 6302,
            "rankPercent": 6.2351190476190474,
            "total": 6720
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 18.7111,
          "medianPerformance": 18.7111,
          "totalKills": 1,
          "fastestKill": 268799,
          "bestAmount": 634.16158542256,
          "spec": "Affliction",
          "allStars": {
            "points": 30.37,
            "rank": 5461,
            "rankPercent": 18.09180918091809,
            "total": 6666
          }
        }
      ],
      "bestPerformanceAverage": 21.857933333333335,
      "medianPerformanceAverage": 21.857933333333335,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28804,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_27.jpg",
          "itemLevel": 125,
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
          "id": 29054,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_55.jpg",
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
          "id": 29050,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_64.jpg",
          "itemLevel": 120,
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
          "id": 29053,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_25.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
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
          "id": 29183,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2617,
          "temporaryEnchantID": null
        },
        {
          "id": 27537,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 684,
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
          "id": 27780,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_31.jpg",
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
          "id": 28590,
          "slot": 14,
          "quality": 4,
          "icon": "inv_misc_bandage_16.jpg",
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30832,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_08.jpg",
          "itemLevel": 100,
          "permanentEnchantID": null,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 93.902,
          "medianPerformance": 81.8721,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 1235.8343770162,
          "spec": "Holy",
          "allStars": {
            "points": 101.16,
            "rank": 1553,
            "rankPercent": 92.20609651986139,
            "total": 19913
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 90.219,
          "medianPerformance": 87.5101,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 857.66965710826,
          "spec": "Holy",
          "allStars": {
            "points": 92.6,
            "rank": 3050,
            "rankPercent": 84.76490281317143,
            "total": 20013
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.6129,
          "medianPerformance": 96.4729,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1052.3140250499,
          "spec": "Holy",
          "allStars": {
            "points": 106.92,
            "rank": 722,
            "rankPercent": 96.25629575782752,
            "total": 19259
          }
        }
      ],
      "bestPerformanceAverage": 93.91129999999998,
      "medianPerformanceAverage": 88.61836666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 45,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_01.jpg",
          "itemLevel": 1,
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
          "id": 29517,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2647,
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
          "id": 27878,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_21.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 97.4241,
          "medianPerformance": 93.0039,
          "totalKills": 5,
          "fastestKill": 26373,
          "bestAmount": 1676.8285746786,
          "spec": "Enhancement",
          "allStars": {
            "points": 108.89,
            "rank": 669,
            "rankPercent": 96.4329577615208,
            "total": 18727
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.102,
          "medianPerformance": 97.7296,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1519.4411974804,
          "spec": "Enhancement",
          "allStars": {
            "points": 112.68,
            "rank": 515,
            "rankPercent": 97.28372879564552,
            "total": 18923
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 95.1618,
          "medianPerformance": 93.4132,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1604.0116141564,
          "spec": "Enhancement",
          "allStars": {
            "points": 104.69,
            "rank": 1212,
            "rankPercent": 93.38504397225105,
            "total": 18307
          }
        }
      ],
      "bestPerformanceAverage": 97.22930000000001,
      "medianPerformanceAverage": 94.71556666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 25687,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_03.jpg",
          "itemLevel": 112,
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
          "id": 28649,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_47.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2929,
          "temporaryEnchantID": null
        },
        {
          "id": 27453,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_38.jpg",
          "itemLevel": 115,
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
          "id": 28524,
          "slot": 17,
          "quality": 4,
          "icon": "inv_weapon_shortblade_38.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 29152,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_bow_08.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2723,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.2849,
          "medianPerformance": 96.9053,
          "totalKills": 3,
          "fastestKill": 26349,
          "bestAmount": 2742.6467797639,
          "spec": "BeastMastery",
          "allStars": {
            "points": 110.29,
            "rank": 685,
            "rankPercent": 97.77097047513524,
            "total": 30686
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 93.8008,
          "medianPerformance": 91.065,
          "totalKills": 3,
          "fastestKill": 145352,
          "bestAmount": 1711.7041639758,
          "spec": "BeastMastery",
          "allStars": {
            "points": 103.51,
            "rank": 2958,
            "rankPercent": 90.45050863878572,
            "total": 30965
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.9971,
          "medianPerformance": 95.2668,
          "totalKills": 3,
          "fastestKill": 198723,
          "bestAmount": 2113.7362056732,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.31,
            "rank": 735,
            "rankPercent": 97.5249527920151,
            "total": 29656
          }
        }
      ],
      "bestPerformanceAverage": 96.69426666666665,
      "medianPerformanceAverage": 94.41236666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 25685,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_22.jpg",
          "itemLevel": 106,
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
          "id": 29379,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_ahnqiraj_01.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 23206,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_token_argentdawn2.jpg",
          "itemLevel": 90,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.0791,
          "medianPerformance": 97.2269,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 3778.4356142548,
          "spec": "Fury",
          "allStars": {
            "points": 109.35,
            "rank": 482,
            "rankPercent": 97.57217847769029,
            "total": 19812
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.5947,
          "medianPerformance": 86.2349,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1792.3485291253,
          "spec": "Fury",
          "allStars": {
            "points": 112.88,
            "rank": 304,
            "rankPercent": 98.53637329726597,
            "total": 20702
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 99.2585,
          "medianPerformance": 95.624,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 2126.1319277507,
          "spec": "Fury",
          "allStars": {
            "points": 108.18,
            "rank": 396,
            "rankPercent": 97.97684900635116,
            "total": 19524
          }
        }
      ],
      "bestPerformanceAverage": 98.97743333333334,
      "medianPerformanceAverage": 93.02859999999998,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "permanentEnchantID": 2983,
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
          "id": 31293,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_31.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27874,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_03.jpg",
          "itemLevel": 115,
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
          "id": 28171,
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
          "id": 30860,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_34.jpg",
          "itemLevel": 109,
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
          "id": 27747,
          "slot": 17,
          "quality": 3,
          "icon": "inv_weapon_hand_11.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2955
        },
        {
          "id": 29351,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_crossbow_16.jpg",
          "itemLevel": 105,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 29.2945,
          "medianPerformance": 25.0052,
          "totalKills": 2,
          "fastestKill": 156223,
          "bestAmount": 839.85925616224,
          "spec": "BeastMastery",
          "allStars": {
            "points": 31.43,
            "rank": 22201,
            "rankPercent": 27.65430489474027,
            "total": 30686
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 42.909,
          "medianPerformance": 37.4955,
          "totalKills": 2,
          "fastestKill": 219913,
          "bestAmount": 1098.7708775743,
          "spec": "BeastMastery",
          "allStars": {
            "points": 50.55,
            "rank": 17896,
            "rankPercent": 42.20894558372356,
            "total": 30965
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 27.3672,
          "medianPerformance": 27.3672,
          "totalKills": 1,
          "fastestKill": 424636,
          "bestAmount": 972.54589813393,
          "spec": "BeastMastery",
          "allStars": {
            "points": 32.54,
            "rank": 21734,
            "rankPercent": 26.716347450768815,
            "total": 29656
          }
        }
      ],
      "bestPerformanceAverage": 33.19023333333333,
      "medianPerformanceAverage": 29.955966666666665,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "mapleleaf": {
      "characterName": "Mapleleaf",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105992606,
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
          "id": 30377,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_11.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27994,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_36.jpg",
          "itemLevel": 112,
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
          "id": 27799,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27795,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29343,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_leather_01.jpg",
          "itemLevel": 97,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28179,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_fabric_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28453,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27508,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 28227,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_63.jpg",
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
          "id": 25634,
          "slot": 14,
          "quality": 2,
          "icon": "inv_jewelry_talisman_06.jpg",
          "itemLevel": 105,
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
          "id": 27543,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_shortblade_37.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2629
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
          "id": 27518,
          "slot": 18,
          "quality": 3,
          "icon": "spell_arcane_arcane03.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 90,
          "medianPerformance": 90,
          "totalKills": 1,
          "fastestKill": 53993,
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
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 1,
          "fastestKill": 171879,
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
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 75,
          "medianPerformance": 75,
          "totalKills": 1,
          "fastestKill": 268799,
          "bestAmount": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 75,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 81.66666666666667,
      "medianPerformanceAverage": 81.66666666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 31272,
          "slot": 1,
          "quality": 3,
          "icon": "inv_misc_gem_bloodstone_02.jpg",
          "itemLevel": 103,
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
          "id": 24671,
          "slot": 5,
          "quality": 2,
          "icon": "inv_chest_cloth_39.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
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
          "id": 24674,
          "slot": 7,
          "quality": 2,
          "icon": "inv_pants_cloth_10.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24670,
          "slot": 8,
          "quality": 2,
          "icon": "inv_boots_chain_11.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24676,
          "slot": 9,
          "quality": 2,
          "icon": "inv_bracer_06.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24672,
          "slot": 10,
          "quality": 2,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 114,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31258,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_ahnqiraj_04.jpg",
          "itemLevel": 103,
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
          "id": 28040,
          "slot": 13,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 19120,
          "slot": 14,
          "quality": 2,
          "icon": "inv_misc_rune_07.jpg",
          "itemLevel": 51,
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
          "id": 31289,
          "slot": 16,
          "quality": 3,
          "icon": "inv_staff_47.jpg",
          "itemLevel": 109,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 0.561466,
          "medianPerformance": 0.561466,
          "totalKills": 1,
          "fastestKill": 53993,
          "bestAmount": 74.157761191266,
          "spec": "Balance",
          "allStars": {
            "points": 3.47,
            "rank": 9346,
            "rankPercent": 0.6168244177390194,
            "total": 9403
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 1.31174,
          "medianPerformance": 1.31174,
          "totalKills": 1,
          "fastestKill": 171879,
          "bestAmount": 173.73850208577,
          "spec": "Balance",
          "allStars": {
            "points": 11.97,
            "rank": 8892,
            "rankPercent": 1.0792167334223408,
            "total": 8988
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 0.624254,
          "medianPerformance": 0.624254,
          "totalKills": 1,
          "fastestKill": 268799,
          "bestAmount": 149.14862034457,
          "spec": "Balance",
          "allStars": {
            "points": 8.96,
            "rank": 8447,
            "rankPercent": 0.4830917874396135,
            "total": 8487
          }
        }
      ],
      "bestPerformanceAverage": 0.8324866666666666,
      "medianPerformanceAverage": 0.8324866666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28278,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_34.jpg",
          "itemLevel": 115,
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
          "id": 28612,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 115,
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
          "id": 28670,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 911,
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
          "id": 28227,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_63.jpg",
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
          "id": 25777,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 100,
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
          "id": 28386,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_17.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 91.9936,
          "medianPerformance": 91.9936,
          "totalKills": 3,
          "fastestKill": 33510,
          "bestAmount": 995.01641301104,
          "spec": "Frost",
          "allStars": {
            "points": 97.86,
            "rank": 1181,
            "rankPercent": 91.19600089532194,
            "total": 13403
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 47.2017,
          "medianPerformance": 35.3193,
          "totalKills": 3,
          "fastestKill": 225622,
          "bestAmount": 917.18111848288,
          "spec": "Arcane",
          "allStars": {
            "points": 53.77,
            "rank": 14880,
            "rankPercent": 46.16275283134928,
            "total": 27637
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 77.8926,
          "medianPerformance": 70.9975,
          "totalKills": 2,
          "fastestKill": 298549,
          "bestAmount": 1210.7962177063,
          "spec": "Arcane",
          "allStars": {
            "points": 82.07,
            "rank": 6776,
            "rankPercent": 74.25716239835853,
            "total": 26318
          }
        }
      ],
      "bestPerformanceAverage": 72.36263333333333,
      "medianPerformanceAverage": 66.10346666666668,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 27520,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_71.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29336,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_34.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24457,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_21.jpg",
          "itemLevel": 94,
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
          "id": 35412,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_plate05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2792,
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
          "id": 27839,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2792,
          "temporaryEnchantID": null
        },
        {
          "id": 29325,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 97,
          "permanentEnchantID": 2792,
          "temporaryEnchantID": null
        },
        {
          "id": 24941,
          "slot": 9,
          "quality": 2,
          "icon": "inv_bracer_09.jpg",
          "itemLevel": 87,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28070,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 91,
          "permanentEnchantID": 2792,
          "temporaryEnchantID": null
        },
        {
          "id": 25541,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 94,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27805,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_66.jpg",
          "itemLevel": 115,
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
          "id": 27891,
          "slot": 14,
          "quality": 3,
          "icon": "inv_qirajidol_sage.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28777,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_14.jpg",
          "itemLevel": 125,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24361,
          "slot": 16,
          "quality": 3,
          "icon": "inv_sword_05.jpg",
          "itemLevel": 91,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2678
        },
        {
          "id": 28166,
          "slot": 17,
          "quality": 3,
          "icon": "inv_shield_13.jpg",
          "itemLevel": 97,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 0.687151,
          "medianPerformance": 0.687151,
          "totalKills": 1,
          "fastestKill": 31935,
          "bestAmount": 57.554407390011,
          "spec": "Retribution",
          "allStars": {
            "points": 1.73,
            "rank": 12250,
            "rankPercent": 0.7454825378818573,
            "total": 12341
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 42.9623,
          "medianPerformance": 42.9623,
          "totalKills": 1,
          "fastestKill": 152511,
          "bestAmount": 712.61745054455,
          "spec": "Retribution",
          "allStars": {
            "points": 49.3,
            "rank": 8134,
            "rankPercent": 42.52702989188043,
            "total": 14151
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 44.7315,
          "medianPerformance": 44.7315,
          "totalKills": 1,
          "fastestKill": 273434,
          "bestAmount": 909.18832332482,
          "spec": "Retribution",
          "allStars": {
            "points": 48.6,
            "rank": 6755,
            "rankPercent": 44.061620009938714,
            "total": 12074
          }
        }
      ],
      "bestPerformanceAverage": 29.460317,
      "medianPerformanceAverage": 29.460317,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 32084,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_16.jpg",
          "itemLevel": 110,
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
          "id": 28666,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_35.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2979,
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
          "id": 28662,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate03.jpg",
          "itemLevel": 115,
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
          "permanentEnchantID": 2745,
          "temporaryEnchantID": null
        },
        {
          "id": 29251,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_03.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 28503,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
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
          "id": 28763,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_08.jpg",
          "itemLevel": 125,
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
          "permanentEnchantID": null,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 5,
          "fastestKill": 26349,
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
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 60,
          "medianPerformance": 50,
          "totalKills": 5,
          "fastestKill": 123214,
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
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 61.86403854411171,
          "medianPerformance": 30,
          "totalKills": 5,
          "fastestKill": 198730,
          "bestAmount": 1.3604097949505,
          "spec": "Holy",
          "allStars": {
            "points": 61.89804684164823,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 67.28801284803724,
      "medianPerformanceAverage": 53.333333333333336,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "pappit": {
      "characterName": "Pappit",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105987565,
      "gear": [],
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 86.4055,
          "medianPerformance": 61.9417,
          "totalKills": 4,
          "fastestKill": 45854,
          "bestAmount": 1178.7426268666,
          "spec": "Retribution",
          "allStars": {
            "points": 82.19,
            "rank": 2924,
            "rankPercent": 76.31472328012316,
            "total": 12341
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 79.8609,
          "medianPerformance": 47.3289,
          "totalKills": 4,
          "fastestKill": 157256,
          "bestAmount": 953.10194841532,
          "spec": "Retribution",
          "allStars": {
            "points": 72.71,
            "rank": 5151,
            "rankPercent": 63.60681223941771,
            "total": 14151
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.4121,
          "medianPerformance": 90.4121,
          "totalKills": 1,
          "fastestKill": 263156,
          "bestAmount": 1332.4187934153,
          "spec": "Retribution",
          "allStars": {
            "points": 85.22,
            "rank": 2595,
            "rankPercent": 78.51581911545469,
            "total": 12074
          }
        }
      ],
      "bestPerformanceAverage": 85.5595,
      "medianPerformanceAverage": 66.5609,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": true
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
          "id": 30860,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_34.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31077,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_39.jpg",
          "itemLevel": 109,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 93.8179,
          "medianPerformance": 67.2169,
          "totalKills": 2,
          "fastestKill": 31935,
          "bestAmount": 2345.6708940034,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.26,
            "rank": 1978,
            "rankPercent": 93.55732255751809,
            "total": 30686
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 91.7419,
          "medianPerformance": 56.6902,
          "totalKills": 2,
          "fastestKill": 152511,
          "bestAmount": 1731.7963950141,
          "spec": "BeastMastery",
          "allStars": {
            "points": 104.52,
            "rank": 2693,
            "rankPercent": 91.30631357984822,
            "total": 30965
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.7044,
          "medianPerformance": 72.9465,
          "totalKills": 2,
          "fastestKill": 273434,
          "bestAmount": 1853.7270419919,
          "spec": "BeastMastery",
          "allStars": {
            "points": 102.76,
            "rank": 2247,
            "rankPercent": 92.42649042352306,
            "total": 29656
          }
        }
      ],
      "bestPerformanceAverage": 92.75473333333333,
      "medianPerformanceAverage": 65.61786666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "puppit": {
      "characterName": "Puppit",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": "Character not found on spineshatter-eu",
      "partial": false
    },
    "renko": {
      "characterName": "Renko",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 104876719,
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
          "id": 0,
          "slot": 4,
          "quality": 1,
          "icon": "inv_axe_02.jpg",
          "itemLevel": 0,
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
          "id": 28741,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_13.jpg",
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
          "id": 27878,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_21.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.6343,
          "medianPerformance": 96.5317,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 3194.3686502177,
          "spec": "Combat",
          "allStars": {
            "points": 110.47,
            "rank": 173,
            "rankPercent": 99.10940817066225,
            "total": 19313
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.5866,
          "medianPerformance": 97.5198,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1636.4549507403,
          "spec": "Combat",
          "allStars": {
            "points": 115.73,
            "rank": 168,
            "rankPercent": 99.1461294610901,
            "total": 19558
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.6196,
          "medianPerformance": 88.2392,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1687.4594284507,
          "spec": "Combat",
          "allStars": {
            "points": 109.68,
            "rank": 408,
            "rankPercent": 97.84405127661829,
            "total": 18878
          }
        }
      ],
      "bestPerformanceAverage": 99.28016666666667,
      "medianPerformanceAverage": 94.0969,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 16478,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_05.jpg",
          "itemLevel": 74,
          "permanentEnchantID": 1503,
          "temporaryEnchantID": null
        },
        {
          "id": 18404,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_09.jpg",
          "itemLevel": 74,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 16480,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_20.jpg",
          "itemLevel": 74,
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
          "id": 16477,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate03.jpg",
          "itemLevel": 74,
          "permanentEnchantID": 1891,
          "temporaryEnchantID": null
        },
        {
          "id": 19137,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_29.jpg",
          "itemLevel": 78,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 16479,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_04.jpg",
          "itemLevel": 71,
          "permanentEnchantID": 1503,
          "temporaryEnchantID": null
        },
        {
          "id": 16483,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_09.jpg",
          "itemLevel": 71,
          "permanentEnchantID": 1887,
          "temporaryEnchantID": null
        },
        {
          "id": 19824,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_14.jpg",
          "itemLevel": 61,
          "permanentEnchantID": 1886,
          "temporaryEnchantID": null
        },
        {
          "id": 16484,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_29.jpg",
          "itemLevel": 71,
          "permanentEnchantID": 927,
          "temporaryEnchantID": null
        },
        {
          "id": 19384,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_41.jpg",
          "itemLevel": 83,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 17063,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_15.jpg",
          "itemLevel": 78,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 19406,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_bone_06.jpg",
          "itemLevel": 75,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 11815,
          "slot": 14,
          "quality": 3,
          "icon": "inv_jewelry_talisman_01.jpg",
          "itemLevel": 58,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 19398,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_18.jpg",
          "itemLevel": 75,
          "permanentEnchantID": 849,
          "temporaryEnchantID": null
        },
        {
          "id": 19019,
          "slot": 16,
          "quality": 5,
          "icon": "inv_sword_39.jpg",
          "itemLevel": 80,
          "permanentEnchantID": 1900,
          "temporaryEnchantID": 2506
        },
        {
          "id": 23456,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_05.jpg",
          "itemLevel": 78,
          "permanentEnchantID": 1900,
          "temporaryEnchantID": 2506
        },
        {
          "id": 23557,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_rifle_10.jpg",
          "itemLevel": 81,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
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
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28180,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27792,
          "slot": 2,
          "quality": 3,
          "icon": "ability_rogue_nervesofsteel.jpg",
          "itemLevel": 112,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28743,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_29.jpg",
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
          "id": 28203,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2661,
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
          "id": 27839,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 24064,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 85,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 28167,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27535,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
          "temporaryEnchantID": null
        },
        {
          "id": 25541,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 94,
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
          "id": 27529,
          "slot": 13,
          "quality": 3,
          "icon": "inv_qirajidol_rebirth.jpg",
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
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2662,
          "temporaryEnchantID": null
        },
        {
          "id": 27899,
          "slot": 16,
          "quality": 3,
          "icon": "inv_sword_draenei_04.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2678
        },
        {
          "id": 28316,
          "slot": 17,
          "quality": 3,
          "icon": "inv_shield_35.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1071,
          "temporaryEnchantID": null
        },
        {
          "id": 23201,
          "slot": 18,
          "quality": 3,
          "icon": "inv_relics_libramofhope.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 75,
          "medianPerformance": 75,
          "totalKills": 1,
          "fastestKill": 31969,
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
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 50,
          "medianPerformance": 50,
          "totalKills": 1,
          "fastestKill": 152538,
          "bestAmount": 0,
          "spec": "Holy",
          "allStars": {
            "points": 50,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 30,
          "medianPerformance": 30,
          "totalKills": 1,
          "fastestKill": 273452,
          "bestAmount": 0,
          "spec": "Holy",
          "allStars": {
            "points": 30,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 51.666666666666664,
      "medianPerformanceAverage": 51.666666666666664,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28413,
          "slot": 1,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
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
          "id": 21874,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_02.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2604,
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
          "id": 27875,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_cloth_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2745,
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
          "id": 28029,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_12.jpg",
          "itemLevel": 94,
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
          "id": 25713,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_35.jpg",
          "itemLevel": 88,
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
          "id": 18469,
          "slot": 13,
          "quality": 3,
          "icon": "inv_jewelry_talisman_10.jpg",
          "itemLevel": 62,
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
          "id": 25945,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_17.jpg",
          "itemLevel": 97,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 31304,
          "slot": 16,
          "quality": 3,
          "icon": "inv_mace_34.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2343,
          "temporaryEnchantID": 2629
        },
        {
          "id": 19312,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_flower_04.jpg",
          "itemLevel": 65,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
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
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 32090,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_30.jpg",
          "itemLevel": 110,
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
          "id": 27875,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_cloth_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2746,
          "temporaryEnchantID": null
        },
        {
          "id": 27525,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_12.jpg",
          "itemLevel": 112,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 91.5167,
          "medianPerformance": 85.6693,
          "totalKills": 4,
          "fastestKill": 34450,
          "bestAmount": 962.14324079047,
          "spec": "Discipline",
          "allStars": {
            "points": 97.93,
            "rank": 474,
            "rankPercent": 89.45373467112597,
            "total": 4485
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 90.2312,
          "medianPerformance": 80.0163,
          "totalKills": 4,
          "fastestKill": 123192,
          "bestAmount": 676.96636887687,
          "spec": "Discipline",
          "allStars": {
            "points": 91.6,
            "rank": 671,
            "rankPercent": 84.83819868748586,
            "total": 4419
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 94.9699,
          "medianPerformance": 77.5687,
          "totalKills": 4,
          "fastestKill": 226715,
          "bestAmount": 772.91582185946,
          "spec": "Discipline",
          "allStars": {
            "points": 103.95,
            "rank": 249,
            "rankPercent": 94.25925925925925,
            "total": 4320
          }
        }
      ],
      "bestPerformanceAverage": 92.23926666666667,
      "medianPerformanceAverage": 81.08476666666668,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 27874,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_03.jpg",
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
          "id": 28451,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_16.jpg",
          "itemLevel": 113,
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
          "id": 28504,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_crossbow_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2723,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 75.3409,
          "medianPerformance": 69.6913,
          "totalKills": 3,
          "fastestKill": 31935,
          "bestAmount": 1412.087051824,
          "spec": "Survival",
          "allStars": {
            "points": 76.48,
            "rank": 2339,
            "rankPercent": 67.35092864125122,
            "total": 7161
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 70.5611,
          "medianPerformance": 53.3489,
          "totalKills": 3,
          "fastestKill": 123192,
          "bestAmount": 1161.6014026885,
          "spec": "Survival",
          "allStars": {
            "points": 69.5,
            "rank": 2985,
            "rankPercent": 58.6875259587429,
            "total": 7223
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 72.6925,
          "medianPerformance": 52.5532,
          "totalKills": 3,
          "fastestKill": 226715,
          "bestAmount": 1221.2343746571,
          "spec": "Survival",
          "allStars": {
            "points": 78.73,
            "rank": 2084,
            "rankPercent": 70.68674359696031,
            "total": 7106
          }
        }
      ],
      "bestPerformanceAverage": 72.86483333333332,
      "medianPerformanceAverage": 58.53113333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    },
    "serjioo druid": {
      "characterName": "Serjioo Druid",
      "serverSlug": "spineshatter",
      "serverRegion": "eu",
      "wclId": null,
      "gear": [],
      "rankings": [],
      "bestPerformanceAverage": null,
      "medianPerformanceAverage": null,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": "Character not found on spineshatter-eu",
      "partial": false
    },
    "strikex": {
      "characterName": "Strikex",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 91410246,
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
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27776,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_24.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2983,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 8.94128,
          "medianPerformance": 5.57917,
          "totalKills": 2,
          "fastestKill": 53993,
          "bestAmount": 424.05497008872,
          "spec": "Combat",
          "allStars": {
            "points": 9.62,
            "rank": 17726,
            "rankPercent": 8.222440842955523,
            "total": 19313
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 75.3795,
          "medianPerformance": 73.8832,
          "totalKills": 2,
          "fastestKill": 171879,
          "bestAmount": 1056.7957691166,
          "spec": "Combat",
          "allStars": {
            "points": 84.28,
            "rank": 5164,
            "rankPercent": 73.60159525513856,
            "total": 19558
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.6831,
          "medianPerformance": 80.5016,
          "totalKills": 2,
          "fastestKill": 268799,
          "bestAmount": 1391.4077061299,
          "spec": "Combat",
          "allStars": {
            "points": 99.68,
            "rank": 1903,
            "rankPercent": 89.92478016739061,
            "total": 18878
          }
        }
      ],
      "bestPerformanceAverage": 58.33462666666666,
      "medianPerformanceAverage": 53.32132333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28968,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_52.jpg",
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
          "id": 28555,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 95,
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
          "id": 29273,
          "slot": 17,
          "quality": 4,
          "icon": "inv_misc_bag_10_green.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25640,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 103,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 86.3637,
          "medianPerformance": 66.5254,
          "totalKills": 4,
          "fastestKill": 34450,
          "bestAmount": 1606.0230029819,
          "spec": "Destruction",
          "allStars": {
            "points": 89.43,
            "rank": 5883,
            "rankPercent": 81.76632877646549,
            "total": 32259
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.4186,
          "medianPerformance": 85.8829,
          "totalKills": 4,
          "fastestKill": 123192,
          "bestAmount": 1570.1506591337,
          "spec": "Destruction",
          "allStars": {
            "points": 108.75,
            "rank": 1610,
            "rankPercent": 95.06487133085912,
            "total": 32603
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 94.221,
          "medianPerformance": 65.3088,
          "totalKills": 4,
          "fastestKill": 226715,
          "bestAmount": 1510.7047823646,
          "spec": "Destruction",
          "allStars": {
            "points": 93.66,
            "rank": 5070,
            "rankPercent": 84.10074650272881,
            "total": 31882
          }
        }
      ],
      "bestPerformanceAverage": 93.0011,
      "medianPerformanceAverage": 72.57236666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 31548,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_plate10.jpg",
          "itemLevel": 109,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25609,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_07.jpg",
          "itemLevel": 97,
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
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 25956,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_05.jpg",
          "itemLevel": 97,
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
          "id": 30365,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 109,
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
          "id": 28034,
          "slot": 13,
          "quality": 3,
          "icon": "inv_gizmo_khoriumpowercore.jpg",
          "itemLevel": 112,
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
          "id": 28529,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 31318,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_72.jpg",
          "itemLevel": 100,
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
          "id": 28504,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_crossbow_18.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 90.6858,
          "medianPerformance": 90.6858,
          "totalKills": 1,
          "fastestKill": 31935,
          "bestAmount": 2385.940191013,
          "spec": "Arms",
          "allStars": {
            "points": 97.99,
            "rank": 929,
            "rankPercent": 89.67397351730277,
            "total": 8987
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 67.6398,
          "medianPerformance": 67.6398,
          "totalKills": 1,
          "fastestKill": 152511,
          "bestAmount": 958.18006570018,
          "spec": "Arms",
          "allStars": {
            "points": 75.41,
            "rank": 3265,
            "rankPercent": 65.95034425203421,
            "total": 9586
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 7.04455,
          "medianPerformance": 7.04455,
          "totalKills": 1,
          "fastestKill": 273434,
          "bestAmount": 422.36883489252,
          "spec": "Arms",
          "allStars": {
            "points": 15.55,
            "rank": 8323,
            "rankPercent": 7.016759776536313,
            "total": 8950
          }
        }
      ],
      "bestPerformanceAverage": 55.12338333333333,
      "medianPerformanceAverage": 55.12338333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 31693,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_32.jpg",
          "itemLevel": 103,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27737,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_24.jpg",
          "itemLevel": 115,
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
          "id": 31297,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_25.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 2661,
          "temporaryEnchantID": null
        },
        {
          "id": 31513,
          "slot": 6,
          "quality": 2,
          "icon": "inv_belt_13.jpg",
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
          "permanentEnchantID": null,
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
          "id": 27493,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_19.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 29285,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
          "id": 28040,
          "slot": 14,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
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
          "temporaryEnchantID": null
        },
        {
          "id": 28781,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_draenei_a_01.jpg",
          "itemLevel": 125,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 46.9218,
          "medianPerformance": 46.9218,
          "totalKills": 1,
          "fastestKill": 31935,
          "bestAmount": 746.17191169563,
          "spec": "Balance",
          "allStars": {
            "points": 50.8,
            "rank": 5167,
            "rankPercent": 45.06008720621078,
            "total": 9403
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 50.0108,
          "medianPerformance": 50.0108,
          "totalKills": 1,
          "fastestKill": 152511,
          "bestAmount": 735.40924916891,
          "spec": "Balance",
          "allStars": {
            "points": 56.47,
            "rank": 4666,
            "rankPercent": 48.097463284379174,
            "total": 8988
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 52.4673,
          "medianPerformance": 52.4673,
          "totalKills": 1,
          "fastestKill": 273434,
          "bestAmount": 717.22243759006,
          "spec": "Balance",
          "allStars": {
            "points": 57.95,
            "rank": 4176,
            "rankPercent": 50.807116766819846,
            "total": 8487
          }
        }
      ],
      "bestPerformanceAverage": 49.79996666666667,
      "medianPerformanceAverage": 49.79996666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28182,
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
          "id": 32080,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_25.jpg",
          "itemLevel": 110,
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
          "id": 25689,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_leather_06.jpg",
          "itemLevel": 114,
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
          "id": 29384,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_46.jpg",
          "itemLevel": 110,
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
          "id": 29171,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_10.jpg",
          "itemLevel": 100,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 22.3861,
          "medianPerformance": 22.3861,
          "totalKills": 1,
          "fastestKill": 31935,
          "bestAmount": 336.77782996712,
          "spec": "Feral",
          "allStars": {
            "points": 23.96,
            "rank": 10882,
            "rankPercent": 21.487841835630277,
            "total": 13859
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 77.4703,
          "medianPerformance": 77.4703,
          "totalKills": 1,
          "fastestKill": 152511,
          "bestAmount": 1035.289257824,
          "spec": "Feral",
          "allStars": {
            "points": 86.27,
            "rank": 2429,
            "rankPercent": 76.45461598138091,
            "total": 10312
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 23.6578,
          "medianPerformance": 23.6578,
          "totalKills": 1,
          "fastestKill": 273434,
          "bestAmount": 487.00966229511,
          "spec": "Feral",
          "allStars": {
            "points": 26.12,
            "rank": 10746,
            "rankPercent": 22.808908045977013,
            "total": 13920
          }
        }
      ],
      "bestPerformanceAverage": 41.1714,
      "medianPerformanceAverage": 41.1714,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 30933,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_leather_05.jpg",
          "itemLevel": 109,
          "permanentEnchantID": 3150,
          "temporaryEnchantID": null
        },
        {
          "id": 31462,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_11.jpg",
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
          "id": 31077,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_39.jpg",
          "itemLevel": 109,
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
          "id": 27878,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_21.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 368,
          "temporaryEnchantID": null
        },
        {
          "id": 28657,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_44.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 93.1044,
          "medianPerformance": 81.8804,
          "totalKills": 6,
          "fastestKill": 26349,
          "bestAmount": 1449.2563018632,
          "spec": "Enhancement",
          "allStars": {
            "points": 102.18,
            "rank": 1608,
            "rankPercent": 91.41880707000587,
            "total": 18727
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 88.1772,
          "medianPerformance": 83.4241,
          "totalKills": 6,
          "fastestKill": 145352,
          "bestAmount": 1276.3997351011,
          "spec": "Enhancement",
          "allStars": {
            "points": 99.56,
            "rank": 2530,
            "rankPercent": 86.6353115256566,
            "total": 18923
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 80.2411,
          "medianPerformance": 76.8884,
          "totalKills": 6,
          "fastestKill": 198723,
          "bestAmount": 1360.701302691,
          "spec": "Enhancement",
          "allStars": {
            "points": 88.52,
            "rank": 3855,
            "rankPercent": 78.94794340962473,
            "total": 18307
          }
        }
      ],
      "bestPerformanceAverage": 87.17423333333333,
      "medianPerformanceAverage": 80.73096666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28804,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_27.jpg",
          "itemLevel": 125,
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
          "id": 27778,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2994,
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
          "id": 28232,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_29.jpg",
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
          "id": 28594,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2747,
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
          "id": 24250,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_10.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 369,
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
          "id": 30366,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_09.jpg",
          "itemLevel": 109,
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
          "id": 29813,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_19.jpg",
          "itemLevel": 106,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27543,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_shortblade_37.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 79.19238050067344,
          "medianPerformance": 79.19238050067344,
          "totalKills": 1,
          "fastestKill": 31935,
          "bestAmount": 156.2548927509,
          "spec": "Shadow",
          "allStars": {
            "points": 83.06978575229992,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 43.72430165582197,
          "medianPerformance": 43.72430165582197,
          "totalKills": 1,
          "fastestKill": 152511,
          "bestAmount": 127.71537790717,
          "spec": "Shadow",
          "allStars": {
            "points": 46.98446437594043,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 80.70504253245346,
          "medianPerformance": 80.70504253245346,
          "totalKills": 1,
          "fastestKill": 273434,
          "bestAmount": 168.29289700622,
          "spec": "Shadow",
          "allStars": {
            "points": 86.27247166527013,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 67.87390822964962,
      "medianPerformanceAverage": 67.87390822964962,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 10041,
          "slot": 1,
          "quality": 3,
          "icon": "inv_crown_01.jpg",
          "itemLevel": 50,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 7722,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_amulet_01.jpg",
          "itemLevel": 44,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 17622,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_19.jpg",
          "itemLevel": 74,
          "permanentEnchantID": null,
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
          "id": 17624,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_01.jpg",
          "itemLevel": 74,
          "permanentEnchantID": 928,
          "temporaryEnchantID": null
        },
        {
          "id": 19090,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_04.jpg",
          "itemLevel": 60,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 11841,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_09.jpg",
          "itemLevel": 55,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 17618,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_05.jpg",
          "itemLevel": 71,
          "permanentEnchantID": 911,
          "temporaryEnchantID": null
        },
        {
          "id": 19595,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 65,
          "permanentEnchantID": 1883,
          "temporaryEnchantID": null
        },
        {
          "id": 10019,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_18.jpg",
          "itemLevel": 45,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 11824,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_08.jpg",
          "itemLevel": 54,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 7553,
          "slot": 12,
          "quality": 2,
          "icon": "inv_jewelry_ring_11.jpg",
          "itemLevel": 48,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 11832,
          "slot": 13,
          "quality": 3,
          "icon": "inv_jewelry_amulet_07.jpg",
          "itemLevel": 58,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 34424,
          "slot": 14,
          "quality": 3,
          "icon": "inv_jewelry_talisman_10.jpg",
          "itemLevel": 59,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 19121,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_17.jpg",
          "itemLevel": 51,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 11932,
          "slot": 16,
          "quality": 3,
          "icon": "inv_staff_30.jpg",
          "itemLevel": 59,
          "permanentEnchantID": null,
          "temporaryEnchantID": 564
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
          "id": 22254,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_02.jpg",
          "itemLevel": 57,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": null,
          "medianPerformance": null,
          "totalKills": 0,
          "fastestKill": 0,
          "bestAmount": 0,
          "spec": "",
          "allStars": null
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
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
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 28252,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_25.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3150,
          "temporaryEnchantID": null
        },
        {
          "id": 27783,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 112,
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
          "id": 29242,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_11.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
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
          "permanentEnchantID": 1887,
          "temporaryEnchantID": null
        },
        {
          "id": 29320,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_38.jpg",
          "itemLevel": 115,
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
          "id": 28040,
          "slot": 13,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
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
          "id": 28269,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_05.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 884,
          "temporaryEnchantID": null
        },
        {
          "id": 27741,
          "slot": 16,
          "quality": 3,
          "icon": "inv_mace_1h_stratholme_d_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2628
        },
        {
          "id": 29268,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_37.jpg",
          "itemLevel": 110,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 45.4759,
          "medianPerformance": 25.8919,
          "totalKills": 2,
          "fastestKill": 53993,
          "bestAmount": 971.90376530291,
          "spec": "Elemental",
          "allStars": {
            "points": 48.51,
            "rank": 8110,
            "rankPercent": 42.9746835443038,
            "total": 14220
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 43.4671,
          "medianPerformance": 26.4004,
          "totalKills": 2,
          "fastestKill": 171879,
          "bestAmount": 802.587867046,
          "spec": "Elemental",
          "allStars": {
            "points": 54.75,
            "rank": 8337,
            "rankPercent": 42.066856626589754,
            "total": 14389
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 18.8346,
          "medianPerformance": 11.8583,
          "totalKills": 2,
          "fastestKill": 268799,
          "bestAmount": 652.640076786,
          "spec": "Elemental",
          "allStars": {
            "points": 29.08,
            "rank": 11362,
            "rankPercent": 18.183782226703155,
            "total": 13886
          }
        }
      ],
      "bestPerformanceAverage": 35.92586666666667,
      "medianPerformanceAverage": 21.383533333333332,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
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
          "id": 27776,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_24.jpg",
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
          "permanentEnchantID": 2649,
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
          "permanentEnchantID": 2564,
          "temporaryEnchantID": null
        },
        {
          "id": 29384,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_46.jpg",
          "itemLevel": 110,
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
          "id": 27891,
          "slot": 13,
          "quality": 3,
          "icon": "inv_qirajidol_sage.jpg",
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
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2662,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 51.8249,
          "medianPerformance": 47.6675,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 507.25093993666,
          "spec": "Feral",
          "allStars": {
            "points": 54.01,
            "rank": 6903,
            "rankPercent": 50.198427014936144,
            "total": 13859
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 93.6145,
          "medianPerformance": 89.343,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1292.8280941825,
          "spec": "Feral",
          "allStars": {
            "points": 103.27,
            "rank": 931,
            "rankPercent": 90.98138091543832,
            "total": 10312
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 91.7325,
          "medianPerformance": 78.1751,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1333.9623496022,
          "spec": "Feral",
          "allStars": {
            "points": 99.47,
            "rank": 1369,
            "rankPercent": 90.17241379310344,
            "total": 13920
          }
        }
      ],
      "bestPerformanceAverage": 79.0573,
      "medianPerformanceAverage": 71.72853333333335,
      "totalKills": 0,
      "fetchedAt": "2026-04-01T15:25:57.083Z",
      "error": null,
      "partial": false
    }
  }
};
