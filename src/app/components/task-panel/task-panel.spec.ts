import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPanel } from './task-panel';

describe('TaskPanel', () => {
  let component: TaskPanel;
  let fixture: ComponentFixture<TaskPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
