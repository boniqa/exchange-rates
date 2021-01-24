import { Component, OnInit } from '@angular/core';
import { concat, merge } from 'rxjs';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loaded: boolean;
  data: any[] = [];

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    this.loaded = false;
    merge(
      this.exchangeRatesService.getRates('EUR', 'PLN'),
      this.exchangeRatesService.getRates('USD', 'GBP'),
      this.exchangeRatesService.getRates('CAD', 'CHF')
    ).subscribe((res)=>{
      this.data.push(res);
    })
    this.loaded = true;
  }

}
