var mongoose = require("mongoose");
var schema = mongoose.Schema;

let ProductSchema = new schema({
    first_name : {type: String, required: true, max: 100},
    age: {type:Number, required: true}
});

//export model
module.exports = mongoose.model("product", ProductSchema);