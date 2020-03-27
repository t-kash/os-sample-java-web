import quotes from '../../quotes.json';
import allQuotes from '../../quotes.json';

export default (request, response) => {
    // response.status(200).json({
    //     quote: 'Write tests, not too many, mostly integration',
    //     author: 'Guillermo Rauch'
    // });

    // const quote = quotes[Math.floor(Math.random() * quotes.length)];

    const { author } = request.query;
    let quotes = allQuotes;

    if (author) {
        quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
    }

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    response.status(200).json(quote);
};