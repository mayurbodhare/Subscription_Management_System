import { Component, input, OnInit } from '@angular/core';
import { SubscriptionDTO } from '../../interface/subscriptionDTO';
import { CardComponent } from '../card/card.component';
import { UserService } from '../../services/user.service';
import { UserDTO } from '../../interface/userDTO';
import { CapitalizePipe } from "../capitalize.pipe";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CardComponent, CapitalizePipe]
})
export class DashboardComponent implements OnInit{

  constructor(private userService: UserService){}
  loggedInUser : UserDTO = this.userService.loggedInUser;
  allSubscriptions!: SubscriptionDTO[];
  ngOnInit(): void {
    this.userService.getAllSubscriptions().subscribe((res) => {
      console.log(res);
      this.allSubscriptions = res;
      this.userService.allSubscriptions = res;
      // console.log(this.loggedInUser);
    })
  }


  

}
