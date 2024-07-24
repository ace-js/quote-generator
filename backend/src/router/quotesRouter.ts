import { Router } from 'express';
import { getQuotes } from '../controllers/quotesController';
import { validateRequest } from '../middlewares/validateRequest';
import { getQuotesSchema } from '../schemas/quotesSchema';

const router = Router();

router.get('/random', validateRequest(getQuotesSchema), getQuotes);

export default router;
