const userSchema = require("../models/user/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

module.exports.signUp = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "sign Up is failed", errors });
    }

    // const newUser = {
    //   ...req.body,
    //   password: bcrypt.hashSync(req.body.password, 7),
    // };
    //
    // const addUser = await new userSchema(newUser);
    // await addUser.save();
    // res.json({ message: "user successfully added" });
  } catch (error) {
    res.status(400).json({ message: "signup error" });
  }
};

module.exports.signIn = (req, res) => {
  const userTem = req.body;
  console.log(userTem);
  const user = new userSchema(userTem);
  user.save().then(() => console.log("user is saved"));

  res.status(200).json({ message: "user is saved ?" });
};
