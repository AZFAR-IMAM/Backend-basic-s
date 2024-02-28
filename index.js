const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send("Hello, this is my home page");
});

app.get("/about", (req, resp) => {
  resp.send("this is about page");
});

app.get("/help", (req, resp) => {
  resp.send("This is a help desk");
});

app.listen(9999);
