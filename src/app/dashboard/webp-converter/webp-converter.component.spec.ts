import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpConverterComponent } from './webp-converter.component';

describe('WebpConverterComponent', () => {
  let component: WebpConverterComponent;
  let fixture: ComponentFixture<WebpConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
