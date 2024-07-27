import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { FullBgImageContainerComponent } from '../full-bg-image-container/full-bg-image-container.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FullBgImageContainerComponent, FormsModule, NgIf, NgFor, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formData = { email: '', password: '', rememberMe: false };
  formErrors = { email: [], password: [], errors: [] };

  constructor(private route: ActivatedRoute, private http: HttpClient, private auth: AuthService, private router: Router) {
    this.route.params.subscribe(params => {
      if (params['activation-token']) {
        this.http.put(`${environment.apiUrl}/activate/`, { activationtoken: params['activation-token'] }).subscribe(
          res => alert(JSON.stringify(res))
        )
      }
    })
  }

  login() {
    this.formErrors = { email: [], password: [], errors: [] };
    this.auth.loginWithEmailAndPassword(this.formData.email, this.formData.password).subscribe({
      next: () => this.router.navigateByUrl('videos'),
      error: (err) => {
        this.formErrors.email = err.error.email;
        this.formErrors.password = err.error.password;
        this.formErrors.errors = err.error.errors;
      }
    })
  }
}
