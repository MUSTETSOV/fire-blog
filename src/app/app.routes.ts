import { Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './home/about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthComponent } from './main/auth/auth.component';
import { Test2Component } from './main/test2/test.component';
import { Test3Component } from './test3/test3.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';



export const rootRouterConfig: Routes = [

  {
      path: 'test2',
      component: Test2Component
    },
    {
      path: 'auth',
      component: AuthComponent
    },
    {
      path: '',
      component: MainComponent
    },

  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'home/about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '**',
    component: BlogComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'pass',
    component: ForgetPasswordComponent
  },



];

