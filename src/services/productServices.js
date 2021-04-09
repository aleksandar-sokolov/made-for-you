import { basicURL, endpoints } from './databaseConfig'


async function add(body, userToken) {
    return (await fetch(basicURL + endpoints.table, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify(body),
    })).json()
}

async function update(body, userToken, objectId) {
    return (await fetch(basicURL + endpoints.table + '/' + objectId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify(body),
    })).json()
}

async function getOne(userToken, objectId) {
    return (await fetch(basicURL + endpoints.table + '/' + objectId, {
        method: 'GET',
        headers: {
            // 'user-token': userToken
        },
    })).json()
}

async function getAll(userToken) {
    return (await fetch(basicURL + endpoints.table, {
        method: 'GET',
        headers: {
            // 'user-token': userToken
        },
    })).json()
}

async function deleteOne(userToken, objectId) {
    return (await fetch(basicURL + endpoints.table + '/' + objectId, {
        method: 'DELETE',
        headers: {
            'user-token': userToken
        },
    })).json()
}

async function getAllFromUser(userToken, userId) {
    return (await fetch(basicURL + endpoints.table + `?where=ownerId%20%3D%20%27${userId}%27`, {
        method: 'GET',
        headers: {
            // 'user-token': userToken
        },
    })).json()
}



export default {
    getAll,
    getOne,
    deleteOne,
    update,
    add,
    getAllFromUser
}