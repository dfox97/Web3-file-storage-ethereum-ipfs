import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface AppConfigData {
 name:  string;
  version: string;
  environment: string;
  urls: {
    app: string;
    backend: {
      base: string;
      realtime: string;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public configData: AppConfigData = {} as AppConfigData;

  constructor(private http: HttpClient) { }

  public async load() {

    const data = await firstValueFrom(this.http.get('/assets/config.json'));

    if (!data) return;

    this.configData = data as AppConfigData;
    return data;
  }
}


@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private config: AppConfigService) { }

  get getVersion(): string {
    return this.config.configData?.version;
  }

  get getAPIUrl(): string {
    return this.config.configData?.urls.backend.base;
  }
}
