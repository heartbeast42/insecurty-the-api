const express = require("express");
const router = express.Router();
const db = require("../database/queries")

router.get("/", function(req, res, next) {
  console.log("get to /");
  db.query.user_data_ALL()
  .then(function(data) {
    res.send(data);
  });
});

module.exports = {
  router
};
