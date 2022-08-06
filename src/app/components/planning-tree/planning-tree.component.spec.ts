import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningTreeComponent } from './planning-tree.component';

describe('PlanningTreeComponent', () => {
  let component: PlanningTreeComponent;
  let fixture: ComponentFixture<PlanningTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
