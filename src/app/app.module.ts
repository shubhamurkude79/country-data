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
import { CountryListRoutingModule } from './country-list/country-list-routing.module';
import { CountryListModule } from './country-list/country-list.module';
import { PopulationChartComponent } from './population-chart/population-chart.component';
import { ContinentChartComponent } from './continent-chart/continent-chart.component';
import { LoginComponent } from './auth/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    HomeComponent,
    CurrencyChartComponent,
    IndependentCountriesComponent,
    UnMemberChartComponent,
    PopulationChartComponent,
    ContinentChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CountryListModule,
    CountryListRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
