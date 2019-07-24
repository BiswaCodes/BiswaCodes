var mongoose = require("mongoose");
var schema = mongoose.Schema;

let ProductSchema = new schema({
    Name : {type: String, required: true, max: 100},
    price: {type:Number, required: true}
});

//export model
module.exports = mongoose.model("product", ProductSchema);