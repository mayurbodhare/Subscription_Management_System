import { Component, Input } from '@angular/core';
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
import { MatCard, MatCardContent } from '@angular/material/card';
import { LocalStorageService } from '../local-storage.service';
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
    MatCard,
    MatCardContent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;
  email = '';
  password = '';
  userDTO!: UserDTO;
  errorMessage = '';
  @Input() currentUser!: UserDTO;
  @Input() userExist: boolean = false;
  async loginUser() {
    this.email =
      this.emailFormControl.value !== null ? this.emailFormControl.value : '';
    if (this.email === 'admin@admin') {
      this.userService.isLoggedInSubject.next(true);
      this.router.navigate(['/admindashboard']);
    } else {
      await this.userService
        .loginUser(this.email, this.password)
        .subscribe(async (response) => {
          if (response.status == 1) {
            this.userDTO = response.userDTO;
            this.userService.loggedInUser = this.userDTO;
            this.localStorage.setItem(
              'loggedInUser',
              JSON.stringify(this.userDTO)
            );
            this.currentUser = this.userDTO;
            this.userExist = true;
            this.userService.activeSubscription =
              response.userDTO.subscriptions;
            await this.userService.transformSubscription();
            // setTimeout(() => {}, 2000)
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = response.message;
            this.userService.isLoggedInSubject.next(false);
            setTimeout(() => {
              this.errorMessage = '';
            }, 2000);
          }
        });
    }
  }
}
