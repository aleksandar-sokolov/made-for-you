// backendLess DB 

const apiKey = 'F1EABB0E-EEF7-4B8D-9318-AD11ABE2CB51'; // add key
const restKey = 'CBD77200-3799-464B-87AD-F6584D447AD9'; // add rest key
export const basicURL = `https://eu-api.backendless.com/${apiKey}/${restKey}/`;
const tableName = 'products'; // add table name
export const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
    table: `data/${tableName}`
}


