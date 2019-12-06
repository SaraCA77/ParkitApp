import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroparkPage } from './registropark.page';

describe('RegistroparkPage', () => {
  let component: RegistroparkPage;
  let fixture: ComponentFixture<RegistroparkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroparkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroparkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
