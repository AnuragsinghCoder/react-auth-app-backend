
const User = require("../../models/userModel");

const handleCreateUser = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            gender,
            job_title,
            age,
            email,
            password
        } = req.body;

        // Validate input
        if (
            !first_name ||
            !last_name ||
            !gender ||
            !job_title ||
            !age ||
            !email ||
            !password
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        // Create new user
        const newUser = new User({
            first_name,
            last_name,
            gender,
            job_title,
            age,
            email,
            password
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            user: newUser
        });

    } catch (error) {
        console.error("Error creating user:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = handleCreateUser;