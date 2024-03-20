import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ActiveSubscriptionsComponent } from './active-subscriptions/active-subscriptions.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PlanFormComponent } from './admin/plan-form/plan-form.component';
import { PaymentComponent } from './payment/payment.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewPlanComponent } from './admin/new-plan/new-plan.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'active', component: ActiveSubscriptionsComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'planform', component: PlanFormComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'newplan', component: NewPlanComponent },
];
