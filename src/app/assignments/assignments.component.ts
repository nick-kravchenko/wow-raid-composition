import { Component } from '@angular/core';
import { AssignmentsBwlComponent } from './assignments-bwl/assignments-bwl.component';
import { NgForOf } from '@angular/common';
import { Player } from '../_entities/player';
import { Character } from '../_entities/character';
import { ActivatedRoute, Params } from '@angular/router';
import { players } from '../_data/players.data';

@Component({
  selector: 'app-assignments',
  imports: [
    AssignmentsBwlComponent,
    NgForOf
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss'
})
export class AssignmentsComponent {
  players: Player[] = players;
  raids: Character[][] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getCharactersFromQueryParams();
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
