import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserDTO } from '../../interface/userDTO';
import { UserService } from '../../services/user.service';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;
  email = '';
  password = '';
  userDTO: UserDTO = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    subscriptions: [],
  };
  errorMessage = '';
  @Input() currentUser!: UserDTO;
  @Input() userExist: boolean = false;
  signUpUser() {
    this.userDTO.email =
      this.emailFormControl.value !== null ? this.emailFormControl.value : '';
    this.userService.signUpUser(this.userDTO).subscribe((res) => {
      console.log(res);
      if (res.status === 1) {
        this.userDTO = res.userDTO;
        console.log(this.userDTO);
        this.userService.loggedInUser = this.userDTO;
        this.currentUser = this.userDTO;
        this.userExist = true;
        this.userDTO.password = '';
        this.userService.transformSubscription();
        this.userService.loggedInUser.subscriptions = [];
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = res.message;
        this.userService.isLoggedInSubject.next(false);
        setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
      }
    });
  }
}
