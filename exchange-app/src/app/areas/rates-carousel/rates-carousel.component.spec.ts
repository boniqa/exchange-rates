import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

import { RatesCarouselComponent } from './rates-carousel.component';

describe('RatesCarouselComponent', () => {
  let component: RatesCarouselComponent;
  let fixture: ComponentFixture<RatesCarouselComponent>;
  const mockedData = [
    {"rates":
      {"PLN":4.5409},
      "base":"EUR"
    },
    {"rates":
      {"GBP":0.7307439105},
      "base":"USD"
    },
    {"rates":
      {"CHF":0.6968109192},
      "base":"CAD"
    }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesCarouselComponent ],
      providers: [
        {
          provide: ExchangeRatesService, useValue: {
            getAllData: () => {
              return {
                subscribe: (fn: (params: any) => void) => fn(mockedData) 
              }
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and get initial data', () => {
    expect(component).toBeTruthy();
    expect(component.dataToDisplay).toBeDefined();
    expect(component.dataToDisplay.length).toBe(3);
  });
});
