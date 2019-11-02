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
import { ContactUsComponent } from './contact-us/contact-us.component';



import { FormsModule } from '@angular/forms';
import { SignInComponent } from './main/sign-in/sign-in.component';





@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    ContactUsComponent,
    
    SignInComponent



    
    ],

  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    // CommonModule,

    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
