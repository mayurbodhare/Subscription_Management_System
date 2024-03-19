import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CardComponent } from './card/card.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveSubscriptionsComponent } from './active-subscriptions/active-subscriptions.component';

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
  ],
})
export class AppComponent {
  title = 'subscription_management_system';
}
