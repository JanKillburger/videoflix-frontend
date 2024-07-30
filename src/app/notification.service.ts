import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from './models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private _notification$ = new Subject<Notification>;
  notification$ = this._notification$.asObservable()

  sendNotification(notification: Notification) {
    this._notification$.next(notification);
  }
}
