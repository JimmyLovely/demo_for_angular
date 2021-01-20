import { TestBed } from '@angular/core/testing';

import { VmMockService } from './vm.service';

describe('VmMockService', () => {
  let service: VmMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});