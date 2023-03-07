import mongoose from "mongoose";

const generSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model("Gener", generSchema);
