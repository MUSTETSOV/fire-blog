

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Blog } from '../model/blog';
import {Observable, of} from 'rxjs';

import {first} from 'rxjs/operators';
import { BlogService } from '../blog.service';



@Injectable()
export class BlogResolver implements Resolve<Blog> {

    constructor(private blogService: BlogService) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Blog> {

        const blogUrl = route.paramMap.get('blogUrl');


        return this.blogService.findBlogByUrl(blogUrl);

    }

}