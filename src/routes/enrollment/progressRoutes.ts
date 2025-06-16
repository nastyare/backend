import express from "express";
import {
  completeLesson,
  getProgress,
} from "../../controllers/enrollment/progressController";
import authMiddleware from "../../middlewares/authMiddleware";

const router = express.Router();
router.use(authMiddleware);

router.post("/:courseId/:lessonId", completeLesson);
router.get("/:courseId", getProgress);

export default router;
