const User = require("../../models/userModel");

const handleGetUser = async (req, res) => {
    try {
        const { _id } = req.params;

        // Validate input
        if (!_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Check if user exists
        const existingUser = await User.findById(_id);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user: existingUser });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = handleGetUser;