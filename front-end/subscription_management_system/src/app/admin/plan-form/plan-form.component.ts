import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PlanDTO } from '../../../interface/PlanDTO';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CapitalizePipe } from '../../capitalize.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plan-form',
  standalone: true,
  templateUrl: './plan-form.component.html',
  styleUrl: './plan-form.component.css',
  imports: [
    CardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    CapitalizePipe,
  ],
})
export class PlanFormComponent {
  subscriptionId!: number;
  subscriptionName!: string;
  plan!: PlanDTO;
  editable = true;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.subscriptionId = params['subscriptionId'];
      this.subscriptionName = params['subscriptionName'];
      this.plan = JSON.parse(params['plan']);
    });
  }
  onBuyClick() {
    console.log(this.plan);
    this.adminService.updatePlan(this.plan).subscribe((response) => {
      console.log(response);
      this.toastr.success('Edit successful!');
      this.router.navigate(['/admindashboard']);
    });
  }
}
