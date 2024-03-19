import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PlanDTO } from '../../interface/PlanDTO';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() editable: boolean = false;
  @Input() plan!: PlanDTO;
  @Output() buyEvent = new EventEmitter;
  @Input() onButtonClick() {
    this.buyEvent.emit(this.plan);
  }
}
