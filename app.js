const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api", (req, res) => {
  res.send("hello world from api");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("app runing on port 3000");
});
