const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    a: "sangram",
    number: 44,
  };
  res.json(obj);
});
module.exports = router;
