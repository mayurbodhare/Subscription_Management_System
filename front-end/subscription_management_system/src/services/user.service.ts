import { Injectable } from '@angular/core';
// import { UserDTO } from '../interface/UserDTO';
import { HttpClient } from '@angular/common/http';
import { LoginResponseDTO } from '../interface/LoginResponseDTO';
import { UserDTO } from '../interface/userDTO';
import { Observable, Subscription } from 'rxjs';
import { SubscriptionDTO } from '../interface/subscriptionDTO';
import { ActiveSubscriptionDTO } from '../interface/ActiveSubscriptionDTO';
import { RelationDTO } from '../interface/RelationDTO';
import { AvailableSubscriptionComponent } from '../app/available-subscription/available-subscription.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  loginResponse: any;
  loggedInUser!: UserDTO;
  availableSubscription : SubscriptionDTO[] = [];
  allSubscriptions: SubscriptionDTO[] = [];
  activeSubscription : ActiveSubscriptionDTO[] = [];
  constructor(private http: HttpClient) {}
  url = 'http://192.168.5.110';

  loginUser(email: any, password: any): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.url}/user/login`, {
      email,
      password,
    });
  }

  signUpUser(user: UserDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.url}/user/signup`, user);
  }

  getAllSubscriptions(): Observable<SubscriptionDTO[]>{
    return this.http.get<SubscriptionDTO[]>(`${this.url}/admin`);
  }

  getActiveSubscriptions(): Observable<ActiveSubscriptionDTO[]>{
    return this.http.get<ActiveSubscriptionDTO[]>(`${this.url}/user/active`);
  }

  buySubscription(relationDTO: RelationDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.url}/user/buy`, relationDTO);
  }

  cancelSubscriptiopn(relationDTO: RelationDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.url}/user/cancel`, relationDTO);
  }

  // async transformSubscription(){
  // this.allSubscriptions = this.allSubscriptions.map( subscription => {
  //   this.activeSubscription.map( activeSubscription => {
  //     if (activeSubscription.subscriptionDTO.subscriptionId === subscription.subscriptionId) {
  //       subscription.subscribed = true;
  //       var tempSubscription = subscription;
  //       tempSubscription.plans.filter( plan => plan.planId !== activeSubscription.planDTO.planId)
  //       this.availableSubscription.push(tempSubscription);
  //     }
  //     else{
  //       // this.availableSubscription.push(subscription);
  //       subscription.subscribed = false;
  //     }
  //   })
  //   return subscription;
  // });
  // }

  async transformSubscription() {
    this.allSubscriptions = this.allSubscriptions.map(subscription => {
      const isActiveSubscription = this.activeSubscription.some(activeSubscription => {
        return activeSubscription.subscriptionDTO.subscriptionId === subscription.subscriptionId;
      });
  
      if (isActiveSubscription) {
        subscription.subscribed = true;
        const activeSubscription = this.activeSubscription.find(activeSubscription => {
          return activeSubscription.subscriptionDTO.subscriptionId === subscription.subscriptionId;
        });
  
        if (activeSubscription) {
          const filteredPlans = subscription.plans.filter(plan => {
            return plan.planId !== activeSubscription.planDTO.planId;
          });
          subscription.plans = filteredPlans;
          this.availableSubscription.push(subscription);
        }
      } else {
        subscription.subscribed = false;
        this.availableSubscription.push(subscription);
      }
  
      return subscription;
    });
  }
  

}
