const express = require("express");
const path = require("path");
const connectDB = require("./database/db");
const Register = require("./models/User");
const Question = require("./models/Question");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 80;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Registration Route
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

// Fetch FAQ questions route
app.get("/faq", async (req, res) => {
  try {
    const questions = await Question.find({});
    // console.log("Fetched questions from DB:", questions);
    res.json(questions);
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).json({ message: "Error fetching questions" });
  }
});

// Submit a new FAQ question route
app.post("/faq", async (req, res) => {
  const { name, email, mobile, query } = req.body;
  try {
    const newQuestion = new Question({
      name,
      email,
      mobile,
      quest: query,
      ans: "Awaiting response" // Default answer for new questions
    });
    await newQuestion.save();
    // console.log("New question saved to DB:", newQuestion);
    res.status(201).json({ message: "Question submitted successfully" });
  } catch (err) {
    console.error("Error submitting question:", err);
    res.status(500).json({ message: "Error submitting question" });
  }
});

// Update FAQ answer route
app.put("/faq/:id", async (req, res) => {
  const { id } = req.params;
  const { ans, respondent } = req.body;

  try {
    const question = await Question.findByIdAndUpdate(
      id,
      { ans, respondent },
      { new: true }
    );

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    console.log("Question updated:", question);
    res.json({ message: "Question answered successfully", question });
  } catch (err) {
    console.error("Error updating question:", err);
    res.status(500).json({ message: "Error updating question" });
  }
});

// Delete FAQ question route
app.delete("/faq/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const question = await Question.findByIdAndDelete(id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json({ message: "Question deleted successfully" });
  } catch (err) {
    console.error("Error deleting question:", err);
    res.status(500).json({ message: "Error deleting question" });
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
