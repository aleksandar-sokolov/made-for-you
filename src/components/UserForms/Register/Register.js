import { useState } from "react";
import { registerUser } from "../../../services/authServices";
import ErrorWindow from "../../ErrorWindow/ErrorWindow";

const Register = () => {

    const [error, setError] = useState('');

    const handleSubmitRegister = (e) => {
        e.preventDefault()

        const username = e.target.username.value;
        const password = e.target.password.value;
        const rePassword = e.target['re-password'].value;
        if (password !== rePassword) {
            setError('Passwords mismatch!')
            return;
        }

        if (username.length < 4) {
            setError('Username should be at least four(4) characters long!')
            return;
        }

        if (password.length < 4) {
            setError('Password should be at least four(4) characters long!')
            return;
        }

        if (!username || !password) {
            setError('All fields are required')
            return;
        }
        
        registerUser(username, password)
            .then(res => {
                console.log(res)
                if(res.hasOwnProperty("errorData")) throw new Error(res.message)
            })
            .catch(err => {
                setError(err.message)
                console.log(err);
            })
    }

    const clearErr = () => {
        setError('')
    }

    return (
        <div className="register">
            <h2>Register Form</h2>
            {error && <ErrorWindow clearErr={clearErr}>{error}</ErrorWindow>}
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
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Register;