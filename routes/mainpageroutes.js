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

//Route to Contact us
router.get('/Contactus', (req, res) => {
    res.status(200).render('../views/mainpages/contact.ejs');
});

//Route to About us
router.get('/Aboutus', (req, res) => {
    res.status(200).render('../views/mainpages/about.ejs');
});

//Route to blog
router.get('/blog', (req, res) => {
    res.status(200).render('../views/mainpages/blog.ejs');
});

//Route to 404 Page
router.get('/*', (req, res) => {
    res.status(404).render('../views/mainpages/error404.ejs');
});

module.exports = router;