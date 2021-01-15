import { TestBed } from '@angular/core/testing';

import { ProcessCreateTaskService } from './process-create-task.service';

describe('ProcessCreateTaskService', () => {
  let service: ProcessCreateTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessCreateTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
