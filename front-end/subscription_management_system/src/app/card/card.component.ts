import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PlanDTO } from '../../interface/PlanDTO';
import { CapitalizePipe } from '../capitalize.pipe';

@Component({ 
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CapitalizePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor() {}
  @Input() editable: boolean = false;
  @Input() plan!: PlanDTO;
  @Input() buyTitle: string = "";
  @Input() upgradeTitle: string = "";
  @Input() removeTitle : string = "";
  @Output() buyEvent = new EventEmitter();
  @Output() upgradeEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  
 

  onBuyClick() {
    this.buyEvent.emit(this.plan);
  }
  
  onUpgradeClick() {
    this.upgradeEvent.emit();
  }

  onCancelClick() {
    this.cancelEvent.emit();
  }


}
