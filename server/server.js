const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Để đọc được dữ liệu JSON gửi lên [cite: 180]

// Gọi hàm kết nối Database
connectDB();

// Chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại port ${PORT}`);
});