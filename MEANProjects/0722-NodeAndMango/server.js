var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

var port = process.env.port || 8080;
app.listen(port, function(req, res){
    console.log("Server is running on port "+ port);
});