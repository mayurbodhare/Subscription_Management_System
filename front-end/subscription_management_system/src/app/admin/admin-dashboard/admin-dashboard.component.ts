import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubscriptionDTO } from '../../../interface/subscriptionDTO';
import { CardComponent } from '../../card/card.component';
import { Router } from '@angular/router';
import { PlanDTO } from '../../../interface/PlanDTO';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  imports: [MatCardModule, CommonModule, FormsModule, CardComponent],
})
export class AdminDashboardComponent implements OnInit {
  subscriptions: SubscriptionDTO[] = [];
  editable: boolean = true;
  selectedPlan: PlanDTO | null = null;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminService
      .getAllSubscription()
      .subscribe((response: SubscriptionDTO[]) => {
        console.log(response);
        this.subscriptions = response;
      });
  }

  buyEvent(subscriptionId: number, subscriptionName: string, plan: PlanDTO) {
    this.router.navigate(['/planform'], {
      queryParams: {
        subscriptionId: subscriptionId,
        subscriptionName: subscriptionName,
        plan: JSON.stringify(plan),
      },
    });
  }

  addNewPlan(subscriptionId: number, subscriptionName: string) {
    this.router.navigate(['/newplan'], {
      queryParams: {
        subscriptionId: subscriptionId,
        subscriptionName: subscriptionName,
      },
    });
  }
}
