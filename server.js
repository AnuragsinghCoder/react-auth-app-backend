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

const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/auth", authRouter);
app.use("/users", userRouter);

const startServer = async () => {
        try {
            // Connect MongoDB
            await connectDB();
            app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        }
        catch (error) {
            console.error("Error starting the server:", error);
            process.exit(1);
        }
    }

startServer();


