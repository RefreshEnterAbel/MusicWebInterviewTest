import express from 'express';
import { getAllMusics, addNewMusic, deleteMusic } from '../controller/musicController.js';
import musicUpload from '../helpers/musicMulter.js';

const router = express.Router();

// music routing URI
router.get("/", getAllMusics);
router.post("/", musicUpload, addNewMusic);
router.delete("/:musicId", deleteMusic);

export default router

