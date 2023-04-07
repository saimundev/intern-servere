import express from "express";
import { createCategory, getCategory, randomCategory } from "../controllers/category.js";

const router =express.Router();

router.post("/create-category",createCategory)
router.get("/get-category",getCategory)
router.get("/random-category",randomCategory)



export default router;