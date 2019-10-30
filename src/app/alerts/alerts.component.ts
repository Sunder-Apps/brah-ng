import { Component, OnInit } from '@angular/core';
import { AlertsService } from './alerts.service';
import { Alert, Answer } from './alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.less']
})
export class AlertsComponent implements OnInit {
  alerts:Alert[]

  constructor(private alertsService:AlertsService) { }

  ngOnInit() { 
    this.alertsService.alerts.subscribe((alerts) => {
      this.alerts = alerts;
    })
    this.alertsService.update();
  }

  dismiss (alertId:string, answer:Answer) {
    this.alertsService.dismiss(alertId, answer);
  }
}
