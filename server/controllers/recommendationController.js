const Recommendation = require("../models/RecommendationModel");

exports.getAllRecommendations = async (req, res) => {
  try {
    const data = await Recommendation.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRecommendation = async (req, res) => {
  try {
    const result = await Recommendation.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
