// AUTO-GENERATED — do not edit manually.
// Run `npm run bake:wcl` to regenerate.
// Generated: 2026-04-11T16:13:16.969Z

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
  "generatedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 5107,
          "slot": 4,
          "quality": 2,
          "icon": "inv_shirt_12.jpg",
          "itemLevel": 14,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29056,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_64.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
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
          "rankPercent": 79.33430460124694,
          "medianPerformance": 16.737661634233163,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 164.89787745294,
          "spec": "Shadow",
          "allStars": {
            "points": 83.42618220432065,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 60.43743789710873,
          "medianPerformance": 11.328174372688228,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 160.56195552066,
          "spec": "Shadow",
          "allStars": {
            "points": 64.5360680717636,
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
          "totalKills": 7,
          "fastestKill": 198308,
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
      "bestPerformanceAverage": 70.42695995117657,
      "medianPerformanceAverage": 21.60186756931651,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
      "error": null,
      "partial": false
    },
    "alpine": {
      "characterName": "Alpine",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 105988641,
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
      "error": null,
      "partial": true
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
          "permanentEnchantID": 2841,
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
          "permanentEnchantID": 2841,
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
          "rankPercent": 83.4367,
          "medianPerformance": 76.5561,
          "totalKills": 7,
          "fastestKill": 31935,
          "bestAmount": 1619.1012995146,
          "spec": "Destruction",
          "allStars": {
            "points": 87.12,
            "rank": 7444,
            "rankPercent": 79.38455572789718,
            "total": 36104
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 64.7408,
          "medianPerformance": 49.6151,
          "totalKills": 7,
          "fastestKill": 134241,
          "bestAmount": 1171.5198784276,
          "spec": "Destruction",
          "allStars": {
            "points": 73.69,
            "rank": 13109,
            "rankPercent": 64.04531365718518,
            "total": 36457
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 71.1278,
          "medianPerformance": 42.9865,
          "totalKills": 7,
          "fastestKill": 199708,
          "bestAmount": 1058.4904914403,
          "spec": "Affliction",
          "allStars": {
            "points": 69.19,
            "rank": 3026,
            "rankPercent": 60.760150473472564,
            "total": 7709
          }
        }
      ],
      "bestPerformanceAverage": 73.10176666666666,
      "medianPerformanceAverage": 56.3859,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28599,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_chain_07.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 866,
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
          "id": 28730,
          "slot": 12,
          "quality": 4,
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 57.57814064592281,
          "medianPerformance": 57.407893112115985,
          "totalKills": 2,
          "fastestKill": 116728,
          "bestAmount": 894.30128161195,
          "spec": "Retribution",
          "allStars": {
            "points": 60.65,
            "rank": 6147,
            "rankPercent": 56.67559565769068,
            "total": 14186
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 56.992463674273274,
          "medianPerformance": 51.395328911060986,
          "totalKills": 2,
          "fastestKill": 196499,
          "bestAmount": 884.11361839062,
          "spec": "Retribution",
          "allStars": {
            "points": 63.93,
            "rank": 7126,
            "rankPercent": 56.04565083281925,
            "total": 16210
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 75.01296549653463,
          "medianPerformance": 74.97456702452368,
          "totalKills": 3,
          "fastestKill": 237599,
          "bestAmount": 1294.6964510899,
          "spec": "Retribution",
          "allStars": {
            "points": 80.54,
            "rank": 3611,
            "rankPercent": 74.01569135535881,
            "total": 13893
          }
        }
      ],
      "bestPerformanceAverage": 63.19452327224357,
      "medianPerformanceAverage": 61.25926301590022,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29100,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
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
          "id": 29384,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_46.jpg",
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
          "rankPercent": 85.3605,
          "medianPerformance": 83.8102,
          "totalKills": 3,
          "fastestKill": 29964,
          "bestAmount": 763.51621946336,
          "spec": "Guardian",
          "allStars": {
            "points": 93.02,
            "rank": 1627,
            "rankPercent": 84.75529720607538,
            "total": 10666
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 76.6256,
          "medianPerformance": 73.7798,
          "totalKills": 3,
          "fastestKill": 132466,
          "bestAmount": 663.75399468121,
          "spec": "Guardian",
          "allStars": {
            "points": 85.44,
            "rank": 3257,
            "rankPercent": 76.18316143661765,
            "total": 13671
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 82.9346,
          "medianPerformance": 78.8715,
          "totalKills": 3,
          "fastestKill": 198308,
          "bestAmount": 778.85713141186,
          "spec": "Guardian",
          "allStars": {
            "points": 90.34,
            "rank": 1492,
            "rankPercent": 83.28850033624748,
            "total": 8922
          }
        }
      ],
      "bestPerformanceAverage": 81.64023333333334,
      "medianPerformanceAverage": 78.8205,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "temporaryEnchantID": null
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
          "medianPerformance": 76.2561,
          "totalKills": 6,
          "fastestKill": 26349,
          "bestAmount": 1345.9150981177,
          "spec": "Retribution",
          "allStars": {
            "points": 86.19,
            "rank": 2824,
            "rankPercent": 80.10009868884816,
            "total": 14186
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 82.5525,
          "medianPerformance": 76.9168,
          "totalKills": 6,
          "fastestKill": 123192,
          "bestAmount": 1206.4831730406,
          "spec": "Retribution",
          "allStars": {
            "points": 92.09,
            "rank": 3032,
            "rankPercent": 81.30166563849475,
            "total": 16210
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.1204,
          "medianPerformance": 68.345,
          "totalKills": 6,
          "fastestKill": 198308,
          "bestAmount": 1638.031526028,
          "spec": "Retribution",
          "allStars": {
            "points": 100.54,
            "rank": 1075,
            "rankPercent": 92.26948823148348,
            "total": 13893
          }
        }
      ],
      "bestPerformanceAverage": 87.43173333333334,
      "medianPerformanceAverage": 73.8393,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "rankPercent": 91.9198,
          "medianPerformance": 89.7872,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 2317.1389239417,
          "spec": "BeastMastery",
          "allStars": {
            "points": 102.66,
            "rank": 2736,
            "rankPercent": 92.11383754793691,
            "total": 34681
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 92.9828,
          "medianPerformance": 77.1833,
          "totalKills": 5,
          "fastestKill": 130187,
          "bestAmount": 1816.8096660957,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.97,
            "rank": 2415,
            "rankPercent": 93.09851906912917,
            "total": 34978
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.6886,
          "medianPerformance": 84.6055,
          "totalKills": 5,
          "fastestKill": 198308,
          "bestAmount": 1807.0224095851,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.29,
            "rank": 3371,
            "rankPercent": 89.9782912540518,
            "total": 33627
          }
        }
      ],
      "bestPerformanceAverage": 91.86373333333334,
      "medianPerformanceAverage": 83.85866666666668,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29095,
          "slot": 3,
          "quality": 4,
          "icon": "inv_shoulder_44.jpg",
          "itemLevel": 120,
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
          "id": 29285,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29320,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_38.jpg",
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
          "id": 28040,
          "slot": 14,
          "quality": 3,
          "icon": "inv_datacrystal06.jpg",
          "itemLevel": 88,
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
          "id": 30832,
          "slot": 16,
          "quality": 4,
          "icon": "inv_hammer_08.jpg",
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
          "rankPercent": 73.2847,
          "medianPerformance": 73.2847,
          "totalKills": 1,
          "fastestKill": 35242,
          "bestAmount": 985.92588388854,
          "spec": "Balance",
          "allStars": {
            "points": 79.52,
            "rank": 3026,
            "rankPercent": 72.60956175298804,
            "total": 11044
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 62.0244,
          "medianPerformance": 62.0244,
          "totalKills": 1,
          "fastestKill": 134241,
          "bestAmount": 841.24075357007,
          "spec": "Balance",
          "allStars": {
            "points": 70.79,
            "rank": 4087,
            "rankPercent": 61.57968970380818,
            "total": 10635
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 57.9936,
          "medianPerformance": 57.9936,
          "totalKills": 1,
          "fastestKill": 199708,
          "bestAmount": 794.28966290785,
          "spec": "Balance",
          "allStars": {
            "points": 64.92,
            "rank": 4253,
            "rankPercent": 57.60717846460618,
            "total": 10030
          }
        }
      ],
      "bestPerformanceAverage": 64.43423333333334,
      "medianPerformanceAverage": 64.43423333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
            "points": 73.86,
            "rank": 3190,
            "rankPercent": 69.24189814814815,
            "total": 10368
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
            "points": 86.88,
            "rank": 2635,
            "rankPercent": 76.18875429397939,
            "total": 11062
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
            "points": 67.26,
            "rank": 4042,
            "rankPercent": 60.73267903993781,
            "total": 10291
          }
        }
      ],
      "bestPerformanceAverage": 70.05083333333333,
      "medianPerformanceAverage": 63.36596666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "totalKills": 4,
          "fastestKill": 29964,
          "bestAmount": 789.77859355283,
          "spec": "Frost",
          "allStars": {
            "points": 77.45,
            "rank": 4496,
            "rankPercent": 72.37416262061336,
            "total": 16271
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 91.5178,
          "medianPerformance": 66.9143,
          "totalKills": 4,
          "fastestKill": 130187,
          "bestAmount": 1419.3122201141,
          "spec": "Arcane",
          "allStars": {
            "points": 103.33,
            "rank": 2680,
            "rankPercent": 91.49091602083598,
            "total": 31484
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 91.2426,
          "medianPerformance": 77.2413,
          "totalKills": 4,
          "fastestKill": 198308,
          "bestAmount": 1592.9652117879,
          "spec": "Arcane",
          "allStars": {
            "points": 100.51,
            "rank": 2608,
            "rankPercent": 91.33311170212765,
            "total": 30080
          }
        }
      ],
      "bestPerformanceAverage": 85.33979999999998,
      "medianPerformanceAverage": 62.89543333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28730,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_24.jpg",
          "itemLevel": 115,
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
          "id": 29124,
          "slot": 17,
          "quality": 4,
          "icon": "inv_sword_draenei_01.jpg",
          "itemLevel": 100,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 74.8431,
          "medianPerformance": 57.5634,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 1361.3799385176,
          "spec": "Arms",
          "allStars": {
            "points": 72.07,
            "rank": 3354,
            "rankPercent": 67.66010802469135,
            "total": 10368
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 88.7221,
          "medianPerformance": 61.6414,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1245.0628711008,
          "spec": "Arms",
          "allStars": {
            "points": 100.95,
            "rank": 1260,
            "rankPercent": 88.61869463026578,
            "total": 11062
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 65.9895,
          "medianPerformance": 49.0984,
          "totalKills": 5,
          "fastestKill": 198723,
          "bestAmount": 1096.9423249342,
          "spec": "Arms",
          "allStars": {
            "points": 69.78,
            "rank": 3800,
            "rankPercent": 63.0842483723642,
            "total": 10291
          }
        }
      ],
      "bestPerformanceAverage": 76.51823333333334,
      "medianPerformanceAverage": 56.10106666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "rankPercent": 91.6475,
          "medianPerformance": 83.178,
          "totalKills": 5,
          "fastestKill": 29404,
          "bestAmount": 1399.4694599374,
          "spec": "Enhancement",
          "allStars": {
            "points": 96.93,
            "rank": 2513,
            "rankPercent": 88.02897445672893,
            "total": 20984
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.2111,
          "medianPerformance": 73.7216,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1373.2060523411,
          "spec": "Enhancement",
          "allStars": {
            "points": 103.63,
            "rank": 2050,
            "rankPercent": 90.33262561924982,
            "total": 21195
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 86.9489,
          "medianPerformance": 60.9221,
          "totalKills": 5,
          "fastestKill": 220362,
          "bestAmount": 1385.3207771872,
          "spec": "Enhancement",
          "allStars": {
            "points": 86.82,
            "rank": 4429,
            "rankPercent": 78.45255474452554,
            "total": 20550
          }
        }
      ],
      "bestPerformanceAverage": 91.6025,
      "medianPerformanceAverage": 72.60723333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 35346,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_leather_01.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 24255,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_03.jpg",
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
          "id": 29080,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_47.jpg",
          "itemLevel": 120,
          "permanentEnchantID": null,
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
          "id": 28781,
          "slot": 17,
          "quality": 4,
          "icon": "inv_offhand_draenei_a_01.jpg",
          "itemLevel": 125,
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
          "medianPerformance": 78.5842,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 1530.8370044053,
          "spec": "Arcane",
          "allStars": {
            "points": 80.55,
            "rank": 7616,
            "rankPercent": 73.64322303751904,
            "total": 28892
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.1499,
          "medianPerformance": 79.0118,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1406.5199038899,
          "spec": "Arcane",
          "allStars": {
            "points": 102.64,
            "rank": 2864,
            "rankPercent": 90.90649218650744,
            "total": 31484
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 96.4031,
          "medianPerformance": 92.6919,
          "totalKills": 7,
          "fastestKill": 198308,
          "bestAmount": 1781.8343183331,
          "spec": "Arcane",
          "allStars": {
            "points": 105.87,
            "rank": 1322,
            "rankPercent": 95.60837765957447,
            "total": 30080
          }
        }
      ],
      "bestPerformanceAverage": 92.11590000000001,
      "medianPerformanceAverage": 83.4293,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 24088,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_65.jpg",
          "itemLevel": 101,
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
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 934.19105089377,
          "spec": "Guardian",
          "allStars": {
            "points": 104.56,
            "rank": 595,
            "rankPercent": 94.43090193137071,
            "total": 10666
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.6804,
          "medianPerformance": 95.3516,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 864.26437356871,
          "spec": "Guardian",
          "allStars": {
            "points": 108.39,
            "rank": 505,
            "rankPercent": 96.31336405529954,
            "total": 13671
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.5486,
          "medianPerformance": 86.377,
          "totalKills": 7,
          "fastestKill": 198723,
          "bestAmount": 960.88022020602,
          "spec": "Guardian",
          "allStars": {
            "points": 103.98,
            "rank": 423,
            "rankPercent": 95.27011880744227,
            "total": 8922
          }
        }
      ],
      "bestPerformanceAverage": 97.29466666666667,
      "medianPerformanceAverage": 89.86336666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "medianPerformance": 85.7164,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 2648.7912254735,
          "spec": "Destruction",
          "allStars": {
            "points": 111.23,
            "rank": 521,
            "rankPercent": 98.5597163749169,
            "total": 36104
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 87.2709,
          "medianPerformance": 82.9644,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1447.4266431269,
          "spec": "Destruction",
          "allStars": {
            "points": 99.18,
            "rank": 4652,
            "rankPercent": 87.24250486874949,
            "total": 36457
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.803,
          "medianPerformance": 89.6244,
          "totalKills": 8,
          "fastestKill": 198308,
          "bestAmount": 2075.7305666273,
          "spec": "Destruction",
          "allStars": {
            "points": 110.18,
            "rank": 734,
            "rankPercent": 97.94510947268088,
            "total": 35671
          }
        }
      ],
      "bestPerformanceAverage": 94.85836666666667,
      "medianPerformanceAverage": 86.10173333333331,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "rankPercent": 97.1991,
          "medianPerformance": 91.4769,
          "totalKills": 6,
          "fastestKill": 26349,
          "bestAmount": 2245.6128417902,
          "spec": "Elemental",
          "allStars": {
            "points": 109.5,
            "rank": 556,
            "rankPercent": 96.67286133924824,
            "total": 16681
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.7572,
          "medianPerformance": 88.6657,
          "totalKills": 6,
          "fastestKill": 123192,
          "bestAmount": 1325.97782732,
          "spec": "Elemental",
          "allStars": {
            "points": 111.07,
            "rank": 457,
            "rankPercent": 97.29873822640839,
            "total": 16881
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 93.9815,
          "medianPerformance": 72.297,
          "totalKills": 6,
          "fastestKill": 198723,
          "bestAmount": 1406.3041722257,
          "spec": "Elemental",
          "allStars": {
            "points": 104.58,
            "rank": 958,
            "rankPercent": 94.15000916926462,
            "total": 16359
          }
        }
      ],
      "bestPerformanceAverage": 96.31259999999999,
      "medianPerformanceAverage": 84.14653333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
            "points": 109.23,
            "rank": 1085,
            "rankPercent": 96.874369251175,
            "total": 34681
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
            "points": 108.35,
            "rank": 2033,
            "rankPercent": 94.19063411287095,
            "total": 34978
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
            "points": 101.07,
            "rank": 2857,
            "rankPercent": 91.50682487287001,
            "total": 33627
          }
        }
      ],
      "bestPerformanceAverage": 95.33120000000001,
      "medianPerformanceAverage": 88.45676666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
            "points": 83.03,
            "rank": 5079,
            "rankPercent": 75.80060998856271,
            "total": 20984
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
            "points": 74.74,
            "rank": 7571,
            "rankPercent": 64.28402925218212,
            "total": 21195
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
            "points": 50.31,
            "rank": 11537,
            "rankPercent": 43.86374695863747,
            "total": 20550
          }
        }
      ],
      "bestPerformanceAverage": 64.322,
      "medianPerformanceAverage": 47.7947,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 1899.9582526851,
          "spec": "Affliction",
          "allStars": {
            "points": 108,
            "rank": 336,
            "rankPercent": 95.68132009797603,
            "total": 7757
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.7114,
          "medianPerformance": 93.9422,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1746.9884408078,
          "spec": "Destruction",
          "allStars": {
            "points": 112.31,
            "rank": 771,
            "rankPercent": 97.88792275831801,
            "total": 36457
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.7789,
          "medianPerformance": 91.4635,
          "totalKills": 7,
          "fastestKill": 198308,
          "bestAmount": 2135.430744095,
          "spec": "Destruction",
          "allStars": {
            "points": 111.01,
            "rank": 562,
            "rankPercent": 98.42729388018279,
            "total": 35671
          }
        }
      ],
      "bestPerformanceAverage": 98.97879999999999,
      "medianPerformanceAverage": 94.61726666666668,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 752.07468879668,
          "spec": "Balance",
          "allStars": {
            "points": 48.03,
            "rank": 6320,
            "rankPercent": 42.78341180731619,
            "total": 11044
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 82.3539,
          "medianPerformance": 54.5462,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 908.13526852393,
          "spec": "Balance",
          "allStars": {
            "points": 80.51,
            "rank": 3132,
            "rankPercent": 70.5594734367654,
            "total": 10635
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 61.7104,
          "medianPerformance": 39.3287,
          "totalKills": 7,
          "fastestKill": 198723,
          "bestAmount": 756.6411537668,
          "spec": "Balance",
          "allStars": {
            "points": 59.87,
            "rank": 4725,
            "rankPercent": 52.901296111665005,
            "total": 10030
          }
        }
      ],
      "bestPerformanceAverage": 68.0606,
      "medianPerformanceAverage": 46.770900000000005,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28230,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_cloth_39.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 29250,
          "slot": 6,
          "quality": 4,
          "icon": "inv_belt_15.jpg",
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
          "rankPercent": 96.4816,
          "medianPerformance": 89.6269,
          "totalKills": 2,
          "fastestKill": 29964,
          "bestAmount": 1434.1876918969,
          "spec": "Holy",
          "allStars": {
            "points": 104.33,
            "rank": 924,
            "rankPercent": 95.88754232757084,
            "total": 22444
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 82.9673,
          "medianPerformance": 72.6738,
          "totalKills": 2,
          "fastestKill": 132488,
          "bestAmount": 849.89583962321,
          "spec": "Holy",
          "allStars": {
            "points": 88.7,
            "rank": 4121,
            "rankPercent": 81.73596950084227,
            "total": 22558
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 80.5361,
          "medianPerformance": 71.2763,
          "totalKills": 2,
          "fastestKill": 198308,
          "bestAmount": 795.86804364927,
          "spec": "Holy",
          "allStars": {
            "points": 86.83,
            "rank": 4561,
            "rankPercent": 79.07296925195044,
            "total": 21790
          }
        }
      ],
      "bestPerformanceAverage": 86.66166666666668,
      "medianPerformanceAverage": 77.859,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "medianPerformance": 93.85017892991686,
          "totalKills": 4,
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
          "totalKills": 4,
          "fastestKill": 131902,
          "bestAmount": 21.806955714013,
          "spec": "Restoration",
          "allStars": {
            "points": 75.80996455769068,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.05399458275605,
          "medianPerformance": 86.97665897888717,
          "totalKills": 4,
          "fastestKill": 198723,
          "bestAmount": 118.67214757492,
          "spec": "Restoration",
          "allStars": {
            "points": 93.06951246636126,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 88.33262869365132,
      "medianPerformanceAverage": 73.60894596960135,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28183,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_62.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28254,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_30naxxramas.jpg",
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
          "id": 28585,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_cloth_09.jpg",
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
          "id": 27468,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_13.jpg",
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
          "id": 29288,
          "slot": 12,
          "quality": 3,
          "icon": "inv_jewelry_ring_62.jpg",
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
          "id": 13968,
          "slot": 14,
          "quality": 3,
          "icon": "inv_jewelry_talisman_08.jpg",
          "itemLevel": 63,
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
          "rankPercent": 51.7797,
          "medianPerformance": 51.7797,
          "totalKills": 1,
          "fastestKill": 29404,
          "bestAmount": 798.63283906951,
          "spec": "Balance",
          "allStars": {
            "points": 54.71,
            "rank": 5619,
            "rankPercent": 49.13074972835929,
            "total": 11044
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
            "points": 42.23,
            "rank": 7274,
            "rankPercent": 31.61259990597085,
            "total": 10635
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
            "points": 36.79,
            "rank": 6900,
            "rankPercent": 31.216350947158524,
            "total": 10030
          }
        }
      ],
      "bestPerformanceAverage": 39.358866666666664,
      "medianPerformanceAverage": 39.358866666666664,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "temporaryEnchantID": 2678
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
          "rankPercent": 97.2156,
          "medianPerformance": 70.2885,
          "totalKills": 5,
          "fastestKill": 35242,
          "bestAmount": 2247.8343775538,
          "spec": "Elemental",
          "allStars": {
            "points": 109.54,
            "rank": 552,
            "rankPercent": 96.69684071698339,
            "total": 16681
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 95.619,
          "medianPerformance": 72.2847,
          "totalKills": 5,
          "fastestKill": 134241,
          "bestAmount": 1195.1694515302,
          "spec": "Elemental",
          "allStars": {
            "points": 104.06,
            "rank": 1410,
            "rankPercent": 91.65333807238908,
            "total": 16881
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 87.3576,
          "medianPerformance": 84.702,
          "totalKills": 5,
          "fastestKill": 199708,
          "bestAmount": 1288.2308169928,
          "spec": "Elemental",
          "allStars": {
            "points": 97.16,
            "rank": 2027,
            "rankPercent": 87.61537991319763,
            "total": 16359
          }
        }
      ],
      "bestPerformanceAverage": 93.3974,
      "medianPerformanceAverage": 75.7584,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "rankPercent": 96.9542,
          "medianPerformance": 91.9328,
          "totalKills": 3,
          "fastestKill": 29404,
          "bestAmount": 1831.8772506654,
          "spec": "Affliction",
          "allStars": {
            "points": 106.45,
            "rank": 422,
            "rankPercent": 94.57264406342658,
            "total": 7757
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 92.9295,
          "medianPerformance": 70.1276,
          "totalKills": 3,
          "fastestKill": 130187,
          "bestAmount": 1334.11438191,
          "spec": "Affliction",
          "allStars": {
            "points": 104.6,
            "rank": 704,
            "rankPercent": 90.91026635634859,
            "total": 7734
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.7733,
          "medianPerformance": 88.5547,
          "totalKills": 3,
          "fastestKill": 220362,
          "bestAmount": 1378.7589161228,
          "spec": "Affliction",
          "allStars": {
            "points": 97.34,
            "rank": 1053,
            "rankPercent": 86.35361266052665,
            "total": 7709
          }
        }
      ],
      "bestPerformanceAverage": 93.55233333333335,
      "medianPerformanceAverage": 83.53836666666668,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28192,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_18.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 3003,
          "temporaryEnchantID": null
        },
        {
          "id": 27546,
          "slot": 2,
          "quality": 3,
          "icon": "inv_misc_noose_01.jpg",
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
          "id": 28204,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_17.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30939,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_11.jpg",
          "itemLevel": 109,
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
          "id": 27528,
          "slot": 10,
          "quality": 3,
          "icon": "inv_gauntlets_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": 684,
          "temporaryEnchantID": null
        },
        {
          "id": 27740,
          "slot": 11,
          "quality": 3,
          "icon": "inv_jewelry_ring_24.jpg",
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
          "id": 29792,
          "slot": 15,
          "quality": 2,
          "icon": "inv_misc_cape_22.jpg",
          "itemLevel": 111,
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
          "id": 25197,
          "slot": 17,
          "quality": 2,
          "icon": "inv_gauntlets_02.jpg",
          "itemLevel": 120,
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 60,
          "medianPerformance": 50,
          "totalKills": 3,
          "fastestKill": 30000,
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
          "rankPercent": 52.35455211603492,
          "medianPerformance": 41.33464754786722,
          "totalKills": 3,
          "fastestKill": 132466,
          "bestAmount": 8.4776470943487,
          "spec": "Restoration",
          "allStars": {
            "points": 52.62469430848145,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 56.14408685297784,
          "medianPerformance": 37.23749227532949,
          "totalKills": 3,
          "fastestKill": 198308,
          "bestAmount": 36.806381991649,
          "spec": "Restoration",
          "allStars": {
            "points": 57.07935519853932,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 56.16621298967092,
      "medianPerformanceAverage": 42.857379941065574,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "medianPerformance": 93.48996597594672,
          "totalKills": 7,
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
          "medianPerformance": 40,
          "totalKills": 7,
          "fastestKill": 123214,
          "bestAmount": 81.873070513346,
          "spec": "Restoration",
          "allStars": {
            "points": 97.57302870651102,
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
          "totalKills": 7,
          "fastestKill": 198723,
          "bestAmount": 131.81914909787,
          "spec": "Restoration",
          "allStars": {
            "points": 101.37443534726064,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 97.5107274806226,
      "medianPerformanceAverage": 54.53808647604453,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
      "error": null,
      "partial": false
    },
    "hanzo": {
      "characterName": "Hanzo",
      "serverSlug": "spineshatter",
      "serverRegion": "EU",
      "wclId": 91345969,
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
          "id": 35411,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_22.jpg",
          "itemLevel": 115,
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
          "id": 28601,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_leather_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 28383,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_04.jpg",
          "itemLevel": 123,
          "permanentEnchantID": null,
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
          "id": 29020,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_54.jpg",
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
          "id": 28553,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_60.jpg",
          "itemLevel": 95,
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
          "id": 28529,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_10.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28767,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_66.jpg",
          "itemLevel": 125,
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
          "temporaryEnchantID": 2713
        },
        {
          "id": 28581,
          "slot": 18,
          "quality": 4,
          "icon": "inv_weapon_rifle_23.jpg",
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
          "rankPercent": 31.1214,
          "medianPerformance": 23.9194,
          "totalKills": 2,
          "fastestKill": 292742,
          "bestAmount": 903.36883672312,
          "spec": "Fury",
          "allStars": {
            "points": 35.46,
            "rank": 15317,
            "rankPercent": 31.160951053979954,
            "total": 22249
          }
        }
      ],
      "bestPerformanceAverage": 31.1214,
      "medianPerformanceAverage": 23.9194,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 27796,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_22.jpg",
          "itemLevel": 115,
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
          "medianPerformance": 93.1529,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 2643.4020266424,
          "spec": "Destruction",
          "allStars": {
            "points": 111.17,
            "rank": 535,
            "rankPercent": 98.52093950808775,
            "total": 36104
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.8173,
          "medianPerformance": 92.2602,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1823.5384485394,
          "spec": "Destruction",
          "allStars": {
            "points": 113.85,
            "rank": 440,
            "rankPercent": 98.7958416764956,
            "total": 36457
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.6236,
          "medianPerformance": 96.9996,
          "totalKills": 7,
          "fastestKill": 198723,
          "bestAmount": 2172.2665432334,
          "spec": "Destruction",
          "allStars": {
            "points": 111.47,
            "rank": 478,
            "rankPercent": 98.66277928849766,
            "total": 35671
          }
        }
      ],
      "bestPerformanceAverage": 98.97596666666668,
      "medianPerformanceAverage": 94.13756666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29285,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 110,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30340,
          "slot": 13,
          "quality": 2,
          "icon": "spell_arcane_arcaneresilience.jpg",
          "itemLevel": 114,
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
            "points": 42.45,
            "rank": 22551,
            "rankPercent": 36.78338145832749,
            "total": 35671
          }
        }
      ],
      "bestPerformanceAverage": 40.2216,
      "medianPerformanceAverage": 40.2216,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "medianPerformance": 84.8206,
          "totalKills": 3,
          "fastestKill": 29404,
          "bestAmount": 3951.5578518866,
          "spec": "Fury",
          "allStars": {
            "points": 107.42,
            "rank": 540,
            "rankPercent": 97.60646565122785,
            "total": 22519
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.8964,
          "medianPerformance": 96.8964,
          "totalKills": 3,
          "fastestKill": 130187,
          "bestAmount": 587.28786568998,
          "spec": "Gladiator",
          "allStars": {
            "points": 104.41,
            "rank": 143,
            "rankPercent": 96.40779155072097,
            "total": 3953
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 96.7422,
          "medianPerformance": 96.7422,
          "totalKills": 3,
          "fastestKill": 220362,
          "bestAmount": 539.51383135646,
          "spec": "Gladiator",
          "allStars": {
            "points": 101.87,
            "rank": 305,
            "rankPercent": 96.20758483033931,
            "total": 8016
          }
        }
      ],
      "bestPerformanceAverage": 97.2788,
      "medianPerformanceAverage": 92.81973333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 2621.4123615005,
          "spec": "BeastMastery",
          "allStars": {
            "points": 107.99,
            "rank": 1371,
            "rankPercent": 96.0497102159684,
            "total": 34681
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.1536,
          "medianPerformance": 93.6008,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 2016.283423671,
          "spec": "BeastMastery",
          "allStars": {
            "points": 112.96,
            "rank": 853,
            "rankPercent": 97.56418320086912,
            "total": 34978
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 96.7658,
          "medianPerformance": 92.1643,
          "totalKills": 7,
          "fastestKill": 198308,
          "bestAmount": 2071.3788651996,
          "spec": "BeastMastery",
          "allStars": {
            "points": 106.94,
            "rank": 1259,
            "rankPercent": 96.25895857495465,
            "total": 33627
          }
        }
      ],
      "bestPerformanceAverage": 97.9894,
      "medianPerformanceAverage": 93.41906666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28964,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_cloth_62.jpg",
          "itemLevel": 120,
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
          "id": 28966,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_23.jpg",
          "itemLevel": 120,
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
          "rankPercent": 49.4012,
          "medianPerformance": 40.4624,
          "totalKills": 3,
          "fastestKill": 29964,
          "bestAmount": 908.49018822587,
          "spec": "Affliction",
          "allStars": {
            "points": 52.56,
            "rank": 4135,
            "rankPercent": 46.7062008508444,
            "total": 7757
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 46.5205,
          "medianPerformance": 26.904,
          "totalKills": 3,
          "fastestKill": 132466,
          "bestAmount": 924.15878904359,
          "spec": "Affliction",
          "allStars": {
            "points": 56.97,
            "rank": 4170,
            "rankPercent": 46.095164209981895,
            "total": 7734
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 66.8391,
          "medianPerformance": 39.1798,
          "totalKills": 3,
          "fastestKill": 198308,
          "bestAmount": 1109.9004546638,
          "spec": "Affliction",
          "allStars": {
            "points": 75,
            "rank": 2610,
            "rankPercent": 66.15644052406279,
            "total": 7709
          }
        }
      ],
      "bestPerformanceAverage": 54.253600000000006,
      "medianPerformanceAverage": 35.5154,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
            "points": 104.94,
            "rank": 823,
            "rankPercent": 96.33755123863838,
            "total": 22444
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
            "points": 89.52,
            "rank": 3949,
            "rankPercent": 82.49844844401099,
            "total": 22558
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
            "points": 105.68,
            "rank": 1004,
            "rankPercent": 95.39697108765489,
            "total": 21790
          }
        }
      ],
      "bestPerformanceAverage": 94.76183333333331,
      "medianPerformanceAverage": 86.60359999999999,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "totalKills": 7,
          "fastestKill": 26373,
          "bestAmount": 1839.7666666667,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.47,
            "rank": 471,
            "rankPercent": 97.76019824628288,
            "total": 20984
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.102,
          "medianPerformance": 97.6644,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1553.5382664231,
          "spec": "Enhancement",
          "allStars": {
            "points": 112.21,
            "rank": 604,
            "rankPercent": 97.15498938428875,
            "total": 21195
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 95.2995,
          "medianPerformance": 93.4132,
          "totalKills": 7,
          "fastestKill": 198323,
          "bestAmount": 1704.2431950648,
          "spec": "Enhancement",
          "allStars": {
            "points": 105.59,
            "rank": 972,
            "rankPercent": 95.2749391727494,
            "total": 20550
          }
        }
      ],
      "bestPerformanceAverage": 97.43506666666667,
      "medianPerformanceAverage": 94.69383333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 30538,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_leather_09.jpg",
          "itemLevel": 110,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 98.2849,
          "medianPerformance": 95.2271,
          "totalKills": 5,
          "fastestKill": 26349,
          "bestAmount": 2742.6467797639,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.66,
            "rank": 982,
            "rankPercent": 97.17136184077737,
            "total": 34681
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 94.9158,
          "medianPerformance": 91.065,
          "totalKills": 5,
          "fastestKill": 132466,
          "bestAmount": 1851.5845575468,
          "spec": "BeastMastery",
          "allStars": {
            "points": 108.24,
            "rank": 2063,
            "rankPercent": 94.10486591571845,
            "total": 34978
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.617,
          "medianPerformance": 95.2668,
          "totalKills": 5,
          "fastestKill": 198308,
          "bestAmount": 2324.7725759929,
          "spec": "BeastMastery",
          "allStars": {
            "points": 110.53,
            "rank": 494,
            "rankPercent": 98.53391619829304,
            "total": 33627
          }
        }
      ],
      "bestPerformanceAverage": 97.27256666666666,
      "medianPerformanceAverage": 93.85296666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "rankPercent": 98.2943,
          "medianPerformance": 97.2269,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 4135.8964090242,
          "spec": "Fury",
          "allStars": {
            "points": 108.41,
            "rank": 420,
            "rankPercent": 98.1393489941827,
            "total": 22519
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.5947,
          "medianPerformance": 92.6797,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1792.3485291253,
          "spec": "Fury",
          "allStars": {
            "points": 111.47,
            "rank": 506,
            "rankPercent": 97.85343874861854,
            "total": 23526
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 99.2585,
          "medianPerformance": 95.3747,
          "totalKills": 7,
          "fastestKill": 198308,
          "bestAmount": 2126.1319277507,
          "spec": "Fury",
          "allStars": {
            "points": 107.44,
            "rank": 617,
            "rankPercent": 97.23133623983101,
            "total": 22249
          }
        }
      ],
      "bestPerformanceAverage": 99.04916666666668,
      "medianPerformanceAverage": 95.09376666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "medianPerformance": 29.2945,
          "totalKills": 3,
          "fastestKill": 29404,
          "bestAmount": 2937.1514079717,
          "spec": "BeastMastery",
          "allStars": {
            "points": 111.81,
            "rank": 544,
            "rankPercent": 98.43430120238747,
            "total": 34681
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 95.8314,
          "medianPerformance": 42.909,
          "totalKills": 3,
          "fastestKill": 131874,
          "bestAmount": 1894.444697211,
          "spec": "BeastMastery",
          "allStars": {
            "points": 109.64,
            "rank": 1687,
            "rankPercent": 95.17982732002973,
            "total": 34978
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.8817,
          "medianPerformance": 59.1245,
          "totalKills": 2,
          "fastestKill": 247445,
          "bestAmount": 1814.2213421164,
          "spec": "BeastMastery",
          "allStars": {
            "points": 99.58,
            "rank": 3289,
            "rankPercent": 90.22214292086716,
            "total": 33627
          }
        }
      ],
      "bestPerformanceAverage": 95.09106666666666,
      "medianPerformanceAverage": 43.77599999999999,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
            "points": 21.16,
            "rank": 9711,
            "rankPercent": 12.078956899674031,
            "total": 11044
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
            "points": 93.32,
            "rank": 1887,
            "rankPercent": 82.26610249177244,
            "total": 10635
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
            "points": 88,
            "rank": 2121,
            "rankPercent": 78.86340977068794,
            "total": 10030
          }
        }
      ],
      "bestPerformanceAverage": 59.56716666666667,
      "medianPerformanceAverage": 59.56716666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
            "points": 3.13,
            "rank": 10987,
            "rankPercent": 0.5251720391162622,
            "total": 11044
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
            "points": 11.45,
            "rank": 10533,
            "rankPercent": 0.9685002350728726,
            "total": 10635
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
            "points": 8.3,
            "rank": 9986,
            "rankPercent": 0.44865403788634095,
            "total": 10030
          }
        }
      ],
      "bestPerformanceAverage": 0.8324866666666666,
      "medianPerformanceAverage": 0.8324866666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29286,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
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
          "id": 28785,
          "slot": 14,
          "quality": 4,
          "icon": "inv_trinket_naxxramas06.jpg",
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
      "rankings": [
        {
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 91.9936,
          "medianPerformance": 91.9936,
          "totalKills": 5,
          "fastestKill": 29404,
          "bestAmount": 995.01641301104,
          "spec": "Frost",
          "allStars": {
            "points": 95.69,
            "rank": 1750,
            "rankPercent": 89.25081433224756,
            "total": 16271
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.1401,
          "medianPerformance": 47.2017,
          "totalKills": 5,
          "fastestKill": 130187,
          "bestAmount": 1578.3626795274,
          "spec": "Arcane",
          "allStars": {
            "points": 109.47,
            "rank": 1168,
            "rankPercent": 96.293355355101,
            "total": 31484
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 79.5396,
          "medianPerformance": 77.6675,
          "totalKills": 4,
          "fastestKill": 220362,
          "bestAmount": 1316.9875023824,
          "spec": "Arcane",
          "allStars": {
            "points": 86.73,
            "rank": 6272,
            "rankPercent": 79.15226063829788,
            "total": 30080
          }
        }
      ],
      "bestPerformanceAverage": 89.55776666666667,
      "medianPerformanceAverage": 72.2876,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28182,
          "slot": 1,
          "quality": 3,
          "icon": "inv_helmet_15.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27495,
          "slot": 2,
          "quality": 3,
          "icon": "inv_jewelry_necklace_39.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 27713,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
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
          "id": 28403,
          "slot": 5,
          "quality": 3,
          "icon": "inv_chest_chain_15.jpg",
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
          "id": 27936,
          "slot": 7,
          "quality": 3,
          "icon": "inv_pants_cloth_20.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28669,
          "slot": 8,
          "quality": 4,
          "icon": "inv_boots_plate_06.jpg",
          "itemLevel": 115,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28646,
          "slot": 9,
          "quality": 4,
          "icon": "inv_bracer_19.jpg",
          "itemLevel": 113,
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 30644,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_28.jpg",
          "itemLevel": 115,
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
          "permanentEnchantID": null,
          "temporaryEnchantID": null
        },
        {
          "id": 28773,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_60.jpg",
          "itemLevel": 125,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 64.2088,
          "medianPerformance": 56.1044,
          "totalKills": 3,
          "fastestKill": 29404,
          "bestAmount": 973.20092504421,
          "spec": "Retribution",
          "allStars": {
            "points": 67.51,
            "rank": 5231,
            "rankPercent": 63.13266600874101,
            "total": 14186
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 76.4582,
          "medianPerformance": 76.4415,
          "totalKills": 3,
          "fastestKill": 130187,
          "bestAmount": 1129.1680428921,
          "spec": "Retribution",
          "allStars": {
            "points": 86.41,
            "rank": 3840,
            "rankPercent": 76.3170882171499,
            "total": 16210
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 88.7016,
          "medianPerformance": 44.7315,
          "totalKills": 3,
          "fastestKill": 220362,
          "bestAmount": 1544.404207622,
          "spec": "Retribution",
          "allStars": {
            "points": 96.49,
            "rank": 1572,
            "rankPercent": 88.69214712445117,
            "total": 13893
          }
        }
      ],
      "bestPerformanceAverage": 76.45620000000001,
      "medianPerformanceAverage": 59.09246666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28503,
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 80,
          "medianPerformance": 80,
          "totalKills": 7,
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
          "totalKills": 7,
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
          "rankPercent": 69.95820469257282,
          "medianPerformance": 30,
          "totalKills": 7,
          "fastestKill": 198308,
          "bestAmount": 6.6865683683966,
          "spec": "Holy",
          "allStars": {
            "points": 70.12535933039945,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 69.98606823085761,
      "medianPerformanceAverage": 53.333333333333336,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 27879,
          "slot": 5,
          "quality": 4,
          "icon": "inv_chest_plate18.jpg",
          "itemLevel": 123,
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
          "id": 28381,
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
          "rankPercent": 97.0238,
          "medianPerformance": 80.8959,
          "totalKills": 6,
          "fastestKill": 29404,
          "bestAmount": 2169.7388110461,
          "spec": "Retribution",
          "allStars": {
            "points": 106.3,
            "rank": 504,
            "rankPercent": 96.45425066967432,
            "total": 14186
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.4414,
          "medianPerformance": 63.5955,
          "totalKills": 6,
          "fastestKill": 130187,
          "bestAmount": 1596.5770356552,
          "spec": "Retribution",
          "allStars": {
            "points": 111.22,
            "rank": 498,
            "rankPercent": 96.93399136335596,
            "total": 16210
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 90.535,
          "medianPerformance": 90.4121,
          "totalKills": 3,
          "fastestKill": 220362,
          "bestAmount": 1560.7508739316,
          "spec": "Retribution",
          "allStars": {
            "points": 97.35,
            "rank": 1463,
            "rankPercent": 89.47671489239185,
            "total": 13893
          }
        }
      ],
      "bestPerformanceAverage": 95.00006666666665,
      "medianPerformanceAverage": 78.30116666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "temporaryEnchantID": 2713
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
          "medianPerformance": 82.2988,
          "totalKills": 4,
          "fastestKill": 29404,
          "bestAmount": 2345.6708940034,
          "spec": "BeastMastery",
          "allStars": {
            "points": 103.23,
            "rank": 2583,
            "rankPercent": 92.55500129754044,
            "total": 34681
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 91.7419,
          "medianPerformance": 80.7535,
          "totalKills": 4,
          "fastestKill": 130187,
          "bestAmount": 1731.7963950141,
          "spec": "BeastMastery",
          "allStars": {
            "points": 103.27,
            "rank": 3480,
            "rankPercent": 90.05374807021556,
            "total": 34978
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 92.7044,
          "medianPerformance": 71.6174,
          "totalKills": 4,
          "fastestKill": 220362,
          "bestAmount": 1853.7270419919,
          "spec": "BeastMastery",
          "allStars": {
            "points": 101.01,
            "rank": 2877,
            "rankPercent": 91.44734885657358,
            "total": 33627
          }
        }
      ],
      "bestPerformanceAverage": 92.75473333333333,
      "medianPerformanceAverage": 78.22323333333334,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 32083,
          "slot": 1,
          "quality": 4,
          "icon": "inv_helmet_01.jpg",
          "itemLevel": 110,
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
          "id": 27739,
          "slot": 3,
          "quality": 3,
          "icon": "inv_shoulder_10.jpg",
          "itemLevel": 115,
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
          "id": 29069,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_plate_22.jpg",
          "itemLevel": 120,
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
          "id": 29067,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_40.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2937,
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
          "id": 27804,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_13.jpg",
          "itemLevel": 115,
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
          "rankPercent": 94.2622,
          "medianPerformance": 83.0841,
          "totalKills": 8,
          "fastestKill": 35242,
          "bestAmount": 512.73585320972,
          "spec": "Justicar",
          "allStars": {
            "points": 98.2,
            "rank": 1334,
            "rankPercent": 92.20102972150714,
            "total": 17092
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.6075,
          "medianPerformance": 93.1317,
          "totalKills": 8,
          "fastestKill": 134241,
          "bestAmount": 527.90456996568,
          "spec": "Justicar",
          "allStars": {
            "points": 113.88,
            "rank": 50,
            "rankPercent": 99.52834729040332,
            "total": 10389
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 99.2584,
          "medianPerformance": 88.8318,
          "totalKills": 8,
          "fastestKill": 199708,
          "bestAmount": 729.7554429467,
          "spec": "Justicar",
          "allStars": {
            "points": 112.2,
            "rank": 134,
            "rankPercent": 99.22800092872069,
            "total": 17228
          }
        }
      ],
      "bestPerformanceAverage": 97.70936666666667,
      "medianPerformanceAverage": 88.3492,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "medianPerformance": 95.6408,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 3194.3686502177,
          "spec": "Combat",
          "allStars": {
            "points": 110.1,
            "rank": 269,
            "rankPercent": 98.77502513940945,
            "total": 21878
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 99.5866,
          "medianPerformance": 99.0563,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1658.5219722399,
          "spec": "Combat",
          "allStars": {
            "points": 113.87,
            "rank": 222,
            "rankPercent": 99.00257255043553,
            "total": 22157
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.6196,
          "medianPerformance": 88.2392,
          "totalKills": 7,
          "fastestKill": 198723,
          "bestAmount": 1687.4594284507,
          "spec": "Combat",
          "allStars": {
            "points": 108.93,
            "rank": 603,
            "rankPercent": 97.1973929236499,
            "total": 21480
          }
        }
      ],
      "bestPerformanceAverage": 99.28016666666667,
      "medianPerformanceAverage": 94.31209999999999,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28221,
          "slot": 8,
          "quality": 3,
          "icon": "inv_boots_chain_08.jpg",
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
          "totalKills": 3,
          "fastestKill": 29443,
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
          "totalKills": 3,
          "fastestKill": 130187,
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
          "totalKills": 3,
          "fastestKill": 220362,
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
      "medianPerformanceAverage": 48.333333333333336,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29291,
          "slot": 12,
          "quality": 4,
          "icon": "inv_jewelry_ring_62.jpg",
          "itemLevel": 120,
          "permanentEnchantID": 2928,
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
          "rankPercent": 85.1509,
          "medianPerformance": 83.5756,
          "totalKills": 2,
          "fastestKill": 29964,
          "bestAmount": 897.2433586971,
          "spec": "Discipline",
          "allStars": {
            "points": 92.47,
            "rank": 838,
            "rankPercent": 84.56858407079646,
            "total": 5424
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 62.6762,
          "medianPerformance": 57.2418,
          "totalKills": 2,
          "fastestKill": 132466,
          "bestAmount": 536.21306599429,
          "spec": "Discipline",
          "allStars": {
            "points": 67.72,
            "rank": 2013,
            "rankPercent": 62.39252336448598,
            "total": 5350
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 69.1919,
          "medianPerformance": 68.4897,
          "totalKills": 2,
          "fastestKill": 198308,
          "bestAmount": 535.13629899653,
          "spec": "Discipline",
          "allStars": {
            "points": 75.39,
            "rank": 1614,
            "rankPercent": 69.18815663801337,
            "total": 5235
          }
        }
      ],
      "bestPerformanceAverage": 72.33966666666667,
      "medianPerformanceAverage": 69.76903333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29053,
          "slot": 7,
          "quality": 4,
          "icon": "inv_pants_cloth_25.jpg",
          "itemLevel": 120,
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
          "medianPerformance": 83.9356,
          "totalKills": 6,
          "fastestKill": 29404,
          "bestAmount": 962.14324079047,
          "spec": "Discipline",
          "allStars": {
            "points": 96.85,
            "rank": 632,
            "rankPercent": 88.3665191740413,
            "total": 5424
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 90.2312,
          "medianPerformance": 80.0163,
          "totalKills": 6,
          "fastestKill": 123192,
          "bestAmount": 721.82322351694,
          "spec": "Discipline",
          "allStars": {
            "points": 95.14,
            "rank": 648,
            "rankPercent": 87.90654205607477,
            "total": 5350
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 94.9699,
          "medianPerformance": 85.3771,
          "totalKills": 6,
          "fastestKill": 220362,
          "bestAmount": 772.91582185946,
          "spec": "Discipline",
          "allStars": {
            "points": 102.45,
            "rank": 345,
            "rankPercent": 93.42884431709646,
            "total": 5235
          }
        }
      ],
      "bestPerformanceAverage": 92.23926666666667,
      "medianPerformanceAverage": 83.10966666666667,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "rankPercent": 75.3409,
          "medianPerformance": 62.7382,
          "totalKills": 5,
          "fastestKill": 29964,
          "bestAmount": 1412.087051824,
          "spec": "Survival",
          "allStars": {
            "points": 72.55,
            "rank": 2993,
            "rankPercent": 63.41851082039369,
            "total": 8179
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 70.5611,
          "medianPerformance": 53.3489,
          "totalKills": 5,
          "fastestKill": 123192,
          "bestAmount": 1161.6014026885,
          "spec": "Survival",
          "allStars": {
            "points": 65.45,
            "rank": 3749,
            "rankPercent": 54.6301900496308,
            "total": 8261
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 94.1401,
          "medianPerformance": 72.6925,
          "totalKills": 5,
          "fastestKill": 198308,
          "bestAmount": 1561.6566149626,
          "spec": "Survival",
          "allStars": {
            "points": 101.79,
            "rank": 559,
            "rankPercent": 93.12892500923532,
            "total": 8121
          }
        }
      ],
      "bestPerformanceAverage": 80.01403333333333,
      "medianPerformanceAverage": 62.92653333333333,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "rankPercent": 97.3037,
          "medianPerformance": 49.2858,
          "totalKills": 4,
          "fastestKill": 29964,
          "bestAmount": 2692.731277533,
          "spec": "Combat",
          "allStars": {
            "points": 106.46,
            "rank": 676,
            "rankPercent": 96.91470883993053,
            "total": 21878
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 97.4885,
          "medianPerformance": 84.0614,
          "totalKills": 4,
          "fastestKill": 132466,
          "bestAmount": 1549.3180175952,
          "spec": "Combat",
          "allStars": {
            "points": 111.35,
            "rank": 564,
            "rankPercent": 97.45904228911856,
            "total": 22157
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 97.3081,
          "medianPerformance": 91.2589,
          "totalKills": 4,
          "fastestKill": 198308,
          "bestAmount": 1676.4880892349,
          "spec": "Combat",
          "allStars": {
            "points": 108.63,
            "rank": 650,
            "rankPercent": 96.97858472998138,
            "total": 21480
          }
        }
      ],
      "bestPerformanceAverage": 97.36676666666666,
      "medianPerformanceAverage": 74.8687,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29172,
          "slot": 11,
          "quality": 4,
          "icon": "inv_jewelry_ring_51naxxramas.jpg",
          "itemLevel": 105,
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
          "id": 28797,
          "slot": 15,
          "quality": 4,
          "icon": "inv_misc_cape_16.jpg",
          "itemLevel": 125,
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
          "rankPercent": 94.904,
          "medianPerformance": 84.7044,
          "totalKills": 6,
          "fastestKill": 29404,
          "bestAmount": 2171.6773228132,
          "spec": "Destruction",
          "allStars": {
            "points": 104.09,
            "rank": 2274,
            "rankPercent": 93.70429869266563,
            "total": 36104
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 98.4186,
          "medianPerformance": 86.5473,
          "totalKills": 6,
          "fastestKill": 123192,
          "bestAmount": 1570.1506591337,
          "spec": "Destruction",
          "allStars": {
            "points": 106.26,
            "rank": 2442,
            "rankPercent": 93.30444084812244,
            "total": 36457
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 94.221,
          "medianPerformance": 65.3088,
          "totalKills": 6,
          "fastestKill": 220362,
          "bestAmount": 1780.0982020494,
          "spec": "Destruction",
          "allStars": {
            "points": 103.17,
            "rank": 2610,
            "rankPercent": 92.68593535364862,
            "total": 35671
          }
        }
      ],
      "bestPerformanceAverage": 95.84786666666666,
      "medianPerformanceAverage": 78.85350000000001,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28773,
          "slot": 16,
          "quality": 4,
          "icon": "inv_axe_60.jpg",
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
          "id": 30279,
          "slot": 18,
          "quality": 2,
          "icon": "inv_weapon_rifle_06.jpg",
          "itemLevel": 111,
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
          "medianPerformance": 73.4205,
          "totalKills": 3,
          "fastestKill": 29964,
          "bestAmount": 2385.940191013,
          "spec": "Arms",
          "allStars": {
            "points": 95.74,
            "rank": 1248,
            "rankPercent": 87.97260802469135,
            "total": 10368
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 70.2218,
          "medianPerformance": 67.6398,
          "totalKills": 3,
          "fastestKill": 132466,
          "bestAmount": 999.70558482931,
          "spec": "Arms",
          "allStars": {
            "points": 78.35,
            "rank": 3491,
            "rankPercent": 68.4505514373531,
            "total": 11062
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 58.7664,
          "medianPerformance": 57.0897,
          "totalKills": 3,
          "fastestKill": 198308,
          "bestAmount": 1030.9568953345,
          "spec": "Arms",
          "allStars": {
            "points": 63.32,
            "rank": 4423,
            "rankPercent": 57.0304149256632,
            "total": 10291
          }
        }
      ],
      "bestPerformanceAverage": 73.22466666666666,
      "medianPerformanceAverage": 66.05,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 28507,
          "slot": 10,
          "quality": 4,
          "icon": "inv_gauntlets_17.jpg",
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
          "rankPercent": 86.3591,
          "medianPerformance": 48.0386,
          "totalKills": 3,
          "fastestKill": 29404,
          "bestAmount": 1163.6170700929,
          "spec": "Balance",
          "allStars": {
            "points": 94.98,
            "rank": 1457,
            "rankPercent": 86.8163708801159,
            "total": 11044
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 88.1402,
          "medianPerformance": 64.301,
          "totalKills": 3,
          "fastestKill": 130187,
          "bestAmount": 1053.8923517903,
          "spec": "Balance",
          "allStars": {
            "points": 98,
            "rank": 1443,
            "rankPercent": 86.44099670897978,
            "total": 10635
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 78.239,
          "medianPerformance": 75.6209,
          "totalKills": 3,
          "fastestKill": 220362,
          "bestAmount": 976.61575044699,
          "spec": "Balance",
          "allStars": {
            "points": 86.74,
            "rank": 2236,
            "rankPercent": 77.71684945164506,
            "total": 10030
          }
        }
      ],
      "bestPerformanceAverage": 84.2461,
      "medianPerformanceAverage": 62.65350000000001,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "encounterID": 50649,
          "encounterName": "High King Maulgar",
          "rankPercent": 22.3861,
          "medianPerformance": 22.3861,
          "totalKills": 3,
          "fastestKill": 29404,
          "bestAmount": 336.77782996712,
          "spec": "Feral",
          "allStars": {
            "points": 22.61,
            "rank": 12799,
            "rankPercent": 20.087418045582268,
            "total": 16015
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.1741,
          "medianPerformance": 96.1741,
          "totalKills": 3,
          "fastestKill": 130187,
          "bestAmount": 847.65761256957,
          "spec": "Guardian",
          "allStars": {
            "points": 107.36,
            "rank": 614,
            "rankPercent": 95.51605588471948,
            "total": 13671
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 85.2189,
          "medianPerformance": 42.2742,
          "totalKills": 3,
          "fastestKill": 220362,
          "bestAmount": 1261.8827202512,
          "spec": "Feral",
          "allStars": {
            "points": 94.36,
            "rank": 2318,
            "rankPercent": 85.57105492589363,
            "total": 16058
          }
        }
      ],
      "bestPerformanceAverage": 67.92636666666667,
      "medianPerformanceAverage": 53.611466666666665,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "rankPercent": 97.017,
          "medianPerformance": 81.8804,
          "totalKills": 8,
          "fastestKill": 26349,
          "bestAmount": 1732.9076520735,
          "spec": "Enhancement",
          "allStars": {
            "points": 107.57,
            "rank": 726,
            "rankPercent": 96.54498665650019,
            "total": 20984
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 96.22,
          "medianPerformance": 87.1067,
          "totalKills": 8,
          "fastestKill": 131874,
          "bestAmount": 1489.6947085855,
          "spec": "Enhancement",
          "allStars": {
            "points": 109.87,
            "rank": 969,
            "rankPercent": 95.43288511441378,
            "total": 21195
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 88.9027,
          "medianPerformance": 76.8884,
          "totalKills": 8,
          "fastestKill": 198723,
          "bestAmount": 1516.5632766877,
          "spec": "Enhancement",
          "allStars": {
            "points": 96.95,
            "rank": 2513,
            "rankPercent": 87.77615571776155,
            "total": 20550
          }
        }
      ],
      "bestPerformanceAverage": 94.04656666666666,
      "medianPerformanceAverage": 81.9585,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29813,
          "slot": 15,
          "quality": 3,
          "icon": "inv_misc_cape_19.jpg",
          "itemLevel": 106,
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
          "id": 25939,
          "slot": 18,
          "quality": 3,
          "icon": "inv_wand_06.jpg",
          "itemLevel": 97,
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
          "medianPerformance": 75.89715401665305,
          "totalKills": 3,
          "fastestKill": 29404,
          "bestAmount": 158.39738442125,
          "spec": "Shadow",
          "allStars": {
            "points": 83.12295086161541,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 49.91887836972873,
          "medianPerformance": 43.72430165582197,
          "totalKills": 3,
          "fastestKill": 130187,
          "bestAmount": 145.43694838962,
          "spec": "Shadow",
          "allStars": {
            "points": 53.63141577154629,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 80.91208633987074,
          "medianPerformance": 80.70504253245346,
          "totalKills": 3,
          "fastestKill": 220362,
          "bestAmount": 179.35487969795,
          "spec": "Shadow",
          "allStars": {
            "points": 86.84546558585457,
            "rank": null,
            "rankPercent": null,
            "total": 0
          }
        }
      ],
      "bestPerformanceAverage": 70.00778173675764,
      "medianPerformanceAverage": 66.77549940164282,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "permanentEnchantID": null,
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
          "temporaryEnchantID": 2634
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
          "rankPercent": 72.7435,
          "medianPerformance": 45.4759,
          "totalKills": 3,
          "fastestKill": 29964,
          "bestAmount": 1372.8474169003,
          "spec": "Elemental",
          "allStars": {
            "points": 78.1,
            "rank": 4955,
            "rankPercent": 70.30154067501948,
            "total": 16681
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
            "points": 50.04,
            "rank": 10121,
            "rankPercent": 40.05094484923879,
            "total": 16881
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
            "points": 77.35,
            "rank": 5034,
            "rankPercent": 69.23406076166025,
            "total": 16359
          }
        }
      ],
      "bestPerformanceAverage": 62.568966666666675,
      "medianPerformanceAverage": 33.55876666666666,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
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
          "id": 29279,
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
          "rankPercent": 52.1585,
          "medianPerformance": 47.6675,
          "totalKills": 7,
          "fastestKill": 26349,
          "bestAmount": 524.496061941,
          "spec": "Feral",
          "allStars": {
            "points": 54.07,
            "rank": 7993,
            "rankPercent": 50.0967842647518,
            "total": 16015
          }
        },
        {
          "encounterID": 50650,
          "encounterName": "Gruul the Dragonkiller",
          "rankPercent": 93.6145,
          "medianPerformance": 90.7326,
          "totalKills": 7,
          "fastestKill": 123192,
          "bestAmount": 1392.2348611825,
          "spec": "Feral",
          "allStars": {
            "points": 106.4,
            "rank": 831,
            "rankPercent": 93.14842331187056,
            "total": 12114
          }
        },
        {
          "encounterID": 50651,
          "encounterName": "Magtheridon",
          "rankPercent": 98.1129,
          "medianPerformance": 87.6349,
          "totalKills": 7,
          "fastestKill": 198308,
          "bestAmount": 1718.4631986607,
          "spec": "Feral",
          "allStars": {
            "points": 109.96,
            "rank": 327,
            "rankPercent": 97.96985926018183,
            "total": 16058
          }
        }
      ],
      "bestPerformanceAverage": 81.2953,
      "medianPerformanceAverage": 75.34500000000001,
      "totalKills": 0,
      "fetchedAt": "2026-04-11T16:13:16.969Z",
      "error": null,
      "partial": false
    }
  }
};
