//All require module
var express = require("express");
var router = express.Router();
var Blog = require("../model/Blog");

//Route to add blog page
//Route to blog
router.get(['/', "/index"], (req, res) => {
    res.status(200).render('../views/Blog/blog.ejs', { title: "Blog - Glimmering" });
});

router.get('/Addnewblog', (req, res) => {
    res.status(200).render('../views/Blog/new_blog.ejs', { title: "Add New Blog - Glimmering" });
});

router.post("/saveblog", (req, res) => {
    let data = {
        BlogTitle: req.body.btitle,
        BlogName: req.body.bname,
        BlogContent: req.body.bcontent
    };
    var addblog = Blog(data);
    console.log(req.body);
    addblog.save((err, savedata) => {
        if (err) {
            req.flash("error", "Some error  while saving data");
            res.status("200"), redirect("/blog/addnewblog");
        } else {
            req.flash("success", "Data Daved");
            res.status(200).redirect("/");
        }
    });

    console.log(req.body);
});

module.exports = router;