const db = require("./connection")

const query = {

  user_data_ALL: function() {
    console.log("get to /");
    return db("user_data")
  },

  user_data_NEW_ENTRY: function(data) {
    console.log(`post to / with ${data.lat, data.lng}`);
    console.log(Date.now());
    let now = Date.now()
    return db("user_data")
    .insert({
      lat:data.lat,
      lng:data.lng,
      created_at: now
    })
  },

  user_data_DELETE_ENTRY: function(data) {
    return db("user_data")
    .where("created_at", "created_at" >= "created_at" + 60)
    .del()
  }
}

module.exports = query;
