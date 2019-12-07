import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrobeforePage } from './registrobefore.page';

describe('RegistrobeforePage', () => {
  let component: RegistrobeforePage;
  let fixture: ComponentFixture<RegistrobeforePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrobeforePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrobeforePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
