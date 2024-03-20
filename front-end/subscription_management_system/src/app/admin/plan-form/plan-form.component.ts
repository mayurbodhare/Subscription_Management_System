import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SubscriptionDTO } from '../../../interface/subscriptionDTO';
import { PlanDTO } from '../../../interface/PlanDTO';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-plan-form',
  standalone: true,
  imports: [
    CardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './plan-form.component.html',
  styleUrl: './plan-form.component.css',
})
export class PlanFormComponent {
  constructor() {}

  subscription!: SubscriptionDTO;
  plans!: PlanDTO;
  activated: boolean = false;
}
