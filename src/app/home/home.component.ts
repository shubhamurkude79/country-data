import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSidebarOpen = true; // sidebar toggle initial

  constructor(private SidebarToggleService: CountryService) {}

  ngOnInit(): void {
    this.SidebarToggleService.isOpen$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
    });
  }

  getSidebarWidth() {
    return this.isSidebarOpen ? '250px' : '0'; // Set width based on open/close state
  }

  getFlexContainerMargin() {
    return this.isSidebarOpen ? '250px' : '0'; // Adjust margin based on sidebar state
  }


}
