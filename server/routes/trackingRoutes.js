const express = require("express");
const router = express.Router();
const trackingController = require("../controllers/trackingController");

router.get("/", trackingController.getAllTracking);
router.post("/", trackingController.createTracking);

module.exports = router;
