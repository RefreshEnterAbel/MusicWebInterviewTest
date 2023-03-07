import mongoose from "mongoose";

const artistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model("Artist", artistSchema);
