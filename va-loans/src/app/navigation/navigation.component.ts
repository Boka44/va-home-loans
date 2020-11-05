import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private _eref:ElementRef,
    private _navigationService: NavigationService
    ) { }

  ngOnInit(): void {
    this.submittedFooterNewsletter = false;
    this.formErrorFooterNewsletter = false;
    this.isEmailInvalid = false;
  }

  navToggle = false;

  toggleNav() {
    this.navToggle = !this.navToggle;
  }

  closeNav() {
    this.navToggle = false;
  }
  

  address = "411 Camino Del Rio South #300, San Diego, CA 92108";
  phone = "(619) 393 9857";
  siteEmail = "robert@valoans.app"; 
  
  footerEmailSub = "";

  submittedFooterNewsletter = false;
  formErrorFooterNewsletter = false;
  isEmailInvalid = false;

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  formSubmitFooter() {
    if(!this.validateEmail(this.footerEmailSub)) {
      this.isEmailInvalid = true;
      return;
    }
    this._navigationService.sendNewsletter({ email: this.footerEmailSub })
      .subscribe((result: any) => {
        if(result.status == 422) {
          this.isEmailInvalid = true
          return;
        }
        if(result.success == true) {
          this.submittedFooterNewsletter = true;
          this.formErrorFooterNewsletter = false;
          this.isEmailInvalid = false;
        } else {
          this.formErrorFooterNewsletter = true;
        }
      })
  };
}
