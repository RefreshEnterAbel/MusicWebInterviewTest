const express = require("express");
const router = express.Router();
const generController = require("../controller/generController");

// gener routing URI
router.get("/", generController.getAllGeners);
router.post("/", generController.addNewGener);
router.delete("/:generId", generController.deleteGener);

module.exports = router;
