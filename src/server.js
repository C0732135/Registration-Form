const express = require("express");
const app = express();
const port = process.env.Port || 8080;
app.use(express.json()); //Middleware to parse JSON in the request body
app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/sign-in", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`My name is ${name} and age is ${age}`);
});

app.listen(port, () => {
  console.log(`App is up on port ${port}`);
});
