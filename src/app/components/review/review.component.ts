import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public $reviews: Observable<any>;

  constructor(public _firebaseService: FirebaseService) { }

  ngOnInit() {
    console.log('Review component initialised');
    this.$reviews = this._firebaseService.getReviews();
  }

}
