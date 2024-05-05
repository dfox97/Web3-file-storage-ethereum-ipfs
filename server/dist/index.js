"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typedi_1 = require("typedi");
const hello_1 = require("./hello");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    const service = typedi_1.Container.get(hello_1.ExampleService);
    console.log(service.injectedService.printMessage());
    res.send('Hello World from Node.js server!');
});
/* app.use(express.static(path.join(__dirname, '../../../login-frontend/')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../login-frontend/src/index.html'));
}); */
app.get('/api/status', (req, res) => {
    res.json({ status: 'Backend is connected!' });
});
app.listen(port, () => {
    console.debug(`Server listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map