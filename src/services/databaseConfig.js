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


export default {
    basicURL,
    endpoints
}