import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaviconDownloadComponent } from './favicon-download.component';

describe('FaviconDownloadComponent', () => {
  let component: FaviconDownloadComponent;
  let fixture: ComponentFixture<FaviconDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaviconDownloadComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviconDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
