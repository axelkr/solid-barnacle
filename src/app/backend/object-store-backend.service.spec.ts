import { TestBed } from '@angular/core/testing';

import { ObjectStoreBackendService } from './object-store-backend.service';

describe('ObjectStoreBackendService', () => {
  let service: ObjectStoreBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectStoreBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
