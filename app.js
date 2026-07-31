import express from "express";
import dotenv from "dotenv";
import authRouter from "./api/routes/auth.routes.js";

const app = express();
// config:
dotenv.config();
//middlewares:
app.use(express.json());


//routes:
app.use("/api/auth", authRouter);

export default app;