import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ActiveSubscriptionsComponent } from './active-subscriptions/active-subscriptions.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PlanFormComponent } from './admin/plan-form/plan-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'active', component: ActiveSubscriptionsComponent},
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'plan/:planId/edit', component: PlanFormComponent },
];
