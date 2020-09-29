const express = require("express");
const server = express();
const projectRoutes = require("./routes/projectRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

server.use("/api/projects", projectRoutes);
server.use("/api/resource", resourceRoutes);
server.use("/api/tasks", taskRoutes);
server.use("/", (req, res) => res.send("We are a go!"));

const PORT = process.env.PORT || 4040;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
