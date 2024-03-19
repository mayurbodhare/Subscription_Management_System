import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PlanData } from '../../interface/PlanData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor() {}

  data: PlanData = {
    price: 199,
    planName: 'Basic',
    duration: '1 Month'
  };
  editable = false;
}
