import { TestBed } from '@angular/core/testing';

import { WebpConverterService } from './webp-converter.service';

describe('WebpConverterService', () => {
  let service: WebpConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebpConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
