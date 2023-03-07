let mongoose = require("mongoose");

let generSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Gener", generSchema);
