import express from "express";
import { connectDB } from "../src/config/db";
import dotenv from "dotenv";
import authRoutes from "../src/routes/authRoutes";
import userRoutes from "../src/routes/userRoutes";
import courseRoutes from "./routes/courseRoutes";
import tagRoutes from "./routes/tagRoutes";
import favoriteRoutes from "./routes/favoriteRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api", courseRoutes);
app.use("/tags", tagRoutes);
app.use("/favorites", favoriteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
