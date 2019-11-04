import { Component, OnInit } from '@angular/core'
import { ContactService } from './contact.service'
import { Contact } from './contact'
import { AlertsService } from '../alerts/alerts.service'
import { Alert, Answer } from '../alerts/alert'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  name = ''
  email = ''
  subject = ''
  message = ''
  sendToEmail = 'brahctopus@gmail.com'
  sendToName = 'Brahctopus Ink'

  constructor(private contactService:ContactService,
              private alertsService:AlertsService) { }

  ngOnInit () { }

  send () {
    this.contactService.send(new Contact(this.name, this.email, this.subject, this.message, this.sendToEmail, this.sendToName)).subscribe(
      success => {
        console.log(success)
        this.alertsService.push({
          alertId: 'brah-alerts-contact-success-0',
          alertClass: 'info',
          message: 'Success! Brahctopus has received your message.',
          reject: () => { },
          rejectText: 'Dismiss',
          disabled: false,
          answer: Answer.NONE
        })
      },
      failure => {
        console.log(failure)
        this.alertsService.push({
          alertId: 'brah-alerts-contact-failure-0',
          alertClass: 'danger',
          message: 'Something went wrong!  Email the Brahs directly at brahctopus@gmail.com',
          link: () => { window.open('mailto:brahctopus@gmail.com', '_blank') },
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
