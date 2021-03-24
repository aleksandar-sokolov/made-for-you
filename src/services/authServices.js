import {basicURL, endpoints } from './databaseConfig'

//USER part 
export async function registerUser(username, password) {
    return (await fetch(basicURL + endpoints.register, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })).json();
}

export async function loginUser(username, password) {
    // const result =
    return (await fetch(basicURL + endpoints.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: username, password })
    })).json();
    // localStorage.setItem('userToken', result['user-token']);
    // return result;
}

export async function logoutUser(userToken) {
    // const token = localStorage.userToken; 
    return (await fetch(basicURL + endpoints.logout, {
        method: 'GET',
        headers: {
            'user-token': userToken
        }
    }))
}