import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;
const independentApiUrl = environment.independentApiUrl;
const currencyUrl = environment.currencyUrl;
const allDataUrl = environment.allDataUrl;

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl);
  }

  // Independent and non-Independent countries count
  getIndependentCountriesData(status: boolean): Observable<any[]> {
    const url = `${independentApiUrl}?status=${status}`;
    return this.http.get<any[]>(url);
  }

  // World wide mostly used currencies
  getCountriesCurrencyData(currency: string): Observable<any[]> {
    const url = `${currencyUrl}/${currency}`;
    return this.http.get<any[]>(url);
  }

  // UN Members of the World
  getUNCountriesData(): Observable<any[]> {
    return this.http.get<any[]>(allDataUrl);
  }
}
