import mongoose from "mongoose";
const memeSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
  },
  {
    timestamps: true,
  }
);

const Meme = mongoose.model("Meme", memeSchema);

export default Meme;
