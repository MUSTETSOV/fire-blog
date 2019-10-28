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
import { AuthComponent } from './main/auth/auth.component';
import { Test2Component } from './main/test2/test.component';
import { Test3Component } from './test3/test3.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


// import { CommonModule } from '@angular/common';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    ContactUsComponent,
    AuthComponent,
    Test2Component,
    Test3Component,
    SignInComponent,
    ForgetPasswordComponent

    
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
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
