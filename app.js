// require modules
let express = require('express');
let http = require('http');
let ejs = require('ejs');


//app
let app = express();

//view engine 
app.set('view engine', 'ejs');


//assign port number
let port = 2100 | process.env.port;

//
app.use("/images", express.static(__dirname + '/Public/images'));
app.use("/CSS", express.static(__dirname + '/Public/CSS/style1.css'));
app.use("/CSS", express.static(__dirname + '/Public/CSS/style2.css'));

//my routes
app.use('/user', require("./routes/userroutes.js"));
app.use('/', require("./routes/mainpageroutes.js"));

// start server 
http.createServer(app).listen(port, () => {
    console.log("port number =" + port);
});