import { Component, OnInit } from '@angular/core'
import { SubscribeService } from './subscribe.service'
import { AlertsService } from '../alerts/alerts.service'
import { Answer } from '../alerts/alert'

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.less']
})
export class SubscribeComponent implements OnInit {
  email = ''
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
