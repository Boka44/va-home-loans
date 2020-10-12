import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CondosService } from './condos.service';

@Component({
  selector: 'app-condos',
  templateUrl: './condos.component.html',
  styleUrls: ['./condos.component.scss']
})
export class CondosComponent implements OnInit {

  constructor(
    private _condosService: CondosService
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
    console.log(this.searchInput)
    this.condos.length = 0;
    this.condos = [];
    this.pagination = 1;
    if(this.searchInput.length === 0 || this.searchInput == "") {
      console.log(this.searchInput);
      this.isFiltered = false;
      console.log(this.condos)
      this.getAllCondos(this.pagination);
    } else {
      this.isFiltered = true;
      this.getAllCondosWithFilter(this.pagination, this.searchInput, this.filterBy);
    }
  }

  getAllCondos(pagination) {
    this._condosService.getAllCondos(pagination)
      .subscribe((result: any) => {
        console.log(result)
        let data = result.data.data.condos.data;
        let meta = result.data.data.condos.meta;
        this.condosData = data;
        for(let i = 0; i < this.condosData.length; i++) { 
          this.condos.push(this.condosData[i]);
        }
        this.totalCount = meta.total_count;
        console.log(this.condos)
        console.log(data)
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
    // console.log(link)
    window.location.href = link;
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

  condos = [
    // {
    //   img: "/assets/images/1.jpg",
    //   address: "1903 Via Madonna",
    //   city: "Lomita",
    //   zip: "90717",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
    //   beds: 2,
    //   baths: 2,
    //   square_feet: 19208,
    //   external_link: "https://www.dawnsellssandiego.com/property/200046181/",
    //   price: 329999
    // },
    // {
    //   img: "/assets/images/2.jpg",
    //   address: "1903 Via Madonna",
    //   city: "Lomita",
    //   zip: "90717",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
    //   beds: 8,
    //   baths: 0,
    //   square_feet: 192,
    //   external_link: "https://www.dawnsellssandiego.com/property/200046181/",
    //   price: 329999
    // },
    // {
    //   img: "/assets/images/5.jpg",
    //   address: "1903 Via Madonna",
    //   city: "Lomita",
    //   zip: "90717",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
    //   beds: 2,
    //   baths: 2,
    //   square_feet: 19208,
    //   external_link: "https://www.dawnsellssandiego.com/property/200046181/",
    //   price: 329999
    // },
    // {
    //   img: "/assets/images/4.jpg",
    //   address: "1903 Via Madonna",
    //   city: "Lomita",
    //   zip: "90717",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
    //   beds: 2,
    //   baths: 2,
    //   square_feet: 19208,
    //   external_link: "https://www.dawnsellssandiego.com/property/200046181/",
    //   price: 329999
    // },
    // {
    //   img: "/assets/images/3.jpg",
    //   address: "1903 Via Madonna",
    //   city: "Lomita",
    //   zip: "90717",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
    //   beds: 2,
    //   baths: 2,
    //   square_feet: 19208,
    //   external_link: "https://www.dawnsellssandiego.com/property/200046181/",
    //   price: 329999
    // },
    // {
    //   img: "/assets/images/1.jpg",
    //   address: "1903 Via Madonna",
    //   city: "Lomita",
    //   zip: "90717",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
    //   beds: 2,
    //   baths: 2,
    //   square_feet: 19208,
    //   external_link: "https://www.dawnsellssandiego.com/property/200046181/",
    //   price: 329999
    // },
    // {
    //   img: "/assets/images/2.jpg",
    //   address: "1903 Via Madonna",
    //   city: "Lomita",
    //   zip: "90717",
    //   state: "CA",
    //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
    //   beds: 3,
    //   baths: 2,
    //   square_feet: 19208,
    //   external_link: "https://www.dawnsellssandiego.com/property/200046181/",
    //   price: 329999
    // },
  ];
}
