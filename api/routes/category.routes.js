import express from "express";
import {
  createCategory,
  getCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.post("/", createCategory);
router.post("/create", createCategory);

router.get("/", getCategory);
router.get("/get", getCategory);

router.delete("/delete/:id", deleteCategory);
router.delete("/:id", deleteCategory);

export default router;
