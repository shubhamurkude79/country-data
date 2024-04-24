import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss']
})
export class CurrencyChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generateBarChart();
  }

// we can fetch countries that widely use same currencies ['aud', 'usd', 'eur', 'chf', 'inr', 'nzd']
  generateBarChart(): void {
    const chart = c3.generate({
      bindto: '#pieChart', // Specify the element to bind the chart
      data: {
        columns: [
          ['AUD', 7],
          ['USD', 20], 
          ['EUR', 36],
          ['CHF', 2],
          ['INR', 3],
          ['NZD', 5],
          ['GBP', 5],
          ['other', 22] // Sample data for the bars
        ],
        type: 'pie',
        // Specify bar chart type
        colors: {
          'AUD': '#e1b382',
          'USD': '#2d545e',
        },
      }
    });
  }

}
