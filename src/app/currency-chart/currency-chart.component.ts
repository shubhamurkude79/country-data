import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { CountryService } from '../services/country.service';
import { currencyCode } from 'src/constants/constant';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss'],
})
export class CurrencyChartComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.fetchCountryCurrencyData();
  }

  fetchCountryCurrencyData() {
    this.countryService
      .getCountriesCurrencyData(currencyCode.USD)
      .subscribe((currencyData) => {
        const usdData = currencyData.length;
        this.countryService
          .getCountriesCurrencyData(currencyCode.EUR)
          .subscribe((currencyData) => {
            const eurData = currencyData.length;
            this.countryService
              .getCountriesCurrencyData(currencyCode.AUD)
              .subscribe((currencyData) => {
                const audData = currencyData.length;
                this.countryService
                  .getCountriesCurrencyData(currencyCode.NZD)
                  .subscribe((currencyData) => {
                    const nzdData = currencyData.length;
                    this.countryService
                      .getCountriesCurrencyData(currencyCode.INR)
                      .subscribe((currencyData) => {
                        const inrData = currencyData.length;
                        this.countryService
                          .getCountriesCurrencyData(currencyCode.GBP)
                          .subscribe((currencyData) => {
                            const gbpData = currencyData.length;
                            this.countryService
                              .getCountriesCurrencyData(currencyCode.CHF)
                              .subscribe((currencyData) => {
                                const chfData = currencyData.length;

                                this.generateBarChart(
                                  usdData,
                                  eurData,
                                  audData,
                                  nzdData,
                                  inrData,
                                  gbpData,
                                  chfData
                                );
                              });
                          });
                      });
                  });
              });
          });
      });
  }

  // we can fetch countries that widely use same currencies ['aud', 'usd', 'eur', 'chf', 'inr', 'nzd']
  generateBarChart(
    usdData: number,
    eurData: number,
    audData: number,
    nzdData: number,
    inrData: number,
    gbpData: number,
    chfData: number
  ): void {
    const chart = c3.generate({
      bindto: '#pieChart', // Specify the element to bind the chart
      data: {
        columns: [
          [currencyCode.USD, usdData],
          [currencyCode.EUR, eurData],
          [currencyCode.AUD, audData],
          [currencyCode.NZD, nzdData],
          [currencyCode.INR, inrData],
          [currencyCode.GBP, gbpData],
          [currencyCode.CHF, chfData],
        ],
        type: 'pie',
        // Specify bar chart type
        colors: {
          AUD: '#e1b382',
          USD: '#2d545e',
        },
      },
    });
  }
}
