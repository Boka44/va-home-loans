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

  address = "411 Camino Del Rio South #300, San Diego, CA 92108";
  phone = "(619) 393 9857";
  email = "robert@valoans.app"; 
  
}
