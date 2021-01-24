import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  rates = [
    {base: 'EUR', symbols: 'PLN'},
    {base: 'USD', symbols: 'GBP'},
    {base: 'CAD', symbols: 'CHF'}
  ];

  constructor( private http: HttpClient) { }

  getRate(base: string, symbols: string): Observable<any>{
    let params = new HttpParams().set('base', base).set('symbols', symbols);

    return this.http.get('https://api.exchangeratesapi.io/latest', { params: params });
  }

  getAllData(){
    return forkJoin([
      this.getRate('EUR', 'PLN'),
      this.getRate('USD', 'GBP'),
      this.getRate('CAD', 'CHF')
    ]);
  }

  updateRate(index){
    return this.getRate( this.rates[index].base, this.rates[index].symbols);
  }

  getHistoricData(){
    return this.http.get('https://api.exchangeratesapi.io/history?start_at=2010-01-01&base=PLN&end_at=2021-01-01');
  }
}