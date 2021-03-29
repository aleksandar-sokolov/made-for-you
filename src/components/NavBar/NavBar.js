import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = ({username}) => {


    return (

        <div className="NavBar">
            <NavLink to="/">
                <img src="/logo.png" alt="Made 4 You" />
            </NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/other">Other</NavLink>
            {username ?
                <>
                    <NavLink to="/product/add">Add Product</NavLink>
                    <NavLink to={`/user/${username}`}>Hello, {localStorage.username}</NavLink>
                </>
                :
                <>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </>
            }



        </div >
    );
}

export default NavBar;
