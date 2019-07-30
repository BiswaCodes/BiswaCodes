var express = require("express");
var router = express.Router();

// routes/products.route.js
const product_Controller = require("../controllers/Product.controllers");

//Sample routes
// To test with "/"
router.get('/',function(req, res){
    res.send("hello from routes.js");
});


router.post('/create', product_Controller.Product_create);

router.get('/:id', product_Controller.product_details);

router.put('/:id/update', product_Controller.product_update);

router.delete('/:id/delete', product_Controller.product_delete);
module.exports = router;
