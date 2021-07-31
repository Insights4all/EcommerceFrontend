const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  storeId: Number,
  name: String,
  price: Number,
  percentageDiscount: Number,
  discountPrice: Number,
  colors: Object,
  size: Object,
  about: String,
  details: String,
  images: String,
  stock: Number,
  mileage: Number,
});

//Model
const Product = mongoose.model("allProducts", ProductSchema);

module.exports = allProducts;
