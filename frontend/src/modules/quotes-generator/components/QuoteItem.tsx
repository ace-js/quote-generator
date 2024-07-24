import { Card, Badge, Stack } from 'react-bootstrap';
import { Quote } from '../../../models/quote'

type Props = {
    quote: Quote
};

const QuoteItem = ({ quote }: Props) => {
    return (
        <Card border="warning" style={{ width: '35rem' }}>
            <Card.Header>{quote.author}</Card.Header>
            <Card.Body>
                <Card.Text className='mb-3'>{quote.content}</Card.Text>
                <Card.Text style={{ textAlign: 'left' }}>Created at: {quote.dateAdded}</Card.Text>
                <Card.Text style={{ textAlign: 'left' }}>Updated at: {quote.dateModified}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className='d-flex'>
                    <Card.Text className='mb-0'>Tag(s):</Card.Text>
                    <Stack style={{ marginLeft: '10px' }} direction="horizontal" gap={2}>
                        {quote.tags.map((tag) => <Badge key={tag} className='ml-2' bg="primary" text="light">{tag}</Badge>)}
                    </Stack>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default QuoteItem;