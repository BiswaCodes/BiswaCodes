//variable declarations
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//mongo DB connection URI
var db_url = "mongodb://127.0.0.1:27017/customerapp";
let mongoUri = process.env.MONGODB_URI || db_url;

//mongo connection set up
mongoose.connect(mongoUri, {useNewUrlParser:true}, function(err){
    if(err) throw err;
    console.log("connected to mongo at "+ mongoUri);
});
mongoose.Promise = global.Promise;// why we need this? what is global.promise?
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Route to channel the requests properly
var product = require("./routes/Product.routes");

var app = express();
var port = process.env.port || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/product',product);// all the URLs appended after /product will gets called

//creation of the server
app.listen(port, function(req, res){
    console.log("server is running at "+ port);
});