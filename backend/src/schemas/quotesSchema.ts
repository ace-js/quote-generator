import { query } from 'express-validator';

export const getQuotesSchema = [
  query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50').default(1),
  query('maxLength').optional().isInt(),
  query('minLength').optional().isInt(),
  query('tags').optional().isString(),
  query('author').optional().isString(),
]
