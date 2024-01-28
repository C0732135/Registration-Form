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
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.send("User already exists with this email id.");
  } else {
    user = await new User(req.body);
    if (req.body.password1 !== req.body.password2) {
      return res.send("Password doesn't match.");
    } else {
      try {
        await user.save();
        res.send(user);
      } catch (error) {
        res.send(error);
      }
    }
  }
});

app.get("/login", async (req, res) => {
  const username = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: username, password1: password }); //will send id if true
  console.log(user);
  if (user) {
    res.send(`You are logged-in with: ${user}`);
  } else {
    res.send("Email or password is invalid!");
  }
});

app.listen(port, () => {
  console.log(`App is up on port ${port}`);
});
