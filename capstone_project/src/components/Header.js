import Nav from './Nav';
import logo from "./component_assets/Logo.svg";

export default function Header () {

    return (
        <header className='HEADER'>
            <img src={logo} alt="Little Lemon Logo"></img>
            <Nav/>
        </header>
    );
}