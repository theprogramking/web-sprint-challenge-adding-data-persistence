const { transaction } = require("../data/db-Config");

exports.up = function (knex) {
  return knex.schema.createTable("projects2", (table) => {
    table.increments();
    table.text("name", 128).notNullable();
    table.text("description", 128);
    table.boolean("completed", false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects2");
};
