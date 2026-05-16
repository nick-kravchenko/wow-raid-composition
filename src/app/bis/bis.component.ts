import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

declare const $WowheadPower: { refreshLinks(): void } | undefined;

const LEFT_SLOTS = ['head', 'neck', 'shoulders', 'back', 'chest', 'shirt', 'tabard', 'wrists'];
const SLOT_PLACEHOLDERS: Record<string, string> = {
  shirt: 'ui-paperdoll-slot-shirt.webp',
  tabard: 'ui-paperdoll-slot-tabard.webp',
};
const RIGHT_SLOTS = ['hands', 'waist', 'legs', 'feet', 'ring1', 'ring2', 'trinket1', 'trinket2'];
const WEAPON_SLOTS = ['mainhand2h', 'mainhand', 'offhand', 'ranged', 'relic'];
const SLOT_LABELS: Record<string, string> = {
  mainhand: 'MH',
  mainhand2h: '2H',
  offhand: 'OH',
  ranged: 'R',
  relic: 'R',
};

@Component({
  selector: 'app-bis',
  templateUrl: './bis.component.html',
  styleUrl: './bis.component.scss',
})
export class BisComponent {
  readonly slotLabels = SLOT_LABELS;
  isLoading: WritableSignal<boolean> = signal(false);
  selectedBisListId: WritableSignal<string|undefined> = signal(undefined);
  selectedBisList: WritableSignal<any|undefined> = signal(undefined);
  readonly slotPlaceholders = SLOT_PLACEHOLDERS;
  readonly leftSlots = computed(() => {
    const list: any[] = this.selectedBisList() ?? [];
    return LEFT_SLOTS.map(s => list.find((e: any) => e.slot === s) ?? (SLOT_PLACEHOLDERS[s] ? { slot: s, placeholder: SLOT_PLACEHOLDERS[s] } : null)).filter(Boolean);
  });
  readonly rightSlots = computed(() => {
    const list: any[] = this.selectedBisList() ?? [];
    return RIGHT_SLOTS.map(s => list.find((e: any) => e.slot === s)).filter(Boolean);
  });
  readonly weaponSlots = computed(() => {
    const list: any[] = this.selectedBisList() ?? [];
    return WEAPON_SLOTS.map(s => list.find((e: any) => e.slot === s)).filter(Boolean);
  });

  list = [
    { id: 'druid-balance', icon: 'spell_nature_starfall.jpg', loader: () => import('../../../scripts/bis-baker/t5/druid-balance') },
    { id: 'druid-cat', icon: 'ability_druid_catform.jpg', loader: () => import('../../../scripts/bis-baker/t5/druid-cat') },
    { id: 'druid-bear', icon: 'ability_racial_bearform.jpg', loader: () => import('../../../scripts/bis-baker/t5/druid-bear') },
    { id: 'druid-restoration', icon: 'spell_nature_healingtouch.jpg', loader: () => import('../../../scripts/bis-baker/t5/druid-restoration') },
    { id: 'hunter-bm', icon: 'ability_hunter_bestialdiscipline.jpg', loader: () => import('../../../scripts/bis-baker/t5/hunter-bm') },
    { id: 'hunter-mm', icon: 'ability_hunter_focusedaim.jpg', loader: () => import('../../../scripts/bis-baker/t5/hunter-mm') },
    { id: 'hunter-survival', icon: 'ability_hunter_camouflage.jpg', loader: () => import('../../../scripts/bis-baker/t5/hunter-survival') },
    { id: 'mage-arcane', icon: 'spell_holy_magicalsentry.jpg', loader: () => import('../../../scripts/bis-baker/t5/mage-arcane') },
    { id: 'mage-fire', icon: 'spell_fire_flamebolt.jpg', loader: () => import('../../../scripts/bis-baker/t5/mage-fire') },
    { id: 'mage-frost', icon: 'spell_frost_icestorm.jpg', loader: () => import('../../../scripts/bis-baker/t5/mage-frost') },
    { id: 'paladin-protection', icon: 'spell_holy_devotionaura.jpg', loader: () => import('../../../scripts/bis-baker/t5/paladin-protection') },
    { id: 'paladin-retribution', icon: 'spell_holy_auraoflight.jpg', loader: () => import('../../../scripts/bis-baker/t5/paladin-retribution') },
    { id: 'paladin-holy', icon: 'spell_holy_holybolt.jpg', loader: () => import('../../../scripts/bis-baker/t5/paladin-holy') },
    { id: 'priest-shadow', icon: 'spell_shadow_shadowwordpain.jpg', loader: () => import('../../../scripts/bis-baker/t5/priest-shadow') },
    { id: 'priest-holy', icon: 'spell_holy_guardianspirit.jpg', loader: () => import('../../../scripts/bis-baker/t5/priest-holy') },
    { id: 'rogue', icon: 'ability_backstab.jpg', loader: () => import('../../../scripts/bis-baker/t5/rogue') },
    { id: 'shaman-elemental', icon: 'spell_nature_lightning.jpg', loader: () => import('../../../scripts/bis-baker/t5/shaman-elemental') },
    { id: 'shaman-enhancement', icon: 'spell_nature_lightningshield.jpg', loader: () => import('../../../scripts/bis-baker/t5/shaman-enhancement') },
    { id: 'shaman-restoration', icon: 'spell_nature_magicimmunity.jpg', loader: () => import('../../../scripts/bis-baker/t5/shaman-restoration') },
    { id: 'warlock-affliction', icon: 'classicon_warlock.jpg', loader: () => import('../../../scripts/bis-baker/t5/warlock-affliction') },
    { id: 'warlock-demonology', icon: 'spell_shadow_metamorphosis.jpg', loader: () => import('../../../scripts/bis-baker/t5/warlock-demonology') },
    { id: 'warlock-destruction', icon: 'spell_shadow_rainoffire.jpg', loader: () => import('../../../scripts/bis-baker/t5/warlock-destruction') },
    { id: 'warrior-protection', icon: 'ability_warrior_defensivestance.jpg', loader: () => import('../../../scripts/bis-baker/t5/warrior-protection') },
    { id: 'warrior-arms', icon: 'ability_warrior_savageblow.jpg', loader: () => import('../../../scripts/bis-baker/t5/warrior-arms') },
    { id: 'warrior-fury', icon: 'ability_warrior_innerrage.jpg', loader: () => import('../../../scripts/bis-baker/t5/warrior-fury') },
  ];

  get specGroups() {
    const map = new Map<string, typeof this.list>();
    for (const item of this.list) {
      const cls = item.id.split('-')[0];
      if (!map.has(cls)) map.set(cls, []);
      map.get(cls)!.push(item);
    }
    return [...map.entries()].map(([cls, specs]) => ({ cls, specs }));
  }

  constructor() {
    this.selectBisList(this.list[0].id);
    effect(() => {
      const selectedBisList = this.selectedBisList();
      if (selectedBisList?.length) {
        setTimeout(() => {
          if (typeof $WowheadPower !== 'undefined') {
            $WowheadPower.refreshLinks();
          }
        }, 0);
      }
    });
  }

  async selectBisList(id: string): Promise<void> {
    this.selectedBisListId.set(id);
    this.selectedBisList.set(undefined);
    this.isLoading.set(true);

    try {
      const loader = this.list.find(l => l.id === id)?.loader;
      if (!loader) throw new Error(`No loader found for ${this.selectedBisListId}`);

      const mod = await loader();
      this.selectedBisList.set(mod.bisList ?? []);
      this.isLoading.set(false);
    } catch (e) {
      this.isLoading.set(false);
      console.error(e);
    }
  }
}
