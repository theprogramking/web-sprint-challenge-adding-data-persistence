exports.seed = function (knex) {
  return knex("projects2")
    .truncate()
    .then(function () {
      return knex("projects2").insert([
        { id: 1, name: "Get to Mars" },
        { id: 2, name: "Get to Pluto?" },
      ]);
    });
};
