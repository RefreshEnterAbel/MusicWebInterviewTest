const express = require("express");
const router = express.Router();
const albumController = require("../controller/albumController");
const imageUpload = require("../../config/imageMulter");

// Album routing URI
router.get("/",  albumController.getAllAlbum);
router.post("/", imageUpload.upload, albumController.addNewAlbum);
router.delete("/:albumId", albumController.deleteAlbum);

module.exports = router;
