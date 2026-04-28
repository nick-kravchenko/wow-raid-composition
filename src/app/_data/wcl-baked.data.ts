// AUTO-GENERATED — do not edit manually.
// Run `npm run bake:wcl` to regenerate.
// Generated: 2026-04-28T21:51:38.555Z

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
  "generatedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 93.33264314116504,
          "medianPerformance": 17.559420300959207,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 269.00200992658,
          "spec": "Shadow",
          "allStars": {
            "points": 98.64954330696797,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 85.10650080146725,
          "medianPerformance": 33.24488566644049,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 233.18187182816,
          "spec": "Shadow",
          "allStars": {
            "points": 91.05888381124208,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 71.50913735517403,
          "medianPerformance": 36.73976670102814,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 141.27202185957,
          "spec": "Shadow",
          "allStars": {
            "points": 76.16005930806922,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 83.31609376593543,
      "medianPerformanceAverage": 29.181357556142615,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28203,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2659,
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
          "id": 29325,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 97,
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
          "id": 28518,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_31.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2937,
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
          "id": 29277,
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
          "id": 29176,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_30.jpg",
          "itemLevel": 105,
          "permanentEnchantID": null,
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
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "permanentEnchantID": null,
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
          "id": 29172,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
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
          "temporaryEnchantID": null
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
          "rankPercent": 91.3175,
          "medianPerformance": 82.1987,
          "totalKills": 9,
          "fastestKill": 24379,
          "bestAmount": 2138.5652273247,
          "spec": "Destruction",
          "allStars": {
            "points": 101.65,
            "rank": 3616,
            "rankPercent": 91.36076856897046,
            "total": 41844
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 69.6045,
          "medianPerformance": 58.1843,
          "totalKills": 9,
          "fastestKill": 114560,
          "bestAmount": 1241.6288407821,
          "spec": "Destruction",
          "allStars": {
            "points": 76.77,
            "rank": 14041,
            "rankPercent": 66.72118324681789,
            "total": 42189
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 71.1278,
          "medianPerformance": 42.9865,
          "totalKills": 9,
          "fastestKill": 199708,
          "bestAmount": 1058.4904914403,
          "spec": "Affliction",
          "allStars": {
            "points": 63.35,
            "rank": 3992,
            "rankPercent": 56.25342540830867,
            "total": 9123
          }
        }
      ],
      "bestPerformanceAverage": 77.34993333333334,
      "medianPerformanceAverage": 61.12316666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 29264,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_22.jpg",
          "itemLevel": 110,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 89.3946,
          "medianPerformance": 83.8102,
          "totalKills": 5,
          "fastestKill": 24379,
          "bestAmount": 864.66186885995,
          "spec": "Guardian",
          "allStars": {
            "points": 98.72,
            "rank": 1383,
            "rankPercent": 89.25433481066791,
            "total": 12861
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 89.4677,
          "medianPerformance": 73.7798,
          "totalKills": 5,
          "fastestKill": 114560,
          "bestAmount": 771.09811452514,
          "spec": "Guardian",
          "allStars": {
            "points": 99.01,
            "rank": 1921,
            "rankPercent": 88.14009512632035,
            "total": 16189
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 82.9346,
          "medianPerformance": 78.8715,
          "totalKills": 5,
          "fastestKill": 198308,
          "bestAmount": 778.85713141186,
          "spec": "Guardian",
          "allStars": {
            "points": 87.97,
            "rank": 2074,
            "rankPercent": 80.7449377670444,
            "total": 10766
          }
        }
      ],
      "bestPerformanceAverage": 87.26563333333333,
      "medianPerformanceAverage": 78.8205,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28593,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_03.jpg",
          "itemLevel": 115,
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
          "permanentEnchantID": 2977,
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
          "id": 29238,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_27.jpg",
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
          "id": 29463,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 27535,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 28528,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_pocketwatch_02.jpg",
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
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
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
          "temporaryEnchantID": 2678
        },
        {
          "id": 28606,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_29.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1704,
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
          "rankPercent": 87.6223,
          "medianPerformance": 81.5488,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 1574.1456057095,
          "spec": "Retribution",
          "allStars": {
            "points": 91.8,
            "rank": 2651,
            "rankPercent": 84.44653128301444,
            "total": 17038
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 82.5525,
          "medianPerformance": 76.7758,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1206.4831730406,
          "spec": "Retribution",
          "allStars": {
            "points": 88.91,
            "rank": 4070,
            "rankPercent": 79.03333848611325,
            "total": 19407
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.1204,
          "medianPerformance": 65.0054,
          "totalKills": 7,
          "fastestKill": 198308,
          "bestAmount": 1638.031526028,
          "spec": "Retribution",
          "allStars": {
            "points": 99.16,
            "rank": 1543,
            "rankPercent": 90.81048867699643,
            "total": 16780
          }
        }
      ],
      "bestPerformanceAverage": 87.43173333333334,
      "medianPerformanceAverage": 74.44333333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "rankPercent": 93.963,
          "medianPerformance": 89.7872,
          "totalKills": 7,
          "fastestKill": 18587,
          "bestAmount": 2519.7718835745,
          "spec": "BeastMastery",
          "allStars": {
            "points": 105.5,
            "rank": 2432,
            "rankPercent": 94.01408450704226,
            "total": 40612
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.024,
          "medianPerformance": 77.1833,
          "totalKills": 7,
          "fastestKill": 101676,
          "bestAmount": 1975.7169833589,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.48,
            "rank": 1686,
            "rankPercent": 95.87737326286944,
            "total": 40872
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 94.151,
          "medianPerformance": 84.6055,
          "totalKills": 7,
          "fastestKill": 163693,
          "bestAmount": 2000.6108996719,
          "spec": "BeastMastery",
          "allStars": {
            "points": 102.97,
            "rank": 2338,
            "rankPercent": 94.06882899345212,
            "total": 39402
          }
        }
      ],
      "bestPerformanceAverage": 94.71266666666666,
      "medianPerformanceAverage": 83.85866666666668,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 27914,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_14.jpg",
          "itemLevel": 112,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 88.1531,
          "medianPerformance": 73.2847,
          "totalKills": 3,
          "fastestKill": 24379,
          "bestAmount": 1225.3578899873,
          "spec": "Balance",
          "allStars": {
            "points": 94.95,
            "rank": 1812,
            "rankPercent": 86.75976019885948,
            "total": 13678
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 87.7198,
          "medianPerformance": 86.3348,
          "totalKills": 3,
          "fastestKill": 114560,
          "bestAmount": 1089.7628627905,
          "spec": "Balance",
          "allStars": {
            "points": 98.37,
            "rank": 1771,
            "rankPercent": 86.62636947487722,
            "total": 13235
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 85.2709,
          "medianPerformance": 73.1224,
          "totalKills": 3,
          "fastestKill": 199708,
          "bestAmount": 1084.6955692322,
          "spec": "Balance",
          "allStars": {
            "points": 92.35,
            "rank": 2050,
            "rankPercent": 83.6654974489796,
            "total": 12544
          }
        }
      ],
      "bestPerformanceAverage": 87.04793333333333,
      "medianPerformanceAverage": 77.58063333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28244,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_36.jpg",
          "itemLevel": 113,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 35411,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_22.jpg",
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
          "id": 29282,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
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
          "id": 28672,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28729,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_74.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": 2639
        },
        {
          "id": 28189,
          "slot": 17,
          "quality": 3,
          "icon": "inv_sword_76.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27916,
          "slot": 18,
          "quality": 3,
          "icon": "inv_throwingknife_06.jpg",
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
          "rankPercent": 69.784,
          "medianPerformance": 67.1336,
          "totalKills": 2,
          "fastestKill": 29404,
          "bestAmount": 1425.2028829238,
          "spec": "Arms",
          "allStars": {
            "points": 71.16,
            "rank": 4210,
            "rankPercent": 66.29294466244895,
            "total": 12487
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 78.0258,
          "medianPerformance": 66.2878,
          "totalKills": 2,
          "fastestKill": 131874,
          "bestAmount": 1079.3181370096,
          "spec": "Arms",
          "allStars": {
            "points": 82.67,
            "rank": 3561,
            "rankPercent": 73.32334207568378,
            "total": 13345
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 62.3427,
          "medianPerformance": 56.6765,
          "totalKills": 2,
          "fastestKill": 199708,
          "bestAmount": 1069.5467679686,
          "spec": "Arms",
          "allStars": {
            "points": 62.94,
            "rank": 5205,
            "rankPercent": 58.167202572347264,
            "total": 12440
          }
        }
      ],
      "bestPerformanceAverage": 70.05083333333333,
      "medianPerformanceAverage": 63.36596666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 27796,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_22.jpg",
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
          "id": 28594,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_05.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 73.259,
          "medianPerformance": 44.5307,
          "totalKills": 6,
          "fastestKill": 27183,
          "bestAmount": 789.77859355283,
          "spec": "Frost",
          "allStars": {
            "points": 73.28,
            "rank": 6526,
            "rankPercent": 68.20485332813566,
            "total": 20522
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 91.5178,
          "medianPerformance": 80.2074,
          "totalKills": 6,
          "fastestKill": 129192,
          "bestAmount": 1419.3122201141,
          "spec": "Arcane",
          "allStars": {
            "points": 100.69,
            "rank": 3983,
            "rankPercent": 89.33697514995715,
            "total": 37344
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 91.2426,
          "medianPerformance": 77.3169,
          "totalKills": 6,
          "fastestKill": 198308,
          "bestAmount": 1592.9652117879,
          "spec": "Arcane",
          "allStars": {
            "points": 97.72,
            "rank": 3940,
            "rankPercent": 88.98150997230692,
            "total": 35749
          }
        }
      ],
      "bestPerformanceAverage": 85.33979999999998,
      "medianPerformanceAverage": 67.35166666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "temporaryEnchantID": 2639
        },
        {
          "id": 28729,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_74.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2673,
          "temporaryEnchantID": 1643
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
          "rankPercent": 76.1928,
          "medianPerformance": 72.8063,
          "totalKills": 7,
          "fastestKill": 18587,
          "bestAmount": 1767.943199794,
          "spec": "Arms",
          "allStars": {
            "points": 80.35,
            "rank": 3193,
            "rankPercent": 74.43741491150797,
            "total": 12487
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 90.2386,
          "medianPerformance": 73.2337,
          "totalKills": 7,
          "fastestKill": 101676,
          "bestAmount": 1310.2502065384,
          "spec": "Arms",
          "allStars": {
            "points": 100.98,
            "rank": 1364,
            "rankPercent": 89.78643686774073,
            "total": 13345
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 68.8681,
          "medianPerformance": 49.0984,
          "totalKills": 7,
          "fastestKill": 163693,
          "bestAmount": 1190.2769208213,
          "spec": "Arms",
          "allStars": {
            "points": 73.58,
            "rank": 3934,
            "rankPercent": 68.38424437299035,
            "total": 12440
          }
        }
      ],
      "bestPerformanceAverage": 78.43316666666666,
      "medianPerformanceAverage": 65.04613333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 92.7869,
          "medianPerformance": 89.2776,
          "totalKills": 7,
          "fastestKill": 18587,
          "bestAmount": 1606.5529671276,
          "spec": "Enhancement",
          "allStars": {
            "points": 102.97,
            "rank": 1808,
            "rankPercent": 92.69633402045189,
            "total": 24741
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.2111,
          "medianPerformance": 85.8921,
          "totalKills": 7,
          "fastestKill": 101676,
          "bestAmount": 1387.4463983634,
          "spec": "Enhancement",
          "allStars": {
            "points": 102.67,
            "rank": 2710,
            "rankPercent": 89.14663461538461,
            "total": 24960
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 86.9489,
          "medianPerformance": 60.9221,
          "totalKills": 7,
          "fastestKill": 163693,
          "bestAmount": 1385.3207771872,
          "spec": "Enhancement",
          "allStars": {
            "points": 84.21,
            "rank": 5905,
            "rankPercent": 75.64356435643565,
            "total": 24240
          }
        }
      ],
      "bestPerformanceAverage": 91.9823,
      "medianPerformanceAverage": 78.69726666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 69.2472,
          "medianPerformance": 60.1665,
          "totalKills": 3,
          "fastestKill": 24379,
          "bestAmount": 1520.1197752164,
          "spec": "Survival",
          "allStars": {
            "points": 75.65,
            "rank": 3295,
            "rankPercent": 66.23962283488777,
            "total": 9757
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 73.6604,
          "medianPerformance": 36.2587,
          "totalKills": 3,
          "fastestKill": 114560,
          "bestAmount": 1314.6648044693,
          "spec": "Survival",
          "allStars": {
            "points": 82.55,
            "rank": 2906,
            "rankPercent": 70.47764227642277,
            "total": 9840
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 66.4565,
          "medianPerformance": 44.1457,
          "totalKills": 3,
          "fastestKill": 220165,
          "bestAmount": 1251.4576753866,
          "spec": "Survival",
          "allStars": {
            "points": 73.26,
            "rank": 3275,
            "rankPercent": 66.12869853093316,
            "total": 9666
          }
        }
      ],
      "bestPerformanceAverage": 69.78803333333333,
      "medianPerformanceAverage": 46.856966666666665,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 29155,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_01.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2669,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 95.8617,
          "medianPerformance": 80.1926,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 2569.6575065298,
          "spec": "Arcane",
          "allStars": {
            "points": 106.9,
            "rank": 1650,
            "rankPercent": 95.25084960543748,
            "total": 34722
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.1499,
          "medianPerformance": 88.0336,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 1542.576419214,
          "spec": "Arcane",
          "allStars": {
            "points": 106.19,
            "rank": 2285,
            "rankPercent": 93.88389031705228,
            "total": 37344
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.1801,
          "medianPerformance": 92.6919,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 1961.0429279199,
          "spec": "Arcane",
          "allStars": {
            "points": 107.79,
            "rank": 1033,
            "rankPercent": 97.11320596380318,
            "total": 35749
          }
        }
      ],
      "bestPerformanceAverage": 97.39723333333332,
      "medianPerformanceAverage": 86.97269999999999,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28528,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_pocketwatch_02.jpg",
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
          "rankPercent": 97.9802,
          "medianPerformance": 89.3292,
          "totalKills": 8,
          "fastestKill": 18587,
          "bestAmount": 1112.4441814171,
          "spec": "Guardian",
          "allStars": {
            "points": 110.15,
            "rank": 250,
            "rankPercent": 98.06391415908561,
            "total": 12861
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.6804,
          "medianPerformance": 95.7141,
          "totalKills": 8,
          "fastestKill": 101676,
          "bestAmount": 922.12518195051,
          "spec": "Guardian",
          "allStars": {
            "points": 110.44,
            "rank": 401,
            "rankPercent": 97.52918648465007,
            "total": 16189
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.5486,
          "medianPerformance": 86.5427,
          "totalKills": 8,
          "fastestKill": 163693,
          "bestAmount": 1019.9336562956,
          "spec": "Guardian",
          "allStars": {
            "points": 105.02,
            "rank": 461,
            "rankPercent": 95.72728961545606,
            "total": 10766
          }
        }
      ],
      "bestPerformanceAverage": 97.7364,
      "medianPerformanceAverage": 90.52866666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28780,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_15.jpg",
          "itemLevel": 125,
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
          "medianPerformance": 92.2126,
          "totalKills": 9,
          "fastestKill": 24379,
          "bestAmount": 2947.0856064646,
          "spec": "Destruction",
          "allStars": {
            "points": 113.42,
            "rank": 288,
            "rankPercent": 99.3141191090718,
            "total": 41844
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.1045,
          "medianPerformance": 83.3536,
          "totalKills": 9,
          "fastestKill": 114560,
          "bestAmount": 1735.9375,
          "spec": "Destruction",
          "allStars": {
            "points": 110.04,
            "rank": 1590,
            "rankPercent": 96.23361539737846,
            "total": 42189
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.803,
          "medianPerformance": 89.6244,
          "totalKills": 10,
          "fastestKill": 198308,
          "bestAmount": 2099.1392819022,
          "spec": "Destruction",
          "allStars": {
            "points": 107.97,
            "rank": 1152,
            "rankPercent": 97.21906786827418,
            "total": 41389
          }
        }
      ],
      "bestPerformanceAverage": 98.13623333333334,
      "medianPerformanceAverage": 88.39686666666665,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28127,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_81.jpg",
          "itemLevel": 123,
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
          "id": 28064,
          "slot": 18,
          "quality": 2,
          "icon": "spell_nature_spiritwolf.jpg",
          "itemLevel": 93,
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
          "rankPercent": 61.8858,
          "medianPerformance": 28.091,
          "totalKills": 3,
          "fastestKill": 35016,
          "bestAmount": 654.72926662097,
          "spec": "Feral",
          "allStars": {
            "points": 66.18,
            "rank": 7477,
            "rankPercent": 61.34236516882983,
            "total": 19339
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 63.4969,
          "medianPerformance": 59.5775,
          "totalKills": 3,
          "fastestKill": 156323,
          "bestAmount": 927.61529808774,
          "spec": "Feral",
          "allStars": {
            "points": 71.01,
            "rank": 5710,
            "rankPercent": 62.02859993348853,
            "total": 15035
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 56.7457,
          "medianPerformance": 18.3651,
          "totalKills": 3,
          "fastestKill": 273895,
          "bestAmount": 854.17039376403,
          "spec": "Feral",
          "allStars": {
            "points": 61.67,
            "rank": 8518,
            "rankPercent": 56.20629370629371,
            "total": 19448
          }
        }
      ],
      "bestPerformanceAverage": 60.709466666666664,
      "medianPerformanceAverage": 35.34453333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "temporaryEnchantID": 2639
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 95.1541,
          "medianPerformance": 81.3994,
          "totalKills": 10,
          "fastestKill": 18587,
          "bestAmount": 2602.6792919783,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.85,
            "rank": 2031,
            "rankPercent": 95.0014773958436,
            "total": 40612
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.9475,
          "medianPerformance": 77.2072,
          "totalKills": 10,
          "fastestKill": 101676,
          "bestAmount": 2100.3481647586,
          "spec": "BeastMastery",
          "allStars": {
            "points": 112.42,
            "rank": 830,
            "rankPercent": 97.97171657858681,
            "total": 40872
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.0615,
          "medianPerformance": 75.3588,
          "totalKills": 10,
          "fastestKill": 163693,
          "bestAmount": 2372.4166580123,
          "spec": "BeastMastery",
          "allStars": {
            "points": 108.81,
            "rank": 673,
            "rankPercent": 98.29450281711588,
            "total": 39402
          }
        }
      ],
      "bestPerformanceAverage": 97.05436666666667,
      "medianPerformanceAverage": 77.98846666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 27508,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 2841,
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.7627,
          "medianPerformance": 94.0852,
          "totalKills": 8,
          "fastestKill": 18587,
          "bestAmount": 2963.3614892129,
          "spec": "Elemental",
          "allStars": {
            "points": 116.36,
            "rank": 47,
            "rankPercent": 99.77717496609185,
            "total": 20644
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.2875,
          "medianPerformance": 88.6657,
          "totalKills": 8,
          "fastestKill": 101676,
          "bestAmount": 1424.0430386719,
          "spec": "Elemental",
          "allStars": {
            "points": 113.12,
            "rank": 345,
            "rankPercent": 98.35217474611994,
            "total": 20876
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 93.9815,
          "medianPerformance": 83.2038,
          "totalKills": 8,
          "fastestKill": 163693,
          "bestAmount": 1428.3384139823,
          "spec": "Elemental",
          "allStars": {
            "points": 104.02,
            "rank": 1343,
            "rankPercent": 93.36497577375656,
            "total": 20226
          }
        }
      ],
      "bestPerformanceAverage": 97.3439,
      "medianPerformanceAverage": 88.65156666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 97.2591,
          "medianPerformance": 95.4601,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 2712.896204598,
          "spec": "BeastMastery",
          "allStars": {
            "points": 108.44,
            "rank": 1588,
            "rankPercent": 96.09228799369644,
            "total": 40612
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 95.9884,
          "medianPerformance": 79.9116,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1854.4216449035,
          "spec": "BeastMastery",
          "allStars": {
            "points": 105.71,
            "rank": 2896,
            "rankPercent": 92.91691133294186,
            "total": 40872
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.7461,
          "medianPerformance": 89.9986,
          "totalKills": 6,
          "fastestKill": 198723,
          "bestAmount": 1855.1935750492,
          "spec": "BeastMastery",
          "allStars": {
            "points": 98.47,
            "rank": 3866,
            "rankPercent": 90.19085325617989,
            "total": 39402
          }
        }
      ],
      "bestPerformanceAverage": 95.33120000000001,
      "medianPerformanceAverage": 88.45676666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 77.9624,
          "medianPerformance": 50.6191,
          "totalKills": 4,
          "fastestKill": 29964,
          "bestAmount": 1139.4339874516,
          "spec": "Enhancement",
          "allStars": {
            "points": 80.01,
            "rank": 6789,
            "rankPercent": 72.56376055939533,
            "total": 24741
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 67.057,
          "medianPerformance": 61.2747,
          "totalKills": 4,
          "fastestKill": 130187,
          "bestAmount": 1081.6825028613,
          "spec": "Enhancement",
          "allStars": {
            "points": 71.51,
            "rank": 9798,
            "rankPercent": 60.749198717948715,
            "total": 24960
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 47.9466,
          "medianPerformance": 31.4903,
          "totalKills": 4,
          "fastestKill": 198308,
          "bestAmount": 1070.7108285373,
          "spec": "Enhancement",
          "allStars": {
            "points": 47.97,
            "rank": 14290,
            "rankPercent": 41.051980198019805,
            "total": 24240
          }
        }
      ],
      "bestPerformanceAverage": 64.322,
      "medianPerformanceAverage": 47.7947,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.4461,
          "medianPerformance": 98.4461,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 1899.9582526851,
          "spec": "Affliction",
          "allStars": {
            "points": 104.31,
            "rank": 555,
            "rankPercent": 93.99067143941859,
            "total": 9219
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.7114,
          "medianPerformance": 95.2408,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 1848.0097765363,
          "spec": "Destruction",
          "allStars": {
            "points": 112.92,
            "rank": 744,
            "rankPercent": 98.2388774325061,
            "total": 42189
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.7789,
          "medianPerformance": 95.0002,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 2270.9278955117,
          "spec": "Destruction",
          "allStars": {
            "points": 110.28,
            "rank": 556,
            "rankPercent": 98.65906400251275,
            "total": 41389
          }
        }
      ],
      "bestPerformanceAverage": 98.97879999999999,
      "medianPerformanceAverage": 96.22903333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "rankPercent": 60.1175,
          "medianPerformance": 46.4378,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 752.07468879668,
          "spec": "Balance",
          "allStars": {
            "points": 44.73,
            "rank": 8318,
            "rankPercent": 39.194326655943854,
            "total": 13678
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 82.3539,
          "medianPerformance": 54.5462,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 908.13526852393,
          "spec": "Balance",
          "allStars": {
            "points": 76.55,
            "rank": 4431,
            "rankPercent": 66.52814506989044,
            "total": 13235
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 61.7104,
          "medianPerformance": 39.3287,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 756.6411537668,
          "spec": "Balance",
          "allStars": {
            "points": 55.47,
            "rank": 6398,
            "rankPercent": 49.00350765306123,
            "total": 12544
          }
        }
      ],
      "bestPerformanceAverage": 68.0606,
      "medianPerformanceAverage": 46.770900000000005,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 29291,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
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
          "id": 28604,
          "slot": 16,
          "quality": 4,
          "icon": "inv_staff_57.jpg",
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
          "rankPercent": 96.4816,
          "medianPerformance": 85.5845,
          "totalKills": 4,
          "fastestKill": 27183,
          "bestAmount": 1434.1876918969,
          "spec": "Holy",
          "allStars": {
            "points": 103.37,
            "rank": 1350,
            "rankPercent": 94.88898992195196,
            "total": 26394
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 92.1069,
          "medianPerformance": 82.9673,
          "totalKills": 4,
          "fastestKill": 129192,
          "bestAmount": 1025.8375131587,
          "spec": "Holy",
          "allStars": {
            "points": 98.96,
            "rank": 2372,
            "rankPercent": 91.0626107278827,
            "total": 26529
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 83.7186,
          "medianPerformance": 80.5361,
          "totalKills": 4,
          "fastestKill": 198308,
          "bestAmount": 856.02665244354,
          "spec": "Holy",
          "allStars": {
            "points": 90.43,
            "rank": 4443,
            "rankPercent": 82.6788847728602,
            "total": 25645
          }
        }
      ],
      "bestPerformanceAverage": 90.76903333333333,
      "medianPerformanceAverage": 83.0293,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 27781,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_72.jpg",
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27547,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_15.jpg",
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
          "id": 31230,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 100,
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
          "id": 27537,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_16.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 25824,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_17.jpg",
          "itemLevel": 85,
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
          "id": 27896,
          "slot": 13,
          "quality": 3,
          "icon": "inv_potion_130.jpg",
          "itemLevel": 115,
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
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28810,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_chain_05.jpg",
          "itemLevel": 125,
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
          "id": 28754,
          "slot": 17,
          "quality": 4,
          "icon": "inv_shield_31.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.82881064604565,
          "medianPerformance": 94.89102016943518,
          "totalKills": 7,
          "fastestKill": 24379,
          "bestAmount": 573.60810656951,
          "spec": "Restoration",
          "allStars": {
            "points": 109.04310642572153,
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
          "totalKills": 7,
          "fastestKill": 114560,
          "bestAmount": 21.806955714013,
          "spec": "Restoration",
          "allStars": {
            "points": 75.80993838448309,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.05399458275605,
          "medianPerformance": 86.01917669486048,
          "totalKills": 6,
          "fastestKill": 198723,
          "bestAmount": 127.48166148116,
          "spec": "Restoration",
          "allStars": {
            "points": 93.29333614559664,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 88.33262869365132,
      "medianPerformanceAverage": 73.63673228809856,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28600,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_07.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 51.7797,
          "medianPerformance": 51.7797,
          "totalKills": 1,
          "fastestKill": 29404,
          "bestAmount": 798.63283906951,
          "spec": "Balance",
          "allStars": {
            "points": 51.14,
            "rank": 7474,
            "rankPercent": 45.364819418043574,
            "total": 13678
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 32.8279,
          "medianPerformance": 32.8279,
          "totalKills": 1,
          "fastestKill": 131874,
          "bestAmount": 640.85414865705,
          "spec": "Balance",
          "allStars": {
            "points": 40.95,
            "rank": 9505,
            "rankPercent": 28.19040423120514,
            "total": 13235
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 33.469,
          "medianPerformance": 33.469,
          "totalKills": 1,
          "fastestKill": 247445,
          "bestAmount": 608.36953666471,
          "spec": "Balance",
          "allStars": {
            "points": 33.76,
            "rank": 9003,
            "rankPercent": 28.236607142857142,
            "total": 12544
          }
        }
      ],
      "bestPerformanceAverage": 39.358866666666664,
      "medianPerformanceAverage": 39.358866666666664,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 32078,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_33.jpg",
          "itemLevel": 110,
          "permanentEnchantID": 2981,
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
          "id": 27784,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 112,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.7642,
          "medianPerformance": 87.7791,
          "totalKills": 7,
          "fastestKill": 24379,
          "bestAmount": 2910.3736822675,
          "spec": "Elemental",
          "allStars": {
            "points": 115.99,
            "rank": 64,
            "rankPercent": 99.69482658399535,
            "total": 20644
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 95.619,
          "medianPerformance": 72.2847,
          "totalKills": 7,
          "fastestKill": 114560,
          "bestAmount": 1289.2894553073,
          "spec": "Elemental",
          "allStars": {
            "points": 108.13,
            "rank": 1100,
            "rankPercent": 94.73558152902855,
            "total": 20876
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.2189,
          "medianPerformance": 86.8657,
          "totalKills": 7,
          "fastestKill": 199708,
          "bestAmount": 1406.4623304551,
          "spec": "Elemental",
          "allStars": {
            "points": 102.81,
            "rank": 1557,
            "rankPercent": 92.30693167210521,
            "total": 20226
          }
        }
      ],
      "bestPerformanceAverage": 95.86736666666667,
      "medianPerformanceAverage": 82.30983333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.0464,
          "medianPerformance": 94.4435,
          "totalKills": 5,
          "fastestKill": 27183,
          "bestAmount": 2157.1202589854,
          "spec": "Affliction",
          "allStars": {
            "points": 109.24,
            "rank": 226,
            "rankPercent": 97.55938821998048,
            "total": 9219
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 92.9295,
          "medianPerformance": 75.4538,
          "totalKills": 5,
          "fastestKill": 129192,
          "bestAmount": 1334.11438191,
          "spec": "Affliction",
          "allStars": {
            "points": 100.26,
            "rank": 1193,
            "rankPercent": 87.00534176387224,
            "total": 9173
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.7733,
          "medianPerformance": 83.2979,
          "totalKills": 5,
          "fastestKill": 220362,
          "bestAmount": 1378.7589161228,
          "spec": "Affliction",
          "allStars": {
            "points": 90.68,
            "rank": 1667,
            "rankPercent": 81.7384632248164,
            "total": 9123
          }
        }
      ],
      "bestPerformanceAverage": 93.91640000000001,
      "medianPerformanceAverage": 84.3984,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 54.3518,
          "medianPerformance": 54.3518,
          "totalKills": 5,
          "fastestKill": 29964,
          "bestAmount": 910.32670779072,
          "spec": "Enhancement",
          "allStars": {
            "points": 59.86,
            "rank": 11448,
            "rankPercent": 53.732670466028054,
            "total": 24741
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 65.7742,
          "medianPerformance": 65.7742,
          "totalKills": 5,
          "fastestKill": 132466,
          "bestAmount": 1119.1827178342,
          "spec": "Enhancement",
          "allStars": {
            "points": 76.59,
            "rank": 8612,
            "rankPercent": 65.50080128205128,
            "total": 24960
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 22.46,
          "medianPerformance": 22.46,
          "totalKills": 4,
          "fastestKill": 198308,
          "bestAmount": 886.98588875299,
          "spec": "Enhancement",
          "allStars": {
            "points": 32.22,
            "rank": 18992,
            "rankPercent": 21.654290429042906,
            "total": 24240
          }
        }
      ],
      "bestPerformanceAverage": 47.52866666666666,
      "medianPerformanceAverage": 47.52866666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "permanentEnchantID": 2980,
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
          "id": 28591,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_mail_15.jpg",
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
          "medianPerformance": 75,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 404.10208235478,
          "spec": "Restoration",
          "allStars": {
            "points": 106.03460627910073,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 94.96412431067354,
          "medianPerformance": 40,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 81.873070513346,
          "spec": "Restoration",
          "allStars": {
            "points": 97.57293044057705,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.02484566148118,
          "medianPerformance": 30.124293452186883,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 162.12375713478,
          "spec": "Restoration",
          "allStars": {
            "points": 102.14445171860949,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 97.5107274806226,
      "medianPerformanceAverage": 48.3747644840623,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.487,
          "medianPerformance": 90.5878,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 2643.4020266424,
          "spec": "Destruction",
          "allStars": {
            "points": 110.56,
            "rank": 882,
            "rankPercent": 97.89456074945033,
            "total": 41844
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.8173,
          "medianPerformance": 92.2602,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 1823.5384485394,
          "spec": "Destruction",
          "allStars": {
            "points": 112.41,
            "rank": 881,
            "rankPercent": 97.91414823769229,
            "total": 42189
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.6236,
          "medianPerformance": 95.9337,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 2172.2665432334,
          "spec": "Destruction",
          "allStars": {
            "points": 109.06,
            "rank": 853,
            "rankPercent": 97.94148203628984,
            "total": 41389
          }
        }
      ],
      "bestPerformanceAverage": 98.97596666666668,
      "medianPerformanceAverage": 92.92723333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
            "points": 38.34,
            "rank": 27735,
            "rankPercent": 32.991857739979224,
            "total": 41389
          }
        }
      ],
      "bestPerformanceAverage": 40.2216,
      "medianPerformanceAverage": 40.2216,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 23537,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_07.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 2647,
          "temporaryEnchantID": null
        },
        {
          "id": 29020,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_54.jpg",
          "itemLevel": 120,
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
          "temporaryEnchantID": null
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
          "medianPerformance": 79.3079,
          "totalKills": 5,
          "fastestKill": 27183,
          "bestAmount": 3951.5578518866,
          "spec": "Fury",
          "allStars": {
            "points": 106.66,
            "rank": 855,
            "rankPercent": 96.81924838913926,
            "total": 26849
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.8964,
          "medianPerformance": 96.8964,
          "totalKills": 5,
          "fastestKill": 129192,
          "bestAmount": 587.28786568998,
          "spec": "Gladiator",
          "allStars": {
            "points": 103.68,
            "rank": 223,
            "rankPercent": 95.64193168433451,
            "total": 5094
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 96.7422,
          "medianPerformance": 96.7422,
          "totalKills": 5,
          "fastestKill": 220362,
          "bestAmount": 539.51383135646,
          "spec": "Gladiator",
          "allStars": {
            "points": 101.25,
            "rank": 448,
            "rankPercent": 95.54203650144609,
            "total": 10027
          }
        }
      ],
      "bestPerformanceAverage": 97.2788,
      "medianPerformanceAverage": 90.98216666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.5459,
          "medianPerformance": 96.5204,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 3430.8387582719,
          "spec": "BeastMastery",
          "allStars": {
            "points": 115.14,
            "rank": 181,
            "rankPercent": 99.55678124692209,
            "total": 40612
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.1536,
          "medianPerformance": 95.9566,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 2063.7023486368,
          "spec": "BeastMastery",
          "allStars": {
            "points": 111.72,
            "rank": 1013,
            "rankPercent": 97.52397729496965,
            "total": 40872
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 96.9504,
          "medianPerformance": 92.1643,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 2175.322096852,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.48,
            "rank": 1253,
            "rankPercent": 96.82249631998376,
            "total": 39402
          }
        }
      ],
      "bestPerformanceAverage": 98.21663333333333,
      "medianPerformanceAverage": 94.88043333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28744,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_53.jpg",
          "itemLevel": 115,
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
          "permanentEnchantID": 2841,
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
          "id": 28477,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
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
          "permanentEnchantID": null,
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
          "id": 25808,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_05.jpg",
          "itemLevel": 109,
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
          "rankPercent": 84.7375,
          "medianPerformance": 49.4012,
          "totalKills": 5,
          "fastestKill": 24379,
          "bestAmount": 1540.6292300751,
          "spec": "Affliction",
          "allStars": {
            "points": 91.61,
            "rank": 1553,
            "rankPercent": 83.16520229959866,
            "total": 9219
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 59.0709,
          "medianPerformance": 46.5205,
          "totalKills": 5,
          "fastestKill": 114560,
          "bestAmount": 1036.094622905,
          "spec": "Affliction",
          "allStars": {
            "points": 66.13,
            "rank": 4074,
            "rankPercent": 55.59795050692249,
            "total": 9173
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 83.6983,
          "medianPerformance": 48.4815,
          "totalKills": 5,
          "fastestKill": 198308,
          "bestAmount": 1372.7522539913,
          "spec": "Affliction",
          "allStars": {
            "points": 90.24,
            "rank": 1704,
            "rankPercent": 81.33289488106982,
            "total": 9123
          }
        }
      ],
      "bestPerformanceAverage": 75.83556666666668,
      "medianPerformanceAverage": 48.1344,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 96.4536,
          "medianPerformance": 85.4769,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 1459.7639180523,
          "spec": "Holy",
          "allStars": {
            "points": 104.09,
            "rank": 1199,
            "rankPercent": 95.4610896415852,
            "total": 26394
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 90.219,
          "medianPerformance": 78.7313,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 857.66965710826,
          "spec": "Holy",
          "allStars": {
            "points": 85.65,
            "rank": 5584,
            "rankPercent": 78.95510573334842,
            "total": 26529
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.6129,
          "medianPerformance": 95.6026,
          "totalKills": 6,
          "fastestKill": 198723,
          "bestAmount": 1052.3140250499,
          "spec": "Holy",
          "allStars": {
            "points": 103.69,
            "rank": 1469,
            "rankPercent": 94.27568726847339,
            "total": 25645
          }
        }
      ],
      "bestPerformanceAverage": 94.76183333333331,
      "medianPerformanceAverage": 86.60359999999999,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 97.9037,
          "medianPerformance": 93.0039,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 1839.7666666667,
          "spec": "Enhancement",
          "allStars": {
            "points": 108.81,
            "rank": 723,
            "rankPercent": 97.08176710723092,
            "total": 24741
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.102,
          "medianPerformance": 97.6644,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 1615.5202513966,
          "spec": "Enhancement",
          "allStars": {
            "points": 113.28,
            "rank": 599,
            "rankPercent": 97.60416666666667,
            "total": 24960
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.9751,
          "medianPerformance": 93.4132,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 1932.471150263,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.92,
            "rank": 434,
            "rankPercent": 98.21369636963696,
            "total": 24240
          }
        }
      ],
      "bestPerformanceAverage": 98.32693333333333,
      "medianPerformanceAverage": 94.69383333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 27827,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 29289,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
          "id": 29175,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_04.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2505,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 90,
          "medianPerformance": 90,
          "totalKills": 1,
          "fastestKill": 123522,
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
          "totalKills": 2,
          "fastestKill": 225589,
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
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 70,
          "medianPerformance": 70,
          "totalKills": 3,
          "fastestKill": 376014,
          "bestAmount": 0,
          "spec": "Restoration",
          "allStars": {
            "points": 70,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 80,
      "medianPerformanceAverage": 80,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.3863,
          "medianPerformance": 96.9053,
          "totalKills": 7,
          "fastestKill": 18587,
          "bestAmount": 3056.3834938398,
          "spec": "BeastMastery",
          "allStars": {
            "points": 112.36,
            "rank": 623,
            "rankPercent": 98.46843297547522,
            "total": 40612
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.733,
          "medianPerformance": 93.8008,
          "totalKills": 7,
          "fastestKill": 101676,
          "bestAmount": 2165.3487548684,
          "spec": "BeastMastery",
          "allStars": {
            "points": 113.61,
            "rank": 524,
            "rankPercent": 98.72039538070072,
            "total": 40872
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.617,
          "medianPerformance": 95.2668,
          "totalKills": 7,
          "fastestKill": 163693,
          "bestAmount": 2324.7725759929,
          "spec": "BeastMastery",
          "allStars": {
            "points": 108.36,
            "rank": 769,
            "rankPercent": 98.05086036241815,
            "total": 39402
          }
        }
      ],
      "bestPerformanceAverage": 98.57876666666668,
      "medianPerformanceAverage": 95.3243,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 29381,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_04.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.2943,
          "medianPerformance": 92.2564,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 4135.8964090242,
          "spec": "Fury",
          "allStars": {
            "points": 107.81,
            "rank": 667,
            "rankPercent": 97.51946068754889,
            "total": 26849
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.5947,
          "medianPerformance": 93.7427,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 1792.3485291253,
          "spec": "Fury",
          "allStars": {
            "points": 110.28,
            "rank": 858,
            "rankPercent": 96.94408786193125,
            "total": 28044
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 99.2585,
          "medianPerformance": 95.3747,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 2307.6429657957,
          "spec": "Fury",
          "allStars": {
            "points": 106.65,
            "rank": 541,
            "rankPercent": 97.96449168834106,
            "total": 26529
          }
        }
      ],
      "bestPerformanceAverage": 99.04916666666668,
      "medianPerformanceAverage": 93.79126666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 29351,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_crossbow_16.jpg",
          "itemLevel": 105,
          "permanentEnchantID": 664,
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
          "rankPercent": 98.5601,
          "medianPerformance": 59.6767,
          "totalKills": 4,
          "fastestKill": 27183,
          "bestAmount": 2937.1514079717,
          "spec": "BeastMastery",
          "allStars": {
            "points": 111.23,
            "rank": 862,
            "rankPercent": 97.87993696444401,
            "total": 40612
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.5163,
          "medianPerformance": 69.3702,
          "totalKills": 4,
          "fastestKill": 129192,
          "bestAmount": 1979.6504427519,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.6,
            "rank": 1648,
            "rankPercent": 95.97034644744568,
            "total": 40872
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.8817,
          "medianPerformance": 45.2791,
          "totalKills": 3,
          "fastestKill": 247445,
          "bestAmount": 1814.2213421164,
          "spec": "BeastMastery",
          "allStars": {
            "points": 96.83,
            "rank": 4446,
            "rankPercent": 88.71884675904776,
            "total": 39402
          }
        }
      ],
      "bestPerformanceAverage": 95.31936666666667,
      "medianPerformanceAverage": 58.108666666666664,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28609,
          "slot": 2,
          "quality": 4,
          "icon": "inv_jewelry_necklace_17.jpg",
          "itemLevel": 115,
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
          "id": 28785,
          "slot": 13,
          "quality": 4,
          "icon": "inv_trinket_naxxramas06.jpg",
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
          "id": 28770,
          "slot": 16,
          "quality": 4,
          "icon": "inv_weapon_shortblade_41.jpg",
          "itemLevel": 125,
          "permanentEnchantID": 2669,
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
          "rankPercent": 13.4662,
          "medianPerformance": 13.4662,
          "totalKills": 2,
          "fastestKill": 29964,
          "bestAmount": 501.63529568816,
          "spec": "Balance",
          "allStars": {
            "points": 19.82,
            "rank": 12320,
            "rankPercent": 9.935663108641615,
            "total": 13678
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 83.905,
          "medianPerformance": 83.905,
          "totalKills": 2,
          "fastestKill": 132466,
          "bestAmount": 1008.0473479987,
          "spec": "Balance",
          "allStars": {
            "points": 89.76,
            "rank": 2806,
            "rankPercent": 78.80619569323763,
            "total": 13235
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 81.3303,
          "medianPerformance": 81.3303,
          "totalKills": 2,
          "fastestKill": 198308,
          "bestAmount": 988.68931157593,
          "spec": "Balance",
          "allStars": {
            "points": 83.35,
            "rank": 3096,
            "rankPercent": 75.32684948979592,
            "total": 12544
          }
        }
      ],
      "bestPerformanceAverage": 59.56716666666667,
      "medianPerformanceAverage": 59.56716666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28278,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_34.jpg",
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
          "id": 29242,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_11.jpg",
          "itemLevel": 110,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 0.561466,
          "medianPerformance": 0.561466,
          "totalKills": 1,
          "fastestKill": 53993,
          "bestAmount": 74.157761191266,
          "spec": "Balance",
          "allStars": {
            "points": 2.93,
            "rank": 13751,
            "rankPercent": -0.5263927474777014,
            "total": 13678
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
            "points": 11.1,
            "rank": 13251,
            "rankPercent": -0.11333585190782017,
            "total": 13235
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
            "points": 7.03,
            "rank": 12626,
            "rankPercent": -0.6457270408163265,
            "total": 12544
          }
        }
      ],
      "bestPerformanceAverage": 0.8324866666666666,
      "medianPerformanceAverage": 0.8324866666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28227,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_63.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 91.9936,
          "medianPerformance": 91.9936,
          "totalKills": 7,
          "fastestKill": 24379,
          "bestAmount": 995.01641301104,
          "spec": "Frost",
          "allStars": {
            "points": 92.8,
            "rank": 2745,
            "rankPercent": 86.62898352987038,
            "total": 20522
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.1401,
          "medianPerformance": 87.084,
          "totalKills": 7,
          "fastestKill": 114560,
          "bestAmount": 1578.3626795274,
          "spec": "Arcane",
          "allStars": {
            "points": 107.52,
            "rank": 1888,
            "rankPercent": 94.9469794344473,
            "total": 37344
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.2332,
          "medianPerformance": 78.7161,
          "totalKills": 6,
          "fastestKill": 220165,
          "bestAmount": 1930.8155247201,
          "spec": "Arcane",
          "allStars": {
            "points": 107.22,
            "rank": 1177,
            "rankPercent": 96.71039749363618,
            "total": 35749
          }
        }
      ],
      "bestPerformanceAverage": 95.45563333333332,
      "medianPerformanceAverage": 85.93123333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28597,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate02.jpg",
          "itemLevel": 115,
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
          "temporaryEnchantID": 2678
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 38.5755,
          "medianPerformance": 38.5755,
          "totalKills": 2,
          "fastestKill": 81902,
          "bestAmount": 190.89675890617,
          "spec": "Justicar",
          "allStars": {
            "points": 37.02,
            "rank": 13575,
            "rankPercent": 34.291799787007456,
            "total": 20658
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 45.1994,
          "medianPerformance": 45.1994,
          "totalKills": 2,
          "fastestKill": 222400,
          "bestAmount": 401.2904676259,
          "spec": "Protection",
          "allStars": {
            "points": 50.02,
            "rank": 8538,
            "rankPercent": 43.12079419015257,
            "total": 15009
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 20.9025,
          "medianPerformance": 20.9025,
          "totalKills": 1,
          "fastestKill": 441479,
          "bestAmount": 182.7674702534,
          "spec": "Justicar",
          "allStars": {
            "points": 22.23,
            "rank": 16810,
            "rankPercent": 19.27288444914033,
            "total": 20822
          }
        }
      ],
      "bestPerformanceAverage": 34.89246666666667,
      "medianPerformanceAverage": 34.89246666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 32083,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_01.jpg",
          "itemLevel": 110,
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
          "id": 29172,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 105,
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
          "temporaryEnchantID": 2678
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 78.507,
          "medianPerformance": 56.1044,
          "totalKills": 5,
          "fastestKill": 27183,
          "bestAmount": 1364.7761023532,
          "spec": "Retribution",
          "allStars": {
            "points": 84.53,
            "rank": 3735,
            "rankPercent": 78.08428219274563,
            "total": 17038
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 86.9859,
          "medianPerformance": 76.4415,
          "totalKills": 5,
          "fastestKill": 129192,
          "bestAmount": 1325.8715709951,
          "spec": "Retribution",
          "allStars": {
            "points": 96.85,
            "rank": 2704,
            "rankPercent": 86.07203586334828,
            "total": 19407
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 88.7016,
          "medianPerformance": 44.7315,
          "totalKills": 5,
          "fastestKill": 220362,
          "bestAmount": 1544.404207622,
          "spec": "Retribution",
          "allStars": {
            "points": 94.78,
            "rank": 2203,
            "rankPercent": 86.8772348033373,
            "total": 16780
          }
        }
      ],
      "bestPerformanceAverage": 84.7315,
      "medianPerformanceAverage": 59.09246666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28512,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_02.jpg",
          "itemLevel": 115,
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
          "id": 28296,
          "slot": 18,
          "quality": 3,
          "icon": "inv_misc_book_12.jpg",
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
          "rankPercent": 80,
          "medianPerformance": 75,
          "totalKills": 9,
          "fastestKill": 18587,
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
          "totalKills": 9,
          "fastestKill": 101676,
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
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 69.95820469257282,
          "medianPerformance": 30,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 6.6865683683966,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 69.98606823085761,
      "medianPerformanceAverage": 51.666666666666664,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 32087,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_73.jpg",
          "itemLevel": 110,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 97.6175,
          "medianPerformance": 83.9986,
          "totalKills": 8,
          "fastestKill": 18587,
          "bestAmount": 2424.1136278044,
          "spec": "Retribution",
          "allStars": {
            "points": 108.81,
            "rank": 398,
            "rankPercent": 97.66991430919121,
            "total": 17038
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.4414,
          "medianPerformance": 82.6451,
          "totalKills": 8,
          "fastestKill": 101676,
          "bestAmount": 1596.5770356552,
          "spec": "Retribution",
          "allStars": {
            "points": 108.56,
            "rank": 838,
            "rankPercent": 95.687123202968,
            "total": 19407
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.535,
          "medianPerformance": 88.5671,
          "totalKills": 5,
          "fastestKill": 163693,
          "bestAmount": 1560.7508739316,
          "spec": "Retribution",
          "allStars": {
            "points": 95.65,
            "rank": 2071,
            "rankPercent": 87.66388557806913,
            "total": 16780
          }
        }
      ],
      "bestPerformanceAverage": 95.19796666666666,
      "medianPerformanceAverage": 85.07026666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 93.8179,
          "medianPerformance": 86.4264,
          "totalKills": 6,
          "fastestKill": 27183,
          "bestAmount": 2345.6708940034,
          "spec": "BeastMastery",
          "allStars": {
            "points": 102.01,
            "rank": 3536,
            "rankPercent": 91.29567615483109,
            "total": 40612
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 91.7419,
          "medianPerformance": 80.7535,
          "totalKills": 6,
          "fastestKill": 129192,
          "bestAmount": 1759.1259520713,
          "spec": "BeastMastery",
          "allStars": {
            "points": 101.72,
            "rank": 4265,
            "rankPercent": 89.56743002544529,
            "total": 40872
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.7044,
          "medianPerformance": 71.6174,
          "totalKills": 6,
          "fastestKill": 220362,
          "bestAmount": 1853.7270419919,
          "spec": "BeastMastery",
          "allStars": {
            "points": 98.41,
            "rank": 3886,
            "rankPercent": 90.1400944114512,
            "total": 39402
          }
        }
      ],
      "bestPerformanceAverage": 92.75473333333333,
      "medianPerformanceAverage": 79.5991,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 27704,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_77.jpg",
          "itemLevel": 123,
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
          "id": 30371,
          "slot": 6,
          "quality": 3,
          "icon": "inv_belt_08.jpg",
          "itemLevel": 109,
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
          "id": 29172,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 105,
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
          "id": 29155,
          "slot": 16,
          "quality": 4,
          "icon": "inv_sword_01.jpg",
          "itemLevel": 100,
          "permanentEnchantID": 2669,
          "temporaryEnchantID": 2639
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.7903,
          "medianPerformance": 88.151,
          "totalKills": 10,
          "fastestKill": 24379,
          "bestAmount": 1263.3653187114,
          "spec": "Justicar",
          "allStars": {
            "points": 114.23,
            "rank": 37,
            "rankPercent": 99.82573337205925,
            "total": 20658
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.6075,
          "medianPerformance": 93.1317,
          "totalKills": 10,
          "fastestKill": 114560,
          "bestAmount": 527.90456996568,
          "spec": "Justicar",
          "allStars": {
            "points": 112.75,
            "rank": 98,
            "rankPercent": 99.26803501358286,
            "total": 13252
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 99.2584,
          "medianPerformance": 95.0481,
          "totalKills": 10,
          "fastestKill": 199708,
          "bestAmount": 756.27521495464,
          "spec": "Justicar",
          "allStars": {
            "points": 108.88,
            "rank": 197,
            "rankPercent": 99.05868792623187,
            "total": 20822
          }
        }
      ],
      "bestPerformanceAverage": 99.55206666666668,
      "medianPerformanceAverage": 92.11026666666665,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28796,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_58.jpg",
          "itemLevel": 125,
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
          "id": 27797,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_15.jpg",
          "itemLevel": 115,
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
          "id": 28601,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 27867,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27712,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_08.jpg",
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
          "id": 29281,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
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
          "id": 29383,
          "slot": 13,
          "quality": 4,
          "icon": "inv_misc_monsterscales_15.jpg",
          "itemLevel": 110,
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
          "id": 28529,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 28066,
          "slot": 18,
          "quality": 2,
          "icon": "inv_relics_totemofrage.jpg",
          "itemLevel": 93,
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
          "rankPercent": 57.5199,
          "medianPerformance": 55.0732,
          "totalKills": 2,
          "fastestKill": 27183,
          "bestAmount": 943.78027098277,
          "spec": "Enhancement",
          "allStars": {
            "points": 63.54,
            "rank": 10583,
            "rankPercent": 57.228891314013175,
            "total": 24741
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 53.1977,
          "medianPerformance": 42.0159,
          "totalKills": 2,
          "fastestKill": 129192,
          "bestAmount": 1007.9416682148,
          "spec": "Enhancement",
          "allStars": {
            "points": 61.07,
            "rank": 12243,
            "rankPercent": 50.95352564102564,
            "total": 24960
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 5.29344,
          "medianPerformance": 5.29344,
          "totalKills": 1,
          "fastestKill": 251234,
          "bestAmount": 609.34029629748,
          "spec": "Enhancement",
          "allStars": {
            "points": 22.13,
            "rank": 23190,
            "rankPercent": 4.335808580858086,
            "total": 24240
          }
        }
      ],
      "bestPerformanceAverage": 38.67034666666667,
      "medianPerformanceAverage": 34.12751333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 3934.3627266369,
          "spec": "Combat",
          "allStars": {
            "points": 112.89,
            "rank": 108,
            "rankPercent": 99.58626556337484,
            "total": 25862
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.8018,
          "medianPerformance": 99.0563,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 1928.2524882962,
          "spec": "Combat",
          "allStars": {
            "points": 116.66,
            "rank": 28,
            "rankPercent": 99.89665071770335,
            "total": 26125
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.6196,
          "medianPerformance": 85.3769,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 1687.4594284507,
          "spec": "Combat",
          "allStars": {
            "points": 107.13,
            "rank": 933,
            "rankPercent": 96.32882971599638,
            "total": 25387
          }
        }
      ],
      "bestPerformanceAverage": 99.3519,
      "medianPerformanceAverage": 93.65496666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28597,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate02.jpg",
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
          "id": 30832,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_08.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 96.2502,
          "medianPerformance": 96.2502,
          "totalKills": 2,
          "fastestKill": 18587,
          "bestAmount": 1177.1327668028,
          "spec": "Protection",
          "allStars": {
            "points": 104.13,
            "rank": 474,
            "rankPercent": 95.80189935209017,
            "total": 11267
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 95.2474,
          "medianPerformance": 92.073,
          "totalKills": 2,
          "fastestKill": 101676,
          "bestAmount": 660.32726484612,
          "spec": "Protection",
          "allStars": {
            "points": 105.15,
            "rank": 838,
            "rankPercent": 94.42334599240456,
            "total": 15009
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.2965,
          "medianPerformance": 88.7215,
          "totalKills": 2,
          "fastestKill": 163693,
          "bestAmount": 471.99821680187,
          "spec": "Justicar",
          "allStars": {
            "points": 95.33,
            "rank": 2265,
            "rankPercent": 89.12688502545384,
            "total": 20822
          }
        }
      ],
      "bestPerformanceAverage": 93.93136666666668,
      "medianPerformanceAverage": 92.34823333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "permanentEnchantID": null,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 75,
          "medianPerformance": 75,
          "totalKills": 5,
          "fastestKill": 27183,
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
          "medianPerformance": 40,
          "totalKills": 5,
          "fastestKill": 129192,
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
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 70.36789011778852,
          "medianPerformance": 30,
          "totalKills": 5,
          "fastestKill": 220362,
          "bestAmount": 7.6900419529204,
          "spec": "Holy",
          "allStars": {
            "points": 0,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 65.12263003926284,
      "medianPerformanceAverage": 48.333333333333336,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28029,
          "slot": 9,
          "quality": 3,
          "icon": "inv_bracer_12.jpg",
          "itemLevel": 94,
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
          "id": 31304,
          "slot": 16,
          "quality": 3,
          "icon": "inv_mace_34.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 90.575,
          "medianPerformance": 85.1509,
          "totalKills": 3,
          "fastestKill": 24379,
          "bestAmount": 1029.6156528159,
          "spec": "Discipline",
          "allStars": {
            "points": 97.6,
            "rank": 708,
            "rankPercent": 89.61515863689776,
            "total": 6808
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 86.7949,
          "medianPerformance": 62.6762,
          "totalKills": 3,
          "fastestKill": 114560,
          "bestAmount": 722.1281424581,
          "spec": "Discipline",
          "allStars": {
            "points": 93.49,
            "rank": 931,
            "rankPercent": 86.13388996570747,
            "total": 6707
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 84.3143,
          "medianPerformance": 69.1919,
          "totalKills": 3,
          "fastestKill": 198308,
          "bestAmount": 658.05191560875,
          "spec": "Discipline",
          "allStars": {
            "points": 92.01,
            "rank": 1034,
            "rankPercent": 84.26024683833613,
            "total": 6563
          }
        }
      ],
      "bestPerformanceAverage": 87.22806666666668,
      "medianPerformanceAverage": 72.33966666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 91.5167,
          "medianPerformance": 86.1568,
          "totalKills": 8,
          "fastestKill": 27183,
          "bestAmount": 963.10193871169,
          "spec": "Discipline",
          "allStars": {
            "points": 93.91,
            "rank": 926,
            "rankPercent": 86.41304347826087,
            "total": 6808
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 90.2312,
          "medianPerformance": 74.4897,
          "totalKills": 8,
          "fastestKill": 123192,
          "bestAmount": 721.82322351694,
          "spec": "Discipline",
          "allStars": {
            "points": 93.44,
            "rank": 934,
            "rankPercent": 86.08916057850007,
            "total": 6707
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 95.9663,
          "medianPerformance": 87.0505,
          "totalKills": 8,
          "fastestKill": 220362,
          "bestAmount": 856.5162358598,
          "spec": "Discipline",
          "allStars": {
            "points": 105.53,
            "rank": 293,
            "rankPercent": 95.55081517598659,
            "total": 6563
          }
        }
      ],
      "bestPerformanceAverage": 92.5714,
      "medianPerformanceAverage": 82.56566666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 29082,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_chain_15.jpg",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 93.0149,
          "medianPerformance": 69.6913,
          "totalKills": 7,
          "fastestKill": 18587,
          "bestAmount": 2042.6104266423,
          "spec": "Survival",
          "allStars": {
            "points": 105.61,
            "rank": 666,
            "rankPercent": 93.18438044480885,
            "total": 9757
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 70.5611,
          "medianPerformance": 54.4834,
          "totalKills": 7,
          "fastestKill": 101676,
          "bestAmount": 1266.0706558086,
          "spec": "Survival",
          "allStars": {
            "points": 75.5,
            "rank": 3560,
            "rankPercent": 63.83130081300813,
            "total": 9840
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 94.1401,
          "medianPerformance": 72.6925,
          "totalKills": 7,
          "fastestKill": 163693,
          "bestAmount": 1561.6566149626,
          "spec": "Survival",
          "allStars": {
            "points": 99.74,
            "rank": 869,
            "rankPercent": 91.02007034967929,
            "total": 9666
          }
        }
      ],
      "bestPerformanceAverage": 85.90536666666667,
      "medianPerformanceAverage": 65.6224,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28191,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_42.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 908,
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
          "id": 27838,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_cloth_20.jpg",
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
          "permanentEnchantID": 929,
          "temporaryEnchantID": null
        },
        {
          "id": 28477,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_13.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 1883,
          "temporaryEnchantID": null
        },
        {
          "id": 29080,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_47.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28394,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_48naxxramas.jpg",
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
          "id": 27543,
          "slot": 16,
          "quality": 3,
          "icon": "inv_weapon_shortblade_37.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "rankPercent": 43.9315,
          "medianPerformance": 36.2605,
          "totalKills": 2,
          "fastestKill": 78275,
          "bestAmount": 1048.5212392207,
          "spec": "Arcane",
          "allStars": {
            "points": 46.28,
            "rank": 20452,
            "rankPercent": 41.10074304475549,
            "total": 34722
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 35.7775,
          "medianPerformance": 33.5154,
          "totalKills": 2,
          "fastestKill": 199777,
          "bestAmount": 871.126305831,
          "spec": "Arcane",
          "allStars": {
            "points": 41.54,
            "rank": 24796,
            "rankPercent": 33.60379177377892,
            "total": 37344
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 51.6865,
          "medianPerformance": 27.4505,
          "totalKills": 2,
          "fastestKill": 321375,
          "bestAmount": 1021.3986775574,
          "spec": "Arcane",
          "allStars": {
            "points": 54.97,
            "rank": 18213,
            "rankPercent": 49.0559176480461,
            "total": 35749
          }
        }
      ],
      "bestPerformanceAverage": 43.7985,
      "medianPerformanceAverage": 32.40880000000001,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.8072,
          "medianPerformance": 89.818,
          "totalKills": 6,
          "fastestKill": 24379,
          "bestAmount": 3323.229008573,
          "spec": "Combat",
          "allStars": {
            "points": 109.91,
            "rank": 345,
            "rankPercent": 98.66986311963498,
            "total": 25862
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.1354,
          "medianPerformance": 91.4317,
          "totalKills": 6,
          "fastestKill": 114560,
          "bestAmount": 1620.2950418994,
          "spec": "Combat",
          "allStars": {
            "points": 112.07,
            "rank": 531,
            "rankPercent": 97.97129186602871,
            "total": 26125
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.3081,
          "medianPerformance": 86.8081,
          "totalKills": 6,
          "fastestKill": 198308,
          "bestAmount": 1676.4880892349,
          "spec": "Combat",
          "allStars": {
            "points": 106.86,
            "rank": 985,
            "rankPercent": 96.12400047268287,
            "total": 25387
          }
        }
      ],
      "bestPerformanceAverage": 98.08356666666667,
      "medianPerformanceAverage": 89.35260000000001,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.6367,
          "medianPerformance": 86.3637,
          "totalKills": 8,
          "fastestKill": 18587,
          "bestAmount": 2718.1694441379,
          "spec": "Destruction",
          "allStars": {
            "points": 111.44,
            "rank": 660,
            "rankPercent": 98.4251027626422,
            "total": 41844
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.4186,
          "medianPerformance": 90.0613,
          "totalKills": 8,
          "fastestKill": 101676,
          "bestAmount": 1582.7373211964,
          "spec": "Destruction",
          "allStars": {
            "points": 103.96,
            "rank": 3654,
            "rankPercent": 91.34134490032947,
            "total": 42189
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.296,
          "medianPerformance": 97.296,
          "totalKills": 8,
          "fastestKill": 163693,
          "bestAmount": 1800.7795079814,
          "spec": "Affliction",
          "allStars": {
            "points": 108.74,
            "rank": 255,
            "rankPercent": 97.21582812671271,
            "total": 9123
          }
        }
      ],
      "bestPerformanceAverage": 98.1171,
      "medianPerformanceAverage": 91.24033333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 25686,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_cloth_05.jpg",
          "itemLevel": 112,
          "permanentEnchantID": 911,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 91.3395,
          "medianPerformance": 73.4205,
          "totalKills": 5,
          "fastestKill": 24379,
          "bestAmount": 2724.8861725255,
          "spec": "Arms",
          "allStars": {
            "points": 99.26,
            "rank": 1205,
            "rankPercent": 90.35797229118283,
            "total": 12487
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 92.975,
          "medianPerformance": 67.6398,
          "totalKills": 5,
          "fastestKill": 114560,
          "bestAmount": 1360.5097765363,
          "spec": "Arms",
          "allStars": {
            "points": 103.66,
            "rank": 1061,
            "rankPercent": 92.05695016860247,
            "total": 13345
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 58.7664,
          "medianPerformance": 55.6993,
          "totalKills": 5,
          "fastestKill": 198308,
          "bestAmount": 1030.9568953345,
          "spec": "Arms",
          "allStars": {
            "points": 59.17,
            "rank": 5657,
            "rankPercent": 54.533762057877816,
            "total": 12440
          }
        }
      ],
      "bestPerformanceAverage": 81.02696666666667,
      "medianPerformanceAverage": 65.58653333333332,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "rankPercent": 96.3398,
          "medianPerformance": 82.0478,
          "totalKills": 5,
          "fastestKill": 18587,
          "bestAmount": 1558.83144133,
          "spec": "Balance",
          "allStars": {
            "points": 106.44,
            "rank": 529,
            "rankPercent": 96.13978651849686,
            "total": 13678
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 91.0203,
          "medianPerformance": 85.0452,
          "totalKills": 5,
          "fastestKill": 101676,
          "bestAmount": 1149.0125496676,
          "spec": "Balance",
          "allStars": {
            "points": 102.96,
            "rank": 1241,
            "rankPercent": 90.63090290895353,
            "total": 13235
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.7231,
          "medianPerformance": 75.6209,
          "totalKills": 5,
          "fastestKill": 163693,
          "bestAmount": 1416.4747423531,
          "spec": "Balance",
          "allStars": {
            "points": 108.92,
            "rank": 280,
            "rankPercent": 97.77582908163265,
            "total": 12544
          }
        }
      ],
      "bestPerformanceAverage": 95.02773333333333,
      "medianPerformanceAverage": 80.90463333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 99.7246,
          "medianPerformance": 27.595,
          "totalKills": 5,
          "fastestKill": 27183,
          "bestAmount": 1287.9005260641,
          "spec": "Guardian",
          "allStars": {
            "points": 113.65,
            "rank": 43,
            "rankPercent": 99.67343130394215,
            "total": 12861
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.1741,
          "medianPerformance": 91.6881,
          "totalKills": 5,
          "fastestKill": 129192,
          "bestAmount": 847.65761256957,
          "spec": "Guardian",
          "allStars": {
            "points": 106.23,
            "rank": 918,
            "rankPercent": 94.33566001606029,
            "total": 16189
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 85.2189,
          "medianPerformance": 54.4677,
          "totalKills": 5,
          "fastestKill": 220362,
          "bestAmount": 1261.8827202512,
          "spec": "Feral",
          "allStars": {
            "points": 91.19,
            "rank": 3214,
            "rankPercent": 83.47902097902097,
            "total": 19448
          }
        }
      ],
      "bestPerformanceAverage": 93.70586666666667,
      "medianPerformanceAverage": 57.91693333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "rankPercent": 99.5648,
          "medianPerformance": 86.9693,
          "totalKills": 10,
          "fastestKill": 18587,
          "bestAmount": 2231.2906870393,
          "spec": "Enhancement",
          "allStars": {
            "points": 113.73,
            "rank": 118,
            "rankPercent": 99.52710076391415,
            "total": 24741
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.7125,
          "medianPerformance": 87.5136,
          "totalKills": 10,
          "fastestKill": 101676,
          "bestAmount": 1785.5970670391,
          "spec": "Enhancement",
          "allStars": {
            "points": 116.94,
            "rank": 93,
            "rankPercent": 99.63141025641026,
            "total": 24960
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 88.9027,
          "medianPerformance": 78.4969,
          "totalKills": 10,
          "fastestKill": 163693,
          "bestAmount": 1516.5632766877,
          "spec": "Enhancement",
          "allStars": {
            "points": 94.6,
            "rank": 3561,
            "rankPercent": 85.31353135313532,
            "total": 24240
          }
        }
      ],
      "bestPerformanceAverage": 96.06,
      "medianPerformanceAverage": 84.3266,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 29286,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 90.40493388624714,
          "medianPerformance": 75.89715401665305,
          "totalKills": 5,
          "fastestKill": 27183,
          "bestAmount": 239.45112754295,
          "spec": "Shadow",
          "allStars": {
            "points": 95.13775257441341,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 77.96680497210767,
          "medianPerformance": 49.91887836972873,
          "totalKills": 5,
          "fastestKill": 129192,
          "bestAmount": 211.31887182308,
          "spec": "Shadow",
          "allStars": {
            "points": 83.36109592801627,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 82.1893525573841,
          "medianPerformance": 80.70504253245346,
          "totalKills": 5,
          "fastestKill": 220362,
          "bestAmount": 192.61395790358,
          "spec": "Shadow",
          "allStars": {
            "points": 88.53054080864509,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 83.5203638052463,
      "medianPerformanceAverage": 68.84035830627842,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
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
          "id": 28477,
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
          "id": 30841,
          "slot": 13,
          "quality": 3,
          "icon": "inv_misc_book_11.jpg",
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
          "id": 27538,
          "slot": 16,
          "quality": 3,
          "icon": "inv_hammer_23.jpg",
          "itemLevel": 115,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 2.50428,
          "medianPerformance": 2.50428,
          "totalKills": 2,
          "fastestKill": 27183,
          "bestAmount": 296.72149874343,
          "spec": "Holy",
          "allStars": {
            "points": 10.49,
            "rank": 26058,
            "rankPercent": 1.2768053345457302,
            "total": 26394
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 41.0444,
          "medianPerformance": 41.0444,
          "totalKills": 2,
          "fastestKill": 129192,
          "bestAmount": 603.87147124863,
          "spec": "Holy",
          "allStars": {
            "points": 45.27,
            "rank": 15849,
            "rankPercent": 40.26160051264654,
            "total": 26529
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 24.1564,
          "medianPerformance": 24.1564,
          "totalKills": 2,
          "fastestKill": 251234,
          "bestAmount": 491.11885941693,
          "spec": "Holy",
          "allStars": {
            "points": 28.44,
            "rank": 19613,
            "rankPercent": 23.525053616689412,
            "total": 25645
          }
        }
      ],
      "bestPerformanceAverage": 22.568360000000002,
      "medianPerformanceAverage": 22.568360000000002,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
      "error": null,
      "partial": false
    },
    "zabyjaka": {
      "characterName": "Zabyjaka",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 106560073,
      "gear": [],
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 72.7435,
          "medianPerformance": 45.4759,
          "totalKills": 3,
          "fastestKill": 29964,
          "bestAmount": 1372.8474169003,
          "spec": "Elemental",
          "allStars": {
            "points": 74.06,
            "rank": 6997,
            "rankPercent": 66.11121875605502,
            "total": 20644
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 43.4671,
          "medianPerformance": 36.3658,
          "totalKills": 3,
          "fastestKill": 132466,
          "bestAmount": 802.587867046,
          "spec": "Elemental",
          "allStars": {
            "points": 49.9,
            "rank": 12990,
            "rankPercent": 37.78022609695344,
            "total": 20876
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 71.4963,
          "medianPerformance": 18.8346,
          "totalKills": 3,
          "fastestKill": 198308,
          "bestAmount": 1098.0646267422,
          "spec": "Elemental",
          "allStars": {
            "points": 73.81,
            "rank": 7002,
            "rankPercent": 65.38613665578957,
            "total": 20226
          }
        }
      ],
      "bestPerformanceAverage": 62.568966666666675,
      "medianPerformanceAverage": 33.55876666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
      "error": null,
      "partial": true
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 97.6414,
          "medianPerformance": 51.8249,
          "totalKills": 9,
          "fastestKill": 18587,
          "bestAmount": 1628.5037929736,
          "spec": "Feral",
          "allStars": {
            "points": 108.9,
            "rank": 463,
            "rankPercent": 97.61104503852319,
            "total": 19339
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.1344,
          "medianPerformance": 91.487,
          "totalKills": 9,
          "fastestKill": 101676,
          "bestAmount": 1598.5509776536,
          "spec": "Feral",
          "allStars": {
            "points": 111.57,
            "rank": 514,
            "rankPercent": 96.58796142334553,
            "total": 15035
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 99.3201,
          "medianPerformance": 91.7325,
          "totalKills": 9,
          "fastestKill": 163693,
          "bestAmount": 1985.2712089094,
          "spec": "Feral",
          "allStars": {
            "points": 111.26,
            "rank": 131,
            "rankPercent": 99.33155080213903,
            "total": 19448
          }
        }
      ],
      "bestPerformanceAverage": 98.03196666666668,
      "medianPerformanceAverage": 78.34813333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-28T21:51:38.555Z",
      "error": null,
      "partial": false
    }
  }
};
