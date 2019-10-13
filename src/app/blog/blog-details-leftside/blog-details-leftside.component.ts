import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog-details-leftside',
  templateUrl: './blog-details-leftside.component.html',
  styleUrls: ['./blog-details-leftside.component.scss']
})
export class BlogDetailsLeftsideComponent implements OnInit {

  blog: Blog;


  formTemplate = new FormGroup({
    caption: new FormControl(''),
    date: new FormControl(''),
    text: new FormControl('')
  });



  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }



  onSubmit(formValue) {
         //   this.resetForm();
            this.firestore.collection('blogs').doc(this.blog.id).collection('comments').add(formValue);
  }





  ngOnInit() {

    this.blog = this.route.snapshot.data['blog'];
  }

}
