import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { FirebaseService } from './services/firebase/firebase-service.service';
import { ApiService } from './services/api/api.service';

const config = {
  apiKey: 'AIzaSyAtqCxfa8V40v9sjJzB-UYvkNLHAH3cC7k',
  authDomain: 'screen-cloud-f8c9a.firebaseapp.com',
  databaseURL: 'https://screen-cloud-f8c9a.firebaseio.com',
  projectId: 'screen-cloud-f8c9a',
  storageBucket: 'screen-cloud-f8c9a.appspot.com',
  messagingSenderId: '933948910394'
}
const settings = { timestampsInSnapshots: true };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'screenCloud';
  public $reviews: Observable<any>;
  public $place: Observable<any>;
  public query: string;

  constructor(public _firebaseService: FirebaseService, private _api: ApiService) {
  }

  getGooglePlaces() {
    this.$place = this._api.getPlaceFromServerWithQuery(this.query);
  }

  ngOnInit() {
  }
}
