import { Button, Alert } from 'react-bootstrap';
import useQuoteGenerator from './useQuotesGenerator';
import QuoteItem from './components/QuoteItem';

const QuotesGenerator = () => {
    const { quote, isFetching, error, onFetchHandler } = useQuoteGenerator();

    return (
        <div className="d-flex justify-content-center">
            {error && <Alert variant="danger">{error.message}</Alert>}
            <div style={{ width: 600 }} className="p-3 mt-2 self-center">
                <div className="d-flex justify-content-between mb-3" >
                    <h4>Quote Generator</h4>
                    <Button variant="primary" disabled={isFetching} onClick={onFetchHandler}>{isFetching ? 'Loading...' : 'Next'}</Button>
                </div>
                <div className="d-flex justify-content-center">
                    {quote && <QuoteItem key={quote._id} quote={quote} />}
                </div>
            </div>
        </div>);
};

export default QuotesGenerator;