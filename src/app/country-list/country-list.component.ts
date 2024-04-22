import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number =10;
  totalItems: number = 0;
  searchText: string = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
      this.totalItems = this.countries.length;
      this.currentPage = 1;
      console.log('length: ', this.totalItems);
    });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    console.log('Current Page:', this.currentPage);
  }

  getPageNumbers(): number[]{
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1); 
  }

  applySearchFilter(countryName: string): boolean {
    return countryName.toLowerCase().includes(this.searchText.toLowerCase());
  }

  // filteredCountries(): any[] {
  //   return this.countries.filter(country => this.applySearchFilter(country.name.common));
  // }  
  filteredCountries(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
    const slicedData = this.countries.slice(startIndex, endIndex);
    return slicedData.filter(country => this.applySearchFilter(country.name.common));
  }
  
  currentIndex(index: number): number {
    return (this.currentPage - 1) * this.itemsPerPage + index + 1;
  }

  // get filteredData() {
  //   return this.tableData.filter(item => 
  //     item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //     item.age.toString().includes(this.searchText.toLowerCase()));
  // }

}
