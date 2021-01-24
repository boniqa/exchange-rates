import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loaded: boolean;
  data: any;

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    this.loaded = false;
    this.exchangeRatesService.getRates('EUR', 'PLN').subscribe((result)=> {
      this.data = result;
      this.loaded = true;
    })
  }

}
