const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Stats = sequelize.define(
  "Stats",
  {
    product_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    views: DataTypes.INTEGER,
    clicks: DataTypes.INTEGER,
    cart_adds: DataTypes.INTEGER,
    purchases: DataTypes.INTEGER,
    conversion_rate: DataTypes.DECIMAL,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: "stats",
    timestamps: false,
  }
);

module.exports = Stats;
