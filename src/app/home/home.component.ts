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
  email:string = ''
  constructor(private subscribeService:SubscribeService,
              private alertsService:AlertsService) { }

  ngOnInit() { }

  send () {
    if (this.email != '') {
      this.subscribeService.send(this.email).subscribe(
        success => {
          console.log(success)
          this.alertsService.push({
            alertId: 'brah-alerts-sub-success-0',
            alertClass: 'info',
            message: 'Success! Check your email for confirmation.',
            link: () => { window.open('https://mail.google.com/', '_blank') },
            linkText: 'GMail',
            reject: () => {},
            rejectText: 'Dismiss',
            disabled: false,
            answer: Answer.NONE
          })
        },
        failure => {
          console.log(failure)
          this.alertsService.push({
            alertId: 'brah-alerts-sub-failure-0',
            alertClass: 'danger',
            message: 'Something went wrong!  Try again at: http://eepurl.com/gdXTYH',
            link: () => { window.open('http://eepurl.com/gdXTYH', '_blank') },
            linkText: 'Go',
            reject: () => {},
            rejectText: 'Dismiss',
            disabled: false,
            answer: Answer.NONE
          })
        }
      )
    }
  }
}
