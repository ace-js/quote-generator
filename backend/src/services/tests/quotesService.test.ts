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
      { id: '1', author: 'Author 1', content: 'Quote 1', tags: ['tag1'] },
      { id: '2', author: 'Author 2', content: 'Quote 2', tags: ['tag2'] },
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
