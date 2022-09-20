import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faLink, faSquarePen, faUserPen} from '@fortawesome/free-solid-svg-icons';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxSkillBarModule } from "ngx-skill-bar";
// Importing forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { WebComponent } from './web/web.component';
import { routing } from './app.routing';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FontAwesomeModule,
    HttpClientModule,
    NgxSkillBarModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ProgressbarModule.forRoot(),

    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#6A70AB",
      innerStrokeColor: "#D54B54",
      animationDuration: 500,
      showSubtitle:false,
      unitsFontSize:'25',
      titleFontSize:'25',
      titleColor:'#D54B54',
      unitsColor:'#D54B54',
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook,faInstagram,faLinkedin,faTwitter,faSun,faUserPen,faSquarePen,faLink);
  }
 }
