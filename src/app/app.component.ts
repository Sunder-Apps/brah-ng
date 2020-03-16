import { Component, HostListener } from '@angular/core';
import { CryptoService } from './crypto/crypto.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SettingsService } from './settings/settings.service';
import { Theme } from './settings/settings';
import { BarsService, Bar } from './bars/bars.service';
import { AdsService } from './ads/ads.service';
import { BackgroundService } from './background/background.service';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { RouterAnimations } from './anime/anime' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [RouterAnimations]
})
export class AppComponent {
  opened:boolean = false
  theme:Theme = Theme.DARK
  snap:boolean = false
  konami:boolean = false
  konamiCode:number[] = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ]
  konamiIndex:number = 0
  subscription = fromEvent(window, 'scroll')
                 .pipe(throttleTime(200))
                 .subscribe(() => this.onScrollEvent())

  constructor (private router:Router, 
    private barsService:BarsService,
    private backgroundService:BackgroundService,
    private settingsService:SettingsService,
    private adsService:AdsService,
    private cryptoService:CryptoService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.barsService.setBar(Bar.NONE)
        this.backgroundService.trigger()
        setTimeout(this.onScrollEvent, 800)
      }
    })
    this.settingsService.settings.subscribe(settings => {
      if (settings) {
          this.theme = settings.theme
          this.snap = !settings.animations
      } 
    })
  }

  ngOnInit () {
    this.cryptoService.init()
  }

  @HostListener('document:keydown', ['$event'])
  keyDown (event: KeyboardEvent) {
    if (event.keyCode === this.konamiCode[this.konamiIndex]) {
      this.konamiIndex++
    } else {
      this.konamiIndex = 0
    }
    if (this.konamiIndex === this.konamiCode.length) {
      this.konami = true
      this.konamiIndex = 0
    }
  }

  onScrollEvent() {
    let elements = document.getElementsByClassName('vp-fade-in')
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].getBoundingClientRect().top < window.innerHeight * 3 / 4) {
        elements[i].classList.add('visible')
      }
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
