const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  email: String,
  password: String,
});

//Model
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
