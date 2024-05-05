import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VersionService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  httpClient: HttpClient = inject(HttpClient);
  versionConfig = inject(VersionService);

  isAPIAvailable() {
    return this.httpClient.get(this.versionConfig.getAPIUrl);
  }
}
