import { Injectable } from '@angular/core';
import { Character } from '../_entities/character';
import { Player } from '../_entities/player';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { players } from '../_data/players.data';

@Injectable()
export class CompositionService {
  characters: Character[] = players.reduce((characters: Character[], player) => {
    return [
      ...characters,
      ...player.characters!.map(character => ({...character, player: { name: player.name, discord: player.discord }})),
    ]
  }, []);
  public raidsSubject: BehaviorSubject<Character[][]> = new BehaviorSubject<Character[][]>([]);
  get raids() {
    return this.raidsSubject.value;
  }
  set raids(raids: Character[][]) {
    this.raidsSubject.next(raids);
    this.writeRaidsToQueryParams();
  }
  get emptyRaid(): Character[] {
    return new Array(10).fill(null);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.readRaidFromQueryParams();
  }

  readRaidFromQueryParams() {
    const raidsParam = this.activatedRoute.snapshot.queryParamMap.get('raids');
    if (raidsParam) {
      const raids = decodeURIComponent(raidsParam).split('-')
        .map((r: string) => 
          r.split('_').map((name) => this.characters.find((character) => character.name === name || null))
        );
      // @ts-ignore
      this.raids = raids;
    }
  }
  writeRaidsToQueryParams() {
    const raids: string = this.raids.map((raid: Character[]) => raid.map((character: Character) => character?.name || '').join('_')).join('-');
    const queryParams: Params = { raids: encodeURIComponent(raids) };
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      }
    )
  }

  setRaids(raids: Character[][]) {
    this.raids = raids;
  }
  playerAlreadyInRaid(raidId: number, player?: Player) {
    return this.raids[raidId].some((character: Character) => character?.player && player && character.player.name === player?.name);
  }
  playerUsedInEveryRaid(player?: Player) {
    return this.raids.every((raid: Character[]) => raid.some((character: Character) => character?.player?.name && character.player.name === player?.name));
  }
  characterUsedInAnyRaid(character: Character) {
    return this.raids.some((raid: Character[]) => raid.some((c: Character) => c?.name === character.name));
  }
  pushCharacter(character: Character) {
    let inserted = false;
    if (!this.characterUsedInAnyRaid(character)) {
      this.raids = this.raids.reduce((raids: Character[][], raid: Character[], i: number) => {
        return [
          ...raids,
          raid.map((c: Character) => {
            if (!c && !inserted && !this.playerAlreadyInRaid(i, character.player)) {
              inserted = true;
              return character;
            } else {
              return c;
            }
          }),
        ];
      }, []); 
    }
  }
  addCharacterToRaid(raidId: number, slotId: number, character: Character) {
    if (this.characterUsedInAnyRaid(character)) return;
    if (this.playerAlreadyInRaid(raidId, character.player)) return;
    this.raids = this.raids.map((raid, i) => i !== raidId ? raid : raid.map((c, k) => k !== slotId ? c : character));
  }
  moveCharacter(fromRaidId: number, fromSlot: number, toRaidId: number, toSlot: number, character: Character) {
    const thisCharacterInRaid = this.raids[toRaidId].some((c) => c?.name === character.name);
    if (this.playerAlreadyInRaid(toRaidId, character.player) && !thisCharacterInRaid) return;

    let charToSwap: Character|undefined = undefined;
    if (this.raids[toRaidId][toSlot]) charToSwap = this.raids[toRaidId][toSlot];
    this.raids[toRaidId][toSlot] = this.raids[fromRaidId][fromSlot];

    if (charToSwap) this.raids[fromRaidId][fromSlot] = charToSwap;
    else this.deleteCharacter(fromRaidId, fromSlot);
  }
  deleteCharacter(fromRaidId: number, fromSlot: number) {
    // @ts-ignore
    this.raids = this.raids.map((raid: Character[], raidId) => raid.map((character, slotId) => raidId === fromRaidId && slotId === fromSlot ? null : character));
  }
  resetRaid(raidId: number) {
    this.raids = this.raids.map((raid: Character[], i) => i === raidId ? this.emptyRaid : raid);
  }
  removeRaid(raidId: number) {
    this.raids = this.raids.filter((raid: Character[], i) => i !== raidId);
  }
  addRaid() {
    this.raids = [...this.raids, this.emptyRaid];
  }
}