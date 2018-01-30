const db = require("./connection")

const query = {

  user_data_ALL: function() {
    console.log("get to /");
    return db("user_data")
  },

  user_data_NEW_ENTRY: function(data) {
    console.log(`post to / with ${data}`);
    return db("user_data")
    .insert({ lat:data.lat, lng:data.lng })
  },


}

module.exports = query;
