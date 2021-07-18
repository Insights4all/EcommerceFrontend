const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  fullname: String,
  username: String,
  contact: Number,
  address: String,
  password: String,
});
UserSchema.plugin(passportLocalMongoose);

//Model
const User = mongoose.model("User", UserSchema);
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;
