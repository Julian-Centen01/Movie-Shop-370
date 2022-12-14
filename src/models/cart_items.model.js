const Pool = require('pg').Pool

const getCart = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT session_id FROM cart_items UNION SELECT title FROM movies ORDER BY id DESC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const deleteCartMovie = (movieId) => {
    return new Promise(function(resolve, reject) {
        const id = parseInt(movieId)
        pool.query('DELETE FROM cart_items WHERE movie_id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`movie deleted with id: ${id}`);
        })
    })
}

const changeQuantity = (movieId, Quantity) => {
    return new Promise(function (resolve, reject)) {
        const id = parseInt(movieId)
        const quantityIn = parseInt(Quantity)
        pool.query('DELETE FROM cart_items WHERE movie_id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`movie deleted with id: ${id}`);
        })
    }
}

const addMovie = (movieId, Quantity) => {
    return new Promise(function(resolve, reject) {
        const id = parseInt(movieId)
        const quantityIn = parseInt(Quantity)
        pool.query('INSERT INTO cart_items (movie_id, quantity) VALUES (Id, quantityIn)', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`movie added with id: ${id}`);
        })
    })
}

module.exports = {
    getCart ,
    deleteCartMovie ,
    changeQuantity ,
    addMovie ,
}