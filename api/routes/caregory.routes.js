import express from "express"
import { createCategory } from "../controller/category.controller.js";


const route = express. Router();

router.post("/create", protect, createCategory)

export default router;