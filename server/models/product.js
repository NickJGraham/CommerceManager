const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

var ProductSchema = new mongoose.Schema({
    _id: Number,
    title: {type: String, required: [true, "Title of Product Required!"], minlength: [3, "Must be more than 3 characters!"]},
    qty: {type: Number, required: [true, "Quanitity must be listed!"], min: [0, "Qty cannnot be less than 0!"]},
    price: {type: Number, required: [true, "Price must be listed!"], min: [0, "Price cannot be less than 0!"]}

})

ProductSchema.plugin(AutoIncrement);

mongoose.model("Product", ProductSchema);