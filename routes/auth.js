const express = require("express");
const router = exports.Router();

router.get("/login", (req, res) => {
  res.status(200).json({
    login: true,
  });
});

module.exports = router;
