import {Component, OnInit} from '@angular/core';
import { AssignmentsRaidWideComponent } from './assignments-raid-wide/assignments-raid-wide.component';
import { Player } from '../_entities/player';
import { Character } from '../_entities/character';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import { players } from '../_data/players.data';
import { AssignmentsBwlComponent } from './assignments-bwl/assignments-bwl.component';
import { RaidTileComponent } from '../shared/raid-tile/raid-tile.component';
import { AssignmentsT4Component } from './assignments-t4/assignments-t4.component';
import { AssignmentsSscComponent } from './assignments-ssc/assignments-ssc.component';
import { AssignmentsTkComponent } from './assignments-tk/assignments-tk.component';

enum PaneNameEnum {
  RaidWide = 'raid-wide',
  Bwl = 'bwl',
  Aq40 = 'aq40',
  Naxxramas = 'naxxramas',
  Magtheridon = 'magtheridon',
  Ssc = 'ssc',
  Tk = 'tk',
}

@Component({
  selector: 'app-assignments',
  imports: [
    AssignmentsRaidWideComponent,
    AssignmentsBwlComponent,
    RaidTileComponent,
    AssignmentsT4Component,
    AssignmentsSscComponent,
    AssignmentsTkComponent,
    RouterLink,
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss'
})
export class AssignmentsComponent implements OnInit {
  PaneNameEnum = PaneNameEnum;
  players: Player[] = players;
  raids: Character[][] = [];
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
      [PaneNameEnum.Naxxramas]: 'raids-naxxramas.webp',
      [PaneNameEnum.Magtheridon]: 'pit-lord.gif',
      [PaneNameEnum.Ssc]: 'naga-sea-witch.png',
      [PaneNameEnum.Tk]: 'hero-blood-elf-prince.png',
    };
    return `assets/icons/${icons[pane as PaneNameEnum]}`;
  }

  togglePane(raidId: number, pane: string) {
    this.activeTabs[raidId] = pane as PaneNameEnum;
  }

getCharacterByCharacterName(characterName: string): (Character & { player: Player }) | undefined {
  for (const player of this.players) {
    const foundCharacter = player.characters?.find((c: Character) => c.name === characterName);
    if (foundCharacter) {
      return { ...foundCharacter, player };
    }
  }

  return undefined;
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
