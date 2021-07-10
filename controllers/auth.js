const userSchema = require("../models/user/User.model");
module.exports.signIn = (req, res) => {
  const userTem = req.body;
  console.log(userTem);
  const user = new userSchema(userTem);
  user.save().then(() => console.log("user is saved"));

  res.status(200).json({ message: "user is saved ?" });
};

module.exports.signUp = async (req, res) => {
  try {
    const addUser = await new userSchema(req.body);
    await addUser.save();
    res.json({ message: "user successfully added" });
  } catch (e) {
    res.status(400).json({ message: "signup error" });
  }

  // res.status(200).json({
  //   register: {
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //     password: req.body.password,
  //   },
  // });
};
