import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import employeeRouter from './routes/employeeRoutes';
import errorHandler from './middleware/errorHandler';

const app: Express = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
    res.send('Root route');
});

app.use('/api/employees', employeeRouter);
app.use(errorHandler);

export default app;
