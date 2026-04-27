export class BnetApiClient {
  private readonly base: string;
  private readonly namespace: string;

  constructor(
    private readonly token: string,
    region: string,
    gameVersion: string,
  ) {
    this.base = `https://${region}.api.blizzard.com`;
    this.namespace = gameVersion === 'retail'
      ? `profile-${region}`
      : gameVersion === 'classic1x'
        ? `profile-classic1x-${region}`
        : `profile-classicann-${region}`;
  }

  async getCharacter(realmSlug: string, characterName: string): Promise<unknown> {
    const name = encodeURIComponent(characterName.toLowerCase());
    const realm = encodeURIComponent(realmSlug.toLowerCase());
    const url = `${this.base}/profile/wow/character/${realm}/${name}?namespace=${this.namespace}&locale=en_GB`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${this.token}` },
    });

    if (response.status === 404) return null;

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Bnet HTTP ${response.status}: ${body}`);
    }

    return response.json();
  }

  async getCharacterMedia(realmSlug: string, characterName: string): Promise<unknown> {
    const name = encodeURIComponent(characterName.toLowerCase());
    const realm = encodeURIComponent(realmSlug.toLowerCase());
    const url = `${this.base}/profile/wow/character/${realm}/${name}/character-media?namespace=${this.namespace}&locale=en_US`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${this.token}` },
    });

    if (response.status === 404) return null;

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Bnet HTTP ${response.status}: ${body}`);
    }

    return response.json();
  }
}
