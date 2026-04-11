import { Component, effect, signal, WritableSignal } from '@angular/core';

declare const $WowheadPower: { refreshLinks(): void } | undefined;

@Component({
  selector: 'app-bis',
  templateUrl: './bis.component.html',
  styleUrl: './bis.component.scss',
})
export class BisComponent {
  isLoading: WritableSignal<boolean> = signal(false);
  selectedBisListId: WritableSignal<string|undefined> = signal(undefined);
  selectedBisList: WritableSignal<any|undefined> = signal(undefined);
  list = [
    { id: 'druid-balance', icon: 'spell_nature_starfall.jpg', loader: () => import('../../../scripts/bis-baker/t4/druid-balance') },
    { id: 'druid-cat', icon: 'ability_druid_catform.jpg', loader: () => import('../../../scripts/bis-baker/t4/druid-cat') },
    { id: 'druid-bear', icon: 'ability_racial_bearform.jpg', loader: () => import('../../../scripts/bis-baker/t4/druid-bear') },
    { id: 'druid-restoration', icon: 'spell_nature_healingtouch.jpg', loader: () => import('../../../scripts/bis-baker/t4/druid-restoration') },
    { id: 'hunter-bm', icon: 'ability_hunter_bestialdiscipline.jpg', loader: () => import('../../../scripts/bis-baker/t4/hunter-bm') },
    { id: 'hunter-mm', icon: 'ability_hunter_focusedaim.jpg', loader: () => import('../../../scripts/bis-baker/t4/hunter-mm') },
    { id: 'hunter-survival', icon: 'ability_hunter_camouflage.jpg', loader: () => import('../../../scripts/bis-baker/t4/hunter-survival') },
    { id: 'mage-arcane', icon: 'spell_holy_magicalsentry.jpg', loader: () => import('../../../scripts/bis-baker/t4/mage-arcane') },
    { id: 'mage-fire', icon: 'spell_fire_flamebolt.jpg', loader: () => import('../../../scripts/bis-baker/t4/mage-fire') },
    { id: 'paladin-protection', icon: 'spell_holy_devotionaura.jpg', loader: () => import('../../../scripts/bis-baker/t4/paladin-protection') },
    { id: 'paladin-retribution', icon: 'spell_holy_auraoflight.jpg', loader: () => import('../../../scripts/bis-baker/t4/paladin-retribution') },
    { id: 'paladin-holy', icon: 'spell_holy_holybolt.jpg', loader: () => import('../../../scripts/bis-baker/t4/paladin-holy') },
    { id: 'priest-shadow', icon: 'spell_shadow_shadowwordpain.jpg', loader: () => import('../../../scripts/bis-baker/t4/priest-shadow') },
    { id: 'priest-holy', icon: 'spell_holy_guardianspirit.jpg', loader: () => import('../../../scripts/bis-baker/t4/priest-holy') },
    { id: 'rogue', icon: 'ability_backstab.jpg', loader: () => import('../../../scripts/bis-baker/t4/rogue') },
    { id: 'shaman-elemental', icon: 'spell_nature_lightning.jpg', loader: () => import('../../../scripts/bis-baker/t4/shaman-elemental') },
    { id: 'shaman-enhancement', icon: 'spell_nature_lightningshield.jpg', loader: () => import('../../../scripts/bis-baker/t4/shaman-enhancement') },
    { id: 'shaman-restoration', icon: 'spell_nature_magicimmunity.jpg', loader: () => import('../../../scripts/bis-baker/t4/shaman-restoration') },
    { id: 'warlock-affliction', icon: 'classicon_warlock.jpg', loader: () => import('../../../scripts/bis-baker/t4/warlock-affliction') },
    { id: 'warlock-demonology', icon: 'spell_shadow_metamorphosis.jpg', loader: () => import('../../../scripts/bis-baker/t4/warlock-demonology') },
    { id: 'warlock-destruction', icon: 'spell_shadow_rainoffire.jpg', loader: () => import('../../../scripts/bis-baker/t4/warlock-destruction') },
    { id: 'warrior-protection', icon: 'ability_warrior_defensivestance.jpg', loader: () => import('../../../scripts/bis-baker/t4/warrior-protection') },
    { id: 'warrior-arms', icon: 'ability_warrior_savageblow.jpg', loader: () => import('../../../scripts/bis-baker/t4/warrior-arms') },
    { id: 'warrior-fury', icon: 'ability_warrior_innerrage.jpg', loader: () => import('../../../scripts/bis-baker/t4/warrior-fury') },
  ];

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
