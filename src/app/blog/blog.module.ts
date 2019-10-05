import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogLeftsideComponent } from './blog-leftside/blog-leftside.component';
import { BlogRightsideComponent } from './blog-rightside/blog-rightside.component';
import { BlogDetailsLeftsideComponent } from './blog-details-leftside/blog-details-leftside.component';
import { BlogDetailsRightsideComponent } from './blog-details-rightside/blog-details-rightside.component';
import { BlogNewComponent } from './blog-new/blog-new.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    // HttpModule,
    // HttpClientModule
  ],
  declarations: [
    BlogListComponent,
    BlogDetailsComponent,
    BlogLeftsideComponent,
    BlogRightsideComponent,
    BlogDetailsLeftsideComponent,
    BlogDetailsRightsideComponent,
    BlogNewComponent
  ]
})
export class BlogModule { }
