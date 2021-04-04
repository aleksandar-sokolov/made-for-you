import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [username, setUsername] = useState(localStorage.username || null);
    const [userId, setUserId] = useState(localStorage.userId || null);
    const [userToken, setUserToken] = useState(localStorage.userToken || null)

    const fillUserData = (userInfo) => {
        setUsername(userInfo.username);
        setUserId(userInfo.objectId);
        setUserToken(userInfo['user-token']);
        localStorage.setItem('username', userInfo.username);
        localStorage.setItem('userId', userInfo.objectId);
        localStorage.setItem('userToken', userInfo['user-token']);
    }

    const clearUserData = () => {
        setUsername(null);
        setUserId(null);
        setUserToken(null);
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('userToken');
    }

    return (
        <AuthContext.Provider value={{ username, userId, userToken, fillUserData, clearUserData }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;