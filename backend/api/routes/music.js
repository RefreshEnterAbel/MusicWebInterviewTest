const express = require("express");
const router = express.Router();
const musicController = require("../controller/musicController");
const musicUpload = require("../../config/musicMulter");

// music routing URI
router.get("/",  musicController.getAllMusics);
router.post("/", musicUpload.upload, musicController.addNewMusic);
router.delete("/:musicId", musicController.deleteMusic);

module.exports = router;
