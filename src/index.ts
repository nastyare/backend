import express from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import courseRoutes from "./routes/courseRoutes";
import tagRoutes from "./routes/tagRoutes";
import favoriteRoutes from "./routes/favoriteRoutes";
import lessonRoutes from "./routes/lessonRoutes";
import commentRoutes from "./routes/commentRoutes";
import enrollmentRoutes from "./routes/enrollment/enrollmentRoutes";
import progressRoutes from "./routes/enrollment/progressRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/course", courseRoutes);
app.use("/tags", tagRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/lessons", lessonRoutes);
app.use("/comments", commentRoutes);
app.use("/enrollments", enrollmentRoutes);
app.use("/progress", progressRoutes);

app.listen(PORT, () => {
  console.log(`сервер работает на: http://localhost:${PORT}`);
});
