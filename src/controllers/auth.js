const USER = require("../models/user/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// const generateAccessToken = (id) => {
//   const payload = { id };
//   return jwt.sign(payload, secret, { expiresIn: "24h" });
// };

module.exports.signUp = async (req, res) => {
  try {
    //USER schema validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "sign Up is failed", errors });
    }
    const newUser = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 7),
    };
    const addUser = await new USER(newUser);
    await addUser.save();
    res.json({ message: "user successfully added" });
  } catch (error) {
    res.status(400).json({ message: "signup error", error });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email });

  // email !== user.email
  //   ? res.status(400).json({ message: "Email or Password is incorrect" })
  //   : null;
  // console.log("kkkk");

  const checkoutPassword = bcrypt.compareSync(password, user.password);
  !checkoutPassword
    ? res.status(400).json({ message: "Email or Password is incorrect" })
    : null;

  res.status(200).json({ message: "signIn successfully, welcome !" });
};
