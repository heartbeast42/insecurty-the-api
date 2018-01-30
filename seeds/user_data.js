
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_data").del()
    .then(function () {
      // Inserts seed entries
      return knex("user_data").insert([
        {
          lat: "0",
          lng: "0"
        },
        {
          lat: "35",
          lng: "-105"
        },
        {
          lat: "23",
          lng: "87"
        },
      ]);
    });
};
