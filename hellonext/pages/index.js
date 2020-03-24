import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';

// export default function Index() {
//     return (
//         <div>
//             <Layout>
//                 <p>Hello Next.js</p>
//             </Layout>
//         </div>
//     );
// }

// const PostLink = (props) => (
//     <li>
//         {/* <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link> */}
//         <Link href="/p/[id]" as={`/p/${props.id}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

const PostLink = ({ post }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
                h1,
                a {
                    font-family: 'Arial';
                }

                ul {
                    padding: 0;
                }

                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
    </li>
);

const getPost = () => {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {/* <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" /> */}

                {/* <PostLink id="hello-next.js" title="Hello Next.js" />
                <PostLink id="learn-next.js" title="Learn Next.js is awesome" />
                <PostLink id="deploy-next.js" title="Deploy apps with Zeit" /> */}

                {getPost().map(post => (
                    // <li key={post.id}>
                    //     <Link href="/p/[id]" as={`/p/${post.id}`}>
                    //         <a>{post.title}</a>
                    //     </Link>
                    // </li>
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
        </Layout>
    );
}