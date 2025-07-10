import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  timestamps: true,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  categorieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categorie",
    required: true,
  },
});

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;
