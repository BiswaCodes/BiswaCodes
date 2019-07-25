var express = require("express");
var router = express.Router();

// routes/products.route.js
const product_Controller = require("../controllers/Product.controllers");

router.post('/create', product_Controller.Product_create);
router.get('/product',function(req, res){
    res.statusMessage = "reached the product";
    console.log("here you are!!");
});

module.exports = router;