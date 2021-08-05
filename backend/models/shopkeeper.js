const mongoose = require("mongoose");
//Schema
const Schema = mongoose.Schema;

const ShopKeeperSchema = new Schema({
  shopName: String,
  bussinessAddress: String,
  bussinessContact: Number,
  bussinessInstaID: String,
  bussinessFacebookID: String,
  shopType: String,
  aboutShop: String,
  businessTagLine: String,
  businesslogo: String,
  fullName: String,
  email: String,
  contact: Number,
  shopEmail: String,
  shoppassword: String,
});

//Model
const Shop = mongoose.model("Shop", ShopKeeperSchema);

module.exports = Shop;
