const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Order = sequelize.define(
  "Order",
  {
    order_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    user_id: DataTypes.STRING,
    order_date: DataTypes.DATE,
    status: DataTypes.STRING,
    total_amount: DataTypes.DECIMAL,
    order_status: DataTypes.STRING,
  },
  {
    tableName: "orders",
    timestamps: false,
  }
);

module.exports = Order;
