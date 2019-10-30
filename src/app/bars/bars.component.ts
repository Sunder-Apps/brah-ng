import { Component, OnInit, Output } from '@angular/core';
import { Bar, BarsService } from './bars.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.less']
})
export class BarsComponent implements OnInit {

  constructor (public barsService:BarsService) { }
  
  ngOnInit() { 
    this.barsService.setBar(Bar.NONE);
  }
}
