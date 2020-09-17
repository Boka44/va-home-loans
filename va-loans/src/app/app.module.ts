import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { ApplyComponent } from './apply/apply.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { MortgageCalcComponent } from './mortgage-calc/mortgage-calc.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CondosComponent } from './condos/condos.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TeamComponent,
    ServicesComponent,
    ApplyComponent,
    AppointmentComponent,
    CertificateComponent,
    ContactComponent,
    MortgageCalcComponent,
    BlogComponent,
    BlogPostComponent,
    CondosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
