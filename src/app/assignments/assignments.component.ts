import {Component, OnInit} from '@angular/core';
import { AssignmentsRaidWideComponent } from './assignments-raid-wide/assignments-raid-wide.component';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import { Player } from '../_entities/player';
import { Character } from '../_entities/character';
import { ActivatedRoute, Params } from '@angular/router';
import { players } from '../_data/players.data';
import {AssignmentsBwlComponent} from './assignments-bwl/assignments-bwl.component';
import {RaidTileComponent} from '../shared/raid-tile/raid-tile.component';

enum PaneNameEnum {
  RaidWide = 'raid-wide',
  Bwl = 'bwl',
  Aq40 = 'aq40',
}

@Component({
  selector: 'app-assignments',
  imports: [
    AssignmentsRaidWideComponent,
    NgForOf,
    AssignmentsBwlComponent,
    RaidTileComponent,
    NgIf,
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss'
})
export class AssignmentsComponent implements OnInit {
  PaneNameEnum = PaneNameEnum;
  players: Player[] = players;
  raids: Character[][] = [];
  visiblePanes: PaneNameEnum[] = [PaneNameEnum.RaidWide, PaneNameEnum.Bwl];
  activeTabs: PaneNameEnum[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getCharactersFromQueryParams();
  }

  isPaneVisible(raidId: number, pane: string): boolean {
    return this.activeTabs[raidId] === pane;
  }

  getPaneIcon(pane: string): string {
    const icons = {
      [PaneNameEnum.RaidWide]: 'inv_crown_02.jpg',
      [PaneNameEnum.Bwl]: 'raids-blackwing-lair.webp',
      [PaneNameEnum.Aq40]: 'raids-ahnqiraj.webp',
    };
    return `assets/icons/${icons[pane as PaneNameEnum]}`;
  }

  togglePane(raidId: number, pane: string) {
    this.activeTabs[raidId] = pane as PaneNameEnum;
  }

  getCharacterByCharacterName(characterName: string): Character|undefined {
    return this.players.reduce((character: Character|undefined, player: Player) => {
      if (character) return character;
      return player?.characters?.find((character: Character) => character.name === characterName);
    }, undefined)
  }

  getCharactersFromQueryParams() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const raids: string[] = (params as any).raids.split('-').map((raid: string) => raid.split('_'));
      this.raids = raids.map((raid: any) => {
        return raid.map((name: string) => {
          return this.getCharacterByCharacterName(decodeURIComponent(name));
        });
      });
      this.activeTabs = new Array(this.raids.length).fill(PaneNameEnum.RaidWide);
    });
  }
}
