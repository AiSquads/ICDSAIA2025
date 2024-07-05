// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true
  },
  whatsapp: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
