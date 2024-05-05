import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing-module';
import { AppConfigService } from './services/config.service';
import { provideAnimations } from '@angular/platform-browser/animations';


export function appConfigInit(appConfigService: AppConfigService) {
  return () => {
    return appConfigService.load()
  };
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    {
        provide: APP_INITIALIZER,
        useFactory: appConfigInit,
        multi: true,
        deps: [AppConfigService]
    },
    provideAnimations()
]
};
