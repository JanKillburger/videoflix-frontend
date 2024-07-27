import { Component } from '@angular/core';
import { FullBgImageContainerComponent } from '../full-bg-image-container/full-bg-image-container.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FullBgImageContainerComponent, NgIf, NgFor, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
formData = {password: '', passwordConfirm: ''};
formErrors = {password: [], passwordConfirm: [], errors: []};

resetPassword() {
  
}
}
