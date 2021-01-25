import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  rates: any;
  chartData: any[] = [];
  view: any[] = [1400, 600];
  loaded: boolean;

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'PLN';
  timeline: boolean = true;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.loaded = false;
    this.route.data
    .subscribe((res)=>{
      this.rates = res.chartData.rates;
      //tweak this:
      this.chartData.push(
        {
          "name": 'EUR',
          "series": []
        }
      );
      this.chartData.push(
        {
          "name": 'USD',
          "series": []
        }
      );
      let sortedKeys = Object.keys(this.rates).sort();
      sortedKeys.forEach(element => {
        this.chartData[0].series.push(
          {
            "name": element,
            "value": this.rates[element]['EUR']
          }
        )
      });
      sortedKeys.forEach(element => {
        this.chartData[1].series.push(
          {
            "name": element,
            "value": this.rates[element]['USD']
          }
        )
      });
      this.loaded = true;
      return this.chartData; 
    });
  }

}