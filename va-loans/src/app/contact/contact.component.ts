import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private _contactService: ContactService
  ) { }

  isLoaded = false;

  title = "Request More Info";
  // subtitle = "Find out if you are eligigble in seconds";
  // description_title = "Who needs a certificate?";
  description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.";
  schedule_call_to_action = "Not sure where to start?";

  form: Object = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  submitted = false;
  contactError = false;

  formSubmit() {
    let errors = [];
    // if()
    this._contactService.sendContactForm(this.form)
      .subscribe((result: any) => {
        if(result.success == true) {
          this.submitted = true;
          this.contactError = false;
        } else {
          this.contactError = true;
        }
        console.log(result);
        console.log('happening');
      })
    // this.submitted = true;
    console.log(this.form)
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
  }
}
