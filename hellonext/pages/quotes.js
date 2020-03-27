import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url) => {
    return fetch(url).then(response => response.json());
};

export default function Quotes() {
    const { query } = useRouter();
    const path = '/api/randomQuote' + (query.authors ? '?author=' + query.author : '');
    const { data, error } = useSWR(path, fetcher);

    const author = data?.author;
    let quote = !data ? 'Loading...' : data.quote;
    // let quote = data?.quote;
    // if (!data) quote = 'Loading...';
    if (error) quote = 'Failed to fetch the quote.';

    return (
        <main className="center">
            <div className="quote">{quote}</div>
            {author && <span className="author">- {author}</span>}

            <style jsx>{`
                main {
                    width: 90%;
                    max-width: 900px;
                    margin: 300px autho;
                    text-align: center;
                }
                .quote {
                    font-family: cursive;
                    color: #e243de;
                    font-size: 24px;
                    padding-bottom: 10px;
                }
                .author {
                    font-family: sans-serif;
                    color: #559834;
                    font-size: 20px;
                }
            `}</style>
        </main>
    );
}