import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase-service.service';
import { AppService } from 'src/app/app.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public $reviews: Observable<any>;
  public reviewsToDisplay;

  constructor(public _firebaseService: FirebaseService, private _appService: AppService, private _api: ApiService) {
    this.$reviews = new BehaviorSubject(null);
  }

  ngOnInit() {
    console.log('Review component initialised');
    this.$reviews = this._api.getPlaceDetailsFromServerWithQuery(this._appService.$selectedLocation.getValue().place_id);
    // this._api.getPlaceDetailsFromServerWithQuery(this._appService.$selectedLocation.getValue().place_id).subscribe(res => {
    //   console.log(res);
    // });

  }

}
