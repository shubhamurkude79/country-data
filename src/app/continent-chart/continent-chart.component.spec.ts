import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentChartComponent } from './continent-chart.component';

describe('ContinentChartComponent', () => {
  let component: ContinentChartComponent;
  let fixture: ComponentFixture<ContinentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
