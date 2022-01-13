let mongoose = require("mongoose");

var Blog = mongoose.Schema({
    BlogTitle: {
        type: string
    },
    BlogCreatedDate: {
        type: Date,
        default: Date.now
    },
    BlogName: {
        type: String
    },
    BlogImage: {
        type: String
    },
    BlogContent: {
        type: string
    },
    BlogFootNote: {
        type: String
    },
    BlogCreatedBy: {
        type: [{ emailid: string, UserID: string }]
    },
    BlogScour: {
        type: [{ name: string }]
    },
    BlogTags: {
        type: [{ name: string }]
    },
    BlogStatus: {
        type: string,
        default: "Working"
    }
});

module.exports = Blog = mongoose.model("Blog", Blog);