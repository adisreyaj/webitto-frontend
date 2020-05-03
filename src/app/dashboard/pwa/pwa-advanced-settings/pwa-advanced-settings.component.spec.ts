import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaAdvancedSettingsComponent } from './pwa-advanced-settings.component';

describe('PwaAdvancedSettingsComponent', () => {
  let component: PwaAdvancedSettingsComponent;
  let fixture: ComponentFixture<PwaAdvancedSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaAdvancedSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaAdvancedSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
