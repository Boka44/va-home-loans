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
  email = "robert@valoans.app"; 
  
  footerEmailSub = "";

  submittedFooterNewsletter = false;
  formErrorFooterNewsletter = false;

  formSubmitFooter() {
    this._navigationService.sendNewsletter({ email: this.footerEmailSub })
      .subscribe((result: any) => {
        if(result.success == true) {
          this.submittedFooterNewsletter = true;
          this.formErrorFooterNewsletter = false;
        } else {
          this.formErrorFooterNewsletter = true;
        }
      })
  };
}
