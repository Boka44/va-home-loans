import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { Calendly } from 'src/assets/javascript/calendly';
// import { Calendly } from '../../assets/javascript/calendly';
// declare global { interface Window { Calendly: any; } }
// Calendly;


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor() { 
    
  }
  @ViewChild('container') container: ElementRef;

  // Calendly = {};

  ngOnInit(): void {
      
    // Calendly.call(initInlineWidget())
    // @ts-ignore 
    Calendly.initInlineWidget({
      url: 'https://calendly.com/financeany1?text_color=061D43&primary_color=3AB92D',
      parentElement: document.querySelector('.calendly-inline-widget')
    });
  }

  

}
