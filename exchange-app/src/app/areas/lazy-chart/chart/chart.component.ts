import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    this.exchangeRatesService.getHistoricData().subscribe((res)=>{
      
    })
  }

}