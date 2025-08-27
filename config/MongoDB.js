import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error : ", err);
  }
};

export default connectDB;
