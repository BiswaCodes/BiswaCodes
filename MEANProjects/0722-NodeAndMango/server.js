var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var mongoUrl = "mongodb://localhost:27017";
var mongodbClient = require("mongodb").MongoClient;

var app = express();

var port = process.env.port || 8080;
app.listen(port, function(req, res){
    console.log("Server is running on port "+ port);
});

mongodbClient.connect(mongoUrl, { useNewUrlParser: true}, function(err, res){
    if(err) throw err;
    console.log("connected to Mongo!");
    res.close();
})