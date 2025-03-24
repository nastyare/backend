import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.URI;
  if (!uri) {
    console.error("uri не задан в .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB успешно подключён.");
  } catch (error) {
    console.error("Ошибка при подключении к MongoDB:", error);
    process.exit(1);
  }
};
