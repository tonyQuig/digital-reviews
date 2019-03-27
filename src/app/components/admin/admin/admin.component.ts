import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public locations: Array<string>;
  public $locations: Observable<any>;

  constructor(private _fireBaseService: FirebaseService) {
    this.locations = new Array;
  }

  ngOnInit() {

    this.$locations = this._fireBaseService.getReviews();

    this._fireBaseService.getReviews().subscribe(res => {
      this.locations = res.filter(function (item, pos) {
        return res.indexOf(item) === pos;
      });

      console.log('Filtered Array: ', this.locations);

    })

  }

}
