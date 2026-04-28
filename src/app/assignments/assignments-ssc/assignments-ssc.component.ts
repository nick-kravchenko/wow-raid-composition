import {Component, Input} from '@angular/core';
import {Character} from '../../_entities/character';

@Component({
  selector: 'app-assignments-ssc',
  imports: [],
  templateUrl: './assignments-ssc.component.html',
  styleUrl: './assignments-ssc.component.scss'
})
export class AssignmentsSscComponent {
  @Input() raid: Character[] = [];
}