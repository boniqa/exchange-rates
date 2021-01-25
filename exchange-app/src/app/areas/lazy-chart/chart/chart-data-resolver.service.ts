import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Injectable({
  providedIn: 'root'
})
export class ChartDataResolverService implements Resolve<any>{

  constructor(private exchangeRatesService: ExchangeRatesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.exchangeRatesService.getHistoricData();
  }
}
