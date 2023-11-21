import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      index: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    coverImage: {
      type: String,
      default: "",
    },
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await hash(this.password, 10);
  }
  next();
});
userSchema.methods.comparePassword = async function (password) {
  return await compare(password, this, password);
};
userSchema.methods.accessToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      fullname: this.fullname,
    },
    process.env.JWT_ACCESS_TOKEN,
    { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY }
  );
};
userSchema.methods.refreshToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY }
  );
};
const userModel = mongoose.model("User", userSchema);
export default userModel;
