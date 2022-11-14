const {Router} = require('express');
const movie_model = require("../models/movie_model");

const router = Router();

router.post("/signUp", (req, res) => {
    movie_model.postUser(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
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
module.exports = router;