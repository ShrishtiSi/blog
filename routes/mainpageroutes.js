//All require module
var express = require("express");
var router = express.Router();
var { v4: uuid4 } = require("uuid");

//Route to Home page
router.get(['/', '/index'], (req, res) => {
    // var uqid = uuid4();
    // console.log(uqid);
    res.status(200).render('../views/mainpages/index.ejs', { title: "Home - Glimmering" });
});

//Route from Login to blog page
router.get('/userpage', (req, res) => {
    res.status(200).render('../views/mainpages/home.ejs', { title: "Home - Glimmering" });
});

//Route to Contact us
router.get('/Contactus', (req, res) => {
    res.status(200).render('../views/mainpages/contact.ejs', { title: "Contact us - Glimmering" });
});

//Route to About us
router.get('/Aboutus', (req, res) => {
    res.status(200).render('../views/mainpages/about.ejs', { title: "About us - Glimmering" });
});

//Route to 404 Page
router.get('/*', (req, res) => {
    res.status(404).render('../views/mainpages/error404.ejs', { title: "Error 404" });
});

module.exports = router;