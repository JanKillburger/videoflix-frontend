import { Component } from '@angular/core';
import { FullBgImageContainerComponent } from '../full-bg-image-container/full-bg-image-container.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FullBgImageContainerComponent, NgIf, NgFor, FormsModule, NotificationComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  constructor(private http: HttpClient, private route: ActivatedRoute, private notificationService: NotificationService, private router: Router) { }

  formData = { password: '', passwordConfirm: '' };
  formErrors = { password: [], passwordConfirm: [], errors: [] };



  resetPassword() {
    this.formErrors = { password: [], passwordConfirm: [], errors: [] };
    this.http.post(`${environment.apiUrl}/reset-password/${this.route.snapshot.paramMap.get('reset-token')}/`, { password: this.formData.password }).subscribe({
      next: () => this.notificationService.sendNotification({text: "Password changed successfully. Please login.", cta: {btnText: 'Log in', function: () => this.router.navigateByUrl('/login')}, type: 'success'}),
      error: (err) => {
        this.formErrors.password = err.error.password;
        this.formErrors.errors = err.error.general;
      }
    })
  }
}
