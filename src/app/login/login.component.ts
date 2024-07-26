import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { FullBgImageContainerComponent } from '../full-bg-image-container/full-bg-image-container.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FullBgImageContainerComponent, FormsModule, NgIf, NgFor, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formData = {email: '', password: '', rememberMe: false};
  formErrors = {email: [], password: []};

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.http.put(`${environment.apiUrl}/activate/`, {activationtoken: params['activation-token']}).subscribe(res => alert(JSON.stringify(res)))})
  }

  login() {}
}
