import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import './NavBar.css'


    const NavBar = () => {

    const {username, clearUserData } = useContext(AuthContext);

    return (

        <div className="NavBar">
            <NavLink to="/" exact>
                <img src="/logo.png" alt="Made 4 You" />
            </NavLink>

            {username ?
                <>
                    <button onClick={clearUserData}>Logout</button>
                    <NavLink to={`/user/${username}`}>Hello, {username}</NavLink>
                    <NavLink to="/product/add">Add Product</NavLink>

                </>
                :
                <>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </>
            }


            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/" exact>Home</NavLink>




        </div >
    );
}

export default NavBar;
