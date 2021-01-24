import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyChartRoutingModule } from './lazy-chart-routing.module';
import { ChartComponent } from './chart/chart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ChartComponent,
  ],
  imports: [
    CommonModule,
    LazyChartRoutingModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class LazyChartModule { }
