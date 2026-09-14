const User = require("../../models/userModel");

const handleUpdateUser = async (req, res) => {
    try {
        const { _id } = req.params;

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
            !first_name &&
            !last_name &&
            !gender &&
            !job_title &&
            !age &&
            !email &&
            !password
        ) {
            return res.status(400).json({
                message: "At least one field is required to update"
            });
        }

        // Find user by ID
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Update only fields that were provided
        if (first_name) user.first_name = first_name;
        if (last_name) user.last_name = last_name;
        if (gender) user.gender = gender;
        if (job_title) user.job_title = job_title;
        if (age) user.age = age;
        if (email) user.email = email;
        if (password) user.password = password;

        await user.save();

        res.status(200).json({
            message: "User updated successfully",
            user
        });

    } catch (error) {
        console.error("Error updating user:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = handleUpdateUser;