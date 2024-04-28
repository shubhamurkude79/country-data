import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-population-chart',
  templateUrl: './population-chart.component.html',
  styleUrls: ['./population-chart.component.scss']
})
export class PopulationChartComponent implements OnInit {
  //  "population": 2617820,
  populationCount:number = 0;
  filteredData: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.fetchCountryPopulationData();
  }

  fetchCountryPopulationData() {
    this.countryService.getUNCountriesData().subscribe(item => {
      const populationData = item.filter(data => data.population > 200000000)
      .map(({name, population}) => ({name: name.common, population}));
      console.log('popolation: ', populationData);
      this.generateBarChart();
    });
  }

  generateBarChart() {
    const chart = c3.generate({
      bindto: '#populationChart', // Bind chart to the container with id 'chart'
      data: {
        json: this.filteredData, // Use your filtered data as JSON input
        keys: {
          x: 'name', // Set 'name' as the x-axis
          value: ['population'] // Set 'population' as the y-axis
        },
        type: 'bar'
      },
      axis: {
        x: {
          type: 'category' // Set x-axis type as category (for country names)
        }
      }
    });
  }

}
