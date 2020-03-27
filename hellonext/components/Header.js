import Link from "next/link"

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a title="Home" style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a title="Abount" style={linkStyle}>About</a>
        </Link>
        <Link href="/layout-sample1">
            <a title="LayoutSample1" style={linkStyle}>LayoutSample1</a>
        </Link>
        <Link href="/layout-sample2">
            <a title="LayoutSample2" style={linkStyle}>LayoutSample2</a>
        </Link>
        <Link href="/batman-index">
            <a title="Batman" style={linkStyle}>Batman</a>
        </Link>
        <Link href="/quotes">
            <a title="Quotes" style={linkStyle}>Quotes</a>
        </Link>
    </div>
)

export default Header;