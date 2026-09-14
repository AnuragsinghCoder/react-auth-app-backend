const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.use("/auth", authRouter);
app.use("/users", userRouter);

// Connect to MongoDB
connectDB()
    .then(() => {
        console.log("Database ready");
    })
    .catch((error) => {
        console.error("Database connection failed:", error.message);
    });

module.exports = app;