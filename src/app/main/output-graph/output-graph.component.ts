import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.scss'],
})
export class OutputGraphComponent {
  title = 'charts-ttttitle';

  highcharts = Highcharts;

  chartOptions = {
    title: {
      text: 'monthly avg temp',
    },
    xAxis: {
      categories: ['dec', 'jan', 'feb'],
      title: {
        text: 'Months',
      },
    },
    yAxis: {
      title: {
        text: 'Temp',
      },
    },
    series: [
      {
        name: 'US',
        data: [8, 6, 3],
      },

      {
        name: 'India',
        data: [11, 16, 23],
      },
    ],
  };
}
