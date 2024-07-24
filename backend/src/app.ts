import express from 'express';
import dotenv from 'dotenv';
import quotesRoute from './router/quotesRouter';
import logger from './utils/logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/quotes', quotesRoute);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
