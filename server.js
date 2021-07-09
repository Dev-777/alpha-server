const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");

app.use(require("morgan")("dev"));
app.use(cors());

mongoose.connect(
  process.env.DATABASE_ACCES,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("database connected!!!")
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
