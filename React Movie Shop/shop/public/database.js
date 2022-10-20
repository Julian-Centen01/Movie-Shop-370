const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password:"admin",
    database: "MovieShop"
})

client.connect();

client.query(`Select * from users`, (err,res)=>{
    if(!err){
        console.log(res.rows);
    }else {
        console.log(err.message);
    }
    // eslint-disable-next-line no-unused-expressions
    client.end
})