"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleService = void 0;
const typedi_1 = require("typedi");
let ExampleInjectedService = class ExampleInjectedService {
    printMessage() {
        console.log('I am alive!');
    }
};
ExampleInjectedService = __decorate([
    (0, typedi_1.Service)()
], ExampleInjectedService);
let ExampleService = class ExampleService {
    constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    injectedService) {
        this.injectedService = injectedService;
        console.log('ExampleService constructor');
    }
};
exports.ExampleService = ExampleService;
exports.ExampleService = ExampleService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [ExampleInjectedService])
], ExampleService);
//# sourceMappingURL=hello.js.map