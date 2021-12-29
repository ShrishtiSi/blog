// require modules
let express = require('express');
let http = require('http');
let ejs = require('ejs');
let flash = require("connect-flash");
let cookieParser = require("cookie-parser");
let session = require("express-session");
let connectDB = require("./config/connection");

//app
let app = express();

//view engine 
app.set('view engine', 'ejs');


//assign port number
let port = 2100 | process.env.port;

//adding some pakeg
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(cookieParser("Pawan Mehak Shrishti"));
app.use(session({
    cookie: { maxAge: 3600000 },
    secret: "I dont know what to know",
    resave: false,
    saveUninitialized: false
}));

//all public folder
app.use("/images", express.static(__dirname + '/Public/images'));
app.use("/CSS", express.static(__dirname + '/Public/CSS/style1.css'));
app.use("/CSS1", express.static(__dirname + '/Public/CSS/style2.css'));
app.use("/CSS2", express.static(__dirname + '/Public/CSS/style3.css'));



//midlwear
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

//my routes
app.use('/user', require("./routes/userroutes.js"));
app.use('/', require("./routes/mainpageroutes.js"));

// start server 
http.createServer(app).listen(port, () => {
    console.log("port number =" + port);
});