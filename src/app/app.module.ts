import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { BlogComponent } from './blog/blog.component';
import * as $ from 'jquery';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './home/about/about.component';


import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';




@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
   ContactUsComponent



  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
