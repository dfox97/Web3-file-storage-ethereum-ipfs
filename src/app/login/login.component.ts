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

  login() {
    this.#web3Service.initializeWeb3().then(() => {
      this.userAddress = this.#web3Service.accountSig();
      console.log("🚀 ~ LoginComponent ~ this.#web3Service.initializeWeb3 ~ userAddress:", this.userAddress)
    }).catch((error) => {
      console.error('Error initializing Web3:', error);
    });
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
