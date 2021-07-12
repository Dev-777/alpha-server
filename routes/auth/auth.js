const express = require("express");
const router = express.Router();
const controller = require("../../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/signUp",
  [
    check("firstName", "First name can't be empty").notEmpty(),
    check("lastName", "Last  name can't be empty").notEmpty(),
  ],
  controller.signUp
);
router.post("/signIn", controller.signIn);

module.exports = router;
