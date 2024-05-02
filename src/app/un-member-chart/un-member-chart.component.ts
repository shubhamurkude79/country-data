import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import * as c3 from 'c3';

@Component({
  selector: 'app-un-member-chart',
  templateUrl: './un-member-chart.component.html',
  styleUrls: ['./un-member-chart.component.scss']
})
export class UnMemberChartComponent implements OnInit {
  unMemberCount = 0;
  nonUnMemberCount = 0;
  isLoading = true;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.fetchDummyData();
    this.fetchUnMemberData();
  }

  fetchDummyData() {
    // dummy data
    this.unMemberCount = 50;
    this.nonUnMemberCount = 50;
    this.generateChartData();
  }

  fetchUnMemberData() {
    this.countryService.getCountriesData().subscribe(undata => {
      this.unMemberCount = undata.filter(country => country.unMember === true).length;
      this.nonUnMemberCount = undata.filter(country => country.unMember === false).length;

      this.isLoading = false;
      this.generateChartData();
    });
  }

  generateChartData(): void {
    const chart = c3.generate({
      bindto: '#UnPieChart',
      data: {
        columns: [
          ['UN Members', this.unMemberCount],
          ['non-UN Members', this.nonUnMemberCount],
        ],
        type: 'pie',
        colors: {
          'UN Members': '#9bc400',
          'non-UN Members': '#9080ff',
        },
      },
      title: {
        text: '% of UN Members in the World', // Specify the title text here
      }
    });
  }

}
