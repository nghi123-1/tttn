exports.createTracking = async (req, res) => {
  try {
    const { user_id, product_id, event_type } = req.body;

    if (!user_id || !product_id || !event_type) {
      return res.status(400).json({
        error: "Thiếu dữ liệu bắt buộc",
      });
    }

    const result = await Tracking.create(req.body);
    res.json(result);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};