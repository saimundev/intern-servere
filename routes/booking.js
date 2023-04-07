import express from "express";
import { createBooking } from "../controllers/booking.js";
const router =express.Router();

router.post("/create-booking",createBooking)




export default router;