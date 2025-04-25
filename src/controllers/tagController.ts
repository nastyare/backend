import { Request, Response } from "express";
import Tag from "../models/tag";
import Course from "../models/course";
import mongoose from "mongoose";

// Создать тег
const createTag = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const tag = await Tag.create({ name });
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ message: "Ошибка создания тега", error });
  }
};

// Добавить тег к курсу
const addTagToCourse = async (req: Request, res: Response) => {
  try {
    const { courseId, tagId } = req.params;

    // Преобразуем courseId и tagId в ObjectId
    const courseObjectId = new mongoose.Types.ObjectId(courseId.trim()); // Преобразуем courseId
    const tagObjectId = new mongoose.Types.ObjectId(tagId.trim()); // Преобразуем tagId

    // Найти курс
    const course = await Course.findById(courseObjectId);
    if (!course) {
      res.status(404).json({ message: "Курс не найден" });
      return;
    }

    // Найти тег
    const tag = await Tag.findById(tagObjectId);
    if (!tag) {
      res.status(404).json({ message: "Тег не найден" });
      return;
    }

    // Добавляем тег к курсу
    if (!course.tags.includes(tagObjectId)) {
      course.tags.push(tagObjectId);
      await course.save();
    }

    // Добавляем курс к тегу
    if (!tag.courses.includes(courseObjectId)) {
      tag.courses.push(courseObjectId);
      await tag.save();
    }

    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Ошибка добавления тега", error });
  }
};

// Получить все теги
const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(400).json({ message: "Ошибка получения тегов", error });
  }
};

export { createTag, getAllTags, addTagToCourse };
