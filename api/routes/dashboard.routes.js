import express from "express";
import { getDashboardData } from "../controllers/dashboard.controller.js";
import { protect } from "../utils/protect.js";

const router = express.Router();

router.get("/", protect, getDashboardData);
router.get("/get", protect, getDashboardData);

export default router;
