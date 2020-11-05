import { Component, OnInit } from '@angular/core';
import { ApplyService } from './apply.service';
import { GoogleAnalyticsService } from '../google-analytics.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  constructor(
    private _applyService: ApplyService,
    private _googleAnalyticsService: GoogleAnalyticsService
    ) { }

  isLoaded = false;

  img = "/assets/images/hero-slider/2.jpg";
  img_title = "VA Loans Made Easy";
  title = "Do I Qualify?";
  description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.";
  link = "https://www.financeany1.com/rpollorena/";

  applyBtn() {
    this._googleAnalyticsService.eventEmitter("apply_button_click", "outbound_link", this.link);
    window.location.href = this.link;
  }

  getApplyData() {
    this._applyService.getAllData()
      .subscribe((result: any) => {
        let data = result.data.data.apply_page.data[0];
        this.img = data.image.full_url;
        this.img_title = data.image_title;
        this.title = data.title;
        this.description = data.description;
        this.link = data.link;
        this.isLoaded = true;
      })
  }

  ngOnInit(): void {
    this.getApplyData();
  }
}
