import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("Error in connection to Mongodb", error.message);
  }
};

export default connectToDb;
