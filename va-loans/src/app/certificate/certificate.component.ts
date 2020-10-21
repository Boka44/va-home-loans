import { Component, OnInit } from '@angular/core';
import { CertificateService } from './certificate.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  constructor(
    private _certificateService: CertificateService
  ) { }

  isLoaded = false;

  title = "Certificate of Eligibility";
  subtitle = "Find out if you are eligigble in seconds";
  description_title = "Who needs a certificate?";
  description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.";
  
    getCertificateData() {
      this._certificateService.getAllData()
        .subscribe((result: any) => {
          let data = result.data.data.certificate_page.data[0];
          this.title = data.title;
          this.subtitle = data.subtitle;
          this.description_title = data.description_title;
          this.description = data.description;
          this.isLoaded = true;
        })
    }

  form = {
    name: "",
    email: "",
    phone: "",
    timeToReach: ""
  };

  submitted = false;
  formError = false;
  isEmailInvalid = false;

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  formSubmit() {
    if(!this.validateEmail(this.form.email)) {
      this.isEmailInvalid = true
      console.log('Email Invalid')
      return;
    }
    this._certificateService.sendCertForm(this.form)
      .subscribe((result: any) => {
        if(result.status == 422) {
          this.isEmailInvalid = true
          return;
        }
        if(result.success == true) {
          this.submitted = true;
          this.formError = false;
          this.isEmailInvalid = false;
        } else {
          this.formError = true;
        }
      })
  };

  ngOnInit(): void {
    this.getCertificateData();
    this.submitted = false;
    this.formError = false;
    this.isEmailInvalid = false;
  }
}
