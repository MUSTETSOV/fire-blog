import { Injectable } from '@angular/core';
import { map, first } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Blog } from './blog';
import { Comment } from './model/comment';

import { convertSnaps } from './services/db.utils';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }


  loadAllBlogs(): Observable<Blog[]> {
    return this.db.collection(
      'blogs',
      ref => ref  .orderBy('date', 'desc') // 'desc' - сортировка в обратном направлении,  'asc' - наоборот       
      )
    .snapshotChanges()
    .pipe(
      map(snaps => {
          return snaps.map(snap => {                // этот кусок вынесен в отдельный файл как функция convertSnaps
          return <Blog> {                         // в db-utils.ts
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          };
          });
      }),
        first()); // добавляем его если не хотим обновлять на лету (удалить first() и запятую перед)
    }


    findBlogByUrl(blogUrl: string): Observable<Blog> {
      return this.db.collection('blogs',
          ref => ref.where('blogUrl', '==', blogUrl))
          .snapshotChanges()
          .pipe(
              map(snaps => {

                  const blogs = convertSnaps<Blog>(snaps);

                  // tslint:disable-next-line: triple-equals
                  return blogs.length == 1 ? blogs[0] : undefined;
              }),
              first()
          );
  }


  findComments(blogId: string,
  pageNumber = 0, pageSize = 3): Observable<Comment[]> {

return this.db.collection(`blogs/${blogId}/comments`,
ref => ref.orderBy('date', 'desc')
// .limit(pageSize)
// .startAfter(pageNumber * pageSize)
)
.snapshotChanges()
.pipe(
map(snaps => convertSnaps<Comment>(snaps)),
first()
);

}





  getCategories() {
    return this.db.collection ('categories', ref => ref .orderBy('name', 'asc') )
    .valueChanges();    // в отличие от MOCH добавляем .valueChanges()
 }


}


