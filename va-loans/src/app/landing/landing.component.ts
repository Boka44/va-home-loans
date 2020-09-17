import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  slides = [
    '/assets/images/hero-slider/1.jpg',
    '/assets/images/hero-slider/2.jpg',
    '/assets/images/hero-slider/3.jpg'
  ];

  // talent = [[]];
  hero_title = "VA Home Loans";
  video_title = "";
  video_link = "";
  newsletter_title = "";
  newsletter_subtitle = "";
  contact_title = "";


  ngOnInit(): void {
    // let j = 0;
    // for(let i = 0; i < 16; i++) {
    //   if(i !== 0 && i % 4 == 0) {
    //     this.talent.push([]);
    //     j++;
    //   }
    //   this.talent[j].push(`/assets/images/people/${i + 1}.jpg`);
    // }
  }

}
