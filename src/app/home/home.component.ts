import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { FullBgImageContainerComponent } from '../full-bg-image-container/full-bg-image-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule, FullBgImageContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
email = '';
error = '';
success = '';

constructor(public auth: AuthService) {}


}
