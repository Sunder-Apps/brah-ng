import { Component, OnInit, Output } from '@angular/core'
import { Bar, BarsService } from './bars.service'

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.less']
})
export class BarsComponent implements OnInit {
  isOpen:boolean = false
  constructor (public barsService:BarsService) { }
  
  ngOnInit() {
    this.barsService.isOpen.subscribe(bars => {
      let open = false
      bars.forEach(val => {
        console.log(val)
        if (val) {
          open = true
        }
      })
      this.isOpen = open;
    })
    this.close()
  }

  close () {
    this.barsService.setBar(Bar.NONE)
  }
}
