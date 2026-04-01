const TOKEN_URL = 'https://www.warcraftlogs.com/oauth/token';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

/**
 * Fetches a bearer token via the WCL v2 OAuth2 client-credentials flow.
 * Credentials are never stored — call this once per bake run.
 */
export async function getAccessToken(
  clientId: string,
  clientSecret: string,
): Promise<string> {
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64',
  );

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `WCL OAuth failed (HTTP ${response.status}): ${body}`,
    );
  }

  const data = (await response.json()) as TokenResponse;
  return data.access_token;
}