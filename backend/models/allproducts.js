const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  storeid: String,
  name: String,
  price: Number,
  percentageDiscount: Number,
  discountPrice: Number,
  colors: Array,
  size: Array,
  about: String,
  details: String,
  images: Array,
});

//Model
const allProduct = mongoose.model("allProduct", ProductSchema);

module.exports = allProduct;
