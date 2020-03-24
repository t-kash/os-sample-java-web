import Header from "./Header";

const layoutStyle = {
    margin: 20,
    paddin: 20,
    border: '1px solid #DDD'
}

// Method 0 - Page children as a prop
const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

// Method 2 - Page content as a prop
export const LayoutContent = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div>
);

// Method 1 - Layout as a Higher Order Component
export const withLayout = (Page) => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    );
};

export default Layout;
