import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  previousUrl = ''
  constructor(private location: Location, private router: Router, private route: ActivatedRoute) {
    this.previousUrl = this.route.snapshot.queryParams['back'] ?? '';
    console.log(this.previousUrl)
  }

  back() {
    this.router.navigateByUrl(this.previousUrl);
  }
}
