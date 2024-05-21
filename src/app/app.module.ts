import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CountryService } from './services/country.service';
import { CountryListComponent } from './country-list/country-list.component';
import { HomeComponent } from './home/home.component';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
import { IndependentCountriesComponent } from './independent-countries/independent-countries.component';
import { UnMemberChartComponent } from './un-member-chart/un-member-chart.component';
import { CountryListRoutingModule } from './country-list/country-list-routing.module';
import { CountryListModule } from './country-list/country-list.module';
import { PopulationChartComponent } from './population-chart/population-chart.component';
import { ContinentChartComponent } from './continent-chart/continent-chart.component';
import { LoginComponent } from './auth/pages/login/login.component';

import { authReducer } from './auth/reducers/auth.reducers';
import { AuthEffects } from './auth/effects/auth.effects';
import { AuthService } from './auth/services/auth.service';
import { environment } from 'src/environments/environment';

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
    ReactiveFormsModule,
    SocialLoginModule,
    AppRoutingModule,
    CountryListModule,
    CountryListRoutingModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    CountryService,
    AuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientId)
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
