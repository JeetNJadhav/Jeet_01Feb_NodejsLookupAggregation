const mongoose = require("mongoose");

// const DeveloperSkillsSchema = require("./DeveloperSkillsSchema");
const Schema = mongoose.Schema;

// List of columns for Employee schema

let Movie = new Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  countries: [String],
  released: [Date],
  directors: [String],
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: String,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    lastUpdated: [Date],
  },
});

module.exports = mongoose.model("Movies", Movie);
// const devModel = mongoose.model("Developer", Developer);
// module.exports = { devModel };

// id, Title, Author, Publisher, Date of Publish, Price, ISBN Number
