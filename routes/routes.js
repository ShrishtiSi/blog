var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
})

router.get('/form', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
})

router.get('/*', (req, res) => {
    res.status(404).render('../views/mainpages/404.ejs');
})

module.exports = router;