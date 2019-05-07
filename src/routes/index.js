const express = require('express');
const router = express.Router();

//Rotas
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

module.exports = router;