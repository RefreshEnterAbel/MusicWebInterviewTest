import mongoose from "mongoose";

const albumSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  postureImage: {
    type: Object,
    required: true
  },
  artistId: {
    type: String,
    required: true
  },
  generId: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});


export default mongoose.model("Album", albumSchema);
