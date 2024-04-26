import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnMemberChartComponent } from './un-member-chart.component';

describe('UnMemberChartComponent', () => {
  let component: UnMemberChartComponent;
  let fixture: ComponentFixture<UnMemberChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnMemberChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnMemberChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
