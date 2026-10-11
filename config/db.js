import mongoose from "mongoose";

export const db = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGO_URL;
    if (!mongoUri) {
      throw new Error("MongoDB connection string is missing in .env (MONGO_URI or MONGO_URL)");
    }
    await mongoose.connect(mongoUri);
    console.log("database connected");
  } catch (err) {
    console.log("Database connection error:", err.message);
    process.exit(1);
  }
};
