import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubscriptionDTO } from '../../../interface/subscriptionDTO';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlanDTO } from '../../../interface/PlanDTO';
import { MatInputModule } from '@angular/material/input';
import { AdminService } from '../../../services/admin.service';

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
  ],
  templateUrl: './new-plan.component.html',
  styleUrl: './new-plan.component.css',
})
export class NewPlanComponent implements OnInit {
  // constructor(private route: ActivatedRoute) {}
  // subscriptionId!: number;
  // subscriptionName!: string;
  // planName!: string;
  // price!: number;
  // duration!: number;
  // upgradable!: boolean;
  // subscription: SubscriptionDTO = {
  //   subscriptionId: this.subscriptionId,
  //   subscriptionName: this.subscriptionName,
  //   plans: [],
  // };

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe((params: Params) => {
  //     this.subscriptionId = params['subscriptionId'];
  //     this.subscriptionName = params['subscriptionName'];
  //   });
  // }
  // formData = [
  //   {
  //     planName: '',
  //     price: null,
  //     duration: null,
  //     upgradable: false,
  //   },
  // ];
  // addNewPlan() {
  //   const formData = [
  //     {
  //       planName: this.planName,
  //       price: this.price,
  //       duration: this.duration,
  //       upgradable: this.upgradable,
  //     },
  //   ];
  //   console.log(formData);
  //   this.subscription.plans.push();
  // }
  // submitForm() {}
  newPlanForm!: FormGroup;
  subscriptionId!: number;
  subscriptionName!: string;
  subscription!: SubscriptionDTO;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
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
        .updateSubscription(this.subscriptionId, this.subscription)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
