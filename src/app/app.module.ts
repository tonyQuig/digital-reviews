import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase/firebase-service.service';
import * as firebase from 'firebase';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './components/review/review.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AppService } from './app.service';
firebase.initializeApp(environment.firebase);

const appRoutes: Routes = [
  { path: '', component: ReviewComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'reviews', component: ReviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    AdminComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [
    FirebaseService,
    ApiService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
