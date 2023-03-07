import express from 'express';
import { getAllGeners, addNewGener, deleteGener } from '../controller/generController.js';

const generRoutes = express.Router();

// gener routing URI
generRoutes.get("/", getAllGeners);
generRoutes.post("/", addNewGener);
generRoutes.delete("/:generId", deleteGener);

export default generRoutes
