import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningStepsComponent } from './planning-steps.component';

describe('PlanningStepsComponent', () => {
  let component: PlanningStepsComponent;
  let fixture: ComponentFixture<PlanningStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
