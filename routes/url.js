const express = require("express");
const router = express.Router();
const { handleGenerateNewShortUrl, handleGetShortUrl, handleGetAnalytics } = require("../controllers/url");

// Route to create a new short URL
router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleGetShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;