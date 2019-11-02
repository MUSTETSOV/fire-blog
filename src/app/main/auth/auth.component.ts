import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';


import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

   ui: firebaseui.auth.AuthUI;


   
  constructor(
    private afAuth: AngularFireAuth,
    private fix: LandingFixService
  ) {

   }

  ngOnInit() {
    this.fix.addFix();

    const uiConfig = {
      signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {

          signInSuccessWithAuthResult: this
              .onLoginSuccessful
              .bind(this)
      }

  };

  this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);

  this.ui.start('#firebaseui-auth-container', uiConfig);

  }

  ngOnDestroy() {
    this.fix.removeFix();
  }

  onLoginSuccessful() {

//    console.log("Firebase UI result:", result);

    // this.ngZone.run(() => this.router.navigateByUrl('/courses'));

}


}
