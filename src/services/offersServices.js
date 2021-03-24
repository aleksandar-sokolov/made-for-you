const url = 'http://localhost:5000/data'
//npx json-server --watch db.json --port 5000



function getAll() {

    return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
}

export default {
    getAll
}