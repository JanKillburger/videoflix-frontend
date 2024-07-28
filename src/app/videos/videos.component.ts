import { Component } from '@angular/core';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Video } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [VjsPlayerComponent, NgFor, RouterLink, NgIf, NgClass],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  selectedVideo = 0;
  selectedCategory = '';
  categories = ["New on Videoflix", "Drama", "Documentary"];
  videos: Video[] = [
    {
      id: 1,
      title: "Rhythms of Friendship",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia eligendi facilis nostrum cumque debitis commodi et id a soluta.",
      categories: ["New on Videoflix", "Drama"],
      poster: "../../assets/img/poster-rhythms-of-friendship.jpeg",
      src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'
    },
    {
      id: 2,
      title: "Majestic Whales",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia eligendi facilis nostrum cumque debitis commodi et id a soluta.",
      categories: ["New on Videoflix", "Documentary"],
      poster: "../../assets/img/poster-majestic-whales.jpeg",
      src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'
    }
  ];

  getVideosByCategory(category: string) {
    return this.videos.filter(v => v.categories.includes(category));
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
