const CartEvent = require("../models/CartEventModel");

exports.getCartEvents = async (req, res) => {
  try {
    const data = await CartEvent.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
