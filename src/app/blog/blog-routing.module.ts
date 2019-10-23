import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogLeftsideComponent } from './blog-leftside/blog-leftside.component';

import { BlogDetailsLeftsideComponent } from './blog-details-leftside/blog-details-leftside.component';

import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogResolver } from './services/blog.resolver';
import { ContactUsComponent } from '../contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'blog',
        redirectTo: 'left-sidebar',
      },

      {
        path: 'new',
        component: BlogNewComponent,
      },
      {
        path: 'list',
        component: BlogLeftsideComponent,
      }, 

      {
        path: 'details-left-sidebar/:blogUrl',
        component: BlogDetailsLeftsideComponent,
        resolve: {
          blog: BlogResolver
        }},

        // {
        // path: 'contact', redirectTo: 'contact', pathMatch: 'full'
        // }
    ]

   
  },
  {
     path: 'contact',
     redirectTo: 'xxx'
     , pathMatch: 'full'
    // component: ContactUsComponent,
   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
