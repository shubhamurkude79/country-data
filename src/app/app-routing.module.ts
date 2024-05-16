import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryListModule } from './country-list/country-list.module';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authentication', component: LoginComponent},
  { 
    path: 'country',
    loadChildren: () => import('./country-list/country-list.module')
    .then(m => m.CountryListModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    CountryListModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
