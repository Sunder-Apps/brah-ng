import { Component, OnInit } from '@angular/core'
import { Bar, BarsService } from '../bars.service'

@Component({
  selector: 'app-bars-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.less']
})
export class LeftComponent implements OnInit {
  bar:Bar = Bar.LEFT
  isOpen:boolean = false

  constructor(public barsService:BarsService) {
    barsService.isOpen.subscribe((isOpen) => {
      if (isOpen[this.bar - 1] && this.isOpen === false) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    })
  }

  ngOnInit() { }

  close () {
    this.barsService.setBar(Bar.NONE)
  }

  toggle () {
    if (this.isOpen) {
      this.barsService.setBar(Bar.NONE)
    } else {
      this.barsService.setBar(Bar.LEFT)
    }
  }
}
