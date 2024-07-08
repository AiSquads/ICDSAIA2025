const express = require("express");
const path = require("path");
const connectDB = require("./database/db");
const Register = require("./models/User");
const Question = require("./models/Question"); // Ensure you have this model
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post("/reg", async (req, res) => {
  try {
    const existingUser = await Register.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = await Register.create(req.body);
    res.status(201).json({ message: "Registration successful", user: newUser });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).send("Error registering user");
  }
});

// Fetch questions route
app.get("/fetchQuestions", async (req, res) => {
  try {
    const questions = await Question.find({});
    console.log("Fetched questions from DB:", questions);
    res.json(questions);
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).json({ message: "Error fetching questions" });
  }
});

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
