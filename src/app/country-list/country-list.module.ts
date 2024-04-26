import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CountryService } from '../services/country.service';
import { CountryListRoutingModule } from './country-list-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountryListRoutingModule
  ],
  providers: [CountryService],
  exports: [RouterModule]
})
export class CountryListModule { }
