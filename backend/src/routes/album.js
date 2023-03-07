import express from 'express';
import { getAllAlbum, addNewAlbum, deleteAlbum } from "../controller/albumController.js";
import { upload } from '../helpers/imageMulter.js';

const albumRoutes = express.Router();

// Album routing URI
albumRoutes.get("/", getAllAlbum);
albumRoutes.post("/", upload, addNewAlbum);
albumRoutes.delete("/:albumId", deleteAlbum);

export default albumRoutes;
