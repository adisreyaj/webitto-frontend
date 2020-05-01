import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaDownloadComponent } from './pwa-download.component';

describe('PwaDownloadComponent', () => {
  let component: PwaDownloadComponent;
  let fixture: ComponentFixture<PwaDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
