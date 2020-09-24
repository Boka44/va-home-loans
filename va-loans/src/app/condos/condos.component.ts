import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-condos',
  templateUrl: './condos.component.html',
  styleUrls: ['./condos.component.scss']
})
export class CondosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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

  condos = [
    {
      img: "/assets/images/1.jpg",
      address: "1903 Via Madonna",
      city: "Lomita",
      zip: "90717",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
      beds: 2,
      baths: 2,
      square_feet: 19208,
      external_link: "https://www.dawnsellssandiego.com/property/200046181/",
      price: 329999
    },
    {
      img: "/assets/images/2.jpg",
      address: "1903 Via Madonna",
      city: "Lomita",
      zip: "90717",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
      beds: 8,
      baths: 0,
      square_feet: 192,
      external_link: "https://www.dawnsellssandiego.com/property/200046181/",
      price: 329999
    },
    {
      img: "/assets/images/5.jpg",
      address: "1903 Via Madonna",
      city: "Lomita",
      zip: "90717",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
      beds: 2,
      baths: 2,
      square_feet: 19208,
      external_link: "https://www.dawnsellssandiego.com/property/200046181/",
      price: 329999
    },
    {
      img: "/assets/images/4.jpg",
      address: "1903 Via Madonna",
      city: "Lomita",
      zip: "90717",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
      beds: 2,
      baths: 2,
      square_feet: 19208,
      external_link: "https://www.dawnsellssandiego.com/property/200046181/",
      price: 329999
    },
    {
      img: "/assets/images/3.jpg",
      address: "1903 Via Madonna",
      city: "Lomita",
      zip: "90717",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
      beds: 2,
      baths: 2,
      square_feet: 19208,
      external_link: "https://www.dawnsellssandiego.com/property/200046181/",
      price: 329999
    },
    {
      img: "/assets/images/1.jpg",
      address: "1903 Via Madonna",
      city: "Lomita",
      zip: "90717",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
      beds: 2,
      baths: 2,
      square_feet: 19208,
      external_link: "https://www.dawnsellssandiego.com/property/200046181/",
      price: 329999
    },
    {
      img: "/assets/images/2.jpg",
      address: "1903 Via Madonna",
      city: "Lomita",
      zip: "90717",
      state: "CA",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ",
      beds: 3,
      baths: 2,
      square_feet: 19208,
      external_link: "https://www.dawnsellssandiego.com/property/200046181/",
      price: 329999
    },
  ];
}
