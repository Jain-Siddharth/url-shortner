const shortid = require("shortid");
const urlModel = require("../models/url");
async function handleGenerateNewShortUrl(req, res) {
  const redirectUrl = req.body?.redirectUrl;
  if (!redirectUrl) {
    return res.status(400).json({ error: "redirectUrl is required" });
  }
  const shortendURL = shortid.generate();
  await urlModel.create({
    shortId: shortendURL,
    redirectUrl: redirectUrl,
    visitHistory: [],
  });
  res.status(201).json({shortId: shortendURL});
}

async function handleGetShortUrl(req, res) {
  const shortId = req.params.shortId;
  const urlData = await urlModel.findOne({ shortId: shortId });
  if (!urlData) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  urlData.visitHistory.push({ timestamp: Date.now() });
  await urlData.save();
  res.status(302).redirect(urlData.redirectUrl);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const urlData = await urlModel.findOne({ shortId: shortId });
  if (!urlData) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  res.status(200).json({ visitCount: urlData.visitHistory.length });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleGetShortUrl,
  handleGetAnalytics
};