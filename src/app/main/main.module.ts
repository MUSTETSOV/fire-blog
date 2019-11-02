import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth/auth.component';

import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,



  ],
  declarations: [
    MainComponent,
    AuthComponent,
    SignInComponent
  ],
})
export class MainModule { }
