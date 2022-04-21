import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

// import { ChartModule } from 'angular-highcharts';
import { OutputGraphComponent } from './main/output-graph/output-graph.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [AppComponent, MainComponent, OutputGraphComponent],
  imports: [BrowserModule, AppRoutingModule, HighchartsChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
