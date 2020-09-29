exports.up = function (knex) {
  return knex.schema.createTable("resource", (table) => {
    table.increments();
    table.text("name", 128).notNullable();
    table.text("description", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resource");
};
