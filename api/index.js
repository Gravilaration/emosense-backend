const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express backend!");
});

// Export as handler
module.exports = app;
