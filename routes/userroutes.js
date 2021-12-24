//All require module
var express = require("express");
var router = express.Router();

//Route to login page
router.get('/login', (req, res) => {
    res.status(200).render('../views/user/login.ejs', { title: "Login - Glimmering" });
});

//Route to sign up page
router.get('/signup', (req, res) => {
    res.status(200).render('../views/user/signup.ejs', { title: "Sign up - Glimmering" });
});


//Route to User profile page
router.get('/profile', (req, res) => {
    res.status(200).render('../views/user/userprofile.ejs', { title: " Profile - Glimmering" });
});

//Route to change password page
router.get('/changepassword', (req, res) => {
    res.status(200).render('../views/user/changepassword.ejs', { title: "Change Password - Glimmering" });
});

module.exports = router;