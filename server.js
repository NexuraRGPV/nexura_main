const express = require("express");
const cors = require("cors");
const db = require("./db");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

// API to fetch users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "❌ Error fetching users" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
