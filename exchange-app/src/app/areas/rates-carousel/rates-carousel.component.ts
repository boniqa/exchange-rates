import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Component({
  selector: 'app-rates-carousel',
  templateUrl: './rates-carousel.component.html',
  styleUrls: ['./rates-carousel.component.scss']
})
export class RatesCarouselComponent implements OnInit {

  dataToDisplay: any[];
  loaded: boolean;

  customOptions: OwlOptions = {
    items: 1,
    center: true,
    margin: 40,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: true,
    dots: true,
    dotsEach: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['back', 'next'],
  }
  
  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    this.loaded = false;
    this.initData();
  }

  initData() {
    let arrResult = [];
    this.exchangeRatesService.getAllData().subscribe((res)=>{
      res.forEach(element => {
        let result = {
          base: element.base,
          rate: Object.keys(element.rates)[0],
          value: element.rates[Object.keys(element.rates)[0]]
        }
        arrResult.push(result);
      });
      this.dataToDisplay= arrResult;
      this.loaded = true;
    })
  }

  updateRate($event){
    if(this.loaded){
      let nextIndex = $event.startPosition == 2 ? 0 : ($event.startPosition + 1);
      this.exchangeRatesService.updateRate(nextIndex).subscribe((res)=>{
        let result = {
          base: res.base,
          rate: Object.keys(res.rates)[0],
          value: res.rates[Object.keys(res.rates)[0]]
        }
        console.log($event.startPosition);
       
        //update data not working, jumping to the first slide -> hash?
        // this.dataToDisplay[nextIndex] = result;
      })
    }
  }

}