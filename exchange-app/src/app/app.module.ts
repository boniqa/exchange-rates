import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './areas/main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { RatesCarouselComponent } from './areas/rates-carousel/rates-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CoreModule } from './shared/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RatesCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  exports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
