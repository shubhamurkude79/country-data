import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationChartComponent } from './population-chart.component';

describe('PopulationChartComponent', () => {
  let component: PopulationChartComponent;
  let fixture: ComponentFixture<PopulationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
