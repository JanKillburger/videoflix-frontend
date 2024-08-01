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
  player!: Player;

  constructor(
    private elementRef: ElementRef,
    private auth: AuthService
  ) {

  }

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target.nativeElement, {
      sources: [{ src: 'http://127.0.0.1/media/videos/1_master.m3u8', type: 'application/x-mpegURL' }],
      fluid: true,
      autoplay: 'muted',
      controlBar: {
        
        skipButtons: {
          backward: 10,
          forward: 10
        },
        volumePanel: {},
        
        button: {
          controlText: this.videoTitle,
          className: 'vjs-visible-text vjs-custom-title'
        },
        subtitlesButton: {},
        fullscreenControl: {},
        progressControl: false,
        pictureInPictureToggle: false,
        currentTimeDisplay: false,
        remainingTimeDisplay: false,
        playToggle: {}
      },
      playbackRates: [1, 1.5, 2],
      controlBarSection: {}
    }, function onPlayerReady() {
      
    });
    this.player.getChild('ControlBarSection')?.addChild('currentTimeDisplay');
    this.player.getChild('ControlBarSection')?.addChild('progressControl');
    this.player.getChild('ControlBarSection')?.addChild('remainingTimeDisplay');
  }
  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}

/*[options]="{controlBar: {skipButtons: {backward: }}, fluid: true, autoplay: 'muted', sources: [{src: video.src, type: 'application/x-mpegURL'}]}"*/