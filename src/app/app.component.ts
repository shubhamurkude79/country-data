import { Component } from '@angular/core';
import { CountryService } from './services/country.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from './auth/reducers/auth.reducers';
import { logout } from './auth/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated$: Observable<boolean>;

  title = 'country-app';
  constructor(private store: Store<{auth: AuthState}>, 
    private SidebarToggleService: CountryService, private router: Router) {
    this.isAuthenticated$ = this.store.select(state => state.auth.isAuthenticated);
  }

  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/authentication'])
  }

  toggleSidebar() {
    this.SidebarToggleService.toggleSidebar();
  }
}
