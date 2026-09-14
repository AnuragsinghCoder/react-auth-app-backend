const express = require('express');
const { sign } = require('jsonwebtoken');
const signupValidation = require('../middleware/signupValidation');
const loginValidation = require('../middleware/loginValidation');
const handleSignup = require('../controllers/handleAuth/handleSignup');
const handleLogin = require('../controllers/handleAuth/handleLogin');
const checkAuth = require('../controllers/handleAuth/checkAuth');

const authRouter = express.Router();



authRouter.route("/ding" ).get(checkAuth,(req, res) => {
  res.send("dong");
});

authRouter.route("/signup").post(signupValidation, handleSignup);
authRouter.route("/login").post(loginValidation, handleLogin);



module.exports = authRouter;