import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

// Ensure CORS is enabled
app.use(cors());

// Use body-parser middleware to handle JSON requests
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check whether user is registered or not using fs.readFile
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Server error." });
    }

    // Get every user from users.json through JSON parsing
    const users = JSON.parse(data);
    // Check if the user is valid or not
    const valid = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!valid) {
      return res.status(400).json({ message: "Invalid username or password." });
    } else {
      return res
        .status(200)
        .json({ message: "You are logged in successfully!" });
    }
  });
});

// Server is listening at PORT?
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
