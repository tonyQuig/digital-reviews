import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
// import firestore from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public db: AngularFirestore;

  ref = firebase.firestore().collection('reviews');

  constructor() { }

  getReviews(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let review = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          review.push({
            key: doc.id,
            title: data.title,
            user: data.user,
            text: data.text,
            initials: data.initials,
          });
        });
        observer.next(review);
      });
    });
  }
}
