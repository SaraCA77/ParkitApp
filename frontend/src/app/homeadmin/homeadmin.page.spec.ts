import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeadminPage } from './homeadmin.page';

describe('HomeadminPage', () => {
  let component: HomeadminPage;
  let fixture: ComponentFixture<HomeadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
