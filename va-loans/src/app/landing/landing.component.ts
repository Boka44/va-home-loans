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
import { LandingService } from './landing.service';
import { GoogleAnalyticsService } from '../google-analytics.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent implements OnInit {

  constructor(
      config: NgbCarouselConfig, 
      public sanitizer: DomSanitizer,
      private _landingService: LandingService,
      private _googleAnalyticsService: GoogleAnalyticsService
    ) {
    // customize default values of carousels used by this component tree
    // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.video_link);

    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  isLoaded = false;


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
    // '/assets/images/hero-slider/1.jpg',
    // '/assets/images/hero-slider/2.jpg',
    // '/assets/images/hero-slider/3.jpg'
  ];

  testimonials = [
    // {
    //   name: "Testy McTestface",
    //   city: "San Diego",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    //   image: "./assets/images/testimonials/1.jpg"
    // },
    // {
    //   name: "Testy McTestface",
    //   city: "San Diego",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    //   img: "./assets/images/testimonials/2.jpg"
    // },
    // {
    //   name: "Testy McTestface",
    //   city: "San Diego",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    //   img: "./assets/images/testimonials/3.jpg"
    // },
    // {
    //   name: "Testy McTestface",
    //   city: "San Diego",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    //   img: "./assets/images/testimonials/4.jpg"
    // },
    // {
    //   name: "Testy McTestface",
    //   city: "San Diego",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    //   img: "./assets/images/testimonials/5.jpg"
    // }
  ]

  urlSafe;

  // talent = [[]];
  alert_text = "";
  hero_title = "";
  video_title = "";
  video_link = "";
  newsletter_title = "";
  newsletter_subtitle = "";
  contact_title = "";
  contact_description = "";

  email;

  form = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  submitted = false;
  contactError = false;
  isEmailInvalid = false;

  formSub = {
    email: ""
  };

  submittedSub = false;
  contactErrorSub = false;
  isEmailInvalidSub = false;

  getHomeData() {
    this._landingService.getAllData()
      .subscribe((result: any) => {
        let data = result.data.data.home_page.data[0];
        this.alert_text = data.alert_text;
        this.contact_description = data.contact_description;
        this.contact_title = data.contact_title;
        this.hero_title = data.hero_title;
        this.newsletter_subtitle = data.newsletter_subtitle;
        this.newsletter_title = data.newsletter_title;
        this.video_title = data.video_title;
        this.video_link = data.video_link;
        this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.video_link);
        this.slides = [];
        data.slider_images.forEach((i) => {
          this.slides.push(i.img.full_url);
        });
        this.testimonials = [];
        data.testimonials.forEach((i) => {
          // let mediumContainImg = i.image.thumbnails[3].url;
          this.testimonials.push({
            name: i.name,
            city: i.city,
            description: i.description,
            state: i.state,
            // img: mediumContainImg
          });
        });
        this.isLoaded = true;
      });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  subscriptionFormSubmit() {
    if(!this.validateEmail(this.formSub.email)) {
      this.isEmailInvalidSub = true
      return;
    }
    this._landingService.sendNewsletter(this.formSub)
      .subscribe((result: any) => {
        if(result.status == 422) {
          this.isEmailInvalidSub = true
          return;
        }
        if(result.success == true) {
          this._googleAnalyticsService.eventEmitter("newsletter_signup", "new_lead", 'home_page');
          this.submittedSub = true;
          this.contactErrorSub = false;
          this.isEmailInvalidSub = false;
        } else {
          this.contactErrorSub = true;
        }
      })
  };

  formSubmit() {
    if(!this.validateEmail(this.form.email)) {
      this.isEmailInvalid = true
      return;
    }
    this._landingService.sendContactForm(this.form)
      .subscribe((result: any) => {
        if(result.status == 422) {
          this.isEmailInvalid = true
          return;
        }
        if(result.success == true) {
          this._googleAnalyticsService.eventEmitter("contact_form_submission", "new_lead", 'home_page');
          this.submitted = true;
          this.contactError = false;
          this.isEmailInvalid = false;
        } else {
          this.contactError = true;
        }
      })
  };

  ngOnInit(): void {
    this.getHomeData();
    this.submitted = false;
    this.contactError = false;
    this.isEmailInvalid = false;

    this.submittedSub = false;
    this.contactErrorSub = false;
    this.isEmailInvalidSub = false;
  }

}
