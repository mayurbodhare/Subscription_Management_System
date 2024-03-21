import { Component, Input, input, OnInit } from '@angular/core';
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
import { PaymentComponent } from '../payment/payment.component';
import { ActiveSubscriptionDTO } from '../../interface/ActiveSubscriptionDTO';

class RelationDTOImpl implements RelationDTO {
  constructor(
    public emailId: string,
    public startDate: string,
    public endDate: string | undefined,
    public subscriptionEntity: any,
    public planEntity: any
  ) {}
}
@Component({
  selector: 'app-available-subscription',
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
    PaymentComponent
  ],
  templateUrl: './available-subscription.component.html',
  styleUrl: './available-subscription.component.css'
})
export class AvailableSubscriptionComponent implements OnInit {
  constructor(private userService: UserService, private dateFormatPipe: DateFormatPipe) {}
  loggedInUser: UserDTO = this.userService.loggedInUser;
  allSubscriptions: SubscriptionDTO[] = this.userService.availableSubscription;
  activeSubscriptions : ActiveSubscriptionDTO[] = this.userService.activeSubscription;
  relationDTO:RelationDTO = new RelationDTOImpl('', '', '', null, null);;
  errorMessage = '';
  amount = 0;
  clickedSubscription!: SubscriptionDTO;
  clickedPlan!: PlanDTO;
  ngOnInit(): void {
    
    // this.userService.getAllSubscriptions().subscribe((res) => {
    //   console.log(res);
    //   this.allSubscriptions = res;
    //   this.userService.allSubscriptions = res;
    //   // console.log(this.loggedInUser);
    // });
  }

  handleClick(subscription:SubscriptionDTO ,plan:PlanDTO){
    if (subscription.subscribed) {
      var currentSubscription = this.activeSubscriptions.find( activeSubscription => activeSubscription.subscriptionDTO.subscriptionId === subscription.subscriptionId );
      this.amount = plan.price - (currentSubscription?.planDTO?.price || 1);
      
    } else {
    this.amount = plan.price;
  }
    this.clickedSubscription = subscription;
    this.clickedPlan = plan;
  }

  buySubscription(subscription:SubscriptionDTO ,plan:PlanDTO) {
    this.amount = 0;
    this.relationDTO.emailId = this.loggedInUser.email;
    this.relationDTO.subscriptionEntity = subscription;
    this.relationDTO.planEntity = plan;
    this.relationDTO.startDate = this.dateFormatPipe.transform(new Date());
    
    this.userService.buySubscription(this.relationDTO).subscribe((response) => {
      console.log(response);
      if(response.status === 1){
        this.userService.activeSubscription = response.userDTO.subscriptions;
        this.errorMessage = response.message;
          setTimeout(() => {
            this.errorMessage = '';
          }, 2000);
      }else{
        this.errorMessage = response.message;
          setTimeout(() => {
            this.errorMessage = '';
          }, 2000);
      }
    });
  
 }

}
