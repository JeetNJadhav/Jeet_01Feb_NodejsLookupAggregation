const mongoose = require("mongoose");
const UsersSchema = require("../models/UsersSchema");
// const { devSkill } = require("../models/DeveloperSkillsSchema");
// const { devModel } = require("../models/DevelopersSchema");
// const { devModel } = require("../models/DeveloperSkillsSchema");
// const { devSkill } = require("../models/DevelopersSchema");
// const devModel = require("../models/MoviesSchema");
// const devSkill = require("../models/");
const {
  getMovies,
  addDev,
  addDevSkill,
  getComments,
  getUsers,
  getUserComments,
  newUser,
} = require("../services/MoviesServices");

const fetchMovies = async (req, res) => {
  const devs = await getMovies();

  return res.status(200).json({
    message: devs,
  });
};
const fetchUsersComments = async (req, res) => {
  const devs = await getUserComments();

  return res.status(200).json({
    message: devs,
  });
};
const fetchComments = async (req, res) => {
  const devs = await getComments();

  return res.status(200).json({
    message: devs,
  });
};

const addUser = async (req, res) => {
  let user = new UsersSchema({
    // _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const resp = await newUser(user);
  console.log("resp", resp);
  return res.status(200).json({ message: resp });
};

module.exports = {
  fetchMovies,
  fetchUsersComments,
  fetchComments,
  addUser,
};
