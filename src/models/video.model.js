import { compare, hash } from "bcryptjs";
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
const VideoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

VideoSchema.plugin(aggregatePaginate);

const VideoModel = mongoose.model("Video", VideoSchema);

export default VideoModel;
