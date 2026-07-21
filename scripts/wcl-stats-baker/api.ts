const WCL_ENDPOINT = 'https://fresh.warcraftlogs.com/api/v2/client';
const MIN_REQUEST_INTERVAL_MS = 350;
const MAX_RATE_LIMIT_RETRIES = 5;

export interface WclStatsApi {
  query<T>(query: string, variables?: Record<string, unknown>): Promise<T>;
}

export class WclStatsApiClient implements WclStatsApi {
  private lastRequestAt = 0;

  constructor(private readonly token: string) {}

  async query<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
    let response: Response | null = null;
    for (let attempt = 0; attempt <= MAX_RATE_LIMIT_RETRIES; attempt += 1) {
      const delay = Math.max(0, MIN_REQUEST_INTERVAL_MS - (Date.now() - this.lastRequestAt));
      if (delay) await sleep(delay);
      response = await fetch(WCL_ENDPOINT, {
        method: 'POST',
        headers: { Authorization: `Bearer ${this.token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
      });
      this.lastRequestAt = Date.now();
      if (response.status !== 429 || attempt === MAX_RATE_LIMIT_RETRIES) break;
      const retryAfterSeconds = Number(response.headers.get('retry-after'));
      if (Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 60) {
        throw new Error(`WCL rate limit exceeded; retry the bake in about ${Math.ceil(retryAfterSeconds / 60)} minutes`);
      }
      const retryDelay = Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0
        ? retryAfterSeconds * 1_000
        : 2 ** attempt * 5_000;
      console.warn(`[wcl-stats-baker] Rate limited; retrying in ${Math.ceil(retryDelay / 1_000)}s`);
      await sleep(retryDelay);
    }
    if (!response) throw new Error('WCL request did not return a response');
    if (!response.ok) throw new Error(`WCL HTTP ${response.status}: ${await response.text()}`);
    const payload = await response.json() as { data?: T; errors?: Array<{ message: string }> };
    if (payload.errors?.length) throw new Error(`WCL GraphQL error: ${payload.errors.map(error => error.message).join('; ')}`);
    if (!payload.data) throw new Error('WCL response contained no data');
    return payload.data;
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
