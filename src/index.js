import dotenv from "dotenv";
import connectDB from "./db/dbconnect.js";
import app from "./app.js";
dotenv.config({ path: "./env" });
const port = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(port, function () {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed: " + err);
  });
