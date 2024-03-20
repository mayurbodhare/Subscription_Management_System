import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { ActivatedRoute } from '@angular/router';
import { PlanDTO } from '../../../interface/PlanDTO';

@Component({
  selector: 'app-plan-form',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './plan-form.component.html',
  styleUrl: './plan-form.component.css',
})
export class PlanFormComponent implements OnInit {
  constructor(private route: ActivatedRoute){}
  plan!: PlanDTO;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.plan = data['state'].plan; 
    });
  }
}
