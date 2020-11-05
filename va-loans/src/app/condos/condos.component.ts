import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { GoogleAnalyticsService } from '../google-analytics.service';
import { CondosService } from './condos.service';

@Component({
  selector: 'app-condos',
  templateUrl: './condos.component.html',
  styleUrls: ['./condos.component.scss']
})
export class CondosComponent implements OnInit {

  constructor(
    private _condosService: CondosService,
    private _googleAnalyticsService: GoogleAnalyticsService
  ) { }

  ngOnInit(): void {
    this.getAllPageData();
    this.getAllCondos(this.pagination);
  }

  getAllPageData() {
    this._condosService.getAllPageData() 
      .subscribe((result: any) => {
        let data = result.data.data.condo_page.data[0];
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.img = data.image.full_url;
        this.isLoaded = true;
      })
  }

  onScroll() {
    if(this.totalCount === this.condos.length) {
      return;
    }
    this.pagination++;
    if(this.isFiltered) {
      this.getAllCondosWithFilter(this.pagination, this.searchInput, this.filterBy);
    } else {
      this.getAllCondos(this.pagination);
    }
  }

  search() {
    this.isLoadedCondos = false;
    this.condos.length = 0;
    this.condos = [];
    this.pagination = 1;
    if(this.searchInput.length === 0 || this.searchInput == "") {
      this.isFiltered = false;
      this.getAllCondos(this.pagination);
    } else {
      this.isFiltered = true;
      this.getAllCondosWithFilter(this.pagination, this.searchInput, this.filterBy);
      this._googleAnalyticsService.eventEmitter("condo_search_request", "search", this.searchInput + " : " + this.filterBy);
    }
  }

  getAllCondos(pagination) {
    this._condosService.getAllCondos(pagination)
      .subscribe((result: any) => {
        let data = result.data.data.condos.data;
        let meta = result.data.data.condos.meta;
        this.condosData = data;
        for(let i = 0; i < this.condosData.length; i++) { 
          this.condos.push(this.condosData[i]);
        }
        this.totalCount = meta.total_count;
        this.isLoadedCondos = true;
      })
  }

  getAllCondosWithFilter(pagination, filter, filterBy) {
    this._condosService.getAllCondosWithFilters(pagination, filter, filterBy)
      .subscribe((result: any) => {
        // if(result.data.data.blog_posts)
        let data = result.data.data.condos.data;
        let meta = result.data.data.condos.meta;
        this.condosData = data;
        for(let i = 0; i < this.condosData.length; i++) { 
          this.condos.push(this.condosData[i]);
        }
        this.totalCount = meta.total_count;
        this.isLoadedCondos = true;
      })
  }

  listingBtn(link) {
    this._googleAnalyticsService.eventEmitter("condo_listing_link_click", "outbound_link", link);
    // window.location.href = link;
    window.open(link, "_blank");
  }

  totalCount: Number;
  pagination = 1;
  isLoaded = false;
  isLoadedCondos = false;
  searchInput: string = "";
  isFiltered = false;
  

  title = "VA Approved Condos";
  subtitle = "Condos pre approved for VA Loans";
  img = "/assets/images/hero-slider/1.jpg";

  filters = [
    {
      name: "Keyword",
      value: "keyword"
    },
    {
      name: "City",
      value: "city"
    },
    {
      name: "Zip",
      value: "zip"
    },
  ]

  selectedFilter = this.filters[0];
  filterBy = this.selectedFilter.value;

  condosData = [];

  condos = [];
}
