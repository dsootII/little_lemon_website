import { Link } from "react-router-dom";

export default function Nav () {

    return (

        <nav className="headerNavigation">
        <ul className="headerNavigationList">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/orderonline">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    );
}