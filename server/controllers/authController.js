const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Sai email hoặc mật khẩu",
      });
    }

    const token = jwt.sign(
      { user_id: user.user_id },
      "secret_key",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Đăng nhập thành công",
      token,
      user: {
        user_id: user.user_id,
        email: user.email,
      },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};