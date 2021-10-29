import express from "express";
import {postMeme, getMemes, deleteMeme} from "../controllers/memeController.js"
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.route("/post").post(protect,postMeme);
router.route("/").get(getMemes);
router.route("/:id").delete(protect, deleteMeme);

export default router;