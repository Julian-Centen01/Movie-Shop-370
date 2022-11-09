const express = require('express')
const app = express()
const port = 3001

const movie_model = require('./models/movie_model')

app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// // // create a todo
// app.post("/signUp", async (req, res) => {
//   // await waits for the function to complete before it continues
//   // accessable through the above async
//    try {
//        const { userName } = req.body
//        const newUser = await pool.query("INSERT INTO users (username) VALUES($1) RETURNING *",[userName] )
//        res.json(newUser.rows[0])
//    } catch (err) {
//        console.error(err.message);
//    }
// })
app.post("/signUp", (req, res) => {
  movie_model.postUser(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/api', (req, res) => {
    movie_model.getMovie()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  app.get('/users', (req, res) => {
    movie_model.getUser()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})