import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SubscriptionDTO } from '../../../interface/subscriptionDTO';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-plan',
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
  templateUrl: './new-plan.component.html',
  styleUrl: './new-plan.component.css',
})
export class NewPlanComponent implements OnInit {
  newPlanForm!: FormGroup;
  subscriptionId!: number;
  subscriptionName!: string;
  subscription: SubscriptionDTO = {
    subscriptionId: this.subscriptionId,
    subscriptionName: this.subscriptionName,
    plans: [],
    subscribed: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.subscriptionId = params['subscriptionId'];
      this.subscriptionName = params['subscriptionName'];
    });

    this.newPlanForm = this.formBuilder.group({
      planName: ['', Validators.required],
      price: [null, Validators.required],
      duration: [null, Validators.required],
      upgradable: [false],
    });

    this.subscription = {
      subscriptionId: this.subscriptionId,
      subscriptionName: this.subscriptionName,
      subscribed: false,
      plans: [],
    };
  }

  submitForm() {
    if (this.newPlanForm.valid) {
      const formData = this.newPlanForm.value;
      console.log(formData);
      this.subscription.plans.push(formData);
      console.log(this.subscription);
      this.adminService
        .updateSubscription(this.subscriptionId, {
          subscriptionId: this.subscriptionId,
          subscriptionName: this.subscriptionName,
          plans: this.subscription.plans,
          subscribed: false
        })
        .subscribe((response: any) => {
          console.log(response);
          this.toastr.success('Plan added successfully!');
          this.router.navigate(['/admindashboard'])
        });
    }
  }
}
