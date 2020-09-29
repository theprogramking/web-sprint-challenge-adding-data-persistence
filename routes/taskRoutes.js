const express = require("express");
const router = express.Router();
const database = require("../data/db-Config");

// READ
router.get("/", (req, res) => {
  database()
    .select("*")
    .from("task")
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({
        message: `There was an error getting tasks`,
        error: err,
      });
    });
});

// POST
router.post("/", (req, res) => {
  const taskToPost = req.body;

  database()
    .insert(taskToPost)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      res.status(200).json({
        message: "There was an error posting to task.",
        err: error,
      });
    });
});

module.exports = router;
