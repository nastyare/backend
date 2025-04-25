import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI!);
    console.log("mongodb connected");
  } catch (error) {
    console.error("mongodb error: ", error);
    process.exit(1);
  }
};

export { connectDB };
