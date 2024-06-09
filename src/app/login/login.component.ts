import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from '../services/web3/web3-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  readonly #web3Service = inject(Web3Service);
  readonly #router = inject(Router);

  async login() {
    await this.#web3Service.initializeWeb3();

    this.#router.navigateByUrl('home');
  }
}
