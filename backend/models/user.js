const mongoose = require("mongoose");


//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  fullName: String,
  contact: Number,
  password: String,
  email:String
});

//Model
const User = mongoose.model("User", UserSchema);


module.exports = User;
