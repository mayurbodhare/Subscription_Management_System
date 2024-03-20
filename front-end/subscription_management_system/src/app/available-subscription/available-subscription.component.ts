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
  ],
  templateUrl: './available-subscription.component.html',
  styleUrl: './available-subscription.component.css'
})
export class AvailableSubscriptionComponent implements OnInit {
  constructor(private userService: UserService, private dateFormatPipe: DateFormatPipe) {}
  loggedInUser: UserDTO = this.userService.loggedInUser;
  allSubscriptions!: SubscriptionDTO[];
 
  relationDTO:RelationDTO = new RelationDTOImpl('', '', '', null, null);;
  errorMessage = '';
  ngOnInit(): void {
    this.userService.getAllSubscriptions().subscribe((res) => {
      console.log(res);
      this.allSubscriptions = res;
      this.userService.allSubscriptions = res;
      // console.log(this.loggedInUser);
    });
  }
  buySubscription(subscription:SubscriptionDTO ,plan:PlanDTO) {
    
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
