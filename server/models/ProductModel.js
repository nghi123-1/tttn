const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Product = sequelize.define(
  "products",
  {
    product_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
    },

    category: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.DECIMAL(12, 2),
    },

    brand: {
      type: DataTypes.STRING,
    },

    image_url: {
      type: DataTypes.TEXT,
    },

    stock: {
      type: DataTypes.INTEGER,
    },

    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "products",
    timestamps: false,

    // ⚠️ QUAN TRỌNG
    freezeTableName: true,

    // ⚠️ CHỐNG Sequelize tự tạo id
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Product;
