const url = 'http://localhost:5000/data'

function getAll() {

    return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
}

export default {
    getAll
}