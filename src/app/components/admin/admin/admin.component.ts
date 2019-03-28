import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase-service.service';
import { ApiService } from 'src/app/services/api/api.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public locations: Array<string>;
  public $locations: Observable<any>;
  public query: string;
  public showReviewsButton: boolean;

  constructor(private _fireBaseService: FirebaseService, private _api: ApiService, private _appService: AppService) {
    this.locations = new Array;
    this.showReviewsButton = false;
  }

  getGooglePlaces() {
    this.$locations = this._api.getPlaceFromServerWithQuery(this.query);
  }

  selectedLocation(selectedLocation: Object) {
    console.log('SelectedLocaiton: ', selectedLocation);
    this._appService.setSelectedLocation(selectedLocation);
    this.showReviewsButton = true;
  }

  ngOnInit() {

  }

}
