import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    default: "guest",
    enum: [
      "guest",
      "user",
      "contributor",
      "reviewer",
      "writer",
      "moderator",
      "administrator",
    ],
  },
  privileges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Privilege",
      required: true,
    },
  ],
});

const Role = mongoose.model("Role", roleSchema);

export default Role;
