import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { FullBgImageContainerComponent } from '../full-bg-image-container/full-bg-image-container.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FullBgImageContainerComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(public auth: AuthService) {}
  /*register() {
    this.error = '';
    this.http.post(
      `${environment.apiUrl}/signup/`, {'email': this.email}
    ).subscribe({
        next: () => this.success = 'Activation mail sent. Please check.',
        error: (err) => this.error = err.error.email.join("\n")
      })
  }*/
}
