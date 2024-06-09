import { Injectable, inject } from '@angular/core';
import { Web3Service } from './web3/web3-connection.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  web3 = inject(Web3Service);
  router = inject(Router);

  checkLogin(): boolean {
    //if web3.account is null then route back to '',
    if (!this.web3.account) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }

}
