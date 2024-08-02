import { AfterViewInit, Component } from '@angular/core';
import { VideoService } from '../video.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Video } from '../models';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [VjsPlayerComponent, NgIf, RouterLink, NgClass],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss'
})
export class WatchComponent implements AfterViewInit{
  constructor(private videoService: VideoService, private route: ActivatedRoute) {
    this.videoService.getVideo(this.route.snapshot.params['id']).subscribe(res => this.video = res)
  }
  userActive = true;
  video: Video | null = null;

  ngAfterViewInit() {
    this.toggleUserActivity(3000);
  }

  toggleUserActivity(timeout: number) {
    this.userActive = true;
    setTimeout(() => {
      this.userActive = false;
    }, timeout);
  }
}
