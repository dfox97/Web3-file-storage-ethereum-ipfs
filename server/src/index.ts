import 'reflect-metadata';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { Container } from 'typedi';
import { ExampleService } from './hello';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {

  const service = Container.get(ExampleService);

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


