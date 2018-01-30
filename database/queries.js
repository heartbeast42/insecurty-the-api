const db = require("./connection")

module.exports = {

  user_data_ALL: function() {
    return (
      db("user_data")
    )
  },

  // x: "y",
}
