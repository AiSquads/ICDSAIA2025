const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  college: { type: String, required: true }, // Added field
  country: { type: String, required: true }, // Added field
  registeredOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
