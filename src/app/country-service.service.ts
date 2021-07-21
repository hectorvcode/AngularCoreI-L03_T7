import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CountryI } from './country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private urlAPI = 'https://us-central1-softlabs-30335.cloudfunctions.net/countries'

  constructor(private http:HttpClient) { }

  getAllCities(): Observable<CountryI[]>{
    return this.http.get<CountryI[]>(this.urlAPI)
  }
}
