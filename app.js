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

app.use("/images", express.static(__dirname + '/public/image'));
app.use("/CSS", express.static(__dirname + '/Public/CSS/form.css'));

//my routes
app.use('/', require("./routes/routes"));


// start server 
http.createServer(app).listen(port, () => {
    console.log("portnumber=" + port);
})