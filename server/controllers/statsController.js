const Stats = require("../models/StatsModel");

exports.getAllStats = async (req, res) => {
  try {
    const stats = await Stats.findAll();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
