import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [userData, setUserData] = useState(localStorage.userData)

    const fillUserData = (userInfo) => {
        setUserData(userInfo);
        localStorage.setItem('userData', userInfo)
    }

    const clearUserData = () => {
        setUserData(null);
        localStorage.removeItem('userData');
    }

    return (
        <AuthContext.Provider value={userData, fillUserData, clearUserData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;