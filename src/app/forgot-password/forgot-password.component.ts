import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FullBgImageContainerComponent } from '../full-bg-image-container/full-bg-image-container.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FullBgImageContainerComponent, FormsModule, NgFor, NgIf, NotificationComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  constructor(private http: HttpClient, private notificationService: NotificationService) { }
  @ViewChild('email') email!: NgModel;
  formData = { email: '' };
  formErrors = { email: [] };
  emailIsValid = false;
  checkEmail() {
    if (this.email.valid) {
      this.http.post(`${environment.apiUrl}/check-email/`, this.formData).subscribe({
        next: () => {
          this.emailIsValid = true;
          this.formErrors.email = [];
        },
        error: (err) => this.formErrors.email = err.error.error
      })
    }
  }
  requestPasswordReset() {
    this.http.post(`${environment.apiUrl}/request-password-reset/`, this.formData).subscribe({
      next: () => this.notificationService.sendNotification({text: 'Email with reset link sent. Please check.', type: 'success'}),
      error: () => this.notificationService.sendNotification({text: 'Something went wrong. Please try again.', type: 'error'})
    })
  }
}
