import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details-leftside',
  templateUrl: './blog-details-leftside.component.html',
  styleUrls: ['./blog-details-leftside.component.scss']
})
export class BlogDetailsLeftsideComponent implements OnInit {

  blog: Blog;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.blog = this.route.snapshot.data['blog'];
  }

}
