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
  populationData: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.fetchCountryPopulationData();
  }

  fetchCountryPopulationData() {
    this.countryService.getUNCountriesData().subscribe(item => {
       this.populationData = item.filter(data => data.population > 126000000)
      .map(({name, population}) => ({name: name.common, population}));
      this.generateBarChart();
    });
  }

  generateBarChart() {
    const sortedData = this.populationData.slice().sort((a, b) => b.population - a.population);
    const chart = c3.generate({
      bindto: '#populationChart',
      data: {
        json: sortedData, // Use your filtered data as JSON input
        order: 'asc',
        keys: {
          x: 'name', // Set 'name' as the x-axis
          value: ['population'] // Set 'population' as the y-axis
        },
        type: 'bar',
        labels: true,
          colors: {
            population:'#178c7585'
          }
      },
      axis: {
        x: {
          type: 'category' // Set x-axis type as category (for country names)
        }
      },
      title: {
        text: 'Highest Population of the top 10 Countries', // Specify the title text here
      }
    });
  }

}
