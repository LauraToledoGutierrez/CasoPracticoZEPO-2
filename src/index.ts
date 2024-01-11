
import express, { Request, Response } from 'express';
import SingletonConfig from './singletonConfig';

const app = express();
const port = process.env.PORT || 3000;
const config = SingletonConfig.getInstance();

app.get('/api/config', (_req: Request, res: Response) => {
  res.json({ result: config.result });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
  console.log(`ZEPO Practical Case 2 - PATRON SINGLETON`);
  console.log(`To execute, use: http://localhost:${port}/api/config`);
});

const instance1 = SingletonConfig.getInstance();
const instance2 = SingletonConfig.getInstance();

if (instance1 === instance2) {
  console.log('Both instances are equal. Singleton pattern works.');
} else {
  console.log('Instances are not equal. Singleton pattern failed.');
}
