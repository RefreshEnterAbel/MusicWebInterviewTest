const express = require("express");
const router = express.Router();
const artistController = require("../controller/artistController");

// album routing URI
router.get("/",  artistController.getAllArtist);
router.post("/", artistController.addNewArtist);
router.delete("/:artistId", artistController.deleteArtist);

module.exports = router;
