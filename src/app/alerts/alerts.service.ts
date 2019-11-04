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
  listId:string = 'brah-alerts-0'
  list:Alert[] = [
    {
      alertId: 'brah-alerts-crypto-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      message: 'This app mines cryptocurrency to supplement costs. Consider disabling your ad blocker.',
      acceptText: 'Okay',
      rejectText: 'Disable Mining',
      reject: () => { this.settingsService.set('crypto', false) }
    },
    /*{
      alertId: 'brah-alerts-ads-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      message: 'This app displays ads to supplement costs. Consider disabling your ad blocker.',
      acceptText: 'Okay',
      rejectText: 'Disable Ads',
      reject: () => { this.settingsService.set('ads', false) }
    },*/
    {
      alertId: 'brah-alerts-cookies-0',
      alertClass: 'info',
      disabled: false,
      answer: Answer.NONE,
      message: 'This app uses cookies for a better internet experience.',
      acceptText: 'Okay',
      infoText: 'Learn More',
      info: () => { alert('C is for 🍪; That\'s good enough for me.'); }
    }
  ];

  constructor(private storageService:StorageService,
              private settingsService:SettingsService) {
    //this.storageService.set(this.listId, '');
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
    let index = this.list.findIndex(a => a.alertId === id)
    if (index > -1 && index < this.list.length) {
      let alert = this.list[index]
      alert.disabled = true
      alert.answer = answer
      this.list.splice(index, 1)
      this.list.unshift(alert)
    }
    this.update();
  }

  update () {
    this.subject.next(this.list);
    this.storageService.set(this.listId, JSON.stringify(this.list))
  }

  push (alert:Alert) {
    if (this.list.length) {
      var index = this.list.findIndex(a => a.alertId === alert.alertId)
      if (index > -1 && index < this.list.length) {
        this.list.splice(index, 1)
      }
      this.list.push(alert)
    } else {
      this.list = [alert]
    }
    this.update()
  }
}
