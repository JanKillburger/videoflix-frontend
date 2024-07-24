import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
email = '';
error = '';
success = '';

constructor(private http: HttpClient) {}

register() {
  this.error = '';
  this.http.post(
    `${environment.apiUrl}/signup/`, {'email': this.email}
  ).subscribe({
      next: () => this.success = 'Activation mail sent. Please check.',
      error: (err) => this.error = err.error.email.join("\n")
    })
}
}
