import express, { Request, Response, Application, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => res.send('Hello from the other side!'));

app.listen(4000, () => console.log('🚀 Server is ready & listening on http://localhost:4000'));
