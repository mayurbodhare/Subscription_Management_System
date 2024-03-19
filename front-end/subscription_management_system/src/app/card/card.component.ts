import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD
import { PlanData } from '../../interface/PlanData';
=======
import { PlanDTO } from '../../interface/PlanDTO';
>>>>>>> a7977d12fd427f9faaacdf6100a56c302542bdc3

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
<<<<<<< HEAD
  constructor() {}

  data: PlanData = {
    price: 199,
    planName: 'Basic',
    duration: '1 Month'
  };
  editable = false;
=======
  @Input() plan!: PlanDTO;
>>>>>>> a7977d12fd427f9faaacdf6100a56c302542bdc3
}
