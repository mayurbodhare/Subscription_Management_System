import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { CardComponent } from "./card/card.component";
<<<<<<< HEAD
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
=======
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> a7977d12fd427f9faaacdf6100a56c302542bdc3

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
<<<<<<< HEAD
    imports: [RouterOutlet, MatSlideToggleModule, LoginComponent, SignUpComponent, CardComponent, AdminDashboardComponent]
=======
    imports: [RouterOutlet, MatSlideToggleModule, LoginComponent, SignUpComponent, CardComponent, DashboardComponent]
>>>>>>> a7977d12fd427f9faaacdf6100a56c302542bdc3
})
export class AppComponent {
  title = 'subscription_management_system';
}
