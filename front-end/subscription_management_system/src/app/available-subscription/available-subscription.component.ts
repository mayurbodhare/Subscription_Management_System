import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
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
import { LocalStorageService } from '../local-storage.service';
import { List } from 'immutable';
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
  constructor(private userService: UserService, private dateFormatPipe: DateFormatPipe, private localStorage:LocalStorageService) {}
  @Input() loggedInUser: UserDTO = this.userService.loggedInUser;
  @Input() activeSubscriptions = List<ActiveSubscriptionDTO>(this.userService.activeSubscription);
  @Output() activeSubscriptionChange:EventEmitter<ActiveSubscriptionDTO[]> = new EventEmitter<ActiveSubscriptionDTO[]>;
  
  allSubscriptions: SubscriptionDTO[] = this.userService.availableSubscription //JSON.parse(this.localStorage.getItem('allSubscriptions') || 'null');
  relationDTO:RelationDTO = new RelationDTOImpl('', '', '', null, null);;
  errorMessage = '';
  amount = 0;
  clickedSubscription!: SubscriptionDTO;
  clickedPlan!: PlanDTO;
  currentSubscription !: ActiveSubscriptionDTO;
  upgrade = false;
  ngOnInit(): void {
    
    // this.userService.getAllSubscriptions().subscribe((res) => {
    //   console.log(res);
    //   this.allSubscriptions = res;
    //   this.userService.allSubscriptions = res;
    //   // console.log(this.loggedInUser);
    // });
  }

  handleClick(subscription:SubscriptionDTO ,plan:PlanDTO){
    this.currentSubscription = this.activeSubscriptions?.find(activeSubscription => activeSubscription.subscriptionDTO.subscriptionId === subscription.subscriptionId) as ActiveSubscriptionDTO;
    if (subscription.subscribed) {
      this.amount = (plan.price - this.currentSubscription?.planDTO?.price)<0 ? (plan.price - this.currentSubscription?.planDTO?.price) : 0;
      if((plan.price - this.currentSubscription?.planDTO?.price)<0){
        this.amount = 0;
        this.errorMessage = "sorry cannot downgrade your plan!!!!";
        setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
      }else{
        this.upgrade = true;
        this.amount = plan.price - this.currentSubscription.planDTO.price;
      }
    } else {
    this.amount = plan.price;
  }
    this.clickedSubscription = subscription;
    this.clickedPlan = plan;
  }

  handleBack(){
    this.amount = 0;
  }

  async buySubscription(subscription:SubscriptionDTO ,plan:PlanDTO) {
    this.amount = 0;
    this.relationDTO.emailId = this.loggedInUser.email;
    this.relationDTO.subscriptionEntity = subscription;
    this.relationDTO.planEntity = plan;
    this.relationDTO.startDate = this.dateFormatPipe.transform(new Date());
    if (this.upgrade) {
      await this.userService.upgradeSubscription(this.relationDTO).subscribe((response) => {
        console.log(response);
        if(response.status === 1){
          this.userService.activeSubscription =  response.userDTO.subscriptions;
          this.activeSubscriptions = List(response.userDTO.subscriptions);
          this.activeSubscriptionChange.emit(this.activeSubscriptions.toArray());
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
      })
    } else {
      await this.userService.buySubscription(this.relationDTO).subscribe((response) => {
        console.log(response);
        if(response.status === 1){
          this.userService.activeSubscription =  response.userDTO.subscriptions;
          this.activeSubscriptions = List(response.userDTO.subscriptions);
          this.activeSubscriptionChange.emit(this.activeSubscriptions.toArray());
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

}
