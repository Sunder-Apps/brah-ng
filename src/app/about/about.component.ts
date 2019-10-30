import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../background/background.service';
import { Background } from '../background/background'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor(private backgroundService:BackgroundService) { }

  ngOnInit() {
  }

}
