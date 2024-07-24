import apiClient from '../utils/apiClient';
import { Quote } from '../models/quote';
import logger from '../utils/logger';
import { GetQuotesParams } from '../requests/getQuotesParms';

export const getRandomQuotes = async (params: GetQuotesParams): Promise<Quote[]> => {
  try {
    const response = await apiClient.get(`${process.env.API_BASE_URL}/quotes/random`, { params });
    return response.data;
  } catch (error) {
    logger.error('Failed to fetch quotes', { error });
    throw new Error('Failed to fetch quotes');
  }
};