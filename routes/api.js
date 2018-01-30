const express = require("express");
const router = express.Router();
const db = require("../database/queries")


// returns a list of all records
router.get("/", function(req, res, next) {
  db.user_data_ALL()
  .then(function(data) {
    res.send(data);
  });
});

// creates/inserts a new record
router.post("/", function(req, res, next) {
  db.user_data_NEW_ENTRY(req.body)
  .then(function(data) {
    db.user_data_ALL()
    .then(function() {
      res.send(data);
    });
  });
});

module.exports = router
