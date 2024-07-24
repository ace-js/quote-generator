import { useQuery } from 'react-query';
import { GetRandomQuotesParams, getRandomQuotes } from '../api/quotes';

export const useFetchRandomQuotes = (params: GetRandomQuotesParams) => {
    return useQuery('random-quotes', () => getRandomQuotes(params!), {
        enabled: false,
    });
};
