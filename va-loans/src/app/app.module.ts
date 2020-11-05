import { BrowserModule, Title, Meta} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingService } from './landing/landing.service';
import { TeamService } from './team/team.service';
import { ApplyService } from './apply/apply.service';
import { CertificateService } from './certificate/certificate.service';
import { ContactService } from './contact/contact.service';
import { BlogService } from './blog/blog.service';
import { BlogPostService } from './blog-post/blog-post.service';
import { CondosService } from './condos/condos.service';
import { NavigationService } from './navigation/navigation.service';

import { CacheInterceptor } from '../assets/javascript/cache.interceptor';
import { RequestCacheService } from '../assets/javascript/requestCache.service';
import { SafePipe } from './safe.pipe';

const routes: Routes = [
  // {
  //     path: 'login',
  //     component: LoginComponent
  // },
  { 
    path: '', 
    component: NavigationComponent,
    children: [
      { 
        path: 'home', 
        component: LandingComponent,
        data: {
          title: "Home",
          description: "Va Loan info, applications, Certificate of Eligibility, get your free consultation today."
        } 
      },
      { 
        path: 'team', 
        component: TeamComponent,
        data: {
          title: "Team",
          description: "Meet the team that gets you the best rates."
        }  
      },
      { path: 'qualify', 
        component: ServicesComponent,
        children: [
          { path: '',   redirectTo: 'apply', pathMatch: 'full' }, 
          { 
            path: 'apply', 
            component: ApplyComponent,
            data: {
              title: "Apply",
              description: "Apply today for your VA Loan"
            } 
          },
          { 
            path: 'book-appointment', 
            component: AppointmentComponent,
            data: {
              title: "Book Appointment",
              description: "Get your free consultation today."
            }  
          },
          { 
            path: 'certificate-of-eligibility', 
            component: CertificateComponent,
            data: {
              title: "Certificate of Eligibility",
              description: "Request a Certificate of Eligibility, and we will contact you within 24 hours."
            } 
          },
        ]
      },
      { 
        path: 'contact', 
        component: ContactComponent,
        data: {
          title: "Contact",
          description: "Contact us for everything Va Loans."
        }  
      },
      { 
        path: 'blog', 
        component: BlogComponent,
        data: {
          title: "Blog",
          description: "Get Debriefed on the Latest VA Loan Information and Housing Market Stats."
        }  
      },
      { 
        path: 'blog-post/:id', 
        component: BlogPostComponent,
        data: {
          title: "Blog Post",
          description: "Get Debriefed on the Latest VA Loan Information and Housing Market Stats."
        }   
      },
      { 
        path: 'condos', 
        component: CondosComponent,
        data: {
          title: "VA Approved Condos",
          description: "Pre Approved VA Condos withing our network."
        }  
      },
      { 
        path: 'mortgage-calculator', 
        component: MortgageCalcComponent,
        data: {
          title: "Mortgage Calculator",
          description: "Interactive Mortgage Calculator"
        }   
      },
      { path: '',   redirectTo: 'home', pathMatch: 'full' }, 
    ]
  },
  // { path: 'home', component: LandingComponent },
  // { path: 'team', component: TeamComponent },
  // { path: 'qualify', component: ServicesComponent },
  // { path: 'apply', component: ApplyComponent },
  // { path: 'book-appointment', component: AppointmentComponent },
  // { path: 'certificate-of-eligibility', component: CertificateComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'blog-post/:id', component: BlogPostComponent },
  // { path: 'condos', component: CondosComponent },
  // { path: 'mortgage-calculator', component: MortgageCalcComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent },
];

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

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
    PageNotFoundComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: false, scrollPositionRestoration: 'enabled' })],
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatProgressSpinnerModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
    },
    RequestCacheService,
    CacheInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    },
    LandingService,
    TeamService,
    ApplyService,
    CertificateService,
    ContactService,
    BlogService,
    BlogPostService,
    CondosService,
    NavigationService,
    Title, 
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
