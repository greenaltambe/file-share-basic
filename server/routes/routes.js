import express from "express";
import { getImage, uploadImage } from "../controllers/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:id", getImage);

export default router;

// middleware => middleman
// upload -> middleware -> uploadImage()
