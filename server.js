const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes");
const port = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");

app.use(require("morgan")("dev"));
app.use(cors());
dotenv.config();

mongoose.connect(
  process.env.DATABASE_ACCES,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("db connected!")
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
