import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vjs-player',
  standalone: true,
  template: `
    <video #target class="video-js" controls playsinline preload="auto"></video>
  `,
  styleUrls: [
    './vjs-player.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})

export class VjsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target!: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input({required: true}) options!: {
      fluid: boolean,
      autoplay: boolean | 'muted' | 'play' | 'any',
      sources: {
        src: string,
        type: string
      }[]      
  };

  player!: Player;

  constructor(
    private elementRef: ElementRef,
    private auth: AuthService
  ) {
    
  }

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      
    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}