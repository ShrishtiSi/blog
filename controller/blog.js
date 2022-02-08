const { model } = require("mongoose");
var Blog = require("../model/Blog");

class BlogData {
    async getAllBlogs(cb) {
        Blog.find({}, (err, Blogs) => {
            if (err) {
                return cb({ Status: "err", Msg: "Whle gett all blog", data: err });
            } else {
                return cb({ Status: "scc", Msg: "got all blog", data: Blogs });
            }
        });
    }

    async getBlogById(id, cb) {
        Blog.findById({ _id: id }, (err, blog) => {
            if (err) {
                return cb({ Status: "err", Msg: "Whle geting  blog by id", data: err });
            } else {
                return cb({ Status: "scc", Msg: "goot all blog", data: blog });
            }
        });
    }

}

module.exports = BlogData;