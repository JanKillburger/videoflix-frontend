import { NgClass, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Subject, takeUntil } from 'rxjs';
import { Notification } from '../models';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit, OnDestroy {
  constructor(private notification: NotificationService) { }

  ngOnInit(): void {
    this.notification.notification$.pipe(takeUntil(this.destroyStream$)).subscribe(notification => this.handleNotification(notification));
  }

  destroyStream$ = new Subject<void>;
  hidden = true;
  currentNotification: Notification | null = null;
  classes = ['wrapper']

  close() {
    this.hidden = true;
  }

  handleNotification(notification: Notification) {
    this.hidden = false;
    this.classes = ['wrapper', notification.type];
    this.currentNotification = notification;
    /*setTimeout(() => {
      this.close()
    }, 10000);*/
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
  }
}
