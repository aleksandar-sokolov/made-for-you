import { useContext } from "react";
import { useHistory } from "react-router";
import { loginUser } from "../../../services/authServices";
import { AuthContext } from '../../../contexts/AuthContext'
import { ErrorContext } from "../../../contexts/ErrorContext";

const Login = () => {

    const history = useHistory();
    const { fillUserData } = useContext(AuthContext);
    const { displayError } = useContext(ErrorContext);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        loginUser(username, password)
            .then(res => {
                if (res.hasOwnProperty("errorData")) throw new Error(res.message);
                console.log('successful login');
                fillUserData(res)
                history.push('/')
            })
            .catch(err => {
                displayError(err.message)
            })
    }


    return (
        <div className="login">
            <h2>Login Form</h2>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter username ... " />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password ..." />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;