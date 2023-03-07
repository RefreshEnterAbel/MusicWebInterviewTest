import express from 'express';
import { getAllArtist,addNewArtist, deleteArtist } from "../controller/artistController.js";

const artistRoutes = express.Router();

// album routing URI
artistRoutes.get("/",  getAllArtist);
artistRoutes.post("/", addNewArtist);
artistRoutes.delete("/:artistId", deleteArtist);

export default artistRoutes;
