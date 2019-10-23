import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BlogService } from '../blog.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-blog-details-leftside',
  templateUrl: './blog-details-leftside.component.html',
  styleUrls: ['./blog-details-leftside.component.scss']
})
export class BlogDetailsLeftsideComponent implements OnInit {

  blog: Blog;
  comments: Comment[];



  serverTime = Date.now();
  
  formTemplate = new FormGroup({
    caption: new FormControl(''),
    text: new FormControl(''),
    date: new FormControl('')
  });


 date = {
    serverTime: this.serverTime
};
  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, private blogService: BlogService) { }

  onSubmit(formValue) {
            this.firestore.collection('blogs').doc(this.blog.id).collection('comments').add(formValue);
            // рабочий
            // this.firestore.collection('blogs').doc(this.blog.id).collection('comments').add(this.date);
            this.resetForm();
           
         
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      text: '',
      date: ''
    });
    this.viewComments();
  }

  ngOnInit() {

   
    this.viewComments();

    

  }

  viewComments() {
      this.blog = this.route.snapshot.data['blog'];
      this.blogService.findComments(this.blog.id)
      
      .subscribe(
          comments => this.comments = comments
          
      );
  }
}
