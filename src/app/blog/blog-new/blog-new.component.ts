import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.scss']
})

export class BlogNewComponent implements OnInit {

  
 
 // today = Date.now();

  today = new Date();


  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    date: new FormControl(''),
    author: new FormControl(''),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),
    mainText: new FormControl('')
  });



  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }  else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
        //    this.service.insertImageDetails(formValue);
            this.resetForm();
            this.firestore.collection('blogs').add(formValue);    // этой строкой записую в firestore
          });
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      author: '',
      date: this.today,
      imageUrl: '',
      category: 'Web design',
      mainText: ''
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }



  ClearForm() {
    
    this.resetForm();
  }



}
