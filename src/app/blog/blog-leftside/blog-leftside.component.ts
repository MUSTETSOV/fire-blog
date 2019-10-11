import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-leftside',
  templateUrl: './blog-leftside.component.html',
  styleUrls: ['./blog-leftside.component.scss']
})
export class BlogLeftsideComponent implements OnInit {


  blogs$;
  categories$;

  constructor(blogService: BlogService) {

    this.blogs$ = blogService.loadAllBlogs();
    this.categories$ = blogService.getCategories();
   }

  ngOnInit() {
  }

}
