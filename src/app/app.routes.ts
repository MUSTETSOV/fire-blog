import { Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './home/about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { SignInComponent } from './main/sign-in/sign-in.component';




export const rootRouterConfig: Routes = [
 

    {
      path: 'sign-in',
      component: SignInComponent
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
  }



];

