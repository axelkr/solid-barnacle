import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddComponent } from './task-add.component';

import { ModelTasksService } from '../model-tasks.service';

describe('TaskAddComponent', () => {
  let component: TaskAddComponent;
  let fixture: ComponentFixture<TaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAddComponent,ModelTasksService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
