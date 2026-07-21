export const GET_SPEED_RANKINGS = `
  query SpeedRankings($encounterId: Int!, $page: Int!, $raidSize: Int!) {
    worldData {
      encounter(id: $encounterId) {
        fightRankings(metric: speed, page: $page, size: $raidSize)
      }
    }
  }
`;

export const GET_GUILD_BY_NAME = `
  query GuildByName($name: String!, $serverSlug: String!, $serverRegion: String!) {
    guildData {
      guild(name: $name, serverSlug: $serverSlug, serverRegion: $serverRegion) { id }
    }
  }
`;

const REPORT_RANKINGS_ALIAS_PREFIX = 'rankings_';

export function reportRankingsAlias(raidId: string): string {
  return `${REPORT_RANKINGS_ALIAS_PREFIX}${raidId}`;
}

/**
 * Raids sharing a zoneId page through the exact same report list, so this builds one
 * query per zone group with an aliased `rankings(encounterID: ...)` field per raid,
 * instead of re-paging the guild's whole report history once per raid.
 */
export function buildGuildReportRankingsQuery(raidIds: readonly string[]): string {
  const encounterVars = raidIds.map(id => `$encounterId_${id}: Int!`).join(', ');
  const rankingFields = raidIds.map(id => `${reportRankingsAlias(id)}: rankings(encounterID: $encounterId_${id})`).join('\n        ');
  return `
    query GuildReportRankings($guildId: Int!, $zoneId: Int!, $limit: Int!, $page: Int!, ${encounterVars}) {
      reportData {
        reports(guildID: $guildId, zoneID: $zoneId, limit: $limit, page: $page) {
          last_page
          data {
            code
            ${rankingFields}
          }
        }
      }
    }
  `;
}
