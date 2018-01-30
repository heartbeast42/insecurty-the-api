
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("user_data", function(table) {
      table.increments("id").primary();
      table.string("lat");
      table.string("lng");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("user_data")
  ]);
};
