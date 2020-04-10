import Hello from "../components/Hello";
import { withRedux } from '../lib/redux';

const IndexPage = () => {
    return (
        <>
            <Hello />
        </>
    );
};

IndexPage.getInitialProps = ({ reduxStore }) => {
    const { dispatch } = reduxStore;
    dispatch({
        type: 'INPUT',
        name: 'NextJS',
    });

    return {};
}

export default withRedux(IndexPage);