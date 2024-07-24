import sinon from 'sinon';
import { getRandomQuotes } from './../quotesService';
import apiClient from '../../utils/apiClient';
import { Quote } from '../../models/quote';

describe('QuotesService', () => {
  let getStub: sinon.SinonStub;

  beforeEach(() => {
    getStub = sinon.stub(apiClient, 'get');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should fetch random quotes successfully', async () => {
    const quotesMock: Quote[] = [
      {
        _id: '1',
        dateAdded: '2022-01-01T00:00:00.000Z',
        dateModified: '2022-01-01T00:00:00.000Z',
        author: 'Author 1',
        content: 'Quote 1',
        tags: ['tag1'],
        authorSlug: '',
        length: 0
      },
      {
        _id: '2',
        dateAdded: '2022-01-01T00:00:00.000Z',
        dateModified: '2022-01-01T00:00:00.000Z',
        author: 'Author 2',
        content: 'Quote 2',
        tags: ['tag1', 'tag2'],
        authorSlug: '',
        length: 0
      },
    ];

    getStub.resolves({ data: quotesMock });

    const quotes = await getRandomQuotes({});

    expect(quotes).toEqual(quotesMock);
  });

  it('should throw an error when API request fails', async () => {
    getStub.rejects(new Error('API error'));

    await expect(getRandomQuotes({})).rejects.toThrow('Failed to fetch quotes');
  });
});
