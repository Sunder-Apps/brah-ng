import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum Bar { NONE, TOP, RIGHT, BOTTOM, LEFT };

@Injectable({
  providedIn: 'root'
})
export class BarsService {
  subject:Subject<boolean[]> = new Subject<boolean[]>();
  isOpen:Observable<boolean[]> = this.subject.asObservable();

  constructor() { }

  setBar(bar:Bar) {
    let isOpen:boolean[] = [ false, false, false, false ];
    if (bar !== Bar.NONE) {
      isOpen[bar - 1] = true;
    }
    this.subject.next(isOpen)
  }
}
