import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { FirebaseService } from './services/firebase-service.service';

const config = {
  apiKey: "AIzaSyAtqCxfa8V40v9sjJzB-UYvkNLHAH3cC7k",
  authDomain: "screen-cloud-f8c9a.firebaseapp.com",
  databaseURL: "https://screen-cloud-f8c9a.firebaseio.com",
  projectId: "screen-cloud-f8c9a",
  storageBucket: "screen-cloud-f8c9a.appspot.com",
  messagingSenderId: "933948910394"
}
const settings = { timestampsInSnapshots: true };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'screenCloud';
  public $reviews: Observable<any>;

  constructor(public _firebaseService: FirebaseService) {
  }

  ngOnInit() {
    // firebase.initializeApp(config);
    // firebase.firestore().settings(settings);
    this.$reviews = this._firebaseService.getReviews();

  }
}
