/**
 * GraphQL queries for the Void Reaver warlock curse matrix.
 * All three return JSON scalars where noted — see parsing in index.ts.
 */

/**
 * All of a character's kills for one encounter, as ranked parses.
 * `encounterRankings` is a JSON scalar; its `ranks` array carries each kill's
 * report code, fight ID, and start time.
 */
export const GET_CHARACTER_ENCOUNTER_KILLS = /* GraphQL */ `
  query GetCharacterEncounterKills(
    $name: String!
    $serverSlug: String!
    $serverRegion: String!
    $encounterID: Int!
  ) {
    characterData {
      character(
        name: $name
        serverSlug: $serverSlug
        serverRegion: $serverRegion
      ) {
        encounterRankings(encounterID: $encounterID, metric: dps)
      }
    }
  }
`;

/**
 * Actor list for a report. Maps a character name → actor (source) ID before
 * querying that actor's casts.
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
          }
        }
      }
    }
  }
`;

/**
 * Aggregated cast table for one actor in one fight. The JSON scalar lists each
 * ability cast with its game ID (`guid`) and total casts.
 */
export const GET_REPORT_CASTS_TABLE = /* GraphQL */ `
  query GetReportCastsTable(
    $reportCode: String!
    $fightID: Int!
    $sourceID: Int!
  ) {
    reportData {
      report(code: $reportCode) {
        table(
          dataType: Casts
          fightIDs: [$fightID]
          sourceID: $sourceID
        )
      }
    }
  }
`;