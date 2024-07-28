import { Component } from '@angular/core';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Video } from '../models';
import { RouterLink } from '@angular/router';
import { VideoService } from '../video.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [VjsPlayerComponent, NgFor, RouterLink, NgIf, NgClass],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  constructor(private video: VideoService) {
    this.video.getVideos().subscribe(res => {
      this.videos = res;
      this.featuredVideo = this.videos.find(v => v.featured) ?? null;
      console.log(this.featuredVideo?.src)
    })
  }
  featuredVideo: Video | null = null;
  selectedVideo = 0;
  selectedCategory = '';
  categories = ["New on Videoflix", "Drama", "Documentary"];
  videos: Video[] = []

  getVideosByCategory(category: string) {
    return this.videos.filter(v => v.categories.map(c => c.title).includes(category));
  }

  isSelected(category: string, videoId: number) {
    return category == this.selectedCategory && videoId == this.selectedVideo;
  }

  setVideoPreview(ev: Event, video: Video | null = null, category = '') {
    if (ev.type == 'mouseenter' && video != null) {
      this.selectedVideo = video.id;
      this.selectedCategory = category;
    } else {
      this.selectedVideo = 0;
      this.selectedCategory = '';
    }
  }
}
