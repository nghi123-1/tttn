const express = require("express");
const router = express.Router();
const recommendationController = require("../controllers/recommendationController");

router.get("/", recommendationController.getAllRecommendations);
router.post("/", recommendationController.createRecommendation);

module.exports = router;
