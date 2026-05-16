import { JSDOM } from 'jsdom';
import { writeFileSync } from 'fs';
import path from 'node:path';

export type BisSlotKey =
  | 'head'
  | 'neck'
  | 'shoulders'
  | 'back'
  | 'chest'
  | 'wrists'
  | 'hands'
  | 'waist'
  | 'legs'
  | 'feet'
  | 'ring1'
  | 'ring2'
  | 'trinket1'
  | 'trinket2'
  | 'mainhand'
  | 'mainhand2h'
  | 'offhand'
  | 'ranged'
  | 'relic';

export interface BisItem {
  id: number;
  name: string;
  source: string;
}

export interface BisEntry {
  slot: BisSlotKey;
  item: BisItem;
  alts?: BisItem[];
}

export type BisList = BisEntry[];

export const list = [
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/druid/balance/dps-bis-gear-pve-phase-2', fileName: 'druid-balance.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/druid/feral/dps-bis-gear-pve-phase-2', fileName: 'druid-cat.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/druid/feral/tank-bis-gear-pve-phase-2', fileName: 'druid-bear.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/druid/healer-bis-gear-pve-phase-2', fileName: 'druid-restoration.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/hunter/beast-mastery/dps-bis-gear-pve-phase-2', fileName: 'hunter-bm.ts', splitWeapons: { splitAt: 2, slots: ['mainhand', 'mainhand2h'] as const } },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/hunter/marksmanship/dps-bis-gear-pve-phase-2', fileName: 'hunter-mm.ts', splitWeapons: { splitAt: 2, slots: ['mainhand', 'mainhand2h'] as const } },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/hunter/survival/dps-bis-gear-pve-phase-2', fileName: 'hunter-survival.ts', splitWeapons: { splitAt: 2, slots: ['mainhand', 'mainhand2h'] as const } },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/mage/arcane/dps-bis-gear-pve-phase-2', fileName: 'mage-arcane.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/mage/fire/dps-bis-gear-pve-phase-2', fileName: 'mage-fire.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/mage/frost/dps-bis-gear-pve-phase-2', fileName: 'mage-frost.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/paladin/tank-bis-gear-pve-phase-2', fileName: 'paladin-protection.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/paladin/retribution/dps-bis-gear-pve-phase-2', fileName: 'paladin-retribution.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/paladin/holy/healer-bis-gear-pve-phase-2', fileName: 'paladin-holy.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/priest/shadow/dps-bis-gear-pve-phase-2', fileName: 'priest-shadow.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/priest/healer-bis-gear-pve-phase-2', fileName: 'priest-holy.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/rogue/dps-bis-gear-pve-phase-2', fileName: 'rogue.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/shaman/elemental/dps-bis-gear-pve-phase-2', fileName: 'shaman-elemental.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/shaman/enhancement/dps-bis-gear-pve-phase-2', fileName: 'shaman-enhancement.ts', splitWeapons: { splitAt: 1, slots: ['offhand', 'mainhand'] as const } },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/shaman/healer-bis-gear-pve-phase-2', fileName: 'shaman-restoration.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/warlock/affliction/dps-bis-gear-pve-phase-2', fileName: 'warlock-affliction.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/warlock/demonology/dps-bis-gear-pve-phase-2', fileName: 'warlock-demonology.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/warlock/destruction/dps-bis-gear-pve-phase-2', fileName: 'warlock-destruction.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/warrior/protection/tank-bis-gear-pve-phase-2', fileName: 'warrior-protection.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/warrior/fury/dps-bis-gear-pve-phase-2', fileName: 'warrior-fury.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/classes/warrior/arms/dps-bis-gear-pve-phase-2', fileName: 'warrior-arms.ts' },
];

type SlotOrDouble = BisSlotKey | 'rings' | 'trinkets';

function fetchPageContent(pageUrl: string): Promise<string> {
  return fetch(pageUrl).then(response => response.text());
}

function getSlotFromHeading(text: string): SlotOrDouble | null {
  const t = text.toLowerCase();
  if (t.includes('two-hand')) return 'mainhand2h';
  if (t.includes('one-hand') || t.includes('one hand')) return 'mainhand';
  if (t.includes('main hand') || t.includes('main-hand')) return 'mainhand';
  if (t.includes('offhand') || t.includes('off hand') || t.includes('off-hand')) return 'offhand';
  if (t.includes('shield')) return 'offhand';
  if (t.includes('ranged')) return 'ranged';
  if (t.includes('staff') || t.includes('polearm') || t.includes('mace') || t.includes('sword') || t.includes('axe') || t.includes('dagger') || t.includes('fist') || t.includes('weapon')) return 'mainhand';
  if (t.includes('ring')) return 'rings';
  if (t.includes('trinket')) return 'trinkets';
  if (t.includes('head')) return 'head';
  if (t.includes('neck')) return 'neck';
  if (t.includes('shoulder')) return 'shoulders';
  if (t.includes('back')) return 'back';
  if (t.includes('chest')) return 'chest';
  if (t.includes('wrist')) return 'wrists';
  if (t.includes('hand')) return 'hands';
  if (t.includes('waist')) return 'waist';
  if (t.includes('leg')) return 'legs';
  if (t.includes('feet') || t.includes('foot') || t.includes('boot')) return 'feet';
  if (t.includes('libram') || t.includes('totem') || t.includes('idol') || t.includes('relic')) return 'relic';
  return null;
}

function extractItem(linkEl: Element | null, sourceTd: Element | null): BisItem | null {
  if (!linkEl) return null;
  const href = linkEl.getAttribute('href') || '';
  const match = href.match(/\/item=(\d+)\//);
  if (!match) return null;
  const id = parseInt(match[1], 10);
  const name = linkEl.textContent?.trim() || '';
  const source = sourceTd?.textContent?.trim() || '';
  return { id, name, source };
}

function parseItemsFromTables(tables: Element[]): BisItem[] {
  const items: BisItem[] = [];
  for (const table of tables) {
    const rows = [...table.querySelectorAll('tr')];
    for (const row of rows) {
      const tds = [...row.querySelectorAll('td')];
      if (tds.length < 2) continue;
      // Skip header row (first td contains bold text)
      if (tds[0]?.querySelector('b')) continue;
      const item = extractItem(tds[1]?.querySelector('a') ?? null, tds[2] ?? null);
      if (item) items.push(item);
    }
  }
  return items;
}

function buildEntries(slot: SlotOrDouble, items: BisItem[]): BisEntry[] {
  if (items.length === 0) return [];

  if (slot === 'rings') {
    const entries: BisEntry[] = [];
    const [ring1, ring2, ...rest] = items;
    if (ring1) entries.push({ slot: 'ring1', item: ring1 });
    if (ring2) entries.push({ slot: 'ring2', item: ring2, ...(rest.length ? { alts: rest } : {}) });
    return entries;
  }

  if (slot === 'trinkets') {
    const entries: BisEntry[] = [];
    const [t1, t2, ...rest] = items;
    if (t1) entries.push({ slot: 'trinket1', item: t1 });
    if (t2) entries.push({ slot: 'trinket2', item: t2, ...(rest.length ? { alts: rest } : {}) });
    return entries;
  }

  const [item, ...alts] = items;
  return [{ slot, item, ...(alts.length ? { alts } : {}) }];
}

type WeaponSplit = { splitAt: number; slots: readonly [BisSlotKey, BisSlotKey] };

async function parsePage(pageUrl: string, splitWeapons?: WeaponSplit): Promise<BisList> {
  const htmlString = await fetchPageContent(pageUrl);
  const DOM = new JSDOM(htmlString);
  const document = DOM.window.document;

  const result: BisList = [];
  const headings = [...document.querySelectorAll('h3.heading-size-3')];

  for (const heading of headings) {
    const slot = getSlotFromHeading(heading.textContent || '');
    if (!slot) continue;

    // Collect tables until the next h2/h3
    const tables: Element[] = [];
    let sibling = heading.nextElementSibling;
    while (sibling && sibling.tagName !== 'H3' && sibling.tagName !== 'H2') {
      if (sibling.tagName === 'TABLE') tables.push(sibling);
      sibling = sibling.nextElementSibling;
    }

    if (splitWeapons && slot === 'mainhand' && tables.length >= splitWeapons.splitAt) {
      result.push(...buildEntries(splitWeapons.slots[0], parseItemsFromTables(tables.slice(0, splitWeapons.splitAt))));
      result.push(...buildEntries(splitWeapons.slots[1], parseItemsFromTables(tables.slice(splitWeapons.splitAt))));
    } else {
      result.push(...buildEntries(slot, parseItemsFromTables(tables)));
    }
  }

  return result;
}

list.forEach(({ pageUrl, fileName, splitWeapons }: { pageUrl: string, fileName: string, splitWeapons?: WeaponSplit }) => {
  parsePage(pageUrl, splitWeapons).then((bisList) => {
    writeFileSync(
      path.join(process.cwd(), 'scripts', 'bis-baker', 't5', fileName),
      `export const bisList = ${JSON.stringify(bisList, null, 2)}`,
      'utf8'
    );
  }).catch((error) => {
    console.error(error);
  });
});
