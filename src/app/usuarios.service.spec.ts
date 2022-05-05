import { TestBed } from '@angular/core/testing';

import { USUARIOSService } from './usuarios.service';

describe('USUARIOSService', () => {
  let service: USUARIOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(USUARIOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
