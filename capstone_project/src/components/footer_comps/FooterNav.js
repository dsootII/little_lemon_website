import { Link } from "react-router-dom";

export default function FooterNav() {

    return (
        <footer>
            <div className="footerNavTable">
            <ul className="Doormat-Navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservation">Reservations</Link></li>
                <li><Link to="/orderonline">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <ul className="Doormat-Navigation">
                <li><Link to="/contactus">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Social Medial Links</Link></li>
            </ul>
            </div>
        </footer>
    );
};

