//All require module
var express = require("express");
var router = express.Router();

//Route to Home page
router.get('/', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
});

router.get('/index', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
});

//Route to login page
router.get('/login', (req, res) => {
    res.status(200).render('../views/mainpages/login.ejs');
});

//Route to sign up page
router.get('/signup', (req, res) => {
    res.status(200).render('../views/mainpages/signup.ejs');
});

//Route to 404 Page
router.get('/*', (req, res) => {
    res.status(404).render('../views/mainpages/404.ejs');
});

module.exports = router;