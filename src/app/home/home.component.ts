import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe/subscribe.service';
import { AlertsService } from '../alerts/alerts.service';
import { Alert, Answer } from '../alerts/alert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
