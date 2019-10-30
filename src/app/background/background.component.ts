import { Component, OnInit, HostListener } from '@angular/core';
import { throttle } from '../decorators';
import { Background } from './background';
import { BackgroundService } from './background.service';
import { fromEvent } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.less']
})
export class BackgroundComponent implements OnInit {
  scrollTop = 0
  lastScrollTop = 0
  bg1 = new Background('', '')
  bg2 = new Background('', '')
  active = true
  subscription = fromEvent(window, 'scroll')
                 .pipe(throttleTime(500))
                 .subscribe(() => this.onScrollEvent())
  constructor(private backgroundService:BackgroundService) { }

  ngOnInit() {
    this.backgroundService.background1.subscribe(bg => {
      this.bg2.src = bg.src;
      this.bg2.pos = bg.pos;
      this.active = false;
    })
    this.backgroundService.background2.subscribe(bg => {
      this.bg1.src = bg.src;
      this.bg1.pos = bg.pos;
      this.active = true;
    })
    this.onScrollEvent()
  }
  
  onScrollEvent() {
    console.log('onscrollEvent')
    if (this.bg1 && this.bg2) {
      this.lastScrollTop = this.scrollTop
      this.scrollTop = window.pageYOffset 
        || document.documentElement.scrollTop 
        || document.body.scrollTop || 0
      let images = document.getElementsByClassName('bg'),
          closestIndex = -1
      if (images.length == 0) {
        console.log('0');
        setTimeout(this.onScrollEvent, 300)
      } else if (images.length == 1) {
        console.log('1');
        closestIndex = 0;
      } else  {
        console.log('>1')
        for (let i = 0; i < images.length - 1; i++) {
          let top = images[i].getBoundingClientRect().top
          if (top >= 0  && top < window.innerHeight / 2) {
            closestIndex = i;
          }
        }
      }

      if (closestIndex >= 0 && closestIndex < images.length) {
        let src = images[closestIndex].getAttribute('src'),
            pos = images[closestIndex].getAttribute('pos')
            console.log(this.bg1, this.bg2)
        if (this.active) {
          if (src != this.bg1.src && src != this.bg2.src) {
            this.backgroundService.update(new Background(src, pos))
          }
        } else {
          if (src != this.bg2.src && src != this.bg1.src) {
            this.backgroundService.update(new Background(src, pos))
          }
        }
      }    
    }
  } 
}
