// Health check endpoint for Render
import express, { Request, Response } from 'express';

export const healthCheckRouter = express.Router();

healthCheckRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: '2Serv API is running' });
});
