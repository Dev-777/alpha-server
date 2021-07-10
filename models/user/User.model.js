const mongoose = require("mongoose");
const signUp = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
});

module.exports = mongoose.model("user", signUp);
