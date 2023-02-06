const express = require("express");

const {
  fetchMovies,
  addDeveloper,
  addDeveloperSkills,
  fetchComments,
  fetchUsers,
  fetchUsersComments,
  addUser,
} = require("./controllers/MoviesController");
const { checkdev } = require("./tokenManagement/TokenManagement");

const dcxRoute = express.Router();

// dcxRoute.get("/developers", checkdev, fetchDevelopers);
dcxRoute.get("/movies", fetchMovies);
dcxRoute.get("/usercomments", fetchUsersComments);
dcxRoute.get("/comments", fetchComments);
dcxRoute.post("/addUser", addUser);

// dcxRoute.post("/developers", addDeveloper);
// dcxRoute.post("/developerSkill", addDeveloperSkills);
module.exports = dcxRoute;
