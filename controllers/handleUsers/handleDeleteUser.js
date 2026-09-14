const User = require("../../models/userModel");

const handleDeleteUser = async (req, res) => {
    try {
        const { _id } = req.params;

        // Find the user by ID and delete
        const deletedUser = await User.findByIdAndDelete(_id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = handleDeleteUser;