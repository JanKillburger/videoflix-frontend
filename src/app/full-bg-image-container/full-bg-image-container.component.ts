import { Location, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-full-bg-image-container',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './full-bg-image-container.component.html',
  styleUrl: './full-bg-image-container.component.scss'
})
export class FullBgImageContainerComponent {
  @Input() bgImgSrc = '';
  @Input() showLoginBtn = true;

  constructor(private router: Router) {}
  
  getBackParam() {
    return this.router.url;
  }
}
