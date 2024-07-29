import { Component } from '@angular/core';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VideoService } from '../video.service';
import { Video } from '../models';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [VjsPlayerComponent, NgIf, RouterLink],
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.scss'
})
export class VideoDetailComponent {
  video: Video | null = null;
  constructor(private route: ActivatedRoute, private videoService: VideoService) {
    this.videoService.getVideo(this.route.snapshot.params['id']).subscribe(res => this.video = res)
  }
}
