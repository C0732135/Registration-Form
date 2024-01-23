const express = require("express");
const User = require("./models/users");
const app = express();
require("./dataBase/mongoose");
const port = process.env.Port || 8080;
app.use(express.json()); //Middleware to parse JSON in the request body
app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/sign-in", async (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`App is up on port ${port}`);
});
