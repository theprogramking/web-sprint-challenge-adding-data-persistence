exports.up = function (knex) {
  return knex.schema.createTable("task", (table) => {
    table.increments();
    table.text("description", 128).notNullable();
    table.text("notes", 128);
    table.boolean("taskCompleted", false);
    table.int("projectId");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("task");
};
