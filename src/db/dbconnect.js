import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected...");
  } catch (err) {
    throw err;
  }
};

export default connectDB;
