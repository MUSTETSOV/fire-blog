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



  constructor(private blogService: BlogService) {

   this.blogs$ = blogService.loadAllBlogs();
    this.categories$ = blogService.getCategories();

     
    }

    reload() {
      this.blogs$ = this.blogService.loadAllBlogs();
    }

    webBlogs() {
      this.reload();
      this.blogs$ = this.blogs$.pipe(
        map(blogs => blogs.filter(
            blog => blog.category.includes("Web design"))));
        }

    programmingBlogs() {
      this.reload();
      this.blogs$ = this.blogs$.pipe(
        map(blogs => blogs.filter(
            blog => blog.category.includes("Programming"))));
        }

    graphicBlogs() {
      this.reload();
      this.blogs$ = this.blogs$.pipe(
        map(blogs => blogs.filter(
            blog => blog.category.includes("Graphic design"))));
        }






  ngOnInit() {

    this.reload();
  }

}
