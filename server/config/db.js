const { Sequelize } = require('sequelize');
require('dotenv').config();
// Khởi tạo kết nối Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false, 
    }
);
// Kiểm tra kết nối
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(' Kết nối MySQL thành công');
    } catch (error) {
        console.error('Lỗi kết nối MySQL:', error);
    }
};
module.exports = { sequelize, connectDB };
