import { Injectable } from '@angular/core';
import { Web3Service } from './web3-connection.service';

type FileInfo = { fileName: string, hash: string, url: string };

interface IDocUploderContract {
  add: (fileName: string, hash: string, url: string) => Promise<void>;
  getFile: (index: number) => Promise<FileInfo>;
  getHash: () => Promise<string>;
  getLength: () => Promise<number>;
  verifyDocument: (index: number, hashToVerify: string) => Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class EthDocUploaderService extends Web3Service implements IDocUploderContract {
  public account = this.accountSig();

  async add(fileName: string, hash: string, url: string): Promise<void> {
    if (!this.account) throw new Error('Account not found')
    if (!this.contract) throw new Error('Contract not found');

    try {
      await this.contract.methods.add(fileName, hash, url).call({ from: this.account });
    } catch (error) {
      console.error('Error adding file to blockchain:', error);
      throw new Error('Error adding file to blockchain');
    }
  }

  async getFile(index: number): Promise<FileInfo> {
    if (!this.contract) throw new Error('Contract not found');

    try {
      const [fileName, hash, url] = await this.contract.methods.getFile(index).call();
      return { fileName, hash, url };
    } catch (error) {
      console.error('Error getting file from blockchain:', error);
      throw new Error('Error getting file from blockchain');
    }
  }

  async getHash(): Promise<string> {
    if (!this.account) throw new Error('Account not found')
    if (!this.contract) throw new Error('Contract not found');

    try {
      return await this.contract.methods.getHash().call();
    } catch (error) {
      console.error('Error getting hash from blockchain:', error);
      throw new Error('Error getting hash from blockchain');
    }
  }

  async getLength(): Promise<number> {
    if (!this.account) throw new Error('Account not found')
    if (!this.contract) throw new Error('Contract not found');

    try {
      return await this.contract.methods.getLength().call();
    } catch (error) {
      console.error('Error getting length from blockchain:', error);
      throw new Error('Error getting length from blockchain');
    }
  }

  async verifyDocument(index: number, hashToVerify: string): Promise<boolean> {
    if (!this.account) throw new Error('Account not found')
    if (!this.contract) throw new Error('Contract not found');

    try {
      return await this.contract.methods.verifyDocument(index, hashToVerify).call();
    } catch (error) {
      console.error('Error verifying document from blockchain:', error);
      throw new Error('Error verifying document from blockchain');
    }
  }
}