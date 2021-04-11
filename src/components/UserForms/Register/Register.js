import { useContext } from "react";
import { ErrorContext } from "../../../contexts/ErrorContext";
import { registerUser } from "../../../services/authServices";
import InfoMessage from "../../InfoMessage/InfoMessage";

const Register = ({ history }) => {

    const { displayError } = useContext(ErrorContext)

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const rePassword = e.target['re-password'].value;
        if (password !== rePassword) {
            displayError('Passwords mismatch!')
            return;
        }

        if (username.length < 4) {
            displayError('Username should be at least four(4) characters long!')
            return;
        }

        if (password.length < 4) {
            displayError('Password should be at least four(4) characters long!')
            return;
        }

        if (!username || !password) {
            displayError('All fields are required')
            return;
        }

        registerUser(username, password)
            .then(res => {
                console.log(res)
                if (res.hasOwnProperty("errorData")) throw new Error(res.message)
                history.push('/login')
            })
            .catch(err => {
                displayError(err.message)
                console.log(err);
            })
    }


    return (
        <div className="register">
            <InfoMessage>Username and password should be at least four characters long.</InfoMessage>
            <h2>Register Form</h2>
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