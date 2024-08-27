import mongoose from "mongoose";
import { user } from "./user_model";

const ContactSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
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
    probideby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
export default Conatct = mongoose.model("Conatct", ContactSchema);
