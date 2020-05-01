import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadZoneComponent } from './file-upload-zone.component';

describe('FileUploadZoneComponent', () => {
  let component: FileUploadZoneComponent;
  let fixture: ComponentFixture<FileUploadZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
