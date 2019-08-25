import { TestBed } from '@angular/core/testing';

import { FsupicService } from './fsupic.service';

describe('FsupicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FsupicService = TestBed.get(FsupicService);
    expect(service).toBeTruthy();
  });
});
