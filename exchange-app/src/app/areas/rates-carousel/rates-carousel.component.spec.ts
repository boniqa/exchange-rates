import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesCarouselComponent } from './rates-carousel.component';

describe('RatesCarouselComponent', () => {
  let component: RatesCarouselComponent;
  let fixture: ComponentFixture<RatesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
