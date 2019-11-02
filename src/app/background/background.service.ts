import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Background } from './background';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private active:boolean = true
  private subject1:Subject<Background> = new Subject<Background>()
  private subject2:Subject<Background> = new Subject<Background>()
  background1:Observable<Background> = this.subject1.asObservable()
  background2:Observable<Background> = this.subject2.asObservable()
  bg1:Background = new Background('', '')
  bg2:Background = new Background('', '')

  constructor() { }

  update(bg:Background) {
    if (this.active) {
      if (this.bg2.src != bg.src) {
        this.bg1 = bg
        this.subject1.next(this.bg1)
        this.active = !this.active
      }
    } else {
      if (this.bg1.src != bg.src) {
        this.bg2 = bg
        this.subject2.next(this.bg2)
        this.active = !this.active
      }
    }
  }

  updateString(src:string, pos:string) {
    this.update(new Background(src, pos))
  }
}
