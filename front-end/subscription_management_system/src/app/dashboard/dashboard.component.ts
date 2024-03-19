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
import { RelationDTO } from '../../interface/RelationDTO';
import { PlanDTO } from '../../interface/PlanDTO';
import { DateFormatPipe } from '../date-format.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
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
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private dateFormatPipe: DateFormatPipe) {}
  loggedInUser: UserDTO = this.userService.loggedInUser;
  allSubscriptions!: SubscriptionDTO[];
 
  relationDTO!:RelationDTO;
  ngOnInit(): void {
    this.userService.getAllSubscriptions().subscribe((res) => {
      console.log(res);
      this.allSubscriptions = res;
      this.userService.allSubscriptions = res;
      // console.log(this.loggedInUser);
    });
  }
  buySubscription(subscription:SubscriptionDTO ,plan:PlanDTO) {
    console.log(plan);
    this.relationDTO.emailId = this.loggedInUser.email;
    this.relationDTO.subscriptionEntity = subscription;
    this.relationDTO.planEntity = plan;
    this.relationDTO.startDate = this.dateFormatPipe.transform(new Date());

    this.userService.buySubscription(this.relationDTO).subscribe((response) => {
      
    });
    
 }
}
