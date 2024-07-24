import { useFetchRandomQuotes } from '../../http/queries/useFetchRandomQuotes';
import { Quote } from '../../models/quote';

type QuoteGeneratorResponse = {
    quote?: Quote;
    isFetching: boolean;
    error: any;
    onFetchHandler: () => void;
};
const useQuotesGenerator = (): QuoteGeneratorResponse => {
    const { data, error, refetch, isFetching } = useFetchRandomQuotes({ limit: 1 })

    const onFetchHandler = () => {
        refetch()
    }

    return { quote: data ? data[0] : undefined, isFetching, error, onFetchHandler }
}

export default useQuotesGenerator;
