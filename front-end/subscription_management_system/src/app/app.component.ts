import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { SignUpComponent } from "./sign-up/sign-up.component";
=======
import { CardComponent } from "./card/card.component";
>>>>>>> 4c99817432cb270d9f4bc707f9bb0f69d400a673

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
<<<<<<< HEAD
    imports: [RouterOutlet, MatSlideToggleModule, LoginComponent, SignUpComponent]
=======
    imports: [RouterOutlet, MatSlideToggleModule, LoginComponent, CardComponent]
>>>>>>> 4c99817432cb270d9f4bc707f9bb0f69d400a673
})
export class AppComponent {
  title = 'subscription_management_system';
}
