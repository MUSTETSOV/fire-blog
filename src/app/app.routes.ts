import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { BlogLeftsideComponent } from './blog/blog-leftside/blog-leftside.component';
import { AboutComponent } from './home/about/about.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';

export const rootRouterConfig: Routes = [
 
  { 
      path: '',
      component: MainComponent
    },
 
  // { 
  //   path: '', 
  //   redirectTo: 'main', 
  //   pathMatch: 'full' 
  // },
  // { 
  //   path: 'main',
  //   component: DemoComponent
  // },
  // { 
  //   path: 'home', 
  //   loadChildren: './home/home.module#HomeModule'
  // },
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
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
  { 
    path: '**', 
    component: BlogComponent
  }
];

