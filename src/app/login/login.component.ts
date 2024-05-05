import { Web3 } from './../../../node_modules/web3/src/web3';
import { Component, OnInit, inject } from '@angular/core';
import { Web3Service } from './service/web-3.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class LoginComponent {
  public userAddress: string | undefined = undefined;

  readonly #web3Service = inject(Web3Service);

  async initializeWeb3() {
    try {
      const web3 = await this.#web3Service.initializeWeb3();
      console.log("Web3 initialized:", web3);
      this.userAddress = web3?.eth?.defaultAccount;
    } catch (error) {
      console.error("Error initializing Web3:", error);
      // Handle error here, such as displaying a message to the user
    }
  }

  async login() {
    try {
      await this.#web3Service.initializeWeb3();
      // Web3 is already initialized if MetaMask is connected
      console.log("User logged in with MetaMask");
      // Additional login logic or redirect to dashboard
    } catch (error) {
      console.error("Error logging in with MetaMask:", error);
      // Handle error here, such as displaying a message to the user
    }
  }

  onLogout() {
    // Implement logout logic here
    console.log("User logged out");
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
