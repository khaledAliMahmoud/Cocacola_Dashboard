import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningBoxesComponent } from './planning-boxes.component';

describe('PlanningBoxesComponent', () => {
  let component: PlanningBoxesComponent;
  let fixture: ComponentFixture<PlanningBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
