
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("user_data", function(table) {
      table.increments("id").primary();
      table.float("lat");
      table.float("lng");
      table.string("created_at");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("user_data")
  ]);
};
