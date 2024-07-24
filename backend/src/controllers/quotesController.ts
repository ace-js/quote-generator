import { Request, Response } from 'express';
import { getRandomQuotes } from '../services/quotesService';
import { GetQuotesParams } from '../requests/getQuotesParms';
import logger from '../utils/logger';

export const getQuotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const params: GetQuotesParams = {
      limit: req.query.limit ? parseInt(req.query.limit as string, 10) : undefined,
      maxLength: req.query.maxLength ? parseInt(req.query.maxLength as string, 10) : undefined,
      minLength: req.query.minLength ? parseInt(req.query.minLength as string, 10) : undefined,
      tags: req.query.tags as string,
      author: req.query.author as string,
    };

    const quotes = await getRandomQuotes(params);
    res.json(quotes);
  } catch (error) {
    logger.error('Failed to fetch quotes', { error });
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
};
