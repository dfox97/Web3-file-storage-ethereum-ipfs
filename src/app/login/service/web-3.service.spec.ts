/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Web-3Service } from './web-3.service';

describe('Service: Web-3', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Web-3Service]
    });
  });

  it('should ...', inject([Web-3Service], (service: Web-3Service) => {
    expect(service).toBeTruthy();
  }));
});
