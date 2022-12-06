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

module.exports = router;