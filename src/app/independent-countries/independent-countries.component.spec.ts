import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentCountriesComponent } from './independent-countries.component';

describe('IndependentCountriesComponent', () => {
  let component: IndependentCountriesComponent;
  let fixture: ComponentFixture<IndependentCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndependentCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
