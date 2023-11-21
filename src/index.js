import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbconnect.js";
dotenv.config({ path: "./env" });
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log(`app running on port ${port}`);
  connectDB();
});
