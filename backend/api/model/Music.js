let mongoose = require("mongoose");

let musicSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  music: {
    type: Object,
    required: true
  },
  albumId: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Music", musicSchema);
