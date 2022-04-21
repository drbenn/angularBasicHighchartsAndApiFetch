import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('hello');
    const api_url_commuteTime = `https://datausa.io/api/data?measure=Average Commute Time&drilldowns=State`;
    // https://www.census.gov/library/reference/code-lists/ansi.html#state
    // the 51 in geo=04000US51 stands for Virginia, 01-56 will provide all states
    const api_url_commuteMethod = `https://datausa.io/api/data?drilldowns=Group&measure=Commute Means,Commute Means%20Moe&geo=04000US51`;
    const api_url_carsPerHousehold = `https://datausa.io/api/data?measure=Commute%20Means%20by%20Gender,Commute%20Means%20by%20Gender%20Moe&geo=16000US5103000,01000US&drilldowns=Vehicles%20Available`;
    const api_url_motorVehicleCrashDeaths =
      'https://datausa.io/api/data?measure=Motor Vehicle Crash Deaths&drilldowns=State';

    const api_urls = [
      api_url_commuteTime,
      api_url_commuteMethod,
      api_url_carsPerHousehold,
      api_url_motorVehicleCrashDeaths,
    ];

    const getApiData = async function () {
      let pulledData = [];
      for (let url of api_urls) {
        let contents = await fetch(url);
        let data = await contents.json();
        pulledData.push(data);
      }

      // Commute time - minutes
      // console.log(pulledData[0].data[0]['Average Commute Time']);
      // Commute method
      // console.log(pulledData[1]);
      // Cars per household
      console.log(pulledData[3]);
    };
    getApiData();
  }
}
