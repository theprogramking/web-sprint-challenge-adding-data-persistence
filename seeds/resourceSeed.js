exports.seed = function (knex) {
  return knex("resource")
    .truncate()
    .then(function () {
      return knex("resource").insert([
        { id: 1, name: "Resource 1" },
        { id: 2, name: "Resource 2" },
      ]);
    });
};
