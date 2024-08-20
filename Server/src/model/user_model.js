import mongoose from "mongoose";

const UserShema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      lowercase: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
export const user = mongoose.model("user", UserShema);
