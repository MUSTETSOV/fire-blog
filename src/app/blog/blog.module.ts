import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogLeftsideComponent } from './blog-leftside/blog-leftside.component';
import { BlogDetailsLeftsideComponent } from './blog-details-leftside/blog-details-leftside.component';
import { BlogNewComponent } from './blog-new/blog-new.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { BlogResolver } from './services/blog.resolver';

import { EditorModule } from '@tinymce/tinymce-angular';




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
    EditorModule
   
  ],
  declarations: [
    BlogLeftsideComponent,
    BlogDetailsLeftsideComponent,
    BlogNewComponent
  ],
  providers: [BlogResolver]
})
export class BlogModule { }
