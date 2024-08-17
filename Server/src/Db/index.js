import mongoose from "mongoose";
import DB_NAME from "../constant.js";
const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log("Connected On !", ConnectionInstance.connection.host);
  } catch (error) {
    console.log("Mongo Db connection Is Failed !!!", error.message);
  }
};

export default connectDB;
