import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand">Google Books</a>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/search">Search</Link>
                </li>
                <br></br>
                <li className="nav-item active">
                    <Link to="/saved">My Saved Books</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;