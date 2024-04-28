import { Component } from '@angular/core';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'country-app';
  constructor(private SidebarToggleService: CountryService) {}

  toggleSidebar() {
    this.SidebarToggleService.toggleSidebar();
  }
}
