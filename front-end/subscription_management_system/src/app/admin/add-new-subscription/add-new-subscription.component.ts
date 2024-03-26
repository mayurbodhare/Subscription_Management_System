import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SubscriptionDTO } from '../../../interface/subscriptionDTO';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-add-new-subscription',
  standalone: true,
  imports: [
    MatFormField,
    MatCheckbox,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatLabel,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add-new-subscription.component.html',
  styleUrl: './add-new-subscription.component.css',
})
export class AddNewSubscriptionComponent implements OnInit {
  newPlanForm!: FormGroup;

  subscription: SubscriptionDTO = {
    subscriptionId: 0,
    subscriptionName: '',
    plans: [],
    subscribed: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {}
  ngOnInit(): void {
    this.newPlanForm = this.formBuilder.group({
      subscriptionName: ['', Validators.required],
      planName: ['', Validators.required],
      price: [null, Validators.required],
      duration: [null, Validators.required],
      upgradable: [false],
    });
  }
  newPlan() {
    if (this.newPlanForm.valid) {
      const formData = this.newPlanForm.value;
      this.subscription.plans.push(formData);
      this.subscription.subscriptionName = formData.subscriptionName;
      this.newPlanForm = this.formBuilder.group({
        subscriptionName: [this.subscription.subscriptionName],
        planName: ['', Validators.required],
        price: [null, Validators.required],
        duration: [null, Validators.required],
        upgradable: [false],
      });
    }
  }
  submitForm() {
    if (this.newPlanForm.valid) {
      const formData = this.newPlanForm.value;
      console.log(formData);
      this.subscription.subscriptionName = formData.subscriptionName;
      delete formData.subscriptionName;
      console.log(formData);
      this.subscription.plans.push(formData);

      console.log(this.subscription);
      this.adminService
        .createSubscription(this.subscription)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/admindashboard']);
        });
    }
  }
}
