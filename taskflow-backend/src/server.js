require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const sequelize = require("./config/db");

// Import models
require("./models/User");
require("./models/Project");
require("./models/Task");

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes 
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/projects", require("./routes/project.routes"));
app.use("/api/tasks", require("./routes/task.routes")); // 👈 task routes here

// DB sync
sequelize.sync({ alter: true }).then(() => {
  console.log("DB Connected & Tables Created");
});

// Test route
app.get("/", (req, res) => {
  res.send("TaskFlow Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

