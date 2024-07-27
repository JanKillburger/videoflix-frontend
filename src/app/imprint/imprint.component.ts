import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
constructor(private router: Router, private location: Location) {
  this.router.events.subscribe((ev) => {
    if (ev instanceof NavigationEnd) {
      //alert(ev.urlAfterRedirects)
    }
  })
}

back() {
  this.location.back();
}
}
