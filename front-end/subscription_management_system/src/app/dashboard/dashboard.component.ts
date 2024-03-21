import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatCardHeader, MatCard, MatCardTitle, MatCardContent } from "@angular/material/card";
import { CapitalizePipe } from "../capitalize.pipe";
import { CardComponent } from "../card/card.component";
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { AvailableSubscriptionComponent } from "../available-subscription/available-subscription.component";
import { ActiveSubscriptionsComponent } from "../active-subscriptions/active-subscriptions.component";
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports:  [
    CardComponent,
    CommonModule,
    CapitalizePipe,
    MatCardHeader,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatTab,
    MatTabGroup,
    AvailableSubscriptionComponent,
    ActiveSubscriptionsComponent
  ],
})



export class DashboardComponent implements OnInit {
  constructor(private userService: UserService){}
  ngOnInit(): void {
    console.log(this.userService.allSubscriptions);
    console.log(this.userService.availableSubscription);
    console.log(this.userService.activeSubscription);
  }


 
}
