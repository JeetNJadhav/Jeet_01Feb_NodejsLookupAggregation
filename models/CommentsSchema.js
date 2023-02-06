const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Comments = new Schema({
  name: String,
  email: String,
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movies",
  },
  text: String,
  date: [Date],
});

module.exports = mongoose.model("Comments", Comments);
