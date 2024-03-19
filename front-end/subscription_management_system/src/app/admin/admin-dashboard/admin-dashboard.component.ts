import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { ActiveSubscriptionDTO } from '../../../interface/ActiveSubscriptionDTO';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubscriptionDTO } from '../../../interface/subscriptionDTO';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  subscriptions: SubscriptionDTO[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService
      .getAllSubscription()
      .subscribe((response: SubscriptionDTO[]) => {
        console.log(response);
        this.subscriptions = response;
      });
  }
  check() {
    console.log(this.subscriptions);
  }
}
