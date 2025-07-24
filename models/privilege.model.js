import mongoose from "mongoose";

const privilegeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

privilegeSchema.pre(
  "findByIdAndDelete",
  { document: true, query: false },
  async function (next) {
    try {
      const privilegeId = this._id;

      await mongoose
        .model("Role")
        .updateMany(
          { privileges: privilegeId },
          { $pull: { privileges: privilegeId } }
        );

      next();
    } catch (err) {
      next(err);
    }
  }
);

const Privilege = mongoose.model("Privilege", privilegeSchema);

export default Privilege;
