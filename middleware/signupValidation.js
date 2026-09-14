const signupValidation = (req, res, next) => {
    const {
        first_name,
        last_name,
        gender,
        job_title,
        age,
        email,
        password
    } = req.body || {};

    if (!first_name || !last_name || !gender || !job_title || !age || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    next();
};

module.exports = signupValidation;