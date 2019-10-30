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
}
