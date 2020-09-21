import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent implements OnInit {

  constructor(config: NgbCarouselConfig, public sanitizer: DomSanitizer) {
    // customize default values of carousels used by this component tree
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.video_link);

    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }


  swiperIndex = 2;
  swiperConfig :SwiperConfigInterface = {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    speed: 300,
    autoplay: true,
    // autoplayStopOnLast: false,
    // loopAdditionalSlides: 5,
    // slidesOffsetBefore: 100,
    // slidesOffsetAfter: 100,
    spaceBetween: 50,
    breakpoints: {
      1000: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true
  }
  
  
  slides = [
    '/assets/images/hero-slider/1.jpg',
    '/assets/images/hero-slider/2.jpg',
    '/assets/images/hero-slider/3.jpg'
  ];

  testimonials = [
    {
      name: "Testy McTestface",
      city: "San Diego",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
      img: "./assets/images/testimonials/1.jpg"
    },
    {
      name: "Testy McTestface",
      city: "San Diego",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
      img: "./assets/images/testimonials/2.jpg"
    },
    {
      name: "Testy McTestface",
      city: "San Diego",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
      img: "./assets/images/testimonials/3.jpg"
    },
    {
      name: "Testy McTestface",
      city: "San Diego",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
      img: "./assets/images/testimonials/4.jpg"
    },
    {
      name: "Testy McTestface",
      city: "San Diego",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
      img: "./assets/images/testimonials/5.jpg"
    }
  ]

  urlSafe;

  // talent = [[]];
  alert_text = "Are you looking for a certificate of eligibility?";
  hero_title = "VA Home Loans";
  video_title = "Meet Your Lender";
  video_link = "https://www.youtube.com/embed/OHVuER8om2A";
  newsletter_title = "Subscribe Now!";
  newsletter_subtitle = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr";
  contact_title = "Request More Info";
  contact_description = "Lorem ipsum dolor sit amet, consecing eliumy eirmod tempotr, sed diam non invidunt ut larbore et dolore magna aliquyam erat, ised diamar voluptua, Lorem ipsum dodsar sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ipsum dolor magna aliquyam erat, sed diam voluptua, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.";

  email;

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
