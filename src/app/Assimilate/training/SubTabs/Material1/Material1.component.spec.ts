/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Material1Component } from './Material1.component';

describe('Material1Component', () => {
  let component: Material1Component;
  let fixture: ComponentFixture<Material1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Material1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Material1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
