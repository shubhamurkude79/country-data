import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generateBarChart();
  }

  generateBarChart(): void {
    const chart = c3.generate({
      bindto: '#barChart', // Specify the element to bind the chart
      data: {
        columns: [
          ['FirstData', 30, 200, 100, 400, 150, 250],
          ['SecondData', 130, 150, 200, 300, 200, 100] // Sample data for the bars
        ],
        type: 'bar',
        // Specify bar chart type e1b382
        colors: {
          'FirstData': '#e1b382',
          'SecondData': '#2d545e',
        },
      }
    });
  }

//   setTimeout(function () {
//     chart.load({
//         columns: [
//             ['data3', 130, -150, 200, 300, -200, 100]
//         ]
//     });
// }, 1000);


}
