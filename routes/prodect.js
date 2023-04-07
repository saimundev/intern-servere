import express from "express";
import { createProdect, homeProdect, prodectById, prodectCategory } from "../controllers/prodect.js";

const router = express.Router();

router.post("/create-prodect", createProdect);
router.get("/get-catprodect/:category", prodectCategory);
router.get("/get-singleprodect/:id", prodectById);
router.get("/home-prodect/:category", homeProdect);

export default router;
