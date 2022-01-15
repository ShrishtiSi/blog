//All require module
var express = require("express");
var router = express.Router();
var blog = require("../model/Blog");

//Route to add blog page
router.get('/Addnewblog', (req, res) => {
    res.status(200).render('../views/Blog/new_blog.ejs', { title: "Add New Blog - Glimmering" });
});

module.exports = router;