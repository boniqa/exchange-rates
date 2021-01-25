import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyChartRoutingModule } from './lazy-chart-routing.module';
import { ChartComponent } from './chart/chart.component';

import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CoreModule } from 'src/app/shared/core/core.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    LazyChartRoutingModule,
    FormsModule,
    NgxChartsModule ,
    CoreModule
  ]
})
export class LazyChartModule { }
