import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor( private http: HttpClient) { }

  getRates(base: string, symbols: string): Observable<any>{
    let params = new HttpParams().set('base', base).set('symbols', symbols);

    return this.http.get('https://api.exchangeratesapi.io/latest', { params: params });
  }

}
