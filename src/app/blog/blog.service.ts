import { Injectable } from '@angular/core';
import { map, first } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }


  loadAllBlogs(): Observable<Blog[]> {
    return this.db.collection(
      'blogs',
      ref => ref  .orderBy('date', 'desc') // 'desc' - сортировка в обратном направлении,  'asc' - наоборот
        //  .where('seqNo', '<=', 10)
          )     // находим нужный, возможны любые комбинации выборки
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


}


