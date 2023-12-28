import { TestBed } from '@angular/core/testing';

import { DirctoryService } from './dirctory.service';

describe('DirctoryService', () => {
  let service: DirctoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirctoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
