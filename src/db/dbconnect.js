import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
