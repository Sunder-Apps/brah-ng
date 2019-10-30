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

  constructor() { }

  update(bg:Background) {
    if (this.active) {
      this.subject1.next(bg)
    } else {
      this.subject2.next(bg)
    }
  }

  updateString(src:string, pos:string) {
    if (this.active) {
      this.subject1.next(new Background(src,pos))
    } else {
      this.subject2.next(new Background(src, pos))
    }
  }
}
