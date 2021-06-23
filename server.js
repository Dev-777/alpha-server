const express = require("express");
const app = express();
const routes = require('./routes/auth/auth')
const port = 3000;


import './routes/auth/auth'

app.use('/',routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


