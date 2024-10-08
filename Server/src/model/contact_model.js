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
    Address: {
      type: String,
      lowercase: true,
    },
    provided_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
export const Contact = mongoose.model("Contact", ContactSchema);
