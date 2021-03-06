import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDataResolverService } from './chart/chart-data-resolver.service';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
  { path: 'chart', component: ChartComponent, resolve: {
    chartData: ChartDataResolverService
  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyChartRoutingModule { }
