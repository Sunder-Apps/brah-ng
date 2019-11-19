import { Component, OnInit, Renderer2 } from '@angular/core'
import { Bar, BarsService } from './bars.service'

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.less']
})
export class BarsComponent implements OnInit {
  isOpen:boolean = false
  constructor (public barsService:BarsService,
               public renderer2:Renderer2) { }
  
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
      if (this.isOpen) {
        this.renderer2.addClass(document.body, 'open')
      } else {
        this.renderer2.removeClass(document.body, 'open')
      }
    })
    this.close()
  }

  close () {
    this.barsService.setBar(Bar.NONE)
  }
}
