const movieModel = require("../models/MoviesSchema");
const commentsModel = require("../models/CommentsSchema");
// const { devModel } = require("../models/DeveloperSkillsSchema");
// const { devModel } = require("../models/DevelopersSchema");
const { generateToken } = require("../tokenManagement/TokenManagement");
const UsersSchema = require("../models/UsersSchema");

const getMovies = async () => {
  let data = await movieModel
    .find()
    // .populate("skills")
    .skip(0)
    .limit(1)
    .then((result) => {
      console.log("result--->", result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};
const getUserComments = async () => {
  let data = await UsersSchema.aggregate([
    {
      $lookup: {
        from: "comments",
        let: { abc: "$name", pqr: "$email" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [{ $eq: ["$$pqr", "$email"] }],
              },
            },
          },
        ],
        as: "data",
      },
    },
  ]).limit(1);

  return data;
};

const getComments = async () => {
  let data = await commentsModel
    .find()
    // .populate("movie_id")
    .skip(0)
    .limit(10)
    .then((result) => {
      console.log("result--->", result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

const newUser = async (user) => {
  const data = await user
    .save()
    .then((result) => {
      console.log("result", result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

module.exports = { getMovies, getComments, getUserComments, newUser };
