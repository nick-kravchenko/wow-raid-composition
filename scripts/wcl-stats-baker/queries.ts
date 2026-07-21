export const GET_SPEED_RANKINGS = `
  query SpeedRankings($encounterId: Int!, $page: Int!, $raidSize: Int!) {
    worldData {
      encounter(id: $encounterId) {
        fightRankings(metric: speed, page: $page, size: $raidSize)
      }
    }
  }
`;

export const GET_GUILD_DIRECTORY = `
  query GuildDirectory($limit: Int!, $page: Int!, $serverId: Int) {
    guildData {
      guilds(limit: $limit, page: $page, serverID: $serverId) {
        last_page
        data { id name }
      }
    }
  }
`;

export const GET_GUILD_REPORT_RANKINGS = `
  query GuildReportRankings($guildId: Int!, $zoneId: Int!, $limit: Int!, $page: Int!, $encounterId: Int!) {
    reportData {
      reports(guildID: $guildId, zoneID: $zoneId, limit: $limit, page: $page) {
        last_page
        data { code rankings(encounterID: $encounterId) }
      }
    }
  }
`;
