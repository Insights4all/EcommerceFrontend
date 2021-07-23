const mongoose = require("mongoose");
//Schema
const Schema = mongoose.Schema;

const ShopKeeperSchema = new Schema({
  
    shopName:String,
    bussinessEmail:String,
    bussinessContact:String,
    bussinessAddress:String,
    bussinessInstaID:String,
    bussinessFacebookID:String,
    fullName:String,
    email:String,
    contact:String,
    password:String,
    confirmPassword:String,
  

});

//Model
const Shopkeer = mongoose.model("Shopkeer", ShopKeeperSchema);

module.exports = Shopkeer;
