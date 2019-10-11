import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Blog } from '../blog';


@Component({
  selector: 'app-blog-leftside',
  templateUrl: './blog-leftside.component.html',
  styleUrls: ['./blog-leftside.component.scss']
})
export class BlogLeftsideComponent implements OnInit {


  blogs$: Observable<Blog[]>;
  categories$;
  webBlogs$;



  constructor(blogService: BlogService) {

   this.blogs$ = blogService.loadAllBlogs();
    this.categories$ = blogService.getCategories();

    
   
    }

    webBlogs() {
      this.blogs$ = this.blogs$.pipe(
        map(blogs => blogs.filter(
            blog => blog.category.includes("Web design"))));
        }






  ngOnInit() {
  }

}
