let mongoose = require("mongoose");

var User = mongoose.Schema({
    Ufname: {
        type: String
    },
    Ulname: {
        type: String
    },
    Uemail: {
        type: String,
        index: true
    },
    Uphone: {
        type: Number,
        default: 1234567890
    },
    Upass: {
        type: String
    },
    UregistrationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("User", User);