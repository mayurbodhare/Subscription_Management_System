import { Component, Input } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserDTO } from '../../interface/userDTO';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatTabGroup, MatTab, LoginComponent, SignUpComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  @Input() currentUser!: UserDTO;
  @Input() userExist: boolean = false;

}
