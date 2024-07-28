import { Component } from '@angular/core';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component';
import { NgFor } from '@angular/common';
import { Video } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [VjsPlayerComponent, NgFor, RouterLink],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  categories = ["New on Videoflix", "Drama", "Documentary"];
  videos: Video[] = [
    {
      title: "Rhythms of Friendship",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia eligendi facilis nostrum cumque debitis commodi et id a soluta.",
      categories: ["New on Videoflix", "Drama"],
      poster: "../../assets/img/poster-rhythms-of-friendship.jpeg"
    },
    {
      title: "Majestic Whales",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia eligendi facilis nostrum cumque debitis commodi et id a soluta.",
      categories: ["New on Videoflix", "Documentary"],
      poster: "../../assets/img/poster-majestic-whales.jpeg"
    }
  ];

  getVideosByCategory(category: string) {
    return this.videos.filter(v => v.categories.includes(category));
  }
}
