import { TestBed } from '@angular/core/testing';

import { ChartDataResolverService } from './chart-data-resolver.service';

describe('ChartDataResolverService', () => {
  let service: ChartDataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
