import {Component, OnInit} from '@angular/core';
import { AssignmentsRaidWideComponent } from './assignments-raid-wide/assignments-raid-wide.component';
import {NgForOf, NgIf} from '@angular/common';
import { Player } from '../_entities/player';
import { Character } from '../_entities/character';
import { ActivatedRoute, Params } from '@angular/router';
import { players } from '../_data/players.data';
import {AssignmentsBwlComponent} from './assignments-bwl/assignments-bwl.component';
import {RaidTileComponent} from '../shared/raid-tile/raid-tile.component';

@Component({
  selector: 'app-assignments',
  imports: [
    AssignmentsRaidWideComponent,
    NgForOf,
    AssignmentsBwlComponent,
    RaidTileComponent,
    NgIf
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss'
})
export class AssignmentsComponent implements OnInit {
  players: Player[] = players;
  raids: Character[][] = [];
  visiblePanes: string[] = ['raid-wide', 'bwl'];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getCharactersFromQueryParams();
  }

  isPaneVisible(pane: string): boolean {
    return this.visiblePanes.includes(pane);
  }

  togglePane(pane: string) {
    if (this.isPaneVisible(pane)) {
      this.visiblePanes = this.visiblePanes.filter((visiblePane: string) => visiblePane !== pane);
    } else {
      this.visiblePanes.push(pane);
    }
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
    });
  }
}
