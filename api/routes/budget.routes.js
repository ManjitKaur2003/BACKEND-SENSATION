import express from "express";
import { createBudget, getBudgets } from "../controllers/budget.controller.js";
import { protect } from "../utils/protect.js";

const router = express.Router();

router.post("/create", protect, createBudget);
router.get("/get", getBudgets);

export default router;