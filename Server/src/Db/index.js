import mongoose from "mongoose";
import DB_NAME from "../constant.js";

const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}` // Since your DB name is included in the connection string, no need to append it here
    );

    console.log("Connected On!", ConnectionInstance.connection.host);
  } catch (error) {
    console.log("MongoDB connection failed!", error.message);
  }
};

export default connectDB;
