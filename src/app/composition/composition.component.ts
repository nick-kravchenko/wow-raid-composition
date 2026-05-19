import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Character } from '../_entities/character';
import { CompositionService } from './composition.service';
import { Player } from '../_entities/player';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { KeyValuePipe, LowerCasePipe } from '@angular/common';
import { RaidTileComponent } from '../shared/raid-tile/raid-tile.component';
import { CharacterTileComponent } from '../shared/character-tile/character-tile.component';
import { CharacterRank } from '../_entities/character-rank.enum';

@Component({
  selector: 'app-composition',
  imports: [
    ReactiveFormsModule,
    KeyValuePipe,
    LowerCasePipe,
    RaidTileComponent,
    CharacterTileComponent,
  ],
  providers: [
    HttpClient,
    CompositionService,
  ],
  templateUrl: './composition.component.html',
  styleUrl: './composition.component.scss'
})
export class CompositionComponent implements OnInit {
  @ViewChild('raidGroups') raidGroups!: ElementRef;
  characterRank: typeof CharacterRank = CharacterRank;
  capturingScreenshot = false;
  characters: Character[] = [];
  formGroup: FormGroup = new FormGroup({
    eventId: new FormControl(''),
    player: new FormControl(''),
    characterClass: new FormControl(''),
    characterRole: new FormControl(''),
    characterRank: new FormControl(''),
    raidSize: new FormControl('25'),
    characterClassAndRole: new FormGroup({
      Warrior_Melee: new FormControl(false),
      Warrior_Tank: new FormControl(false),
      Paladin_Melee: new FormControl(false),
      Paladin_Tank: new FormControl(false),
      Paladin_Healer: new FormControl(false),
      Hunter_Ranged: new FormControl(false),
      Druid_Melee: new FormControl(false),
      Druid_Tank: new FormControl(false),
      Druid_Ranged: new FormControl(false),
      Druid_Healer: new FormControl(false),
      Rogue_Melee: new FormControl(false),
      // Rogue_Tank: new FormControl(false),
      Warlock_Ranged: new FormControl(false),
      // Warlock_Tank: new FormControl(false),
      Mage_Ranged: new FormControl(false),
      // Mage_Healer: new FormControl(false),
      Priest_Ranged: new FormControl(false),
      Priest_Healer: new FormControl(false),
      Shaman_Melee: new FormControl(false),
      Shaman_Ranged: new FormControl(false),
      Shaman_Healer: new FormControl(false),
    }),
  });
  iconsSpecs: { [key: string]: string } = {
    Warrior_Melee: 'ability_warrior_innerrage.jpg',
    Warrior_Tank: 'ability_warrior_defensivestance.jpg',
    Paladin_Melee: 'spell_holy_auraoflight.jpg',
    Paladin_Tank: 'spell_holy_devotionaura.jpg',
    Paladin_Healer: 'spell_holy_holybolt.jpg',
    Hunter_Ranged: 'class_hunter.jpg',
    Druid_Melee: 'ability_druid_catform.jpg',
    Druid_Tank: 'ability_racial_bearform.jpg',
    Druid_Ranged: 'spell_nature_starfall.jpg',
    Druid_Healer: 'spell_nature_healingtouch.jpg',
    Rogue_Melee: 'class_rogue.jpg',
    // Rogue_Tank: 'achievement_halloween_smiley_01.jpg',
    Warlock_Ranged: 'classicon_warlock.jpg',
    // Warlock_Tank: 'spell_shadow_demonform.jpg',
    Mage_Ranged: 'class_mage.jpg',
    // Mage_Healer: 'inv_enchant_essencenethersmall.jpg',
    Priest_Ranged: 'spell_shadow_shadowwordpain.jpg',
    Priest_Healer: 'spell_holy_guardianspirit.jpg',
    Shaman_Melee: 'spell_nature_lightningshield.jpg',
    Shaman_Ranged: 'spell_nature_lightning.jpg',
    Shaman_Healer: 'spell_nature_magicimmunity.jpg',
  };
  signedPlayers: string[] = [];
  get filteredCharacters(): Character[] {
    return this.characters.filter((c) => {
      const {
        player,
        characterClass,
        characterRole,
        characterRank,
      } = this.formGroup.getRawValue();
      const filtersPassed = [];
      if (player) {
        filtersPassed.push(c.player?.name === player);
      }
      if (characterClass) {
        filtersPassed.push(c.class === characterClass);
      }
      if (characterRole) {
        filtersPassed.push(c.role === characterRole);
      }
      if (characterRank) {
        filtersPassed.push(c.rank === characterRank);
      }
if (this.signedPlayers.length && c.player?.discord?.userId) {
        filtersPassed.push(this.signedPlayers.includes(c.player.discord.userId));
      }
      if (Object.values((this.formGroup.get('characterClassAndRole') as FormGroup).controls)
                .some((control: AbstractControl) => (control as FormControl).value === true)) {
        const checked = Object.entries((this.formGroup.get('characterClassAndRole') as FormGroup).controls)
          .reduce((acc: string[], [key, control]: [string, AbstractControl]): string[] => {
          return control.value === true ? [...acc, key] : acc;
        }, []);
        filtersPassed.push(checked.some((classAndRole: string) => {
          const [cClass, cRole] = classAndRole.split('_');
          return c.class === cClass && c.role === cRole;
        }));
      }
      return filtersPassed.every((condition: boolean) => condition);
    }).sort((a, b) =>
      a.class === b.class
        ? a.name > b.name ? 1 : -1
        : a.class > b.class ? 1 : -1
    );
  }
  raids: Character[][] = [];
  private _benches: Character[][] = [];

  get benches(): Character[][] {
    return this._benches;
  }

  set benches(value: Character[][]) {
    this._benches = value;
    this.writeBenchesToQueryParams();
  }

  get currentRaidSize(): number {
    return Number(this.formGroup.get('raidSize')?.value) || 25;
  }

  dragFromRaidIndex?: number;
  dragFromSlotIndex?: number;
  dragToRaidIndex?: number;
  dragToSlotIndex?: number;
  draggableCharacter?: Character;
  dragToBenchRaidIndex?: number;
  dragFromBenchRaidIndex?: number;
  dragFromBenchSlotIndex?: number;

  isCharacterClassAndRoleChecked(characterClassAndRole: string): boolean {
    return Object.values((this.formGroup.get('characterClassAndRole') as FormGroup).controls)
      .every((control: AbstractControl) => (control as FormControl).value === false)
      || (this.formGroup.get('characterClassAndRole') as FormGroup).get(characterClassAndRole)?.value === true;
  }

  constructor(
    private httpClient: HttpClient,
    private compositionService: CompositionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.characters = this.compositionService.characters;
  }

  ngOnInit(): void {
    const raidSizeFromSnapshot = this.activatedRoute.snapshot.queryParamMap.get('raidSize');
    if (raidSizeFromSnapshot) {
      this.formGroup.get('raidSize')?.setValue(raidSizeFromSnapshot, { emitEvent: false });
    }
    this.readBenchesFromQueryParams();
    this.handleActivatedRouteQueryParams();
    this.updateSignedUpPlayers();
    this.eventIdChangesHandler();
    this.subscribeForRaidChanges();
    this.handleFormChange();
    this.handleRaidSizeChange();
  }

  handleActivatedRouteQueryParams(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          this.formGroup.get(key)?.setValue(decodeURIComponent(params[key]), { emitEvent: false });
        }
      }
    });
  }

  handleFormChange(): void {
    this.formGroup.valueChanges.subscribe((value) => {
      const queryParams: Params = {};
      for (const key in value) {
        if (key !== 'characterClassAndRole' && value.hasOwnProperty(key)) {
          queryParams[key] = encodeURIComponent(value[key]);
        }
      }
      this.router.navigate(
        [],
        {
          relativeTo: this.activatedRoute,
          queryParams,
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        }
      );
    });
  }

  handleRaidSizeChange(): void {
    this.formGroup.get('raidSize')?.valueChanges!.subscribe((value) => {
      this.compositionService.resizeRaids(Number(value) || 25);
    });
  }

  eventIdChangesHandler(): void {
    if (this.formGroup.get('eventId')?.value) {
      this.updateSignedUpPlayers();
    }
    this.formGroup.get('eventId')?.valueChanges!.subscribe(() => {
      this.updateSignedUpPlayers();
    });
  }

  isCharacterAvailable(character: Character): boolean {
    const condictions: boolean[] = [
      !this.characterAlreadyInUse(character),
      !this.characterInAnyBench(character),
      (!!character.player && !this.playerUsedInEveryRaid(character.player)),
    ];
    return condictions.every((condition: boolean) => condition);
  }

  characterInAnyBench(character: Character): boolean {
    return this.benches.some(bench => bench.some(c => c?.name === character.name));
  }

  characterAlreadyInUse(character: Character): boolean {
    return this.compositionService.characterUsedInAnyRaid(character);
  }

  playerUsedInEveryRaid(player: Player): boolean {
    return this.compositionService.playerUsedInEveryRaid(player);
  }

  readBenchesFromQueryParams(): void {
    const param = this.activatedRoute.snapshot.queryParamMap.get('benches');
    if (!param) return;
    this._benches = decodeURIComponent(param).split('-').map(b =>
      b.split('_').filter(Boolean)
        .map(name => this.compositionService.characters.find(c => c.name === name))
        .filter(Boolean) as Character[]
    );
  }

  writeBenchesToQueryParams(): void {
    const value = this._benches.map(bench => bench.map(c => c?.name ?? '').join('_')).join('-');
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { benches: encodeURIComponent(value) },
      queryParamsHandling: 'merge',
    });
  }

  subscribeForRaidChanges(): void {
    this.compositionService.raidsSubject.subscribe((raids) => {
      this.raids = raids;
      while (this.benches.length < raids.length) this.benches.push([]);
      if (this.benches.length > raids.length) this.benches.length = raids.length;
      this.benches = [...this.benches];
    });
  }

  updateSignedUpPlayers(): void {
    if (this.formGroup.get('eventId')?.value) {
      this.httpClient.get(`https://raid-helper.xyz/api/v4/events/${this.formGroup.get('eventId')?.value}`).subscribe((response: any) => {
        if (response) {
          this.signedPlayers = response.signUps
            .filter((player: any) => player.className !== 'Absence'
                                            && player.className !== 'Tentative'
                                            && player.className !== 'Late')
            .map((player: any) => player.userId);
        }
      }, () => {
        this.signedPlayers = [];
      });
    }
  }

  resetData(): void {
    this.dragFromRaidIndex = undefined;
    this.dragFromSlotIndex = undefined;
    this.dragToRaidIndex = undefined;
    this.dragToSlotIndex = undefined;
    this.draggableCharacter = undefined;
    this.dragToBenchRaidIndex = undefined;
    this.dragFromBenchRaidIndex = undefined;
    this.dragFromBenchSlotIndex = undefined;
  }

  dragFromSidebar(character: Character): void {
    this.draggableCharacter = character;
  }

  dragToRaid(raidId: number, slotId: number): void {
    if (typeof this.dragFromRaidIndex !== 'undefined' && typeof this.dragFromSlotIndex !== 'undefined' && this.draggableCharacter) {
      this.compositionService.moveCharacter(this.dragFromRaidIndex, this.dragFromSlotIndex, raidId, slotId, this.draggableCharacter);
    } else if (this.draggableCharacter) {
      this.compositionService.addCharacterToRaid(raidId, slotId, this.draggableCharacter);
      if (this.dragFromBenchRaidIndex !== undefined && this.dragFromBenchSlotIndex !== undefined) {
        const fromRaid = this.dragFromBenchRaidIndex;
        const fromSlot = this.dragFromBenchSlotIndex;
        this.benches = this.benches.map((b, i) => i === fromRaid ? b.filter((_, j) => j !== fromSlot) : b);
      }
    }
    this.resetData();
  }

  dragToBenchFn(raidId: number): void {
    if (!this.draggableCharacter) return;
    const character = this.draggableCharacter;

    if (this.dragFromRaidIndex !== undefined && this.dragFromSlotIndex !== undefined) {
      this.compositionService.deleteCharacter(this.dragFromRaidIndex, this.dragFromSlotIndex);
    } else if (this.dragFromBenchRaidIndex !== undefined && this.dragFromBenchSlotIndex !== undefined) {
      const fromRaid = this.dragFromBenchRaidIndex;
      const fromSlot = this.dragFromBenchSlotIndex;
      this.benches = this.benches.map((b, i) => i === fromRaid ? b.filter((_, j) => j !== fromSlot) : b);
    }

    if (!this.benches[raidId]?.some(c => c?.name === character.name)) {
      this.benches = this.benches.map((b, i) => i === raidId ? [...b, character] : b);
    }
  }

  onSidebarDragend(): void {
    if (this.dragToBenchRaidIndex !== undefined) {
      this.dragToBenchFn(this.dragToBenchRaidIndex);
    } else if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined') {
      this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
    }
    this.resetData();
  }

  onBenchDragOver(raidId: number): void {
    this.dragToBenchRaidIndex = raidId;
    this.dragToRaidIndex = undefined;
    this.dragToSlotIndex = undefined;
  }

  onBenchSlotDragStart(raidId: number, slotId: number): void {
    this.dragFromBenchRaidIndex = raidId;
    this.dragFromBenchSlotIndex = slotId;
    this.draggableCharacter = this.benches[raidId][slotId];
  }

  onBenchSlotClick(raidId: number, slotId: number): void {
    this.benches = this.benches.map((b, i) => i === raidId ? b.filter((_, j) => j !== slotId) : b);
  }

  onRaidSlotClick(raidId: number, slotId: number): void {
    this.compositionService.deleteCharacter(raidId, slotId);
  }

  onRaidDragOver(raidId: number, slotId: number): void {
    this.dragToRaidIndex = raidId;
    this.dragToSlotIndex = slotId;
    this.dragToBenchRaidIndex = undefined;
  }

  onRaidSlotDragStart(raidId: number, slotId: number): void {
    this.dragFromRaidIndex = raidId;
    this.dragFromSlotIndex = slotId;
    this.draggableCharacter = this.raids[raidId][slotId];
  }

  onRaidSlotDragEnd(): void {
    if (this.dragToBenchRaidIndex !== undefined) {
      this.dragToBenchFn(this.dragToBenchRaidIndex);
    } else if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined') {
      this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
    }
    this.resetData();
  }

  onSidebarCharacterClick(character: Character): void {
    this.compositionService.pushCharacter(character);
  }

  onRaidPruneClick(raidId: number): void {
    this.compositionService.resetRaid(raidId, this.currentRaidSize);
  }

  onRaidRemoveClick(raidId: number): void {
    this.compositionService.removeRaid(raidId);
    this.benches = this.benches.filter((_, i) => i !== raidId);
  }

  onAddRaidClick(): void {
    this.compositionService.addRaid(this.currentRaidSize);
    this.benches = [...this.benches, []];
  }

  async screenshot(): Promise<void> {
    this.capturingScreenshot = true;
    const { default: html2canvas } = await import('html2canvas');
    html2canvas(this.raidGroups.nativeElement, {
      backgroundColor: '#404040'
    }).then(canvas => {
      canvas.toBlob(blob => {
        // @ts-ignore
        navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
      });
    }).finally(() => {
      setTimeout(() => {
        this.capturingScreenshot = false;
      }, 250);
    });
  }
}
