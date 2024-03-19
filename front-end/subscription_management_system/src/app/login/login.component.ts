import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { UserDTO } from '../../interface/userDTO';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;
  email = '';
  password = '';
  userDTO!: UserDTO;

  loginUser() {
    this.email =
      this.emailFormControl.value !== null ? this.emailFormControl.value : '';

    this.userService
      .loginUser(this.email, this.password)
      .subscribe((response) => {
        console.log(response);
        this.userDTO = response.userDTO;
        console.log(this.userDTO);
        this.userService.loggedInUser = this.userDTO;
        this.userService.activeSubscription = response.userDTO.subscriptions;
        this.router.navigate(['/dashboard']);
        // this.router.navigate(['/active']);

      });
  }
}
