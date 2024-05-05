import { Injectable, inject } from '@angular/core';
import Web3 from 'web3';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  //user web3 instance
  private _web3 = new Web3();

  constructor() {
    if (window.ethereum) {
      this._web3 = new Web3(window.ethereum);
    }
  }

  get web3(): Web3 {
    return this._web3;
  }

  async initializeWeb3(): Promise<Web3> {
    if (!this._web3) {
      throw new Error("MetaMask not found. Please install MetaMask.");
    }

    try {
      // Request account access if needed
      await window.ethereum.enable();
      return this._web3;
    } catch (error) {
      console.error("User denied account access:", error);
      throw error;
    }
  }
}
