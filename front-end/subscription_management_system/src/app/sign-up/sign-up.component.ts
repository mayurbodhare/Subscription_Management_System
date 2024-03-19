import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserDTO } from '../../interface/userDTO';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private userService: UserService){}
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  email = "";
  password = "";
  userDTO: UserDTO ={
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    subscriptions : []
  }; 

  signUpUser(){
    this.userDTO.email = this.emailFormControl.value !== null ? this.emailFormControl.value: "";
    this.userService.signUpUser(this.userDTO).subscribe( (res) => {
      console.log(res);
        this.userDTO = res.userDTO;
        console.log(this.userDTO);
        this.userService.loggedInUser = this.userDTO;
        this.userDTO.password = "";
    })
  }
}
