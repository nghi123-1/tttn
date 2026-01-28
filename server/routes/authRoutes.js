const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/", authController.getAllUsers);
router.post("/login", authController.login);

module.exports = router;
