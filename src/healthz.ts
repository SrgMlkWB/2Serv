// Health check endpoint for Render
import express from 'express';

export const healthCheckRouter = express.Router();

healthCheckRouter.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: '2Serv API is running' });
});
