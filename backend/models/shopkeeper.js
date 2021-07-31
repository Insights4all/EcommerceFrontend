const mongoose = require("mongoose");
//Schema
const Schema = mongoose.Schema;

const ShopKeeperSchema = new Schema({
  shopName: String,
  bussinessContact: String,
  bussinessAddress: String,
  bussinessInstaID: String,
  bussinessFacebookID: String,
  shopType: String,
  aboutShop: String,
  businessTagLine: String,
  businesslogo: String,
  fullName: String,
  email: String,
  contact: String,
  credentials: {
    bussinessEmail: String,
    password: String,
  },
});

//Model
const Shopkeer = mongoose.model("Shopkeer", ShopKeeperSchema);

module.exports = Shopkeer;
