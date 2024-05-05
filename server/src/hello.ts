import { Service } from "typedi";

@Service()
class ExampleInjectedService {
  printMessage() {
    console.log('I am alive!');
  }
}

@Service()
export class ExampleService {
  constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    public injectedService: ExampleInjectedService
  ) {
    console.log('ExampleService constructor');
  }
}
