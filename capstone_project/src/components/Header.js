import Nav from './Nav';
import logo from "./component_assets/Logo.svg";
import { useResponsiveness } from '../context/ResponsivenessContext';
import MobileNav from './MobileNav';

export default function Header () {

    const {isMobileView} = useResponsiveness();

    return (
        <>
        {isMobileView ? 
        <MobileNav/>
        :
        <header className='HEADER'>
            <img src={logo} alt="Little Lemon Logo"></img>
            <Nav/>
        </header>
         }
        </>
    );
}