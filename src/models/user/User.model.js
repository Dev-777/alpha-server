const mongoose = require("mongoose");
const USER = new mongoose.Schema({
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
  roles: [{ type: String, ref: "user" }],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", USER);
