const db = require("./connection")

const query = {

  user_data_ALL: function() {
    return (
      db("user_data")
    )
  },

  // x: "y",
}

module.exports = query;
