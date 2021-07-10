const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes");
const port = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");

const signUp = require('./models/user/User.model')

app.use(require("morgan")("dev"));
app.use(cors());
dotenv.config();


const user= {
  'firstName': 'test first name',
  'lastName': 'last name test ',
  'email': 'email test ',
  'password': '111111',
}

const newUser = new signUp(user)


mongoose.connect(
  process.env.DATABASE_ACCES,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => newUser.save()
);




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
