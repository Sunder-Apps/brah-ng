import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  enabled:boolean = true
  initialized:boolean = false

  constructor (private settingsService:SettingsService) {
    this.settingsService.settings.subscribe((settings)=>{
      let old = this.enabled;
      this.enabled = settings.ads
      if (this.enabled != old) {
        this.update()
      }
    })
    this.init()
  }

  init () {
    try {
      // Initialize ads here
      this.initialized = true
    } catch (e) {

    }
  }

  update () {
    if (this.enabled) {
      this.start()
    } else {
      this.stop();
    }
  }

  start () {
    console.log('ads-start');
  }

  stop () {
    console.log('ads-stop');
  }
}
