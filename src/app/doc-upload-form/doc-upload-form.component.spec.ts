import { anything, instance, mock, when } from 'ts-mockito';
import { classWithProviders } from 'src/utils/testing';
import { DocUploadFormComponent } from './doc-upload-form.component';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { EthDocUploaderService } from '../services/web3/eth-doc-uploader.service';

describe('DocUploadFormComponent', () => {
  let component: DocUploadFormComponent;
  let mockFormBuilder: FormBuilder;
  let mockEthUploaderService: DocUploadFormComponent;

  let nonNullableFormBuilder: NonNullableFormBuilder;

  beforeEach(() => {
    mockFormBuilder = mock(FormBuilder);
    mockEthUploaderService = mock(DocUploadFormComponent);

    when(mockFormBuilder.nonNullable).thenReturn(instance(mock(nonNullableFormBuilder)));

    component = classWithProviders({
      token: DocUploadFormComponent,
      providers: [
        { provide: FormBuilder, useValue: instance(mockFormBuilder)},
        { provide: EthDocUploaderService, useValue: instance(mockEthUploaderService)}
      ]
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
