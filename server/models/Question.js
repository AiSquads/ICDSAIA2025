const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String
  },
  quest: {
    type: String,
    required: true
  },
  ans: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Question", QuestionSchema);
