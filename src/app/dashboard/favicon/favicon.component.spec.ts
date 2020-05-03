/*
 * File: favicon.component.spec.ts
 * Project: webitto-frontend
 * File Created: Sunday, 3rd May 2020 7:54:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 7:58:10 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FaviconComponent } from './favicon.component';

describe('FaviconComponent', () => {
  let component: FaviconComponent;
  let fixture: ComponentFixture<FaviconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaviconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
