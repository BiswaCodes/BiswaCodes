var express = require("express");
var bodyParser = require("body-parser");

var product = require("./routes/Product.routes");

var app = express();
var port = process.env.port || 8080;

app.use("/product",product);

app.listen(port, function(req, res){
    console.log("server is running at "+ port);
})