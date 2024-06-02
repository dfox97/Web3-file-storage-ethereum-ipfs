import { Component, OnInit, inject } from '@angular/core';
import { Web3Service } from '../services/web3/web3-connection.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class LoginComponent {
  public userAddress: string | undefined;

  readonly #web3Service = inject(Web3Service);

  async login() {
    await this.#web3Service.initializeWeb3();
    this.userAddress = this.#web3Service.accountSig();
    const contract = this.#web3Service.contractSig();

    this.#web3Service.contractSig.set(contract);

  }

  onLogout() {
    this.userAddress = undefined;
    this.#web3Service.logOut();
  }

  truncateAddress(address: string | undefined): string {
    if (!address) {
      return '';
    }
    return `${address.substr(0, 5)}...${address.substr(
      address.length - 5,
      address.length
    )}`;
  }
}
