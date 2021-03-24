import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {


    return (

        <div className="NavBar">
            <NavLink to="/">
                <img src="./logo.png" alt="Made 4 You" />
            </NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/other">Other</NavLink>

        </div>
    );
}

export default NavBar;
