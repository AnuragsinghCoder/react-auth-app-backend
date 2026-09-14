const express = require('express');
// const User = require('../models/userModel');

const handleGetAllUsers = require('../controllers/handleUsers/handleGetAllUsers');
const handleGetUser = require('../controllers/handleUsers/handleGetUser');
const handleCreateUser = require('../controllers/handleUsers/handleCreateUser');
const handleUpdateUser = require('../controllers/handleUsers/handleUpdateUser');
const handleDeleteUser = require('../controllers/handleUsers/handleDeleteUser');



const userRouter = express.Router();

userRouter.route("/ping").get((req, res) => {
  res.send("pong");
});

userRouter.route("/")
  .get((req, res) => handleGetAllUsers(req,res));

userRouter.route("/user")
  .post( (req, res) => handleCreateUser(req,res));

userRouter.route("/user/:_id")
  .get((req, res,) => handleGetUser(req,res))
  .patch((req, res) => handleUpdateUser(req,res))
  .delete((req, res) => handleDeleteUser(req,res));

module.exports = userRouter;