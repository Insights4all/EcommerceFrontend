const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

// const CartSchema = new Schema({
//     userID:{
//         name:String,
//         color:String
//       }
// });

const CartSchema = new Schema({
  about: String,
  colors: String,
  details: String,
  discountPrice: Number,
  images: Array,
  name: String,
  percentageDiscount: Number,
  price: Number,
  size: String,
  color: String,
  storeid: String,
  userid: String,
  productid: String,
});

//Model
const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
