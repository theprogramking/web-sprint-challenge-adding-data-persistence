const express = require("express");
const router = express.Router();
const database = require("../data/db-Config");

// READ
router.get("/", (req, res) => {
  database()
    .select("*")
    .from("resource")
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({
        message: `There was an error getting resource`,
        error: err,
      });
    });
});

// POST
router.post("/", (req, res) => {
  const resourceToPost = req.body;

  database()
    .insert(resourceToPost)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((error) => {
      res.status(200).json({
        message: "There was an error posting to resource.",
        err: error,
      });
    });
});

module.exports = router;
