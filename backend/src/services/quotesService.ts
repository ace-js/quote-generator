import apiClient from '../utils/apiClient';
import { Quote } from '../models/quote';
import logger from '../utils/logger';
import { GetQuotesParams } from '../requests/getQuotesParms';
// improvment: using ioc container to rely on interfaces for all dependencies and services
// that would make the codebase more resilient to changes and more scalable. 
// potential solution can be based on nestjs or inversify
export const getRandomQuotes = async (params: GetQuotesParams): Promise<Quote[]> => {
  try {
    const response = await apiClient.get<Quote[]>(`${process.env.API_BASE_URL}/quotes/random`, { params });
    return response.data;
  } catch (error) {
    logger.error('Failed to fetch quotes', { error });
    throw new Error('Failed to fetch quotes');
  }
};
