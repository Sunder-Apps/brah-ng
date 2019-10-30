import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { Alert, Answer } from './alert'

import { StorageService } from '../storage/storage.service'
import { SettingsService } from '../settings/settings.service'

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  subject:Subject<Alert[]> = new Subject<Alert[]>()
  alerts:Observable<Alert[]> = this.subject.asObservable()
  listId:string = 'pic-alerts-0'
  list:Alert[] = [
    {
      alertId: 'pic-alerts-crypto-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      message: 'This app mines cryptocurrency to supplement costs. Consider disabling your ad blocker.',
      acceptText: 'Okay',
      rejectText: 'Disable Mining',
      reject: () => { this.settingsService.set('crypto', false) }
    },
    {
      alertId: 'pic-alerts-ads-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      message: 'This app displays ads to supplement costs. Consider disabling your ad blocker.',
      acceptText: 'Okay',
      rejectText: 'Disable Ads',
      reject: () => { this.settingsService.set('ads', false) }
    },
    {
      alertId: 'pic-alerts-cookies-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      message: 'This app uses cookies for a better internet experience.',
      acceptText: 'Okay',
      infoText: 'Learn More',
      info: () => { alert('SAVING YOUR PREFERENCES WILL GIVE YOU A SEAMLESS EXPERIENCE ON THE WEB.  Literally every website uses cookies.  Get over it.'); }
    }
  ];

  constructor(private storageService:StorageService,
              private settingsService:SettingsService) {
    this.storageService.set(this.listId, '');
    this.load();
  }

  load () {
    let str = this.storageService.get(this.listId),
      json;
    if (str !== null && str !== undefined && str !== '') {
      json = JSON.parse(str);
      if (json !== null && json !== undefined) {
        this.list = { ...this.list, ...json };
      }
    }
    this.update();
  }

  dismiss (id:string, answer:Answer) {
    let index = this.list.findIndex(a => a.alertId === id);
    if (index >= 0 && index < this.list.length) {
      this.list[index].disabled = true
      this.list[index].answer = answer
    }
    this.update();
  }

  update () {
    this.subject.next(this.list);
    this.storageService.set(this.listId, JSON.stringify(this.list));
  }
}
