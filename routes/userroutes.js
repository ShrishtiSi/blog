//All require module
var express = require("express");
var router = express.Router();
var User = require("../model/User");


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

//Route to save user details
router.post("/SaveUser", (req, res) => {
    let data = {
        Ufname: req.body.ufname,
        Ulname: req.body.ulname,
        Uemail: req.body.uemail,
        Upass: req.body.uphone,

    };
    var newUserRecord = User(data);
    newUserRecord.save((err, saved) => {
        if (err) {
            console.log("Ero" + err);
            res.status(200).redirect("/user/signup");
        } else {
            res.status(200).redirect("/user/login");
        }
    });

});

module.exports = router;