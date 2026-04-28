import {Component, Input} from '@angular/core';
import {Character} from '../../_entities/character';

@Component({
  selector: 'app-assignments-tk',
  imports: [],
  templateUrl: './assignments-tk.component.html',
  styleUrl: './assignments-tk.component.scss'
})
export class AssignmentsTkComponent {
  @Input() raid: Character[] = [];
}