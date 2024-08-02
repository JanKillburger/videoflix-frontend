import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { AuthService } from '../auth.service';
import { textContent } from 'video.js/dist/types/utils/dom';

const VjsComponent = videojs.getComponent('Component');

class ControlBarSection extends VjsComponent {
  constructor(player: Player, options: any = {}) {
    super(player, options);
  }

  override createEl() {
    return videojs.dom.createEl('div', {
      className: 'vjs-control-bar-section'
    })
  }
}

videojs.registerComponent('ControlBarSection', ControlBarSection);


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
  @ViewChild('target', { static: true }) target!: ElementRef;
  @Input() videoTitle = 'Majestic record player';
  @Input() type: 'large-preview' | 'small-preview' | 'regular' = 'regular'
  @Input() options: {
    sources?: { src: string, type?: string }[],
    fluid: boolean,
    autoplay: 'muted' | 'auto' | 'play' | boolean,
  } = {
      sources: [{ src: 'http://127.0.0.1/media/videos/1_master.m3u8', type: 'application/x-mpegURL' }],
      autoplay: 'muted',
      fluid: true
    }
  player!: Player;

  constructor() {

  }

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    if (this.type === 'regular') {
      this.player = videojs(this.target.nativeElement, {
        ...this.options,
        controlBar: {
          skipButtons: {
            backward: 10,
            forward: 10
          },
          button: {
            controlText: this.videoTitle,
            className: 'vjs-visible-text vjs-custom-title'
          },
          subtitlesButton: {},
          progressControl: false,
          pictureInPictureToggle: false,
          currentTimeDisplay: false,
          remainingTimeDisplay: false
        },
        playbackRates: [1, 1.5, 2],
        controlBarSection: {}
      }, function onPlayerReady() {

      });
      this.player.getChild('ControlBarSection')?.addChild('currentTimeDisplay');
      this.player.getChild('ControlBarSection')?.addChild('progressControl');
      this.player.getChild('ControlBarSection')?.addChild('remainingTimeDisplay');
    } else {
      this.player = videojs(this.target.nativeElement, { ...this.options, controlBar: { playToggle: false, progressControl: false, currentTimeDisplay: false, remainingTimeDisplay: false, pictureInPictureToggle: false, fullscreenToggle: false } })
    }
  }
  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}