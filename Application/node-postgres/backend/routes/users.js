const {Router} = require('express');
const movie_model = require("../models/movie_model");

const router = Router();

router.get('/', (req, res) => {
    movie_model.getUser()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

module.exports = router;