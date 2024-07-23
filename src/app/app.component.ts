import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VjsPlayerComponent } from './vjs-player/vjs-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VjsPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'videoflix-frontend';
}
