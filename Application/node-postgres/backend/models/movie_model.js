const Pool = require('pg').Pool
const pool = new Pool({
    // host=movieshop.postgres.database.azure.com port=5432 dbname={your_database} user=postgres password={your_password} sslmode=require
    host:  'mtm-ent.org',
    user: 'postgres',
    password: 'postgres',
    database: 'movieshop',
    port: 5432,
});

const getMovie = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM movies', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  const getUser = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }


  const postUser = (body) => {
    return new Promise(function(resolve, reject) {
      const { userName, password, email } = body
      // ("INSERT INTO users (username) VALUES($1) RETURNING *",[userName] )
      pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',[userName, password, email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${0}`)
      })
    }) 
  }
  module.exports = {
    getMovie,
    postUser,
    getUser
  }