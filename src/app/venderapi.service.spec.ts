import { TestBed } from '@angular/core/testing';

import { VenderapiService } from './venderapi.service';

describe('VenderapiService', () => {
  let service: VenderapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenderapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
