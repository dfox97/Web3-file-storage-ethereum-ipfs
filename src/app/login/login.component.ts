import { Component, inject } from '@angular/core';
import { EthDocUploaderService } from '../services/web3/eth-doc-uploader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  readonly #web3Service = inject(EthDocUploaderService);
  readonly #router = inject(Router);

  async login() {
    await this.#web3Service.initializeWeb3();

    this.#router.navigateByUrl('home');
  }
}
