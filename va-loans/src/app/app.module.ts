import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //     path: 'login',
  //     component: LoginComponent
  // },
  { 
    path: '', 
    component: NavigationComponent,
    children: [
      { path: 'home', component: LandingComponent },
      { path: 'team', component: TeamComponent },
      { path: 'qualify', 
        component: ServicesComponent,
        children: [
          { path: 'apply', component: ApplyComponent },
          { path: 'book-appointment', component: AppointmentComponent },
          { path: 'certificate-of-eligibility', component: CertificateComponent },
        ]
      },
      { path: 'contact', component: ContactComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog-post', component: BlogPostComponent },
      { path: 'condos', component: CondosComponent },
      { path: 'mortgage-calculator', component: MortgageCalcComponent },
      { path: '',   redirectTo: '/creative-landing', pathMatch: 'full' }, 
    ]
  },
  { path: 'home', component: LandingComponent },
  { path: 'team', component: TeamComponent },
  { path: 'qualify', component: ServicesComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'book-appointment', component: AppointmentComponent },
  { path: 'certificate-of-eligibility', component: CertificateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: 'condos', component: CondosComponent },
  { path: 'mortgage-calculator', component: MortgageCalcComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent },
];


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
    CondosComponent,
    NavigationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: false })],
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
