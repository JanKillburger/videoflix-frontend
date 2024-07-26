import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  activationToken = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.activationToken = params['activation-token'])
  }
}
