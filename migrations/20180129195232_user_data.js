
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("user_data", function(table) {
      table.increments("id").primary();
      table.integer("lat");
      table.integer("lng");
      table.timestamp("created_at").defaultTo(knex.fn.now())
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("user_data")
  ]);
};
