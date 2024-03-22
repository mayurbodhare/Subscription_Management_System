import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class CardComponent implements OnInit{

  constructor() {  }
  
  @Input() editable: boolean = false;
  @Input() plan!: PlanDTO;
  @Input() title: string = "";
  @Input() disabled: Boolean = false;
  @Input() upgradeTitle: string = "";
  @Input() removeTitle : string = "";
  @Input() subscribed: Boolean = false;
  @Output() buyEvent = new EventEmitter();
  @Output() upgradeEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  
  remainingDays: number = 0;

  ngOnInit(): void {
    if(this.plan.endDate){
      this.remainingDays = this.daysRemaining(this.plan.endDate);
    }
    else{
      this.remainingDays = 0;
    }
  }

  onButtonClick() {
    this.buyEvent.emit(this.plan);
  }
  

  onCancelClick() {
    this.cancelEvent.emit();
  }

  daysRemaining(dateStr: string): number {
    const [day, month, year] = dateStr.split('-').map(Number);
    const inputDate = new Date(year, month-1, day);
    const todayDate = new Date();
    const difference =  inputDate.getTime() - todayDate.getTime();
    const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}
}
