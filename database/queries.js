const db = require("./connection")

const query = {

  user_data_ALL: function() {
    console.log("get to /");
    return db("user_data")
  },

  user_data_NEW_ENTRY: function(data) {
    console.log(`post to / with ${data.lat, data.lng}`);
    return db("user_data")
    .insert({ lat:data.lat, lng:data.lng })
  },

  user_data_DELETE_ENTRY: function(data) {
    console.log(db("user_data").select("timestamp"));
    // return db("user_data")
    // .where("timestamp", )
    // .del()
  }

}

module.exports = query;
