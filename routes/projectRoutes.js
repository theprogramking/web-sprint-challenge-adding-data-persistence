const express = require("express");
const router = express.Router();
const database = require("../data/db-Config");

// READ
router.get("/", (req, res) => {
  database()
    .select("*")
    .from("projects2")
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({
        message: `There was an error getting projects`,
        error: err,
      });
    });
});

// POST
router.post("/", (req, res) => {
  const projectToPost = req.body;

  database()
    .insert(projectToPost)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      res.status(200).json({
        message: "There was an error posting to projects.",
        err: error,
      });
    });
});

module.exports = router;
