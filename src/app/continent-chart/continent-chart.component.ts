import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import * as c3 from 'c3';

@Component({
  selector: 'app-continent-chart',
  templateUrl: './continent-chart.component.html',
  styleUrls: ['./continent-chart.component.scss']
})
export class ContinentChartComponent implements OnInit {
  europeCount:number = 0;
  asiaCount:number = 0;
  africaCount:number = 0;
  nAmericaCount:number = 0;
  sAmericaCount:number = 0;
  oceaniaCount:number = 0;
  antarcticaCount:number = 0;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  this.fetchContinentData();
  }

  fetchContinentData() {
    this.countryService.getCountriesData().subscribe(data => {
      this.europeCount = data.filter(item => item.continents[0] === 'Europe').length;
      this.asiaCount = data.filter(item => item.continents[0] === 'Asia').length;
      this.africaCount = data.filter(item => item.continents[0] === 'Africa').length;
      this.nAmericaCount = data.filter(item => item.continents[0] === 'North America').length;
      this.sAmericaCount = data.filter(item => item.continents[0] === 'South America').length;
      this.oceaniaCount = data.filter(item => item.continents[0] === 'Oceania').length;
      this.antarcticaCount = data.filter(item => item.continents[0] === 'Antarctica').length;
      this.generateBarChart();
    });
  }

  generateBarChart() {
    const chart = c3.generate({
      bindto: '#continentChart',
      data: {
        columns: [
          ['Europe', this.europeCount],
          ['Asia', this.asiaCount],
          ['Africa', this.africaCount],
          ['North America', this.nAmericaCount],
          ['South America', this.sAmericaCount],
          ['Oceania', this.oceaniaCount],
          ['Antarctica', this.antarcticaCount]
        ],
        type: 'donut',
        colors: {
          'Europe': '#642491',
          'Asia': '#6d3a91',
          'Africa': '#5a0d91',
          'North America': '#825a9e',
          'South America': '#9080ff',
          'Oceania': '#8e6ca6',
          'Antarctica': '#9080ff',
        },
      },
      donut: {
        title: 'Continents',
      },
      title: {
        text: 'Countries among different continents', // Specify the title text here
      }
    });
  }

}
