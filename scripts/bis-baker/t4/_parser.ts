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
  { pageUrl: 'https://www.wowhead.com/tbc/guide/balance-druid-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'druid-balance.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/feral-druid-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'druid-cat.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/feral-druid-tank-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'druid-bear.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/druid-healer-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'druid-restoration.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/beast-mastery-hunter-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'hunter-bm.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/marksmanship-hunter-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'hunter-mm.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/survival-hunter-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'hunter-survival.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/arcane-mage-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'mage-arcane.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/fire-mage-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'mage-fire.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/frost-mage-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'mage-frost.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/paladin-tank-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'paladin-protection.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/retribution-paladin-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'paladin-retribution.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/holy-paladin-healer-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'paladin-holy.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/shadow-priest-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'priest-shadow.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/priest-healer-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'priest-holy.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/rogue-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'rogue.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/elemental-shaman-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'shaman-elemental.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/enhancement-shaman-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'shaman-enhancement.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/shaman-healer-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'shaman-restoration.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/affliction-warlock-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'warlock-affliction.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/demonology-warlock-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'warlock-demonology.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/destruction-warlock-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'warlock-destruction.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/protection-warrior-tank-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'warrior-protection.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/fury-warrior-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'warrior-fury.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/arms-warrior-dps-karazhan-best-in-slot-gear-burning-crusade-classic-wow', fileName: 'warrior-arms.ts' },
];

type SlotOrDouble = BisSlotKey | 'rings' | 'trinkets';

function fetchPageContent(pageUrl: string): Promise<string> {
  return fetch(pageUrl).then(response => response.text());
}

function getSlotFromHeading(text: string): SlotOrDouble | null {
  const t = text.toLowerCase();
  if (t.includes('two-handed')) return 'mainhand';
  if (t.includes('main hand') || t.includes('main-hand')) return 'mainhand';
  if (t.includes('off hand') || t.includes('off-hand')) return 'offhand';
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
  if (t.includes('ranged')) return 'ranged';
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

async function parsePage(pageUrl: string): Promise<BisList> {
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

    const items = parseItemsFromTables(tables);
    result.push(...buildEntries(slot, items));
  }

  return result;
}

list.forEach(({ pageUrl, fileName }: { pageUrl: string, fileName: string }) => {
  parsePage(pageUrl).then((bisList) => {
    writeFileSync(
      path.join(process.cwd(), 'scripts', 'bis-baker', 't4', fileName),
      `export const bisList = ${JSON.stringify(bisList, null, 2)}`,
      'utf8'
    );
  }).catch((error) => {
    console.error(error);
  });
});
