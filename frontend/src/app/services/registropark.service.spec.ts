import { TestBed } from '@angular/core/testing';

import { RegistroparkService } from './registropark.service';

describe('RegistroparkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroparkService = TestBed.get(RegistroparkService);
    expect(service).toBeTruthy();
  });
});
