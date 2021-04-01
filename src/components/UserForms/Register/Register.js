import { useState } from "react";
import { registerUser } from "../../../services/authServices";
import ErrorWindow from "../../ErrorWindow/ErrorWindow";

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        
        const username = e.target.username.value;
        const password = e.target.password.value;
        const rePassword = e.target['re-password'].value;
        if(password !== rePassword){
            setError('Password michmach')
            return;
        }
        // const rePassword = e.target['re-password'].value;
        registerUser(username, password)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return (
        <div className="register">
            <h2>Register Form</h2>
            {error && <ErrorWindow>{error}</ErrorWindow>}
            <form onSubmit={handleSubmitRegister}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter username ... "

                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password ..."
                />
                <label htmlFor="re-password">Password</label>
                <input
                    type="password"
                    name="re-password"
                    id="re-password"
                    placeholder="Repeat your password ..."
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Register;