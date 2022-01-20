//All require module
var express = require("express");
var router = express.Router();
var Blog = require("../model/Blog");

//Route to blog
router.get(['/', "/index"], (req, res) => {
    res.status(200).render('../views/Blog/blog.ejs', { title: "Blog - Glimmering" });
});

//Route to add blog page
router.get('/Addnewblog', (req, res) => {
    res.status(200).render('../views/Blog/new_blog.ejs', { title: "Add New Blog - Glimmering" });
});

router.post("/saveblog", (req, res) => {
    let data = {
        BlogTitle: req.body.btitle,
        BlogName: req.body.bname,
        BlogContent: req.body.bcontent,
        BlogFootNote: req.body.bfootnote,
        BlogCreatedBy: req.body.bcreatedby,
        BlogTags: req.body.btag
    };
    var addblog = Blog(data);
    console.log(req.body);
    addblog.save((err, savedata) => {
        if (err) {
            req.flash("error", "Some error  while saving data");
            res.status("200"), redirect("/blog/addnewblog");
        } else {
            req.flash("success", "Data Saved");
            res.status(200).redirect("/");
        }
    });

    console.log(req.body);
});

module.exports = router;