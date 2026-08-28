import { JSDOM } from 'jsdom';
import { mkdirSync, writeFileSync } from 'fs';
import path from 'node:path';

export type BisSlotKey =
  | 'head' | 'neck' | 'shoulders' | 'back' | 'chest' | 'wrists' | 'hands'
  | 'waist' | 'legs' | 'feet' | 'ring1' | 'ring2' | 'trinket1' | 'trinket2'
  | 'mainhand' | 'mainhand2h' | 'offhand' | 'ranged' | 'relic';

export interface BisItem { id: number; name: string; source: string; }
export interface BisEntry { slot: BisSlotKey; item: BisItem; alts?: BisItem[]; }
export type BisList = BisEntry[];
type WeaponSplit = { splitAt: number; slots: readonly [BisSlotKey, BisSlotKey] };
type Guide = { pageUrl: string; fileName: string; splitWeapons?: WeaponSplit };

export const list: Guide[] = [
  { pageUrl: 'https://www.wowhead.com/tbc/guide/balance-druid-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'druid-balance.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/feral-druid-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'druid-cat.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/feral-druid-tank-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'druid-bear.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/druid-healer-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'druid-restoration.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/beast-mastery-hunter-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'hunter-bm.ts', splitWeapons: { splitAt: 2, slots: ['mainhand', 'mainhand2h'] } },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/marksmanship-hunter-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'hunter-mm.ts', splitWeapons: { splitAt: 2, slots: ['mainhand', 'mainhand2h'] } },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/survival-hunter-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'hunter-survival.ts', splitWeapons: { splitAt: 2, slots: ['mainhand', 'mainhand2h'] } },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/arcane-mage-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'mage-arcane.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/fire-mage-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'mage-fire.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/frost-mage-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'mage-frost.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/paladin-tank-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'paladin-protection.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/retribution-paladin-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'paladin-retribution.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/holy-paladin-healer-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'paladin-holy.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/shadow-priest-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'priest-shadow.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/priest-healer-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'priest-holy.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/rogue-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'rogue.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/elemental-shaman-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'shaman-elemental.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/enhancement-shaman-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'shaman-enhancement.ts', splitWeapons: { splitAt: 1, slots: ['offhand', 'mainhand'] } },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/shaman-healer-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'shaman-restoration.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/affliction-warlock-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'warlock-affliction.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/demonology-warlock-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'warlock-demonology.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/destruction-warlock-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'warlock-destruction.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/protection-warrior-tank-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'warrior-protection.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/fury-warrior-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'warrior-fury.ts' },
  { pageUrl: 'https://www.wowhead.com/tbc/guide/arms-warrior-dps-bt-hyjal-phase-3-best-in-slot-gear-burning-crusade', fileName: 'warrior-arms.ts' },
];

type SlotOrDouble = BisSlotKey | 'rings' | 'trinkets';

function getSlotFromHeading(text: string): SlotOrDouble | null {
  const t = text.toLowerCase();
  if (t.includes('two-hand')) return 'mainhand2h';
  if (t.includes('one-hand') || t.includes('one hand') || t.includes('main hand') || t.includes('main-hand')) return 'mainhand';
  if (t.includes('offhand') || t.includes('off hand') || t.includes('off-hand') || t.includes('shield')) return 'offhand';
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
  const match = (linkEl?.getAttribute('href') || '').match(/\/item=(\d+)\//);
  if (!linkEl || !match) return null;
  return { id: Number(match[1]), name: linkEl.textContent?.trim() || '', source: sourceTd?.textContent?.trim() || '' };
}

function parseItemsFromTables(tables: Element[]): BisItem[] {
  const items: BisItem[] = [];
  for (const row of tables.flatMap(table => [...table.querySelectorAll('tr')])) {
    const cells = [...row.querySelectorAll('td')];
    if (cells.length < 2 || cells[0]?.querySelector('b')) continue;
    const item = extractItem(cells[1]?.querySelector('a') ?? null, cells[2] ?? null);
    if (item) items.push(item);
  }
  return items;
}

function buildEntries(slot: SlotOrDouble, items: BisItem[]): BisEntry[] {
  if (!items.length) return [];
  if (slot === 'rings' || slot === 'trinkets') {
    const prefix = slot === 'rings' ? 'ring' : 'trinket';
    const [first, second, ...alts] = items;
    return [
      ...(first ? [{ slot: `${prefix}1` as BisSlotKey, item: first }] : []),
      ...(second ? [{ slot: `${prefix}2` as BisSlotKey, item: second, ...(alts.length ? { alts } : {}) }] : []),
    ];
  }
  const [item, ...alts] = items;
  return [{ slot, item, ...(alts.length ? { alts } : {}) }];
}

async function parsePage(pageUrl: string, splitWeapons?: WeaponSplit): Promise<BisList> {
  const response = await fetch(pageUrl);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${pageUrl}`);
  const document = new JSDOM(await response.text()).window.document;
  const result: BisList = [];

  for (const heading of [...document.querySelectorAll('h3.heading-size-3')]) {
    const slot = getSlotFromHeading(heading.textContent || '');
    if (!slot) continue;
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

const outputDirectory = path.join(process.cwd(), 'scripts', 'bis-baker', 't6');
mkdirSync(outputDirectory, { recursive: true });

Promise.all(list.map(async ({ pageUrl, fileName, splitWeapons }) => {
  const bisList = await parsePage(pageUrl, splitWeapons);
  if (!bisList.length) throw new Error(`No BiS entries found: ${pageUrl}`);
  writeFileSync(path.join(outputDirectory, fileName), `export const bisList = ${JSON.stringify(bisList, null, 2)}\n`, 'utf8');
  console.log(`${fileName}: ${bisList.length} slots`);
})).catch(error => {
  console.error(error);
  process.exitCode = 1;
});
