import { TestBed } from '@angular/core/testing';

import { ModelTasksService } from './model-tasks.service';

describe('ModelTasksService', () => {
  let service: ModelTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
