import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { FullBgImageContainerComponent } from '../full-bg-image-container/full-bg-image-container.component';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FullBgImageContainerComponent, FormsModule, NgIf, NgFor],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private auth: AuthService, private http: HttpClient) {}

  formData = {email: this.auth.newUserEmailAddress, password: '', passwordConfirm: ''};
  formErrors = {email: [], password: [], passwordConfirm: ''};
  success = '';

  register() {
    this.formErrors = {email: [], password: [], passwordConfirm: ''};
    this.auth.registerUser(this.formData).subscribe({
        next: () => {
          alert("User account created. Please check your mails for activation link.");
        },
        error: (err) => {
          this.formErrors.email = err.error.email;
          this.formErrors.password = err.error.password;
        }
      })
  }
}
