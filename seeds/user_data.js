
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_data").del()
    .then(function () {
      // Inserts seed entries
      return knex("user_data").insert([
        {
          // id: 1,
          lat: "0",
          lng: "0"
        },
        {
          // id: 2,
          lat: "35",
          lng: "-105"
        },
        {
          // id: 3,
          lat: "23",
          lng: "87"
        },
      ]);
    });
};
