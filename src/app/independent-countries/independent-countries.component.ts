import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-independent-countries',
  templateUrl: './independent-countries.component.html',
  styleUrls: ['./independent-countries.component.scss']
})
export class IndependentCountriesComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.fetchDataAndGenerateChart();
  }

  fetchDataAndGenerateChart(): void{
    // api call set to status=true to get all independent country count
    this.countryService.getIndependentCountriesData(true).subscribe(independentData => {
      const independentCount = independentData.length;
   
    // api call set to status=false to get all non-independent country count
    this.countryService.getIndependentCountriesData(false).subscribe(nonIndependentData =>{
      const nonIndependentCount = nonIndependentData.length;
    
    this.generateChartData(independentCount, nonIndependentCount);
  });
});
  }

  generateChartData(independentCount:number, nonIndependentCount:number): void{
    const chart = c3.generate({
      bindto: '#donutChart',
      data: {
        columns: [
          ['Independent', independentCount],
          ['Non-Independent', nonIndependentCount],
        ],
        type: 'donut',
        colors: {
          'Independent': '#9bc400',
          'Non-Independent': '#8076a3',
        },
      },
      donut: {
        title: "Countries"
    }
    });
  }

}
