import { Component, input, OnInit } from '@angular/core';
import { SubscriptionDTO } from '../../interface/subscriptionDTO';
import { CardComponent } from '../card/card.component';
import { UserService } from '../../services/user.service';
import { UserDTO } from '../../interface/userDTO';
import { CapitalizePipe } from '../capitalize.pipe';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ActiveSubscriptionDTO } from '../../interface/ActiveSubscriptionDTO';

@Component({
  selector: 'app-active-subscriptions',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    CapitalizePipe,
    MatCardHeader,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
  ],
  templateUrl: './active-subscriptions.component.html',
  styleUrl: './active-subscriptions.component.css'
})
export class ActiveSubscriptionsComponent implements OnInit{
  constructor(private userService: UserService) {}
  loggedInUser: UserDTO = this.userService.loggedInUser;
  activeSubscriptions: ActiveSubscriptionDTO[] = this.userService.activeSubscription;
  ngOnInit(): void {
    console.log(this.userService.loggedInUser);
  }

}
