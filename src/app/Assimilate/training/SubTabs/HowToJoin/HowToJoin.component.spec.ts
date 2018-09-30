/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowToJoinComponent } from './HowToJoin.component';

describe('HowToJoinComponent', () => {
  let component: HowToJoinComponent;
  let fixture: ComponentFixture<HowToJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
