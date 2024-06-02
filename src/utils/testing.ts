// Taken from https://blog.herodevs.com/unit-testing-in-angular-15-without-testbed-4d78bf3bd0da

import { Type, StaticProvider, Injector } from "@angular/core";

/**
 * Helper function for using Angular's inject without using TestBed
 *
 * Can be used for inject based and constructor based dependancy injection
 * @param config - token and providers to inject
 * */
export const classWithProviders = <T>(config: {
  token: Type<T>;
  providers: StaticProvider[];
}): T => {
  const { providers, token } = config;
  const injector = Injector.create({
    providers: [...providers, { provide: token }],
  });

  return injector.get(token);
};
