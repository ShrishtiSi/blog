//All require module
var express = require("express");
var router = express.Router();
var User = require("../model/User");


checkuserexitce = function(req, res, next) {
    var token = req.cookies.token;
    if (!token) {
        next();
    } else {
        req.flash("error", "User Allredy log in");
        res.status(200).render('../views/mainpages/index.ejs', { title: "Home - Glimmering" });
    }
};

chekusernotexitcs = function(req, res, next) {
    var token = req.cookies.token;
    if (!token) {
        req.flash("error", "Pls login");
        res.status(200).render('../views/user/login.ejs', { title: "Login - Glimmering" });
    } else {
        next();
    }
};

//Route to login page
router.get('/login', checkuserexitce, (req, res) => {
    res.status(200).render('../views/user/login.ejs', { title: "Login - Glimmering" });
});

//Route to sign up page
router.get('/signup', checkuserexitce, (req, res) => {
    res.status(200).render('../views/user/signup.ejs', { title: "Sign up - Glimmering" });
});


//Route to User profile page
router.get('/profile', chekusernotexitcs, (req, res) => {
    res.status(200).render('../views/user/userprofile.ejs', { title: " Profile - Glimmering" });
});

router.get('/profile', chekusernotexitcs, (req, res) => {
    res.status(200).render('../views/user/profile.ejs', { title: " Profile - Glimmering" });
});

//Route to change password page
router.get('/changepassword', (req, res) => {
    res.status(200).render('../views/user/changepassword.ejs', { title: "Change Password - Glimmering" });
});

router.post("/show", (req, res) => {
    let data {

    }
})

//Route to save user details
router.post("/SaveUser", (req, res) => {
    let data = {
        Ufname: req.body.ufname,
        Ulname: req.body.ulname,
        Uemail: req.body.uemail,
        Uphone: req.body.uphone,
        Upass: req.body.upass
    };
    User.findOne({ Uemail: req.body.uemail }, (err, found) => {
        if (err) {
            req.flash("error", "Some error at server");
            res.status(200).redirect("/user/signup");
        } else if (found) {
            req.flash("error", "Email id Alredy there");
            res.status(200).redirect("/user/signup");
        } else {
            var newUserRecord = User(data);
            newUserRecord.save((err, saved) => {
                if (err) {
                    req.flash("error", "Some error at server while saving data");
                    res.status(200).redirect("/user/signup");
                } else {
                    req.flash("success", "User Registered");
                    res.status(200).redirect("/user/login");
                }
            });
        }
    });
});


//Route to check wether user exist or not
router.post("/login", (req, res) => {
    // console.log(req.body);
    User.findOne({ Uemail: req.body.uid, Upass: req.body.upass }, (err, data) => {
        if (err) {
            req.flash("error", "Some error at server");
            res.status(200).redirect("/user/signup");
        } else if (!data) {
            req.flash("error", "User id and password is wrong");
            res.status(200).redirect("/user/signup");
        } else {
            userdata = {
                name: data.Ufname + " " + data.Ulname,
                email: data.Uemail,
                phone: data.Uphone,
                ID: data._id
            };
            res.cookie("token", userdata, { maxAge: 60 * 60 * 100000 });
            res.status(200).render('../views/mainpages/index.ejs', { title: "Home - Glimmering " });
        }
    });
});

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    req.flash("success", "Logout Done");
    res.status(200).redirect("/user/login");
});

module.exports = router;