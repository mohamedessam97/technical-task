import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PartnersComponent } from './partners/partners.component';
import { MembershipComponent } from './membership/membership.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompaniesComponent } from './companies/companies.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { CopyRightComponent } from './copy-right/copy-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    PartnersComponent,
    MembershipComponent,
    CoursesComponent,
    CourseCardComponent,
    ContactUsComponent,
    CompaniesComponent,
    SectionComponent,
    FooterComponent,
    CopyRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
