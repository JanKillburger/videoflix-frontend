import { Component } from '@angular/core';
import { VideoService } from '../video.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../models';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [VjsPlayerComponent, NgIf],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss'
})
export class WatchComponent {
  constructor(private videoService: VideoService, private route: ActivatedRoute) {
    this.videoService.getVideo(this.route.snapshot.params['id']).subscribe(res => this.video = res)
  }

  video: Video | null = null;
}
