import { Injectable, inject, signal } from '@angular/core';
import Web3, { Contract } from 'web3';
import { abiKey } from './contract/abi';

declare let window: any;

export interface IWeb3 {
  get web3(): Web3;
  initializeWeb3(): Promise<Web3>;
  getContract(): string;
}

type ContractAbi = typeof abiKey;

@Injectable({
  providedIn: 'root'
})
export class Web3Service implements IWeb3 {
  //user web3 instance
  public accountSig = signal<string | undefined>(undefined);
  protected _web3 = new Web3('https://rpc2.sepolia.org');
  protected contractAddress = '0xd4262fc19Fd58501ba1DBe7124eac671d6E641BE';
  protected contractAbi = abiKey;
  private _contract: Contract<ContractAbi> | undefined;



  constructor() {
    if (window.ethereum) {
      this._web3 = new Web3("https://rpc2.sepolia.org");
    }
  }

  get web3(): Web3 {
    return this._web3;
  }

  get contract(): Contract<ContractAbi> | undefined {
    return this._contract;
  }


  async initializeWeb3(): Promise<Web3> {
    if (!this._web3) {
      throw new Error("MetaMask not found. Please install MetaMask.");
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.accountSig.set(accounts[0]);

      this._contract = new this.web3.eth.Contract<ContractAbi>(this.contractAbi, this.contractAddress, {
        from: this.accountSig(),
      })

      return this._web3;
    } catch (error) {
      console.error("User denied account access:", error);
      throw error;
    }
  }

  logOut(): void {
    this.accountSig.set(undefined);
  }

  getContract(): string {
    return this.contractAddress;
  }
}


