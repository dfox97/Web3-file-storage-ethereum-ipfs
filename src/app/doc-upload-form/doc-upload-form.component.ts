import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EthDocUploaderService } from '../services/web3/eth-doc-uploader.service';
import { Web3Service } from '../services/web3/web3-connection.service';

@Component({
  selector: 'app-doc-upload-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule,
    ReactiveFormsModule],
  templateUrl: './doc-upload-form.component.html',
  styleUrls: ['./doc-upload-form.component.scss']
})
export class DocUploadFormComponent {
  readonly #formBuilder = inject(FormBuilder);
  readonly #ethDocUploaderService = inject(EthDocUploaderService);

  private readonly websiteRegEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;

  /* private blockchainContext: any;  */ // strategy pattern to use different blockchains.

  protected readonly suggestForm = this.#formBuilder.group({
    fileName: ['',],
    ipfsHash: ['',],
    url: ['',],
  });

  protected get controls() {
    return this.suggestForm.controls;
  }


  public publishToBlockchain() {
    if (this.suggestForm.valid) {
      // Process the form submission here, e.g., calling an API

      // //TODO: FIX UNDEFINED ACCOUNT SIGN AND UNDEFINED CONTRACT ADDRESS
      // this.#ethDocUploaderService.getFile(0).then((file) => {
      //   console.log('File from blockchain:', file);
      // });

      console.log('Form submitted:', this.#ethDocUploaderService.contractSig());

      this.#ethDocUploaderService.getFile(0).then((file) => {
        console.log('File from blockchain:', file);
      });

      // Clear the form after submission
      this.suggestForm.reset();
    } else {
      // Mark all fields as touched to trigger validation messages
      this.suggestForm.markAllAsTouched();
    }
  }

}
