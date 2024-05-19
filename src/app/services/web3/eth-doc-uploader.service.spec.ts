/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EthDocUploaderService } from './eth-doc-uploader.service';

describe('Service: EthDocUploader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EthDocUploaderService]
    });
  });

  it('should ...', inject([EthDocUploaderService], (service: EthDocUploaderService) => {
    expect(service).toBeTruthy();
  }));
});
