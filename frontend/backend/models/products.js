
const mongoose = require("mongoose");


//Schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  
  name:String,
  price:Number,
  mileage:Number

});

//Model
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
