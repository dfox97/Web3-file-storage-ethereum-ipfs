import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EthDocUploaderService } from 'src/app/services/web3/eth-doc-uploader.service';
import { Web3Service } from 'src/app/services/web3/web3-connection.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css'],
  standalone: true,
})
export class LogOutComponent implements OnInit {
  #web3Service = inject(EthDocUploaderService);
  #router = inject(Router);

  public userAddress = this.#web3Service.accountSig();

  ngOnInit() {
    this.userAddress = this.#web3Service.accountSig();
  }

  onLogout() {
    this.#web3Service.accountSig();

    this.#router.navigateByUrl('');
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
