import axios from 'axios';
import queryString from 'query-string';
import { Quote } from '../../models/quote';

export type GetRandomQuotesParams = {
    limit?: number;
    maxLength?: number;
    minLength?: number;
    tags?: string;
    author?: string;
};

export const getRandomQuotes = (params: GetRandomQuotesParams): Promise<Quote[]> => {
    const stringifiedParams = queryString.stringify(params);
    return axios.get<Quote[]>('http://localhost:3001/quotes/random?' + stringifiedParams).then((response) => response.data);
};
