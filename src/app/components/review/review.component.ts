import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase-service.service';
import { AppService } from 'src/app/app.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Location } from 'src/app/model/location';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public reviews;
  public reviewsToDisplay;
  public locationFromLocalStorage: Location;

  constructor(public _firebaseService: FirebaseService, private _appService: AppService, private _api: ApiService) {
  }

  load() {

    this.locationFromLocalStorage = JSON.parse(localStorage.getItem('selectedLocation'));
    this._appService.$selectedLocation.next(this.locationFromLocalStorage);

    console.log('SELECTED LOCATION: ', this._appService.$selectedLocation.getValue());
    if (this._appService.$selectedLocation.getValue() !== null) {
      this._api.getPlaceDetailsFromServerWithQuery(this._appService.$selectedLocation.getValue().place_id).subscribe(res => {
        this.reviews = res;
        localStorage.setItem('reviews', JSON.stringify(this.reviews));
      }, error => {
        console.log('Error in retrieving reviews');
        console.log('Reverting to last held reviews.');
        this.locationFromLocalStorage = JSON.parse(localStorage.getItem('selectedLocation'));
        this._appService.$selectedLocation.next(this.locationFromLocalStorage);
        this.reviews = JSON.parse(localStorage.getItem('reviews'));
      });
    } else {

    }
  }

  ngOnInit() {
    this.load();
  }

}
