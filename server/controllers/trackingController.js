const Tracking = require("../models/TrackingModel");

exports.getAllTracking = async (req, res) => {
  try {
    const data = await Tracking.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTracking = async (req, res) => {
  try {
    const result = await Tracking.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
