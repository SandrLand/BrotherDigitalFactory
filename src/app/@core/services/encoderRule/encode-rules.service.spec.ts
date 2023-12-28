import { TestBed } from '@angular/core/testing';

import { EncodeRulesService } from './encode-rules.service';

describe('EncodeRulesService', () => {
  let service: EncodeRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodeRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
