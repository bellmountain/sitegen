const express = require("express"),
  { WebSocketServer } = require("ws"),
  app = express(),
  path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));
console.log(path.join(__dirname, "dist"));
const refresh = new WebSocketServer({
  port: 3005,
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
