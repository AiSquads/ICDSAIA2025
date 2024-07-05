// server/index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = "YOUR_MONGODB_URI_HERE";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.post("/register", (req, res) => {
  const { name, email, mobile, whatsapp, college, country } = req.body;

  const newUser = new User({
    name,
    email,
    mobile,
    whatsapp,
    college,
    country
  });

  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

// Server Start
app.listen(port, () => console.log(`Server running on port ${port}`));
