/**
 * Fetch character identity + zone rankings in one call.
 *
 * zoneID is optional (null = all zones). When omitted, WCL returns rankings
 * for every zone the character has logged.
 *
 * zoneRankings returns a JSON scalar, not a typed object — see WclRawZoneRankings
 * in types.ts for the expected shape.
 */
export const GET_CHARACTER_RANKINGS = /* GraphQL */ `
  query GetCharacterRankings(
    $name: String!
    $serverSlug: String!
    $serverRegion: String!
    $zoneID: Int
  ) {
    characterData {
      character(
        name: $name
        serverSlug: $serverSlug
        serverRegion: $serverRegion
      ) {
        id
        name
        classID
        server {
          name
          slug
          region {
            name
            slug
          }
        }
        zoneRankings(zoneID: $zoneID)
      }
    }
  }
`;

/**
 * Fetch the character's most recent report code + kill fight IDs.
 * Used as the first step in the gear-fetching flow.
 */
export const GET_CHARACTER_RECENT_REPORT = /* GraphQL */ `
  query GetCharacterRecentReport(
    $name: String!
    $serverSlug: String!
    $serverRegion: String!
  ) {
    characterData {
      character(
        name: $name
        serverSlug: $serverSlug
        serverRegion: $serverRegion
      ) {
        recentReports(limit: 1) {
          data {
            code
            startTime
            fights(killType: Kills) {
              id
              name
              encounterID
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetch the actor list for a report.
 * Used to map a character name → actor ID before querying CombatantInfo events.
 */
export const GET_REPORT_MASTER_DATA = /* GraphQL */ `
  query GetReportMasterData($reportCode: String!) {
    reportData {
      report(code: $reportCode) {
        masterData(translate: true) {
          actors {
            id
            name
            type
            subType
          }
        }
      }
    }
  }
`;

/**
 * Fetch the CombatantInfo event for a specific actor in a specific fight.
 * The CombatantInfo event contains the character's gear, talents, and auras
 * at the start of that fight — the only way WCL v2 exposes gear data.
 */
export const GET_REPORT_COMBATANT_INFO = /* GraphQL */ `
  query GetReportCombatantInfo(
    $reportCode: String!
    $fightID: Int!
    $sourceID: Int!
  ) {
    reportData {
      report(code: $reportCode) {
        events(
          dataType: CombatantInfo
          fightIDs: [$fightID]
          sourceID: $sourceID
          limit: 1
          translate: true
        ) {
          data
        }
      }
    }
  }
`;