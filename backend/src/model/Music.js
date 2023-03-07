import mongoose from "mongoose";

const musicSchema = mongoose.Schema({
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

export default mongoose.model("Music", musicSchema);
