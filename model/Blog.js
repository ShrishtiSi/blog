let mongoose = require("mongoose");

var Blog = mongoose.Schema({
    BlogTitle: {
        type: String
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
        type: String
    },
    BlogFootNote: {
        type: String
    },
    BlogCreatedBy: {
        type: String
    },
    BlogScour: {
        type: String
    },
    BlogTags: {
        type: String
    },
    BlogStatus: {
        type: String,
        default: "Working"
    }
});

module.exports = Blog = mongoose.model("Blog", Blog);