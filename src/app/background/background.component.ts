import { Component, OnInit } from '@angular/core';
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
    this.backgroundService.activate.subscribe(a => {
      this.onScrollEvent()
    })
  }
  
  onScrollEvent() {
    console.log('onscrollEvent', this.bg1, this.bg2)
    if (this.bg1 && this.bg2) {
      this.scrollTop = window.pageYOffset 
        || document.documentElement.scrollTop 
        || document.body.scrollTop || 0
      let images = document.getElementsByClassName('bg')
      console.log(images)
      if (images.length > 0) {
        let closestIndex = 0,
          closest = Math.abs(images[0].getBoundingClientRect().top - window.innerHeight / 4)
        for (let i = 1; i < images.length; i++) {
          let top = Math.abs(images[i].getBoundingClientRect().top - window.innerHeight / 4)
          console.log(top)
          if (top < closest) {
            closestIndex = i;
            closest = top
          }
        }
        
        let src = images[closestIndex].getAttribute('src'),
            pos = images[closestIndex].getAttribute('pos')
            console.log(closest, closestIndex, src, pos)
        this.backgroundService.update(new Background(src, pos))
      }
    }
  } 
}
