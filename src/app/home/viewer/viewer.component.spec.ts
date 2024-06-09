import { classWithProviders } from 'src/utils/testing';
import { ViewerComponent } from './viewer.component';
import { anyNumber, instance, mock, when } from 'ts-mockito';
import { fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { EthDocUploaderService, FileInfo } from 'src/app/services/web3/eth-doc-uploader.service';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let mockEthDocUploaderService: EthDocUploaderService;

  const mockData: FileInfo = {
    fileName: 'test',
    hash: '1234',
    url: 'http://example.com',
  }

  const mockEvent = {
    key: '1',
    stopPropagation: () => undefined,
  } as KeyboardEvent;

  beforeEach(() => {
    mockEthDocUploaderService = mock(EthDocUploaderService);

    when(mockEthDocUploaderService.getFile(anyNumber())).thenResolve(mockData);

    component = classWithProviders({
      token: ViewerComponent,
      providers: [{
        provide: EthDocUploaderService, useValue: instance(mockEthDocUploaderService) }
      ],
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setIndex', () => {
    it('should set the index', () => {
      component.setIndex(mockEvent);

      expect(component.index()).toBe(1);
    });
  });


  describe('getFileInfo', () => {
    it('should set the data', fakeAsync(() => {
      void component.getFileInfo(0);

      flushMicrotasks();

      expect(component.data()).toEqual(mockData);
    }));
  });
});
