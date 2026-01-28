const Product = require("../models/ProductModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error("PRODUCT ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
