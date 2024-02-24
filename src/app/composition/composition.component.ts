import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { players } from '../_data/players.data';
import { Character } from '../_entities/character';
import { CharacterClass } from '../_entities/character-class.enum';
import { CharacterRole } from '../_entities/character-role.enum';
import { CharacterRank } from '../_entities/character-rank.enum';
import { CompositionService } from './composition.service';
import { Player } from '../_entities/player';
import { ActivatedRoute, Params, Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.scss'],
})
export class CompositionComponent implements OnInit {
  @ViewChild('raidGroups') raidGroups!: ElementRef;

  capturingScreenshot: boolean = false;
  characters: Character[] = [];
  formGroup: FormGroup = new FormGroup({
    eventId: new FormControl(''),
    player: new FormControl(''),
    characterClass: new FormControl(''),
    characterRole: new FormControl(''),
    characterRank: new FormControl(''),
    characterLevel: new FormControl(''),
  });
  signedPlayers: string[] = [];
  players = players;
  characterClasses = CharacterClass;
  characterRoles = CharacterRole;
  characterRank = CharacterRank;
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
      for (let key in params) {
        this.formGroup.get(key)?.setValue(decodeURIComponent(params[key]));
      }
    });
  }

  handleFormChange(): void {
    this.formGroup.valueChanges.subscribe((value) => {
      const queryParams: Params = {};
      for (let key in value) {
        queryParams[key] = encodeURIComponent(value[key]);
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

  isCharacterAvailable(character: Character) {
    const condictions: boolean[] = [
      !this.characterAlreadyInUse(character),
      (!!character.player && !this.playerUsedInEveryRaid(character.player)),
    ]
    return condictions.every((condition: boolean) => condition);
  }

  characterAlreadyInUse(character: Character) {
    return this.compositionService.characterUsedInAnyRaid(character);
  }

  playerUsedInEveryRaid(player: Player) {
    return this.compositionService.playerUsedInEveryRaid(player);
  }

  subscribeForRaidChanges() {
    this.compositionService.raidsSubject.subscribe((raids) => {
      this.raids = raids;
    });
  }

  updateSignedUpPlayers() {
    if (this.formGroup.get('eventId')?.value) {
      this.httpClient.get(`https://raid-helper.dev/api/v2/events/${this.formGroup.get('eventId')?.value}`).subscribe((response: any) => {
        if (response) this.signedPlayers = response.signUps.filter((player: any) => player.className !== 'Absence').map((player: any) => player.userId);
      }, () => {
        this.signedPlayers = [];
      })
    }
  }

  resetData() {
    this.dragFromRaidIndex = undefined;
    this.dragFromSlotIndex = undefined;
    this.dragToRaidIndex = undefined;
    this.dragToSlotIndex = undefined;
    this.draggableCharacter = undefined;
  }

  dragFromSidebar(character: Character) {
    this.draggableCharacter = character;
  }

  dragToRaid(raidId: number, slotId: number) {
    if (typeof this.dragFromRaidIndex !== 'undefined' && typeof this.dragFromSlotIndex !== 'undefined' && this.draggableCharacter) {
      this.compositionService.moveCharacter(this.dragFromRaidIndex, this.dragFromSlotIndex, raidId, slotId, this.draggableCharacter);
    } else if (this.draggableCharacter) {
      this.compositionService.addCharacterToRaid(raidId, slotId, this.draggableCharacter);
    }
    this.resetData();
  }

  onSidebarDragend() {
    if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined') this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
    this.resetData();
  }

  onRaidSlotClick(raidId: number, slotId: number) {
    this.compositionService.deleteCharacter(raidId, slotId);
  }

  onRaidDragOver(raidId: number, slotId: number) {
    this.dragToRaidIndex = raidId;
    this.dragToSlotIndex = slotId;
  }

  onRaidSlotDragStart(raidId: number, slotId: number) {
    this.dragFromRaidIndex = raidId;
    this.dragFromSlotIndex = slotId;
    this.draggableCharacter = this.raids[raidId][slotId];
  }

  onRaidSlotDragEnd() {
    if (typeof this.dragToRaidIndex !== 'undefined' && typeof this.dragToSlotIndex !== 'undefined') this.dragToRaid(this.dragToRaidIndex, this.dragToSlotIndex);
    this.resetData();
  }

  onSidebarCharacterClick(character: Character) {
    this.compositionService.pushCharacter(character);
  }

  onRaidPruneClick(raidId: number) {
    this.compositionService.resetRaid(raidId);
  }

  onRaidRemoveClick(raidId: number) {
    this.compositionService.removeRaid(raidId);
  }

  onAddRaidClick() {
    this.compositionService.addRaid();
  }

  screenshot() {
    this.capturingScreenshot = true;
    html2canvas(this.raidGroups.nativeElement, {
      backgroundColor: '#404040'
    }).then(canvas => {
      canvas.toBlob(blob => {
        // @ts-ignore
        navigator.clipboard.write([new ClipboardItem({'image/png': blob})])
      });
    }).finally(() => {
      setTimeout(() => {
        this.capturingScreenshot = false;
      }, 500);
    });
  }
}
