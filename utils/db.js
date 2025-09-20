import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("mongo connected");
  } catch (error) {
    console.log("connection failed", error);
    process.exit(1);
  }
};

export default db;
