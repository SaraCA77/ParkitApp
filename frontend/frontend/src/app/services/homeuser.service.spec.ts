import { TestBed } from '@angular/core/testing';

import { HomeuserService } from './homeuser.service';

describe('HomeuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeuserService = TestBed.get(HomeuserService);
    expect(service).toBeTruthy();
  });
});
