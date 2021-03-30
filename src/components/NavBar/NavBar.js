import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = ({ username, handleLogout }) => {


    return (

        <div className="NavBar">
            <NavLink to="/" exact>
                <img src="/logo.png" alt="Made 4 You" />
            </NavLink>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/other">Other</NavLink>
            {username ?
                <>
                    <NavLink to="/product/add">Add Product</NavLink>
                    <NavLink to={`/user/${username}`}>Hello, {localStorage.username}</NavLink>
                    <button onClick={handleLogout}>Logout</button>

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
