// backendLess DB 

const apiKey = '9124D76F-5773-F2D9-FF0B-269195E51100'; // add key
const restKey = 'D1D60868-564F-4965-9973-8A5984F82174'; // add rest key
const basicURL = `https://eu-api.backendless.com/${apiKey}/${restKey}/`;
const tableName = 'products'; // add table name
const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
    table: `data/${tableName}`
}


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

//table part

export async function postElInTable(body, userToken) {
    return (await fetch(basicURL + endpoints.table, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify(body), 
    })).json()
}

export async function updateElInTable(body, userToken, objectId) {
    return (await fetch(basicURL + endpoints.table +'/'+ objectId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify(body), 
    })).json()
}

export async function getElInTable(userToken, objectId) {
    return (await fetch(basicURL + endpoints.table + '/'+ objectId, {
        method: 'GET',
        headers: {
            'user-token': userToken
        },
    })).json()
}

export async function getAllFromTable(userToken) {
    return (await fetch(basicURL + endpoints.table , {
        method: 'GET',
        headers: {
            'user-token': userToken
        },
    })).json()
}

export async function deleteElInTable(userToken, objectId) {
    return (await fetch(basicURL + endpoints.table + '/'+ objectId, {
        method: 'DELETE',
        headers: {
            'user-token': userToken
        },
    })).json()
}