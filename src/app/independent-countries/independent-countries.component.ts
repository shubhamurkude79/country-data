import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-independent-countries',
  templateUrl: './independent-countries.component.html',
  styleUrls: ['./independent-countries.component.scss'],
})
export class IndependentCountriesComponent implements OnInit {
  independentCount = 0;
  nonIndependentCount = 0;
  isLoading = true;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.fetchDummyData();
    this.fetchDataAndGenerateChart();
  }

  fetchDummyData(): void {
    // Simulate dummy data
    this.independentCount = 50;
    this.nonIndependentCount = 50;
    this.generateChartData();
  }

  fetchDataAndGenerateChart(): void {
    // api call set to status=true to get all independent country count
    this.countryService
      .getIndependentCountriesData(true)
      .subscribe((independentData) => {
        this.independentCount = independentData.length;

        // api call set to status=false to get all non-independent country count
        this.countryService
          .getIndependentCountriesData(false)
          .subscribe((nonIndependentData) => {
            this.nonIndependentCount = nonIndependentData.length;

            this.isLoading = false;
            this.generateChartData();
          });
      });
  }

  generateChartData(): void {
    const chart = c3.generate({
      bindto: '#donutChart',
      data: {
        columns: [
          ['Independent', this.independentCount],
          ['Non-Independent', this.nonIndependentCount],
        ],
        type: 'donut',
        colors: {
          'Independent': '#9bc400',
          'Non-Independent': '#9080ff',
        },
      },
      donut: {
        title: 'Countries',
      },
      title: {
        text: '% of Independent Countries in the World', // Specify the title text here
      }
    });
  }
}
