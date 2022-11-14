const {query} = require("./posgres-connection");

const getMovie = () => {
    return query("SELECT * FROM movies")
        .then(({rows}) => rows);
}

const getUser = () => {
    return query('SELECT * FROM users')
        .then(({rows}) => rows);
}


const postUser = ({userName, password, email}) => {
    return query(`INSERT INTO users (username, password, email)
                  VALUES ($1, $2, $3) RETURNING *`,
        [userName, password, email])
        .then(({rows}) => rows);
}
module.exports = {
    getMovie,
    postUser,
    getUser
}