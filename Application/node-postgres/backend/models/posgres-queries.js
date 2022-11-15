const {DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT} = require('../config');
const Pool = require('pg').Pool
const pool = new Pool({
    // host=movieshop.postgres.database.azure.com port=5432 dbname={your_database} user=postgres password={your_password} sslmode=require
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    port: DB_PORT,
});

function query() {
    return new Promise((resolve, reject) => {
        return pool.query(...arguments, (error, result) => {
            if (error) reject(error);
            else resolve(result);
        });
    });
}

module.exports = {
    db: pool,
    query,
};