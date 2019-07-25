const Product = require("../models/Product.models");

exports.Product_create = function(req, res){
    let new_product = new Product()
    {
        first_name = req.body.Name,
        first_name = req.body.age
    };
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.test = function(req, res){
    console.log("test controller reached successfully!");
};