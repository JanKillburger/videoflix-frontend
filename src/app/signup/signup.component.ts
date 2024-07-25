import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  activationToken = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.activationToken = params['activation-token'])
  }
}
