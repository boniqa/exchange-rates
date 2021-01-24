import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loaded: boolean;
  plnRate: string;

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    this.loaded = false;
    this.exchangeRatesService.getRate('EUR', 'PLN')
    .subscribe((res)=>{
      this.plnRate = res.rates['PLN'];
    })
    this.loaded = true;
  }

}
