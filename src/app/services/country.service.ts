import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

const apiUrl = environment.apiUrl;
const independentApiUrl = environment.independentApiUrl;
const currencyUrl = environment.currencyUrl;
const allDataUrl = environment.allDataUrl;

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Toggling of the sidebar
  toggleSidebar() {
    this.isOpenSubject.next(!this.isOpenSubject.value)
  }

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
