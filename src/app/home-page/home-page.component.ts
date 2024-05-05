import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule,
    ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  readonly #formBuilder = inject(FormBuilder);
  private readonly websiteRegEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;

  /* private blockchainContext: any;  */ // strategy pattern to use different blockchains.

  protected readonly suggestForm = this.#formBuilder.group({
    fileName: ['', [Validators.required]],
    ipfsHash: ['', [Validators.required]],
    url: ['', [Validators.required, Validators.pattern(this.websiteRegEx)]],
  });

  protected get controls() {
    return this.suggestForm.controls;
  }


  public publishToBlockchain() {
    if (this.suggestForm.valid) {
      // Process the form submission here, e.g., calling an API
      console.log('Form submitted:', this.suggestForm.value);
      // Clear the form after submission
      this.suggestForm.reset();
    } else {
      // Mark all fields as touched to trigger validation messages
      this.suggestForm.markAllAsTouched();
    }
  }

}
