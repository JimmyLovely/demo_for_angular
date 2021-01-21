import { TestBed } from '@angular/core/testing';

import { IVmService } from './i-vm.service';

describe('IVmService', () => {
  let service: IVmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IVmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});