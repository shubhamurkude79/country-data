import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSidebarOpen = true; // sidebar toggle initial
  isLoading:boolean = false;

  constructor(private SidebarToggleService: CountryService, private cdr: ChangeDetectorRef) {}

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

  handleIsLoadingState(isLoading:boolean) {
    this.isLoading = isLoading;
    this.cdr.detectChanges();
  }


}
