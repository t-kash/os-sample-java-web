import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import HttpsProxyAgent from 'https-proxy-agent';

const Batman = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {
                props.shows.map((show) => (
                    <li key={show.id}>
                        <Link href="/b/[id]" as={`/b/${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </Layout>
);

Batman.getInitialProps = async function () {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman', { agent: new HttpsProxyAgent('http://p0373605:vhu2su5x@proxy.icc.ogis-ri.co.jp:8080') });
    const data = await response.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map((entry) => entry.show)
    };
};

export default Batman;