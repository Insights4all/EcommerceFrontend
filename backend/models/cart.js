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

        name:String,
        color:String,
        userid:String

});

//Model
const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
