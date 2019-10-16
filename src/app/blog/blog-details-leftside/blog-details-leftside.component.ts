import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-details-leftside',
  templateUrl: './blog-details-leftside.component.html',
  styleUrls: ['./blog-details-leftside.component.scss']
})
export class BlogDetailsLeftsideComponent implements OnInit {

  blog: Blog;
  comments: Comment[];

   // comments$: Observable<any> = this.firestore.collection('blogs').doc(this.blog.id).collection('comments').valueChanges();


  //comments$: Observable<any> = this.firestore.collection('blogs').doc(this.blog.id).collection('comments').get();
  
  


  serverTime = Date.now();
  temp = 'temp';


  formTemplate = new FormGroup({
    caption: new FormControl(''),
    date: new FormControl(''),
    text: new FormControl(''),
    nowdate: new FormControl('')
  });


 date = {
    serverTime: this.serverTime,
    temp: this.temp
};



  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, private blogService: BlogService) { }



  onSubmit(formValue) {
         //   this.resetForm();
            this.firestore.collection('blogs').doc(this.blog.id).collection('comments').add(formValue);
            // рабочий
            // this.firestore.collection('blogs').doc(this.blog.id).collection('comments').add(this.date);

  }



  ngOnInit() {

    this.blog = this.route.snapshot.data['blog'];
    

  //  this.loading = true;

    this.blogService.findComments(this.blog.id)
  //   .pipe(
  //     finalize(() => this.loading = false)
  // )
    .subscribe(
        comments => this.comments = comments
    );





  }

}
