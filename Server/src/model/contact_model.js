import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      lowercase: true,
    },
    Email: {
      type: String,
      required: true,
      lowercase: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      lowercase: true,
    },
    probided_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
export const Contact = mongoose.model("Contact", ContactSchema);
