import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );

    console.log("Connected!", ConnectionInstance.connection.host);
  } catch (error) {
    console.log("Mongo Db connection Is Failed !!!", error.message);
  }
};

export default connectDB;
