import { TestBed } from '@angular/core/testing';

import { RegistrouserService } from './registrouser.service';

describe('RegistrouserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrouserService = TestBed.get(RegistrouserService);
    expect(service).toBeTruthy();
  });
});
