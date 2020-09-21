import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private _eref:ElementRef) { }

  ngOnInit(): void {
  }

  navToggle = false;

  toggleNav() {
    this.navToggle = !this.navToggle;
  }

  closeNav() {
    this.navToggle = false;
  }

  address = "497 Evergreen Rd. Roseville, CA 95673";
  phone = "+44 345 678 903";
  email = "adobexd@mail.com"; 
  
}
