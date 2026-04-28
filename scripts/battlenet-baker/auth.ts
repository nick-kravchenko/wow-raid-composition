interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export async function getAccessToken(
  clientId: string,
  clientSecret: string,
  region: string,
): Promise<string> {
  const tokenUrl = `https://${region}.battle.net/oauth/token`;
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Battle.net OAuth failed (HTTP ${response.status}): ${body}`);
  }

  const data = (await response.json()) as TokenResponse;
  return data.access_token;
}