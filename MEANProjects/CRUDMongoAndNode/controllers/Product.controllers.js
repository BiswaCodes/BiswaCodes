var mongoose = require('mongoose');
const Product = require("../models/Product.models");

exports.Product_create = function(req, res, next){
    let newProduct = Product(
        {
            Name:req.body.Name,
            Price:req.body.Price
        });
    newProduct.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log(err);
        res.send('Product Created successfully')
    })
};

exports.product_update = function(req, res, next){
    Product.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{Name:req.body.Name,Price:req.body.Price},function(err, product){
        if(err) return next(err)
        res.send('product updated successfully');
    })
};

exports.product_delete = function(req, res, next){
    //id - 5d3bb3f92e052a4e45821dec
    Product.findOneAndDelete({_id : mongoose.Types.ObjectId(req.params.id)},function(err, product){
        if(err) return next(err)
        res.send('product deleted successfully');
    })
};
exports.product_details = function(req, res, next){
    //console.log(req.params.id);
    // ID USED FOR TESTING - 5d3bc290ebf78312956d4856
    Product.findById(mongoose.Types.ObjectId(req.params.id),function(err, product){
        if(err) return next(err)
        res.send(product);
    })
}

exports.test = function(req, res){
    console.log("test controller reached successfully!");
};