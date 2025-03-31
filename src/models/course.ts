import mongoose, { Document, Schema } from "mongoose";
import slugify from "slugify";

export enum CourseLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
}

export interface ICourse extends Document {
  title: string;
  slug: string;
  description?: string;
  price: number;
  image: string;
  category: string;
  level: CourseLevel;
  published: boolean;
  author: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be positive"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  level: {
    type: String,
    enum: Object.values(CourseLevel),
    default: CourseLevel.BEGINNER,
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Author is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

courseSchema.pre<ICourse>("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export const Course = mongoose.model<ICourse>("Course", courseSchema);
