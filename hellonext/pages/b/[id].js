import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";
import HttpsProxyAgent from 'https-proxy-agent';

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`, { agent: new HttpsProxyAgent('http://p0373605:vhu2su5x@proxy.icc.ogis-ri.co.jp:8080') });
    const show = await response.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Post;