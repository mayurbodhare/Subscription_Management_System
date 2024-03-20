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
import { RelationDTO } from '../../interface/RelationDTO';
import { PlanDTO } from '../../interface/PlanDTO';
import { DateFormatPipe } from '../date-format.pipe';
import { ActivatedRoute, Router } from '@angular/router';
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
    DateFormatPipe
  ],
  templateUrl: './active-subscriptions.component.html',
  styleUrl: './active-subscriptions.component.css',
})
export class ActiveSubscriptionsComponent implements OnInit {

  constructor(private userService: UserService, private dateFormatPipe: DateFormatPipe,private route: ActivatedRoute, private router: Router) {}
  loggedInUser: UserDTO = this.userService.loggedInUser;
  activeSubscriptions: ActiveSubscriptionDTO[] =
    this.userService.activeSubscription;
    relationDTO:RelationDTO = new RelationDTOImpl('', '', '', null, null);;
    errorMessage = '';
  ngOnInit(): void {
    console.log(this.userService.loggedInUser);
    this.userService.getActiveSubscriptions().subscribe((res) => {
      this.activeSubscriptions = res;
      this.userService.activeSubscription = res;
    });
  }
  upgradeSubscription(subscription:SubscriptionDTO ,plan:PlanDTO): void {
    console.log(plan);
    this.router.navigate(['/payment', {amount:plan.price}]);
  }
  cancelSubscription(subscription: SubscriptionDTO,plan: PlanDTO) {

    this.relationDTO.emailId = this.loggedInUser.email;
    this.relationDTO.subscriptionEntity = subscription;
    this.relationDTO.planEntity = plan;
    this.relationDTO.startDate = this.dateFormatPipe.transform(new Date());
    this.userService.cancelSubscriptiopn(this.relationDTO).subscribe((response) => {
      console.log(response);
      if (response.status === 1) {
        this.userService.activeSubscription = response.userDTO.subscriptions;
        this.activeSubscriptions = response.userDTO.subscriptions;
        this.errorMessage = response.message;
          setTimeout(() => {
            this.errorMessage = '';
          }, 2000);
      }
      else{
        this.errorMessage = response.message;
          setTimeout(() => {
            this.errorMessage = '';
          }, 2000);
      }
      
    });
  }
}
