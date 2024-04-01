import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardComponent } from './card/card.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveSubscriptionsComponent } from './active-subscriptions/active-subscriptions.component';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { UserService } from '../services/user.service';
import { MatButton } from '@angular/material/button';
import { UserDTO } from '../interface/userDTO';
import { LocalStorageService } from './local-storage.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    LoginComponent,
    SignUpComponent,
    CardComponent,
    DashboardComponent,
    AdminDashboardComponent,
    ActiveSubscriptionsComponent,
    MatIcon,
    MatToolbar,
    MatButton,
    AsyncPipe,
    CommonModule,
    FormsModule,
  ],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'subscription_management_system';
  emptyUser: UserDTO = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    subscriptions: [],
  };

  currentUser: UserDTO = this.emptyUser;
  // userExist: boolean = false;
  userExist$!: Observable<boolean>; // Observable to track user existence

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.userExist$ = this.localStorage.loggedInUser$.pipe(
      map((user) => user !== null)
    );
  }
  ngOnInit(): void {
    this.userService.getAllSubscriptions().subscribe((res) => {
      this.userService.allSubscriptions = res;
      this.localStorage.setItem('allSubscriptions', JSON.stringify(res));
      this.currentUser = this.emptyUser;
      this.userExist$ = this.localStorage.loggedInUser$.pipe(
        map((user) => user !== null)
      );
    });
  }

  handleClick() {
    this.userService.loggedInUser = this.emptyUser;
    this.currentUser = this.emptyUser;
    this.localStorage.clearLoggedInUser();
    this.router.navigate(['/landing', this.currentUser, this.userExist$]);
  }

  logout() {
    this.userService.logout(); 
    this.currentUser = this.emptyUser; 
    this.localStorage.clear();
    this.router.navigate(['/landing']);
  }
  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
