import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTimeLineComponent } from './reports-time-line.component';

describe('ReportsTimeLineComponent', () => {
  let component: ReportsTimeLineComponent;
  let fixture: ComponentFixture<ReportsTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsTimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
