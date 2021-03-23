
import './NavBar.css'


const NavBar = () => {


    return (

        <div className="NavBar">
            <a href="/">
            <img src="./logo.png" alt="Made 4 You"/>
            </a>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contacts">Contacts</a>
            <a href="/other">Other</a>
            
        </div>
    );
}

export default NavBar; 
