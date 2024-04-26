import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountryService } from './services/country.service';
import { CountryListComponent } from './country-list/country-list.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
import { IndependentCountriesComponent } from './independent-countries/independent-countries.component';
import { UnMemberChartComponent } from './un-member-chart/un-member-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    HomeComponent,
    CurrencyChartComponent,
    IndependentCountriesComponent,
    UnMemberChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
