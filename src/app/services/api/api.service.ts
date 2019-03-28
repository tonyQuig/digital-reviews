import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getPlace() {
    return this._http.get(`${environment.googlePlacesBasePath}&input=boojum&inputtype=textquery`);
  }

  getPlaceFromServer(place?: String, query?: string) {
    return this._http.get(`${environment.googleServerBasePath}/place/` + place)
  }

  getPlaceFromServerWithQuery(query?: string) {
    console.log('Query: ', query);
    return this._http.get(`${environment.googleServerBasePath}/query/` + query)
  }

  getPlaceDetailsFromServerWithQuery(query?: string) {
    console.log('Place details: ', query);
    return this._http.get(`${environment.googleServerBasePath}/query/details/` + query)
  }
}
