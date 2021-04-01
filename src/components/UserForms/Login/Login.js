import { useHistory } from "react-router";
import { loginUser } from "../../../services/authServices";

const Login = ({onLogin}) => {

    const history = useHistory(); 
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        loginUser(username, password)
            .then(res => {
                localStorage.setItem('username', res.username);
                localStorage.setItem('token', res['user-token']);
                localStorage.setItem('objectId', res.objectId);
                console.log('successful login');
                onLogin()
                history.push('/')
            })
            .catch(console.log)

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