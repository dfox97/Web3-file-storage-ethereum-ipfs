import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Web3Service } from './web3/web3-connection.service';
import { EthDocUploaderService } from './web3/eth-doc-uploader.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  web3 = inject(EthDocUploaderService);
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
