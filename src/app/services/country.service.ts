import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;
const independentApiUrl = environment.independentApiUrl;

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl);
  }

  getIndependentCountriesData(status:boolean): Observable<any[]> {
    const url = `${independentApiUrl}?status=${status}`;
    return this.http.get<any[]>(url);
  }
}
