import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountryService } from './services/country.service';
import { CountryListComponent } from './country-list/country-list.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Chart1Component } from './chart1/chart1.component';
import { IndependentCountriesComponent } from './independent-countries/independent-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    HomeComponent,
    Chart1Component,
    IndependentCountriesComponent
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
