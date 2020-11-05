import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { GoogleAnalyticsService } from '../google-analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private _contactService: ContactService,
    private _googleAnalyticsService: GoogleAnalyticsService
  ) { }

  isLoaded = false;

  title = "Request More Info";
  // subtitle = "Find out if you are eligigble in seconds";
  // description_title = "Who needs a certificate?";
  description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.";
  schedule_call_to_action = "Not sure where to start?";

  form = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  submitted = false;
  contactError = false;
  isEmailInvalid = false;

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  formSubmit() {
    if(!this.validateEmail(this.form.email)) {
      this.isEmailInvalid = true;
      return;
    }
    this._contactService.sendContactForm(this.form)
      .subscribe((result: any) => {
        if(result.status == 422) {
          this.isEmailInvalid = true
          return;
        }
        if(result.success == true) {
          this._googleAnalyticsService.eventEmitter("contact_form_submission", "new_lead", 'contact_page');
          this.submitted = true;
          this.contactError = false;
          this.isEmailInvalid = false;
        } else {
          this.contactError = true;
        }
      })
  };

    getContactData() {
      this._contactService.getAllData()
        .subscribe((result: any) => {
          let data = result.data.data.contact_page.data[0];
          this.title = data.title;
          this.description = data.description;
          this.schedule_call_to_action = data.schedule_call_to_action;
          this.isLoaded = true;
        })
    }

  ngOnInit(): void {
    this.getContactData();
    this.submitted = false;
    this.contactError = false;
    this.isEmailInvalid = false;
  }
}
