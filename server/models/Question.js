const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
