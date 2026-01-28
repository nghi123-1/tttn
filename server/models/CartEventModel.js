const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const CartEvent = sequelize.define(
  "CartEvent",
  {
    event_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    user_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    event_type: DataTypes.STRING,
    created_at: DataTypes.DATE,
    action: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    timestamp: DataTypes.DATE,
  },
  {
    tableName: "cart_events",
    timestamps: false,
  }
);

module.exports = CartEvent;
