import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public $selectedLocation: BehaviorSubject<any>;

  constructor() {
    this.$selectedLocation = new BehaviorSubject(null);
  }

  setSelectedLocation(locationToSet: Object) {
    this.$selectedLocation.next(locationToSet);
  }
}
