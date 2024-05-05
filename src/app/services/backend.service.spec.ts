
import { BackendService } from './backend.service';
import { HttpClient } from '@angular/common/http';
import { VersionService } from './config.service';
import { anything, instance, mock, when } from 'ts-mockito';
import { TestBed } from '@angular/core/testing';

fdescribe('BackendService', () => {
  let service: BackendService;

  let httpClient: HttpClient;
  let versionConfig: VersionService;

  beforeEach(() => {
    httpClient = mock(HttpClient);
    versionConfig = mock(VersionService);

    when(versionConfig.getAPIUrl).thenReturn('mocked-url');

    when(httpClient.get(anything())).thenResolve();

    // test bed run inject
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: instance(httpClient)},
        { provide: VersionService, useValue: instance(versionConfig)}
      ]
    });

    service = TestBed.inject(BackendService);

  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
