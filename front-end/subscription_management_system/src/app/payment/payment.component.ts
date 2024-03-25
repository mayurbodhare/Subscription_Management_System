import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  constructor(private userService: UserService ,private route: ActivatedRoute, private router: Router){}
  @Input() amount:number = 0;
  @Output() buyEvent = new EventEmitter();
  @Output() backEvent = new EventEmitter();

  handleClick() {
   this.buyEvent.emit();
   this.userService.transformSubscription();
  }

  handleBack() {
    this.backEvent.emit();
  }

}
