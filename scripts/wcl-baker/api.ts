const WCL_ENDPOINT = 'https://fresh.warcraftlogs.com/api/v2/client';

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string; locations?: unknown; path?: unknown }>;
}

export class WclApiClient {
  constructor(private readonly token: string) {}

  async query<T>(
    query: string,
    variables: Record<string, unknown> = {},
  ): Promise<T> {
    const response = await fetch(WCL_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`WCL HTTP ${response.status}: ${body}`);
    }

    const json = (await response.json()) as GraphQLResponse<T>;

    if (process.env['WCL_DEBUG']) {
      console.debug('[wcl-baker] raw response:', JSON.stringify(json, null, 2));
    }

    if (json.errors?.length) {
      const messages = json.errors.map((e) => e.message).join('; ');
      throw new Error(`WCL GraphQL error: ${messages}`);
    }

    if (!json.data) {
      throw new Error('WCL response contained no data');
    }

    return json.data;
  }
}