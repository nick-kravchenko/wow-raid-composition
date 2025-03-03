import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Character } from '../_entities/character';
import { CompositionService } from './composition.service';
import { Player } from '../_entities/player';
import { ActivatedRoute, Params, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { KeyValuePipe, LowerCasePipe, NgForOf } from '@angular/common';
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
    NgForOf
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
    characterLevel: new FormControl(''),
    characterClassAndRole: new FormGroup({
      Warrior_Melee: new FormControl(false),
      Warrior_Tank: new FormControl(false),
      // Paladin_Melee: new FormControl(false),
      // Paladin_Tank: new FormControl(false),
      Paladin_Healer: new FormControl(false),
      Hunter_Ranged: new FormControl(false),
      // Druid_Melee: new FormControl(false),
      Druid_Tank: new FormControl(false),
      // Druid_Ranged: new FormControl(false),
      Druid_Healer: new FormControl(false),
      Rogue_Melee: new FormControl(false),
      // Rogue_Tank: new FormControl(false),
      Warlock_Ranged: new FormControl(false),
      // Warlock_Tank: new FormControl(false),
      Mage_Ranged: new FormControl(false),
      // Mage_Healer: new FormControl(false),
      Priest_Ranged: new FormControl(false),
      Priest_Healer: new FormControl(false),
    }),
  });
  iconsSpecs: { [key: string]: string } = {
    Warrior_Melee: 'ability_warrior_innerrage.jpg',
    Warrior_Tank: 'ability_warrior_defensivestance.jpg',
    // Paladin_Melee: 'spell_holy_auraoflight.jpg',
    // Paladin_Tank: 'spell_holy_devotionaura.jpg',
    Paladin_Healer: 'spell_holy_holybolt.jpg',
    Hunter_Ranged: 'class_hunter.jpg',
    // Druid_Melee: 'ability_druid_catform.jpg',
    Druid_Tank: 'ability_racial_bearform.jpg',
    // Druid_Ranged: 'spell_nature_starfall.jpg',
    Druid_Healer: 'spell_nature_healingtouch.jpg',
    Rogue_Melee: 'class_rogue.jpg',
    // Rogue_Tank: 'achievement_halloween_smiley_01.jpg',
    Warlock_Ranged: 'classicon_warlock.jpg',
    // Warlock_Tank: 'spell_shadow_demonform.jpg',
    Mage_Ranged: 'class_mage.jpg',
    // Mage_Healer: 'inv_enchant_essencenethersmall.jpg',
    Priest_Ranged: 'spell_shadow_shadowwordpain.jpg',
    Priest_Healer: 'spell_holy_guardianspirit.jpg',
  };
  signedPlayers: string[] = [];
  get filteredCharacters(): Character[] {
    return this.characters.filter((c) => {
      const {
        player,
        characterClass,
        characterRole,
        characterRank,
        characterLevel,
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
      if (characterLevel && characterLevel !== 'null') {
        filtersPassed.push(c.level === Number(characterLevel));
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

  dragFromRaidIndex?: number;
  dragFromSlotIndex?: number;
  dragToRaidIndex?: number|undefined;
  dragToSlotIndex?: number|undefined;
  draggableCharacter?: Character;

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
    this.updateSignedUpPlayers();
    this.eventIdChangesHandler();
    this.subscribeForRaidChanges();
    this.handleActivatedRouteQueryParams();
    this.handleFormChange();
  }

  handleActivatedRouteQueryParams(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          this.formGroup.get(key)?.setValue(decodeURIComponent(params[key]));
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

  eventIdChangesHandler(): void {
    this.formGroup.get('eventId')?.valueChanges.subscribe(() => {
      this.updateSignedUpPlayers();
    });
  }

  isCharacterAvailable(character: Character): boolean {
    const condictions: boolean[] = [
      !this.characterAlreadyInUse(character),
      (!!character.player && !this.playerUsedInEveryRaid(character.player)),
    ];
    return condictions.every((condition: boolean) => condition);
  }

  characterAlreadyInUse(character: Character): boolean {
    return this.compositionService.characterUsedInAnyRaid(character);
  }

  playerUsedInEveryRaid(player: Player): boolean {
    return this.compositionService.playerUsedInEveryRaid(player);
  }

  subscribeForRaidChanges(): void {
    this.compositionService.raidsSubject.subscribe((raids) => {
      this.raids = raids;
    });
  }

  updateSignedUpPlayers(): void {
    if (this.formGroup.get('eventId')?.value) {
      this.httpClient.get(`https://raid-helper.dev/api/v2/events/${this.formGroup.get('eventId')?.value}`).subscribe((response: any) => {
        if (response) {
          this.signedPlayers = response.signUps
            .filter((player: any) => player.className !== 'Absence')
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
  }

  dragFromSidebar(character: Character): void {
    this.draggableCharacter = character;
  }

  dragToRaid(raidId: number, slotId: number): void {
    if (typeof this.dragFromRaidIndex !== 'undefined' && typeof this.dragFromSlotIndex !== 'undefined' && this.draggableCharacter) {
      this.compositionService.moveCharacter(this.dragFromRaidIndex, this.dragFromSlotIndex, raidId, slotId, this.draggableCharacter);
    } else if (this.draggableCharacter) {
      this.compositionService.addCharacterToRaid(raidId, slotId, this.draggableCharacter);
    }
    this.resetData();
  }

  onSidebarDragend(): void {
    if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined') {
      this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
    }
    this.resetData();
  }

  onRaidSlotClick(raidId: number, slotId: number): void {
    this.compositionService.deleteCharacter(raidId, slotId);
  }

  onRaidDragOver(raidId: number, slotId: number): void {
    this.dragToRaidIndex = raidId;
    this.dragToSlotIndex = slotId;
  }

  onRaidSlotDragStart(raidId: number, slotId: number): void {
    this.dragFromRaidIndex = raidId;
    this.dragFromSlotIndex = slotId;
    this.draggableCharacter = this.raids[raidId][slotId];
  }

  onRaidSlotDragEnd(): void {
    if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined') {
      this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
    }
    this.resetData();
  }

  onSidebarCharacterClick(character: Character): void {
    this.compositionService.pushCharacter(character);
  }

  onRaidPruneClick(raidId: number): void {
    this.compositionService.resetRaid(raidId);
  }

  onRaidRemoveClick(raidId: number): void {
    this.compositionService.removeRaid(raidId);
  }

  onAddRaidClick(): void {
    this.compositionService.addRaid();
  }

  screenshot(): void {
    this.capturingScreenshot = true;
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
